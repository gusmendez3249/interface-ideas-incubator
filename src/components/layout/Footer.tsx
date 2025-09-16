import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Normateca Digital</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Plataforma especializada en consulta normativa y estándares profesionales.
              Facilitamos el acceso a información técnica actualizada para profesionales
              y organizaciones.
            </p>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Actualizado constantemente
            </Badge>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/aspectos-eticos"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                >
                  Aspectos Éticos
                </Link>
              </li>
              <li>
                <Link
                  to="/leyes"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                >
                  Leyes Mexicanas
                </Link>
              </li>
              <li>
                <Link
                  to="/estandares"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                >
                  Estándares
                </Link>
              </li>
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
              Información Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacidad"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:gustavoangelc2005@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contacto Legal</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/30" />

        {/* Información del pie */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Dolores Hidalgo, Guanajuato, México</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>NormaTeca-Digital.com</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; 2025 Normateca Digital. Todos los derechos reservados.</p>
            <p className="mt-1">Cruz Ménde Juan Gustavo Ángel y Salinas Salinas Omar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;