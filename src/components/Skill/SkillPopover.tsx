import SkillLevelRadio from './SkillLevelRadio'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandList, CommandGroup } from '../ui/command'
import { Skill } from './SkillsList'

type SkillPopoverProps = {
  children: JSX.Element
  skill: Skill
  key?: number
}

export default function SkillPopover({ children, skill }: SkillPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandList>
            <CommandGroup>
              <SkillLevelRadio
                skill={skill}
                level="Multiplicador"
              />
              <SkillLevelRadio
                skill={skill}
                level="Experiente"
              />
              <SkillLevelRadio
                skill={skill}
                level="Aprendiz"
              />
              <SkillLevelRadio
                skill={skill}
                level="Interessado"
              />

              {
                skill?.level && <SkillLevelRadio skill={skill} />
              }

            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
