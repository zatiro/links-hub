import { useState } from 'react'
import SkillLevelRadio from './SkillLevelRadio'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Command, CommandList, CommandGroup } from './ui/command'

type SkillPopoverProps = {
  children: JSX.Element
  key?: number
  level?: string
  skillName: string
}

export default function SkillPopover({ children, level, skillName }: SkillPopoverProps) {
  const [skillLevel, setSkillLevel] = useState(level)

  function handleSkillLevelChange(level: string) {
    setSkillLevel(level)

    console.log(level, skillName)
  }

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandList>
            <CommandGroup>
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

              {
                level && <SkillLevelRadio
                  handleSkillLevelChange={handleSkillLevelChange}
                />
              }

            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
