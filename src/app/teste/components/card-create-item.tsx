import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function CardCreateItem() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Criar item</CardTitle>
        <CardDescription>
          Digite o nome e selecione uma categoria
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
