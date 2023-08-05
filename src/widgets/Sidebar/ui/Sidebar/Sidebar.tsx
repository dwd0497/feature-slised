import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {Button} from "shared/ui/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {t} = useTranslation()

    const onToggle = () => setCollapsed((prevState) => !prevState)

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>{t('toggle')}</Button>
            <div className={cls.controls}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}