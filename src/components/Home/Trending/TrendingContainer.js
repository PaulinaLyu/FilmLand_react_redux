import React from 'react';
import { connect } from 'react-redux';
import { getTrending } from '../../../redux/homeReducer';
import Trending from './Trending';

class TrendingContainer extends React.Component {
	componentDidMount() {
		this.props.getTrending();
	}
	render() {
		return <Trending trending={this.props.trending} />
	}
}

let mapStateToProps = (state) => {
	return {
		trending: state.homePage.trending,
	}
}

export default connect(mapStateToProps, {getTrending}) (TrendingContainer);