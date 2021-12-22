import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.colors.backgroundInput};
    transition: background-color 400ms ease;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 32px;
`;
export const NewTask = styled.button`
    flex: 1;
    border: none;
    background-color: ${props => props.theme.colors.backgroundInput};
    transition: background-color 400ms ease;
    font-size: 22px;
    line-height: 18px;
    padding: 0 8px;
    transition: all 300ms ease;
    cursor: pointer;
    visibility: ${props => props.inputTitle?'visible': 'hidden'};
    opacity: ${props => props.inputTitle?'1': '0'};

    &:hover{
        background-color: ${props => props.theme.colors.backgroundButtonHover}; 
    }
`;
export const Text = styled.input`
    flex: 10;
    border: none;
    outline: none;
    font-size: 22px;
    padding: 12px 0px 12px 60px;
    background-color: ${props => props.theme.colors.backgroundInput};
    transition: background-color 400ms ease;

    &::placeholder{
        color: ${props => props.theme.colors.placeholderInput}
        transition: color 400ms ease;
    }
`;