import Image from 'next/image'

type SkillBadgeProps = {
  url: string
}

export default function SkillBadge({ url }: SkillBadgeProps) {
  return (
    <div>
      {/* <h2 className="text-zinc-200 text-sm">{name}</h2> */}
      <Image
        src={url}
        height={100}
        width={100}
        alt="Badges"
        className="h-7 w-auto rounded-md"
      />
    </div>
  )
}
