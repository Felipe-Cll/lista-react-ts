import styled from 'styled-components';

export const Container = styled.div`
    padding: 100px;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 600px;
    padding: 25px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const TitleArea = styled.h1`
    margin: 0;
    padding: 30px 0 30px 0;
    color: ${props => props.theme.colors.textTitle};
    text-align: center;
    font-size: 1.5rem;
    border-bottom: 2px solid #007acc;
`;

export const Icons = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;

    button {
        border: none;
        padding: 0.6rem 1rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        background-color: ${props => props.theme.colors.button};
        color: ${props => props.theme.colors.textButton};
    }
`;

export const Logos = styled.div`

`;