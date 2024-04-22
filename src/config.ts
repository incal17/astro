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
    { name: 'Timeline', url: '/timeline' },
    { name: 'About', url: '/about' },
]

export const FooterLinks = [
    {
        section: 'Blog',
        links: [
            { name: 'Tools & Equipment', url: '/products' },
            { name: 'RSS', url: '/welcome-to-docs/' },
            { name: 'Construction Services', url: '/services' },
        ],
    },
    {
        section: 'Projects',
        links: [
            { name: 'About us', url: '#' },
            { name: 'Blog', url: '/blog' },
            { name: 'Careers', url: '#' },
            { name: 'Customers', url: '#' },
        ],
    },
]
