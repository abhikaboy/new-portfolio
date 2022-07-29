import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter";
import split from "./yuh.svg";
import wave from "./wave.svg";
import { Controller, Scene } from "react-scrollmagic";
import { MotionConfig, motion, transform } from "framer-motion";
import TypeAnimation from "react-type-animation";
import Typing from "react-typing-animation";
export default function Landing({ scroll }) {
	return (
		<div>
			<Controller style={{ backgroundColor: "#09002F" }}>
				{console.log(scroll)}

				<Image src={split} position='absolute' w='100vw' h='100vh' />
				<Image
					src={split}
					position='absolute'
					w='100vw'
					h='100vh'
					mt='100vh'
					style={{
						transform: "scaleY(-1)",
					}}
				/>
				<Box w='100vw' h='100vh' bg='#09002F'>
					<Scene
						duration={800}
						pin={{ pushFollowers: true }}
						triggerHook={0}
						offset={0}>
						<Center h='90%'>
							<Stack gap={0}>
								<motion.div
									initial={{ x: -500, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									id='sub'
									style={{ display: "none" }}>
									<Text
										color='white'
										style={{
											transform: `translateX(${scroll})px`,
										}}
										ml={`${scroll * 1.75}`}
										textAlign={"center"}>
										hey its
									</Text>
								</motion.div>
								<motion.div
									initial={{ x: 500, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									id='name'
									style={{ display: "none" }}>
									<Heading
										color='white'
										size='4xl'
										mt={0}
										mr={`${scroll * 1.75}`}>
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
						paddingTop={`${scroll * 0.75 - 750}px`}>
						<Center>
							<motion.div
								transition={{ delay: 1 }}
								initial={{ opacity: 0.3, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}>
								<Heading color='white' id='engineer'>
									Full Stack Engineer
								</Heading>
							</motion.div>
						</Center>
						<Center w='100vw' flex={1}>
							<motion.div
								transition={{ delay: 1 }}
								initial={{ opacity: 0.3, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								style={{
									width: "100vw",
									position: "absolute",
									alignContent: "center",
									flex: 1,
								}}>
								<Text
									color='white'
									textAlign={"center"}
									fontSize='2xl'
									w='35%'
									mt='10vh'
									id={"bio"}
									ml='50%'
									style={{
										transform: "translateX(-50%)",
									}}
									fontFamily={"DisposableDroid"}>
									<Typing speed={50}>
										{/* <Typing.Delay ms={500} /> */}
										From Robbinsville NJ, I've been
										designing and creating a wide variety of
										fun projects that I've been proud of! :)
									</Typing>
								</Text>
							</motion.div>
						</Center>
					</Stack>
				</Box>
				<Center w='100%' h='140vh' position='absolute' zIndex={9}>
					<Image src={wave} />
				</Center>
				<Box
					w='100vw'
					h='30vh'
					mt='90vh'
					position='absolute'
					bgColor='#09002a'>
					<Center>
						<Heading
							color='white'
							mt='3%'
							size={"2xl"}
							id='projects'>
							View Projects {">>"}
						</Heading>
					</Center>
				</Box>
				<Center w='100%' h='280vh' position='absolute' zIndex={9}>
					<Image
						src={wave}
						style={{
							transform: "scaleY(-1)",
						}}
					/>
				</Center>
			</Controller>
		</div>
	);
}
