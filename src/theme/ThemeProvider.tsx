import { LOCAL_STOTAGE_THEME_KEY, ThemeContext } from "./themeContext"
import { Theme } from "./themeContext";
import { FC, useMemo, useState } from "react";

interface HeaderProps {
    children: any;
  }
const defaultTheme = localStorage.getItem(LOCAL_STOTAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<HeaderProps> = ({children}) => {

    const[theme, setTheme]= useState<Theme>(defaultTheme);
    
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;