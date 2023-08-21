import LinkCard from '@/components/Link/LinkCard'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <LinkCard
          area="Manufatura"
          categorie="Roteiro"
          favouriteAmount={0}
          isFavourite={false}
          link="https://github.com/diego3g.png"
          logoUrl="https://github.com/diego3g.png"
          title="SmartRope"
          role="Engenheiro"
          type="App"
        ></LinkCard>
        <LinkCard></LinkCard>
        <LinkCard
          area="GGQ"
          categorie="Qualificação"
          favouriteAmount={0}
          isFavourite={false}
          link="https://github.com/diego3g.png"
          logoUrl="https://github.com/diego3g.png"
          title="SmartRope"
          role="Engenheiro"
          type="App"
        ></LinkCard>
        <LinkCard></LinkCard>
        <LinkCard></LinkCard>
      </div>
    </main>
  )
}
