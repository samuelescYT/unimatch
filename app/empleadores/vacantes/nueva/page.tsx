"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"


export default function NuevaVacantePage() {
  const [requisitos, setRequisitos] = useState([""])
  const [beneficios, setBeneficios] = useState([""])
  const [habilidades, setHabilidades] = useState("")
  const [habilidadesLista, setHabilidadesLista] = useState<string[]>([])
  const router = useRouter()

const handlePublicar = () => {
  const confirmado = window.confirm("✅ Vacante publicada con éxito.")
  if (confirmado) {
    router.push("/empleadores/dashboard")
  }
}



  const agregarRequisito = () => {
    setRequisitos([...requisitos, ""])
  }

  const eliminarRequisito = (index: number) => {
    const nuevosRequisitos = [...requisitos]
    nuevosRequisitos.splice(index, 1)
    setRequisitos(nuevosRequisitos)
  }

  const actualizarRequisito = (index: number, valor: string) => {
    const nuevosRequisitos = [...requisitos]
    nuevosRequisitos[index] = valor
    setRequisitos(nuevosRequisitos)
  }

  const agregarBeneficio = () => {
    setBeneficios([...beneficios, ""])
  }

  const eliminarBeneficio = (index: number) => {
    const nuevosBeneficios = [...beneficios]
    nuevosBeneficios.splice(index, 1)
    setBeneficios(nuevosBeneficios)
  }

  const actualizarBeneficio = (index: number, valor: string) => {
    const nuevosBeneficios = [...beneficios]
    nuevosBeneficios[index] = valor
    setBeneficios(nuevosBeneficios)
  }

  const agregarHabilidad = () => {
    if (habilidades.trim()) {
      setHabilidadesLista([...habilidadesLista, habilidades.trim()])
      setHabilidades("")
    }
  }

  const eliminarHabilidad = (index: number) => {
    const nuevasHabilidades = [...habilidadesLista]
    nuevasHabilidades.splice(index, 1)
    setHabilidadesLista(nuevasHabilidades)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      agregarHabilidad()
    }
  }

  return (
    <div className="container flex min-h-screen w-screen flex-col">
      <header className="flex h-16 items-center border-b px-4">
        <Link href="/empleadores/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al dashboard</span>
        </Link>
      </header>

      <main className="flex-1 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Publicar Nueva Vacante</h1>
            <p className="text-muted-foreground">Complete el formulario para publicar una nueva oferta laboral</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de la vacante</CardTitle>
              <CardDescription>Detalle la posición que desea cubrir</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título del cargo</Label>
                <Input id="titulo" placeholder="Ej: Desarrollador Frontend Junior" required />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tipo_contrato">Tipo de contrato</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tiempo_completo">Tiempo completo</SelectItem>
                      <SelectItem value="medio_tiempo">Medio tiempo</SelectItem>
                      <SelectItem value="proyecto">Por proyecto</SelectItem>
                      <SelectItem value="practica">Práctica profesional</SelectItem>
                      <SelectItem value="pasantia">Pasantía</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modalidad">Modalidad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar modalidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="remoto">Remoto</SelectItem>
                      <SelectItem value="hibrido">Híbrido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ubicacion">Ubicación</Label>
                  <Input id="ubicacion" placeholder="Ej: Bogotá, Colombia" />
                  <p className="text-xs text-muted-foreground">Deje en blanco si es 100% remoto</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Área</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="ventas">Ventas</SelectItem>
                      <SelectItem value="finanzas">Finanzas</SelectItem>
                      <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                      <SelectItem value="operaciones">Operaciones</SelectItem>
                      <SelectItem value="diseno">Diseño</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción del cargo</Label>
                <Textarea
                  id="descripcion"
                  placeholder="Describa las responsabilidades y el contexto del cargo"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>Requisitos</Label>
                {requisitos.map((requisito, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={requisito}
                      onChange={(e) => actualizarRequisito(index, e.target.value)}
                      placeholder={`Requisito ${index + 1}`}
                    />
                    {requisitos.length > 1 && (
                      <Button variant="ghost" size="icon" onClick={() => eliminarRequisito(index)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" type="button" className="gap-2" onClick={agregarRequisito}>
                  <Plus className="h-4 w-4" />
                  Agregar requisito
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>Beneficios</Label>
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={beneficio}
                      onChange={(e) => actualizarBeneficio(index, e.target.value)}
                      placeholder={`Beneficio ${index + 1}`}
                    />
                    {beneficios.length > 1 && (
                      <Button variant="ghost" size="icon" onClick={() => eliminarBeneficio(index)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" type="button" className="gap-2" onClick={agregarBeneficio}>
                  <Plus className="h-4 w-4" />
                  Agregar beneficio
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>Habilidades requeridas</Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={habilidades}
                    onChange={(e) => setHabilidades(e.target.value)}
                    placeholder="Ej: JavaScript"
                    onKeyDown={handleKeyDown}
                  />
                  <Button variant="outline" type="button" onClick={agregarHabilidad}>
                    Agregar
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {habilidadesLista.map((habilidad, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1 py-1 px-2">
                      {habilidad}
                      <button onClick={() => eliminarHabilidad(index)} className="ml-1 rounded-full hover:bg-muted p-1">
                        <Trash2 className="h-3 w-3 text-red-500" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Presione Enter para agregar cada habilidad</p>
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="remuneracion">Remuneración</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a_convenir">A convenir</SelectItem>
                      <SelectItem value="minimo">Salario mínimo</SelectItem>
                      <SelectItem value="1_2">1-2 millones</SelectItem>
                      <SelectItem value="2_3">2-3 millones</SelectItem>
                      <SelectItem value="3_4">3-4 millones</SelectItem>
                      <SelectItem value="4_5">4-5 millones</SelectItem>
                      <SelectItem value="5_mas">Más de 5 millones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experiencia">Experiencia requerida</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar experiencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sin_experiencia">Sin experiencia</SelectItem>
                      <SelectItem value="menos_1">Menos de 1 año</SelectItem>
                      <SelectItem value="1_2">1-2 años</SelectItem>
                      <SelectItem value="3_5">3-5 años</SelectItem>
                      <SelectItem value="mas_5">Más de 5 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="destacada" />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="destacada"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Destacar vacante
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Las vacantes destacadas aparecen en la parte superior de los resultados de búsqueda (costo
                    adicional)
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Guardar como borrador</Button>
              <Button onClick={handlePublicar} className="bg-emerald-600 hover:bg-emerald-700">
                Publicar vacante
              </Button>

            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
