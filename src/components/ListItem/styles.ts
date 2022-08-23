import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps> //solução problema
    `
    display: flex;
    background-color: ${props => props.theme.colors.backgroundText};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    word-break: break-all;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: ${props => props.theme.colors.text};
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    }
`;