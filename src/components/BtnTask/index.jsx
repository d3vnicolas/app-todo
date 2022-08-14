import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../images/icon-check.svg';

const CheckBtn = styled.div`
    width: 26px;
    height: 26px;
    margin: 0 16px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.borderTasksCircle};
    ${props => {
        if(props.completed){
            return `background: ${props.theme.colors.backgroundCheckButton};`
        }
    }}

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        ${props => {
            return !props.completed?`display: none;`:'';
        }}
        width: 18px;
    }
`;

const BtnTask = ({ completed }) => {

    return (
        <CheckBtn completed={completed}>
            <img alt="Icon theme" src={CheckIcon} />
        </CheckBtn>
    );
}
 
export default BtnTask;