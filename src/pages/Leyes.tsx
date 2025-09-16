import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PDFViewer from "@/components/ui/pdf-viewer";
import { Scale, Download, ExternalLink, Shield, Copyright, Briefcase, AlertTriangle, FileText, Eye } from "lucide-react";

const Leyes = () => {
  const leyes = [
    {
      id: 'lgpdpmx',
      title: 'Ley General de Protección de Datos Personales',
      description: 'Regula el tratamiento legítimo, controlado e informado de los datos personales, a fin de garantizar la privacidad y el derecho a la autodeterminación informativa de las personas.',
      icon: Shield,
      color: 'primary',
      objetivos: [
        'Proteger los datos personales en posesión de particulares',
        'Regular el tratamiento legítimo de datos personales',
        'Garantizar la privacidad y autodeterminación informativa',
        'Establecer procedimientos para el ejercicio de derechos ARCO'
      ],
      aplicacion: 'Personas físicas y morales de carácter privado que realicen tratamiento de datos personales',
      enlaces: [
        {
          tipo: 'Texto completo oficial',
          url: 'https://sep.gob.mx/work/models/sep1/Resource/09ce94e2-449b-403b-9999-8d85f1bf966b/ley_general_proteccion_datos_personales.pdf',
          descripcion: 'Ley publicada en el DOF'
        },
        {
          tipo: 'Portal CONAFE',
          url: 'https://www.gob.mx/conafe/documentos/ley-general-de-proteccion-de-datos-personales-en-posesion-de-sujetos-obligados-289438',
          descripcion: 'Ley General de Protección de Datos Personales - Sitio oficial'
        }
      ],
      pdfUrl: 'https://sep.gob.mx/work/models/sep1/Resource/09ce94e2-449b-403b-9999-8d85f1bf966b/ley_general_proteccion_datos_personales.pdf',
      webUrl: 'https://www.gob.mx/conafe/documentos/ley-general-de-proteccion-de-datos-personales-en-posesion-de-sujetos-obligados-289438'
    },
    {
      id: 'lpi',
      title: 'Ley de Propiedad Industrial',
      description: 'Protege la actividad industrial y comercial mediante el otorgamiento de patentes, registros de marcas, modelos de utilidad, diseños industriales y otros derechos de propiedad industrial.',
      icon: Briefcase,
      color: 'accent',
      objetivos: [
        'Proteger la propiedad industrial en México',
        'Regular patentes, marcas y diseños industriales',
        'Fomentar la actividad inventiva y de mejoramiento tecnológico',
        'Promover la transferencia de tecnología'
      ],
      aplicacion: 'Inventores, empresarios y cualquier persona que desarrolle innovaciones industriales',
      enlaces: [
        {
          tipo: 'PDF Oficial',
          url: 'https://www.gob.mx/cms/uploads/attachment/file/130285/Ley_de_la_Propiedad_Industrial.pdf',
          descripcion: 'Ley de la Propiedad Industrial - PDF oficial'
        },
        {
          tipo: 'Portal IMPI',
          url: 'https://www.gob.mx/impi/acciones-y-programas/conoce-el-impi-que-es-el-impi',
          descripcion: 'Instituto Mexicano de la Propiedad Industrial'
        }
      ],
      pdfUrl: 'https://www.gob.mx/cms/uploads/attachment/file/130285/Ley_de_la_Propiedad_Industrial.pdf',
      webUrl: 'https://www.gob.mx/impi/acciones-y-programas/conoce-el-impi-que-es-el-impi'
    },
    {
      id: 'lfda',
      title: 'Ley Federal del Derecho de Autor',
      description: 'Protege los derechos de autor y conexos, promoviendo la creación de obras literarias y artísticas, así como su divulgación para beneficio de la sociedad.',
      icon: Copyright,
      color: 'secondary',
      objetivos: [
        'Proteger los derechos de autor sobre creaciones originales',
        'Regular la explotación de obras protegidas',
        'Establecer limitaciones y excepciones al derecho de autor',
        'Sancionar infracciones a derechos autorales'
      ],
      aplicacion: 'Autores, artistas, editores y cualquier persona que cree o use obras protegidas',
      enlaces: [
        {
          tipo: 'PDF Oficial',
          url: 'https://www.gob.mx/cms/uploads/attachment/file/319595/Reglamento_de_la_Ley_Federal_del_Derecho_de_Autor.pdf',
          descripcion: 'Reglamento de la Ley Federal del Derecho de Autor - PDF oficial'
        },
        {
          tipo: 'Portal Ley Derecho de Autor',
          url: 'https://www.diputados.gob.mx/LeyesBiblio/ref/lfda.htm',
          descripcion: 'Ley Federal del Derecho de Autor - Sitio web oficial'
        }
      ],
      pdfUrl: 'https://www.gob.mx/cms/uploads/attachment/file/319595/Reglamento_de_la_Ley_Federal_del_Derecho_de_Autor.pdf',
      webUrl: 'https://www.diputados.gob.mx/LeyesBiblio/ref/lfda.htm'
    },
    {
      id: 'cpf',
      title: 'Código Penal Federal',
      description: 'Establece los delitos contra la información y la seguridad informática, incluyendo el acceso ilícito a sistemas, daño en información, fraude informático y otros delitos cibernéticos.',
      icon: AlertTriangle,
      color: 'destructive',
      objetivos: [
        'Tipificar delitos informáticos y cibernéticos',
        'Proteger la información y sistemas computacionales',
        'Establecer sanciones por acceso ilícito a sistemas',
        'Regular el fraude y sabotaje informático'
      ],
      aplicacion: 'Sistema de justicia penal para perseguir delitos informáticos',
      enlaces: [
        {
          tipo: 'PDF Oficial',
          url: 'https://portal.infoqro.mx/transparencia/normatividad/codigos/federal/CODIGOPENALFEDERAL.pdf',
          descripcion: 'Código Penal Federal - PDF oficial'
        },
        {
          tipo: 'Portal SENASICA',
          url: 'https://www.gob.mx/senasica/documentos/codigo-penal-federal-298851?state=published',
          descripcion: 'Código Penal Federal - Sitio web oficial'
        }
      ],
      pdfUrl: 'https://portal.infoqro.mx/transparencia/normatividad/codigos/federal/CODIGOPENALFEDERAL.pdf',
      webUrl: 'https://www.gob.mx/senasica/documentos/codigo-penal-federal-298851?state=published'
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
          bg: 'bg-primary/10',
          border: 'border-primary/20',
          icon: 'text-primary',
          button: 'bg-gradient-primary text-primary-foreground'
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
                Marco Legal Mexicano
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leyes fundamentales que regulan el manejo de información, protección de datos personales y derechos digitales en México
            </p>
            <Badge variant="secondary" className="mt-4 bg-primary/10 text-primary border-primary/20">
              Legislación Vigente 2025
            </Badge>
          </div>

          <div className="grid gap-8">
            {leyes.map((ley, index) => {
              const colors = getColorClasses(ley.color);
              const Icon = ley.icon;

              return (
                <Card key={ley.id} className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
                  <CardHeader className="pb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl ${colors.bg} ${colors.border} border flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-2">{ley.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {ley.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Objetivos */}
                      <div className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
                        <h4 className={`font-bold mb-3 ${colors.icon} flex items-center`}>
                          <div className="w-2 h-2 bg-current rounded-full mr-2" />
                          Objetivos Principales
                        </h4>
                        <ul className="space-y-2">
                          {ley.objetivos.map((objetivo, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <div className={`w-1 h-1 ${colors.icon.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`} />
                              <span>{objetivo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Aplicación */}
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
                        <h4 className="font-bold mb-3 text-foreground flex items-center">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2" />
                          Ámbito de Aplicación
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {ley.aplicacion}
                        </p>
                      </div>

                      {/* Enlaces */}
                      <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                        <h4 className="font-bold mb-3 text-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          Enlaces Oficiales
                        </h4>
                        <div className="space-y-3">
                          {ley.enlaces.map((enlace, idx) => (
                            <div key={idx}>
                              <a
                                href={enlace.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>{enlace.tipo}</span>
                              </a>
                              <p className="text-xs text-muted-foreground mt-1">{enlace.descripcion}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {/* Visor de PDF */}
                      {ley.pdfUrl && (
                        <PDFViewer
                          title={ley.title}
                          pdfUrl={ley.pdfUrl}
                          webUrl={ley.webUrl}
                          description={ley.description}
                          trigger={
                            <Button className={`${colors.button} hover:opacity-90 transition-opacity flex items-center space-x-2`}>
                              <Eye className="w-4 h-4" />
                              <span>Ver PDF</span>
                            </Button>
                          }
                        />
                      )}
                      
                      {/* Botones de enlaces externos */}
                      {ley.enlaces.map((enlace, idx) => (
                        <Button
                          key={idx}
                          asChild
                          variant="outline"
                          className="hover:opacity-90 transition-opacity"
                        >
                          <a
                            href={enlace.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            {enlace.tipo.includes('PDF') ? (
                              <FileText className="w-4 h-4" />
                            ) : (
                              <ExternalLink className="w-4 h-4" />
                            )}
                            <span>{enlace.tipo}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                  {index < leyes.length - 1 && <Separator className="bg-border/30" />}
                </Card>
              );
            })}
          </div>

          {/* Información adicional */}
          <Card className="mt-12 shadow-card border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Scale className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2 text-foreground">Importancia del Cumplimiento Legal</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  El conocimiento y cumplimiento de estas leyes es fundamental para cualquier organización
                  que maneje información en el entorno digital mexicano.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1">Protección Legal</h4>
                  <p className="text-sm text-muted-foreground">Amparo jurídico para datos y creaciones</p>
                </div>
                <div className="p-4">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <h4 className="font-semibold mb-1">Prevención de Riesgos</h4>
                  <p className="text-sm text-muted-foreground">Evita sanciones y problemas legales</p>
                </div>
                <div className="p-4">
                  <Copyright className="w-8 h-8 mx-auto mb-2 text-secondary-foreground" />
                  <h4 className="font-semibold mb-1">Respeto a Derechos</h4>
                  <p className="text-sm text-muted-foreground">Garantiza derechos de autores y usuarios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Leyes;