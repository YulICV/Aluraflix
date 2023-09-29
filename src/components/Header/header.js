import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #000000;
    height: 94px;
    border-bottom:2px solid var(--color-primary-medium);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 768px) {
        justify-content: center;
        img {
            max-width: 100%;
        }
        .tittle-btn { 
            display: none;
        }
    }
`;