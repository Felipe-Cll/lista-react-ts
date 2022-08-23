import { createContext, useCallback, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark } from "../styles/Theme/dark";
import { light } from "../styles/Theme/light";
import { MainProps, ThemeContextData } from "./type";


const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children } : MainProps) => {
    const [theme, setTheme] = useState<DefaultTheme>(light)

    const toggleTheme = useCallback(() => {
        if (theme.title === 'light') {
            setTheme(dark)
        } else if (theme.title === 'dark') {
            setTheme(light)
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;