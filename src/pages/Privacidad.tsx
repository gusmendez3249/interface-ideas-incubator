import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Globe, Database, Users, FileText, Phone, Clock } from "lucide-react";

const Privacidad = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-transparent">
                Aviso de Privacidad
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Información sobre el tratamiento y protección de datos personales conforme a la normativa vigente
            </p>
            <Badge variant="secondary" className="mt-4 bg-primary/10 text-primary border-primary/20">
              Actualizado: Enero 2024
            </Badge>
          </div>

          <div className="space-y-10">
            {/* Información de la empresa */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Globe className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Responsable del Tratamiento</CardTitle>
                    <CardDescription className="text-base">
                      Entidad responsable del manejo y protección de sus datos personales
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
                      <h3 className="font-semibold mb-2 text-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        Razón Social
                      </h3>
                      <p className="text-muted-foreground font-medium">Normateca Digital S.A. de C.V.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
                      <h3 className="font-semibold mb-2 text-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        Sitio Web
                      </h3>
                      <p className="text-muted-foreground font-medium">www.normatecadigital.com</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
                    <h3 className="font-semibold mb-2 text-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Domicilio
                    </h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Av. Tecnología #123, Col. Digital<br />
                      CP 01000, Ciudad de México<br />
                      México
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="bg-border/30" />

            {/* Datos que se recopilan */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Database className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Datos Personales que Recopilamos</CardTitle>
                    <CardDescription className="text-base">
                      Para brindar nuestros servicios de consulta normativa, recopilamos los siguientes datos personales
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/20 border border-border/20 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">Nombre completo</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/20 border border-border/20 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">Correo electrónico</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/20 border border-border/20 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">Empresa u organización</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/20 border border-border/20 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">Área de interés profesional</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/20 border border-border/20 hover:bg-secondary/30 transition-colors sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="font-medium">Datos de navegación y cookies</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="bg-border/30" />

            {/* Finalidades */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <FileText className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Finalidades del Tratamiento</CardTitle>
                    <CardDescription className="text-base">
                      Sus datos personales serán utilizados para las siguientes finalidades
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-bold mb-4 text-primary text-lg flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                      Finalidades Primarias
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">Necesarias para brindar el servicio solicitado</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Proveer acceso a contenido normativo</span>
                      </li>
                      <li className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Crear y gestionar cuentas de usuario</span>
                      </li>
                      <li className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Proporcionar soporte técnico</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-bold mb-4 text-accent text-lg flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3" />
                      Finalidades Secundarias
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">Opcionales - puede rechazar su tratamiento</p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Envío de boletines informativos</span>
                      </li>
                      <li className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Análisis estadístico de uso</span>
                      </li>
                      <li className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Mejora de servicios</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="bg-border/30" />

            {/* Derechos ARCO */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Shield className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Sus Derechos ARCO</CardTitle>
                    <CardDescription className="text-base">
                      Usted tiene derecho a ejercer los siguientes derechos sobre sus datos personales
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">A</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Acceso</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Conocer qué datos personales tenemos de usted</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">R</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Rectificación</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Corregir datos inexactos o incompletos</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">C</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Cancelación</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Eliminar sus datos de nuestros registros</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">O</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Oposición</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Oponerse al tratamiento de sus datos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="bg-border/30" />

            {/* Contacto */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Contacto para Ejercer sus Derechos</CardTitle>
                    <CardDescription className="text-base">
                      Para ejercer cualquiera de sus derechos ARCO, contáctenos a través de los siguientes medios
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-lg bg-muted/30 border border-border/20 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                    </div>
                    <p className="text-muted-foreground font-medium">privacidad@normatecadigital.com</p>
                  </div>
                  <div className="p-6 rounded-lg bg-muted/30 border border-border/20 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Teléfono</h3>
                    </div>
                    <p className="text-muted-foreground font-medium">+52 (55) 1234-5678</p>
                  </div>
                  <div className="p-6 rounded-lg bg-muted/30 border border-border/20 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Horario de Atención</h3>
                    </div>
                    <p className="text-muted-foreground font-medium">Lunes a Viernes<br />9:00 a 18:00 hrs<br />(Tiempo del Centro)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modificaciones */}
            <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Users className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-2">Modificaciones al Aviso</CardTitle>
                    <CardDescription className="text-base">
                      Información sobre actualizaciones y cambios a este aviso de privacidad
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
                  <CardDescription className="text-base leading-relaxed">
                    Este aviso de privacidad puede ser modificado para reflejar cambios en nuestras prácticas de información. 
                    Cualquier cambio será comunicado a través de nuestro sitio web y, en su caso, por correo electrónico. 
                    <br /><br />
                    <strong className="text-foreground">Fecha de última actualización:</strong> Enero 2024
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacidad;