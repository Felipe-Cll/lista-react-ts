import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        name: string;
        colors: {
            primary: string;
            secondary: string;
            appTo: string;
            backgroundColor: string;
            textColor: string;
        }
    }
}