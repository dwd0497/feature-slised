import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Theme } from 'shared/ui/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

enum Language {
    EN = 'en',
    RU = 'ru',
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === Language.EN ? Language.RU : Language.EN);
    };

    return (
        <Button
            theme={Theme.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            {t('Current Language')}
        </Button>
    );
}
