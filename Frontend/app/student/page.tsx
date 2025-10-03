"use client"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const progress = [
  { c: "Curso A", p: 80 },
  { c: "Curso B", p: 45 },
  { c: "Curso C", p: 20 },
]

export default function StudentPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Área do Aluno</h1>
        <p className="mt-1 text-muted-foreground">
          Como Aluno, você estuda no seu ritmo, acompanha o progresso por aula e emite certificados digitais.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Cursos ativos", v: "6" },
            { k: "Aulas assistidas", v: "124" },
            { k: "Dias seguidos", v: "5" },
            { k: "Certificados", v: "2" },
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
              <CardTitle>Progresso por curso</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={progress}>
                  <XAxis dataKey="c" stroke="currentColor" className="text-muted-foreground" />
                  <YAxis stroke="currentColor" className="text-muted-foreground" />
                  <Tooltip
                    contentStyle={{ background: "oklch(var(--card))", border: "1px solid oklch(var(--border))" }}
                    labelStyle={{ color: "oklch(var(--foreground))" }}
                  />
                  <Bar dataKey="p" fill="oklch(var(--chart-2))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximas aulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {["Módulo 3: Funções", "Módulo 4: Projeto", "Live de dúvidas"].map((p) => (
                <div key={p} className="rounded-md border p-3">
                  <p className="font-medium">{p}</p>
                  <p className="text-muted-foreground">Disponível</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
