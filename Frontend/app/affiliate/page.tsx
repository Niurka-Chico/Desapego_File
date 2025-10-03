"use client"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const earnings = [
  { d: "Seg", v: 120 },
  { d: "Ter", v: 180 },
  { d: "Qua", v: 160 },
  { d: "Qui", v: 210 },
  { d: "Sex", v: 140 },
  { d: "Sáb", v: 90 },
  { d: "Dom", v: 60 },
]

export default function AffiliatePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Dashboard do Afiliado</h1>
        <p className="mt-1 text-muted-foreground">
          Como Afiliado, você escolhe produtos, compartilha links, acompanha conversões e saca comissões em MZN.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Faturamento (MZN)", v: "15,320" },
            { k: "Cliques", v: "18,233" },
            { k: "Conversões", v: "642" },
            { k: "Taxa de conversão", v: "3.5%" },
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
              <CardTitle>Ganhos por dia</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earnings}>
                  <XAxis dataKey="d" stroke="currentColor" className="text-muted-foreground" />
                  <YAxis stroke="currentColor" className="text-muted-foreground" />
                  <Tooltip
                    contentStyle={{ background: "oklch(var(--card))", border: "1px solid oklch(var(--border))" }}
                    labelStyle={{ color: "oklch(var(--foreground))" }}
                  />
                  <Bar dataKey="v" fill="oklch(var(--chart-3))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Produtos para afiliar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {["Copywriting Pro", "Programação Web", "Design UI Básico"].map((p) => (
                <div key={p} className="rounded-md border p-3">
                  <p className="font-medium">{p}</p>
                  <p className="text-muted-foreground">Comissão automática • Alta conversão</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
