import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Mail, Globe, Database, Users, FileText, Download, MapPin } from "lucide-react";

const Privacidad = () => {
  const generatePDF = () => {
    // Crear el contenido HTML con estilos para el PDF
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Aviso de Privacidad - Normateca Digital</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #2563eb;
            text-align: center;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
        }
        h2 {
            color: #1e40af;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .section {
            margin-bottom: 25px;
            padding: 15px;
            border-left: 4px solid #2563eb;
            background-color: #f8fafc;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .contact-info {
            background-color: #eff6ff;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>AVISO DE PRIVACIDAD</h1>
        <p><strong>Normateca Digital</strong></p>
        <p>Fecha de actualización: 14/9/2025</p>
    </div>

    <div class="section">
        <h2>RESPONSABLE</h2>
        <p><strong>Cruz Ménde Juan Gustavo Ángel y Salinas Salinas Omar</strong>, comercialmente conocido como <strong>Normateca Digital</strong>, con domicilio en 34, Unuversidad del Nte de Guanajuato, 37803 Dolores Hidalgo Cuna de la Independencia Nacional, Gto., es el responsable del uso y protección de sus datos personales.</p>
    </div>

    <div class="section">
        <h2>FINALIDADES PRIMARIAS</h2>
        <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
        <ul>
            <li>Estadística</li>
        </ul>
    </div>

    <div class="section">
        <h2>DATOS PERSONALES RECABADOS</h2>
        <p>Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos de identificación y contacto, datos académicos.</p>
    </div>

    <div class="section">
        <h2>DERECHOS ARCO</h2>
        <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
        <p>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de Al mismo correo electrónico donde se envió la petición. La respuesta a su solicitud será atendida en un plazo máximo de 15 días hábiles.</p>
    </div>

    <div class="section">
        <h2>DATOS RECABADOS POR EL SITIO WEB</h2>
        <p>Nuestro sitio web recaba automáticamente los siguientes datos:</p>
        <ul>
            <li>Identificadores, nombre de usuario y contraseñas de sesión</li>
            <li>Idioma preferido por el usuario</li>
            <li>Región en la que se encuentra el usuario</li>
            <li>Tipo de navegador del usuario</li>
            <li>Fecha y hora del inicio y final de una sesión de un usuario</li>
        </ul>
    </div>

    <div class="contact-info">
        <h2>CONTACTO</h2>
        <p>Para más información sobre este aviso de privacidad, puede contactarnos en:</p>
        <p><strong>Correo electrónico:</strong> gustavoangelc2005@gmail.com</p>
        <p><strong>Sitio web:</strong> https://NormaTeca-Digital.com</p>
    </div>

    <div class="footer">
        <p>Documento generado el ${new Date().toLocaleDateString('es-MX')}</p>
        <p>© 2025 Normateca Digital - Todos los derechos reservados</p>
    </div>
</body>
</html>`;

    // Crear blob con contenido HTML
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Politica_Privacidad_Normateca_Digital.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Abrir también una ventana de impresión para que el usuario pueda "Guardar como PDF"
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-white rounded-lg">
                Aviso de Privacidad
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Información sobre el tratamiento y protección de datos personales conforme a la normativa vigente
            </p>
            <Badge variant="secondary" className="mt-4 bg-primary/10 text-primary border-primary/20">
              Actualizado: 14/9/2025
            </Badge>
          </div>

          <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
            <CardHeader className="pb-6">
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl mb-2">Política de Privacidad</CardTitle>
                  <CardDescription className="text-base">
                    Normateca Digital - Protección de datos personales
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] w-full rounded-lg border border-border/20 p-6 bg-muted/10">
                <div className="space-y-8 text-sm leading-relaxed">
                  {/* Responsable */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">RESPONSABLE</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Cruz Ménde Juan Gustavo Ángel y Salinas Salinas Omar</strong>, comercialmente conocido como
                        <strong className="text-foreground"> Normateca Digital</strong>, con domicilio en 34, Unuversidad del Nte de Guanajuato,
                        37803 Dolores Hidalgo Cuna de la Independencia Nacional, Gto., es el responsable del uso y protección de sus datos personales.
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-border/30" />

                  {/* Finalidades Primarias */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">FINALIDADES PRIMARIAS</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">Estadística</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator className="bg-border/30" />

                  {/* Datos Recabados */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Database className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">DATOS PERSONALES RECABADOS</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                      <p className="text-muted-foreground leading-relaxed">
                        Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos de identificación y contacto, datos académicos.
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-border/30" />

                  {/* Derechos ARCO */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">DERECHOS ARCO</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso).
                        Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación);
                        que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación);
                        así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de Al mismo correo electrónico donde se envió la petición.
                        La respuesta a su solicitud será atendida en un plazo máximo de 15 días hábiles.
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-border/30" />

                  {/* Datos del Sitio Web */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">DATOS RECABADOS POR EL SITIO WEB</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Nuestro sitio web recaba automáticamente los siguientes datos:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">Identificadores, nombre de usuario y contraseñas de sesión</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">Idioma preferido por el usuario</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">Región en la que se encuentra el usuario</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">Tipo de navegador del usuario</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">Fecha y hora del inicio y final de una sesión de un usuario</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator className="bg-border/30" />

                  {/* Contacto */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">CONTACTO</h3>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/20">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Para más información sobre este aviso de privacidad, puede contactarnos en:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Correo electrónico:</strong> gustavoangelc2005@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground"><strong className="text-foreground">Sitio web:</strong> https://NormaTeca-Digital.com</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-border/30" />

                  {/* Fecha de actualización */}
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 text-center">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Última actualización:</strong> 14/9/2025
                    </p>
                  </div>
                </div>
              </ScrollArea>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={generatePDF}
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Política en PDF</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacidad;