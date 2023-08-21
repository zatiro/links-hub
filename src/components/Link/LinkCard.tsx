'use client'

import { StarIcon as StarIconSolid, ShareIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

import { useState } from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

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

  function handleShareLink() {
    console.log("share")
  }

  return (
    <div className='relative h-max'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Card className='bg-primary-foreground transition-all hover:border-primary hover:bg-primary/20' onClick={() => console.log("click card")}>
                <CardHeader className='flex flex-row items-center justify-between gap-x-4'>
                  <div className='space-y-1'>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{type}</CardDescription>
                  </div>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={logoUrl} />
                    <AvatarFallback>GSP</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className='flex flex-wrap items-center justify-between gap-1'>
                  <Badge className='bg-primary-foreground' variant={'outline'}>{role}</Badge>
                  <Badge className='bg-primary-foreground' variant={'outline'}>{categorie}</Badge>
                  <Badge className='bg-primary-foreground' variant={'outline'}>{area}</Badge>
                </CardContent>
                <CardFooter>
                  <div className='h-8'></div>
                </CardFooter>
              </Card>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{link}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className='absolute bottom-6 left-6'>
            <Button variant={'outline'} onClick={() => handleToggleFavourite()} className='flex space-x-1'>
              {isLinkFavourite ? (
                <StarIconSolid className="h-4 w-4 text-yellow-400" />
              ) : (
                <StarIconOutline className="h-4 w-4" />
              )}
              <span>{favouriteCount}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Favoritar {title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className='absolute bottom-6 right-6'>
            <Button variant={'outline'} onClick={() => handleShareLink()} className='flex space-x-1'>
              <ShareIcon className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Compartilhar link</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  )
}
