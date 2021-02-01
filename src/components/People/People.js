import React from 'react';
import styled from 'styled-components';
import PersonCard from '../common/PersonCard';

const PeopleTitle = styled.div`
    margin-bottom: 25px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    font-weight: 500;
`;

const PeopleInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Movies = ({ people }) => (
    <>
        <PeopleTitle>Popular People</PeopleTitle>
        <PeopleInner>
            {people.map(item => <PersonCard 
                item={item} 
                key={item.id} />
            )}
        </PeopleInner>
    </>
)

export default Movies;