export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  {
    id: 'projects',
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    id: 'clients',
    value: 80,
    suffix: '+',
    label: 'Enterprise Clients',
  },
  {
    id: 'uptime',
    value: 99.9,
    suffix: '%',
    label: 'Platform Uptime',
  },
  {
    id: 'engineers',
    value: 40,
    suffix: '+',
    label: 'Engineers',
  },
]
