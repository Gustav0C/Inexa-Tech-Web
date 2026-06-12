import { type LucideIcon } from 'lucide-react'
import { BrainCircuit, Cloud, ShieldCheck, BarChart3 } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    id: 'ai-ml',
    title: 'Inteligencia Artificial & ML',
    description:
      'Implementamos modelos de IA y machine learning personalizados que optimizan procesos, predicen tendencias y automatizan decisiones críticas de negocio.',
    icon: BrainCircuit,
    features: [
      'Modelos predictivos a medida',
      'Procesamiento de lenguaje natural',
      'Visión por computadora',
      'Automatización inteligente',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infraestructura',
    description:
      'Diseñamos y gestionamos infraestructuras cloud escalables, seguras y optimizadas para reducir costos operativos y mejorar la disponibilidad.',
    icon: Cloud,
    features: [
      'Migración a cloud (AWS, Azure, GCP)',
      'Arquitectura de microservicios',
      'Infraestructura como código',
      'Optimización de costos cloud',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Ciberseguridad',
    description:
      'Protegemos tu empresa con soluciones de seguridad avanzadas que detectan amenazas, previenen ataques y garantizan el cumplimiento normativo.',
    icon: ShieldCheck,
    features: [
      'Auditorías de seguridad',
      'Gestión de identidades y accesos',
      'Monitoreo de amenazas 24/7',
      'Cumplimiento SOC 2 e ISO 27001',
    ],
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    description:
      'Convertimos datos en información accionable con dashboards interactivos, pipelines de datos robustos y reportes que impulsan decisiones estratégicas.',
    icon: BarChart3,
    features: [
      'Dashboards en tiempo real',
      'Data warehousing moderno',
      'ETL y pipelines automatizados',
      'Business Intelligence avanzado',
    ],
  },
]
