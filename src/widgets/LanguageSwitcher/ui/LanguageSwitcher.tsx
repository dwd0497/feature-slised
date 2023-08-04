import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, Theme} from "shared/ui/Button";

interface LanguageSwitcherProps {
    className?: string;
}

enum Language {
    EN = 'en',
    RU = 'ru',
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === Language.EN ? Language.RU : Language.EN)
    }

    return (
        <Button theme={Theme.CLEAR} onClick={toggleLanguage} className={classNames(cls.LanguageSwitcher, {}, [className])}>
            {t('Current Language')}
        </Button>
    )
}