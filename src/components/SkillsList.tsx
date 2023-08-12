import SkillBadge from './SkillBadge'

export type Skill = {
  category: string
  name: string
  url: string
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
    <div className="flex flex-col items-center justify-between">
      {(Object.keys(groupedSkills) as (keyof typeof groupedSkills)[]).map(
        (key, index) => {
          return (
            <section key={index} className="w-full">
              <h1 className="my-2 font-bold text-white">{key}</h1>
              <div className="flex flex-wrap justify-between gap-3">
                {groupedSkills[key].map((skill: Skill, index: number) => {
                  return <SkillBadge key={index} url={skill.url} />
                })}
              </div>
            </section>
          )
        },
      )}
    </div>
  )
}
