import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.backgroundTasks};
    border-bottom: 1px solid ${props => props.theme.colors.borderTasks};
    transition: border-bottom 400ms ease, background-color 400ms ease;

    @media(min-width: 580px){
        &:hover > button{
            visibility: visible;
            opacity: 1;
        }
    }
`;
export const Sense = styled.div`
    flex: 15;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    cursor: pointer;
`;
export const Title = styled.h1`
    flex: 8;
    font-size: 18px;
    font-weight: normal;
    text-decoration: ${props => (props.completed?'line-through':'none')};
    color: ${props => (props.completed?props.theme.colors.textTasksStrike:props.theme.colors.textTasks)};
    padding: 16px 0;
`;
export const Close = styled.button`
    flex: 2;
    min-width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    padding: 20px 0;
    height: auto;
    font-size: 22px;
    
    
    transition: opacity 700ms ease;
    cursor: pointer;
    
    svg{
        fill: ${props => props.theme.colors.iconCross};
        transition: fill 500ms ease;
    }
    @media(min-width: 580px){
        visibility: hidden;
        opacity: 0;

        
        &:hover > svg{
            fill: ${props => props.theme.colors.iconCrossHover};
        }
    }
`;