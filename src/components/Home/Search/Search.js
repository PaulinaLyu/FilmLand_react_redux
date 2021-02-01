import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button'

const SearchForm = styled.form`
    display: flex;
    margin-bottom: 50px;
`;

const SearchInput = styled.input`
    width: 90%;
    margin-right: 10px;
    padding: .5% 1%;
    background-color: #474752;
    border-radius: 3px;

    :focus {
        color: white;
    }
`;

const Search = () => (
    <SearchForm>
        <SearchInput placeholder='Movie, TV Series, Cartoon' />
        <Button />
    </SearchForm>

)

export default Search;