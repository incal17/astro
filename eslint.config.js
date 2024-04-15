import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },

    rules: {
        'no-console': 'off',
        'curly': ['error', 'all'],
        'node/prefer-global/process': 'off',
    },

    jsonc: false,
    yaml: false,
    react: true,
    typescript: true,
    vue: true,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
        './fixtures',
        // ...globs
    ],
})
