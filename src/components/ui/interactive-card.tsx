import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  purpose: string;
  category: string;
  actions: ReactNode;
  className?: string;
}

const InteractiveCard = ({
  icon,
  title,
  subtitle,
  description,
  purpose,
  category,
  actions,
  className
}: InteractiveCardProps) => {
  return (
    <Card className={cn(
      "shadow-card border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-tech transition-all duration-500 group",
      "hover:border-primary/20 hover:bg-card/90",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className="p-4 rounded-xl bg-gradient-primary flex-shrink-0 group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-xl lg:text-2xl mb-2 leading-tight">
                  {title}
                </CardTitle>
                {subtitle && (
                  <p className="text-base lg:text-lg text-muted-foreground mb-3 leading-relaxed">
                    {subtitle}
                  </p>
                )}
                <Badge 
                  variant="secondary" 
                  className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 transition-colors"
                >
                  {category}
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:gap-2">
                {actions}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-2">
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
            <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
              ¿Qué es?
            </h3>
            <CardDescription className="text-muted-foreground leading-relaxed text-sm lg:text-base">
              {description}
            </CardDescription>
          </div>
          <div className="p-4 rounded-lg bg-secondary/20 border border-border/20">
            <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-3" />
              ¿Para qué sirve?
            </h3>
            <CardDescription className="text-muted-foreground leading-relaxed text-sm lg:text-base">
              {purpose}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;