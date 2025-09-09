import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Globe, Database, Users, FileText } from "lucide-react";

const Privacidad = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-tech bg-clip-text text-transparent">
                Aviso de Privacidad
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Información sobre el tratamiento y protección de datos personales conforme a la normativa vigente
            </p>
          </div>

          <div className="space-y-8">
            {/* Información de la empresa */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Responsable del Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Razón Social:</h3>
                  <p className="text-muted-foreground">Normateca Digital S.A. de C.V.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Domicilio:</h3>
                  <p className="text-muted-foreground">Av. Tecnología #123, Col. Digital, CP 01000, Ciudad de México</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sitio Web:</h3>
                  <p className="text-muted-foreground">www.normatecadigital.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Datos que se recopilan */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Database className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Datos Personales que Recopilamos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Para brindar nuestros servicios de consulta normativa, recopilamos los siguientes datos personales:
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                    <span>Nombre completo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                    <span>Correo electrónico</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                    <span>Empresa u organización</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                    <span>Área de interés profesional</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                    <span>Datos de navegación y cookies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Finalidades */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Finalidades del Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Sus datos personales serán utilizados para las siguientes finalidades:
                </CardDescription>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Finalidades Primarias:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                        Proveer acceso a contenido normativo
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                        Crear y gestionar cuentas de usuario
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                        Proporcionar soporte técnico
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Finalidades Secundarias:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        Envío de boletines informativos
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        Análisis estadístico de uso
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        Mejora de servicios
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Derechos ARCO */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Sus Derechos ARCO</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Usted tiene derecho a ejercer los siguientes derechos sobre sus datos personales:
                </CardDescription>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">A</div>
                      <div>
                        <h4 className="font-semibold">Acceso</h4>
                        <p className="text-sm text-muted-foreground">Conocer qué datos tenemos de usted</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">R</div>
                      <div>
                        <h4 className="font-semibold">Rectificación</h4>
                        <p className="text-sm text-muted-foreground">Corregir datos inexactos</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">C</div>
                      <div>
                        <h4 className="font-semibold">Cancelación</h4>
                        <p className="text-sm text-muted-foreground">Eliminar sus datos personales</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">O</div>
                      <div>
                        <h4 className="font-semibold">Oposición</h4>
                        <p className="text-sm text-muted-foreground">Oponerse al tratamiento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Contacto para Ejercer sus Derechos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Correo Electrónico:</h3>
                    <p className="text-muted-foreground">privacidad@normatecadigital.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Teléfono:</h3>
                    <p className="text-muted-foreground">+52 (55) 1234-5678</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horario de Atención:</h3>
                    <p className="text-muted-foreground">Lunes a Viernes de 9:00 a 18:00 hrs (Tiempo del Centro de México)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modificaciones */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Modificaciones al Aviso</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Este aviso de privacidad puede ser modificado para reflejar cambios en nuestras prácticas de información. 
                  Cualquier cambio será comunicado a través de nuestro sitio web y, en su caso, por correo electrónico. 
                  La fecha de la última actualización de este aviso es: <strong>Enero 2024</strong>.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacidad;