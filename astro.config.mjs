import { defineConfig, squooshImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import compressor from 'astro-compressor'
import { SITE } from './src/config.ts'

export default defineConfig({
    site: SITE.domain,
    image: {
        service: squooshImageService(),
    },
    integrations: [mdx(), sitemap(), tailwind(), react(), compressor({ gzip: false, brotli: true })],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'material-theme-lighter',
                dark: 'one-dark-pro',
            },
            wrap: false,
        },
    },
    output: 'static',
    // experimental: {
    //     clientPrerender: true,
    //     directRenderScript: true,
    // },
})
