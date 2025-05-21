"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Building,
  Clock,
  Calendar,
  CreditCard,
  Briefcase,
  GraduationCap,
  Share2,
  Bookmark,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function DetalleOfertaPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [guardada, setGuardada] = useState(false)

  // Datos de ejemplo para la oferta laboral
  const oferta = {
    id: params.id,
    titulo: "Desarrollador Frontend Junior",
    empresa: "TechSolutions",
    ubicacion: "Bogotá, Colombia (Híbrido)",
    logo: "/placeholder.svg?height=80&width=80",
    descripcion:
      "Estamos buscando un Desarrollador Frontend Junior para unirse a nuestro equipo de desarrollo. El candidato ideal tiene conocimientos en React, JavaScript y CSS, con ganas de aprender y crecer profesionalmente.",
    tipoContrato: "Tiempo completo",
    salario: "$2.500.000 - $3.000.000 COP",
    fechaPublicacion: "Hace 2 días",
    fechaLimite: "30 de mayo de 2023",
    requisitos: [
      "Conocimientos en HTML, CSS y JavaScript",
      "Experiencia con React.js (mínimo 1 año)",
      "Familiaridad con control de versiones (Git)",
      "Capacidad para trabajar en equipo",
      "Buenas habilidades de comunicación",
    ],
    responsabilidades: [
      "Desarrollar interfaces de usuario responsivas y atractivas",
      "Colaborar con diseñadores UX/UI para implementar diseños",
      "Mantener y mejorar aplicaciones web existentes",
      "Participar en revisiones de código y pruebas",
      "Documentar el código y los procesos de desarrollo",
    ],
    beneficios: [
      "Horario flexible",
      "Trabajo remoto parcial",
      "Seguro médico complementario",
      "Bonos por desempeño",
      "Oportunidades de capacitación y crecimiento",
    ],
    habilidades: ["React", "JavaScript", "CSS", "HTML", "Git"],
    educacion: "Ingeniería de Sistemas, Desarrollo de Software o áreas afines",
    experiencia: "1-2 años",
    match: 95,
    postulados: 12,
    estado: "activa",
  }

  const handlePostular = () => {
    router.push(`/estudiantes/ofertas/${params.id}/postular`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/estudiantes/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => setGuardada(!guardada)}>
              <Bookmark className={`h-5 w-5 ${guardada ? "fill-emerald-600 text-emerald-600" : ""}`} />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <Avatar className="h-20 w-20 rounded-md">
                    <AvatarImage src={oferta.logo || "/placeholder.svg"} alt={oferta.empresa} />
                    <AvatarFallback className="rounded-md text-lg">{oferta.empresa.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <h1 className="text-2xl font-bold">{oferta.titulo}</h1>
                      <p className="text-muted-foreground">{oferta.empresa}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {oferta.ubicacion}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {oferta.tipoContrato}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {oferta.fechaPublicacion}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-emerald-600">{oferta.match}% match</Badge>
                      <span className="text-sm text-muted-foreground">{oferta.postulados} postulados</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Descripción del puesto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{oferta.descripcion}</p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      Fecha límite
                    </h3>
                    <p className="text-sm">{oferta.fechaLimite}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      Salario
                    </h3>
                    <p className="text-sm">{oferta.salario}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      Experiencia
                    </h3>
                    <p className="text-sm">{oferta.experiencia}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      Educación
                    </h3>
                    <p className="text-sm">{oferta.educacion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {oferta.requisitos.map((requisito, index) => (
                    <li key={index} className="text-sm">
                      {requisito}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsabilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {oferta.responsabilidades.map((responsabilidad, index) => (
                    <li key={index} className="text-sm">
                      {responsabilidad}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {oferta.beneficios.map((beneficio, index) => (
                    <li key={index} className="text-sm">
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Postúlate ahora</CardTitle>
                <CardDescription>Esta oferta coincide con tu perfil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-emerald-800">¡Buen match!</h3>
                      <p className="text-sm text-emerald-700">
                        Tu perfil coincide en un {oferta.match}% con lo que busca esta empresa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Habilidades requeridas</h3>
                  <div className="flex flex-wrap gap-2">
                    {oferta.habilidades.map((habilidad, index) => (
                      <Badge key={index} variant="outline">
                        {habilidad}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-amber-800">Fecha límite próxima</h3>
                      <p className="text-sm text-amber-700">
                        La convocatoria cierra el {oferta.fechaLimite}. ¡No pierdas esta oportunidad!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handlePostular}>
                  Postularme ahora
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setGuardada(!guardada)}>
                  {guardada ? "Guardada" : "Guardar para después"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sobre la empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 rounded-md">
                    <AvatarImage src={oferta.logo || "/placeholder.svg"} alt={oferta.empresa} />
                    <AvatarFallback className="rounded-md">{oferta.empresa.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{oferta.empresa}</h3>
                    <p className="text-sm text-muted-foreground">Tecnología y Desarrollo de Software</p>
                  </div>
                </div>
                <p className="text-sm">
                  TechSolutions es una empresa líder en desarrollo de software con más de 10 años de experiencia en el
                  mercado. Nos especializamos en crear soluciones tecnológicas innovadoras para empresas de todos los
                  tamaños.
                </p>
                <Button variant="outline" className="w-full">
                  Ver perfil de la empresa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
