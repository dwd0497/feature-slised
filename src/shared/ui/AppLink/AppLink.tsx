import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({className, children, ...restProps}) => {
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className])}
            {...restProps}
        >
            {children}
        </Link>
    )
}