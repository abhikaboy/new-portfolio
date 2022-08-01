import React from 'react';

import { motion } from 'framer-motion';
import { Center, Heading, Box, Text, HStack, Stack } from '@chakra-ui/react';
export default function Contact() {
	return (
		<motion.div
			initial={{ rotate: -180, scale: 0 }}
			animate={{ rotate: 0, scale: 1 }}
			exit={{ rotate: 180, scale: 0 }}
		>
			<motion.div
				// initial={{ opacity: 0 }}
				// animate={{ opacity: 1 }}
				// exit={{ opacity: 0 }}
				transition={{
					delay: 2,
				}}
			>
				<Center w='100vw' h='100vh' zIndex={30} position='absolute' top='0'>
					<motion.div
						layout
						initial={{ y: -window.innerHeight }}
						animate={{ y: 0 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{
							y: { delay: 1.5 },
							duration: 0.4,
						}}
					>
						<Box
							bg='rgba(0,0,0)'
							w='70vw'
							h='70vh'
							mb='0vh'
							backgroundImage={
								'https://cdn.discordapp.com/attachments/760776202121117706/1003526773989978182/DSC00430.JPG'
							}
							borderStyle='solid'
							borderWidth={'10px'}
							borderColor='#fff'
							// borderBottomWidth='12vh'
							backgroundPosition='center'
							zIndex={30}
						>
							<Center w='100%' h='100%' zIndex={30}>
								<Stack>
									<Text
										color='white'
										fontFamily={'DisposableDroid'}
										fontSize={['1.2em', '1.4em', '1.6em']}
										transform='auto'
										translateY={['1vh', '2vh', '2vh']}
										lineHeight='0.9'
										w='60vw'
										// textAlign='center'
									>
										interested in reaching out? message me:
									</Text>
									<Heading
										color='white'
										size={['md', 'xl', 'xl', '4xl']}
										zIndex={30}
										padding='0px'
										margin='0px'
										mt='15px'
										w='60vw'
									>
										abhikaboy@gmail.com
									</Heading>
								</Stack>
							</Center>
						</Box>

						<Box bg='#fff' w='70vw' h='10vh' flex={1}>
							<HStack w='100%' flex={1} pt='1.5%'>
								<Text
									fontFamily={'DisposableDroid'}
									fontSize='1.6em'
									ml='5%'
									w='100%'
								>
									{/* Robbinsville Town Center Lake */}
								</Text>
								<Text
									fontFamily={'DisposableDroid'}
									fontSize='1.6em'
									align={'right'}
									alignSelf='flex-end'
									pr='5%'
									w='100%'
								>
									7/27/2022
								</Text>
							</HStack>
						</Box>
					</motion.div>
				</Center>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					delay: 0.5,
					duration: 0.6,
				}}
				style={{
					backgroundColor: '#000',
				}}
			>
				<Box
					w='100vw'
					h='100vh'
					position='absolute'
					top={0}
					left={0}
					zIndex={2}
					bgColor='#000'
				></Box>
				<Center
					w='100vw'
					backgroundImage={
						'https://cdn.discordapp.com/attachments/760776202121117706/1003526773989978182/DSC00430.JPG'
					}
					backgroundSize='cover'
					backgroundPosition={'center'}
					h='100vh'
					position='absolute'
					top={0}
					left={0}
					zIndex={3}
					bgColor='#000'
					style={{
						filter: 'blur(20px)',
						opacity: 1,
					}}
				/>
			</motion.div>
		</motion.div>
	);
}
