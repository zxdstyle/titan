/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    300: '#595284',
                    400: '#3b3363',
                    500: '#2b2549',
                },
            },
        },
    },
    plugins: [],
};
