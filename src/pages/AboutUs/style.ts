import styled from "styled-components";

export const MainContainer = styled.main`
	margin: 3rem 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	gap: 5rem;

	section {
		max-width: 550px;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h5{
			color: ${props => props.theme["text-green"]};
		}
	}

	.images {
		position: relative;
		width: 100%;

		img {
			width: 395px;
			height: 450px;
		}
		.image1 {
			position: absolute;
			left: 15%;
			top: 35%;
		}
	}

	section {
		max-width: 635px;
		display: flex;
		flex-direction: column;

		h5{
			font-size: 1.5rem;
			color: ${props => props.theme["text-green"]};
		}

		#description {
			h1 {
				font-size: 3.5rem;
			}

			p {
				font-size: 1.5rem;
				line-height: 1.5rem;
			}
		}

	}
`
