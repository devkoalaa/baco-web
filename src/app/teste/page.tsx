import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teste',
  description: 'Example dashboard app built using the components.',
}

export default function TestePage() {
  return (
    <div className="flex-1 justify-center items-center p-10">
      <Card className="w-5/12">
        <CardContent className="mt-5">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Nome do item" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Categoria</Label>
                <Select>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="0">Fumável</SelectItem>
                    <SelectItem value="1">Acessório</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
