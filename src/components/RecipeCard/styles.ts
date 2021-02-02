import styled from 'styled-components';

import {screen} from '../../assets/styles/screen';

export const Recipe = styled.article`
	background-color: white;
	border-radius: 10px;
	width: 690px;
	height: 300px;
	margin: 1em auto;
	overflow: hidden;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	transition: width .2s, height .2s, opacity .2s;
	display: flex;

	${screen.mobile} {
		width: 80%;
		height: auto;
		flex-wrap: wrap;
	}

	${screen.desktop} {	
		&:hover {
			width: 800px;
			height: 400px;

			p {
				height: auto;
				width: auto;
				opacity: 1;
			}
		}
	}


	p {
		transition: 2s height 0s;
		width: 0px;
		height: 0px;
		opacity: 0;
	}


	img {
		width: 30%;
		height: 100%;
		object-fit: cover;

		${screen.mobile} {
			width: 100%;
			height: 200px;
		}
	}

	.container {
		position: relative;
		padding: 2em 4em;
		width: 70%;

		${screen.mobile} {
			width: 100%;
			padding: 1em 1em;
		}
	}

	ul.ingredients {
		margin-top: 2em;
		width: 100%;
		/* column-count: 3; */

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: .5em;
		/* grid-template-rows: max-content; */

	}

	ul.tags {
		width: 100%;
		position: absolute;
		padding: 1em;
		bottom: 0;
		left: 0;

		display: flex;

		li {
			background-color: yellow;
			padding: .4em .7em;
			border-radius: 10px;
		}

		li + li {
			margin-left: 1em;
		}
	}
`;