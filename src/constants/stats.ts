export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  {
    id: 'projects',
    value: 120,
    suffix: '+',
    label: 'Proyectos entregados',
  },
  {
    id: 'clients',
    value: 85,
    suffix: '+',
    label: 'Clientes satisfechos',
  },
  {
    id: 'uptime',
    value: 99.9,
    suffix: '%',
    label: 'Uptime garantizado',
  },
  {
    id: 'experience',
    value: 10,
    suffix: '+',
    label: 'Años de experiencia',
  },
]
