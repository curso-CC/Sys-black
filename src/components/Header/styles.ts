import styled from "styled-components";


export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	padding: .5rem 2rem ;

	h1 {
		margin-bottom: 0;
		font-size: 3rem;

		span {
			color: ${props => props.theme["text-green"]};
		}
	}

	ul {
		display: flex;
		align-items: center;
		list-style: none;

		gap: 8rem;


		padding: 1.5rem;

		border-radius: 160px;

		li a {

			text-decoration: none;
			color: white;

			font-weight: 700;
			font-size: 1.2rem;

			padding: .75rem 1.25rem;
			border-radius: 160px;

			transition: background-color .2s linear;

			&:hover {
				background-color: rgb(6,138,160);
				background-color: linear-gradient(90deg, rgba(6,138,160,1) 0%, rgba(3,152,186,1) 100%);
			}
		}
	}
`
