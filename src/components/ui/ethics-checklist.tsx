import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ClipboardList, Download, RefreshCw, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface ChecklistItem {
  id: string;
  category: string;
  question: string;
  description: string;
  importance: 'critical' | 'high' | 'medium';
  legalRequirement: boolean;
}

const checklistItems: ChecklistItem[] = [
  // Consentimiento
  {
    id: 'consent-1',
    category: 'Consentimiento',
    question: '¿Se ha obtenido consentimiento explícito para el tratamiento de datos?',
    description: 'El consentimiento debe ser libre, específico, informado e inequívoco.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'consent-2',
    category: 'Consentimiento',
    question: '¿Se permite la revocación fácil del consentimiento?',
    description: 'Los usuarios deben poder retirar su consentimiento tan fácilmente como lo otorgaron.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'consent-3',
    category: 'Consentimiento',
    question: '¿Se ha explicado claramente el propósito del tratamiento?',
    description: 'Los usuarios deben entender exactamente para qué se usarán sus datos.',
    importance: 'high',
    legalRequirement: true
  },

  // Transparencia
  {
    id: 'transparency-1',
    category: 'Transparencia',
    question: '¿Existe un aviso de privacidad claro y accesible?',
    description: 'El aviso debe estar escrito en lenguaje sencillo y ser fácil de encontrar.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'transparency-2',
    category: 'Transparencia',
    question: '¿Se informa sobre el tiempo de conservación de datos?',
    description: 'Los usuarios deben saber cuánto tiempo se mantendrán sus datos.',
    importance: 'high',
    legalRequirement: true
  },
  {
    id: 'transparency-3',
    category: 'Transparencia',
    question: '¿Se divulga si los datos se comparten con terceros?',
    description: 'Cualquier transferencia o compartición debe ser transparente.',
    importance: 'critical',
    legalRequirement: true
  },

  // Seguridad
  {
    id: 'security-1',
    category: 'Seguridad',
    question: '¿Se han implementado medidas técnicas de seguridad adecuadas?',
    description: 'Cifrado, control de acceso, copias de seguridad, etc.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'security-2',
    category: 'Seguridad',
    question: '¿Existe un plan de respuesta ante incidentes de seguridad?',
    description: 'Protocolo claro para manejar brechas de seguridad.',
    importance: 'high',
    legalRequirement: true
  },
  {
    id: 'security-3',
    category: 'Seguridad',
    question: '¿Se capacita regularmente al personal en seguridad?',
    description: 'El factor humano es crucial en la seguridad de datos.',
    importance: 'high',
    legalRequirement: false
  },

  // Minimización
  {
    id: 'minimization-1',
    category: 'Minimización',
    question: '¿Se recopilan solo los datos estrictamente necesarios?',
    description: 'Solo datos relevantes para el propósito específico declarado.',
    importance: 'high',
    legalRequirement: true
  },
  {
    id: 'minimization-2',
    category: 'Minimización',
    question: '¿Se eliminan datos cuando ya no son necesarios?',
    description: 'Políticas claras de retención y eliminación de datos.',
    importance: 'high',
    legalRequirement: true
  },
  {
    id: 'minimization-3',
    category: 'Minimización',
    question: '¿Se evita la recopilación automática innecesaria?',
    description: 'No recopilar datos "por si acaso" sin propósito específico.',
    importance: 'medium',
    legalRequirement: false
  },

  // Derechos ARCO
  {
    id: 'arco-1',
    category: 'Derechos ARCO',
    question: '¿Se facilita el ejercicio de derechos de acceso?',
    description: 'Los usuarios pueden consultar qué datos se tienen de ellos.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'arco-2',
    category: 'Derechos ARCO',
    question: '¿Se permite la rectificación de datos incorrectos?',
    description: 'Proceso claro para corregir información inexacta.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'arco-3',
    category: 'Derechos ARCO',
    question: '¿Se respeta el derecho de cancelación?',
    description: 'Los usuarios pueden solicitar la eliminación de sus datos.',
    importance: 'critical',
    legalRequirement: true
  },
  {
    id: 'arco-4',
    category: 'Derechos ARCO',
    question: '¿Se atiende el derecho de oposición?',
    description: 'Los usuarios pueden oponerse a ciertos tratamientos.',
    importance: 'critical',
    legalRequirement: true
  }
];

const EthicsChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  const handleItemCheck = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
    setShowResults(false);
  };

  const generateReport = () => {
    setShowResults(true);
  };

  const downloadReport = () => {
    const categories = [...new Set(checklistItems.map(item => item.category))];
    let reportContent = `REPORTE DE EVALUACIÓN ÉTICA - MANEJO DE INFORMACIÓN\n`;
    reportContent += `Fecha: ${new Date().toLocaleDateString('es-MX')}\n`;
    reportContent += `Hora: ${new Date().toLocaleTimeString('es-MX')}\n\n`;

    reportContent += `RESUMEN EJECUTIVO\n`;
    reportContent += `=================\n`;
    reportContent += `Total de elementos evaluados: ${checklistItems.length}\n`;
    reportContent += `Elementos completados: ${checkedItems.size}\n`;
    reportContent += `Porcentaje de cumplimiento: ${Math.round((checkedItems.size / checklistItems.length) * 100)}%\n\n`;

    categories.forEach(category => {
      const categoryItems = checklistItems.filter(item => item.category === category);
      const categoryCompleted = categoryItems.filter(item => checkedItems.has(item.id)).length;

      reportContent += `${category.toUpperCase()}\n`;
      reportContent += `${'='.repeat(category.length)}\n`;
      reportContent += `Completado: ${categoryCompleted}/${categoryItems.length}\n\n`;

      categoryItems.forEach(item => {
        const status = checkedItems.has(item.id) ? '✓ CUMPLE' : '✗ NO CUMPLE';
        const legal = item.legalRequirement ? ' [REQUERIMIENTO LEGAL]' : '';
        reportContent += `${status} - ${item.question}${legal}\n`;
        reportContent += `    ${item.description}\n\n`;
      });
    });

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Reporte_Evaluacion_Etica.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const getCompletionPercentage = () => {
    return Math.round((checkedItems.size / checklistItems.length) * 100);
  };

  const getCategoryStats = () => {
    const categories = [...new Set(checklistItems.map(item => item.category))];
    return categories.map(category => {
      const categoryItems = checklistItems.filter(item => item.category === category);
      const completed = categoryItems.filter(item => checkedItems.has(item.id)).length;
      return {
        category,
        total: categoryItems.length,
        completed,
        percentage: Math.round((completed / categoryItems.length) * 100)
      };
    });
  };

  const getImportanceIcon = (importance: 'critical' | 'high' | 'medium') => {
    switch (importance) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      case 'medium':
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getImportanceBadge = (importance: 'critical' | 'high' | 'medium') => {
    const styles = {
      critical: 'bg-destructive/10 text-destructive border-destructive/20',
      high: 'bg-accent/10 text-accent border-accent/20',
      medium: 'bg-primary/10 text-primary border-primary/20'
    };

    return (
      <Badge className={`${styles[importance]} font-medium`}>
        {importance === 'critical' ? 'Crítico' : importance === 'high' ? 'Alto' : 'Medio'}
      </Badge>
    );
  };

  const categories = [...new Set(checklistItems.map(item => item.category))];

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <ClipboardList className="w-6 h-6 text-primary" />
            <span>Lista de Verificación Ética</span>
          </CardTitle>
          <CardDescription>
            Evalúa el cumplimiento ético y legal en el manejo de información
          </CardDescription>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso: {checkedItems.size}/{checklistItems.length}</span>
              <span>{getCompletionPercentage()}%</span>
            </div>
            <Progress value={getCompletionPercentage()} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <Button onClick={generateReport} className="bg-gradient-primary text-primary-foreground">
              <CheckCircle className="w-4 h-4 mr-2" />
              Generar Reporte
            </Button>
            <Button onClick={downloadReport} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Descargar
            </Button>
            <Button onClick={resetChecklist} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reiniciar
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span>Resultados de la Evaluación</span>
            </CardTitle>
            <CardDescription>
              Resumen del cumplimiento ético y legal por categorías
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCategoryStats().map(stat => (
                <div key={stat.category} className={`p-4 rounded-lg border-2 shadow-card backdrop-blur-sm transition-all duration-200 ${
                  stat.percentage === 100 
                    ? 'border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5'
                    : stat.percentage >= 70
                    ? 'border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5'
                    : 'border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5'
                }`}>
                  <h4 className="font-bold mb-2 text-lg">{stat.category}</h4>
                  <div className="text-2xl font-bold mb-1">{stat.completed}/{stat.total}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.percentage}% completado</div>
                  <Progress value={stat.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {categories.map(category => (
        <Card key={category} className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">{category}</CardTitle>
            <CardDescription>
              {checklistItems.filter(item => item.category === category && checkedItems.has(item.id)).length} de{' '}
              {checklistItems.filter(item => item.category === category).length} completados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {checklistItems
                .filter(item => item.category === category)
                .map(item => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                      checkedItems.has(item.id)
                        ? 'border-primary/50 bg-gradient-to-r from-primary/10 to-primary/5 shadow-card backdrop-blur-sm'
                        : 'border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={item.id}
                        checked={checkedItems.has(item.id)}
                        onCheckedChange={() => handleItemCheck(item.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <label
                            htmlFor={item.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {item.question}
                          </label>
                          <div className="flex items-center space-x-2 ml-2">
                            {getImportanceIcon(item.importance)}
                            {getImportanceBadge(item.importance)}
                            {item.legalRequirement && (
                              <Badge variant="destructive" className="text-xs">
                                Legal
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EthicsChecklist;