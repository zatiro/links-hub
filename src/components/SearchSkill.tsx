import { useId, useState, FormEvent } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { useUserSkillContext } from '@/context/UserSkillProvider'
import SkillsList, { Skill } from './SkillsList'


export default function SearchSkill() {

  const { allSkillsList } = useUserSkillContext()

  const [searchSkillInput, setSearchSkillInput] = useState('')
  const [resultList, setResultList] = useState<Skill[]>([])

  const inputId = useId()

  function handleSearch(e: FormEvent<HTMLFormElement> | undefined = undefined) {
    e?.preventDefault()
    const results: Skill[] = []
    const searchFor = 'name'

    for (let i = 0; i < allSkillsList.length; i++) {
      if (
        allSkillsList[i][searchFor]
          .toLowerCase()
          .includes(searchSkillInput.toLowerCase())
      ) {
        results.push(allSkillsList[i])
      }
    }

    setResultList(results)
  }

  return (
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
        {searchSkillInput && resultList.length > 0 ? (
          <SkillsList list={resultList} />
        ) : (
          <SkillsList list={allSkillsList} />
        )}
      </CardContent>
    </Card>
  )
}