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

export interface Category {
    title: string
    slug: string
    description: string
    icon?: string
}
