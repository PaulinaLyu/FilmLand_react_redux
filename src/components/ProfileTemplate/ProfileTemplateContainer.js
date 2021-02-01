import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile, getSimilars } from '../../redux/profileReducer';
import ProfileTemplate from './ProfileTemplate';

class ProfileTemplateContainer extends React.Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		let category = this.props.match.path.includes('movie')
			? 'movie' 
			: 'tv'
		this.props.getProfile(id, category);
		this.props.getSimilars(id, category);
	}

	render() {
		return <ProfileTemplate profile={this.props.profile}
								similars={this.props.similars} />
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		similars: state.profilePage.similars,
	}
}

export default compose (
	connect(mapStateToProps, { getProfile, getSimilars }),
	withRouter
)(ProfileTemplateContainer);