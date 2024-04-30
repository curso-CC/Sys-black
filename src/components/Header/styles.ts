import styled from "styled-components";


export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	padding: .5rem 1rem ;

	h1 {
		margin-bottom: 0;

		span {
			color: ${props => props.theme["text-green"]};
		}
	}

	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap:2rem;
		margin-right: 6rem;


		background: gray;
		padding: 1.5rem;

		border-radius: 160px;

		background-color: ${props => props.theme.gray};
		background-color: linear-gradient(153deg, ${props => props.theme.gray} 0%, ${props => props.theme["text-gray"]} 100%);

		li a {
			text-decoration: none;
			color: white;

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
