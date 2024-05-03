import styled from "styled-components";


export const ButtonContainer = styled.button`
	width: 50%;
	padding: 20px 20px;
	background-color: ${props => props.theme["text-transition-green"]};
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	font-weight: bold;

	transition: background-color 200ms linear;

	a {
		text-decoration: none;
        color: ${props => props.theme.white};
	}

	&:hover {
		background-color: #1ea2a9;
	}
`;
