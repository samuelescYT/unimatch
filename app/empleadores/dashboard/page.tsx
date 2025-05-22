"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Bell,
  User,
  LogOut,
  MessageSquare,
  Settings,
  Briefcase,
  Plus,
  Filter,
  ChevronDown,
  Star,
  StarHalf,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos de ejemplo para los perfiles de estudiantes
const studentProfiles = [
  {
    id: 1,
    name: "Ana Martínez",
    title: "Estudiante de Ingeniería de Sistemas",
    university: "Universidad Nacional",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    rating: 4.8,
    match: 95,
    available: true,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    title: "Estudiante de Diseño Gráfico",
    university: "Universidad de los Andes",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    skills: ["Photoshop", "Illustrator", "UI/UX", "Figma"],
    rating: 4.5,
    match: 88,
    available: true,
  },
  {
    id: 3,
    name: "Laura Sánchez",
    title: "Estudiante de Administración de Empresas",
    university: "Universidad Javeriana",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["Excel", "Marketing Digital", "Análisis Financiero", "SAP"],
    rating: 4.2,
    match: 82,
    available: false,
  },
  {
    id: 4,
    name: "Miguel Ángel Torres",
    title: "Estudiante de Ingeniería Industrial",
    university: "Universidad del Rosario",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: ["Gestión de Proyectos", "Lean Manufacturing", "Power BI", "Excel Avanzado"],
    rating: 4.7,
    match: 90,
    available: true,
  },
  {
    id: 5,
    name: "Valentina Gómez",
    title: "Estudiante de Comunicación Social",
    university: "Universidad Externado",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    skills: ["Redacción", "Redes Sociales", "Edición de Video", "Storytelling"],
    rating: 4.4,
    match: 85,
    available: true,
  },
  {
    id: 6,
    name: "Andrés Morales",
    title: "Estudiante de Ciencia de Datos",
    university: "Universidad de los Andes",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    skills: ["Python", "R", "Machine Learning", "Tableau"],
    rating: 4.9,
    match: 97,
    available: true,
  },
]

// Datos de ejemplo para las vacantes publicadas
const jobPostings = [
  {
    id: 1,
    title: "Desarrollador Frontend Junior",
    type: "Tiempo completo",
    location: "Remoto",
    applicants: 12,
    status: "active",
    postedDate: "Hace 5 días",
  },
  {
    id: 2,
    title: "Asistente de Marketing Digital",
    type: "Medio tiempo",
    location: "Presencial",
    applicants: 8,
    status: "active",
    postedDate: "Hace 3 días",
  },
  {
    id: 3,
    title: "Diseñador UX/UI",
    type: "Proyecto",
    location: "Híbrido",
    applicants: 5,
    status: "closed",
    postedDate: "Hace 15 días",
  },
]

export default function DashboardEmpleadorPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/empleadores/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold">UniMatch</span>
              <Badge variant="outline" className="ml-2">
                Empleador
              </Badge>
            </Link>
          </div>
          <div className="relative w-full max-w-md mx-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar alguien con bases en Excel..."
              className="w-full pl-8 bg-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                5
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>TechSolutions S.A.S</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/empleadores/perfil">Perfil de empresa</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Briefcase className="mr-2 h-4 w-4" />
                  <Link href="/empleadores/vacantes">Mis vacantes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <Link href="/empleadores/mensajes">Mensajes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/empleadores/configuracion">Configuración</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/"} className="w-full flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Panel de Empleador</h1>
            <p className="text-muted-foreground">Encuentra talento universitario para tu empresa</p>
          </div>
          <Link href="/empleadores/vacantes/nueva">
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4" />
              Publicar vacante
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="perfiles">
          <TabsList className="mb-4">
            <TabsTrigger value="perfiles">Perfiles recomendados</TabsTrigger>
            <TabsTrigger value="vacantes">Mis vacantes</TabsTrigger>
          </TabsList>

          <TabsContent value="perfiles">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Estudiantes recomendados</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filtrar
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Disponibilidad</DropdownMenuItem>
                  <DropdownMenuItem>Habilidades</DropdownMenuItem>
                  <DropdownMenuItem>Universidad</DropdownMenuItem>
                  <DropdownMenuItem>Nivel de estudios</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {studentProfiles.map((profile) => (
                <Card key={profile.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                            <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{profile.name}</h3>
                              {profile.available ? (
                                <Badge className="bg-green-600 text-xs">Disponible</Badge>
                              ) : (
                                <Badge variant="outline" className="text-xs">
                                  No disponible
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{profile.title}</p>
                            <p className="text-xs text-muted-foreground">{profile.university}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            {profile.match}% match
                          </Badge>
                          <div className="flex items-center mt-1">
                            {profile.rating >= 4.5 ? (
                              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                            ) : (
                              <StarHalf className="h-3 w-3 fill-amber-500 text-amber-500" />
                            )}
                            <span className="text-xs ml-1">{profile.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="rounded-md">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-4 flex justify-between">
                    <Link href={`/empleadores/perfil-estudiante`}>
                        <Button variant="outline" size="sm" className="gap-1">
                          <User className="h-3 w-3" />
                          Ver perfil
                        </Button>
                    </Link>
                    <Link href="/funcionalidades_adicionales/empleadores/confirmacion-contratacion">
                    <Button size="sm" className="gap-1 bg-emerald-600 hover:bg-emerald-700">
                      <MessageSquare className="h-3 w-3" />
                      Contactar
                    </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vacantes">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Vacantes publicadas</h2>
              <Link href="/empleadores/vacantes/nueva">
                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4" />
                  Nueva vacante
                </Button>
              </Link>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">Título</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Ubicación</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Postulantes</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Publicada</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {jobPostings.map((job, index) => (
                    <tr key={job.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="px-4 py-3 text-sm">{job.title}</td>
                      <td className="px-4 py-3 text-sm">{job.type}</td>
                      <td className="px-4 py-3 text-sm">{job.location}</td>
                      <td className="px-4 py-3 text-sm">{job.applicants}</td>
                      <td className="px-4 py-3 text-sm">
                        {job.status === "active" ? (
                          <Badge className="bg-green-600">Activa</Badge>
                        ) : (
                          <Badge variant="outline">Cerrada</Badge>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">{job.postedDate}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <User className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
