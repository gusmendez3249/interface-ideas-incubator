import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Brain } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es el principio ético más importante al manejar datos personales?",
    options: [
      "Obtener la mayor ganancia posible",
      "Respetar la privacidad y dignidad humana",
      "Compartir información libremente",
      "Almacenar datos indefinidamente"
    ],
    correctAnswer: 1,
    explanation: "El respeto a la privacidad y dignidad humana es fundamental, ya que los datos personales son una extensión de la persona misma.",
    category: "Principios Éticos"
  },
  {
    id: 2,
    question: "¿Qué significa 'consentimiento informado' en el manejo de datos?",
    options: [
      "Pedir permiso sin explicar el uso",
      "Usar datos sin consentimiento",
      "Explicar claramente cómo se usarán los datos antes de obtener permiso",
      "Obtener consentimiento después del uso"
    ],
    correctAnswer: 2,
    explanation: "El consentimiento informado requiere que las personas entiendan completamente cómo se usarán sus datos antes de dar su permiso.",
    category: "Consentimiento"
  },
  {
    id: 3,
    question: "¿Cuál es una consecuencia legal del mal manejo de datos personales en México?",
    options: [
      "No hay consecuencias",
      "Solo advertencias verbales",
      "Multas económicas y sanciones del INAI",
      "Pérdida automática de licencias"
    ],
    correctAnswer: 2,
    explanation: "El INAI puede imponer multas significativas y otras sanciones por incumplimiento de la LGPDP México.",
    category: "Consecuencias Legales"
  },
  {
    id: 4,
    question: "¿Qué es la 'minimización de datos'?",
    options: [
      "Eliminar todos los datos",
      "Recopilar solo los datos necesarios para el propósito específico",
      "Reducir el tamaño de archivos",
      "Compartir datos mínimos"
    ],
    correctAnswer: 1,
    explanation: "La minimización implica recopilar únicamente los datos estrictamente necesarios para cumplir con el propósito declarado.",
    category: "Principios de Protección"
  },
  {
    id: 5,
    question: "¿Cuál es un ejemplo de transparencia en el manejo de información?",
    options: [
      "Ocultar cómo se usan los datos",
      "Proporcionar avisos de privacidad claros y accesibles",
      "Usar términos técnicos complejos",
      "No informar sobre el tratamiento de datos"
    ],
    correctAnswer: 1,
    explanation: "La transparencia requiere comunicación clara y accesible sobre las prácticas de manejo de datos.",
    category: "Transparencia"
  }
];

const EthicsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);

      if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80) return "¡Excelente! Tienes un sólido entendimiento de los aspectos éticos.";
    if (percentage >= 60) return "Bien! Pero puedes mejorar en algunos conceptos éticos.";
    return "Necesitas repasar los fundamentos éticos del manejo de información.";
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-primary w-fit">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Evaluación Completada</CardTitle>
          <CardDescription>Resultados de tu evaluación ética</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
              {score}/{quizQuestions.length}
            </div>
            <div className={`text-2xl font-semibold mb-4 ${getScoreColor(percentage)}`}>
              {percentage}%
            </div>
            <p className="text-muted-foreground mb-6">
              {getScoreMessage(percentage)}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resumen por Categorías:</h4>
            {quizQuestions.map((question, index) => (
              <div key={question.id} className={`flex items-center justify-between p-4 rounded-lg border-2 shadow-card backdrop-blur-sm transition-all duration-200 ${
                answers[index] === question.correctAnswer
                  ? 'border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10'
                  : 'border-destructive/30 bg-gradient-to-r from-destructive/5 to-destructive/10'
              }`}>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">{question.category}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{question.question}</p>
                </div>
                <div className="ml-4">
                  {answers[index] === question.correctAnswer ? (
                    <div className="p-2 rounded-full bg-primary/20">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  ) : (
                    <div className="p-2 rounded-full bg-destructive/20">
                      <XCircle className="w-6 h-6 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={resetQuiz} className="bg-gradient-primary text-primary-foreground">
              <RotateCcw className="w-4 h-4 mr-2" />
              Realizar Nuevamente
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">{question.category}</Badge>
          <span className="text-sm text-muted-foreground">
            Pregunta {currentQuestion + 1} de {quizQuestions.length}
          </span>
        </div>
        <CardTitle className="text-xl">{question.question}</CardTitle>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                selectedAnswer === index
                  ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 text-primary shadow-card backdrop-blur-sm'
                  : 'border-border/30 hover:border-primary/40 hover:bg-muted/20 bg-card/50 backdrop-blur-sm'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary shadow-lg'
                    : 'border-muted-foreground/50'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-full h-full rounded-full bg-primary-foreground scale-50" />
                  )}
                </div>
                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {showResult && selectedAnswer !== null && (
          <div className={`p-6 rounded-lg border-2 shadow-card backdrop-blur-sm ${
            selectedAnswer === question.correctAnswer
              ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5'
              : 'border-destructive/50 bg-gradient-to-br from-destructive/10 to-destructive/5'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              {selectedAnswer === question.correctAnswer ? (
                <div className="p-2 rounded-full bg-primary/20">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-destructive/20">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
              )}
              <span className={`text-lg font-bold ${
                selectedAnswer === question.correctAnswer ? 'text-primary' : 'text-destructive'
              }`}>
                {selectedAnswer === question.correctAnswer ? '¡Correcto!' : 'Incorrecto'}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border/30">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          {selectedAnswer !== null && !showResult && (
            <Button onClick={handleShowResult} variant="outline">
              Ver Resultado
            </Button>
          )}
          {showResult && (
            <Button onClick={handleNextQuestion} className="ml-auto bg-gradient-primary text-primary-foreground">
              {currentQuestion < quizQuestions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Evaluación'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EthicsQuiz;