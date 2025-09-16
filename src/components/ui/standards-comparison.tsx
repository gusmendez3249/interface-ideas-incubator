import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Settings, Cpu, Workflow, BookOpen, CheckCircle, XCircle, GitCompare, ExternalLink } from "lucide-react";

interface Standard {
  id: string;
  name: string;
  fullName: string;
  icon: any;
  description: string;
  purpose: string;
  scope: string;
  complexity: 'low' | 'medium' | 'high';
  implementationTime: string;
  cost: 'low' | 'medium' | 'high';
  benefits: string[];
  challenges: string[];
  bestFor: string[];
  certificationAvailable: boolean;
  link: string;
  color: string;
}

const standards: Standard[] = [
  {
    id: 'iso27001',
    name: 'ISO 27001',
    fullName: 'Sistema de Gestión de Seguridad de la Información',
    icon: Shield,
    description: 'Estándar internacional para sistemas de gestión de seguridad de la información (SGSI).',
    purpose: 'Establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información.',
    scope: 'Toda la organización - Gestión integral de seguridad',
    complexity: 'high',
    implementationTime: '6-18 meses',
    cost: 'high',
    benefits: [
      'Certificación reconocida internacionalmente',
      'Marco integral de seguridad',
      'Mejora continua sistemática',
      'Cumplimiento regulatorio',
      'Reducción de riesgos'
    ],
    challenges: [
      'Implementación compleja y costosa',
      'Requiere compromiso organizacional total',
      'Necesita personal especializado',
      'Auditorías regulares obligatorias'
    ],
    bestFor: [
      'Organizaciones que manejan datos sensibles',
      'Empresas que requieren certificación',
      'Sectores regulados (financiero, salud)',
      'Organizaciones medianas y grandes'
    ],
    certificationAvailable: true,
    link: 'https://www.iso.org/iso-27001-information-security.html',
    color: 'primary'
  },
  {
    id: 'iso27002',
    name: 'ISO 27002',
    fullName: 'Código de Práctica para Controles de Seguridad',
    icon: BookOpen,
    description: 'Guía de mejores prácticas para implementar controles de seguridad de la información.',
    purpose: 'Proporcionar orientación sobre la selección, implementación y gestión de controles de seguridad.',
    scope: 'Controles específicos - Implementación técnica',
    complexity: 'medium',
    implementationTime: '3-12 meses',
    cost: 'medium',
    benefits: [
      'Controles específicos y detallados',
      'Flexible y adaptable',
      'Complementa ISO 27001',
      'Basado en mejores prácticas',
      'Costo-efectivo'
    ],
    challenges: [
      'No es certificable por sí solo',
      'Requiere interpretación experta',
      'Puede ser abrumador sin estructura',
      'Necesita actualización constante'
    ],
    bestFor: [
      'Organizaciones implementando ISO 27001',
      'Empresas buscando controles específicos',
      'Equipos técnicos de seguridad',
      'Organizaciones de cualquier tamaño'
    ],
    certificationAvailable: false,
    link: 'https://www.iso.org/standard/75652.html',
    color: 'accent'
  },
  {
    id: 'cobit',
    name: 'COBIT',
    fullName: 'Control Objectives for Information and Related Technologies',
    icon: Settings,
    description: 'Marco de gobierno y gestión de TI para alinear tecnología con objetivos de negocio.',
    purpose: 'Proporcionar un marco integral para el gobierno corporativo de TI y la gestión de riesgos.',
    scope: 'Gobierno de TI - Alineación estratégica',
    complexity: 'high',
    implementationTime: '12-24 meses',
    cost: 'high',
    benefits: [
      'Alineación TI-negocio',
      'Marco de gobierno robusto',
      'Gestión de riesgos integrada',
      'Optimización de recursos',
      'Mejora del ROI de TI'
    ],
    challenges: [
      'Muy complejo de implementar',
      'Requiere cambio cultural significativo',
      'Necesita expertise especializado',
      'Inversión considerable en tiempo'
    ],
    bestFor: [
      'Grandes organizaciones',
      'Empresas con TI crítica para el negocio',
      'Organizaciones reguladas',
      'Directivos y auditores de TI'
    ],
    certificationAvailable: true,
    link: 'https://www.isaca.org/resources/cobit',
    color: 'secondary'
  },
  {
    id: 'nist',
    name: 'NIST CSF',
    fullName: 'National Institute of Standards and Technology Cybersecurity Framework',
    icon: Cpu,
    description: 'Marco voluntario para mejorar la postura de ciberseguridad organizacional.',
    purpose: 'Proporcionar un enfoque flexible y basado en riesgos para gestionar la ciberseguridad.',
    scope: 'Ciberseguridad - Enfoque basado en riesgos',
    complexity: 'medium',
    implementationTime: '6-12 meses',
    cost: 'low',
    benefits: [
      'Gratuito y de acceso público',
      'Flexible y escalable',
      'Enfoque práctico y directo',
      'Amplia adopción en la industria',
      'Metodología clara de 5 funciones'
    ],
    challenges: [
      'Originalmente enfocado en EE.UU.',
      'No es certificable',
      'Requiere adaptación local',
      'Menos detallado que otros marcos'
    ],
    bestFor: [
      'Organizaciones de cualquier tamaño',
      'Empresas buscando enfoque práctico',
      'Sectores de infraestructura crítica',
      'Implementación inicial de ciberseguridad'
    ],
    certificationAvailable: false,
    link: 'https://www.nist.gov/cyberframework',
    color: 'destructive'
  },
  {
    id: 'itil',
    name: 'ITIL',
    fullName: 'Information Technology Infrastructure Library',
    icon: Workflow,
    description: 'Marco de mejores prácticas para la gestión de servicios de TI.',
    purpose: 'Optimizar la entrega y gestión de servicios de TI para crear valor empresarial.',
    scope: 'Gestión de servicios de TI - Operaciones',
    complexity: 'medium',
    implementationTime: '9-18 meses',
    cost: 'medium',
    benefits: [
      'Mejora calidad de servicios de TI',
      'Reduce costos operativos',
      'Aumenta satisfacción del cliente',
      'Marco maduro y probado',
      'Certificaciones reconocidas'
    ],
    challenges: [
      'Puede ser demasiado rígido',
      'Requiere cambio cultural',
      'Implementación gradual necesaria',
      'Costo de certificaciones'
    ],
    bestFor: [
      'Departamentos de TI',
      'Proveedores de servicios de TI',
      'Organizaciones con servicios críticos',
      'Empresas enfocadas en eficiencia'
    ],
    certificationAvailable: true,
    link: 'https://www.axelos.com/best-practice-solutions/itil',
    color: 'muted'
  }
];

