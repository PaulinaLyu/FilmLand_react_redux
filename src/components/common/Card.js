import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../../film.jpg';

const CardStyled = styled.div`
    width: 20%;
    margin-bottom: 55px;
    margin-right: 20px;
`;

const CardImg = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${myImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const CardTitle = styled.div`
    margin-top: 15px;
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 500;
`;

const CardGenre = styled.div`
    font-size: 14px;
    font-weight: 300;
    color: #ff55a5;
`;

const CardRate = styled.div`
    display: flex;
    text-align: start;
    margin-top: 5px;
`;

const CardIcon = styled.i`
    font-size: 16px;
    text-shadow: 0 0 6px rgba(255,88,96,0.5);
    color: #ff5860;
    line-height: inherit;
`;

const CardValue = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-left:8px;
`;

const Card = ({ item }) => {
    console.log(item);
    return (
    <CardStyled>
        <NavLink to='/'>
            <CardImg />
        </NavLink>
        <CardTitle>{item.title || item.name}</CardTitle>
        <CardGenre>Comedy, Drama</CardGenre>
        <CardRate>
            <CardIcon className="fas fa-star"></CardIcon>
            <CardValue>{item.vote_average}</CardValue>
        </CardRate>
    </CardStyled>
    )
}

export default Card;