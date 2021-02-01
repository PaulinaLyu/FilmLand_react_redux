import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Card from '../common/Card';
import Sidebar from '../common/Sidebar';

const TVTitle = styled.div`
    margin-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    font-weight: 500;
`;

const TVInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: .1rem;
`;

const TV = ({ tv, getPopular, getAiringToday, getOnTv, getTopRated }) => (
    <>
        <Col xs={2} className='pl-0 pr-5'>
            <Sidebar itemNames={["Popular", "Airing Today", "On TV", "Top Rated"]}
                onClick={[getPopular, getAiringToday, getOnTv, getTopRated]} />
        </Col>
        <Col xs={10} className='pr-0'>
            <TVTitle>TV Shows</TVTitle>
            <TVInner>
                {tv.map(item => <Card 
                    item={item}
                    category='tv' 
                    key={item.id} />
                )}
            </TVInner>
        </Col>
    </>
)

export default TV;