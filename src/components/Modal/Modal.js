import styled from "styled-components";
import { devices } from "../../theme/system/breakpoints/breakpoints";

export const Modal = styled.section`
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    background-color: rgba(21,26,48, .7);
`;

export const ModalContainer = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
`;

export const ModalHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const ModalClose = styled.div`
    cursor: pointer;
    font-size: 18px
`;

export const ModalBody = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;