import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import Contact from './Components/Routes/Contact';
import Photography from './Components/Routes/Photography';
import Projects from './Components/Routes/Projects';
export default function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<App />} />
				<Route path='/Home' element={<App />} />
				<Route path='/Photography' element={<Photography />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/Projects' element={<Projects />} />
				<Route path='*' element={<App />} />
			</Routes>
		</AnimatePresence>
	);
}
