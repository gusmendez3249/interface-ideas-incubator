import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AspectosEticos from "./pages/AspectosEticos";
import Leyes from "./pages/Leyes";
import Estandares from "./pages/Estandares";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aspectos-eticos" element={<AspectosEticos />} />
          <Route path="/leyes" element={<Leyes />} />
          <Route path="/estandares" element={<Estandares />} />
          <Route path="/privacidad" element={<Privacidad />} />
          {/* Legacy routes for compatibility */}
          <Route path="/normativas" element={<Leyes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
