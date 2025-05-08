"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Search, CheckCircle, XCircle, Clock, FileText, Filter, ChevronDown, Eye, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Tipos para los documentos y empresas
type DocumentStatus = "pendiente" | "verificado" | "rechazado"

interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  status: DocumentStatus
  url: string
}

interface Company {
  id: string
  name: string
  type: string
  representative: string
  email: string
  registrationDate: string
  status: DocumentStatus
  documents: Document[]
}

export default function RevisionDocumentosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [rejectionReason, setRejectionReason] = useState("")
  const [showRejectionDialog, setShowRejectionDialog] = useState(false)
  const [showApprovalDialog, setShowApprovalDialog] = useState(false)

  // Datos de ejemplo para las empresas
  const companies: Company[] = [
    {
      id: "EMP-2023-001",
      name: "TechSolutions S.A.S",
      type: "Empresa",
      representative: "Carlos Rodríguez",
      email: "contacto@techsolutions.com",
      registrationDate: "10/05/2023",
      status: "pendiente",
      documents: [
        {
          id: "DOC-001",
          name: "Cámara de Comercio",
          type: "PDF",
          uploadDate: "10/05/2023",
          status: "pendiente",
          url: "#",
        },
        {
          id: "DOC-002",
          name: "RUT",
          type: "PDF",
          uploadDate: "10/05/2023",
          status: "pendiente",
          url: "#",
        },
        {
          id: "DOC-003",
          name: "Cédula Representante Legal",
          type: "JPG",
          uploadDate: "10/05/2023",
          status: "pendiente",
          url: "#",
        },
      ],
    },
    {
      id: "EMP-2023-002",
      name: "MarketPro",
      type: "Microempresa",
      representative: "Ana Gómez",
      email: "info@marketpro.co",
      registrationDate: "08/05/2023",
      status: "pendiente",
      documents: [
        {
          id: "DOC-004",
          name: "Cámara de Comercio",
          type: "PDF",
          uploadDate: "08/05/2023",
          status: "pendiente",
          url: "#",
        },
        {
          id: "DOC-005",
          name: "RUT",
          type: "PDF",
          uploadDate: "08/05/2023",
          status: "pendiente",
          url: "#",
        },
      ],
    },
    {
      id: "EMP-2023-003",
      name: "CreativeMinds",
      type: "Persona Natural",
      representative: "Laura Sánchez",
      email: "laura@creativeminds.co",
      registrationDate: "05/05/2023",
      status: "verificado",
      documents: [
        {
          id: "DOC-006",
          name: "Cédula",
          type: "JPG",
          uploadDate: "05/05/2023",
          status: "verificado",
          url: "#",
        },
        {
          id: "DOC-007",
          name: "RUT",
          type: "PDF",
          uploadDate: "05/05/2023",
          status: "verificado",
          url: "#",
        },
      ],
    },
    {
      id: "EMP-2023-004",
      name: "DataInsights",
      type: "Empresa",
      representative: "Miguel Torres",
      email: "contacto@datainsights.com",
      registrationDate: "03/05/2023",
      status: "rechazado",
      documents: [
        {
          id: "DOC-008",
          name: "Cámara de Comercio",
          type: "PDF",
          uploadDate: "03/05/2023",
          status: "rechazado",
          url: "#",
        },
        {
          id: "DOC-009",
          name: "RUT",
          type: "PDF",
          uploadDate: "03/05/2023",
          status: "pendiente",
          url: "#",
        },
      ],
    },
  ]

  const handleRejectDocument = (document: Document) => {
    setSelectedDocument(document)
    setRejectionReason("")
    setShowRejectionDialog(true)
  }

  const handleApproveDocument = (document: Document) => {
    setSelectedDocument(document)
    setShowApprovalDialog(true)
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
    }
  }

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">UniMatch</span>
            <Badge variant="outline" className="ml-2">
              Admin
            </Badge>
          </div>
          <nav className="ml-auto flex gap-4">
            <Link href="/funcionalidades_adicionales/admin/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link
              href="/funcionalidades_adicionales/admin/revision-documentos"
              className="text-sm font-medium text-emerald-600"
            >
              Revisión de Documentos
            </Link>
            <Link href="/funcionalidades_adicionales/admin/usuarios" className="text-sm font-medium">
              Usuarios
            </Link>
            <Link href="/funcionalidades_adicionales/admin/reportes" className="text-sm font-medium">
              Reportes
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Revisión de Documentos</h1>
          <p className="text-muted-foreground">Verifique y apruebe los documentos de los empleadores registrados</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nombre, email o ID..."
              className="w-full pl-8 bg-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtrar
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Todos</DropdownMenuItem>
              <DropdownMenuItem>Pendientes</DropdownMenuItem>
              <DropdownMenuItem>Verificados</DropdownMenuItem>
              <DropdownMenuItem>Rechazados</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Empresas</DropdownMenuItem>
              <DropdownMenuItem>Microempresas</DropdownMenuItem>
              <DropdownMenuItem>Personas Naturales</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabs defaultValue="pendientes">
          <TabsList className="mb-4">
            <TabsTrigger value="pendientes" className="relative">
              Pendientes
              <Badge className="ml-2 bg-amber-600 absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-[10px]">
                {companies.filter((c) => c.status === "pendiente").length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="verificados">Verificados</TabsTrigger>
            <TabsTrigger value="rechazados">Rechazados</TabsTrigger>
            <TabsTrigger value="todos">Todos</TabsTrigger>
          </TabsList>

          <TabsContent value="pendientes" className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Empresa</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Representante</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Fecha de registro</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies
                    .filter((company) => company.status === "pendiente")
                    .map((company, index) => (
                      <tr key={company.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                        <td className="px-4 py-3 text-sm">{company.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">{company.name}</td>
                        <td className="px-4 py-3 text-sm">{company.type}</td>
                        <td className="px-4 py-3 text-sm">{company.representative}</td>
                        <td className="px-4 py-3 text-sm">{company.registrationDate}</td>
                        <td className="px-4 py-3 text-sm">{getStatusBadge(company.status)}</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedCompany(company)}>
                            Ver documentos
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="verificados" className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Empresa</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Representante</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Fecha de registro</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies
                    .filter((company) => company.status === "verificado")
                    .map((company, index) => (
                      <tr key={company.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                        <td className="px-4 py-3 text-sm">{company.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">{company.name}</td>
                        <td className="px-4 py-3 text-sm">{company.type}</td>
                        <td className="px-4 py-3 text-sm">{company.representative}</td>
                        <td className="px-4 py-3 text-sm">{company.registrationDate}</td>
                        <td className="px-4 py-3 text-sm">{getStatusBadge(company.status)}</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedCompany(company)}>
                            Ver documentos
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="rechazados" className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Empresa</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Representante</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Fecha de registro</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies
                    .filter((company) => company.status === "rechazado")
                    .map((company, index) => (
                      <tr key={company.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                        <td className="px-4 py-3 text-sm">{company.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">{company.name}</td>
                        <td className="px-4 py-3 text-sm">{company.type}</td>
                        <td className="px-4 py-3 text-sm">{company.representative}</td>
                        <td className="px-4 py-3 text-sm">{company.registrationDate}</td>
                        <td className="px-4 py-3 text-sm">{getStatusBadge(company.status)}</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedCompany(company)}>
                            Ver documentos
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="todos" className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Empresa</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Representante</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Fecha de registro</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies.map((company, index) => (
                    <tr key={company.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="px-4 py-3 text-sm">{company.id}</td>
                      <td className="px-4 py-3 text-sm font-medium">{company.name}</td>
                      <td className="px-4 py-3 text-sm">{company.type}</td>
                      <td className="px-4 py-3 text-sm">{company.representative}</td>
                      <td className="px-4 py-3 text-sm">{company.registrationDate}</td>
                      <td className="px-4 py-3 text-sm">{getStatusBadge(company.status)}</td>
                      <td className="px-4 py-3 text-sm">
                        <Button variant="ghost" size="sm" onClick={() => setSelectedCompany(company)}>
                          Ver documentos
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>

        {selectedCompany && (
          <Card className="mt-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Documentos de {selectedCompany.name}</CardTitle>
                  <CardDescription>Revise y verifique los documentos subidos por la empresa</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedCompany(null)}>
                  Cerrar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>ID de la empresa</Label>
                    <p className="text-sm font-medium">{selectedCompany.id}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo de entidad</Label>
                    <p className="text-sm font-medium">{selectedCompany.type}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Representante legal</Label>
                    <p className="text-sm font-medium">{selectedCompany.representative}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Correo electrónico</Label>
                    <p className="text-sm font-medium">{selectedCompany.email}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Fecha de registro</Label>
                    <p className="text-sm font-medium">{selectedCompany.registrationDate}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Estado actual</Label>
                    <div>{getStatusBadge(selectedCompany.status)}</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Documentos subidos</h3>

                  <div className="grid gap-4">
                    {selectedCompany.documents.map((doc) => (
                      <div key={doc.id} className="flex items-start justify-between p-4 border rounded-lg">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-muted rounded-full">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">{doc.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {doc.type}
                              </Badge>
                              <span className="text-xs text-muted-foreground">Subido el {doc.uploadDate}</span>
                              {getStatusBadge(doc.status)}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Eye className="h-3 w-3" />
                            Ver
                          </Button>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-3 w-3" />
                            Descargar
                          </Button>
                          {doc.status === "pendiente" && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 text-red-600"
                                onClick={() => handleRejectDocument(doc)}
                              >
                                <XCircle className="h-3 w-3" />
                                Rechazar
                              </Button>
                              <Button
                                size="sm"
                                className="gap-1 bg-emerald-600 hover:bg-emerald-700"
                                onClick={() => handleApproveDocument(doc)}
                              >
                                <CheckCircle className="h-3 w-3" />
                                Aprobar
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Volver a la lista</Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="gap-2 text-red-600"
                  disabled={selectedCompany.status !== "pendiente"}
                >
                  <XCircle className="h-4 w-4" />
                  Rechazar todos
                </Button>
                <Button
                  className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                  disabled={selectedCompany.status !== "pendiente"}
                >
                  <CheckCircle className="h-4 w-4" />
                  Aprobar todos
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </main>

      <Dialog open={showRejectionDialog} onOpenChange={setShowRejectionDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rechazar documento</DialogTitle>
            <DialogDescription>
              Por favor, indique el motivo por el cual está rechazando este documento.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Documento</Label>
              <p className="text-sm font-medium">{selectedDocument?.name}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Motivo del rechazo</Label>
              <Textarea
                id="reason"
                placeholder="Explique por qué está rechazando este documento..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectionDialog(false)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              disabled={!rejectionReason.trim()}
              onClick={() => setShowRejectionDialog(false)}
            >
              Confirmar rechazo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showApprovalDialog} onOpenChange={setShowApprovalDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Aprobar documento</DialogTitle>
            <DialogDescription>¿Está seguro de que desea aprobar este documento?</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Documento</Label>
              <p className="text-sm font-medium">{selectedDocument?.name}</p>
            </div>
            <div className="space-y-2">
              <Label>Tipo</Label>
              <p className="text-sm font-medium">{selectedDocument?.type}</p>
            </div>
            <div className="space-y-2">
              <Label>Fecha de carga</Label>
              <p className="text-sm font-medium">{selectedDocument?.uploadDate}</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApprovalDialog(false)}>
              Cancelar
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setShowApprovalDialog(false)}>
              Confirmar aprobación
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
