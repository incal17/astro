# Gblog is an open-source blog built with Astro

![godruoyi](https://images.godruoyi.com/logos/gblog-1.png)

**[View Live Demo](https://godruoyi.com)**

Thanks https://github.com/mearashadowfax/ScrewFast, The majority of the code for this project comes from ScrewFast.

## Features

- **Astro-Powered:** Utilize a modern static-site generation framework.
- **Tailwind CSS:** Enjoy rapid UI development with a utility-first CSS framework.
- **Markdown Content Collections:** Organize and manage your content seamlessly.

### Planned Improvements

- [ ] SEO support
- [ ] restruct code

## Getting Started

This guide will provide you with the necessary steps to set up and familiarize yourself with the Astro project on your local development machine.

### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
pnpm install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Development Commands

With dependencies installed, you can utilize the following npm scripts to manage your project's development lifecycle:

- `pnpm run dev`: Starts a local development server with hot reloading enabled.
- `pnpm run preview`: Serves your build output locally for preview before deployment.
- `pnpm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
pnpm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

## Contributing

If you're interested in helping, you can contribute in several ways:

1. Reporting Issues: Feel free to use the issue tracker to report bugs or request features.
2. Submitting Pull Requests: If you've fixed a bug or added a new feature, submit a pull request with a clear description of your changes.
3. Providing Feedback: Share your thoughts on the project's current features and suggest improvements.

## License

This project is released under the MIT License. Please read the [LICENSE](https://github.com/godruoyi/gblog/blob/main/LICENSE) file for more details.
