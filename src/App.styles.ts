import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.secondary};
    min-height: 100vh;
    border-darius: 40px;
    padding: 100px;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 600px;
    padding: 25px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.appTo};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 30px 0 30px 0;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    border-bottom: 2px solid #007acc;
`;