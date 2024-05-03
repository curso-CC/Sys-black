import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	justify-content: space-around;

    margin-top: 3rem;
	margin-left: -4rem;


	section {
		max-width: 50%;
		gap: 2rem;
		display: flex;
		flex-direction: column;
		text-align: justify;

		.description {
			line-height: 1.5rem;

			h1 {
				font-size: 2.5rem;
				margin-bottom: 3rem;
			}

			p {
				font-size: 1.25rem;
                line-height: 2rem;
			}
		}

		h2 {
			font-size: 2rem;
			font-weight: bold;
		}

		#email {
			font-size: 1.25rem;
			color: ${props => props.theme["text-gray"]};
		}

		#social-media {
			display: flex;
            gap: 1.5rem;

			a {
				color: ${props => props.theme["text-green"]};
				transition: color .4s;
				&:hover {
                    color: ${props => props.theme["text-transition-green"]};
                }
			}
		}

	}
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: .75rem;

	width: 30%;

	label {
		color: ${props => props.theme["text-gray"]};
        font-weight: 700;
		font-size: 1.25rem;
	}

	input {
		height: 2.5rem;
	}
	textarea {
		resize: none;
		height: 10rem;
	}

	textarea,
	input {
		padding: 10px;
		background-color: ${props => props.theme["text-gray"]};
		width: 560px;
		border: none;
		border-radius: 6px;

		font-weight: bold;
		color: ${props => props.theme["dark"]};
	}

	&:focus {
		outline: ${props => props.theme["text-transition-green"]} solid 3px;
	}
`;

