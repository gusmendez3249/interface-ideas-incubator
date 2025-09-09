import { Button } from "@/components/ui/button";
import { Shield, BookOpen, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-float">
          <Shield className="w-20 h-20 mx-auto mb-6 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="gradient-tech bg-clip-text text-transparent">
            Normateca Digital
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Portal integral de normativas legales, estándares de información y políticas de privacidad para el manejo seguro de datos
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/normativas">
            <Button size="lg" className="gradient-primary shadow-tech text-lg px-8 py-4 group">
              <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-all" />
              Explorar Normativas
            </Button>
          </Link>
          
          <Link to="/estandares">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
              <FileCheck className="w-5 h-5 mr-2" />
              Ver Estándares
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;