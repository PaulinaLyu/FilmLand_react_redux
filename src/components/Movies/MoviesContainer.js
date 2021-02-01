import React from 'react';
import { connect } from 'react-redux';
import { getPopular, getNowPlaying, getUpcoming, getTopRated } from '../../redux/moviesReducer';
import Movies from './Movies';
import Preloader from '../common/Preloader';

class MoviesContainer extends React.Component {
	componentDidMount() {
		this.props.getPopular();
	}
	render() {
		return (
			this.props.isLoading
				? <Preloader /> 
                : <Movies movies={this.props.movies}
                            getPopular={this.props.getPopular}
                            getNowPlaying={this.props.getNowPlaying}
                            getUpcoming={this.props.getUpcoming}
                            getTopRated={this.props.getTopRated} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		movies: state.moviesPage.movies,
	}
}

export default connect(mapStateToProps, {getPopular, getNowPlaying, getUpcoming, getTopRated}) (MoviesContainer);