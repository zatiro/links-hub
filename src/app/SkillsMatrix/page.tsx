'use server'

import skillsSet from '../../assets/skills.json'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Object.entries(skillsSet).map(([key, value]) => {
        return (
          <section key={key} className="w-full mb-2">
            <h1 className="text-white my-2 font-bold vcv">{key}</h1>
            <div className="flex flex-wrap gap-3 justify-between">
              {value.map(({ name, url }) => {
                return (
                  <div key={url}>
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
              })}
            </div>
          </section>
        )
      })}
    </main>
  )
}
