import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className, children, ...restProps }) => (
    <Link
        className={classNames(cls.AppLink, {}, [className])}
        {...restProps}
    >
        {children}
    </Link>
);
