/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                header: 'rgb(7, 7, 7, 0.8)',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                sacramento: ['Sacramento', 'cursive'],
            },
        },
    },
    plugins: [],
}
