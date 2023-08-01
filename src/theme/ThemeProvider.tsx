import React, {FC, useMemo, useState} from 'react';
import {IThemeContext, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem('LS_THEME_KEY') as Theme || Theme.DARK;

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeProviderValue = useMemo<IThemeContext>(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;