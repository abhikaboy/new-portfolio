import { Box, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '@fontsource/inter';
import split from './yuh.svg';
import wave from './wave.svg';
// import { Controller, Scene } from 'react-scrollmagic';
import { MotionConfig, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Typing from 'react-typing-animation';
let projectHighlight = false;
export { projectHighlight };
export default function Landing() {
	const [projectHover, setHover] = useState(false);
	const variants = {
		highlight: { scale: 1.25 },
		not: { scale: 1 },
	};
	const variantsBg = {
		highlight: {
			// backgroundColor: '#fff',
			// color: 'red',
			// filter: 'brightness(5)',
		},
		not: {
			// backgroundColor: '#09002F',
			// color: 'white',
			// filter: 'brightness(1)',
		},
	};
	return (
		<div style={{ backgroundColor: '#09002F' }}>
			<div style={{ backgroundColor: '#09002F' }}>
				<Image src={split} position='absolute' w='100vw' h='100vh' mb='0' />
				<Image
					src={split}
					position='absolute'
					w='100vw'
					h='100vh'
					mt='98.7vh'
					style={{
						transform: 'scaleY(-1)',
					}}
				/>
				<Box w='100vw' h='100vh' bg='#09002F'>
					{/* <Scene
						duration={800}
						pin={{ pushFollowers: true }}
						triggerHook={0}
						offset={0}
					> */}
					<Center h='90%'>
						<Stack gap={0}>
							<motion.div
								initial={{ x: -500, opacity: 0, scale: 0 }}
								whileInView={{ x: 0, opacity: 1, scale: 1 }}
								id='sub'
								style={{ display: 'none' }}
							>
								<Text
									color='white'
									// style={{
									// 	transform: `translateX(${window.scrollY})px`,
									// }}
									ml={`${window.scrollY * 1.75}`}
									mt={window.scrollY * 1}
									textAlign={'center'}
									fontFamily={'DisposableDroid'}
									transform='auto'
									fontSize={'1.2em'}
									translateY={'1vh'}
								>
									hey its
								</Text>
							</motion.div>
							<motion.div
								initial={{ x: 500, opacity: 0, scale: 0.4 }}
								whileInView={{ x: 0, opacity: 1, scale: 1 }}
								transition={{
									scale: { duration: 0.3, delay: 0.1 },
								}}
								id='name'
								style={{ display: 'none' }}
							>
								<Heading
									color='white'
									size='4xl'
									mt={0}
									mr={`${window.scrollY * 1.75}`}
								>
									Abhik
								</Heading>
							</motion.div>
						</Stack>
					</Center>
					{/* </Scene> */}
				</Box>
				<Box bg='#09002F' paddingTop='50vh'>
					<AnimatePresence>
						{window.scrollY < 1800 && (
							<motion.div exit={{ opacity: 0 }}>
								<Stack
									position='absolute'
									w='100%'
									paddingTop={`${window.scrollY * 0.8 - 700}px`}
									id='aboutText'
								>
									<Center>
										<motion.div
											transition={{ delay: 0.2 }}
											initial={{ opacity: 0.3, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0 }}
										>
											<Heading color='white' id='engineer'>
												Full Stack Engineer
											</Heading>
										</motion.div>
									</Center>
									<Center w='100vw' flex={1}>
										<motion.div
											transition={{ delay: 0.3 }}
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0 }}
											style={{
												width: '100vw',
												position: 'absolute',
												alignContent: 'center',
												flex: 1,
											}}
										>
											<Text
												color='white'
												textAlign={'center'}
												fontSize='2xl'
												w={['90%', '75%', '65%', '55%', '35%']}
												mt='13vh'
												id={'bio'}
												ml='50%'
												style={{
													transform: 'translateX(-50%)',
												}}
												fontFamily={'DisposableDroid'}
											>
												From Robbinsville NJ, I've been designing and creating a
												wide variety of fun projects that I've been proud of! :)
											</Text>
										</motion.div>
									</Center>
								</Stack>
							</motion.div>
						)}
					</AnimatePresence>
				</Box>
				<motion.div
					animate={projectHover ? 'highlight' : 'not'}
					variants={variantsBg}
					onMouseEnter={() => {
						setHover(true);
						try {
							// projectParticles = true;
						} catch (e) {
							console.log(e);
						}
					}}
					onMouseOut={() => {
						setHover(false);
					}}
				>
					<Stack mt='80vh'>
						<Image
							src={wave}
							style={{
								backdropFilter: 'blur(2px)',
								zIndex: 2,
							}}
							h='20vh'
							w='100vw'
							objectFit={'cover'}
						></Image>
						<Box
							w='100vw'
							h='27vh'
							bgColor='#09002a'
							opacity='1'
							id='projects'
							zIndex={40}
							translateY='-2vh'
							transform={'auto'}
						>
							<Center>
								<Heading color='white' mt='3%' size={'2xl'} zIndex={40}>
									<motion.div
										animate={projectHover ? 'highlight' : 'not'}
										variants={variants}
										style={{ zIndex: 60 }}
									>
										<Link
											id='projectText'
											to='/projects'
											onClick={() => {
												window.scrollTo(0);
											}}
										>
											View Projects {'>>'}
										</Link>
									</motion.div>
								</Heading>
							</Center>
						</Box>

						<Image
							src={wave}
							style={{
								backdropFilter: 'blur(2px)',
								zIndex: 2,
							}}
							h='20vh'
							w='100vw'
							objectFit={'cover'}
							transform='auto'
							translateY={'-4vh'}
							scaleY='-1'
						></Image>
					</Stack>
				</motion.div>

				{/* <Center w='100%' zIndex={20}>
					<Stack zIndex={20}>
						<Image
							src={wave}
							style={{
								transform: 'scaleY(-1)',
								backdropFilter: 'blur(2px)',
							}}
							h='20vh'
							w='100vw'
							objectFit={'cover'}
						/>
					</Stack>
				</Center> */}
				{/* <Center mt='150vh'></Center> */}
				<motion.div
					initial={{ x: -window.innerWidth }}
					whileInView={{ x: 0 }}
					transition={{ delay: 0.5 }}
				>
					<Heading color={'white'} textAlign='center' pt='20vh'>
						Catch me with MongoDB!
					</Heading>

					<motion.div
						initial={{ scale: 0, rotate: -180 }}
						whileInView={{ scale: 1, rotate: 0 }}
						exit={{ scale: 0, rotate: -180 }}
						transition={{ delay: 0.5 }}
					>
						<Center zIndex={20}>
							<Box
								borderRadius={10}
								borderStyle='solid'
								borderWidth={5}
								borderColor='rgba(25,255,100,0.4)'
								zIndex={20}
							>
								<iframe
									width={window.innerWidth * 0.5}
									height={window.innerHeight * 0.5}
									src='https://www.youtube.com/embed/m975eFQFgss?start=18511'
									title='You Tube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</Box>
						</Center>
					</motion.div>
					<motion.div
						initial={{ x: window.innerWidth }}
						whileInView={{ x: 0 }}
						exit={{ scale: 0, rotate: -180 }}
						transition={{ delay: 0.6 }}
					>
						<Center>
							<Text
								color='white'
								fontFamily={'DisposableDroid'}
								fontSize='2xl'
								w='50%'
								textAlign={'center'}
							>
								This was taken from MongoDB's .live Community Day where I was
								brought along as a guest to showcase my product Relay!
							</Text>
						</Center>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
