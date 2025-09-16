import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calculator, CheckCircle, AlertTriangle, Info, Download, RefreshCw } from "lucide-react";

interface AssessmentQuestion {
  id: string;
  standard: string;
  category: string;
  question: string;
  description: string;
  weight: number;
  options: {
    value: string;
    label: string;
    score: number;
    description: string;
  }[];
}

const assessmentQuestions: AssessmentQuestion[] = [
  // ISO 27001
  {
    id: 'iso27001-1',
    standard: 'ISO 27001',
    category: 'Política de Seguridad',
    question: '¿Su organización tiene una política de seguridad de la información documentada y aprobada?',
    description: 'La política debe estar firmada por la dirección y comunicada a toda la organización.',
    weight: 10,
    options: [
      { value: 'none', label: 'No existe', score: 0, description: 'No hay política documentada' },
      { value: 'draft', label: 'En desarrollo', score: 3, description: 'Existe borrador pero no aprobado' },
      { value: 'approved', label: 'Aprobada pero no comunicada', score: 7, description: 'Política aprobada pero falta comunicación' },
      { value: 'implemented', label: 'Completamente implementada', score: 10, description: 'Política aprobada, comunicada y en uso' }
    ]
  },
  {
    id: 'iso27001-2',
    standard: 'ISO 27001',
    category: 'Gestión de Riesgos',
    question: '¿Se realiza evaluación de riesgos de seguridad de manera regular?',
    description: 'Debe existir un proceso formal para identificar, evaluar y tratar riesgos.',
    weight: 15,
    options: [
      { value: 'none', label: 'No se realiza', score: 0, description: 'No hay proceso de evaluación' },
      { value: 'informal', label: 'Proceso informal', score: 4, description: 'Se hace pero sin metodología formal' },
      { value: 'formal', label: 'Proceso formal anual', score: 8, description: 'Evaluación formal una vez al año' },
      { value: 'continuous', label: 'Evaluación continua', score: 15, description: 'Monitoreo y evaluación constante' }
    ]
  },
  {
    id: 'iso27001-3',
    standard: 'ISO 27001',
    category: 'Control de Acceso',
    question: '¿Existe un sistema de gestión de accesos e identidades?',
    description: 'Control de quien puede acceder a qué recursos de información.',
    weight: 12,
    options: [
      { value: 'none', label: 'Sin control', score: 0, description: 'Acceso sin restricciones' },
      { value: 'basic', label: 'Control básico', score: 4, description: 'Contraseñas simples únicamente' },
      { value: 'rbac', label: 'Control basado en roles', score: 8, description: 'Sistema de roles implementado' },
      { value: 'advanced', label: 'Control avanzado + MFA', score: 12, description: 'Roles + autenticación multifactor' }
    ]
  },

  // COBIT
  {
    id: 'cobit-1',
    standard: 'COBIT',
    category: 'Gobierno de TI',
    question: '¿Existe alineación entre estrategia de TI y objetivos de negocio?',
    description: 'La estrategia de TI debe estar documentada y alineada con los objetivos empresariales.',
    weight: 13,
    options: [
      { value: 'none', label: 'Sin alineación', score: 0, description: 'TI opera independientemente' },
      { value: 'informal', label: 'Alineación informal', score: 4, description: 'Existe pero no documentada' },
      { value: 'documented', label: 'Alineación documentada', score: 9, description: 'Estrategia documentada y aprobada' },
      { value: 'monitored', label: 'Alineación monitoreada', score: 13, description: 'Se mide y ajusta regularmente' }
    ]
  },
  {
    id: 'cobit-2',
    standard: 'COBIT',
    category: 'Gestión de Riesgos de TI',
    question: '¿Se identifican y gestionan los riesgos relacionados con TI?',
    description: 'Proceso para identificar riesgos de TI que puedan afectar objetivos de negocio.',
    weight: 11,
    options: [
      { value: 'none', label: 'No se gestionan', score: 0, description: 'Sin proceso de gestión de riesgos' },
      { value: 'reactive', label: 'Gestión reactiva', score: 3, description: 'Se atienden cuando surgen problemas' },
      { value: 'proactive', label: 'Gestión proactiva', score: 7, description: 'Identificación proactiva de riesgos' },
      { value: 'integrated', label: 'Integrado al negocio', score: 11, description: 'Riesgos de TI integrados al registro corporativo' }
    ]
  },

  // NIST
  {
    id: 'nist-1',
    standard: 'NIST',
    category: 'Identificar',
    question: '¿Conoce todos los activos de información y sistemas en su organización?',
    description: 'Inventario completo de hardware, software, datos y personal.',
    weight: 9,
    options: [
      { value: 'none', label: 'Sin inventario', score: 0, description: 'No existe inventario de activos' },
      { value: 'partial', label: 'Inventario parcial', score: 3, description: 'Solo activos críticos identificados' },
      { value: 'complete', label: 'Inventario completo', score: 6, description: 'Todos los activos identificados' },
      { value: 'automated', label: 'Inventario automatizado', score: 9, description: 'Descubrimiento y actualización automática' }
    ]
  },
  {
    id: 'nist-2',
    standard: 'NIST',
    category: 'Proteger',
    question: '¿Tiene implementadas medidas de protección para sus activos críticos?',
    description: 'Salvaguardas apropiadas para asegurar la entrega de servicios críticos.',
    weight: 14,
    options: [
      { value: 'minimal', label: 'Protección mínima', score: 0, description: 'Solo medidas básicas como antivirus' },
      { value: 'standard', label: 'Protección estándar', score: 5, description: 'Firewall, antivirus, copias de seguridad' },
      { value: 'advanced', label: 'Protección avanzada', score: 10, description: 'Incluye monitoreo y detección' },
      { value: 'comprehensive', label: 'Protección integral', score: 14, description: 'Defensa en profundidad completa' }
    ]
  },

  // ITIL
  {
    id: 'itil-1',
    standard: 'ITIL',
    category: 'Gestión de Servicios',
    question: '¿Existe un catálogo de servicios de TI documentado?',
    description: 'Lista completa de servicios de TI disponibles con niveles de servicio definidos.',
    weight: 8,
    options: [
      { value: 'none', label: 'Sin catálogo', score: 0, description: 'No existe documentación de servicios' },
      { value: 'informal', label: 'Lista informal', score: 2, description: 'Lista básica sin detalles' },
      { value: 'documented', label: 'Catálogo documentado', score: 5, description: 'Servicios documentados con descripción' },
      { value: 'sla', label: 'Con SLAs definidos', score: 8, description: 'Incluye niveles de servicio acordados' }
    ]
  },
  {
    id: 'itil-2',
    standard: 'ITIL',
    category: 'Gestión de Incidentes',
    question: '¿Existe un proceso formal para gestionar incidentes de TI?',
    description: 'Proceso para restaurar el servicio normal lo más rápido posible.',
    weight: 10,
    options: [
      { value: 'none', label: 'Sin proceso', score: 0, description: 'Incidentes manejados de forma ad-hoc' },
      { value: 'basic', label: 'Proceso básico', score: 3, description: 'Proceso simple de registro y resolución' },
      { value: 'structured', label: 'Proceso estructurado', score: 7, description: 'Incluye categorización y priorización' },
      { value: 'optimized', label: 'Proceso optimizado', score: 10, description: 'Incluye métricas y mejora continua' }
    ]
  }
];

