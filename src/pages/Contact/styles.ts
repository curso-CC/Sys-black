import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	justify-content: space-around;
	width: 100vw;
	gap: 6rem;

	section {
		max-width: 50%;
		gap: 2rem;
		display: flex;
		flex-direction: column;
		text-align: justify;

		.description {
			line-height: 1.5rem;
		}
	}
`;

export const FormContainer = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: .4rem;

	label {
		color: ${props => props.theme["text-gray"]};
        font-weight: 700;
	}

	textarea {
		resize: none;
		height: 5rem;
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

