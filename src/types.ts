export interface Site {
    title: string
    author: string
    domain: string
    description: string
}

export interface NavigationLink {
    name: string
    url: string
}

export interface PickUpPost {
    title: string
    slug: string
}

export interface Social {
    twitter?: string
    blog?: string
    github?: string
}

export interface User {
    avatar: string
    name: string
    title: string
    description: string
    social: Social
}
