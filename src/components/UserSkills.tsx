import { useState } from 'react'

import UserSkillLevelContainer from './UserSkillLevelContainer'
import { Skill, SkillList } from './SkillsList'

import userSkillsJson from '../assets/userSkillsTable.json'
const { list }: SkillList = userSkillsJson

function groupJsonBy() {
  const grouped = list.reduce((acc, cur) => {
    const { level, ...rest } = cur;
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(rest);
    return acc;
  }, {});

  const result = Object.entries(grouped).map(([key, value]) => ({ [key]: value }))

  return (result)
}

export default function UserSkills() {
  const [groupedUserSkills, setGroupedUserSkills]: { [level: string]: Skill[] } =
    useState(groupJsonBy)

  groupJsonBy()


  return (
    <div className="mb-4 grid w-full grid-cols-2 gap-4">
      {groupedUserSkills.map((obj, index) => {
        const level = Object.keys(obj)[0]
        const skills = obj[level]
        return <UserSkillLevelContainer key={index} level={level} skills={skills} />
      })}
    </div>
  )
}
