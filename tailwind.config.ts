import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#FFAE34',
                dark: {
                    10: '#121214',
                    20: '#181818',
                    30: '#8A8A8A',
                    40: '#FFFFFF',
                },
            },
            fontFamily: {
                sans: ['var(--font-open-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config
