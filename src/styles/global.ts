import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['text-transition-green']};
    }

    body {
        background-color: ${props => props.theme['dark']};
        color: ${props => props.theme['text-gray']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 16px 'Roboto', sans-serif;
    }


	h1 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1rem;
		color: ${props => props.theme.white};
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: bold;
	}

	p {
		font-weight: 400;
		color: #e0e0e0;
	}
`;

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
// 	font-family: 'Roboto', sans-serif;
// 	background: #171717;

// 	color: white;
// }

// h1 {
// 	font-size: 2rem;
//     font-weight: bold;
//     margin-bottom: 1rem;
// }

// p {
// 	font-weight: 400;
//     color: #e0e0e0;
// }
