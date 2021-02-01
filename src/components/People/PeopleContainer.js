import React from 'react';
import { connect } from 'react-redux';
import { getPopular } from '../../redux/peopleReducer';
import People from './People';
import Preloader from '../common/Preloader';

class PeopleContainer extends React.Component {
	componentDidMount() {
		this.props.getPopular();
	}
	render() {
		return (
			this.props.isLoading
				? <Preloader /> 
                : <People people={this.props.people} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		people: state.peoplePage.people,
	}
}

export default connect(mapStateToProps, { getPopular }) (PeopleContainer);