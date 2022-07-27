import { Box, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/inter';
import split from './yuh.svg';
import { Controller, Scene } from 'react-scrollmagic';
import { MotionConfig, motion, transform } from 'framer-motion';

export default function Landing({ scroll }) {
	return (
		<div>
			<Controller>
				{console.log(scroll)}

				<Image src={split} position='absolute' w='100vw' h='100vh' />
				<Image
					src={split}
					position='absolute'
					w='100vw'
					h='100vh'
					mt='100vh'
					style={{
						transform: 'scaleY(-1)',
					}}
				/>
				<Box w='100vw' h='100vh' bg='#09002F'>
					<Scene
						duration={800}
						pin={{ pushFollowers: true }}
						triggerHook={0}
						offset={0}
					>
						<Center h='90%'>
							<Stack gap={0}>
								{/* <Scene> */}
								<motion.div
									initial={{ x: -500, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									id='sub'
									style={{ display: 'none' }}
								>
									<Text
										color='white'
										style={{ transform: `translateX(${scroll})px` }}
										ml={`${scroll * 1.5}`}
										textAlign={'center'}
									>
										hey its
									</Text>
								</motion.div>
								<motion.div
									initial={{ x: 500, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									id='name'
									style={{ display: 'none' }}
								>
									<Heading
										color='white'
										size='4xl'
										mt={0}
										mr={`${scroll * 1.5}`}
									>
										Abhik
									</Heading>
								</motion.div>
								{/* </Scene> */}
							</Stack>
						</Center>
					</Scene>
				</Box>
				<Box
					bg='#09002F'
					bottom={(scroll - 800) * 2}
					style={
						{
							// transform: `translateY(${scroll - 900})px`,
						}
					}
				>
					{/* {console.log(scroll)} */}
					<Scene
						duration={800}
						pin={{ pushFollowers: true }}
						triggerHook={1000}
						offset={0}
					>
						<Stack>
							<Center>
								<Heading
									color='white'
									id='engineer'
									// fontFamily={'DisposableDroid'}
								>
									Full Stack Engineer
								</Heading>
							</Center>
							<Text
								color='white'
								textAlign={'center'}
								fontSize='2xl'
								pl='25%'
								pr='25%'
								fontFamily={'DisposableDroid'}
							>
								From Robbinsville NJ, I've been designing and creating a wide
								variety of fun projects that I've been proud of! {`:)`}
							</Text>
						</Stack>
					</Scene>
				</Box>
			</Controller>
		</div>
	);
}
