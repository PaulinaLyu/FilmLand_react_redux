import React from 'react';
import styled from 'styled-components';
import Card from '../../common/Card';

const TrendingTitle = styled.div`
    margin-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    font-weight: 500;
`;

const TrendingInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Trending = ({ trending }) => (
    <>
        <TrendingTitle>Trending</TrendingTitle>
        <TrendingInner>
            {trending.map(item => <Card 
                item={item}  
                key={item.id} />
            )}
	    </TrendingInner>
    </>
)

export default Trending;