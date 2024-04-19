import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'Godruoyi',
    domain: 'https://godruoyi.com',
    title: 'Godruoyi',
    description: 'Godruoyi',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Posts', url: '/posts' },
    { name: 'Categories', url: '/categories' },
    { name: 'About', url: '/about' },
    { name: 'Timeline', url: '/timeline' },
]
