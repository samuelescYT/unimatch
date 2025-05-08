"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Users,
  Calendar,
  CheckCircle,
  Eye,
  FileText,
  AlertTriangle,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from "lucide-react"

export default function EstadisticasPage() {
  // Datos de ejemplo para las estadísticas
  const estadisticas = {
    vistas: 78,
    postulaciones: 12,
    entrevistas: 3,
    aceptaciones: 1,
    completitudPerfil: 85,
    tendencia: "+15% esta semana",
    empresasInteresadas: [
      { nombre: "TechSolutions", sector: "Tecnología", fecha: "Hace 2 días" },
      { nombre: "MarketPro", sector: "Marketing", fecha: "Hace 3 días" },
      { nombre: "DataInsights", sector: "Análisis de datos", fecha: "Hace 5 días" },
    ],
    entrevistasProgramadas: [
      {
        empresa: "TechSolutions",
        puesto: "Desarrollador Frontend Junior",
        fecha: "15 de mayo, 10:00 AM",
        estado: "confirmada",
      },
      { empresa: "CreativeMinds", puesto: "Diseñador UX/UI", fecha: "18 de mayo, 2:30 PM", estado: "pendiente" },
    ],
    sugerencias: [
      { tipo: "alta", mensaje: "Completa tu sección de experiencia laboral" },
      { tipo: "media", mensaje: "Añade más certificaciones a tu perfil" },
      { tipo: "baja", mensaje: "Actualiza tu foto de perfil" },
    ],
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
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
              <Sparkles className="h-4 w-4" />
              Perfil Premium
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Estadísticas de tu perfil</h1>
          <p className="text-muted-foreground">Analiza el rendimiento de tu perfil y mejora tus oportunidades</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Vistas de perfil</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{estadisticas.vistas}</span>
                    <span className="text-xs text-emerald-600 flex items-center">
                      <ChevronUp className="h-3 w-3" />
                      {estadisticas.tendencia}
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Eye className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Postulaciones</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{estadisticas.postulaciones}</span>
                    <span className="text-xs text-muted-foreground">totales</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-100 rounded-full">
                  <FileText className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Entrevistas</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{estadisticas.entrevistas}</span>
                    <span className="text-xs text-muted-foreground">programadas</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Aceptaciones</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{estadisticas.aceptaciones}</span>
                    <span className="text-xs text-muted-foreground">ofertas</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-100 rounded-full">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Completitud de tu perfil</CardTitle>
              <CardDescription>Un perfil completo aumenta tus posibilidades de ser contactado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Perfil general</span>
                    <span className="text-sm font-medium">{estadisticas.completitudPerfil}%</span>
                  </div>
                  <Progress value={estadisticas.completitudPerfil} className="h-2" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Secciones por completar</h4>
                  <div className="grid gap-3">
                    {estadisticas.sugerencias.map((sugerencia, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div
                          className={`p-1.5 rounded-full flex-shrink-0 ${
                            sugerencia.tipo === "alta"
                              ? "bg-red-100"
                              : sugerencia.tipo === "media"
                                ? "bg-amber-100"
                                : "bg-blue-100"
                          }`}
                        >
                          <AlertTriangle
                            className={`h-4 w-4 ${
                              sugerencia.tipo === "alta"
                                ? "text-red-600"
                                : sugerencia.tipo === "media"
                                  ? "text-amber-600"
                                  : "text-blue-600"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{sugerencia.mensaje}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {sugerencia.tipo === "alta"
                              ? "Prioridad alta"
                              : sugerencia.tipo === "media"
                                ? "Prioridad media"
                                : "Prioridad baja"}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">
                          Completar
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Empresas interesadas</CardTitle>
              <CardDescription>Empresas que han visto tu perfil recientemente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estadisticas.empresasInteresadas.map((empresa, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="p-2 bg-muted rounded-full flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{empresa.nombre}</p>
                      <p className="text-xs text-muted-foreground">{empresa.sector}</p>
                      <p className="text-xs text-muted-foreground mt-1">{empresa.fecha}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Entrevistas programadas</CardTitle>
            <CardDescription>Próximas entrevistas y su estado actual</CardDescription>
          </CardHeader>
          <CardContent>
            {estadisticas.entrevistasProgramadas.length > 0 ? (
              <div className="grid gap-4">
                {estadisticas.entrevistasProgramadas.map((entrevista, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-100 rounded-full">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{entrevista.puesto}</h4>
                        <p className="text-sm text-muted-foreground">{entrevista.empresa}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {entrevista.fecha}
                          </Badge>
                          <Badge
                            className={`text-xs ${
                              entrevista.estado === "confirmada" ? "bg-green-600" : "bg-amber-600"
                            }`}
                          >
                            {entrevista.estado === "confirmada" ? "Confirmada" : "Pendiente"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm">
                        Preparar entrevista
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground">No tienes entrevistas programadas actualmente</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Actualizado hace 5 minutos. Las estadísticas se actualizan cada hora.
          </p>
        </div>
      </main>
    </div>
  )
}
