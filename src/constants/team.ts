export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatarUrl?: string
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Martín Echeverría',
    role: 'CEO & Founder',
    bio: 'Visionario tecnológico con 15+ años liderando transformaciones digitales en empresas Fortune 500.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'cto',
    name: 'Luciana Torres',
    role: 'CTO',
    bio: 'Arquitecta de software especializada en sistemas distribuidos y arquitecturas cloud-native.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 'lead-ai',
    name: 'Sebastián Ruiz',
    role: 'Head of AI',
    bio: 'PhD en Machine Learning, investigador en NLP y autor de múltiples papers en conferences top-tier.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 'lead-cloud',
    role: 'Cloud Architect',
    name: 'Camila Herrera',
    bio: 'AWS Solutions Architect Professional certificada. Ex-Amazon, especialista en migraciones masivas.',
    social: {
      linkedin: '#',
    },
  },
  {
    id: 'head-security',
    name: 'Federico López',
    role: 'Head of Security',
    bio: 'Especialista en ciberseguridad con experiencia en pentesting, response y compliance empresarial.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'head-data',
    name: 'Valentina Morales',
    role: 'Head of Data',
    bio: 'Ingeniera de datos senior con expertise en DataOps, analytics engineering y visualización.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
]
