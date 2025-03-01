import { createContext } from 'react';

export enum EThemeType {
    Dark = 'dark',
    Light = 'light',
}

interface IThemContext {
    theme: EThemeType;
    setTheme: (theme: EThemeType) => void;
}

export const ThemeContext = createContext<IThemContext>({
    theme: EThemeType.Light,
    setTheme: () => {},
});
