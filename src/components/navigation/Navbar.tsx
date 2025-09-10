import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Globe, FileText } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/", icon: Globe },
    { name: "Normativas", path: "/normativas", icon: Shield },
    { name: "Estándares", path: "/estandares", icon: FileText },
    { name: "Privacidad", path: "/privacidad", icon: Shield },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-tech backdrop-blur-lg border-b border-border/30 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform">
            Normateca Digital
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-smooth px-3 py-2 rounded-lg hover:bg-background/20"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-card/95 backdrop-blur-sm rounded-lg mt-2 border border-border/30 shadow-card">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-lg transition-smooth border border-transparent hover:border-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;