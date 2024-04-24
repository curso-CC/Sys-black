import bgImg from '../../assets/images/bg-home-image.png';
import { Header } from '../../components/Header';
import './style.css';

export function Home() {
    return (
        <div>
            <Header />
			<main>
				<div className="description">
					<h1>Empowering You in the Digital Age</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus quis, ullamcorper non metus. </p>
				</div>
				<div>
					<img src={bgImg} className='image'/>
				</div>
			</main>
        </div>
    )
}
