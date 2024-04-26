import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

export function App() {
    return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutUs" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
    )
}
