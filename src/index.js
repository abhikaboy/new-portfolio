import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			{/* <App /> */}
			<ChakraProvider theme={theme} style={{ backgroundColor: '#09002F' }}>
				<NavBar />
				<AnimatedRoutes />
				<Footer />
			</ChakraProvider>
		</React.StrictMode>
	</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
