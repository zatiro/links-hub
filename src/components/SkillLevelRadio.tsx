import {
  AcademicCapIcon,
  RocketLaunchIcon,
  BeakerIcon,
  LightBulbIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import {
  AcademicCapIcon as AcademicCapIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  BeakerIcon as BeakerIconSolid,
  LightBulbIcon as LightBulbIconSolid,
} from '@heroicons/react/24/solid'
import { CommandItem } from './ui/command'
import { useUserSkillContext } from '@/context/UserSkillProvider'
import { Skill } from './SkillsList'

export type SkillLevelOptions =
  | 'Multiplicador'
  | 'Experiente'
  | 'Aprendiz'
  | 'Interessado'
  | ""

type SkillLevelRadioProps = {
  level?: SkillLevelOptions
  skill: Skill
}

export function skillLevelIcon(level?: SkillLevelOptions, isSelected?: boolean) {
  let icon

  switch (level) {
    case 'Multiplicador':
      icon = isSelected ? (
        <AcademicCapIconSolid className="text-primary" width={24} />
      ) : (
        <AcademicCapIcon className="text-muted-foreground" width={24} />
      )
      break
    case 'Experiente':
      icon = isSelected ? (
        <RocketLaunchIconSolid className="text-primary" width={24} />
      ) : (
        <RocketLaunchIcon className="text-muted-foreground" width={24} />
      )
      break
    case 'Aprendiz':
      icon = isSelected ? (
        <BeakerIconSolid className="text-primary" width={24} />
      ) : (
        <BeakerIcon className="text-muted-foreground" width={24} />
      )
      break
    case 'Interessado':
      icon = isSelected ? (
        <LightBulbIconSolid className="text-primary" width={24} />
      ) : (
        <LightBulbIcon className="text-muted-foreground" width={24} />
      )
      break

    default:
      icon = <XCircleIcon className="text-destructive" width={24} />

      break
  }

  return icon
}

export default function SkillLevelRadio({
  level = "",
  skill,
}: SkillLevelRadioProps) {
  const isSelected = skill?.level === level
  const { changeSkillLevel } = useUserSkillContext()

  return (
    <CommandItem>
      <button onClick={() => { if (!isSelected) changeSkillLevel({ skill, toLevel: level }) }} className='flex w-full items-center justify-between pr-4'>
        <div className='flex flex-col items-start'>
          <p className={!level ? "text-red-500" : ""}>{level || "Remover"}</p>
          <p className="text-sm text-muted-foreground">
            Melhor nível de todos.
          </p>
        </div>
        {skillLevelIcon(level, isSelected)}
      </button>
    </CommandItem>
  )
}
