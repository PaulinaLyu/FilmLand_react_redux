import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.div`
    width: 15%;
    padding: 1%;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #DED3D6;
    text-transform: uppercase;
    border-radius: 3px;
    background-image: linear-gradient(90deg, #de4e93 0%, #de5158 100%);
    box-shadow: 0 0 20px 0 rgba(255,88,96,0.5);
    opacity: 0.85;

    :hover {
        color: white;
        background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
        cursor: pointer;
    }
`;

const Button = () => (
    <ButtonStyled>Search</ButtonStyled>
)

export default Button;