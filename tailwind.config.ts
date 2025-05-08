import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'gray-08': '#141414',
            'gray-10': '#1A1A1A',
            'gray-15': '#262626',
            'gray-60': '#999999',
            'gray-30': '#4D4D4D',
            'gray-40': '#666666',
            'purple-60': '#703BF7',
            'clr-white': '#fff',
        },
        extend: {
            backgroundImage: {
                'hero-abstract-lg': "url('/icons/abstract-design-lg.svg')",
            },
            boxShadow: {
                light: '0 0 3px 3px #1a1a1a',
                deep: '0 0 3px 7px #1a1a1a',
            },
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
}
export default config
