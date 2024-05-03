import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { SITE } from './src/config.ts'

export default defineConfig({
    site: SITE.domain,
    integrations: [mdx(), sitemap(), tailwind(), react()],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'material-theme-lighter',
                dark: 'one-dark-pro',
            },
            wrap: false,
        },
    },
})
