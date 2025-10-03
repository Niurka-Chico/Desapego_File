import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-pretty">
            Plataforma completa para cursos e afiliação em Moçambique
          </h1>
          <p className="mt-4 text-muted-foreground">
            Pague pouco a pouco, em Metical, com suporte local. Hospede cursos, gerencie afiliados e ofereça
            certificados digitais em uma interface simples e responsiva.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg">Comece a aprender</Button>
            <Button size="lg" variant="secondary">
              Cadastre-se como Produtor/Afiliado
            </Button>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border p-4">
              <dt className="text-muted-foreground">Pagamento</dt>
              <dd className="text-foreground font-medium">Parcelado em MZN</dd>
            </div>
            <div className="rounded-lg border p-4">
              <dt className="text-muted-foreground">Confiabilidade</dt>
              <dd className="text-foreground font-medium">RLS + Provas Sociais</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border bg-card p-4">
          <img
            src="/dashboard-preview-dark-cards.jpg"
            alt="Prévia do dashboard com cartões escuros"
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
