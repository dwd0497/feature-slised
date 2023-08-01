import React, {useContext} from 'react';
import {Theme, ThemeContext} from "./ThemeContext";

const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme: () => void = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK: Theme.LIGHT;
        localStorage.setItem('LS_THEME_KEY', newTheme)
        setTheme(newTheme)
    }

    return {
        theme,
        setTheme,
        toggleTheme
    }
};

export default useTheme;