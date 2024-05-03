import type { NavigationLink, PickUpPost, Site, User } from './types.ts'

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
    { name: 'About', url: '/posts/about-godruoyi' },
    { name: 'Friends', url: '/friends' },
]

export const Friends: User[] = [
    {
        avatar: 'https://tcxx.info/wp-content/themes/StarryW/images/bg/me.jpg',
        social: { twitter: 'Tiancaixinxin', blog: 'https://tcxx.info/', github: 'TCXX' },
        title: '我不是天才，我只是甜菜。',
        name: '甜欣屋',
        description: '技术圈的欧阳娜娜，旅居美国硅谷，生命不息作死不止，探索人生无限可能，女权主义者，希望世界和平',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/21162238?v=4',
        social: { twitter: 'Tiancaixinxin', blog: 'https://www.xqy404.com/', github: 'QuentinHsu' },
        title: 'Web Developer',
        name: 'Quentin Hau',
        description: '人生本就過的不愉快 那就來點羅曼蒂克',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/6493255?v=4',
        social: { twitter: 'draven0xff', blog: 'https://draveness.me/', github: 'draveness' },
        title: '一个工程师',
        name: 'Draven',
        description: 'Go 语言设计与实现作者，偶像',
    },
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
