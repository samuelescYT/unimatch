"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, Clock, Sparkles, Lock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Datos de ejemplo para las preguntas de entrevista
const interviewQuestions = [
  {
    id: 1,
    question: "Háblame de ti y tu experiencia académica.",
    category: "Personal",
    difficulty: "Fácil",
    isPremium: false,
  },
  {
    id: 2,
    question: "¿Cuál ha sido tu proyecto más desafiante y cómo lo abordaste?",
    category: "Experiencia",
    difficulty: "Media",
    isPremium: false,
  },
  {
    id: 3,
    question: "¿Cómo manejarías un conflicto en un equipo de trabajo?",
    category: "Situacional",
    difficulty: "Media",
    isPremium: false,
  },
  {
    id: 4,
    question: "Explica cómo implementarías una solución para optimizar el rendimiento de una aplicación web.",
    category: "Técnica",
    difficulty: "Difícil",
    isPremium: true,
  },
  {
    id: 5,
    question: "¿Dónde te ves profesionalmente en 5 años?",
    category: "Personal",
    difficulty: "Media",
    isPremium: true,
  },
]

export default function SimuladorPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState(null)
  const [isPremiumDialogOpen, setIsPremiumDialogOpen] = useState(false)

  const handleSelectQuestion = (question) => {
    if (question.isPremium) {
      setIsPremiumDialogOpen(true)
    } else {
      setSelectedQuestion(question)
      setAnswer("")
      setFeedback(null)
    }
  }

  const handleSubmitAnswer = () => {
    // Simulación de retroalimentación
    setFeedback({
      score: 8,
      strengths: [
        "Buena estructura en tu respuesta",
        "Ejemplos concretos y relevantes",
        "Comunicación clara y concisa",
      ],
      improvements: [
        "Podrías profundizar más en los resultados obtenidos",
        "Considera mencionar las habilidades específicas que aplicaste",
      ],
      suggestion:
        "Tu respuesta es sólida, pero podrías mejorar al cuantificar tus logros y ser más específico sobre las habilidades que utilizaste. Considera usar el método STAR (Situación, Tarea, Acción, Resultado) para estructurar mejor tus respuestas.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <Link href="/estudiantes/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al dashboard</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              Historial
            </Button>
            <Link href="/funcionalidades_adicionales/estudiantes/premium">
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                <Sparkles className="h-4 w-4" />
                Actualizar a Premium
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Simulador de Entrevistas</h1>
          <p className="text-muted-foreground">
            Practica tus respuestas y recibe retroalimentación para mejorar tus habilidades
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Preguntas de entrevista</CardTitle>
                <CardDescription>Selecciona una pregunta para practicar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {interviewQuestions.map((q) => (
                    <div
                      key={q.id}
                      className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedQuestion?.id === q.id ? "border-emerald-600 bg-emerald-50" : ""
                      }`}
                      onClick={() => handleSelectQuestion(q)}
                    >
                      <div className="flex items-start justify-between">
                        <p className="font-medium">{q.question}</p>
                        {q.isPremium && <Lock className="h-4 w-4 text-amber-500 flex-shrink-0 ml-2" />}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">{q.category}</Badge>
                        <Badge
                          variant="outline"
                          className={
                            q.difficulty === "Fácil"
                              ? "text-green-600 border-green-600"
                              : q.difficulty === "Media"
                                ? "text-amber-600 border-amber-600"
                                : "text-red-600 border-red-600"
                          }
                        >
                          {q.difficulty}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedQuestion ? (
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{selectedQuestion.question}</CardTitle>
                    <CardDescription>Responde como lo harías en una entrevista real</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Escribe tu respuesta aquí..."
                      className="min-h-[200px]"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setSelectedQuestion(null)}>
                      Cancelar
                    </Button>
                    <Button
                      className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                      onClick={handleSubmitAnswer}
                      disabled={!answer.trim()}
                    >
                      <Send className="h-4 w-4" />
                      Enviar respuesta
                    </Button>
                  </CardFooter>
                </Card>

                {feedback && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Retroalimentación
                        <Badge className="ml-2">Puntuación: {feedback.score}/10</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div>
                        <h3 className="font-semibold mb-2">Fortalezas:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {feedback.strengths.map((strength, index) => (
                            <li key={index} className="text-sm">
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Áreas de mejora:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {feedback.improvements.map((improvement, index) => (
                            <li key={index} className="text-sm">
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Sugerencia:</h3>
                        <p className="text-sm">{feedback.suggestion}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => {
                          setSelectedQuestion(null)
                          setFeedback(null)
                        }}
                      >
                        Continuar practicando
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>
            ) : (
              <Card className="h-full flex flex-col justify-center items-center p-6">
                <div className="text-center max-w-md">
                  <h3 className="text-xl font-semibold mb-2">Selecciona una pregunta</h3>
                  <p className="text-muted-foreground mb-4">
                    Elige una pregunta de la lista para comenzar a practicar tus habilidades de entrevista
                  </p>
                  <div className="p-4 bg-muted rounded-lg mb-4">
                    <p className="text-sm italic">
                      "La práctica hace al maestro. Prepárate para tus entrevistas y aumenta tus posibilidades de
                      éxito."
                    </p>
                  </div>
                  <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                    <Sparkles className="h-4 w-4" />
                    Actualizar a Premium
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Dialog open={isPremiumDialogOpen} onOpenChange={setIsPremiumDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contenido Premium</DialogTitle>
            <DialogDescription>Esta pregunta está disponible solo para usuarios con cuenta Premium.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Beneficios Premium
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Acceso a todas las preguntas de entrevista</li>
                <li>Retroalimentación detallada con IA avanzada</li>
                <li>Entrevistas simuladas por video</li>
                <li>Análisis de lenguaje corporal</li>
                <li>Comparación con respuestas de alto rendimiento</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPremiumDialogOpen(false)}>
              Cancelar
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Actualizar ahora</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
