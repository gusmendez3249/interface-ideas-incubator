import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, CheckCircle, Lightbulb, Users, Building, Smartphone } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  icon: any;
  scenario: string;
  dilemma: string;
  stakeholders: string[];
  ethicalIssues: string[];
  solutions: {
    option: string;
    description: string;
    pros: string[];
    cons: string[];
    ethicalRating: 'low' | 'medium' | 'high';
  }[];
  bestPractice: string;
  legalConsiderations: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Filtración de Datos en Empresa de E-commerce",
    category: "Seguridad de Datos",
    icon: Building,
    scenario: "Una empresa de comercio electrónico descubre que ha habido una filtración de datos que comprometió información personal de 50,000 clientes, incluyendo nombres, direcciones, números de teléfono y historiales de compra.",
    dilemma: "¿Cómo debe responder la empresa de manera ética y legal ante esta situación?",
    stakeholders: ["Clientes afectados", "Empresa", "Empleados", "INAI", "Medios de comunicación", "Competidores"],
    ethicalIssues: [
      "Transparencia vs. Protección de la reputación empresarial",
      "Responsabilidad hacia los clientes",
      "Deber de notificación",
      "Prevención de daños futuros"
    ],
    solutions: [
      {
        option: "Ocultar la filtración y solo actuar internamente",
        description: "No notificar a los clientes ni autoridades, solo corregir el problema internamente.",
        pros: ["Protege la reputación de la empresa", "Evita pánico innecesario"],
        cons: ["Viola principios de transparencia", "Incumple la LGPDP", "Expone a clientes a riesgos", "Puede generar sanciones mayores"],
        ethicalRating: 'low'
      },
      {
        option: "Notificación limitada solo a autoridades",
        description: "Informar solo al INAI pero no a los clientes afectados.",
        pros: ["Cumple parcialmente con requisitos legales", "Mantiene cierta discreción"],
        cons: ["No respeta el derecho a la información de los clientes", "Puede considerarse ocultamiento", "Limita la capacidad de autoprotección"],
        ethicalRating: 'medium'
      },
      {
        option: "Transparencia completa y acciones correctivas",
        description: "Notificar inmediatamente a clientes, INAI y tomar medidas correctivas públicas.",
        pros: ["Respeta principios éticos", "Cumple totalmente con la ley", "Fortalece confianza a largo plazo", "Permite autoprotección"],
        cons: ["Impacto negativo inmediato en reputación", "Posibles pérdidas económicas"],
        ethicalRating: 'high'
      }
    ],
    bestPractice: "La transparencia completa es éticamente correcta y legalmente requerida. Implementar un plan de respuesta que incluya notificación inmediata, medidas correctivas, y prevención futura.",
    legalConsiderations: [
      "Notificación obligatoria al INAI dentro de 72 horas",
      "Notificación a titulares de datos afectados",
      "Implementación de medidas de seguridad adicionales",
      "Posibles multas y sanciones según LGPDP"
    ]
  },
  {
    id: 2,
    title: "Uso de Datos para IA sin Consentimiento Explícito",
    category: "Inteligencia Artificial",
    icon: Smartphone,
    scenario: "Una startup de tecnología recopila datos de usuarios a través de su aplicación móvil para mejorar la experiencia del usuario. Ahora quieren usar estos datos para entrenar un modelo de IA que se vendería a terceros.",
    dilemma: "¿Es ético usar datos recopilados para un propósito diferente sin obtener nuevo consentimiento?",
    stakeholders: ["Usuarios de la app", "Startup", "Futuros compradores de IA", "Inversionistas", "Sociedad"],
    ethicalIssues: [
      "Consentimiento informado para nuevos usos",
      "Transparencia en el uso de datos",
      "Finalidad original vs. nueva finalidad",
      "Derechos de los titulares de datos"
    ],
    solutions: [
      {
        option: "Usar los datos sin notificar a usuarios",
        description: "Proceder con el entrenamiento de IA usando los datos existentes sin informar a usuarios.",
        pros: ["Rápido desarrollo del producto", "No requiere proceso de re-consentimiento"],
        cons: ["Viola principio de finalidad", "Incumple LGPDP", "Pierde confianza del usuario", "Riesgo legal significativo"],
        ethicalRating: 'low'
      },
      {
        option: "Actualizar términos y condiciones solamente",
        description: "Modificar términos de servicio para incluir el uso de IA sin solicitar consentimiento activo.",
        pros: ["Cumplimiento formal mínimo", "Proceso relativamente simple"],
        cons: ["Consentimiento no informado", "Falta transparencia real", "Práctica éticamente cuestionable"],
        ethicalRating: 'medium'
      },
      {
        option: "Obtener consentimiento explícito e informado",
        description: "Solicitar nuevo consentimiento específico para uso de IA con explicación clara del propósito.",
        pros: ["Cumple completamente con principios éticos", "Fortalece confianza", "Cumplimiento legal total"],
        cons: ["Proceso más largo", "Posible reducción en datos disponibles"],
        ethicalRating: 'high'
      }
    ],
    bestPractice: "Siempre obtener consentimiento explícito para nuevos usos de datos. Implementar opt-in activo con explicación clara del nuevo propósito y beneficios para el usuario.",
    legalConsiderations: [
      "Nueva finalidad requiere nuevo consentimiento según LGPDP",
      "Principio de finalidad debe respetarse",
      "Derecho de oposición de los usuarios",
      "Transparencia en avisos de privacidad"
    ]
  },
  {
    id: 3,
    title: "Monitoreo de Empleados en Trabajo Remoto",
    category: "Privacidad Laboral",
    icon: Users,
    scenario: "Una empresa implementó software de monitoreo para empleados en trabajo remoto que rastrea teclas presionadas, sitios web visitados, y toma capturas de pantalla cada 10 minutos durante horario laboral.",
    dilemma: "¿Hasta qué punto es ético y legal monitorear a empleados remotos?",
    stakeholders: ["Empleados", "Empresa", "Clientes", "Sindicatos", "Familias de empleados"],
    ethicalIssues: [
      "Balance entre productividad y privacidad",
      "Confianza en relaciones laborales",
      "Proporcionalidad de medidas de monitoreo",
      "Impacto en bienestar psicológico"
    ],
    solutions: [
      {
        option: "Monitoreo total sin restricciones",
        description: "Implementar monitoreo completo durante todo el horario laboral sin limitaciones.",
        pros: ["Control total de productividad", "Prevención de uso indebido"],
        cons: ["Viola privacidad excesivamente", "Daña confianza laboral", "Puede ser desproporcionado", "Impacto negativo en bienestar"],
        ethicalRating: 'low'
      },
      {
        option: "Monitoreo selectivo con notificación",
        description: "Monitorear solo actividades relacionadas con trabajo específico y notificar claramente a empleados.",
        pros: ["Balance entre control y privacidad", "Transparencia en el proceso", "Enfoque específico"],
        cons: ["Puede seguir siendo invasivo", "Complejidad en implementación"],
        ethicalRating: 'medium'
      },
      {
        option: "Monitoreo basado en resultados con consentimiento",
        description: "Enfocarse en resultados y métricas de productividad con consentimiento informado y medidas mínimas necesarias.",
        pros: ["Respeta dignidad humana", "Fomenta confianza", "Cumple proporcionalidad", "Mejores relaciones laborales"],
        cons: ["Menor control directo", "Requiere sistemas de evaluación más sofisticados"],
        ethicalRating: 'high'
      }
    ],
    bestPractice: "Implementar políticas de monitoreo proporcionales, transparentes y con consentimiento informado. Priorizar evaluación por resultados sobre vigilancia constante.",
    legalConsiderations: [
      "Consentimiento informado de empleados requerido",
      "Proporcionalidad según Ley Federal del Trabajo",
      "Derecho a la intimidad laboral",
      "Notificación previa y clara de políticas de monitoreo"
    ]
  }
];

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

  const currentCase = caseStudies[selectedCase];

  const getEthicalRatingColor = (rating: 'low' | 'medium' | 'high') => {
    switch (rating) {
      case 'low': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getEthicalRatingText = (rating: 'low' | 'medium' | 'high') => {
    switch (rating) {
      case 'low': return 'Bajo';
      case 'medium': return 'Medio';
      case 'high': return 'Alto';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <span>Casos Prácticos de Ética en Información</span>
          </CardTitle>
          <CardDescription>
            Analiza situaciones reales y practica la toma de decisiones éticas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudies.map((study, index) => (
              <Button
                key={study.id}
                variant={selectedCase === index ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCase(index);
                  setSelectedSolution(null);
                }}
                className="flex items-center space-x-2"
              >
                <study.icon className="w-4 h-4" />
                <span className="hidden sm:inline">Caso {index + 1}</span>
                <span className="sm:hidden">{index + 1}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-3 mb-2">
            <currentCase.icon className="w-6 h-6 text-primary" />
            <Badge variant="secondary">{currentCase.category}</Badge>
          </div>
          <CardTitle className="text-xl">{currentCase.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="scenario" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="scenario">Escenario</TabsTrigger>
              <TabsTrigger value="analysis">Análisis</TabsTrigger>
              <TabsTrigger value="solutions">Soluciones</TabsTrigger>
              <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
            </TabsList>

            <TabsContent value="scenario" className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/20 border border-border/20">
                <h4 className="font-semibold mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                  Situación
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {currentCase.scenario}
                </p>
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-medium text-primary">Dilema Ético:</p>
                  <p className="text-sm text-muted-foreground mt-1">{currentCase.dilemma}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-muted/20 border border-border/20">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    Partes Interesadas
                  </h4>
                  <ul className="space-y-2">
                    {currentCase.stakeholders.map((stakeholder, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                        <span>{stakeholder}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-muted/20 border border-border/20">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                    Cuestiones Éticas
                  </h4>
                  <ul className="space-y-2">
                    {currentCase.ethicalIssues.map((issue, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-4">
              <div className="space-y-4">
                {currentCase.solutions.map((solution, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedSolution === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border/20 hover:border-primary/30'
                    }`}
                    onClick={() => setSelectedSolution(selectedSolution === index ? null : index)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{solution.option}</CardTitle>
                        <Badge className={getEthicalRatingColor(solution.ethicalRating)}>
                          Ética: {getEthicalRatingText(solution.ethicalRating)}
                        </Badge>
                      </div>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>

                    {selectedSolution === index && (
                      <CardContent className="pt-0">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-card backdrop-blur-sm">
                            <h5 className="font-bold text-primary mb-3 flex items-center text-lg">
                              <div className="p-1 rounded-full bg-primary/20 mr-2">
                                <CheckCircle className="w-5 h-5" />
                              </div>
                              Ventajas
                            </h5>
                            <ul className="space-y-2">
                              {solution.pros.map((pro, proIndex) => (
                                <li key={proIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-lg border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-card backdrop-blur-sm">
                            <h5 className="font-bold text-destructive mb-3 flex items-center text-lg">
                              <div className="p-1 rounded-full bg-destructive/20 mr-2">
                                <AlertTriangle className="w-5 h-5" />
                              </div>
                              Desventajas
                            </h5>
                            <ul className="space-y-2">
                              {solution.cons.map((con, conIndex) => (
                                <li key={conIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                                  <div className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4">
              <div className="space-y-6">
                <div className="p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-card backdrop-blur-sm">
                  <h4 className="font-bold mb-4 flex items-center text-primary text-lg">
                    <div className="p-2 rounded-full bg-primary/20 mr-3">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    Mejor Práctica Recomendada
                  </h4>
                  <div className="p-4 rounded-lg bg-card/50 border border-border/30">
                    <p className="text-muted-foreground leading-relaxed">
                      {currentCase.bestPractice}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 shadow-card backdrop-blur-sm">
                  <h4 className="font-bold mb-4 flex items-center text-accent text-lg">
                    <div className="p-2 rounded-full bg-accent/20 mr-3">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    Consideraciones Legales
                  </h4>
                  <div className="p-4 rounded-lg bg-card/50 border border-border/30">
                    <ul className="space-y-3">
                      {currentCase.legalConsiderations.map((consideration, index) => (
                        <li key={index} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseStudy;