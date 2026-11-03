export type ProductIcon = 'plorpy' | 'pingix' | 'aqidesign'
export type ProductStatus = 'available' | 'building'

export interface Product {
  id: string
  name: string
  description: string
  status: ProductStatus
  url?: string
  icon: ProductIcon
}

export type PlatformIcon = 'x' | 'github' | 'globe'

export interface Platform {
  id: string
  label: string
  handle: string
  url: string
  icon: PlatformIcon
}

export const products: Product[] = [
  {
    id: 'plorpy',
    name: 'Plorpy',
    description: 'An agentic web development and growth platform.',
    status: 'building',
    icon: 'plorpy',
  },
  {
    id: 'pingix',
    name: 'Pingix',
    description: 'Help AI discover and understand your website.',
    status: 'available',
    url: 'https://pingix.aqinode.click',
    icon: 'pingix',
  },
  {
    id: 'aqidesign',
    name: 'AqiDesign',
    description: 'Design infra for agents and humans.',
    status: 'building',
    icon: 'aqidesign',
  },
]

export const platforms: Platform[] = [
  {
    id: 'x',
    label: 'X',
    handle: '@aqinode_hq',
    url: 'https://x.com/aqinode_hq',
    icon: 'x',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@aqinode',
    url: 'https://github.com/aqinode',
    icon: 'github',
  },
  {
    id: 'website',
    label: 'Website',
    handle: 'aqinode.com.ng',
    url: 'https://aqinode.com.ng',
    icon: 'globe',
  },
]
