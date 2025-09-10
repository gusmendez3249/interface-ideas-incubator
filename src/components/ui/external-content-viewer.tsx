import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Eye, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalContentViewerProps {
  url: string;
  title: string;
  triggerText?: string;
  className?: string;
  variant?: "default" | "outline" | "preview";
}

const ExternalContentViewer = ({ 
  url, 
  title, 
  triggerText = "Ver Contenido", 
  className,
  variant = "default" 
}: ExternalContentViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={variant === "outline" ? "outline" : "default"}
          className={cn(
            variant === "default" && "gradient-primary shadow-tech group",
            variant === "outline" && "border-primary/30 hover:bg-primary/10",
            variant === "preview" && "bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground",
            className
          )}
        >
          {variant === "preview" ? (
            <Eye className="w-4 h-4 mr-2" />
          ) : (
            <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          )}
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl gradient-tech bg-clip-text text-transparent">
              {title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                onClick={() => window.open(url, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Abrir Original
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 p-6 pt-0">
          <div className="w-full h-full bg-background/50 rounded-lg overflow-hidden border border-border/30">
            <iframe
              src={url}
              className="w-full h-full"
              title={title}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExternalContentViewer;