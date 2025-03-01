import {FC} from "react";
import {useTranslation} from "react-i18next";
import {AppLink} from "../../../shared/ui/AppLink/AppLink";

export const Navbar:FC = () => {
    const {t} = useTranslation();

    return (
        <nav className="flex w-full h-header px-5 bg-light-invertedBackground dark:bg-dark-invertedBackground">
            <div className="flex gap-2 self-center ml-auto">
                <AppLink to="/">
                    {t('навигация.главная')}
                </AppLink>
                <AppLink to="/about">
                    {t('навигация.о нас')}
                </AppLink>
            </div>
        </nav>
    )
}