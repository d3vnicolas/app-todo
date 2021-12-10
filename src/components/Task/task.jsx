import styled from "styled-components";
import { colors } from "../../colors";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.lightTheme.VeryLightGrayishBlue};

    &:hover > button{
        visibility: visible;
        opacity: 1;
    }
`;
export const Title = styled.h1`
    flex: 8;
    font-size: 18px;
    font-weight: normal;
    user-select: none;
`;
export const Close = styled.button`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    padding: 16px 0;
    font-size: 22px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 700ms ease;
    cursor: pointer;
    
    svg{
        fill: ${colors.lightTheme.DarkGrayishBlue};
        transition: fill 500ms ease;
    }
    &:hover > svg{
        fill: red;
    }
`;