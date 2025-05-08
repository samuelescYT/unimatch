"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  MapPin,
  Building,
  User,
  CreditCard,
  FileText,
  AlertTriangle,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ConfirmacionContratacionPage() {
  const [showRejectionDialog, setShowRejectionDialog] = useState(false)
  const [motivoRechazo, setMotivoRechazo] = useState("")
  const [aceptaTerminos, setAceptaTerminos] = useState(false)

  // Datos de ejemplo para la vacante y el estudiante
  const vacante = {
    id: "VAC-2023-0042",
    titulo: "Desarrollador Frontend Junior",
    empresa: "TechSolutions S.A.S",
    tipo: "Tiempo completo",
    modalidad: "Híbrido",
    ubicacion: "Bogotá, Colombia",
    salario: "2.500.000 - 3.000.000 COP",
    fechaInicio: "1 de junio de 2023",
    estado: "Aceptada por el estudiante",
    fechaAceptacion: "15 de mayo de 2023",
  }

  const estudiante = {
    nombre: "Ana Martínez",
    universidad: "Universidad Nacional",
    carrera: "Ingeniería de Sistemas",
    semestre: "9no semestre",
    correo: "ana.martinez@universidad.edu.co",
    telefono: "+57 300 123 4567",
  }

  const costoContratacion = {
    subtotal: 500000,
    impuestos: 95000,
    total: 595000,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/empleadores/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Badge className="bg-amber-600">Pendiente de confirmación</Badge>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Confirmación de Contratación</h1>
          <p className="text-muted-foreground">
            El estudiante ha aceptado la oferta. Confirme la contratación para proceder.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalles de la vacante</CardTitle>
                <CardDescription>Información sobre la posición aceptada por el estudiante</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                    ID: {vacante.id}
                  </Badge>
                  <Badge className="bg-emerald-600">{vacante.estado}</Badge>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{vacante.titulo}</h3>
                  <p className="text-muted-foreground">{vacante.empresa}</p>
                </div>

                <Separator />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Tipo: {vacante.tipo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Modalidad: {vacante.modalidad}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Ubicación: {vacante.ubicacion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Salario: {vacante.salario}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Fecha de inicio: {vacante.fechaInicio}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Aceptada el: {vacante.fechaAceptacion}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información del estudiante</CardTitle>
                <CardDescription>Datos de contacto del estudiante contratado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-full">
                    <User className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{estudiante.nombre}</h3>
                    <p className="text-sm text-muted-foreground">{estudiante.universidad}</p>
                    <p className="text-sm text-muted-foreground">
                      {estudiante.carrera} - {estudiante.semestre}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Correo electrónico</p>
                    <p className="text-sm">{estudiante.correo}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Teléfono</p>
                    <p className="text-sm">{estudiante.telefono}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Ver perfil completo
                  </Button>
                  <Button variant="outline" size="sm">
                    Descargar CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Términos de contratación</CardTitle>
                <CardDescription>Revise y acepte los términos para confirmar la contratación</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Información importante</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Al confirmar esta contratación, acepta pagar la tarifa de intermediación de UniMatch. Esta
                        tarifa es un único pago por la contratación exitosa del estudiante.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
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
                      He leído y acepto los{" "}
                      <Link href="#" className="underline">
                        términos de servicio
                      </Link>{" "}
                      y la{" "}
                      <Link href="#" className="underline">
                        política de privacidad
                      </Link>{" "}
                      de UniMatch.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2 text-red-600" onClick={() => setShowRejectionDialog(true)}>
                  <XCircle className="h-4 w-4" />
                  Rechazar contratación
                </Button>
                <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700" disabled={!aceptaTerminos}>
                  <CheckCircle className="h-4 w-4" />
                  Confirmar contratación
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumen de pago</CardTitle>
                <CardDescription>Tarifa por contratación exitosa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tarifa de contratación</span>
                    <span className="font-medium">${costoContratacion.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Impuestos (19%)</span>
                    <span className="font-medium">${costoContratacion.impuestos.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total a pagar</span>
                    <span className="font-bold">${costoContratacion.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-3 border rounded-lg bg-muted/30">
                  <div className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      La tarifa de contratación es un pago único que cubre los servicios de intermediación de UniMatch.
                      No hay cargos recurrentes.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">¿Qué incluye?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Verificación de antecedentes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Validación académica</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Soporte durante 3 meses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Garantía de reemplazo</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={!aceptaTerminos}>
                  Proceder al pago
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={showRejectionDialog} onOpenChange={setShowRejectionDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rechazar contratación</DialogTitle>
            <DialogDescription>
              Por favor, indique el motivo por el cual está rechazando la contratación.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="motivo">Motivo del rechazo</Label>
            <Textarea
              id="motivo"
              placeholder="Explique por qué está rechazando la contratación..."
              value={motivoRechazo}
              onChange={(e) => setMotivoRechazo(e.target.value)}
              className="min-h-[100px]"
            />
            <p className="text-sm text-muted-foreground">
              Esta información será compartida con el estudiante y el equipo de UniMatch.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectionDialog(false)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              disabled={!motivoRechazo.trim()}
              onClick={() => setShowRejectionDialog(false)}
            >
              Confirmar rechazo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
