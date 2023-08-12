import SkillBadge from '@/components/SkillBadge'
import { Skill } from './SkillsList'
import SkillPopover from './SkillPopover'

import {
  AcademicCapIcon as AcademicCapIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  BeakerIcon as BeakerIconSolid,
  LightBulbIcon as LightBulbIconSolid,
} from '@heroicons/react/24/solid'
import { SkillLevelOptions, skillLevelIcon } from './SkillLevelRadio'

type SkillLevelContainer = {
  level: SkillLevelOptions
  skills: Skill[]
}

export default function SkillLevelContainer({
  level,
  skills,
}: SkillLevelContainer) {
  return (
    <div className="py-2">
      <h2 className="flex flex-row gap-3 border-b-2 py-1 text-zinc-100">
        {skillLevelIcon(level, true)} {level}
      </h2>
      <div className="mt-2 flex flex-wrap justify-between gap-3">
        {skills.map(({ url }, index) => {
          return (
            <SkillPopover key={index}>
              <SkillBadge url={url} />
            </SkillPopover>
          )
        })}
      </div>
    </div>
  )
}
