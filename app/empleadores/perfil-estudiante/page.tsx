"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ArrowLeft, CheckCircle, FileText, Award, BookOpen, MessageSquare } from "lucide-react"

export default function PerfilEstudianteVistaEmpleador() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/50">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/empleadores/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <Card>
          <div className="h-40 bg-gradient-to-r from-emerald-500 to-teal-500 relative rounded-t-md" />
          <CardContent className="pt-0">
            <div className="-mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                <AvatarImage src="https://randomuser.me/api/portraits/women/45.jpg" alt="Avatar" />
                <AvatarFallback className="text-2xl">AM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 pt-2 sm:pt-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">Ana Martínez</h1>
                  <Badge className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verificado
                  </Badge>
                </div>
                <p className="text-muted-foreground pt-4">Estudiante de Ingeniería de Sistemas</p>
                <p className="text-muted-foreground">Universidad Nacional</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="cv" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="cv" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              CV
            </TabsTrigger>
            <TabsTrigger value="certificados" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certificados
            </TabsTrigger>
            <TabsTrigger value="educacion" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Educación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cv">
            <Card>
              <CardHeader>
                <CardTitle>Resumen profesional</CardTitle>
                <CardDescription>
                  Detalles clave del perfil de la estudiante
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <p className="text-muted-foreground">
                  Estudiante con fuerte base en desarrollo web y programación. En búsqueda de prácticas para aplicar
                  conocimientos técnicos en un entorno profesional.
                </p>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Habilidades principales</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "Node.js", "SQL"].map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Última experiencia</h3>
                  <div className="grid gap-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Desarrolladora Frontend (proyecto universitario)</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Ago 2023 - Dic 2023</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Universidad Nacional</p>
                    <p className="text-sm mt-1">
                      Diseño e implementación de interfaz web usando React. Gestión de estado con Redux. Comunicación
                      con backend simulado por JSON Server.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificados">
            <Card>
              <CardHeader>
                <CardTitle>Certificados</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">React para principiantes</h4>
                  <p className="text-sm text-muted-foreground">CertiCampus · 2023</p>
                  <Badge variant="outline">ID: RCT-12345</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="educacion">
            <Card>
              <CardHeader>
                <CardTitle>Educación</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Ingeniería de Sistemas</h4>
                  <p className="text-sm text-muted-foreground">Universidad Nacional · 2020 - Presente</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Link href="/funcionalidades_adicionales/empleadores/confirmacion-contratacion">
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
              <MessageSquare className="h-4 w-4" />
              Contactar estudiante
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
