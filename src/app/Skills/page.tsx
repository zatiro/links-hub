'use client'

import { FormEvent, useId, useState } from 'react'

import SkillsList, { SkillList, Skill } from '@/components/SkillsList'
import UserSkills from '@/components/UserSkills'

// Quando essa lista vier do backend, já deve desconsiderar as skills do usuário atual
import skillsJson from '../../assets/skillsTable.json'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
const { list }: SkillList = skillsJson

export default function Home() {
  const [searchSkillInput, setSearchSkillInput] = useState('')
  const [resultList, setResultList] = useState<SkillList>({ list })

  const inputId = useId()

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const results: Skill[] = []
    const searchFor = 'name'

    for (let i = 0; i < list.length; i++) {
      if (
        list[i][searchFor]
          .toLowerCase()
          .includes(searchSkillInput.toLowerCase())
      ) {
        results.push(list[i])
      }
    }

    setResultList({ list: results })
  }

  return (
    <main className='grid gap-2 md:grid-cols-1 lg:grid-cols-2'>
      <Card className='h-fit bg-primary-foreground'>
        <CardHeader className='flex flex-row items-center gap-x-4'>
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/zatiro.png" />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <CardTitle>Tiago Cardoso</CardTitle>
            <CardDescription>Desenvolvedor de Software</CardDescription>
          </div>

        </CardHeader>
        <CardContent>
          <UserSkills />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <label
            htmlFor={inputId}
            className="mb-2 w-full text-center"
          >
            Qual habilidade está buscando?
          </label>
          <form
            onSubmit={handleSearch}
            className="mb-2 flex flex-row items-center gap-2"
          >
            <Input
              id={inputId}
              value={searchSkillInput}
              onChange={(e) => setSearchSkillInput(e.target.value)}
              placeholder="Ex.: react"
            />

            <Button className="rounded-md" type="submit" variant="default">
              Buscar
            </Button>
          </form>
        </CardHeader>
        <CardContent>
          {searchSkillInput && resultList.list.length > 0 ? (
            <SkillsList list={resultList.list} />
          ) : (
            <SkillsList list={list} />
          )}
        </CardContent>
      </Card>

    </main>
  )
}
