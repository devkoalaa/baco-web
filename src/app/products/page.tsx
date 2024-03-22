'use client'
// import { Metadata } from 'next'
import { Search } from 'lucide-react'
import { ProductsList } from './components/product-list'
import { ProductDisplay } from '@/app/products/components/product-display'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { products } from './data'
import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from '@/components/ui/resizable'
import { useState } from 'react'
import { cn } from '@/lib/utils'

// export const metadata: Metadata = {
//   title: 'Produtos',
//   description: 'Produtos.',
// }

export default function ProductsPage() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const defaultLayout = [265, 440, 655]
  const navCollapsedSize = 4
  // const navCollapsedSize = false

  return (
    <ResizablePanelGroup
      direction="horizontal"
      // onLayout={(sizes: number[]) => {
      //   document.cookie = `react-resizable-panels:layout=${JSON.stringify(
      //     sizes,
      //   )}`
      // }}
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
        <Tabs defaultValue="all">
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Produtos</h1>
            <TabsList className="ml-auto">
              <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="text-zinc-600 dark:text-zinc-200"
              >
                Pouco estoque
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <TabsContent value="all" className="m-0">
            <ProductsList />
            <ProductDisplay
              product={products.find((item) => item.id === '6c84fb90-12c4-11e1-840d-7b25c5ee775a') || null}
            />
          </TabsContent>
          <TabsContent value="unread" className="m-0">
            <ProductsList />
          </TabsContent>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]}>
        <ProductDisplay
          product={products.find((item) => item.id === '6c84fb90-12c4-11e1-840d-7b25c5ee775a') || null}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  )

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center px-4 py-2">
        <h1 className="text-xl font-bold">Produtos</h1>
        <TabsList className="ml-auto">
          <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
            Todos
          </TabsTrigger>
          <TabsTrigger
            value="unread"
            className="text-zinc-600 dark:text-zinc-200"
          >
            Pouco estoque
          </TabsTrigger>
        </TabsList>
      </div>
      <Separator />
      <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>
      <TabsContent value="all" className="m-0">
        <ProductsList />
        <ProductDisplay
          product={products.find((item) => item.id === '6c84fb90-12c4-11e1-840d-7b25c5ee775a') || null}
        />
      </TabsContent>
      <TabsContent value="unread" className="m-0">
        <ProductsList />
      </TabsContent>
    </Tabs>
  )
}
