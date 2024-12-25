import {createContext} from "react";

export enum EThemeType {
    Dark = 'dark',
    Light = 'light',
}

interface IThemContext {
    theme?: EThemeType;
    setTheme?: (theme: EThemeType) => void;
}

const LOCALSTORAGE_KEY = 'theme';

export const ThemeContext = createContext<IThemContext>({});