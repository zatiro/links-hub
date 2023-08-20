
import UserSkillLevelContainer from './UserSkillLevelContainer'

import { useUserSkillContext } from '@/context/UserSkillProvider'

export default function UserSkills() {
  const { groupedUserSkills } = useUserSkillContext()

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
