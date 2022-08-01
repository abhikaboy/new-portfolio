import { Center, GridItem, Text, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectNav({
	text,
	active,
	num,
	set,
	right,
	visible,
	setVisible,
}) {
	const variants = {
		highlight: { scale: 1.25, opacity: 1 },
		not: { scale: 1, opacity: active ? 1 : 0.4 },
	};
	const [hoverRight, setRight] = useState(false);
	return (
		<GridItem zIndex={59} colSpan={1} w='100%'>
			<Center zIndex={59}>
				<Text
					color='white'
					opacity={active ? 1 : 0.5}
					fontFamily={'DisposableDroid'}
					fontSize='1.6em'
					style={{
						zIndex: 60,
					}}
					onClick={() => {
						console.log('yummy');
						setVisible(false);
						setTimeout(() => {
							setVisible(true);
						}, 30);
						setTimeout(() => {
							set(num);
						}, 30);
					}}
				>
					<motion.div
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={hoverRight ? 'highlight' : 'not'}
						variants={variants}
						onMouseEnter={() => {
							console.log('akutsukikikiki');
							setRight(true);
						}}
						onMouseOut={() => {
							setRight(false);
						}}
						style={{ zIndex: 60 }}
						id={right ? 'right' : 'left'}
					>
						{text}
					</motion.div>
				</Text>
			</Center>
		</GridItem>
	);
}
