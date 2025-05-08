"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle, Sparkles, FileText, Video, BookOpen, Award, CreditCard, Clock } from "lucide-react"

export default function PremiumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/estudiantes/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-amber-500" />
              UniMatch Premium
            </span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Desbloquea todas las herramientas que necesitas para destacar en el mercado laboral y conseguir el trabajo
            de tus sueños
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 text-white text-center text-sm font-medium">
              Más popular
            </div>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Plan Mensual</span>
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  $19.900/mes
                </Badge>
              </CardTitle>
              <CardDescription>Acceso completo a todas las funciones premium</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Revisión profesional de CV</p>
                    <p className="text-sm text-muted-foreground">Recibe feedback personalizado de expertos</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Simulador de entrevistas ilimitado</p>
                    <p className="text-sm text-muted-foreground">Practica con preguntas reales y recibe feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Prioridad en búsquedas</p>
                    <p className="text-sm text-muted-foreground">
                      Aparece primero en los resultados de los empleadores
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Cursos y recursos exclusivos</p>
                    <p className="text-sm text-muted-foreground">
                      Accede a contenido premium para mejorar tus habilidades
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Activar plan mensual</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Plan Semestral</span>
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  $99.900/6 meses
                </Badge>
              </CardTitle>
              <CardDescription>Ahorra 16% con el plan de 6 meses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Todas las funciones del plan mensual</p>
                    <p className="text-sm text-muted-foreground">Acceso completo a herramientas premium</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">2 sesiones de coaching</p>
                    <p className="text-sm text-muted-foreground">Asesoría personalizada con expertos en RRHH</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activar plan semestral</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Plan Anual</span>
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  $179.900/año
                </Badge>
              </CardTitle>
              <CardDescription>Ahorra 25% con el plan anual</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Todas las funciones del plan semestral</p>
                    <p className="text-sm text-muted-foreground">Acceso completo a herramientas premium</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">4 sesiones de coaching</p>
                    <p className="text-sm text-muted-foreground">Asesoría personalizada con expertos en RRHH</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Certificado de habilidades</p>
                    <p className="text-sm text-muted-foreground">Obtén un certificado verificado para tu CV</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activar plan anual</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Beneficios Premium</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold">Revisión profesional de CV</h3>
                  <p className="text-sm text-muted-foreground">
                    Expertos en recursos humanos revisarán tu CV y te darán recomendaciones personalizadas para
                    mejorarlo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <Video className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold">Simulador de entrevistas avanzado</h3>
                  <p className="text-sm text-muted-foreground">
                    Practica con preguntas reales específicas de tu industria y recibe análisis detallado de tus
                    respuestas.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold">Recursos exclusivos</h3>
                  <p className="text-sm text-muted-foreground">
                    Accede a cursos, webinars y materiales exclusivos para desarrollar habilidades profesionales.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold">Perfil destacado</h3>
                  <p className="text-sm text-muted-foreground">
                    Tu perfil aparecerá en los primeros resultados de búsqueda de los empleadores.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Método de pago</CardTitle>
            <CardDescription>Selecciona tu método de pago preferido</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup defaultValue="tarjeta" className="grid gap-4">
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <RadioGroupItem value="tarjeta" id="tarjeta" />
                <Label htmlFor="tarjeta" className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="h-5 w-5" />
                  Tarjeta de crédito o débito
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <RadioGroupItem value="pse" id="pse" />
                <Label htmlFor="pse" className="flex items-center gap-2 cursor-pointer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#0053A0" />
                    <path d="M5 12H19" stroke="white" strokeWidth="2" />
                    <path d="M12 5V19" stroke="white" strokeWidth="2" />
                  </svg>
                  PSE - Débito bancario
                </Label>
              </div>
            </RadioGroup>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Número de tarjeta</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Fecha de expiración</Label>
                  <Input id="expiry" placeholder="MM/AA" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Nombre en la tarjeta</Label>
                <Input id="name" placeholder="Juan Pérez" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Confirmar suscripción</Button>
            <p className="text-xs text-center text-muted-foreground">
              Al confirmar, aceptas los{" "}
              <Link href="#" className="underline">
                Términos y Condiciones
              </Link>{" "}
              y la{" "}
              <Link href="#" className="underline">
                Política de Privacidad
              </Link>
              . Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </CardFooter>
        </Card>

        <div className="border rounded-lg p-4 bg-muted/30">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium">Prueba gratuita de 7 días</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Todas las suscripciones incluyen una prueba gratuita de 7 días. Si no estás satisfecho, puedes cancelar
                antes de que finalice el período de prueba y no se te cobrará nada.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
