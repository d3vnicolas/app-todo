import React from 'react';
import styled from 'styled-components';
import Background from '../../images/bg-desktop-light.jpg'

const Banner = styled.header`
    width: 100%;
    height: 100%;
    grid-area: header;
    background: url(${Background}) center center no-repeat;
    background-size: cover;
`;

const Header = () => {
    return (
        <Banner />
    );
}
 
export default Header;