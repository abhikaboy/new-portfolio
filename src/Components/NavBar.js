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
			<Box
				borderRadius='20px'
				bg='rgba(0,0,0,0.1)'
				posiiton='absolute'
				w='50vw'
				h='6vh'
				style={{
					transform: 'translate(50%,-10px)',
					backdropFilter: 'blur(10px)',
				}}
			>
				<HStack
					h='100%'
					w='100%'
					ml='50%'
					style={{
						transform: 'translate(-20%)',
					}}
					textAlign={'center'}
					flex={1}
					gap={8}
					alignContent='center'
				>
					<NavBarItem text='Projects' />
					<NavBarItem text='Photography' />
					<NavBarItem text='Contact' />
				</HStack>
			</Box>
		</motion.div>
	);
}
