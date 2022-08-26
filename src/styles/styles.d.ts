import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string
        colors: {
            primary: string
            secondary: string
            textTitle: string
            text: string
            backgroundText: string
            borderAll: string
            iconAdd: string
            scrollTh: string
        }
    }
}