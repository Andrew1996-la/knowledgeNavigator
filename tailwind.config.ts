module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,html}'],
    theme: {
        extend: {
            colors: {
                light: {
                    background: '#F8F8F8',
                    text: '#2D2D2D',
                    primary: '#A8DADC',
                    secondary: '#F4A261',
                    accent: '#FFB4A2',
                },
                dark: {
                    background: '#121212',
                    text: '#EDEDED',
                    primary: '#457B9D',
                    secondary: '#E76F51',
                    accent: '#F72585',
                }
            }
        },
    },
    variants: {
        extend: {},
    },

    plugins: [],
}