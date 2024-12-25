import {EThemeType, ThemeContext} from "../lib/ThemeContext";
import {FC, ReactNode, useState} from "react";

interface IThemeProvider {
    children: ReactNode;
}

const defaultTheme: EThemeType = localStorage.getItem('theme') as EThemeType || EThemeType.Light

export const ThemeProvider: FC<IThemeProvider> = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}