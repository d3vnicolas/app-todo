import styled from 'styled-components';

export const Wrapper = styled.div`
    
`;
export const Main = styled.div`
    border-radius: 4px;
    margin-top: 26px !important;
    background-color: ${props => props.theme.colors.backgroundTasks};
    transition: background-color 400ms ease;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, .2);
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 14px 24px;

    @media (max-width: 580px){
        padding: 18px 24px;

        ul{
            display: none;
        }
        
    }
`;

export const ItemsLeft = styled.p`
    color: ${props => props.theme.colors.textTaskFooter}
    transition: color 400ms ease;
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
            transition: color 400ms ease;

            &:hover:not(.active){
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
    transition: color 400ms ease;
    background: none;
    border: none;
    cursor: pointer;
        &:hover{
            color: ${props => props.theme.colors.textTaskFooterHover}
        }
`;

export const FiltersMobile = styled.ul`
    display: none;
    @media (max-width: 580px){

        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: ${props => props.theme.colors.backgroundTasks};
        transition: background-color 400ms ease;
        padding: 12px 0;
        margin-top: 26px;
        border-radius: 4px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, .2);

        li{
            margin: 0 8px;
            padding: 4px 0;
            a{
                padding: 8px;
                text-decoration: none;
                font-weight: bold;
                color: ${props => props.theme.colors.textTaskFooter};
                transition: color 400ms ease;

                &:hover:not(.active){
                    color: ${props => props.theme.colors.textTaskFooterHover}
                }
            }

            .active{
                color: ${props => props.theme.colors.textTaskFooterActive};
            }
        }
    }
`;