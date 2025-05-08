"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function LoginEstudiantePage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center justify-center text-sm font-medium"
      >
        ← Volver al inicio
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Iniciar sesión</h1>
          <p className="text-sm text-muted-foreground">Ingresa con tu correo institucional y contraseña</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Login estudiante</CardTitle>
            <CardDescription>Accede a tu cuenta de UniMatch</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo institucional</Label>
              <Input id="email" type="email" placeholder="juan.perez@universidad.edu" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/estudiantes/dashboard" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Iniciar sesión</Button>
            </Link>
          </CardFooter>
        </Card>
        <p className="px-8 text-center text-sm text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <Link href="/estudiantes/registro" className="underline underline-offset-4 hover:text-primary">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}
