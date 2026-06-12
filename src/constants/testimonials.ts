export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  quote: string
  rating: number
  avatarUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Roberto Álvarez',
    company: 'FinTech Corp',
    role: 'VP of Engineering',
    quote:
      'INEXA TECH delivered our platform migration 3 weeks ahead of schedule. Their architecture decisions were spot-on and the codebase is a joy to maintain.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sofía Martínez',
    company: 'DataFlow Analytics',
    role: 'Head of Product',
    quote:
      'The AI integration they built processes 2M events/day with sub-100ms latency. Impressive technical depth and communication throughout.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Fernando Gutiérrez',
    company: 'CloudBase Solutions',
    role: 'CTO',
    quote:
      'Their zero-trust security implementation passed our audit with zero findings. First vendor to achieve that on the first review.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Camila Reyes',
    company: 'NovaPay',
    role: 'Director of Operations',
    quote:
      'From discovery to deployment, the process was transparent and well-structured. Our infrastructure costs dropped 40% after their cloud optimization.',
    rating: 4,
  },
  {
    id: 't5',
    name: 'Martín Suárez',
    company: 'EduTech Global',
    role: 'Founder',
    quote:
      'They understood our vision from day one. The platform they built handles 100K concurrent users seamlessly. True engineering partners.',
    rating: 5,
  },
]
