import type { LucideIcon } from 'lucide-react'
import { Code, Cloud, Shield, BrainCircuit } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    id: 'custom-dev',
    title: 'Custom Development',
    description:
      'End-to-end software engineering tailored to your business logic. From MVPs to enterprise-grade platforms.',
    icon: Code,
    features: [
      'Full-stack web & mobile apps',
      'API design & microservices',
      'Performance optimization',
      'CI/CD pipelines',
    ],
  },
  {
    id: 'cloud-infra',
    title: 'Cloud Infrastructure',
    description:
      'Scalable, resilient cloud architectures designed for high availability and cost efficiency.',
    icon: Cloud,
    features: [
      'AWS / Azure / GCP',
      'Container orchestration',
      'Infrastructure as Code',
      'Disaster recovery',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Proactive threat detection, compliance frameworks, and zero-trust architecture implementation.',
    icon: Shield,
    features: [
      'Penetration testing',
      'SOC 2 & ISO 27001',
      'Zero-trust networking',
      'Incident response',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions powered by data — from predictive models to generative AI integrations.',
    icon: BrainCircuit,
    features: [
      'Custom ML pipelines',
      'NLP & computer vision',
      'LLM integration',
      'MLOps & monitoring',
    ],
  },
]
