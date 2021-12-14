import React from 'react';
import styled from 'styled-components';

const Banner = styled.header`
    width: 100%;
    height: 100%;
    grid-area: header;
    background: url(${props => props.theme.image.banner}) center center no-repeat;
    background-size: cover;
`;

const Header = () => {
    return (
        <Banner />
    );
}
 
export default Header;