import styled from "styled-components";
import { devices } from "../../theme/system/breakpoints/breakpoints";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
    background-color: ${props => props.theme.colors.secondaryWhite};

    @media ${devices.laptop} {
        flex-direction: column;
        height: auto;
    }
`;

export const ContainerResult = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.secondaryWhite};
`;

export const FormPanel = styled.section`
    width: 70%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flexDirection: row;
    background-color: ${props => props.theme.colors.white};

    @media ${devices.laptop} {
        width: 100%;
        height: auto;
    }
`;

export const ResultsPanel = styled.section`
    width: 30%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flexDirection: row;
    background-color: ${props => props.theme.colors.black["500"]};

    @media ${devices.laptop} {
        width: 100%;
        height: auto;
        display: none;
    }
`;

export const ResultsPreview = styled.section`
    width: 0px;
    height: auto;
    display: none;
    background-color: ${props => props.theme.colors.black["500"]};
    cursor: pointer;

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
        display: flex;
        padding: 25px 0px;
        align-items: center;
        justify-content: center;
    }
`;