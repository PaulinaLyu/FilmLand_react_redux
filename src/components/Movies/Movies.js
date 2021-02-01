import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Card from '../common/Card';
import Sidebar from '../common/Sidebar';

const MoviesTitle = styled.div`
    margin-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    font-weight: 500;
`;

const MoviesInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Movies = ({ movies, getPopular, getNowPlaying, getUpcoming, getTopRated }) => (
    <>
        <Col xs={2} className='mt-5'>
            <Sidebar getPopular={getPopular} 
                getNowPlaying={getNowPlaying} 
                getUpcoming={getUpcoming} 
                getTopRated={getTopRated} />
        </Col>
        <Col xs={10} className='mt-5'>
            <MoviesTitle>Movies</MoviesTitle>
            <MoviesInner>
                {movies.map(item => <Card 
                    item={item} 
                    key={item.id} />
                )}
            </MoviesInner>
        </Col>
    </>
)

export default Movies;