import LinkCard from '@/components/LinkCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <LinkCard></LinkCard>
        <LinkCard></LinkCard>
        <LinkCard></LinkCard>
        <LinkCard></LinkCard>
        <LinkCard></LinkCard>
      </ul>
    </main>
  )
}
