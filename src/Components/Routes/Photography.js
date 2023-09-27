import React from 'react';

import { motion } from 'framer-motion';
import { Center, Box, Text, Stack } from '@chakra-ui/react';
import Picture from './PhotographyComponents/Picture';
const pictures = [
	'https://cdn.discordapp.com/attachments/760776202121117706/1003558763132899368/DSC00404.JPG',
	'https://media.discordapp.net/attachments/760776202121117706/1003563851280810074/DSC00441.JPG?width=1826&height=1027',
	'https://cdn.discordapp.com/attachments/760776202121117706/1003559240310468688/DSC00212.JPG',
	'https://cdn.discordapp.com/attachments/760776202121117706/1003558981182177331/DSC00473.JPG',
	'https://cdn.discordapp.com/attachments/760776202121117706/1003563945359048794/DSC00389.JPG',
	'https://cdn.discordapp.com/attachments/890066881866776616/1156711188697202719/DSC04301_1.jpg?ex=6515f6be&is=6514a53e&hm=7bd000ff1d0e794b438f1d13f4f924337a1930489464d14bca580d7062d6005e&',
	'https://cdn.discordapp.com/attachments/890066881866776616/1156712174232809533/DSC04416_1_1.jpg?ex=6515f7a9&is=6514a629&hm=830c989310517e231b06a1ab81296d4111a153bc5c6126108f435ed30e1fae03&',
	'https://cdn.discordapp.com/attachments/890066881866776616/1156712433398841384/DSC04739-2_1.jpg?ex=6515f7e6&is=6514a666&hm=60f8f24beac68fd99b77d81b837b5523cb6fe896639363931f9a6f2a1322ac37&',
];
export default function Photography() {
	return (
		<motion.div
			initial={{ rotate: -180 }}
			animate={{ rotate: 0 }}
			exit={{ rotate: 180, display: 'none' }}
		>
			<Center w='100vw' h='100vh' bg='#09002F'>
				<motion.div
					initial={{ y: -500, opacity: 0, display: 'block' }}
					animate={{ y: 0, opacity: 1, display: 'block' }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{
						y: { delay: 0.75 },
						duration: 0.4,
					}}
				>
					<Text
						color={'white'}
						w={['75vw', '50vw', '35vw']}
						textAlign={'center'}
						mt='1%'
						fontFamily={'DisposableDroid'}
						fontSize='3xl'
					>
						This is an ever-growing catalogue of my favorite
						pictures from my new Sony A7ii
					</Text>
				</motion.div>
			</Center>
			<Stack bg='#09002F' pt='20%'>
				{pictures.map((url, index) => (
					<Picture src={url} index={index} />
				))}
			</Stack>
			<Box bg='#09002F' h='100vh'></Box>
		</motion.div>
	);
}
