import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const IMG_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

const Card = ({ item, category }) => (
        <CardStyled>
            <NavLink to={`/${category}/${item.id}`}>
                <CardImg src={item.poster_path 
                        ? IMG_API + item.poster_path 
                        : '../../img/no-poster.jpg'} 
                    alt={item.title} 
                    title={item.title} />
            </NavLink>
            <CardTitle>{item.title || item.name}</CardTitle>
            <CardGenre>{item.release_date}</CardGenre>
            <CardRate>
                <CardIcon className="fas fa-star"></CardIcon>
                <CardValue>{item.vote_average}</CardValue>
            </CardRate>
    </CardStyled>
);

export default Card;