'use client'

import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function LinkCard() {
  const [isFavourite, setIsFavourite] = useState(false)
  const [effect, setEffect] = useState(false)
  const [favouriteCount, setFavouriteCount] = useState(5)

  function handleToggleFavourite() {
    setIsFavourite(!isFavourite)
    setEffect(true)

    if (isFavourite) {
      setFavouriteCount(favouriteCount - 1)
    } else {
      setFavouriteCount(favouriteCount + 1)
    }
  }

  return (
    <li className="grid grid-flow-row px-4 py-3 rounded-md border-t-4 border-green-500 bg-sky-950 text-white min-h-[10rem] min-w-[14rem]">
      <header className="space-y-1">
        <h1 className="uppercase tracking-[0.2rem] m-0 text-sm">Portal</h1>
        <a
          href="http://embraer.com.br"
          className="text-sky-500 text-xl font-sans font-medium  hover:underline hover:underline-offset-1"
        >
          Portal ELEB
        </a>
        <div className="grid grid-flow-col divide-x gap-2 text-md pt-3">
          <span className="">Qualidade</span>
          <span className="pl-2">Gestão</span>
          <span className="pl-2">ELEB</span>
        </div>
      </header>
      <section className="flex flex-col items-start justify-end border-t border-sky-700">
        <div className="flex flex-row items-center gap-2">
          <button
            className={`${effect ? 'animate-wiggle' : ''}
            flex border border-sky-700 rounded-xl px-2 bg-sky-900 flex-row items-center gap-1`}
            onClick={() => handleToggleFavourite()}
            onAnimationEnd={() => setEffect(false)}
          >
            {isFavourite ? (
              <StarIconSolid className="w-4 h-4 text-yellow-400" />
            ) : (
              <StarIconOutline className="w-4 h-4" />
            )}
            <span>{favouriteCount}</span>
          </button>
        </div>
      </section>
    </li>
  )
}
