import React from 'react';
import { Box, Button, Center, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function AudioControls() {
	return (
		<motion.div
			animate={{ y: -90 }}
			transition={{ delay: 1 }}
			style={{
				position: 'fixed',
				top: window.innerHeight + 50,
				height: '6vh',
				zIndex: 10,
				left: '2vw',
				overflow: 'hidden'
			}}
		>
			{/* <Box
				borderRadius={5}
				height='100%'
				bgColor='rgba(255,255,255,0.2)'
				borderWidth={1}
				style={{
					backdropFilter: 'blur(5px)',
					clip: 'rect(10px,10px,10px,10px)',
				}}
				pt='20px'
			>
				<HStack h='100%' pb='10'>
					<Center>
						<Button variant={'ghost'} color='white' size='sm' id='enableTrails'>
							Cursor Trail
						</Button>
					</Center>
				</HStack>
			</Box> */}
		</motion.div>
	);
}
