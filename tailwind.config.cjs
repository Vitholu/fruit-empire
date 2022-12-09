/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                header: 'rgba(0, 0, 0, .9)',
                cardGray: '#18181A',

                'gray-50': '#888787',
                'gray-100': '#232121',

                'black-g50': 'rgba(0, 0, 0, 0.4)',
                'white-g50': 'rgba(255, 255, 255, 0.2)',

                'black-g100': 'rgba(36, 31, 31, 0.4)',
                'white-g100': 'rgba(20, 30, 81, 0)',

                'black-g150': 'rgba(29, 29, 34, 0)',
                'white-g150': 'rgba(255, 255, 255, 0.1)',

                'black-g200': '#171719',
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
                'v3/5': '60vh',
                'v5/5': '100vh',
                '1/4': '25%',
                '1/3': '33%',
                '1/5': '20%',
                '14/25': '56%',
                SWM: '84rem',
                110: '27.5rem',
                128: '32rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            fontSize: {
                hero: '64px',
            },
            lineHeight: {
                75: '4.6875rem',
            },
            maxWidth: {
                xxs: '250px',
            },
        },
    },
    plugins: [],
}
