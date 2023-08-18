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

export type SkillLevelOptions =
  | 'Multiplicador'
  | 'Experiente'
  | 'Aprendiz'
  | 'Interessado'
  | ""

type SkillLevelRadioProps = {
  level?: SkillLevelOptions
  selectedSkillLevel?: string
  handleSkillLevelChange: (level: string) => void
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
  selectedSkillLevel,
  handleSkillLevelChange,
}: SkillLevelRadioProps) {
  const isSelected = selectedSkillLevel === level

  return (
    <>
      <CommandItem>
        <button onClick={() => { if (!isSelected) handleSkillLevelChange(level) }} className='flex w-full items-center justify-between pr-4'>
          <div className='flex flex-col items-start'>
            <p className={!level ? "text-destructive" : ""}>{level || "Remover"}</p>
            <p className="text-sm text-muted-foreground">
              Melhor nível de todos.
            </p>
          </div>
          {skillLevelIcon(level, isSelected)}
        </button>
      </CommandItem>
    </>
  )
}
