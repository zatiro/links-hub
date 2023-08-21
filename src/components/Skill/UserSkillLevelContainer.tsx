import SkillBadge from '@/components/Skill/SkillBadge'
import { Skill } from './SkillsList'
import SkillPopover from './SkillPopover'

import { SkillLevelOptions, skillLevelIcon } from './SkillLevelRadio'

type SkillLevelContainerProps = {
  level: SkillLevelOptions
  skills: Skill[]
}

export default function UserSkillLevelContainer({
  level,
  skills,
}: SkillLevelContainerProps) {
  return (
    <div className="py-2">
      <h2 className="flex flex-row gap-3 border-b-2 py-1">
        {skillLevelIcon(level, true)} {level}
      </h2>
      <div className="mt-2 flex flex-wrap justify-start gap-2">
        {skills.length > 0 ? skills.map((skill, index) => {
          return (
            <SkillPopover key={index} skill={skill}>
              <SkillBadge url={skill.url} />
            </SkillPopover>
          )
        }) : (
          <></>
        )}
      </div>
    </div>
  )
}
