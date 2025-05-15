import {ButtonHTMLAttributes, FC} from "react";
import { tv } from 'tailwind-variants'

export enum ButtonTheme {
    CLEAR = 'clear',
    DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
    className?: string;
}

const button = tv({
    base: 'm-0 px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 disabled:cursor-not-allowed',
    variants: {
        theme: {
            default: 'bg-light-background text-light-text dark:bg-dark-background shadow-md',
            clear: 'bg-transparent  hover:underline',
        },
    },
    defaultVariants: {
        theme: 'default',
    },
})

export const Button:FC<ButtonProps> = (props) => {
    const { children, className, theme, ...otherProps } = props;

    return (
        <button className={button({theme})} {...otherProps}>
            { children }
        </button>
    )
}