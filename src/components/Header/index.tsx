import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import "./style.css";
export function Header() {
    return (
        <header>
			<img src={logo}  />
            <nav>
                <ul>
                    <li><Link to="/">Início </Link></li>
                    <li><Link to="/aboutUs">Sobre nós </Link></li>
                    <li><Link to="/contact">Contato </Link></li>
                    <li><Link to="/service">Serviços </Link></li>
                </ul>
            </nav>
        </header>
    );
}
