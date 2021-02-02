import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	html, body {
		height: 100%;
	}
  
	body {
		-webkit-font-smoothing: antialiased;
		min-height: 100%;
		background-color: #FBD7A2;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	button {
		cursor: pointer;
	}

	ul {
		list-style: none;
	}
`