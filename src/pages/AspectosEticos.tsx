import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EthicsQuiz from "@/components/ui/ethics-quiz";
import CaseStudy from "@/components/ui/case-study";
import EthicsChecklist from "@/components/ui/ethics-checklist";
import { BookOpen, Shield, Users, Eye, Lock, FileCheck, AlertTriangle, CheckCircle, Brain, ClipboardList, Lightbulb, Scale } from "lucide-react";

const AspectosEticos = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-white rounded-lg">
                Aspectos Éticos y Legales
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Módulo interactivo para aprender y aplicar principios éticos en el manejo de información
            </p>
            <Badge variant="secondary" className="mt-4 bg-primary/10 text-primary border-primary/20">
              Herramientas Interactivas
            </Badge>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="overview" className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Fundamentos</span>
                </TabsTrigger>
                <TabsTrigger value="quiz" className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span className="hidden sm:inline">Evaluación</span>
                </TabsTrigger>
                <TabsTrigger value="cases" className="flex items-center space-x-2">
                  <Lightbulb className="w-4 h-4" />
                  <span className="hidden sm:inline">Casos</span>
                </TabsTrigger>
                <TabsTrigger value="checklist" className="flex items-center space-x-2">
                  <ClipboardList className="w-4 h-4" />
                  <span className="hidden sm:inline">Lista</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-8">
              <div className="space-y-10">
            {/* Introducción */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">¿Qué son los Aspectos Éticos y Legales?</CardTitle>
                    <CardDescription className="text-base">
                      Principios fundamentales que guían el tratamiento responsable de la información
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Los aspectos éticos y legales del manejo de la información constituyen el conjunto de principios, normas y
                    regulaciones que garantizan el tratamiento responsable, seguro y transparente de los datos personales y
                    la información en general. Estos aspectos son fundamentales en la era digital para proteger los derechos
                    de las personas y establecer un marco de confianza en las transacciones digitales.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h4 className="font-bold mb-3 text-primary flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Aspectos Éticos
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Respeto a la privacidad y dignidad humana</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Transparencia en el uso de datos</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Consentimiento informado</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Responsabilidad en el tratamiento</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <h4 className="font-bold mb-3 text-accent flex items-center">
                        <FileCheck className="w-5 h-5 mr-2" />
                        Aspectos Legales
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Cumplimiento de leyes de protección de datos</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Respeto a derechos de autor</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Prevención de delitos informáticos</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Protección de propiedad intelectual</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="bg-border/30" />

            {/* Principios Fundamentales */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Users className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Principios Fundamentales</CardTitle>
                    <CardDescription className="text-base">
                      Pilares que sustentan el manejo ético y legal de la información
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Eye className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-lg">Transparencia</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Las organizaciones deben ser claras sobre qué datos recopilan, cómo los usan y
                      con quién los comparten, proporcionando información accesible y comprensible.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                      <h4 className="font-bold text-lg">Seguridad</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Implementación de medidas técnicas y organizativas apropiadas para proteger
                      los datos contra accesos no autorizados, pérdida o destrucción.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Lock className="w-6 h-6 text-secondary-foreground" />
                      <h4 className="font-bold text-lg">Confidencialidad</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Garantía de que la información solo sea accesible para aquellas personas
                      autorizadas y que se mantenga protegida contra divulgaciones no autorizadas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="bg-border/30" />

            {/* Importancia y Consecuencias */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <AlertTriangle className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Importancia y Consecuencias</CardTitle>
                    <CardDescription className="text-base">
                      ¿Por qué es crucial cumplir con estos aspectos éticos y legales?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-primary text-lg">Beneficios del Cumplimiento</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Confianza del usuario:</span>
                          <p className="text-sm text-muted-foreground">Fortalece la relación con clientes y usuarios</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Ventaja competitiva:</span>
                          <p className="text-sm text-muted-foreground">Diferenciación en el mercado</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Reducción de riesgos:</span>
                          <p className="text-sm text-muted-foreground">Prevención de incidentes de seguridad</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-destructive text-lg">Consecuencias del Incumplimiento</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Sanciones económicas:</span>
                          <p className="text-sm text-muted-foreground">Multas y penalizaciones significativas</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Daño reputacional:</span>
                          <p className="text-sm text-muted-foreground">Pérdida de confianza y credibilidad</p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Consecuencias legales:</span>
                          <p className="text-sm text-muted-foreground">Procesos judiciales y responsabilidades civiles</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

                {/* Call to Action */}
                <Card className="shadow-card border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Explora el Marco Legal Mexicano
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Conoce las leyes específicas que regulan el manejo de información en México y los estándares
                      internacionales que guían las mejores prácticas en el sector.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/leyes"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Scale className="w-4 h-4 mr-2" />
                        Ver Leyes Mexicanas
                      </a>
                      <a
                        href="/estandares"
                        className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <FileCheck className="w-4 h-4 mr-2" />
                        Conocer Estándares
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="quiz" className="space-y-6">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Brain className="w-6 h-6 text-primary" />
                    <span>Evaluación de Conocimientos Éticos</span>
                  </CardTitle>
                  <CardDescription>
                    Pon a prueba tus conocimientos sobre aspectos éticos y legales del manejo de información
                  </CardDescription>
                </CardHeader>
              </Card>
              <EthicsQuiz />
            </TabsContent>

            <TabsContent value="cases" className="space-y-6">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    <span>Estudios de Caso Interactivos</span>
                  </CardTitle>
                  <CardDescription>
                    Analiza situaciones reales y practica la toma de decisiones éticas en el manejo de información
                  </CardDescription>
                </CardHeader>
              </Card>
              <CaseStudy />
            </TabsContent>

            <TabsContent value="checklist" className="space-y-6">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <ClipboardList className="w-6 h-6 text-primary" />
                    <span>Lista de Verificación Ética</span>
                  </CardTitle>
                  <CardDescription>
                    Herramienta práctica para evaluar el cumplimiento ético y legal en tu organización
                  </CardDescription>
                </CardHeader>
              </Card>
              <EthicsChecklist />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AspectosEticos;