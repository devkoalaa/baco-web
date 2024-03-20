import { Metadata } from 'next'
import { Search } from 'lucide-react'
import { ProductsList } from './components/products-list'
import { products } from './data'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { mails } from '../mail/data'

export const metadata: Metadata = {
  title: 'Teste',
  description: 'Example dashboard app built using the components.',
}

export default function ProductsPage() {
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
      </TabsContent>
      <TabsContent value="unread" className="m-0">
        <ProductsList />
      </TabsContent>
    </Tabs>
  )
}
