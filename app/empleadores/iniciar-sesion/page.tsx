"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function IniciarSesionEmpleador() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de autenticación con backend
    if (!correo.includes("@") || password.length < 6) {
      setError(true);
    } else {
      setError(false);
      // Redirigir o autenticar
    }
  };

  return (
    <div className="container flex flex-col min-h-screen">
      <header className="flex h-16 items-center border-b">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al inicio</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Iniciar sesión como Empleador</h1>
            <p className="text-sm text-gray-500">
              Accede a tu cuenta para gestionar ofertas y candidatos.
            </p>
          </div>

          <Card>
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle>Datos de acceso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="correo">Correo</Label>
                  <Input
                    id="correo"
                    type="email"
                    placeholder="empleador@empresa.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Credenciales incorrectas. Por favor, verifica tus datos.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter>
                <Link href={"/empleadores/dashboard"}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit">
                        Iniciar sesión
                    </Button>
                </Link>
              </CardFooter>
            </form>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-4">
            ¿No tienes una cuenta? {" "}
            <Link href="/empleadores/registro" className="underline hover:text-primary">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
