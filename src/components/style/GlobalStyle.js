import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		font-family: 'Open Sans', sans-serif;
		font-size: 15px;
		font-weight: 300;
		color: #fff;
		background-color: #2B2B31;
	}
	  
	img {
		max-width: 100%;
		height: auto;
	}
	
	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			text-decoration: none;
			color: #ff55a5;
			cursor: pointer;
		}
	}

	h1,h2,h3,h4 {
		padding: 0;
		margin: 0;
		font-family: 'Ubuntu', sans-serif;
		font-weight: 500;
	}

	p {
		padding: 0;
		margin: 0;
		line-height: 1.5;
	}

	button, input {
        cursor: pointer;
		font: inherit;
		border: 0;

		:focus {
			outline: none;
		}
	}
	
	.active {
		color: #ff55a5;
	}
`;