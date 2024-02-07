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
	return (
		<div style={{ backgroundColor: '#09002F' }}>
			<div style={{ backgroundColor: '#09002F' }}>
				<Image src={split} position='absolute' w='100vw' h='105vh' mb='0' />
				<Image
					src={split}
					position='absolute'
					w='100vw'
					h='100vh'
					mt='104.7vh'
					style={{
						transform: 'scaleY(-1)',
						mixBlendMode: 'multiply',
					}}
				/>
				<Box w='100vw' h='100vh' bg='#09002F'>
					<Center h='90%'>
						<Stack gap={0}>
							<motion.div
								initial={{ x: -300, opacity: 0, scale: 0.1 }}
								whileInView={{ x: 0, opacity: 1, scale: 1 }}
								id='sub'
								viewport={{ once: true }}>
								<Text
									color='white'
									ml={`${window.scrollY * 1.75}`}
									mt={window.scrollY * 1}
									textAlign={'center'}
									fontFamily={'DisposableDroid'}
									transform='auto'
									fontSize={'1.2em'}
									translateY={'1vh'}>
									hey its
								</Text>
							</motion.div>
							<motion.div
								initial={{ x: 500, opacity: 0, scale: 0.4 }}
								whileInView={{ x: 0, opacity: 1, scale: 1 }}
								transition={{
									scale: { duration: 0.3, delay: 0.1 },
								}}
								viewport={{ once: true }}
								id='name'
								// style={{ display: 'none' }}
							>
								<Heading
									color='white'
									size='4xl'
									mt={0}
									mr={`${window.scrollY * 1.75}`}
									boxShadow={'xl'}>
									Abhik
								</Heading>
							</motion.div>
						</Stack>
					</Center>
					{/* </Scene> */}
				</Box>
				<Box bg='#09002F' paddingTop='50vh'>
					<AnimatePresence
						initial={false}
						exitBeforeEnter={false}
						onExitComplete={() => null}
						style={{ zIndex: 10 }}>
						{window.scrollY < window.innerHeight * 2 && (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.1 }}
								exit={{ opacity: 0 }}
								key='aboutText'
								viewport={{ once: true }}>
								<Stack
									position='absolute'
									w='100%'
									paddingTop={`${window.scrollY * 0.7 - window.innerHeight / 1.3}px`}
									zIndex={5}
									id='aboutText'>
									{/* <Center>
										<motion.div
											transition={{ delay: 0.2 }}
											initial={{ opacity: 0.3, scale: 0 }}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											viewport={{ once: true }}
											exit={{ opacity: 0 }}>
											<Heading color='white' id='engineer'>
												Full Stack Engineer
											</Heading>
										</motion.div>
									</Center> */}
									<Center w='100vw' flex={1}>
										<motion.div
											transition={{ delay: 0.8 }}
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											exit={{ opacity: 0 }}
											viewport={{ once: true }}
											style={{
												width: '100vw',
												position: 'absolute',
												alignContent: 'center',
												flex: 1,
											}}>
											<Text
												color='white'
												textAlign={'center'}
												fontSize='2xl'
												w={['90%', '75%', '65%', '55%', '40%']}
												mt={['30vh', '18vh']}
												id={'bio'}
												ml='50%'
												bg='rgba(50,50,255,0.2)'
												borderColor={'rgba(20,20,255,0.6)'}
												borderStyle={'solid'}
												borderWidth={2}
												// shadow={'xl'}
												borderRadius={20}
												padding='2vw'
												style={{
													transform: 'translateX(-50%)',
													boxShadow: '0px 5px 100px rgba(0,0,255,0.5)',
													textShadow: '0px 0px 10px rgba(255,255,255,1)',
												}}
												fontFamily={'DisposableDroid'}>
												I am a student at Northeastern University studying Computer Science and
												Design. I love creating anything ranging from robots that launch
												basketball size objects to web apps that help musicans learn the guitar.
											</Text>
										</motion.div>
									</Center>
								</Stack>
							</motion.div>
						)}
						{window.scrollY < window.innerHeight * 2 && window.scrollY > window.innerHeight / 1.8 && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.5 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0 }}
								zIndex={90}
								bg='black'>
								<Box
									bgColor='black'
									w='100vw'
									h='1000vh'
									position='absolute'
									top='0px'
									left='0px'
									zIndex={90}>
									{' '}
									hi
								</Box>
							</motion.div>
						)}
					</AnimatePresence>
				</Box>
				<motion.div
					animate={projectHover ? 'highlight' : 'not'}
					zIndex={30}
					onMouseOut={() => {
						setHover(false);
					}}>
					<Stack mt='80vh'>
						{/* <Image
							src={wave}
							style={{
								backdropFilter: 'blur(2px)',
								zIndex: 2
							}}
							h='20vh'
							w='100vw'
							objectFit={'cover'}
						></Image> */}
						<Box
							w='100vw'
							h='60vh'
							// bgColor={window.scrollY < 1300 ? '#000010' : 'rgba(0,0,50)'}
							// bgImage={`url(https://cdn.discordapp.com/attachments/227961738698555392/1204680368221847552/MacBook_Pro_16__-_1.png?ex=65d59d05&is=65c32805&hm=771f2cf5ba2e5ea3b8d138a1c9ea47d3a03d3cbb652eab7138eb9f0212ff472a&)`}
							opacity='1'
							objectPosition={'80% 70%'}
							objectFit={'contain'}
							id='projects'
							zIndex={25}
							// translateY='-2vh'
							mt='10%'
							transform={'auto'}>
							<Center h='100%'>
								<Heading
									color='white'
									size={'xl'}
									zIndex={5}
									bgColor='rgba(25,0,100,0.2)'
									borderColor={'rgba(0,0,255,0.6)'}
									borderStyle={'solid'}
									borderWidth={5}
									// borderStart={'1px'}
									// borderEnd={'1px'}
									p='10%'
									w='90%'
									textAlign={'center'}
									borderRadius='20px'
									style={{
										boxShadow: '0px 0px 20px rgba(0,0,255,0.9)',
									}}>
									<motion.div
										animate={projectHover ? 'highlight' : 'not'}
										variants={variants}
										style={{ zIndex: 5 }}
										onMouseEnter={() => {
											setHover(true);
											try {
												// projectParticles = true;
											} catch (e) {
												console.log(e);
											}
										}}
										viewport={{ once: true }}>
										<Link
											id='projectText'
											to='/projects'
											style={{
												textShadow: '0px 0px 10px rgba(255,255,255,0.5)',
											}}
											onClick={() => {
												window.scrollTo(0);
											}}>
											View Projects
										</Link>
									</motion.div>
								</Heading>
							</Center>
						</Box>

						{/* <Image
							src={wave}
							style={{
								backdropFilter: 'blur(2px)',
								zIndex: 2
							}}
							h='20vh'
							w='100vw'
							objectFit={'cover'}
							transform='auto'
							translateY={'-4vh'}
							scaleY='-1'
						></Image> */}
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
					viewport={{ once: true }}>
					<Heading color={'white'} textAlign='center' pt='20vh'>
						Catch me with MongoDB
					</Heading>

					<motion.div
						initial={{ scale: 0, rotate: -180 }}
						whileInView={{ scale: 1, rotate: 0 }}
						exit={{ scale: 0, rotate: -180 }}
						transition={{ delay: 0.5 }}
						viewport={{ once: true }}>
						<Center zIndex={20} p='1%'>
							<Box
								borderRadius={10}
								borderStyle='solid'
								borderWidth={5}
								borderColor='rgba(25,255,100,0.4)'
								zIndex={20}>
								<iframe
									width={window.innerWidth * 0.5}
									height={window.innerHeight * 0.5}
									src='https://www.youtube.com/embed/m975eFQFgss?start=18511'
									title='You Tube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen></iframe>
							</Box>
						</Center>
					</motion.div>
					<motion.div
						initial={{ x: window.innerWidth }}
						whileInView={{ x: 0 }}
						exit={{ scale: 0, rotate: -180 }}
						transition={{ delay: 0.6 }}
						viewport={{ once: true }}>
						<Center>
							<Text
								color='white'
								fontFamily={'DisposableDroid'}
								fontSize='2xl'
								w='50%'
								textAlign={'center'}>
								This was taken from MongoDB's .live Community Day where I was brought along as a guest
								to showcase my product Relay!
							</Text>
						</Center>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
