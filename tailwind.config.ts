module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,html}'],
    theme: {
        extend: {
            height: {
                'header': '50px',
                'sidebar': 'calc(100vh - 50px)',
            },
            width: {
                'sidebar': '300px',
                'sidebar-collapsed': '80px',
            },
            colors: {
                light: {
                    background: '#F8F8F8',
                    invertedBackground: '#121212',
                    text: '#2D2D2D',
                    primary: '#A8DADC',
                    secondary: '#F4A261',
                    accent: '#FFB4A2',
                },
                dark: {
                    background: '#121212',
                    invertedBackground: '#F8F8F8',
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