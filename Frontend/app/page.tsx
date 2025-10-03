import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ComparisonGrid } from "@/components/comparison-grid"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <section id="quem-somos" className="mx-auto max-w-7xl px-4 pb-12">
          <h2 className="text-2xl font-semibold text-pretty">Quem somos nós</h2>
          <p className="mt-2 text-muted-foreground">
            A Cultify é uma plataforma de cursos e afiliação focada em Moçambique. Nosso objetivo é simplificar a
            criação de cursos, potencializar afiliações e facilitar o acesso a educação online com pagamentos em
            Metical.
          </p>
        </section>
        <ComparisonGrid />
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h3 className="text-xl font-semibold">Cursos em destaque</h3>
          <div className="mt-4">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent className="-ml-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <CarouselItem key={i} className="pl-2 md:basis-1/2 lg:basis-1/3">
                    <div className="rounded-lg border bg-card p-4 h-full">
                      <img
                        src={`/course-thumbnail.png?height=140&width=560&query=curso%20destaque%20${i}`}
                        alt={`Curso em destaque ${i}`}
                        className="w-full rounded-md"
                      />
                      <div className="mt-3">
                        <p className="font-medium">Curso {i}</p>
                        <p className="text-sm text-muted-foreground">Descrição breve do curso.</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="contato" className="mx-auto max-w-7xl px-4 pb-24">
          <h3 className="text-xl font-semibold">Contacte-nos</h3>
          <p className="text-muted-foreground">Mande-nos um email e retornaremos o mais breve possível.</p>
          <form className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm text-muted-foreground">Nome</label>
              <Input placeholder="O seu nome" aria-label="Nome" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-muted-foreground">Email</label>
              <Input type="email" placeholder="voce@exemplo.com" aria-label="Email" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-muted-foreground">Mensagem</label>
              <Textarea placeholder="Como podemos ajudar?" aria-label="Mensagem" rows={4} />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </section>
      </main>
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Cultify — Todos os direitos reservados.
      </footer>
    </>
  )
}