const ComplianceCalculator = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setAnswers({});
    setShowResults(false);
  };

  const getStandardScore = (standard: string) => {
    const standardQuestions = assessmentQuestions.filter(q => q.standard === standard);
    const answeredQuestions = standardQuestions.filter(q => answers[q.id]);

    if (answeredQuestions.length === 0) return { score: 0, maxScore: 0, percentage: 0 };

    const totalScore = answeredQuestions.reduce((sum, question) => {
      const answer = answers[question.id];
      const option = question.options.find(opt => opt.value === answer);
      return sum + (option ? option.score : 0);
    }, 0);

    const maxScore = standardQuestions.reduce((sum, question) => sum + question.weight, 0);
    const percentage = Math.round((totalScore / maxScore) * 100);

    return { score: totalScore, maxScore, percentage };
  };

  const getOverallScore = () => {
    const standards = [...new Set(assessmentQuestions.map(q => q.standard))];
    const standardScores = standards.map(standard => getStandardScore(standard));
    const totalScore = standardScores.reduce((sum, score) => sum + score.score, 0);
    const totalMaxScore = standardScores.reduce((sum, score) => sum + score.maxScore, 0);

    return totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-primary';
    if (percentage >= 60) return 'text-accent';
    return 'text-destructive';
  };

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 80) return 'bg-primary/10 text-primary border-primary/20';
    if (percentage >= 60) return 'bg-accent/10 text-accent border-accent/20';
    return 'bg-destructive/10 text-destructive border-destructive/20';
  };

  const getRecommendation = (percentage: number) => {
    if (percentage >= 80) return 'Excelente nivel de cumplimiento. Enfóquese en mantener y mejorar continuamente.';
    if (percentage >= 60) return 'Buen nivel básico. Priorice las áreas de mayor impacto para mejorar.';
    if (percentage >= 40) return 'Nivel moderado. Requiere plan estructurado de mejora.';
    return 'Nivel bajo. Recomendamos comenzar con los fundamentos básicos.';
  };

  const generateReport = () => {
    const standards = [...new Set(assessmentQuestions.map(q => q.standard))];
    let report = `REPORTE DE EVALUACIÓN DE CUMPLIMIENTO DE ESTÁNDARES\n`;
    report += `Fecha: ${new Date().toLocaleDateString('es-MX')}\n`;
    report += `Hora: ${new Date().toLocaleTimeString('es-MX')}\n\n`;

    report += `RESUMEN EJECUTIVO\n`;
    report += `=================\n`;
    report += `Puntuación General: ${getOverallScore()}%\n`;
    report += `Recomendación: ${getRecommendation(getOverallScore())}\n\n`;

    standards.forEach(standard => {
      const result = getStandardScore(standard);
      report += `${standard}\n`;
      report += `${'='.repeat(standard.length)}\n`;
      report += `Puntuación: ${result.score}/${result.maxScore} (${result.percentage}%)\n\n`;

      const standardQuestions = assessmentQuestions.filter(q => q.standard === standard);
      standardQuestions.forEach(question => {
        const answer = answers[question.id];
        if (answer) {
          const option = question.options.find(opt => opt.value === answer);
          report += `${question.category}: ${question.question}\n`;
          report += `Respuesta: ${option?.label} (${option?.score}/${question.weight} puntos)\n`;
          report += `Descripción: ${option?.description}\n\n`;
        }
      });
    });

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Reporte_Cumplimiento_Estandares.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = assessmentQuestions.length;
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Calculator className="w-6 h-6 text-primary" />
            <span>Calculadora de Cumplimiento</span>
          </CardTitle>
          <CardDescription>
            Evalúe el nivel de cumplimiento de su organización con diferentes estándares
          </CardDescription>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso: {answeredCount}/{totalQuestions} preguntas</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              onClick={calculateResults}
              disabled={answeredCount === 0}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-card"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Calcular Resultados
            </Button>
            <Button
              onClick={generateReport}
              variant="outline"
              disabled={!showResults}
              className="hover:shadow-md transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar Reporte
            </Button>
            <Button 
              onClick={resetCalculator} 
              variant="outline"
              className="hover:shadow-md transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reiniciar
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span>Resultados de la Evaluación</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-card backdrop-blur-sm mb-6">
                <div className={`text-5xl font-bold mb-3 ${getScoreColor(getOverallScore())}`}>
                  {getOverallScore()}%
                </div>
                <Badge className={`${getScoreBadge(getOverallScore())} text-lg px-4 py-2`}>
                  Puntuación General
                </Badge>
              </div>
              <div className="p-4 rounded-lg bg-card/50 border border-border/30 max-w-3xl mx-auto">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {getRecommendation(getOverallScore())}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...new Set(assessmentQuestions.map(q => q.standard))].map(standard => {
                const result = getStandardScore(standard);
                return (
                  <div key={standard} className={`p-4 rounded-lg border-2 shadow-card backdrop-blur-sm transition-all duration-200 ${
                    result.percentage >= 80 ? 'border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5' :
                    result.percentage >= 60 ? 'border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5' :
                    'border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5'
                  }`}>
                    <h4 className="font-bold mb-2 text-lg">{standard}</h4>
                    <div className="text-2xl font-bold mb-1">{result.score}/{result.maxScore}</div>
                    <div className="text-sm text-muted-foreground mb-2">{result.percentage}% cumplimiento</div>
                    <Progress value={result.percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {[...new Set(assessmentQuestions.map(q => q.standard))].map(standard => (
        <Card key={standard} className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">{standard}</CardTitle>
            <CardDescription>
              {assessmentQuestions.filter(q => q.standard === standard && answers[q.id]).length} de{' '}
              {assessmentQuestions.filter(q => q.standard === standard).length} preguntas respondidas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {assessmentQuestions
                .filter(q => q.standard === standard)
                .map(question => (
                  <div key={question.id} className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                    answers[question.id] 
                      ? 'border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 shadow-card backdrop-blur-sm'
                      : 'border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/30'
                  }`}>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-1 text-lg">{question.question}</h4>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{question.description}</p>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs font-medium">
                        {question.category} • Peso: {question.weight} puntos
                      </Badge>
                    </div>

                    <RadioGroup
                      value={answers[question.id] || ''}
                      onValueChange={(value) => handleAnswerChange(question.id, value)}
                    >
                      {question.options.map(option => (
                        <div key={option.value} className={`flex items-start space-x-3 p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-sm ${
                          answers[question.id] === option.value
                            ? 'border-primary/50 bg-gradient-to-r from-primary/10 to-primary/5'
                            : 'border-border/30 hover:border-primary/40 hover:bg-muted/20'
                        }`}>
                          <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} className="mt-1" />
                          <Label htmlFor={`${question.id}-${option.value}`} className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium">{option.label}</span>
                              <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                                {option.score}/{question.weight} pts
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ComplianceCalculator;