import styled from "styled-components";

export const MainContainer = styled.main`

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
		height: auto;

		img {
			height: 18rem;
			width: 15rem;
		}
		.image1 {
			position: absolute;
			left: 25%;
			top: 40%;
		}
	}

`
