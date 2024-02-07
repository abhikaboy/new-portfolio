import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
	return (
		<Box
			position='absolute'
			bgColor={'rgba(0,0,0,0.4)'}
			w='100vw'
			h='5vh'
			backdropBlur={'2xl'}
			bottom={0}
			zIndex={99}>
			<Center h='100%'>
				<Text fontFamily={'DisposableDroid'} color='white'>
					© Abhik Ray 2024
				</Text>
			</Center>
		</Box>
	);
}
