'use client'


import UserSkills from '@/components/UserSkills'
import UserSkillProvider from '@/context/UserSkillProvider'

// Quando essa lista vier do backend, já deve desconsiderar as skills do usuário atual

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SearchSkill from '@/components/SearchSkill'


export default function Home() {

  return (
    <UserSkillProvider>
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
        <SearchSkill />
      </main>
    </UserSkillProvider>
  )
}
