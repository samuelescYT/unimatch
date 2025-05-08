"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, UploadCloud } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PerfilEmpleadorPage() {
  const [editing, setEditing] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<"pendiente" | "verificado" | "rechazado">("pendiente")
  const [documentos, setDocumentos] = useState({
    camaraComercio: null,
    rut: null,
    cedula: null,
    contratoModelo: null,
    portafolio: null,
  })

  const [perfil, setPerfil] = useState({
    nombreEmpresa: "TechSolutions S.A.S",
    representante: "Camila Torres",
    email: "contacto@techsolutions.com",
    telefono: "+57 301 555 1234",
    sitioWeb: "https://techsolutions.com",
    descripcion:
      "Empresa enfocada en soluciones tecnológicas personalizadas para el sector educativo y empresarial.",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPerfil({ ...perfil, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    setDocumentos({ ...documentos, [name]: files?.[0] || null })
  }

  return (
    <div className="container py-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-emerald-600" />
            Perfil de empresa
            <Badge variant={verificationStatus === "verificado" ? "default" : "outline"} className="ml-auto">
              {verificationStatus === "verificado"
                ? "🟢 Verificado"
                : verificationStatus === "rechazado"
                ? "🔴 Rechazado"
                : "🕒 Pendiente"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <Avatar className="h-28 w-28 border shadow">
              <AvatarImage src={perfil.logo} alt="Logo empresa" />
              <AvatarFallback>TS</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-xl font-semibold">{perfil.nombreEmpresa}</h2>
              <p className="text-muted-foreground text-sm">{perfil.sitioWeb}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label>Nombre legal de la empresa</Label>
              <Input name="nombreEmpresa" value={perfil.nombreEmpresa} disabled={!editing} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label>Representante legal</Label>
              <Input name="representante" value={perfil.representante} disabled={!editing} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label>Correo corporativo</Label>
              <Input name="email" value={perfil.email} disabled={!editing} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label>Teléfono</Label>
              <Input name="telefono" value={perfil.telefono} disabled={!editing} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label>Sitio web</Label>
              <Input name="sitioWeb" value={perfil.sitioWeb} disabled={!editing} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label>Descripción</Label>
              <Textarea name="descripcion" value={perfil.descripcion} disabled={!editing} onChange={handleChange} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="outline" onClick={() => setEditing(!editing)}>
            {editing ? "Cancelar" : "Editar"}
          </Button>
          {editing && (
            <Button className="ml-2 bg-emerald-600 hover:bg-emerald-700">Guardar cambios</Button>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UploadCloud className="h-5 w-5 text-emerald-600" />
            Documentos de verificación
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="camaraComercio">📄 Cámara de Comercio (PDF)</Label>
            <Input type="file" name="camaraComercio" accept=".pdf" onChange={handleFileChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rut">🧾 RUT</Label>
            <Input type="file" name="rut" accept=".pdf" onChange={handleFileChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cedula">🪪 Cédula del representante legal</Label>
            <Input type="file" name="cedula" accept=".pdf,.png,.jpg" onChange={handleFileChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contratoModelo">📑 Contrato modelo (si aplica)</Label>
            <Input type="file" name="contratoModelo" accept=".pdf" onChange={handleFileChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="portafolio">📎 Portafolio o referencias</Label>
            <Input type="file" name="portafolio" accept=".pdf,.doc,.png,.jpg" onChange={handleFileChange} />
          </div>
        </CardContent>
        
      </Card>
    </div>
  )
}
