export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photoUrl?: string
  social: {
    linkedin?: string
    github?: string
  }
}

export const team: TeamMember[] = [
  {
    id: 'carlos-m',
    name: 'Carlos Mendoza',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in enterprise technology and digital transformation.',
    social: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
    },
  },
  {
    id: 'laura-r',
    name: 'Laura Rivera',
    role: 'CTO',
    bio: 'Systems architect passionate about scalable distributed platforms and developer experience.',
    social: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
    },
  },
  {
    id: 'diego-s',
    name: 'Diego Soto',
    role: 'Lead Engineer',
    bio: 'Full-stack polyglot who writes clean, maintainable code and loves mentoring junior devs.',
    social: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
    },
  },
  {
    id: 'maria-l',
    name: 'María López',
    role: 'AI & Data Lead',
    bio: 'ML engineer specialized in NLP, computer vision, and production-grade AI pipelines.',
    social: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
    },
  },
  {
    id: 'andres-t',
    name: 'Andrés Torres',
    role: 'DevOps Engineer',
    bio: 'Infrastructure-as-code enthusiast focused on reliability, automation, and cloud cost optimization.',
    social: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
    },
  },
  {
    id: 'valentina-p',
    name: 'Valentina Pérez',
    role: 'UX Designer',
    bio: 'Designs human-centered interfaces grounded in research, accessibility, and visual precision.',
    social: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
]
