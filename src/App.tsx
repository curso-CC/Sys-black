import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
export function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
			</Routes>
		</BrowserRouter>
    )
}
