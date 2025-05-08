"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Upload, CheckCircle, Clock, XCircle, Link2, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

type DocumentStatus = "pendiente" | "verificado" | "rechazado" | "no_cargado"

interface Document {
  id: string
  name: string
  description: string
  status: DocumentStatus
  required: boolean
  file?: File | null
  url?: string
}

export default function DocumentosPage() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "camara_comercio",
      name: "Cámara de Comercio",
      description: "Certificado de existencia y representación legal (no mayor a 30 días)",
      status: "no_cargado",
      required: true,
      file: null,
    },
    {
      id: "rut",
      name: "RUT",
      description: "Registro Único Tributario actualizado",
      status: "no_cargado",
      required: true,
      file: null,
    },
    {
      id: "cedula",
      name: "Cédula Representante Legal",
      description: "Documento de identidad del representante legal",
      status: "no_cargado",
      required: true,
      file: null,
    },
    {
      id: "contrato",
      name: "Contrato Modelo",
      description: "Modelo de contrato que utiliza con sus empleados",
      status: "no_cargado",
      required: false,
      file: null,
    },
  ])

  const [portfolioUrl, setPortfolioUrl] = useState("")
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docId: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Simular carga
      setUploadProgress((prev) => ({ ...prev, [docId]: 0 }))

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const currentProgress = prev[docId] || 0
          if (currentProgress >= 100) {
            clearInterval(interval)
            return prev
          }
          return { ...prev, [docId]: currentProgress + 10 }
        })
      }, 300)

      // Actualizar estado de documentos
      setDocuments((docs) => docs.map((doc) => (doc.id === docId ? { ...doc, file, status: "pendiente" } : doc)))
    }
  }

  const getStatusBadge = (status: DocumentStatus) => {
    switch (status) {
      case "pendiente":
        return (
          <Badge variant="outline" className="flex items-center gap-1 text-amber-600 border-amber-600">
            <Clock className="h-3 w-3" />
            Pendiente
          </Badge>
        )
      case "verificado":
        return (
          <Badge variant="outline" className="flex items-center gap-1 text-emerald-600 border-emerald-600">
            <CheckCircle className="h-3 w-3" />
            Verificado
          </Badge>
        )
      case "rechazado":
        return (
          <Badge variant="outline" className="flex items-center gap-1 text-red-600 border-red-600">
            <XCircle className="h-3 w-3" />
            Rechazado
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="container flex min-h-screen w-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b">
        <Link href="/empleadores/registro" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al registro</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Paso 2 de 3</span>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Carga de Documentos</h1>
            <p className="text-muted-foreground">Suba los documentos requeridos para verificar su empresa</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Documentos requeridos</CardTitle>
              <CardDescription>
                Estos documentos son necesarios para verificar la legitimidad de su empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {documents.map((doc) => (
                <div key={doc.id} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <Label className="flex items-center gap-2">
                        {doc.name}
                        {doc.required && <span className="text-red-500">*</span>}
                      </Label>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    {getStatusBadge(doc.status)}
                  </div>

                  {doc.status === "pendiente" && uploadProgress[doc.id] < 100 && (
                    <Progress value={uploadProgress[doc.id]} className="h-2" />
                  )}

                  {doc.status === "rechazado" && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>Documento rechazado. Por favor, suba un documento válido.</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex items-center gap-2">
                    <Input
                      type="file"
                      id={doc.id}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, doc.id)}
                    />
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => document.getElementById(doc.id)?.click()}
                      disabled={doc.status === "verificado"}
                    >
                      <Upload className="h-4 w-4" />
                      {doc.file ? "Cambiar archivo" : "Subir archivo"}
                    </Button>
                    {doc.file && <span className="text-sm text-muted-foreground">{doc.file.name}</span>}
                  </div>

                  <Separator className="my-4" />
                </div>
              ))}

              <div className="space-y-2">
                <Label htmlFor="portfolio">Enlaces a portafolios o sitios web (opcional)</Label>
                <div className="flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="portfolio"
                    placeholder="https://www.portfolio.com"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Puede agregar enlaces a su portafolio, trabajos anteriores o sitios web relevantes
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Guardar y continuar después</Button>
              <Link href="/empleadores/dashboard">
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={documents.some((doc) => doc.required && doc.status === "no_cargado")}
              >
                Continuar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Todos los documentos serán revisados por nuestro equipo. El proceso puede tomar hasta 48 horas hábiles.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

// Componente Alert importado de shadcn/ui
const Alert = ({ variant, className, children }) => {
  return <div className={`flex items-center gap-2 rounded-md border p-3 ${className}`}>{children}</div>
}

const AlertDescription = ({ children }) => {
  return <div className="text-sm">{children}</div>
}
