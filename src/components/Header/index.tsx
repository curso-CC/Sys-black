import { Link } from 'react-router-dom';
import "./style.css";
export function Header() {
    return (
        <header>
			<h1>Sys<span>black</span></h1>
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
