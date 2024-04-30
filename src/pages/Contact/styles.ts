import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	justify-content: space-around;

	gap: 8rem;

	.description {
		max-width: 450px;
	}
`;

export const FormContainer = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: .5rem;

	textarea {
		resize: none;
		height: 4.5rem;
	}

	textarea,
	input {
		padding: 10px;
		background-color: ${props => props.theme["text-gray"]};
		width: 100%;
		border: none;
		border-radius: 6px;
	}
	&:focus {
		outline: ${props => props.theme["text-transition-green"]} solid 2px;
	}
`;

