import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Settings, BookOpen, Cpu, Workflow } from "lucide-react";

const Estandares = () => {
  const estandares = [
    {
      icon: Shield,
      title: "ISO 27001",
      fullName: "Sistema de Gestión de Seguridad de la Información",
      description: "Estándar internacional que especifica los requisitos para establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información.",
      purpose: "Ayudar a las organizaciones a proteger sus activos de información mediante un enfoque sistemático de gestión de riesgos de seguridad.",
      link: "https://www.iso.org/iso-27001-information-security.html",
      category: "Seguridad de la Información"
    },
    {
      icon: BookOpen,
      title: "ISO 17799",
      fullName: "Código de Práctica para la Gestión de Seguridad de la Información",
      description: "Proporciona directrices y principios generales para iniciar, implementar, mantener y mejorar la gestión de seguridad de la información en una organización.",
      purpose: "Establecer controles de seguridad efectivos y proporcionar orientación sobre las mejores prácticas en seguridad de la información.",
      link: "https://www.iso.org/standard/39612.html",
      category: "Mejores Prácticas"
    },
    {
      icon: Settings,
      title: "COBIT",
      fullName: "Control Objectives for Information and Related Technologies",
      description: "Marco de gobierno y gestión de TI que ayuda a las empresas a lograr sus objetivos mediante el uso efectivo de la tecnología de la información.",
      purpose: "Proporcionar un marco integral para el gobierno y la gestión de las TI empresariales, alineando la tecnología con los objetivos de negocio.",
      link: "https://www.isaca.org/resources/cobit",
      category: "Gobierno de TI"
    },
    {
      icon: Cpu,
      title: "NIST",
      fullName: "National Institute of Standards and Technology Framework",
      description: "Marco voluntario que proporciona un enfoque basado en estándares, directrices y mejores prácticas para gestionar el riesgo de ciberseguridad.",
      purpose: "Mejorar la postura de ciberseguridad de las organizaciones mediante la identificación, protección, detección, respuesta y recuperación ante amenazas.",
      link: "https://www.nist.gov/cyberframework",
      category: "Ciberseguridad"
    },
    {
      icon: Workflow,
      title: "ITIL",
      fullName: "Information Technology Infrastructure Library",
      description: "Conjunto de prácticas detalladas para la gestión de servicios de TI que se enfoca en alinear los servicios de TI con las necesidades del negocio.",
      purpose: "Mejorar la eficiencia operacional, reducir costos y aumentar la satisfacción del cliente mediante la gestión efectiva de servicios de TI.",
      link: "https://www.axelos.com/best-practice-solutions/itil",
      category: "Gestión de Servicios"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-transparent">
                Estándares de Información
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Marcos internacionales y mejores prácticas para la gestión segura, eficiente y efectiva de la información empresarial y los sistemas tecnológicos.
            </p>
          </div>

          <div className="grid gap-8">
            {estandares.map((estandar, index) => (
              <Card key={index} className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-lg bg-gradient-primary flex-shrink-0">
                      <estandar.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                          <CardTitle className="text-2xl mb-1">{estandar.title}</CardTitle>
                          <p className="text-lg text-muted-foreground mb-3">{estandar.fullName}</p>
                          <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                            {estandar.category}
                          </div>
                        </div>
                        <Button className="gradient-primary shadow-tech group self-start sm:self-center" asChild>
                          <a href={estandar.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                            Más Información
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">¿Qué es?</h3>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {estandar.description}
                    </CardDescription>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">¿Para qué sirve?</h3>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {estandar.purpose}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Estandares;