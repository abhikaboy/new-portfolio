import React, { useEffect, useState, useRef } from 'react';
import { Center, Heading, Stack, Text, Image, HStack } from '@chakra-ui/react';
import { motion, usePresence, useIsPresent } from 'framer-motion';
export default function ProjectPage({
	thumbnail,
	title,
	description,
	madeWith,
	sub,
	start,
	modify,
}) {
	const descriptionEl = useRef(null);
	const [isPresent, safeToRemove] = usePresence();
	const [expanded, setExpand] = useState(false);
	const [hover, setHover] = useState(false);
	// useEffect(() => {
	// 	!isPresent && setTimeout(safeToRemove, 1000);
	// }, [isPresent]);
	useEffect(() => {
		console.log('lolw');
	}, []);
	const variants = {
		collapse: { x: 0, y: 0, opacity: 1 },
		expanded: { x: '-8%', y: -450, opacity: 1 },
	};
	const thumbnailVariants = {
		collapse: { y: 0, height: '25vh', marginRight: '0vw' },
		expanded: { y: 0, height: '55vh', marginRight: '45vw' },
	};
	const hoverVariants = {
		hover: { scale: 1.2 },
		not: { scale: 1 },
	};
	return (
		<motion.div
			key={title}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.75 }}
			style={{
				width: '100vw',
			}}
		>
			<Stack w='100vw' backdropBlur={'4px'} mt='20vh'>
				<Center zIndex={20}>
					<motion.div
						animate={hover ? 'hover' : 'not'}
						variants={hoverVariants}
					>
						<motion.div
							layout
							initial={{ y: -window.innerHeight }}
							animate={expanded ? 'expanded' : 'collapse'}
							variants={thumbnailVariants}
							exit={{ opacity: 0, y: window.innerHeight }}
							transition={{
								y: { delay: 0.5 },
								height: { duration: 0.4, delay: 0 },
								marginRight: { duration: 0.3, delay: 0.4 },
							}}
							// style={{
							// 	height: expanded ? '55vh' : '25vh',
							// 	marginRight: expanded ? '45vw' : '0vw',
							// }}
							onClick={() => {
								setExpand(!expanded);
							}}
						>
							<Image
								src={thumbnail}
								borderRadius={'20px'}
								borderWidth='10px'
								borderStyle={'solid'}
								borderColor={'white'}
								objectFit='cover'
								height={'100%'}
								width={'40vh'}
								onMouseEnter={() => {
									setHover(true);
								}}
								onMouseLeave={() => {
									setHover(false);
								}}
							></Image>
						</motion.div>
					</motion.div>
				</Center>
				<div zIndex={20}>
					<motion.div
						initial={{ x: window.innerWidth, y: 0 }}
						animate={expanded ? 'expanded' : 'collapse'}
						variants={variants}
						exit={{ opacity: 0 }}
						transition={{
							x: { delay: 0.6 },
							y: { delay: 0.1, duration: 0.1 },
						}}
						onClick={() => {
							setExpand(!expanded);
						}}
					>
						<Heading
							color={'white'}
							size='3xl'
							left='50vw'
							position='absolute'
							style={{
								transform: `translateX(${
									expanded ? '0%' : '-50%'
								})`,
							}}
						>
							{title}
						</Heading>
					</motion.div>
				</div>

				<motion.div
					initial={{ x: window.innerWidth, y: 0 }}
					animate={expanded ? 'expanded' : 'collapse'}
					variants={variants}
					exit={{ opacity: 0 }}
					transition={{ x: { delay: 0.75 } }}
				>
					<Text
						position='absolute'
						left='50vw'
						style={{
							transform: `translateX(${
								expanded ? '0%' : '-50%'
							})`,
						}}
						zIndex={5}
						color='white'
						fontFamily={'DisposableDroid'}
						fontSize='1.3em'
						id={'sub'}
						mt={['8%', '6%', '6%', '5%', '4%']}
					>
						{sub}
					</Text>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.8 }}
					transition={{ delay: 0 }}
					exit={{ opacity: 0 }}
				>
					<Center
						w='100vw'
						backgroundImage={thumbnail}
						backgroundSize='cover'
						backgroundPosition={'center'}
						h='100%'
						position='absolute'
						top={0}
						left={0}
						zIndex={2}
						style={{
							filter: 'blur(50px)',
							opacity: 0.5,
							transform: 'scale(100%)',
						}}
					/>
				</motion.div>
			</Stack>
			{expanded && (
				<motion.div
					initial={{ x: window.innerWidth }}
					animate={{ x: 0 }}
					transition={{ delay: 1 }}
					exit={{ opacity: 0 }}
					style={{
						marginLeft: '42vw',
						y: '-45vh',
					}}
				>
					<Text
						color='white'
						w='30vw'
						fontSize={'1.6em'}
						fontFamily={'DisposableDroid'}
						ref={descriptionEl}
					>
						{description}
					</Text>
				</motion.div>
			)}
			<HStack zIndex={70}>
				{expanded && (
					<motion.div
						initial={{ x: window.innerWidth }}
						animate={{ x: 0 }}
						transition={{ delay: 1.25 }}
						style={{
							marginLeft: '42vw',
							y: '-45vh',
							height: '100%',
							alignSelf: 'flex-start',
						}}
					>
						<Heading color='white' size='md'>
							Made With
						</Heading>
						<Text
							color='white'
							w='15vw'
							fontSize={'1.6em'}
							fontFamily={'DisposableDroid'}
						>
							{madeWith.map((bullet) => (
								<li
									style={{
										paddingTop: -10,
										paddingBottom: -10,
										margin: 0,
										height: '3vh',
									}}
								>
									{bullet}
								</li>
							))}
						</Text>
					</motion.div>
				)}
				{expanded && (
					<motion.div
						initial={{ x: window.innerWidth }}
						animate={{ x: 0 }}
						transition={{ delay: 1.5 }}
						exit={{ opacity: 0 }}
						style={{
							top: 0,
							y: '-45vh',
							height: '100%',
							alignSelf: 'flex-start',
						}}
					>
						<Heading color='white' size='md'>
							Started:
						</Heading>
						<Text
							color='white'
							w='30vw'
							fontSize={'1.6em'}
							fontFamily={'DisposableDroid'}
						>
							{start}
						</Text>
						<Heading color='white' size='md'>
							Last Updated:
						</Heading>
						<Text
							color='white'
							w='30vw'
							fontSize={'1.6em'}
							fontFamily={'DisposableDroid'}
						>
							{modify}
						</Text>
					</motion.div>
				)}
			</HStack>
		</motion.div>
	);
}
