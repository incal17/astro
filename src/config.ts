import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'Godruoyi',
    domain: 'https://godruoyi.com',
    title: 'Godruoyi',
    description: 'Godruoyi',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Categories', url: '/categories' },
    { name: 'Timeline', url: '/timeline' },
]
