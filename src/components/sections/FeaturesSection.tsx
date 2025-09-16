import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, BookOpen, Scale, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Aspectos Éticos y Legales",
      description: "Fundamentos éticos y marco legal para el manejo responsable de la información en el entorno digital",
      items: ["Principios éticos", "Transparencia y confidencialidad", "Responsabilidad en el tratamiento", "Marco normativo mexicano"],
      link: "/aspectos-eticos"
    },
    {
      icon: Scale,
      title: "Leyes Mexicanas",
      description: "Marco legal completo con enlaces oficiales a las leyes que regulan el manejo de información en México",
      items: ["Ley General de Protección de Datos", "Ley de Propiedad Industrial", "Ley Federal de Derechos de Autor", "Código Penal Federal"],
      link: "/leyes"
    },
    {
      icon: FileText,
      title: "Estándares Internacionales",
      description: "Marcos de referencia y mejores prácticas para la gestión segura, eficiente y efectiva de la información",
      items: ["ISO 27001 - Seguridad de la Información", "ISO 27002 (17799) - Controles", "COBIT - Gobierno de TI", "NIST - Ciberseguridad", "ITIL - Gestión de Servicios"],
      link: "/estandares"
    },
    {
      icon: Shield,
      title: "Política de Privacidad",
      description: "Aviso de privacidad completo conforme a la normativa vigente con funcionalidad de descarga",
      items: ["Normateca Digital oficial", "Descarga en PDF", "Actualizado a 2025", "Conforme a LGPDP"],
      link: "/privacidad"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-tech bg-clip-text text-white rounded-lg">
              Características Principales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre las herramientas y recursos que te ayudarán a cumplir con las normativas vigentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="block group">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500 group-hover:border-primary/20 h-full cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl lg:text-2xl mb-3 leading-tight group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="p-4 rounded-lg bg-muted/20 border border-border/20 group-hover:bg-primary/5 transition-colors">
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm lg:text-base text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;