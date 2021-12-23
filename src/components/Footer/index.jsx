import React from 'react';
import styled from 'styled-components';
import { useGlobal } from '../../context/global';

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        color: ${props => props.theme.colors.textFooter};
        transition: color 400ms ease;
        opacity: ${props => props.case?'1':'0'};
        transition: opacity 300ms ease;
    }
`;

const Footer = () => {
    const { msg } = useGlobal();
    console.log(msg)
    return (
        <Wrapper case={msg} className='container'>
            <p>
                Segure e arraste para reorganizar.
            </p>
        </Wrapper>
    );
}
 
export default Footer;