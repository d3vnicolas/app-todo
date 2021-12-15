import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import CheckIcon from '../../images/icon-check.svg';

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 12px;

    input{
        position: absolute;
        visibility: hidden;
    }

    input:checked + label{
        background: ${colors.neutralColors.CheckBackground};
    }
    input:checked + label img{
        display: block;
    }

    label{
        user-select: none;
        appearance: none;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.borderTasksCircle};
        transition: border 400ms ease;
        margin: 0 8px;
        position: relative;
        cursor: pointer;

        img{
            position: absolute;
            top: 4px;
            left: 2px;
            width: 16px;
            display: none;
        }
    }
    
`;

const BtnTask = ({completed, id, handleTaskComplete}) => {

    const handleCheckButton = () => {
        return completed?'checked':'';
    }

    return (
        <Button>
            <input onClick={() => handleTaskComplete(id)} defaultChecked={handleCheckButton()} type="checkbox" id={id} />
            <label htmlFor={id}>
                <img src={CheckIcon} />
            </label>
        </Button>
    );
}
 
export default BtnTask;