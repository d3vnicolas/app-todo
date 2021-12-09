import styled from "styled-components";
import { colors } from "../../colors";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${colors.lightTheme.VeryLightGray};
    border-radius: 4px;
    overflow: hidden;
    margin-top: 32px;
`;
export const NewTask = styled.button`
    flex: 1;
    border: none;
    background-color: ${colors.lightTheme.VeryLightGray};
    font-size: 22px;
    line-height: 18px;
    transition: background-color 300ms ease;
  

    &:hover{
        background-color: ${colors.lightTheme.VeryLightGrayishBlue}; 
    }
`;
export const Text = styled.input`
    flex: 10;
    border: none;
    outline: none;
    font-size: 22px;
    padding: 12px 12px;
`;