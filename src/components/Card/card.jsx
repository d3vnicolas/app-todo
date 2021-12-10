import styled from 'styled-components';
import { colors } from '../../colors';

export const Wrapper = styled.div`
    border-radius: 4px;
    margin-top: 26px !important;
    background-color: ${colors.lightTheme.VeryLightGray};
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 8px 24px;
`;

export const ItemsLeft = styled.p`

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
            color: ${colors.lightTheme.DarkGrayishBlue};

            &:hover{
                color: ${colors.darkTheme.VeryDarkBlue}
            }
        }
    }
`;

export const Clear = styled.button`
    margin: 0;
    padding: 4px;
    text-decoration: none;
    color: ${colors.lightTheme.DarkGrayishBlue};
    background: none;
    border: none;
    cursor: pointer;
        &:hover{
            color: ${colors.darkTheme.VeryDarkBlue}
        }
`;