import React, { useState } from 'react';
import { Box, HStack, Heading, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NavBarItem({ text }) {
	const [hover, setHover] = useState(false);
	const variants = {
		highlight: { scale: 1.25, opacity: 1 },
		not: { scale: 1, opacity: 0.7 },
	};
	return (
		<Center textAlign={'center'} paddingLeft='2%' paddingRight='2%'>
			<motion.div animate={hover ? 'highlight' : 'not'} variants={variants}>
				<Text
					fontFamily={'DisposableDroid'}
					size='sm'
					color='white'
					textAlign={'center'}
					opacity='0.7'
					fontSize='1.2em'
					onMouseEnter={() => {
						setHover(true);
					}}
					onMouseLeave={() => {
						setHover(false);
					}}
				>
					<Link to={`/${text}`}>{text}</Link>
				</Text>
			</motion.div>
		</Center>
	);
}
