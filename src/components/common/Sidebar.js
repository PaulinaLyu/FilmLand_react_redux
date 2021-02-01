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

const Sidebar = ({ itemNames, onClick }) => (
    <SidebarStyled>
        <SidebarItem onClick={ () => {onClick[0]()}}>{itemNames[0]}</SidebarItem>
        <SidebarItem onClick={ () => {onClick[1]()}}>{itemNames[1]}</SidebarItem>
        <SidebarItem onClick={ () => {onClick[2]()}}>{itemNames[2]}</SidebarItem>
        <SidebarItem onClick={ () => {onClick[3]()}}>{itemNames[3]}</SidebarItem>
    </SidebarStyled>
)

export default Sidebar;