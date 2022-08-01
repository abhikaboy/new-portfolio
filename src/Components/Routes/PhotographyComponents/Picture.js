import { Box, Center, Image, position, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export default function Picture({ src, index }) {
	const [hovered, setHover] = useState(false);
	const [position, setPosition] = useState(0);
	const variants = {
		hovered: {
			scale: 1.05,
		},
		not: {
			scale: 1,
		},
	};
	useEffect(() => {
		console.log(window.innerWidth);
		if (window.innerWidth < 800) {
			console.log('no position');
			setPosition(0);
		} else {
			setPosition(
				Math.random() * window.innerWidth * 0.2 +
					(index % 2 == 0 ? -window.innerWidth * 0.3 : 0),
			);
		}
	}, []);
	return (
		<motion.div
			variants={variants}
			animate={hovered ? 'hovered' : 'not'}
			initial={{
				x: Math.random() > 0.5 ? -window.innerWidth : window.innerWidth,
			}}
			whileInView={{
				x: position,
			}}
			transition={{
				x: {
					// delay: 0.1,
				},
			}}
			style={{
				zIndex: 40,
			}}
		>
			<Center w='100%'>
				<Stack
					gap={0}
					onMouseEnter={() => {
						setHover(true);
					}}
					onMouseLeave={() => {
						setHover(false);
					}}
				>
					<Image
						src={src}
						borderStyle='solid'
						maxW={['70vw', '50vw', '40vw']}
						maxH='40vh'
						borderColor='#fff'
						borderWidth='9px'
					></Image>
					<Box
						bgColor={'#fff'}
						w='100%'
						h='5vh'
						transform={'auto'}
						translateY='-1.5vh'
					>
						<Text
							align='right'
							mr='10%'
							fontFamily={'DisposableDroid'}
							fontSize='2xl'
						>
							{'{date}'}
						</Text>
					</Box>
				</Stack>
			</Center>
		</motion.div>
	);
}
