import SkillBadge from '@/components/SkillBadge'
import { Skill } from './SkillsList'
import SkillPopover from './SkillPopover'

import { SkillLevelOptions, skillLevelIcon } from './SkillLevelRadio'

type SkillLevelContainer = {
  level: SkillLevelOptions
  skills: Skill[]
}

export default function UserSkillLevelContainer({
  level,
  skills,
}: SkillLevelContainer) {
  return (
    <div className="py-2">
      <h2 className="flex flex-row gap-3 border-b-2 py-1">
        {skillLevelIcon(level, true)} {level}
      </h2>
      <div className="mt-2 flex flex-wrap justify-start gap-2">
        {skills.map((skill, index) => {
          return (
            <SkillPopover key={index} level={level} skillName={skill.name}>
              <SkillBadge url={skill.url} />
            </SkillPopover>
          )
        })}
      </div>
    </div>
  )
}
