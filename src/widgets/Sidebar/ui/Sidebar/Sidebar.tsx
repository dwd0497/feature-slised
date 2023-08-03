import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {Button} from "shared/ui/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed((prevState) => !prevState)

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.controls}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}