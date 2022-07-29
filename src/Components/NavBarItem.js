import React from 'react';
import { Box, HStack, Heading, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
export default function NavBarItem({ text }) {
	return (
		<Center textAlign={'center'}>
			<Text
				size='sm'
				color='white'
				textAlign={'center'}
				opacity='0.4'
				onMouseEnter={() => {}}
			>
				{text}
			</Text>
		</Center>
	);
}
