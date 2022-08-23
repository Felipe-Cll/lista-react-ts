import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid ${props => props.theme.colors.borderAll};
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: ${props => props.theme.colors.text};
        font-size: 18px;
        flex: 1;
    }
`;