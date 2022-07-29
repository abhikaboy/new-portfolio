import React, { useState, useEffect } from 'react';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Landing from './Components/Landing';
import theme from './theme';
import '@fontsource/inter/700.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/400.css';
import AudioControls from './Components/AudioControls';
import NavBar from './Components/NavBar';

function App() {
	const [scrollPosition, setScroll] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY);
		});
	}, []);
	return (
		<ChakraProvider theme={theme} style={{ backgroundColor: '#09002F' }}>
			<NavBar />
			<AudioControls />
			<Landing scroll={scrollPosition} style={{ backgroundColor: '#09002F' }} />
			<Box h='400vh' bg='#09002F'></Box>
		</ChakraProvider>
	);
}

export default App;
