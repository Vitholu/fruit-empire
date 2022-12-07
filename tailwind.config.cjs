/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                header: 'rgb(7, 7, 7, 0.85)',
                'gray-50': '#888787',
                'gray-100': '#232121',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                sacramento: ['Sacramento', 'cursive'],
            },
            dropShadow: {
                s0880: '0px 8px 8px 0px rgba(0, 0, 0, 0.5)',
            },
            flex: {
                2: '2 2 0%',
            },
            spacing: {
                '3/20': '15%',
                'v2/3': '66vh',
            },
        },
    },
    plugins: [],
}
