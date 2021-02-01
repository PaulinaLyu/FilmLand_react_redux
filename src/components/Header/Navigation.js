import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyled = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavigationLink = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;

    :active {
        color: #ff55a5;
        font-weight: 500;
    }
`;

const Navigation = () => (
	<NavigationStyled>
		<NavLink to='/' >
           <NavigationLink>Home</NavigationLink>
        </NavLink>
		<NavLink to='/movies'>
            <NavigationLink>Movies</NavigationLink>
        </NavLink>
        <NavLink to='/tv'>
            <NavigationLink>TV Shows</NavigationLink>
        </NavLink>
        <NavLink to='/people'>
            <NavigationLink>People</NavigationLink>
        </NavLink>				
	</NavigationStyled>
);

export default Navigation;