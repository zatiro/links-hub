
import UserSkillLevelContainer from './UserSkillLevelContainer'

import { useUserSkillContext } from '@/context/UserSkillProvider'

export const skillLevels = [
  "Multiplicador",
  "Experiente",
  "Aprendiz",
  "Interessado"
]

export default function UserSkills() {
  const { groupedUserSkills } = useUserSkillContext()

  return (
    <div className="mb-4 grid w-full grid-cols-2 gap-4">
      {
        skillLevels.map((skillLevel, index) => {
          let component = <UserSkillLevelContainer key={index} level={skillLevel} skills={[]} />

          groupedUserSkills.map((obj) => {
            const level = Object.keys(obj)[0]

            if (skillLevel === level) {
              const skills = obj[level]
              component = <UserSkillLevelContainer key={index} level={skillLevel} skills={skills} />
            }
          })

          return component
        })
      }
    </div>
  )
}
