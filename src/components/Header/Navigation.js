import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
`;

const Navigation = () => (
	<NavigationStyled>
		<NavLink to='/'>Home</NavLink>
		<NavLink to='/movies'>Movies</NavLink>
        <NavLink to='/tv'>TV Shows</NavLink>
        <NavLink to='/people'>People</NavLink>				
	</NavigationStyled>
);

export default Navigation;