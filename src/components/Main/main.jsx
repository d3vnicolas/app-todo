import styled from 'styled-components';
import { colors } from '../../colors';

export const Master = styled.main`
    margin: -220px auto 0 auto !important;
`;

export const Head = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    h1{
        font-size: 40px;
        letter-spacing: 16px;
        color: ${colors.lightTheme.VeryLightGray};
    }
`;


