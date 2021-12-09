import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <Wrapper className='container'>
            <p>
                Segure e arraste para reorganizar.
            </p>
        </Wrapper>
    );
}
 
export default Footer;