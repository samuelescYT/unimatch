"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, Calendar, Clock, FileText, ExternalLink, Briefcase } from "lucide-react"

export default function ConfirmacionPostulacionPage({ params }: { params: { id: string } }) {
  const [countdown, setCountdown] = useState(5)

  // Datos de ejemplo para la oferta laboral
  const oferta = {
    id: params.id,
    titulo: "Desarrollador Frontend Junior",
    empresa: "TechSolutions",
    ubicacion: "Bogotá, Colombia (Híbrido)",
    logo: "/placeholder.svg?height=80&width=80",
    tipoContrato: "Tiempo completo",
    fechaPostulacion: new Date().toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  }

  // Efecto para el contador regresivo
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/estudiantes/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Badge className="bg-emerald-600">Postulación enviada</Badge>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full mb-4">
              <CheckCircle className="h-12 w-12 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">¡Postulación enviada con éxito!</h1>
            <p className="text-muted-foreground mt-2">
              Tu postulación para {oferta.titulo} en {oferta.empresa} ha sido recibida.
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detalles de la postulación</CardTitle>
              <CardDescription>Información sobre tu postulación</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 rounded-md">
                  <AvatarImage src={oferta.logo || "/placeholder.svg"} alt={oferta.empresa} />
                  <AvatarFallback className="rounded-md text-lg">{oferta.empresa.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{oferta.titulo}</h3>
                  <p className="text-muted-foreground">{oferta.empresa}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {oferta.tipoContrato}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-medium">Fecha de postulación</h3>
                  </div>
                  <p className="text-sm">{oferta.fechaPostulacion}</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-medium">CV enviado</h3>
                  </div>
                  <p className="text-sm">CV_JuanPerez_2023.pdf</p>
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-medium mb-2">Próximos pasos</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>El equipo de {oferta.empresa} revisará tu postulación.</li>
                  <li>Si tu perfil coincide con lo que buscan, te contactarán para coordinar una entrevista.</li>
                  <li>Puedes hacer seguimiento al estado de tu postulación en la sección "Mis postulaciones".</li>
                </ol>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <FileText className="h-4 w-4" />
                Ver detalles de la postulación
              </Button>
              <Button className="w-full sm:w-auto gap-2 bg-emerald-600 hover:bg-emerald-700">
                <Briefcase className="h-4 w-4" />
                Ver mis postulaciones
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿Qué más puedes hacer?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 border rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    Actualiza tu CV
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Mantén tu CV actualizado para aumentar tus posibilidades de ser seleccionado.
                  </p>
                </div>
                <div className="p-4 border rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-emerald-600" />
                    Explora más ofertas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Descubre más oportunidades laborales que coincidan con tu perfil.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Serás redirigido al dashboard en {countdown} segundos.{" "}
                <Link href="/estudiantes/dashboard" className="text-emerald-600 hover:underline">
                  Ir ahora
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
