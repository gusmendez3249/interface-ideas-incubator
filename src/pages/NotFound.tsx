import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold gradient-tech bg-clip-text text-transparent">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">¡Oops! Página no encontrada</p>
        <a href="/" className="text-primary hover:text-primary-glow underline transition-smooth">
          Regresar al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
