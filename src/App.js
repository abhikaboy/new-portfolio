import React, { useState, useEffect } from 'react';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Landing from './Components/Landing';
import theme from './theme';
import '@fontsource/inter/700.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/400.css';
import AudioControls from './Components/AudioControls';
import { motion } from 'framer-motion';

function App() {
	const [scrollPosition, setScroll] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY);
		});
	}, []);
	return (
		<motion.div
			initial={{ rotate: 180 }}
			animate={{ rotate: 0 }}
			exit={{ rotate: -180, display: 'none' }}
		>
			<AudioControls />
			<Landing scroll={scrollPosition} style={{ backgroundColor: '#09002F' }} />
			<Box h='200vh' bg='#09002F'></Box>
		</motion.div>
	);
}

export default App;
