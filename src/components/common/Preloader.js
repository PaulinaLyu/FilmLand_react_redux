import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Preloader = () => (
	<div>
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" variant="warning" />
	</div>
);

export default Preloader ;