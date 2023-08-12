import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
  XCircleIcon,
  AcademicCapIcon,
  BeakerIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import {
  AcademicCapIcon as AcademicCapIconSolid,
  BeakerIcon as BeakerIconSolid,
  LightBulbIcon as LightBulbIconSolid,
  RocketLaunchIcon as RocketLaunchIconSolid,
} from '@heroicons/react/24/solid'
import SkillLevelRadio from './SkillLevelRadio'

type SkillPopoverProps = {
  children: JSX.Element
  key?: number
}

export default function SkillPopover({ children }: SkillPopoverProps) {
  const [skillLevel, setSkillLevel] = useState('')

  function handleSkillLevelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSkillLevel(event.target.value)

    console.log(event.target.value)
  }

  return (
    <Popover className="relative">
      <Popover.Button>{children}</Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 w-max max-w-sm -translate-x-1/2 px-4 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg bg-sky-700 bg-opacity-50 shadow-lg ring-2 ring-sky-700 backdrop-blur">
            <ul className="w-48 rounded-lg bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              <SkillLevelRadio
                level="Multiplicador"
                selectedSkillLevel={skillLevel}
                handleSkillLevelChange={handleSkillLevelChange}
              />
              <SkillLevelRadio
                level="Experiente"
                selectedSkillLevel={skillLevel}
                handleSkillLevelChange={handleSkillLevelChange}
              />
              <SkillLevelRadio
                level="Aprendiz"
                selectedSkillLevel={skillLevel}
                handleSkillLevelChange={handleSkillLevelChange}
              />
              <SkillLevelRadio
                level="Interessado"
                selectedSkillLevel={skillLevel}
                handleSkillLevelChange={handleSkillLevelChange}
              />
              <li className="w-full transition hover:bg-red-950 dark:border-gray-600">
                <div className="flex items-center justify-center">
                  <button className="my-2 flex flex-row gap-2 text-red-200">
                    <XCircleIcon width={24} /> Remover
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
