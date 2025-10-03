"use client"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { m: "Jan", v: 12 },
  { m: "Fev", v: 18 },
  { m: "Mar", v: 26 },
  { m: "Abr", v: 22 },
  { m: "Mai", v: 31 },
  { m: "Jun", v: 28 },
]

export default function ProducerPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Dashboard do Produtor</h1>
        <p className="mt-1 text-muted-foreground">
          Como Produtor, você hospeda cursos, gerencia módulos e certificados, integra afiliados e acompanha resultados.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Receita (MZN)", v: "124,500" },
            { k: "Vendas", v: "1,245" },
            { k: "Afiliados ativos", v: "82" },
            { k: "Taxa de reembolso", v: "1.2%" },
          ].map((s) => (
            <Card key={s.k}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">{s.k}</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl font-semibold">{s.v}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Vendas por mês</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="m" stroke="currentColor" className="text-muted-foreground" />
                  <YAxis stroke="currentColor" className="text-muted-foreground" />
                  <Tooltip
                    contentStyle={{ background: "oklch(var(--card))", border: "1px solid oklch(var(--border))" }}
                    labelStyle={{ color: "oklch(var(--foreground))" }}
                  />
                  <Bar dataKey="v" fill="oklch(var(--chart-1))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>API • Webhooks</li>
                <li>Pixel • Automação de marketing</li>
                <li>Certificados • Domínios</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
