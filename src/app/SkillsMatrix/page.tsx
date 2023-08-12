'use client'

import { FormEvent, use, useState } from 'react'
import Image from 'next/image'

import SkillsList, { SkillList, Skill } from '@/components/SkillsList'
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/24/outline'
import UserSkills from '@/components/UserSkills'

import skillsJson from '../../assets/skillsTable.json'

const { list }: SkillList = skillsJson

// interessado, aprendiz, experiente, multiplicador

export default function Home() {
  const [searchSkillInput, setSearchSkillInput] = useState('')
  const [resultList, setResultList] = useState<SkillList>({ list })
  const [isExpanded, setIsExpanded] = useState(false)

  function handleSearchSkillInput(value: string) {
    setSearchSkillInput(value)
  }
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
    <main className="grid grid-cols-4">
      <div
        className={`${isExpanded && 'col-span-2'
          } relative flex h-full flex-col items-center justify-start rounded-e-3xl bg-zinc-700`}
      >
        <Image
          src="https://github.com/zatiro.png"
          width={200}
          height={200}
          alt="Perfil"
          className="mb-4 mt-8 rounded-full shadow-lg"
        />
        <h1 className="text-xl font-bold text-white">Tiago Cardoso</h1>
        <h2 className="text-lg font-medium text-sky-500">
          Desenvolvedor de Software
        </h2>
        <UserSkills />

        <button
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-zinc-800"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronDoubleLeftIcon
              width={20}
              className="text-white"
            ></ChevronDoubleLeftIcon>
          ) : (
            <ChevronDoubleRightIcon
              width={20}
              className="text-white"
            ></ChevronDoubleRightIcon>
          )}
        </button>
      </div>

      <div
        className={`${isExpanded ? 'col-span-2' : 'col-span-3'
          } flex flex-col items-center justify-start p-24 transition`}
      >
        <form
          onSubmit={handleSearch}
          className="mb-2 flex flex-row items-center gap-2"
        >
          <input
            type="text"
            className="block w-[20rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Está buscando qual habilidade?"
            onChange={(e) => handleSearchSkillInput(e.target.value)}
          />
          <button
            type="submit"
            className="h-8 w-[5rem] rounded-md bg-sky-700 text-white transition hover:bg-sky-800"
          >
            Buscar
          </button>
        </form>

        {searchSkillInput && resultList.list.length > 0 ? (
          <SkillsList list={resultList.list} />
        ) : (
          <SkillsList list={list} />
        )}
      </div>
    </main>
  )
}
