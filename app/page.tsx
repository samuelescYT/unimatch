import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">UniMatch</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/estudiantes/registro" className="text-sm font-medium hover:underline underline-offset-4">
              Registro Estudiante
            </Link>
            <Link href="/empleadores/registro" className="text-sm font-medium hover:underline underline-offset-4">
              Registro Empleador
            </Link>
            <Link href="/iniciar-sesion" className="text-sm font-medium hover:underline underline-offset-4">
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Conecta con tu futuro profesional
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  UniMatch te ayuda a encontrar las mejores oportunidades laborales adaptadas a tu perfil universitario.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/estudiantes/registro">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Soy Estudiante</Button>
                  </Link>
                  <Link href="/empleadores/registro">
                    <Button variant="outline">Soy Empleador</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <img
                  src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="UniMatch Dashboard"
                  className="rounded-lg object-cover shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Características principales
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre todo lo que UniMatch tiene para ofrecerte
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Ofertas personalizadas</h3>
                <p className="text-sm text-gray-500 text-center">
                  Recibe ofertas laborales adaptadas a tu perfil académico y profesional.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Verificación universitaria</h3>
                <p className="text-sm text-gray-500 text-center">
                  Destaca con tu insignia de verificación universitaria ante los empleadores.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 shadow-sm">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Simulador de entrevistas</h3>
                <p className="text-sm text-gray-500 text-center">
                  Practica tus habilidades de entrevista con nuestro simulador inteligente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="w-full py-12 md:py-20 bg-white border-t">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h2 className="text-xl font-semibold">Zona de administración</h2>
          <p className="text-sm text-gray-500 pb-4">Solo para miembros del equipo de UniMatch</p>
          <Link href="/funcionalidades_adicionales/admin/revision-documentos">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              Ir a Revisión de Documentos
            </Button>
          </Link>
        </div>
      </section>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="text-sm text-gray-500">© 2025 UniMatch. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
