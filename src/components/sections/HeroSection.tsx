import { Button } from "@/components/ui/button";
import { Shield, BookOpen, Scale, FileCheck, Users, Lock } from "lucide-react";
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

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="mb-8 animate-float">
          <Shield className="w-20 h-20 mx-auto mb-6 text-primary" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <span className="gradient-tech bg-clip-text text-white rounded-lg">
            Normateca Digital
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Portal especializado en aspectos éticos y legales del manejo de información, con acceso completo al marco legal mexicano y estándares internacionales
        </p>

        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg bg-card/50 border border-border/20 backdrop-blur-sm">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Aspectos Éticos</p>
          </div>
          <div className="p-4 rounded-lg bg-card/50 border border-border/20 backdrop-blur-sm">
            <Scale className="w-8 h-8 mx-auto mb-2 text-accent" />
            <p className="text-sm font-medium">Leyes Mexicanas</p>
          </div>
          <div className="p-4 rounded-lg bg-card/50 border border-border/20 backdrop-blur-sm">
            <FileCheck className="w-8 h-8 mx-auto mb-2 text-secondary-foreground" />
            <p className="text-sm font-medium">Estándares ISO</p>
          </div>
          <div className="p-4 rounded-lg bg-card/50 border border-border/20 backdrop-blur-sm">
            <Lock className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Privacidad</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/aspectos-eticos">
            <Button size="lg" className="gradient-primary shadow-tech text-lg px-6 py-4 group">
              <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-all" />
              Aspectos Éticos
            </Button>
          </Link>

          <Link to="/leyes">
            <Button variant="outline" size="lg" className="text-lg px-6 py-4 border-accent/30 hover:bg-accent/10">
              <Scale className="w-5 h-5 mr-2" />
              Leyes Mexicanas
            </Button>
          </Link>

          <Link to="/estandares">
            <Button variant="outline" size="lg" className="text-lg px-6 py-4 border-primary/30 hover:bg-primary/10">
              <FileCheck className="w-5 h-5 mr-2" />
              Estándares
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;