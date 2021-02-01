import React from 'react';
import { connect } from 'react-redux';
import { getTrending } from '../../../redux/homeReducer';
import Trending from './Trending';
import Preloader from '../../common/Preloader';

class TrendingContainer extends React.Component {
	componentDidMount() {
		this.props.getTrending();
	}
	render() {
		return (
			this.props.isLoading
				? <Preloader /> 
				: <Trending trending={this.props.trending} genres={this.props.genres} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		trending: state.homePage.trending,
	}
}

export default connect(mapStateToProps, {getTrending}) (TrendingContainer);