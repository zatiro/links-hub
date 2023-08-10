'use client'

import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'

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
    <li className="grid grid-flow-row px-4 py-3 rounded-md border-t-4 border-green-500 bg-sky-950 text-white min-h-[10rem] min-w-[14rem]">
      <header className="flex gap-4">
        <Image
          src={logoUrl}
          alt="Logo"
          className="rounded-full h-14 w-14"
          width={120}
          height={120}
        />
        <div className="flex flex-col justify-center">
          <h1 className="uppercase tracking-[0.2rem] m-0 text-sm">{type}</h1>
          <a
            href={link}
            className="text-sky-500 text-xl font-sans font-medium  hover:underline hover:underline-offset-1"
          >
            {title}
          </a>
        </div>
      </header>
      <section className="">
        <div className="flex divide-x gap-2 text-md pt-3">
          <span className="">{role}</span>
          <span className="pl-2">{categorie}</span>
          <span className="pl-2">{area}</span>
        </div>
      </section>
      <footer className="flex flex-col items-end justify-end border-t border-sky-700 pt-2 mt-2">
        <button
          className={`${effect ? 'animate-wiggle' : ''}
            flex border border-sky-700 rounded-xl px-2 bg-sky-900 flex-row items-center gap-1 h-6`}
          onClick={() => handleToggleFavourite()}
          onAnimationEnd={() => setEffect(false)}
        >
          {isLinkFavourite ? (
            <StarIconSolid className="w-4 h-4 text-yellow-400" />
          ) : (
            <StarIconOutline className="w-4 h-4" />
          )}
          <span>{favouriteCount}</span>
        </button>
      </footer>
    </li>
  )
}
