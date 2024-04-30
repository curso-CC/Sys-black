import { Link } from "react-router-dom";
import { ButtonContainer } from "./style";

interface ButtonProps {
	url: string;
    titleButton: string;
	typeButton?: 'submit' | 'reset' | 'button' | undefined;
}
export function Button({ url, titleButton, typeButton}: ButtonProps) {
	return (
		<ButtonContainer type={typeButton}>
			<Link to={url}>
				{titleButton}
			</Link>
		</ButtonContainer>
	)
}
