"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegistroEmpleadorPage() {
  const [tipoEntidad, setTipoEntidad] = useState("empresa")
  const [correo, setCorreo] = useState("")
  const [correoError, setCorreoError] = useState(false)

  const validarCorreoCorporativo = (email: string) => {
    // Esta es una validación simple. En producción, se necesitaría una validación más robusta
    const dominiosGratuitos = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com"]
    const dominio = email.split("@")[1]
    return !dominiosGratuitos.includes(dominio)
  }

  const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setCorreo(valor)

    if (valor.includes("@")) {
      setCorreoError(!validarCorreoCorporativo(valor))
    } else {
      setCorreoError(false)
    }
  }

  return (
    <div className="container flex min-h-screen w-screen flex-col">
      <header className="flex h-16 items-center border-b">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al inicio</span>
        </Link>
      </header>

      <main className="flex-1 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Registro de Empleador</h1>
            <p className="text-muted-foreground">
              Complete el formulario para registrar su empresa en UniMatch y comenzar a buscar talento universitario
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de la empresa</CardTitle>
              <CardDescription>Ingrese los datos de su organización</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Tipo de entidad</Label>
                  <RadioGroup defaultValue="empresa" className="flex gap-4 mt-2" onValueChange={setTipoEntidad}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="empresa" id="empresa" />
                      <Label htmlFor="empresa">Empresa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="microempresa" id="microempresa" />
                      <Label htmlFor="microempresa">Microempresa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="persona_natural" id="persona_natural" />
                      <Label htmlFor="persona_natural">Persona Natural</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre_empresa">
                      {tipoEntidad === "persona_natural" ? "Nombre completo" : "Nombre de la empresa"}
                    </Label>
                    <Input
                      id="nombre_empresa"
                      placeholder={tipoEntidad === "persona_natural" ? "Juan Pérez" : "Empresa S.A.S"}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nit">
                      {tipoEntidad === "persona_natural" ? "Número de identificación" : "NIT"}
                    </Label>
                    <Input
                      id="nit"
                      placeholder={tipoEntidad === "persona_natural" ? "1234567890" : "900.123.456-7"}
                      required
                    />
                  </div>
                </div>

                {tipoEntidad !== "persona_natural" && (
                  <div className="space-y-2">
                    <Label htmlFor="representante">Representante legal</Label>
                    <Input id="representante" placeholder="Nombre del representante legal" required />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="correo">Correo corporativo</Label>
                  <Input
                    id="correo"
                    type="email"
                    placeholder="contacto@empresa.com"
                    required
                    value={correo}
                    onChange={handleCorreoChange}
                  />
                  {correoError && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Por favor utilice un correo corporativo. Los correos personales no son aceptados para cuentas
                        empresariales.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="sitio_web">Sitio web</Label>
                    <Input id="sitio_web" placeholder="https://www.empresa.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" placeholder="+57 300 123 4567" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección física</Label>
                  <Input id="direccion" placeholder="Calle 123 # 45-67, Ciudad" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción de la empresa</Label>
                  <Textarea
                    id="descripcion"
                    placeholder="Breve descripción de su empresa, sector, tamaño y actividad principal"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm_password">Confirmar contraseña</Label>
                  <Input id="confirm_password" type="password" placeholder="••••••••" required />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/empleadores/documentos" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Continuar al siguiente paso</Button>
              </Link>
            </CardFooter>
          </Card>

          <p className="px-8 text-center text-sm text-muted-foreground mt-4">
            ¿Ya tiene una cuenta?{" "}
            <Link href="/empleadores/iniciar-sesion" className="underline underline-offset-4 hover:text-primary">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
