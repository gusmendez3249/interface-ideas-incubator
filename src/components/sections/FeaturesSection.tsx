import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Globe, Lock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Normativas Legales",
      description: "Acceso completo a leyes y regulaciones mexicanas sobre protección de datos, propiedad industrial y derechos de autor",
      items: ["LGPDP México", "Ley de Propiedad Industrial", "Ley Federal de Derechos de Autor", "Código Penal Federal"]
    },
    {
      icon: FileText,
      title: "Estándares de Información",
      description: "Marcos internacionales para la gestión segura y eficiente de la información empresarial",
      items: ["ISO 27001", "ISO 17799", "COBIT", "NIST", "ITIL"]
    },
    {
      icon: Lock,
      title: "Avisos de Privacidad",
      description: "Herramientas y plantillas para crear avisos de privacidad conforme a la normativa vigente",
      items: ["Plantillas personalizables", "Guías de implementación", "Requisitos legales", "Buenas prácticas"]
    },
    {
      icon: Globe,
      title: "Acceso Centralizado",
      description: "Plataforma única para consultar toda la información normativa y de estándares",
      items: ["Búsqueda avanzada", "Categorización clara", "Enlaces directos", "Actualizaciones constantes"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-tech bg-clip-text text-transparent">
              Características Principales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre las herramientas y recursos que te ayudarán a cumplir con las normativas vigentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-tech transition-all duration-500 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;