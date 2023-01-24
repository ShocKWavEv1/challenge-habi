import styled from "styled-components";

export const Input = styled.input`
    width: auto;
    padding: 15px;
    border: ${props => `2px solid ${props.theme.colors.black["500"]}`};
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.colors.black["500"]};
    background-color: white;
    ::placeholder {
        color: ${props => props.theme.colors.black["400"]};
    }
`;