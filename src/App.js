import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalStyle } from './components/style/GlobalStyle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MoviesContainer from './components/Movies/MoviesContainer';
import TVContainer from './components/TV/TVContainer';
import PeopleContainer from './components/People/PeopleContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileTemplateContainer from './components/ProfileTemplate/ProfileTemplateContainer';
import Home from './components/Home/Home';

const App = () => {
  	return (
    	<>
			<GlobalStyle />
			<HeaderContainer />
			<Container>
				<Row>
					<Route exact path='/' 
						render={ () => <Home /> } />

					<Route exact path='/movies' 
						render={ () => <MoviesContainer /> } />
					
					<Route exact path='/tv' 
						render={ () => <TVContainer /> } />

					<Route exact path='/people' 
						render={ () => <PeopleContainer /> } />
					
					<Route exact path='/movie/:id' 
						render={ () => <ProfileTemplateContainer /> } />

					<Route exact path='/tv/:id' 
						render={ () => <ProfileTemplateContainer /> } />
					{/* <Route exact path='/login' 
						render={ () => <Login /> } /> */}
				</Row>
			</Container>

    	</>
  	)
}
export default App;
