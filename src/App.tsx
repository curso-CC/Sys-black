import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
    return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutUs" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Page404 />} />
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
		</ThemeProvider>
    )
}
