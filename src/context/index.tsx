import { DefaultTheme, ThemeProvider } from "styled-components";
import { createContext, useCallback, useContext, useState } from "react";
import { MainProps, ThemeContextData } from "./type";
import { dark } from "../styles/Theme/dark";
import { light } from "../styles/Theme/light";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children } : MainProps) => {
    const [theme, setTheme] = useState<DefaultTheme>(light)

    const toggleTheme = useCallback(() => {
        if (theme.name === 'light') {
            setTheme(dark)
        } else if (theme.name === 'dark') {
            setTheme(light)
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;