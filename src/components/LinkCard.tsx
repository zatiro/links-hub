'use client'

import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'

type LinkCardProps = {
  type?: string
  title?: string
  link?: string
  logoUrl?: string
  categorie?: string
  area?: string
  role?: string
  favouriteAmount?: number
  isFavourite?: boolean
}

export default function LinkCard({
  type = 'Portal',
  title = 'Portal ELEB',
  link = 'http://embraer.com.br',
  logoUrl = 'https://github.com/zatiro.png',
  role = 'Colaborador',
  categorie = 'Gestão',
  area = 'ELEB',
  favouriteAmount = 1,
  isFavourite = true,
}: LinkCardProps) {
  const [isLinkFavourite, setIsLinkFavourite] = useState(isFavourite)
  const [effect, setEffect] = useState(false)
  const [favouriteCount, setFavouriteCount] = useState(favouriteAmount)

  function handleToggleFavourite() {
    setIsLinkFavourite(!isLinkFavourite)
    setEffect(true)

    if (isLinkFavourite) {
      setFavouriteCount(favouriteCount - 1)
    } else {
      setFavouriteCount(favouriteCount + 1)
    }
  }

  return (
    <li className="grid min-h-[10rem] min-w-[14rem] grid-flow-row rounded-md border-t-4 border-green-500 bg-sky-950 px-4 py-3 text-white">
      <header className="flex gap-4">
        <Image
          src={logoUrl}
          alt="Logo"
          className="h-14 w-14 rounded-full"
          width={120}
          height={120}
        />
        <div className="flex flex-col justify-center">
          <h1 className="m-0 text-sm uppercase tracking-[0.2rem]">{type}</h1>
          <a
            href={link}
            className="font-sans text-xl font-medium text-sky-500  hover:underline hover:underline-offset-1"
          >
            {title}
          </a>
        </div>
      </header>
      <section className="">
        <div className="flex gap-2 divide-x pt-3">
          <Badge variant={'outline'}>{role}</Badge>
          <Badge variant={'outline'}>{categorie}</Badge>
          <Badge variant={'outline'}>{area}</Badge>
        </div>
      </section>
      <footer className="mt-2 flex flex-col items-end justify-end border-t border-sky-700 pt-2">
        <button
          className={`${effect ? 'animate-wiggle' : ''}
            flex h-6 flex-row items-center gap-1 rounded-xl border border-sky-700 bg-sky-900 px-2`}
          onClick={() => handleToggleFavourite()}
          onAnimationEnd={() => setEffect(false)}
        >
          {isLinkFavourite ? (
            <StarIconSolid className="h-4 w-4 text-yellow-400" />
          ) : (
            <StarIconOutline className="h-4 w-4" />
          )}
          <span>{favouriteCount}</span>
        </button>
      </footer>
    </li>
  )
}
