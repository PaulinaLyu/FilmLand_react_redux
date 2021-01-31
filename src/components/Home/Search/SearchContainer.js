import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';

class SearchContainer extends React.Component {
	render() {
		return <Search />
	}
}

export default connect(null, {}) (SearchContainer);