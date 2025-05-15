import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";

export const DefaultErrorBoundary = () => {
    const {t} = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full'>
            <h1 className='text-2xl mb-3'>{t('что-то пошло не так. Обновите страницу')}</h1>
            <Button theme={ButtonTheme.DEFAULT} onClick={reloadPage}>{t('обновить')}</Button>
        </div>
    )
}