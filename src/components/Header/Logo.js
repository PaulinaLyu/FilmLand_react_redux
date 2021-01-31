import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const LogoStyled = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
        &:hover {
            color: #fff;
        }
`;

const LogoSpan = styled.span`
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ff55a5;
        &:hover {
            color: #ff55a5;
        }
`;

const Logo = () => (
    <NavLink to='/'>
        <LogoStyled>
            <LogoSpan>film</LogoSpan>land
        </LogoStyled>
    </NavLink>
);

export default Logo;