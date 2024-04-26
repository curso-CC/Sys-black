import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
export function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
    )
}
