import SkillBadge from './SkillBadge'
import SkillPopover from './SkillPopover'
import { ScrollArea } from './ui/scroll-area'

export type Skill = {
  category: string
  name: string
  url: string
  level?: string
}

export type SkillList = {
  list: Skill[]
}

export default function SkillsList({ list }: SkillList) {
  const groupedSkills: { [category: string]: Skill[] } = {}

  list.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = []
    }
    groupedSkills[skill.category].push(skill)
  })

  return (
    <ScrollArea className='h-[60vh] max-h-[60vh] min-h-fit'>
      <div className="flex flex-col items-center justify-center pr-4">

        {(Object.keys(groupedSkills) as (keyof typeof groupedSkills)[]).map(
          (key, index) => {
            return (
              <section key={index} className="w-full">
                <h1 className="my-2 font-bold text-white">{key}</h1>
                <div className="mb-2 flex flex-wrap justify-start gap-2">
                  {groupedSkills[key].map((skill: Skill, index: number) => {
                    return (
                      <SkillPopover key={index} skillName={skill.name}>
                        <SkillBadge url={skill.url} />
                      </SkillPopover>
                    )
                  })}
                </div>
              </section>
            )
          },
        )}

      </div>
    </ScrollArea>
  )
}
