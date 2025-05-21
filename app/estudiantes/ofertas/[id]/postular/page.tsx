"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Clock,
  Building,
  MapPin,
} from "lucide-react"

export default function PostularOfertaPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedCV, setSelectedCV] = useState("actual")
  const [cartaPresentacion, setCartaPresentacion] = useState("")
  const [disponibilidad, setDisponibilidad] = useState("inmediata")
  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Datos de ejemplo para la oferta laboral
  const oferta = {
    id: params.id,
    titulo: "Desarrollador Frontend Junior",
    empresa: "TechSolutions",
    ubicacion: "Bogotá, Colombia (Híbrido)",
    logo: "/placeholder.svg?height=80&width=80",
    tipoContrato: "Tiempo completo",
    fechaPublicacion: "Hace 2 días",
    match: 95,
  }

  // Datos de ejemplo para el CV del estudiante
  const cvEstudiante = {
    nombre: "CV_JuanPerez_2023.pdf",
    fechaActualizacion: "15 de abril de 2023",
    tamano: "1.2 MB",
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulación de envío
    setTimeout(() => {
      router.push(`/estudiantes/ofertas/${params.id}/confirmacion`)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href={`/estudiantes/ofertas/${params.id}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a la oferta</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Badge className="bg-emerald-600">{oferta.match}% match</Badge>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Postulación a vacante</h1>
          <p className="text-muted-foreground">
            Completa tu postulación para {oferta.titulo} en {oferta.empresa}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Paso 1: Selecciona tu CV</CardTitle>
                  <CardDescription>Elige el CV que quieres presentar para esta postulación</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup defaultValue="actual" value={selectedCV} onValueChange={setSelectedCV}>
                    <div className="flex items-start space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="actual" id="cv-actual" className="mt-1" />
                      <div className="grid gap-1.5 leading-none w-full">
                        <Label htmlFor="cv-actual" className="flex items-center justify-between w-full">
                          <span>Usar mi CV actual</span>
                          <Badge variant="outline" className="font-normal">
                            Recomendado
                          </Badge>
                        </Label>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="p-2 bg-muted rounded-full">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">{cvEstudiante.nombre}</p>
                            <p className="text-muted-foreground">
                              Actualizado: {cvEstudiante.fechaActualizacion} • {cvEstudiante.tamano}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm" className="ml-auto">
                            Vista previa
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="nuevo" id="cv-nuevo" className="mt-1" />
                      <div className="grid gap-1.5 leading-none w-full">
                        <Label htmlFor="cv-nuevo">Subir un nuevo CV</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sube una versión personalizada de tu CV para esta postulación
                        </p>
                        <div className="mt-3">
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                                </p>
                                <p className="text-xs text-muted-foreground">PDF, DOCX o RTF (Max. 5MB)</p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                disabled={selectedCV !== "nuevo"}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>

                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Consejo para tu CV</h3>
                        <p className="text-sm text-amber-700">
                          Asegúrate de que tu CV destaque las habilidades relevantes para este puesto: React, JavaScript
                          y CSS.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => router.push(`/estudiantes/ofertas/${params.id}`)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setStep(2)} className="bg-emerald-600 hover:bg-emerald-700">
                    Continuar
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Paso 2: Información adicional</CardTitle>
                  <CardDescription>Proporciona detalles adicionales para tu postulación</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="carta">Carta de presentación o mensaje (opcional)</Label>
                    <Textarea
                      id="carta"
                      placeholder="Escribe un mensaje personalizado para destacar por qué eres un buen candidato para este puesto..."
                      className="min-h-[150px]"
                      value={cartaPresentacion}
                      onChange={(e) => setCartaPresentacion(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Una carta de presentación personalizada puede aumentar tus posibilidades de ser seleccionado.
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Label>Disponibilidad para comenzar</Label>
                    <RadioGroup defaultValue="inmediata" value={disponibilidad} onValueChange={setDisponibilidad}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inmediata" id="disponibilidad-inmediata" />
                        <Label htmlFor="disponibilidad-inmediata">Inmediata</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-semanas" id="disponibilidad-2-semanas" />
                        <Label htmlFor="disponibilidad-2-semanas">En 2 semanas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-mes" id="disponibilidad-1-mes" />
                        <Label htmlFor="disponibilidad-1-mes">En 1 mes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negociable" id="disponibilidad-negociable" />
                        <Label htmlFor="disponibilidad-negociable">Negociable</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Label>Preguntas específicas</Label>
                    <div className="space-y-4 border rounded-lg p-4">
                      <div className="space-y-2">
                        <Label htmlFor="pregunta1">¿Tienes experiencia con React Hooks y Context API?</Label>
                        <Textarea
                          id="pregunta1"
                          placeholder="Describe tu experiencia con estas tecnologías..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 border rounded-lg p-4">
                      <div className="space-y-2">
                        <Label htmlFor="pregunta2">¿Has trabajado con metodologías ágiles? ¿Cuáles?</Label>
                        <Textarea
                          id="pregunta2"
                          placeholder="Describe tu experiencia con metodologías ágiles..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox
                      id="terms"
                      checked={aceptaTerminos}
                      onCheckedChange={(checked) => setAceptaTerminos(checked === true)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acepto los términos y condiciones
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Al postularme, acepto que UniMatch comparta mi información con {oferta.empresa} y acepto los{" "}
                        <Link href="#" className="underline">
                          términos de servicio
                        </Link>{" "}
                        y la{" "}
                        <Link href="#" className="underline">
                          política de privacidad
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Volver
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="bg-emerald-600 hover:bg-emerald-700"
                    disabled={!aceptaTerminos || isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar postulación"}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumen de la oferta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 rounded-md">
                    <AvatarImage src={oferta.logo || "/placeholder.svg"} alt={oferta.empresa} />
                    <AvatarFallback className="rounded-md">{oferta.empresa.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{oferta.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{oferta.empresa}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{oferta.ubicacion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{oferta.tipoContrato}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Publicado: {oferta.fechaPublicacion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Fecha límite: 30 de mayo de 2023</span>
                  </div>
                </div>

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
                  <h3 className="text-sm font-medium">Progreso de postulación</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs">
                        1
                      </div>
                      <span className="text-sm font-medium">Selección de CV</span>
                      {step > 1 && <CheckCircle className="h-4 w-4 text-emerald-600 ml-auto" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-6 w-6 rounded-full ${
                          step >= 2 ? "bg-emerald-600" : "bg-muted"
                        } flex items-center justify-center text-white text-xs`}
                      >
                        2
                      </div>
                      <span className={`text-sm ${step >= 2 ? "font-medium" : "text-muted-foreground"}`}>
                        Información adicional
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-white text-xs">
                        3
                      </div>
                      <span className="text-sm text-muted-foreground">Confirmación</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
