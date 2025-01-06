import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export const AppLink: FC<LinkProps> = (props) => {
    const {
        to,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className="text-dark-text hover:text-dark-primary dark:text-light-text dark:hover:text-light-primary"
            {...otherProps}
        >
            {children}
        </Link>
    )
}