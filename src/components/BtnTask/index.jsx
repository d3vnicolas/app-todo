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
        border: 1px solid ${colors.lightTheme.DarkGrayishBlue};
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

const BtnTask = (props) => {
    
    return (
        <Button>
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>
                <img src={CheckIcon} />
            </label>
        </Button>
    );
}
 
export default BtnTask;