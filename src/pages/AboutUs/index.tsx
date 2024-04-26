import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import { Header } from "../../components/Header";
import styles from './style.module.css';

export function AboutUs () {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.images}>
					<img  src={image2}  className={styles.image2}/>
					<img src={image1} className={styles.image1} />
				</div>

				<section id='about-us'>
					<h5>About us</h5>
					<div id='description'>
						<h1>Discover Our Journey Protecting Your Digital World with Expertise and Care</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus quis, ullamcorper non metus. Aliquam viverra volutpat feugiat. Donec fringilla aliquam mollis. Sed cursus quam nibh, quis placerat metus dapibus sed.
							Nam varius nisi in nisi maximus blandit sit amet ac tellus.
						</p>
					</div>
				</section>
			</main>
		</>
	)
}
