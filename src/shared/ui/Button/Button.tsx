import {ButtonHTMLAttributes, FC} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum Theme {
    CLEAR = 'clear',
    DEFAULT = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: Theme;
}

export const Button: FC<ButtonProps> = ({theme = Theme.DEFAULT, className, children, ...restProps}) => {
    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...restProps}
        >
            {children}
        </button>
    )
}