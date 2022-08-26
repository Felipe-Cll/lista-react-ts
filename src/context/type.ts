import { ReactChild } from 'react';
import { DefaultTheme } from 'styled-components';

export interface ThemeContextData {
    toggleTheme(): void
    theme: DefaultTheme
};

export interface MainProps {
    children: ReactChild
};