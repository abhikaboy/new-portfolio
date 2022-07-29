import { Box, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '@fontsource/inter';
import split from './yuh.svg';
import wave from './wave.svg';
import { Controller, Scene } from 'react-scrollmagic';
import { MotionConfig, motion, transform } from 'framer-motion';
import { projectParticles } from '../bridge';
// import Typing from 'react-typing-animation';
let projectHighlight = false;
export { projectHighlight };
export default function Landing({ scroll }) {
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
		<div>
			<Controller style={{ backgroundColor: '#09002F' }}>
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
								<motion.div
									initial={{ x: -500, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									id='sub'
									style={{ display: 'none' }}
								>
									<Text
										color='white'
										style={{
											transform: `translateX(${scroll})px`,
										}}
										ml={`${scroll * 1.75}`}
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
										mr={`${scroll * 1.75}`}
									>
										Abhik
									</Heading>
								</motion.div>
							</Stack>
						</Center>
					</Scene>
				</Box>
				<Box bg='#09002F' paddingTop='50vh'>
					<Stack
						position='absolute'
						w='100%'
						paddingTop={`${scroll * 0.8 - 700}px`}
					>
						<Center>
							<motion.div
								transition={{ delay: 1 }}
								initial={{ opacity: 0.3, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
							>
								<Heading color='white' id='engineer'>
									Full Stack Engineer
								</Heading>
							</motion.div>
						</Center>
						<Center w='100vw' flex={1}>
							<motion.div
								transition={{ delay: 1 }}
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
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
									w='35%'
									mt='13vh'
									id={'bio'}
									ml='50%'
									style={{
										transform: 'translateX(-50%)',
									}}
									fontFamily={'DisposableDroid'}
								>
									{/* <Typing speed={50}> */}
									From Robbinsville NJ, I've been designing and creating a wide
									variety of fun projects that I've been proud of! :)
									{/* </Typing> */}
								</Text>
							</motion.div>
						</Center>
					</Stack>
				</Box>
				<Center w='100%' h='140vh' position='absolute' zIndex={9}>
					<Image src={wave} />
				</Center>
				<motion.div
					animate={projectHover ? 'highlight' : 'not'}
					variants={variantsBg}
				>
					<Box
						w='100vw'
						h='27vh'
						mt='80vh'
						position='absolute'
						bgColor='#09002a'
					>
						<Center>
							<Heading
								color='white'
								mt='3%'
								size={'2xl'}
								onMouseOver={() => {
									console.log('akutsukikikiki');
									setHover(true);
									projectParticles = true;
								}}
								onMouseOut={() => {
									setHover(false);
								}}
								id='projects'
								zIndex={40}
							>
								<motion.div
									animate={projectHover ? 'highlight' : 'not'}
									variants={variants}
								>
									View Projects {'>>'}
								</motion.div>
							</Heading>
							{/* </motion.a> */}
						</Center>
					</Box>
				</motion.div>

				<Center w='100%' h='230vh' position='absolute' zIndex={9}>
					<Image
						src={wave}
						style={{
							transform: 'scaleY(-1)',
						}}
					/>
				</Center>
			</Controller>
		</div>
	);
}
