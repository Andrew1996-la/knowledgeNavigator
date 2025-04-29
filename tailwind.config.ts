module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,html}'],
    theme: {
        extend: {
            fontSize: {
                'm': '1rem',      // ~ text-base (обычно 16px)
                'l': '1.125rem',  // ~ text-lg (обычно 18px)
                'xl': '1.25rem',  // ~ text-xl (обычно 20px)
                '2xl': '1.5rem',  // ~ text-2xl (обычно 24px)
            },
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
                    background: '#f4e8d9',
                    invertedBackground: '#2f3e40',
                    text: '#2D2D2D',
                    primary: '#A8DADC',
                    secondary: '#F4A261',
                    accent: '#FFB4A2',
                },
                dark: {
                    background: '#2f3e40',
                    invertedBackground: '#f4e8d9',
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