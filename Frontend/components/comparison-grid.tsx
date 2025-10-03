import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = {
  producer: [
    "Visão de faturamento",
    "Cadastro de cursos/produtos",
    "Gestão de afiliados",
    "Relatórios & Integrações",
    "Saque e verificação",
  ],
  affiliate: [
    "Produtos para afiliação",
    "Busca + filtros por nicho",
    "Relatórios de vendas",
    "Integrações (Pixel/API)",
    "Saldo pendente & disponível",
  ],
  student: ["Meus cursos", "Progresso por módulo", "Relatórios de estudo", "Certificados digitais", "Suporte e ajuda"],
}

const briefs = {
  producer:
    "Como Produtor, você hospeda cursos, gerencia módulos e certificados, integra afiliados e acompanha resultados.",
  affiliate: "Como Afiliado, você escolhe produtos, compartilha links, acompanha conversões e saca comissões em MZN.",
  student: "Como Aluno, você estuda no seu ritmo, acompanha o progresso por aula e emite certificados digitais.",
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

export function ComparisonGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16" id="como-funciona">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-pretty">Comparativo de perfis</h2>
        <p className="text-muted-foreground mt-1">Escolha como quer participar: Produtor, Afiliado ou Aluno.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-muted bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Produtor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{briefs.producer}</p>
            <List items={features.producer} />
          </CardContent>
        </Card>

        <Card className="border-muted bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Afiliado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{briefs.affiliate}</p>
            <List items={features.affiliate} />
          </CardContent>
        </Card>

        <Card className="border-muted bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Aluno</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{briefs.student}</p>
            <List items={features.student} />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
