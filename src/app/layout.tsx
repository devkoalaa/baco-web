'use client'
import { ThemeProvider } from '@/components/theme-provider'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { AlertCircle, Banknote, Box, Users2 } from 'lucide-react'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode, useState } from 'react'
import '../app/globals.css'
import { cn } from '../lib/utils'
import { AccountSwitcher } from './mail/components/account-switcher'
import { Nav } from './mail/components/nav'
import { accounts } from './mail/data'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children: children,
}: Readonly<{
  children: ReactNode
}>) {
  const [defaultCollapsed, setDefaultCollapsed] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const defaultLayout = [265, 440, 655]
  const navCollapsedSize = 4
  const [painel, setPainel] = useState(true)

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <TooltipProvider delayDuration={0}>
              <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                  document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                    sizes,
                  )}`
                }}
                className="h-full max-h-[800px] items-stretch"
              >
                <ResizablePanel
                  defaultSize={defaultLayout[0]}
                  collapsedSize={navCollapsedSize}
                  collapsible={true}
                  minSize={15}
                  maxSize={20}
                  onCollapse={(collapsed: any) => {
                    setIsCollapsed(collapsed)
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                      collapsed,
                    )}`
                  }}
                  className={cn(
                    isCollapsed &&
                      'min-w-[50px] transition-all duration-300 ease-in-out',
                  )}
                >
                  <div
                    className={cn(
                      'flex h-[52px] items-center justify-center',
                      isCollapsed ? 'h-[52px]' : 'px-2',
                    )}
                  >
                    <AccountSwitcher
                      isCollapsed={isCollapsed}
                      accounts={accounts}
                    />
                  </div>
                  <Separator />
                  <Nav
                    isCollapsed={isCollapsed}
                    links={[
                      {
                        title: 'Produtos',
                        label: '128',
                        icon: Box,
                        variant: 'default',
                      },
                      {
                        title: 'Vendas',
                        label: '0',
                        icon: Banknote,
                        variant: 'ghost',
                      },
                    ]}
                  />
                  <Separator />
                  <Nav
                    isCollapsed={isCollapsed}
                    links={[
                      {
                        title: 'Usuários',
                        label: '2',
                        icon: Users2,
                        variant: 'ghost',
                      },
                      {
                        title: 'Updates',
                        label: '0',
                        icon: AlertCircle,
                        variant: 'ghost',
                      },
                    ]}
                  />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                  {children}
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[2]}>
                  {/* <MailDisplay mail={mails} /> */}
                </ResizablePanel>
              </ResizablePanelGroup>
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
