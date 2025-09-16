import Layout from "@/components/layout/Layout";
import { Scale, Copyright, Shield, Gavel } from "lucide-react";
import ExternalContentViewer from "@/components/ui/external-content-viewer";
import InteractiveCard from "@/components/ui/interactive-card";

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
              <span className="gradient-tech bg-clip-text text-white rounded-lg">
                Normativas Legales
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aspectos éticos y legales del manejo de la información. Accede a las principales normativas mexicanas que regulan la protección de datos, propiedad intelectual y derechos digitales.
            </p>
          </div>

          <div className="grid gap-8">
            {normativas.map((normativa, index) => (
              <InteractiveCard
                key={index}
                icon={<normativa.icon className="w-8 h-8 text-primary-foreground" />}
                title={normativa.title}
                description={normativa.description}
                purpose={normativa.purpose}
                category={normativa.category}
                actions={
                  <>
                    <ExternalContentViewer
                      url={normativa.link}
                      title={normativa.title}
                      triggerText="Vista Previa"
                      variant="preview"
                    />
                    <ExternalContentViewer
                      url={normativa.link}
                      title={normativa.title}
                      triggerText="Consultar Ley"
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

export default Normativas;