import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import Button from '../common/Button';
import Navigation from './Navigation';

const HeaderStyled = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    // position: fixed;
	// top: 0;
	// left: 0;
	// right: 0;
    z-index: 100;
    background-color: #2B2B31;
    -webkit-box-shadow: 0px 8px 10px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 8px 10px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 8px 10px 2px rgba(0, 0, 0, 0.2);
`;

const HeaderInner = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => (
    <HeaderStyled>
		<Container>
			<Row>
                <HeaderInner>
                    <Col xs={3} className='px-0'>
                        <Logo />
                    </Col>
                    <Col xs={3} className='px-0'>
                        <Navigation />
                    </Col>
                    <Col xs={6} className='d-flex justify-content-end px-0'>
                        <Button />
                    </Col>
                    
                </HeaderInner>
			</Row>
		</Container>
    </HeaderStyled>
)

export default Header;