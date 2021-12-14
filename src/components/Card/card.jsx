import styled from 'styled-components';
import { colors } from '../../colors';

export const Wrapper = styled.div`
    border-radius: 4px;
    margin-top: 26px !important;
    background-color: ${props => props.theme.colors.backgroundTasks};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, .2);
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 14px 24px;
`;

export const ItemsLeft = styled.p`
    color: ${props => props.theme.colors.textTaskFooter}
`;

export const Filters = styled.ul`
    list-style: none;
    display: flex;
    li{
        margin: 0 4px;
        a{
            padding: 8px;
            text-decoration: none;
            font-weight: bold;
            color: ${props => props.theme.colors.textTaskFooter};

            &:hover{
                color: ${props => props.theme.colors.textTaskFooterHover}
            }
        }

        .active{
            color: ${props => props.theme.colors.textTaskFooterActive};
        }
    }
`;

export const Clear = styled.button`
    margin: 0;
    padding: 4px;
    text-decoration: none;
    color: ${props => props.theme.colors.textTaskFooter};
    background: none;
    border: none;
    cursor: pointer;
        &:hover{
            color: ${props => props.theme.colors.textTaskFooterHover}
        }
`;