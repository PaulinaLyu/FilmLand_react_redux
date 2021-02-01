import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const IMG_API = 'https://image.tmdb.org/t/p/w235_and_h235_face/'

const CardStyled = styled.div`
    width: 20%;
    margin-bottom: 55px;
`;

const CardImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 3px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const CardTitle = styled.div`
    margin-top: 15px;
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 500;
`;

const PersonCard = ({ item }) => (
        <CardStyled>
            <NavLink to='/'>
                <CardImg src={item.profile_path 
                        ? IMG_API + item.profile_path 
                        : '../../img/no-poster.jpg'} 
                    alt={item.title} 
                    title={item.title} />
            </NavLink>
            <CardTitle>{item.name}</CardTitle>
    </CardStyled>
);

export default PersonCard;