import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return <button onClick={changeLanguage}>{t('язык')}</button>;
};
