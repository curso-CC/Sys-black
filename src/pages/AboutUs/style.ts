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

		h1 {
			font-size: 2rem;
			font-weight: bold;
			margin-bottom: 1rem;
		}

		p {
			font-weight: 400;
			color: #e0e0e0;
		}

		h5{
			color: #3ed5dd;
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
