import { ChangeEvent } from 'react'
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  BeakerIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'
import {
  AcademicCapIcon as AcademicCapIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
  BeakerIcon as BeakerIconSolid,
  LightBulbIcon as LightBulbIconSolid,
} from '@heroicons/react/24/solid'

export type SkillLevelOptions =
  | 'Multiplicador'
  | 'Experiente'
  | 'Aprendiz'
  | 'Interessado'

type SkillLevelRadioProps = {
  level: SkillLevelOptions
  selectedSkillLevel: string
  handleSkillLevelChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function skillLevelIcon(level: SkillLevelOptions, isSelected: boolean) {
  let icon

  switch (level) {
    case 'Multiplicador':
      icon = isSelected ? (
        <AcademicCapIconSolid className="text-sky-500" width={24} />
      ) : (
        <AcademicCapIcon className="text-zinc-300" width={24} />
      )
      break
    case 'Experiente':
      icon = isSelected ? (
        <RocketLaunchIconSolid className="text-sky-500" width={24} />
      ) : (
        <RocketLaunchIcon className="text-zinc-300" width={24} />
      )
      break
    case 'Aprendiz':
      icon = isSelected ? (
        <BeakerIconSolid className="text-sky-500" width={24} />
      ) : (
        <BeakerIcon className="text-zinc-300" width={24} />
      )
      break
    case 'Interessado':
      icon = isSelected ? (
        <LightBulbIconSolid className="text-sky-500" width={24} />
      ) : (
        <LightBulbIcon className="text-zinc-300" width={24} />
      )
      break

    default:
      break
  }

  return icon
}

export default function SkillLevelRadio({
  level,
  selectedSkillLevel,
  handleSkillLevelChange,
}: SkillLevelRadioProps) {
  const isSelected = selectedSkillLevel === level

  return (
    <li className="w-full border-b transition hover:bg-sky-700 dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input
          id={`list-radio-${level}`}
          type="radio"
          onChange={handleSkillLevelChange}
          value={level}
          name="list-radio"
          className="invisible"
        />

        <label
          htmlFor={`list-radio-${level}`}
          className={`${isSelected
              ? 'font-medium text-zinc-50'
              : 'font-normal text-zinc-300'
            } ml-2 flex w-full flex-row items-center gap-2 py-3 text-sm`}
        >
          {skillLevelIcon(level, isSelected)}
          {level}
        </label>
      </div>
    </li>
  )
}
