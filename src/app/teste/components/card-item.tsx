import * as React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function CardItem() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Tabaco</CardTitle>
        <CardDescription>Tabaco bolado grande</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-1">
          <div className="flex flex-col space-y-1.5">
            <Image
              className="self-center"
              width={200}
              height={200}
              src={'https://github.com/devkoalaa.png'}
              alt="Avatars"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Nome</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Editar</Button>
      </CardFooter>
    </Card>
  )
}
