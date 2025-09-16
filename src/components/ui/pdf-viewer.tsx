import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, FileText, X, Maximize2, Minimize2 } from "lucide-react";

interface PDFViewerProps {
  title: string;
  pdfUrl: string;
  webUrl?: string;
  description?: string;
  trigger?: React.ReactNode;
}

const PDFViewer = ({ 
  title, 
  pdfUrl, 
  webUrl, 
  description, 
  trigger 
}: PDFViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenWeb = () => {
    if (webUrl) {
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const defaultTrigger = (
    <Button variant="outline" className="flex items-center space-x-2">
      <FileText className="w-4 h-4" />
      <span>Ver PDF</span>
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent 
        className={`max-w-8xl w-[98vw] h-[95vh] p-0 ${
          isFullscreen ? 'max-w-none w-screen h-screen' : ''
        }`}
      >
        <DialogHeader className="p-4 pb-3 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl gradient-tech bg-clip-text text-white rounded-lg">
                {title}
              </DialogTitle>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center space-x-1"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">
                  {isFullscreen ? 'Salir' : 'Pantalla Completa'}
                </span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleDownload}
                className="flex items-center space-x-1"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargar</span>
              </Button>
              {webUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleOpenWeb}
                  className="flex items-center space-x-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Sitio Web</span>
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-1"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Cerrar</span>
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 p-4">
          <div className="w-full h-full rounded-lg border border-border/30 overflow-hidden bg-muted/20 shadow-inner">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              className="w-full h-full border-0"
              title={title}
              loading="lazy"
              style={{ minHeight: '70vh' }}
            />
          </div>
        </div>

        <div className="p-3 border-t border-border/50 bg-muted/10">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <FileText className="w-3 h-3 mr-1" />
                PDF Document
              </Badge>
              <span>Documento oficial del gobierno mexicano</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Fuente: Gobierno de México</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;
