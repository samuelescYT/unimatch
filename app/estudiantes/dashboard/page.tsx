"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, User, LogOut, Briefcase, MapPin, Clock, Building, BookOpen, Settings, Sparkles, Star } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Datos de ejemplo para las ofertas laborales
const jobOffers = [
  {
    id: 1,
    title: "Desarrollador Frontend Junior",
    company: "TechSolutions",
    location: "Remoto",
    type: "Tiempo completo",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    tags: ["React", "JavaScript", "CSS"],
    posted: "Hace 2 días",
  },
  {
    id: 2,
    title: "Asistente de Marketing Digital",
    company: "MarketPro",
    location: "Presencial",
    type: "Medio tiempo",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png",
    tags: ["Marketing", "Redes Sociales", "Analytics"],
    posted: "Hace 3 días",
  },
  {
    id: 3,
    title: "Analista de Datos",
    company: "DataInsights",
    location: "Híbrido",
    type: "Tiempo completo",
    logo: "https://cdn-icons-png.flaticon.com/512/5696/5696591.png",
    tags: ["Python", "SQL", "Tableau"],
    posted: "Hace 1 día",
  },
  {
    id: 4,
    title: "Diseñador UX/UI",
    company: "CreativeMinds",
    location: "Remoto",
    type: "Proyecto",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    tags: ["Figma", "Adobe XD", "Diseño"],
    posted: "Hace 5 días",
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold">UniMatch</span>
            </Link>
          </div>
          <div className="relative w-full max-w-md mx-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar trabajo remoto en diseño..."
              className="w-full pl-8 bg-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
            <Link href="/funcionalidades_adicionales/estudiantes/premium">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                <Sparkles className="h-4 w-4" />
                Actualizar a Premium
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Avatar" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/estudiantes/perfil">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Briefcase className="mr-2 h-4 w-4" />
                  <Link href="/estudiantes/postulaciones">Mis postulaciones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpen className="mr-2 h-4 w-4" />
                  <Link href="/estudiantes/simulador">Simulador de entrevistas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/estudiantes/configuracion">Configuración</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-emerald-600">Premium</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Star className="mr-2 h-4 w-4 text-emerald-600" />
                  <Link
                    href="/funcionalidades_adicionales/estudiantes/estadisticas"
                    className="text-emerald-700 font-medium"
                  >
                    Estadísticas del perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Ofertas recomendadas para ti</h1>
          <p className="text-muted-foreground">Basadas en tu perfil académico y profesional</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobOffers.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
                        <AvatarFallback className="rounded-md">{job.company.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="mr-1 h-4 w-4" />
                      {job.posted}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="rounded-md">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4">
                <Link href={'/estudiantes/ofertas'} className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Postularme</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
