import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            primary: string
            secondary: string
            textTitle: string
            text: string
            backgroundText: string

            button: string
            textButton: string
        }
    }
}