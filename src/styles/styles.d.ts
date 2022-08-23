import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        iconTheme: string
        colors: {
            primary: string
            secondary: string
            textTitle: string
            text: string
            backgroundText: string
            borderAll: string
            iconAdd: string
            scrollTh: string

            button: string
            textButton: string
        }
    }
}