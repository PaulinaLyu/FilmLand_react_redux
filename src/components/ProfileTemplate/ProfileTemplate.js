import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../common/Card'

const IMG_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'

const ProfileTitle = styled.h2`
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 10px;
`;

const ProfileImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 3px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 3px;
`;

const ProfileAddition = styled.div`
    margin-bottom: 30px;
`;

const ProfileMain = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 300;
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const ProfileRate = styled.div`
    display: flex;
    text-align: start;
`;

const ProfileIcon = styled.i`
    font-size: 16px;
    text-shadow: 0 0 6px rgba(255,88,96,0.5);
    color: #ff5860;
    line-height: inherit;
`;

const ProfileValue = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-left:8px;
`;

const ProfileCountry = styled.span`
    font-weight: 300;
    color: #ff55a5;
`;

const ProfileLink = styled.span`
    display: flex;
    text-align: start;
    margin-top: 30px;
`;

const LinkIcon = styled.i`
    font-size: 16px;
    text-shadow: 0 0 6px rgba(255,88,96,0.5);
    color: #ff5860;
    line-height: inherit;
    margin-right: 5px;
`;

const ProfileSimilars = styled.div`
    margin-top: 50px;
`;

const SimilarsInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .1;
`;

const SimilarsTitle = styled.h3`
    margin-bottom: 20px;
`;

const ProfileTemplate = ({ profile, similars }) =>(
	    <>
            <Col xs={3}>
                <ProfileImg src={profile.poster_path 
                        ? IMG_API + profile.poster_path 
                        : '../../img/no-poster.jpg'} 
                    alt={profile.title} 
                    title={profile.title} />
            </Col>
            <Col xs={9}>
                <ProfileMain>
                    <ProfileTitle>{profile.title || profile.name}</ProfileTitle>
                    <ProfileAddition>
                        <ProfileRate>
                            <ProfileIcon className="fas fa-star"></ProfileIcon>
                            <ProfileValue>{profile.vote_average}</ProfileValue>
                        </ProfileRate>
                    </ProfileAddition>
                    <ProfileDetails>
                        <div>Genre:</div>
                        <div>Release year: {profile.release_date}</div>
                        <div>Running time: {profile.runtime} min</div>
                        <div>Country: <ProfileCountry>{profile.runtime}</ProfileCountry>`</div>
                    </ProfileDetails>
                    <div>{profile.overview}</div>
                    <ProfileLink>                            
                        <LinkIcon className="fas fa-angle-double-right"></LinkIcon>
                        {/* <NavLink to={profile.homepage}>Cсылка</NavLink> */}
                    </ProfileLink>
                </ProfileMain>
            </Col>
            <ProfileSimilars>
                <SimilarsTitle>
                    You may also like...
                </SimilarsTitle>
                <SimilarsInner>
                    {similars.map(item => <Card 
                        item={item}  
                        key={item.id} />
                    )}
                </SimilarsInner>
            </ProfileSimilars>
        </>
);

export default ProfileTemplate;