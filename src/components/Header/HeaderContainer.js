import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainer extends React.Component {
	render() {
		return <Header />
	}
}

export default connect(null, {}) (HeaderContainer);