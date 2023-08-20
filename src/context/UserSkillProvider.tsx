import { useState, createContext, useContext } from "react";

import { Skill, SkillList } from "@/components/SkillsList";
import { SkillLevelOptions } from "@/components/SkillLevelRadio";

import userSkillsTable from '../assets/userSkillsTable.json'
// Quando for buscar todas as habilidades, deve remover as que o usuário já tem
import allSkillsTable from '../assets/skillsTable.json'

const { list: userSkillJson }: SkillList = userSkillsTable
const { list: allSkillsJson }: SkillList = allSkillsTable

type changeSkillLevelProps = {
  skill: Skill
  toLevel: SkillLevelOptions
}

type groupedUserSkills = { [level: string]: Skill[] }

type UserSkillContext = {
  userSkillList: Skill[],
  allSkillsList: Skill[],
  groupedUserSkills: groupedUserSkills
  changeSkillLevel: ({ skill, toLevel }: changeSkillLevelProps) => void
}

type UserSkillProviderProps = {
  children: React.ReactNode
}

const UserSkillContext = createContext<UserSkillContext>({
  userSkillList: [],
  allSkillsList: [],
  groupedUserSkills: {},
  changeSkillLevel: () => { }
})

function groupJsonBy(listToGroup: Skill[] = userSkillJson) {
  const grouped = listToGroup.reduce((acc, cur) => {
    const { level, ...rest } = cur;
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(cur);
    return acc;
  }, {});

  const result = Object.entries(grouped).map(([key, value]) => ({ [key]: value }))

  return (result)
}

export const useUserSkillContext = () => useContext(UserSkillContext)

export default function UserSkillProvider({ children }: UserSkillProviderProps) {
  const [userSkillList, setUserSkillList] = useState<Skill[]>(userSkillJson)
  const [allSkillsList, setAllSkillsList] = useState<Skill[]>(allSkillsJson)
  const [groupedUserSkills, setGroupedUserSkills]: groupedUserSkills =
    useState<groupedUserSkills>(groupJsonBy(userSkillJson))

  function changeSkillLevel({ skill, toLevel }: changeSkillLevelProps) {
    console.log(skill, toLevel)
    let resultUser: Skill[] = []
    let resultAll: Skill[] = []

    // Remove a habilidade selecionada
    // Independentemente se for uma operação de remoção ou não
    resultUser = userSkillList.filter((skillFromList) => skillFromList !== skill)
    resultAll = allSkillsList.filter((skillFromList) => skillFromList !== skill)

    // Usuário já tem a habilidade, então será apenas uma alteração de nível
    if (toLevel !== "") {
      skill.level = toLevel
      resultUser.push(skill)
    }
    // Usuário está removendo sua habilidade, então ela volta para a pesquisa
    else {
      resultAll.push(skill)
    }

    setUserSkillList(resultUser)
    setAllSkillsList(resultAll)
    setGroupedUserSkills(groupJsonBy(resultUser))
  }

  return (
    <UserSkillContext.Provider value={{ userSkillList, allSkillsList, groupedUserSkills, changeSkillLevel }}>
      {children}
    </UserSkillContext.Provider>
  )
}