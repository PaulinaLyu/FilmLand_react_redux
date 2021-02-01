import React from 'react';
import styled from 'styled-components';

const SidebarStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #fff;
    background-color: #474752;
    border-radius: 3px;
`;

const SidebarItem = styled.div`
    :hover {
		text-decoration: underline;
		color: #ff55a5;
		cursor: pointer;
    }
`;

const Sidebar = ({ getPopular, getNowPlaying, getUpcoming, getTopRated }) => (
    <SidebarStyled>
        <SidebarItem onClick={ () => {getPopular()}}>Popular</SidebarItem>
        <SidebarItem onClick={ () => {getNowPlaying()}}>Now Playing</SidebarItem>
        <SidebarItem onClick={ () => {getUpcoming()}}>Upcoming</SidebarItem>
        <SidebarItem onClick={ () => {getTopRated()}}>Top Rated</SidebarItem>
    </SidebarStyled>
)

export default Sidebar;