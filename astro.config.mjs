import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { SITE } from './src/config.js'

export default defineConfig({
    site: SITE.title,
    integrations: [mdx(), sitemap(), tailwind(), react()],
})
