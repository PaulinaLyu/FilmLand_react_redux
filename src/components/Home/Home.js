import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../Home/Search/SearchContainer';
import TrendingContainer from '../Home/Trending/TrendingContainer'

const HomeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Home = () => (
    <>
        <HomeWrapper>
            <SearchContainer />
            <TrendingContainer />
        </HomeWrapper>
    </>
)

export default Home;