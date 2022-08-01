import { Box, HStack, Heading, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import NavBarItem from './NavBarItem';
export default function NavBar() {
	return (
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ delay: 2 }}
			style={{
				position: 'fixed',
				height: '20vh',
				zIndex: 50,
				overflow: 'hidden',
				width: '100vw',
			}}
		>
			<Center posiiton='absolute'>
				<Box
					borderRadius='20px'
					bg='rgba(0,0,0,0.3)'
					posiiton='absolute'
					w={['90vw', '75vw', '50vw']}
					h='6vh'
					style={{
						transform: 'translate(0%,-10px)',
						backdropFilter: 'blur(10px)',
					}}
				>
					<Center mt='2' w='100%'>
						<NavBarItem text='Home' />
						<NavBarItem text='Projects' />
						<NavBarItem text='Photography' />
						<NavBarItem text='Contact' />
					</Center>
				</Box>
			</Center>
		</motion.div>
	);
}
