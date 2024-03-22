'use client'
import { ThemeProvider } from '@/components/theme-provider'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AlertCircle, Banknote, Box, Users2 } from 'lucide-react'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode, useState } from 'react'
import '../app/globals.css'
import { cn } from '../lib/utils'
import { AccountSwitcher } from '@/components/account-switcher'
import { Nav } from '@/components/nav'
import { accounts } from '@/utils/data'
import { getCookie } from '@/utils/getCookie'
import { usePathname  } from 'next/navigation'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children: children,
}: Readonly<{
  children: ReactNode
}>) {
  const navCollapsedSize = 4
  const layoutCookie = JSON.parse(getCookie('react-resizable-panels:layout'))
  const collapsedCookie = false
  console.log('collapsedCookie', collapsedCookie)
  console.log('collapsedCookie typeof', typeof collapsedCookie)
  const defaultLayout = layoutCookie
  const defaultCollapsed = false
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  
  console.log('AAAAAAAAAAAAAAAAAAA', usePathname())

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
          <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
              direction="horizontal"
              onLayout={(sizes: number[]) => {
                // console.log(sizes)
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
                      href: '/products',
                      icon: Box,
                      variant: usePathname() == '/products' ? 'default' : 'ghost',
                    },
                    {
                      title: 'Vendas',
                      label: '0',
                      href: '/dashboard',
                      icon: Banknote,
                      variant: usePathname() == '/dashboard' ? 'default' : 'ghost',
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
                      href: '#',
                      icon: Users2,
                      variant: 'ghost',
                    },
                    {
                      title: 'Updates',
                      label: '0',
                      href: '#',
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
            </ResizablePanelGroup>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
