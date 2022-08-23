import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            background: #f1f1f1;
            width: 12px;
        }
        ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: ${props => props.theme.colors.scrollTh};
            border-radius: 10px;
        }
    }

    body {
        transition: all 1s;
        background: ${props => props.theme.colors.primary};
    }

    body, button {
        font: 400 1rem sans-serif;
    }

    a {
        text-decoration: none;
    }
`;