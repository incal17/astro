import type { NavigationLink, PickUpPost, Site } from './types.ts'

export const SITE: Site = {
    author: 'Godruoyi',
    domain: 'https://godruoyi.com',
    title: '崖上的波兒',
    description: 'Godruoyi',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Blog', url: '/posts' },
    { name: 'Category', url: '/categories' },
    { name: 'Timeline', url: '/timeline' },
    { name: 'About', url: '/about' },
    { name: 'Friends', url: '/friends' },
]

export const PickUpPosts: PickUpPost[] = [
    {
        title: '2023 年终总结',
        slug: '/',
    },
    {
        title: '办酒',
        slug: '/',
    },
    {
        title: '为什么 Laravel 这么优秀',
        slug: '/',
    },
    {
        title: '一条甲鱼',
        slug: '/',
    },
    {
        title: 'NativePHP 的技术原理和实现细节',
        slug: '/',
    },
    {
        title: '老家的变化',
        slug: '/',
    },
    {
        title: '一九三九年春在太原',
        slug: '/',
    },
    {
        title: '刷抖音',
        slug: '/',
    },
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
