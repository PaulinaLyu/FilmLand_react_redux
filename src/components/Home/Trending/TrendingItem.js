import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../../../film.jpg';

const ItemStyled = styled.div`
    width: 20%;
    margin-bottom: 55px;
    margin-right: 20px;
`;

const ItemImg = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${myImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const ItemTitle = styled.div`
    margin-top: 15px;
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 500;
`;

const ItemGenre = styled.div`
    font-size: 14px;
    font-weight: 300;
    color: #ff55a5;
`;

const ItemRate = styled.div`
    display: flex;
    text-align: start;
    margin-top: 5px;
`;

const ItemIcon = styled.i`
    font-size: 16px;
    text-shadow: 0 0 6px rgba(255,88,96,0.5);
    color: #ff5860;
    line-height: inherit;
`;

const ItemValue = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-left:8px;
`;

const TrendingItem = ({ item }) => {
    console.log(item);
    return (
    <ItemStyled>
        <NavLink to='/'>
            <ItemImg />
        </NavLink>
        <ItemTitle>{item.title || item.name}</ItemTitle>
        <ItemGenre>Comedy, Drama</ItemGenre>
        <ItemRate>
            <ItemIcon className="fas fa-star"></ItemIcon>
            <ItemValue>{item.vote_average}</ItemValue>
        </ItemRate>
    </ItemStyled>
    )
}

export default TrendingItem;