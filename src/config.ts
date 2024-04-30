import type { Category, NavigationLink, PickUpPost, Site } from './types.ts'

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

export const Categories: Category[] = [
    { title: 'PHP', slug: 'php', description: 'PHP is a popular general-purpose scripting language that is especially suited to web development.' },
    { title: '生活 💃', slug: 'life', description: '柴米油盐，就是生活，养只喵喵，做个好菜，打个游戏，再在沙发敦伟大友谊' },
    { title: 'Laravel 🐛', slug: 'laravel', description: '最优雅的 PHP 框架' },
    { title: '我的工具箱 🪜', slug: ' tool', description: '整个 coding 生涯都要一直不停的折腾，停止折腾后，就老了。' },
    { title: 'MySQL', slug: 'mysql', description: 'MySQL is an open-source relational database management system (RDBMS).' },
    { title: '二愣的小书屋 🔖', slug: 'books', description: '「生活总是这样，不能让人处处都满意。但我们还要热情地活下去」' },
    { title: 'Nginx 🐕‍🦺', slug: 'nginx', description: '高性能的 HTTP 和反向代理 web 服务器，奈何反向代理的服务太慢。' },
    { title: 'kubernetes 💩', slug: 'kubernetes', description: 'Kubernetes 是一个开源系统，用于自动化部署、扩展和管理容器化应用程序。' },
    { title: 'Go', slug: 'golang', description: 'Go 语言的词法分析与语法分析 & 折腾下 Go 编译原理' },
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
