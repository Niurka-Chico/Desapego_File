"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function SiteHeader() {
  const [lang, setLang] = useState<"PT" | "EN">("PT")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg text-foreground">
          Cultify
          <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground align-middle">
            Beta
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="#quem-somos" className="hover:text-foreground">
            Quem somos nós
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-1 hover:text-foreground">
                Serviços <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/producer">Produtor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/affiliate">Afiliado</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/student">Aluno</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Mudar idioma"
            onClick={() => setLang((p) => (p === "PT" ? "EN" : "PT"))}
            className="rounded-md border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            {lang}
          </button>
          <Button variant="secondary" asChild>
            <Link href="#login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="#signup">Cadastrar</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
