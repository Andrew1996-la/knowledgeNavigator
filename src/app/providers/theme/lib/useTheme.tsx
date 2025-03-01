import { useContext, useEffect } from 'react';
import { EThemeType, ThemeContext } from './ThemeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme === EThemeType.Dark) {
            document.body.classList.add(EThemeType.Dark);
        } else {
            document.body.classList.remove(EThemeType.Dark);
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme =
            theme === EThemeType.Light ? EThemeType.Dark : EThemeType.Light;
        setTheme(newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
