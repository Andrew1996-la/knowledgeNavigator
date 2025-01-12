import {ButtonHTMLAttributes, FC} from "react";
import clsx from "clsx";

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
    className?: string;
}

export const Button:FC<ButtonProps> = (props) => {
    const { children, className, theme, ...otherProps } = props;

    const classes = clsx(
        'cursor-pointer',
        {
            'm-0 p-0 outline-none bg-none border-none': theme === ButtonTheme.CLEAR,
        },
        className
    )

    return (
        <button className={classes} {...otherProps}>
            { children }
        </button>
    )
}