const StandardsComparison = () => {
  const [selectedStandards, setSelectedStandards] = useState<Set<string>>(new Set());
  const [comparisonMode, setComparisonMode] = useState(false);

  const handleStandardSelect = (standardId: string) => {
    const newSelected = new Set(selectedStandards);
    if (newSelected.has(standardId)) {
      newSelected.delete(standardId);
    } else {
      newSelected.add(standardId);
    }
    setSelectedStandards(newSelected);
  };

  const getComplexityColor = (complexity: 'low' | 'medium' | 'high') => {
    switch (complexity) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getCostColor = (cost: 'low' | 'medium' | 'high') => {
    switch (cost) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5';
      case 'accent': return 'border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5';
      case 'secondary': return 'border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5';
      case 'destructive': return 'border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5';
      default: return 'border-muted/30 bg-gradient-to-br from-muted/10 to-muted/5';
    }
  };

  const selectedStandardsList = standards.filter(s => selectedStandards.has(s.id));

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <GitCompare className="w-6 h-6 text-primary" />
            <span>Comparación de Estándares</span>
          </CardTitle>
          <CardDescription>
            Selecciona estándares para comparar sus características, beneficios y casos de uso
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-muted-foreground">
              {selectedStandards.size} de {standards.length} estándares seleccionados
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedStandards(new Set())}
                disabled={selectedStandards.size === 0}
              >
                Limpiar
              </Button>
              <Button
                onClick={() => setComparisonMode(!comparisonMode)}
                disabled={selectedStandards.size < 2}
                className="bg-gradient-primary text-primary-foreground"
              >
                {comparisonMode ? 'Vista Individual' : 'Comparar Seleccionados'}
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {standards.map(standard => (
              <div
                key={standard.id}
                className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                  selectedStandards.has(standard.id)
                    ? getColorClasses(standard.color) + ' shadow-card backdrop-blur-sm'
                    : 'border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/30'
                }`}
                onClick={() => handleStandardSelect(standard.id)}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={selectedStandards.has(standard.id)}
                    onChange={() => {}}
                    className="pointer-events-none"
                  />
                  <standard.icon className="w-6 h-6 text-primary" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-bold text-lg">{standard.name}</h4>
                      {standard.certificationAvailable && (
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Certificable
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{standard.fullName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {comparisonMode && selectedStandardsList.length >= 2 ? (
        <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Comparación Detallada</CardTitle>
            <CardDescription>
              Análisis lado a lado de los estándares seleccionados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left p-3 font-semibold">Característica</th>
                    {selectedStandardsList.map(standard => (
                      <th key={standard.id} className="text-left p-3 font-semibold min-w-[200px]">
                        <div className="flex items-center space-x-2">
                          <standard.icon className="w-5 h-5 text-primary" />
                          <span>{standard.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="p-3 font-medium">Propósito</td>
                    {selectedStandardsList.map(standard => (
                      <td key={standard.id} className="p-3 text-sm text-muted-foreground">
                        {standard.purpose}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-3 font-medium">Alcance</td>
                    {selectedStandardsList.map(standard => (
                      <td key={standard.id} className="p-3 text-sm text-muted-foreground">
                        {standard.scope}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-3 font-medium">Complejidad</td>
                    {selectedStandardsList.map(standard => (
                      <td key={standard.id} className="p-3">
                        <Badge className={getComplexityColor(standard.complexity)}>
                          {standard.complexity === 'low' ? 'Baja' :
                           standard.complexity === 'medium' ? 'Media' : 'Alta'}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-3 font-medium">Tiempo de Implementación</td>
                    {selectedStandardsList.map(standard => (
                      <td key={standard.id} className="p-3 text-sm text-muted-foreground">
                        {standard.implementationTime}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-3 font-medium">Costo</td>
                    {selectedStandardsList.map(standard => (
                      <td key={standard.id} className="p-3">
                        <Badge className={getCostColor(standard.cost)}>
                          {standard.cost === 'low' ? 'Bajo' :
                           standard.cost === 'medium' ? 'Medio' : 'Alto'}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="p-3 font-medium">Certificación</td>
                    {selectedStandardsList.map(standard => (
                      <td key={standard.id} className="p-3">
                        {standard.certificationAvailable ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-6">
              {selectedStandardsList.map(standard => (
                <div key={standard.id} className={`p-4 rounded-lg border-2 ${getColorClasses(standard.color)}`}>
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <standard.icon className="w-5 h-5 mr-2 text-primary" />
                    {standard.name} - Análisis Detallado
                  </h4>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">Beneficios</h5>
                      <ul className="space-y-1">
                        {standard.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">Desafíos</h5>
                      <ul className="space-y-1">
                        {standard.challenges.map((challenge, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">Ideal Para</h5>
                      <ul className="space-y-1">
                        {standard.bestFor.map((use, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" asChild>
                      <a href={standard.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Más Información</span>
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        !comparisonMode && (
          <div className="grid gap-6">
            {standards.map(standard => (
              <Card key={standard.id} className={`shadow-card border-2 ${getColorClasses(standard.color)} backdrop-blur-sm`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <standard.icon className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{standard.name}</CardTitle>
                        <CardDescription>{standard.fullName}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      {standard.certificationAvailable && (
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Certificable
                        </Badge>
                      )}
                      <Badge className={getComplexityColor(standard.complexity)}>
                        Complejidad: {standard.complexity === 'low' ? 'Baja' :
                                     standard.complexity === 'medium' ? 'Media' : 'Alta'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{standard.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <p><strong>Propósito:</strong> {standard.purpose}</p>
                      <p><strong>Alcance:</strong> {standard.scope}</p>
                      <p><strong>Implementación:</strong> {standard.implementationTime}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <strong>Costo:</strong>
                        <Badge className={getCostColor(standard.cost)}>
                          {standard.cost === 'low' ? 'Bajo' :
                           standard.cost === 'medium' ? 'Medio' : 'Alto'}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button asChild className="bg-gradient-primary text-primary-foreground">
                      <a href={standard.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver Documentación Oficial</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default StandardsComparison;