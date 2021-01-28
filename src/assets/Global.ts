import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	html, body, #root {
		height: 100%
	}

	body {
		-webkit-font-smoothing: antialiased;
		/* min-height: 100%; */
	}

	button {
		cursor: pointer;
	}
`