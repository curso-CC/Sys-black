import styled from "styled-components";


export const ButtonContainer = styled.button`
	width: 50%;
	padding: 10px;
	background-color: #3ed5dd;
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;

	transition: background-color 200ms linear;

	a {
		text-decoration: none;
        color: white;
	}

	&:hover {
		background-color: #1ea2a9;
	}
`;
