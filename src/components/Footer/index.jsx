import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        color: ${props => props.theme.colors.textFooter};
        transition: color 400ms ease;
    }
`;

const Footer = () => {
    return (
        <Wrapper className='container'>
            <p>
                Lista de tarefas.
            </p>
        </Wrapper>
    );
}
 
export default Footer;