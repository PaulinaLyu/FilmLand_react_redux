import React from 'react';
import { connect } from 'react-redux';
import { getPopular, getAiringToday, getOnTv, getTopRated } from '../../redux/tvReducer';
import TV from './TV';
import Preloader from '../common/Preloader';

class TVContainer extends React.Component {
	componentDidMount() {
		this.props.getPopular();
	}
	render() {
		return (
			this.props.isLoading
				? <Preloader /> 
                : <TV tv={this.props.tv}
                        getPopular={this.props.getPopular}
                        getAiringToday={this.props.getAiringToday}
                        getOnTv={this.props.getOnTv}
                        getTopRated={this.props.getTopRated} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		tv: state.tvPage.tv,
	}
}

export default connect(mapStateToProps, {getPopular, getAiringToday, getOnTv, getTopRated}) (TVContainer);