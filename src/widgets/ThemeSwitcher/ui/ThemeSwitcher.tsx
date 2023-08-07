import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, AppTheme } from 'app/providers/ThemeProvider';
import { Button, Theme } from 'shared/ui/Button';
import ThemeDarkSVG from 'shared/assets/icons/theme-dark.svg';
import ThemeLightSVG from 'shared/assets/icons/theme-light.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={Theme.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === AppTheme.DARK ? <ThemeDarkSVG /> : <ThemeLightSVG />}
        </Button>
    );
}
