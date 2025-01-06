import {AppLink} from "../../../shared/ui/AppLink/AppLink";
import {FC} from "react";

export const Navbar:FC = () => {

    return (
        <nav className="flex w-full h-header px-5 bg-light-invertedBackground dark:bg-dark-invertedBackground">
            <div className="flex gap-2 self-center ml-auto">
                <AppLink to="/">
                    Home
                </AppLink>
                <AppLink to="/about">
                    About
                </AppLink>
            </div>
        </nav>
    )
}