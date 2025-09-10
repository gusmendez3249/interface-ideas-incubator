import Layout from "@/components/layout/Layout";
import { Shield, Settings, BookOpen, Cpu, Workflow } from "lucide-react";
import ExternalContentViewer from "@/components/ui/external-content-viewer";
import InteractiveCard from "@/components/ui/interactive-card";

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
              <InteractiveCard
                key={index}
                icon={<estandar.icon className="w-8 h-8 text-primary-foreground" />}
                title={estandar.title}
                subtitle={estandar.fullName}
                description={estandar.description}
                purpose={estandar.purpose}
                category={estandar.category}
                actions={
                  <>
                    <ExternalContentViewer
                      url={estandar.link}
                      title={`${estandar.title} - ${estandar.fullName}`}
                      triggerText="Vista Previa"
                      variant="preview"
                    />
                    <ExternalContentViewer
                      url={estandar.link}
                      title={`${estandar.title} - ${estandar.fullName}`}
                      triggerText="Más Información"
                      variant="default"
                    />
                  </>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Estandares;