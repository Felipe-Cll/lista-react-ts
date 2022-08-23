import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid ${props => props.theme.colors.borderAll};
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .image {
        margin-right: 5px;
        padding: 5px 0 0 0;
        color: ${props => props.theme.colors.iconAdd};
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: ${props => props.theme.colors.text};
        font-size: 1rem;
        flex: 1;

        @media (max-width: 327px) {
            font-size: 0.93rem;
        }
    }
`;