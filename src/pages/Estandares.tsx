import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StandardsComparison from "@/components/ui/standards-comparison";
import ComplianceCalculator from "@/components/ui/compliance-calculator";
import { Shield, Settings, BookOpen, Cpu, Workflow, ExternalLink, CheckCircle, Target, Users, Globe, FileText, GitCompare, Calculator } from "lucide-react";

const Estandares = () => {
  const estandares = [
    {
      icon: Shield,
      title: "ISO 27001",
      fullName: "Sistema de Gestión de Seguridad de la Información",
      description: "Estándar internacional que especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información (SGSI).",
      purpose: "Ayudar a las organizaciones a proteger sus activos de información mediante un enfoque sistemático de gestión de riesgos de seguridad, asegurando la confidencialidad, integridad y disponibilidad de los datos.",
      beneficios: [
        "Protección integral de la información",
        "Cumplimiento de requisitos legales y regulatorios",
        "Reducción de riesgos de seguridad",
        "Mejora de la confianza de clientes y socios"
      ],
      aplicacion: "Organizaciones de cualquier tamaño y sector que manejen información sensible",
      enlaces: [
        {
          nombre: "Ver ISO 27001",
          url: "https://www.iso.org/standard/27001",
          descripcion: "Página oficial del estándar ISO 27001:2022"
        },
        {
          nombre: "Guía de Implementación",
          url: "https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100426.pdf",
          descripcion: "Guía oficial para implementar ISO 27001"
        }
      ],
      color: "primary",
      category: "Seguridad de la Información"
    },
    {
      icon: BookOpen,
      title: "ISO 17799 (ISO 27002)",
      fullName: "Código de Práctica para Controles de Seguridad de la Información",
      description: "Proporciona directrices y principios generales para iniciar, implementar, mantener y mejorar la gestión de seguridad de la información en una organización. Ahora conocido como ISO 27002.",
      purpose: "Establecer controles de seguridad efectivos y proporcionar orientación detallada sobre las mejores prácticas en seguridad de la información para implementar los controles especificados en ISO 27001.",
      beneficios: [
        "Implementación de controles de seguridad probados",
        "Reducción de vulnerabilidades",
        "Mejores prácticas reconocidas internacionalmente",
        "Base para auditorías de seguridad"
      ],
      aplicacion: "Organizaciones que implementan ISO 27001 y necesitan orientación sobre controles específicos",
      enlaces: [
        {
          nombre: "ISO 27002:2022 Official",
          url: "https://www.iso.org/standard/75652.html",
          descripcion: "Estándar ISO 27002 actual (anteriormente 17799)"
        },
        {
          nombre: "Controles de Seguridad",
          url: "https://www.iso.org/obp/ui/#iso:std:iso-iec:27002:ed-3:v1:en",
          descripcion: "Visualización de controles ISO 27002"
        }
      ],
      color: "accent",
      category: "Controles de Seguridad"
    },
    {
      icon: Settings,
      title: "COBIT",
      fullName: "Control Objectives for Information and Related Technologies",
      description: "Marco de gobierno y gestión de TI que ayuda a las empresas a lograr sus objetivos mediante el uso efectivo de la tecnología de la información, proporcionando un enfoque integral para el gobierno corporativo de TI.",
      purpose: "Proporcionar un marco integral para el gobierno y la gestión de las TI empresariales, alineando la tecnología con los objetivos de negocio y asegurando el valor empresarial de las inversiones en TI.",
      beneficios: [
        "Alineación de TI con objetivos de negocio",
        "Optimización de recursos y costos",
        "Gestión efectiva de riesgos de TI",
        "Mejora del rendimiento empresarial"
      ],
      aplicacion: "Directivos, auditores, profesionales de TI y consultores que buscan gobierno efectivo de TI",
      enlaces: [
        {
          nombre: "COBIT Toolkit",
          url: "https://www.isaca.org/resources/cobit",
          descripcion: "Portal oficial de COBIT en ISACA"
        },
        {
          nombre: "COBIT 2019 Framework",
          url: "https://www.itsm-docs.com/blogs/cobit/cobit-2019-framework",
          descripcion: "Herramientas y recursos para implementar COBIT"
        }
      ],
      color: "secondary",
      category: "Gobierno de TI"
    },
    {
      icon: Cpu,
      title: "NIST",
      fullName: "National Institute of Standards and Technology Cybersecurity Framework",
      description: "Marco voluntario desarrollado por el gobierno de EE.UU. que proporciona un enfoque basado en estándares, directrices y mejores prácticas para gestionar el riesgo de ciberseguridad de manera integral.",
      purpose: "Mejorar la postura de ciberseguridad de las organizaciones mediante la implementación de cinco funciones principales: Identificar, Proteger, Detectar, Responder y Recuperar ante amenazas cibernéticas.",
      beneficios: [
        "Enfoque estructurado para ciberseguridad",
        "Reducción de riesgos cibernéticos",
        "Mejora de la comunicación sobre ciberseguridad",
        "Adaptable a organizaciones de cualquier tamaño"
      ],
      aplicacion: "Organizaciones de todos los sectores que buscan mejorar su postura de ciberseguridad",
      enlaces: [
        {
          nombre: "NIST Cybersecurity Framework",
          url: "https://www.nist.gov/cyberframework",
          descripcion: "Marco oficial de ciberseguridad NIST"
        },
        {
          nombre: "Framework Documentation",
          url: "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf",
          descripcion: "Documentación completa del marco NIST"
        }
      ],
      color: "destructive",
      category: "Ciberseguridad"
    },
    {
      icon: Workflow,
      title: "ITIL",
      fullName: "Information Technology Infrastructure Library",
      description: "Conjunto de prácticas detalladas para la gestión de servicios de TI (ITSM) que se enfoca en alinear los servicios de TI con las necesidades del negocio y mejorar continuamente la calidad del servicio.",
      purpose: "Mejorar la eficiencia operacional, reducir costos, aumentar la satisfacción del cliente y optimizar el valor empresarial mediante la gestión efectiva del ciclo de vida completo de los servicios de TI.",
      beneficios: [
        "Mejora de la calidad del servicio de TI",
        "Reducción de costos operativos",
        "Mayor satisfacción del cliente",
        "Optimización de procesos de TI"
      ],
      aplicacion: "Organizaciones que proporcionan servicios de TI y buscan optimizar sus operaciones",
      enlaces: [
        {
          nombre: "AXELOS - ITIL 4",
          url: "https://www.axelos.com/best-practice-solutions/itil",
          descripcion: "Portal oficial de ITIL 4"
        },
        {
          nombre: "ITIL Foundation",
          url: "https://www.axelos.com/certifications/itil-service-management/itil-4-foundation",
          descripcion: "Certificación ITIL 4 Foundation"
        }
      ],
      color: "muted",
      category: "Gestión de Servicios de TI"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/20',
          icon: 'text-primary',
          button: 'bg-gradient-primary text-primary-foreground'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          border: 'border-accent/20',
          icon: 'text-accent',
          button: 'bg-accent text-accent-foreground'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary/20',
          icon: 'text-secondary-foreground',
          button: 'bg-secondary text-secondary-foreground'
        };
      case 'destructive':
        return {
          bg: 'bg-destructive/10',
          border: 'border-destructive/20',
          icon: 'text-destructive',
          button: 'bg-destructive text-destructive-foreground'
        };
      default:
        return {
          bg: 'bg-muted/10',
          border: 'border-muted/20',
          icon: 'text-muted-foreground',
          button: 'bg-muted text-muted-foreground'
        };
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-white rounded-lg">
                Estándares Internacionales
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Marcos de referencia y mejores prácticas para la gestión segura, eficiente y efectiva de la información empresarial
            </p>
            <Badge variant="secondary" className="mt-4 bg-primary/10 text-primary border-primary/20">
              Estándares Vigentes 2025
            </Badge>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Información</span>
              </TabsTrigger>
              <TabsTrigger value="comparison" className="flex items-center space-x-2">
                <GitCompare className="w-4 h-4" />
                <span>Comparación</span>
              </TabsTrigger>
              <TabsTrigger value="calculator" className="flex items-center space-x-2">
                <Calculator className="w-4 h-4" />
                <span>Evaluación</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">

          <div className="grid gap-8">
            {estandares.map((estandar, index) => {
              const colors = getColorClasses(estandar.color);
              const Icon = estandar.icon;

              return (
                <Card key={index} className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
                  <CardHeader className="pb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl ${colors.bg} ${colors.border} border flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-2xl md:text-3xl">{estandar.title}</CardTitle>
                          <Badge variant="secondary" className={`${colors.bg} ${colors.icon} border-current`}>
                            {estandar.category}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg font-medium mb-2">
                          {estandar.fullName}
                        </CardDescription>
                        <p className="text-muted-foreground leading-relaxed">
                          {estandar.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Propósito */}
                      <div className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
                        <h4 className={`font-bold mb-3 ${colors.icon} flex items-center`}>
                          <Target className="w-5 h-5 mr-2" />
                          ¿Para qué sirve?
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {estandar.purpose}
                        </p>
                      </div>

                      {/* Beneficios */}
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
                        <h4 className="font-bold mb-3 text-foreground flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Beneficios Principales
                        </h4>
                        <ul className="space-y-2">
                          {estandar.beneficios.map((beneficio, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{beneficio}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Aplicación */}
                      <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                        <h4 className="font-bold mb-3 text-foreground flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          ¿Quién lo utiliza?
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {estandar.aplicacion}
                        </p>

                        <div className="space-y-3">
                          <h5 className="font-medium text-foreground text-sm">Enlaces Oficiales:</h5>
                          {estandar.enlaces.map((enlace, idx) => (
                            <div key={idx}>
                              <a
                                href={enlace.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>{enlace.nombre}</span>
                              </a>
                              <p className="text-xs text-muted-foreground mt-1">{enlace.descripcion}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botones de acceso */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {estandar.enlaces.map((enlace, idx) => (
                        <Button
                          key={idx}
                          asChild
                          className={`${colors.button} hover:opacity-90 transition-opacity`}
                        >
                          <a
                            href={enlace.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <Globe className="w-4 h-4" />
                            <span>Ver {enlace.nombre}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                  {index < estandares.length - 1 && <Separator className="bg-border/30" />}
                </Card>
              );
            })}
          </div>

          {/* Información de comparación */}
          <Card className="mt-12 shadow-card border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2 text-foreground">¿Cuál Estándar Elegir?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Cada estándar tiene su propósito específico y pueden complementarse entre sí para una gestión integral
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                  <Shield className="w-8 h-8 mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Para Seguridad</h4>
                  <p className="text-sm text-muted-foreground">ISO 27001 + ISO 27002 + NIST Framework</p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                  <Settings className="w-8 h-8 mb-3 text-accent" />
                  <h4 className="font-semibold mb-2">Para Gobierno TI</h4>
                  <p className="text-sm text-muted-foreground">COBIT + ITIL para gestión integral</p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                  <Workflow className="w-8 h-8 mb-3 text-secondary-foreground" />
                  <h4 className="font-semibold mb-2">Para Servicios</h4>
                  <p className="text-sm text-muted-foreground">ITIL + ISO 27001 para servicios seguros</p>
                </div>
              </div>
            </CardContent>
          </Card>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-8">
              <div className="text-center mb-8">
                <GitCompare className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Comparación de Estándares</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Compara diferentes estándares lado a lado para tomar decisiones informadas
                </p>
              </div>
              <StandardsComparison />
            </TabsContent>

            <TabsContent value="calculator" className="space-y-8">
              <div className="text-center mb-8">
                <Calculator className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Evaluación de Cumplimiento</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Evalúa el nivel de cumplimiento de tu organización con diferentes estándares
                </p>
              </div>
              <ComplianceCalculator />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Estandares;