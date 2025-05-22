"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IniciarSesionSelector() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">¿Quién eres?</h1>
      <p className="text-gray-500 mb-8">Selecciona tu rol para iniciar sesión en UniMatch</p>
      <div className="flex gap-4">
        <Link href="/estudiantes/iniciar-sesion">
          <Button className="bg-emerald-600 hover:bg-emerald-700">Soy Estudiante</Button>
        </Link>
        <Link href="/empleadores/iniciar-sesion">
          <Button variant="outline">Soy Empleador</Button>
        </Link>
      </div>
    </div>
  );
}