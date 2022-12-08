/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                header: 'rgba(38, 36, 36, 1)',
                'gray-50': '#888787',
                'gray-100': '#232121',

                'black-g50': 'rgba(0, 0, 0, 0.4)',
                'white-g50': 'rgba(255, 255, 255, 0.2)',

                'black-g100': 'rgba(36, 31, 31, 0.4)',
                'white-g100': 'rgba(20, 30, 81, 0)',
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
                '1/4': '25%',
                '1/3': '33%',
                '1/5': '20%',
                128: '32rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
