"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Award,
  Edit,
  Download,
  CheckCircle,
  Calendar,
  BookOpen,
  ArrowLeft,
  Verified,
} from "lucide-react"

export default function PerfilPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/50">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/estudiantes/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
          <div className="ml-auto">
            <Button variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Editar perfil
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <Card>
          <div className="h-40 bg-gradient-to-r from-emerald-500 to-teal-500 relative rounded-t-md" />
          <CardContent className="pt-0">
            <div className="-mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
                <AvatarFallback className="text-2xl">JP</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 pt-2 sm:pt-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">Juan Pérez</h1>
                  <Badge className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verificado
                  </Badge>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <p className="text-muted-foreground">Estudiante de Ingeniería Informática</p>
                  <Verified className="text-emerald-600 h-4 w-4"/>
                </div>
                <p className="text-muted-foreground">Universidad Nacional de Tecnología</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="cv" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="cv" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Hoja de Vida</span>
            </TabsTrigger>
            <TabsTrigger value="certificados" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Certificados</span>
            </TabsTrigger>
            <TabsTrigger value="educacion" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Educación</span>
            </TabsTrigger>
          </TabsList>

          {/* --- Hoja de vida --- */}
          <TabsContent value="cv" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Hoja de Vida</CardTitle>
                    <CardDescription>Tu currículum profesional</CardDescription>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Resumen profesional</h3>
                  <p className="text-muted-foreground">
                    Estudiante de último año de Ingeniería Informática con experiencia en desarrollo web y
                    aplicaciones móviles. Apasionado por la tecnología y el aprendizaje continuo. Busco
                    oportunidades para aplicar mis conocimientos y seguir creciendo profesionalmente.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React",
                      "Node.js",
                      "Python",
                      "Java",
                      "SQL",
                      "Git",
                      "Diseño UX/UI",
                    ].map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experiencia</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Desarrollador Web (Práctica)</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Ene 2023 - Jun 2023</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">TechSolutions</p>
                      <p className="text-sm mt-1">
                        Desarrollo de interfaces de usuario con React. Implementación de APIs RESTful con Node.js.
                        Colaboración en equipo utilizando metodologías ágiles.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Asistente de Investigación</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Jul 2022 - Dic 2022</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Universidad Nacional de Tecnología</p>
                      <p className="text-sm mt-1">
                        Apoyo en proyecto de investigación sobre inteligencia artificial aplicada a la educación.
                        Análisis de datos y desarrollo de prototipos.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Materias cursadas</h3>
                  <p className="text-sm text-muted-foreground mb-2">Certificado por la universidad</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                    <li>Fundamentos de Programación</li>
                    <li>Matemáticas Discretas</li>
                    <li>Estructuras de Datos</li>
                    <li>Bases de Datos</li>
                    <li>Sistemas Operativos</li>
                    <li>Redes de Computadores</li>
                    <li>Ingeniería de Software</li>
                    <li>Arquitectura de Computadores</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- Certificados --- */}
          <TabsContent value="certificados" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificados</CardTitle>
                <CardDescription>Tus certificaciones y cursos completados</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {[
                  {
                    nombre: "Desarrollo Web Full Stack",
                    entidad: "Platzi",
                    codigo: "PLTZ-DW-2023",
                  },
                  {
                    nombre: "Python para Ciencia de Datos",
                    entidad: "Coursera",
                    codigo: "CRS-PDS-2022",
                  },
                  {
                    nombre: "UX/UI Design Fundamentals",
                    entidad: "Udemy",
                    codigo: "UDM-UXUI-2023",
                  },
                ].map((cert, i) => (
                  <div key={i} className="flex items-start justify-between border rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-100 rounded-full">
                        <Award className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{cert.nombre}</h4>
                        <p className="text-sm text-muted-foreground">{cert.entidad}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Código: {cert.codigo}
                          </Badge>
                          <Badge className="bg-green-600 text-xs">Verificado</Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- Educación --- */}
          <TabsContent value="educacion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Educación</CardTitle>
                <CardDescription>Tu formación académica</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Ingeniería Informática</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>2020 - Presente</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Universidad Nacional de Tecnología</p>
                  <div className="mt-2">
                    <Badge variant="outline">Promedio: 8.7/10</Badge>
                  </div>
                  <p className="text-sm mt-2">
                    Especialización en Desarrollo de Software y Sistemas Inteligentes. Participación en proyectos de
                    investigación y competencias de programación.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Bachillerato en Ciencias</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>2016 - 2019</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Instituto Tecnológico Superior</p>
                  <p className="text-sm mt-2">
                    Graduado con honores. Participación en olimpiadas de matemáticas y física.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
