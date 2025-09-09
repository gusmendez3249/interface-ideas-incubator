import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Scale, Copyright, Shield, Gavel } from "lucide-react";

const Normativas = () => {
  const normativas = [
    {
      icon: Shield,
      title: "Ley General de Protección de Datos Personales de México",
      description: "Regula el tratamiento de datos personales en posesión de particulares, estableciendo principios, derechos y obligaciones para garantizar la privacidad.",
      purpose: "Proteger los datos personales de las personas físicas y garantizar su derecho a la autodeterminación informativa.",
      link: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
      category: "Protección de Datos"
    },
    {
      icon: Copyright,
      title: "Ley de Propiedad Industrial",
      description: "Protege las invenciones, marcas, diseños industriales y otros elementos de propiedad intelectual en el ámbito comercial e industrial.",
      purpose: "Fomentar la innovación y proteger los derechos de propiedad industrial, garantizando la competencia leal.",
      link: "https://www.diputados.gob.mx/LeyesBiblio/pdf/50_130521.pdf",
      category: "Propiedad Intelectual"
    },
    {
      icon: Scale,
      title: "Ley Federal del Derecho de Autor",
      description: "Protege las obras literarias, artísticas, científicas y otras creaciones del intelecto humano, así como los derechos conexos.",
      purpose: "Salvaguardar los derechos morales y patrimoniales de los autores y titulares de derechos conexos.",
      link: "https://www.diputados.gob.mx/LeyesBiblio/pdf/122_190221.pdf",
      category: "Derechos de Autor"
    },
    {
      icon: Gavel,
      title: "Código Penal Federal",
      description: "Establece los delitos y sanciones aplicables a nivel federal, incluyendo delitos informáticos y contra la propiedad intelectual.",
      purpose: "Tipificar conductas delictivas y establecer sanciones para garantizar el orden público y proteger bienes jurídicos.",
      link: "https://www.diputados.gob.mx/LeyesBiblio/pdf/9_210521.pdf",
      category: "Legislación Penal"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-transparent">
                Normativas Legales
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aspectos éticos y legales del manejo de la información. Accede a las principales normativas mexicanas que regulan la protección de datos, propiedad intelectual y derechos digitales.
            </p>
          </div>

          <div className="grid gap-8">
            {normativas.map((normativa, index) => (
              <Card key={index} className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-lg bg-gradient-primary flex-shrink-0">
                      <normativa.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{normativa.title}</CardTitle>
                          <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                            {normativa.category}
                          </div>
                        </div>
                        <Button className="gradient-primary shadow-tech group self-start sm:self-center" asChild>
                          <a href={normativa.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                            Consultar Ley
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
                      {normativa.description}
                    </CardDescription>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">¿Para qué sirve?</h3>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {normativa.purpose}
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

export default Normativas;