export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  rating: 1 | 2 | 3 | 4 | 5
  avatarUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'INEXA TECH transformó completamente nuestra infraestructura cloud. Redujimos costos un 40% y mejoramos la disponibilidad al 99.99%. El equipo es increíble.',
    author: 'María García',
    role: 'CTO',
    company: 'TechStart',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'Implementaron un modelo de NLP que automatizó el 60% de nuestro soporte al cliente. La integración fue seamless y el ROI superó las expectativas.',
    author: 'Carlos Mendez',
    role: 'VP of Operations',
    company: 'LogiData',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'El equipo de ciberseguridad de INEXA nos ayudó a obtener SOC 2 en tiempo récord. Profesionales de primer nivel con un enfoque práctico.',
    author: 'Ana Rodríguez',
    role: 'CISO',
    company: 'FinSecure',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'Nuestro pipeline de datos pasó de ser un cuello de botella a una ventaja competitiva. Ahora tomamos decisiones basadas en datos en tiempo real.',
    author: 'Diego Fernández',
    role: 'Director de Analytics',
    company: 'RetailPro',
    rating: 4,
  },
  {
    id: 't5',
    quote:
      'Migración a AWS completada en 3 meses sin downtime. La planificación y ejecución del equipo fue impecable. Los recomiendo ampliamente.',
    author: 'Laura Sánchez',
    role: 'IT Director',
    company: 'CloudFirst',
    rating: 5,
  },
  {
    id: 't6',
    quote:
      'El dashboard que desarrollaron nos dio visibilidad que no teníamos antes. El ROI fue inmediato y el equipo fue muy receptivo a nuestros feedback.',
    author: 'Roberto Alvarez',
    role: 'COO',
    company: 'DataDriven',
    rating: 4,
  },
]
