import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Box, Center, Heading, HStack } from '@chakra-ui/react';
import ProjectNavigation from './ProjectComponents/ProjectNavigation';
import ProjectPage from './ProjectComponents/ProjectPage';
const projects = [
	'Relay',
	'Iris',
	'Scouting App',
	'JSON Forms',
	'Battle House',
	'Venusian Village',
	'Echidna',
];
const projectComponents = [
	<ProjectPage
		thumbnail='https://cdn.discordapp.com/attachments/760776202121117706/1003185318784143491/unknown.png'
		title='Relay'
		description='A Fullstack application available on all platforms to help send content across any device. This is my most complex & useful project and I`m most proud of!'
		sub='Send Anything Anywhere'
		madeWith={[
			'React',
			'Electron',
			'React Native',
			'GraphQL',
			'Express',
			'MongoDB',
			'AWS S3 & EC2',
		]}
		start='May 2021'
		modify='July 2022'
	/>,
	<ProjectPage
		thumbnail='https://cdn.discordapp.com/attachments/760776202121117706/1003204275792527400/Screen_Shot_2022-07-31_at_3.35.26_AM.png'
		title='Iris'
		description='Nemesis FRC 2590`s 2022 Robot with vision targetting, odometry position tracking, and double flywheel shooter using linear interplation.'
		sub='FRC Rapid React Robot'
		madeWith={['Java', 'WPIlib']}
		start='January 2022'
		modify='May 2022'
	/>,
	<ProjectPage
		thumbnail='https://frc2590.org/site/templates/images/logo_winged.jpg'
		title='Scouting App'
		description='Nemesis`s Electronic Scouting App used to collect, store, create, and analyze competition data - completely offline.'
		sub='FRC Scouting & Strategy'
		madeWith={['React', 'Redux', 'Javascript']}
		start='10/23/2020'
		modify='7/21/2021'
	/>,
	<ProjectPage
		thumbnail='https://cdn.discordapp.com/attachments/760776202121117706/1003205856101408768/Screen_Shot_2022-07-31_at_3.41.42_AM.png'
		title='JSON Form Generator'
		description='A project built during my time interning with RevSpring. This tool builds forms dynamically based off complex JSON schema'
		sub='Complex Forms from JSON Schema'
		madeWith={['Angular', 'Javascript']}
		start='Summer 2022'
		modify='Summer 2022'
	/>,
	<ProjectPage
		thumbnail='https://github.com/abhikaboy/GAME/blob/master/BattleHeroes/Images/TitleScreen.jpg?raw=true'
		title='Battle Heroes'
		description='This was my first project! I made this game when I was 13 years old. Two players control one keyboard and use special abilites to defeat their opponent'
		sub='Simple Javascript Game'
		madeWith={['p5.js', 'Javascript', 'Bad Physics lol']}
		start='March 2017'
		modify='October 2017'
	/>,
	<ProjectPage
		thumbnail='https://github.com/abhikaboy/venus/blob/master/frontend/images/menu_bg.png?raw=true'
		title='Venusian Village'
		description='This was our First Place submission at the 2021 Future Hacks hackathon. Inpired by Fallout Shelter, players will simulate life on venus as they manage their civilization'
		sub='Python Simulation Game'
		madeWith={['Python', 'Flask', 'Pygame']}
		start='December 2021'
		modify='December 2021'
	/>,
	<ProjectPage
		thumbnail='https://static.zerochan.net/Echidna.%28Re%3AZero%29.full.2042368.jpg'
		title='Echidna'
		description='Bot used during quarantine to help students by helping adjusting to online school'
		sub='Quarantine Discord Bot'
		madeWith={['Discord.js', 'Node', 'Javascript']}
		start='10/23/2020'
		modify='7/21/2021'
	/>,
];
function getPage(current) {
	return projectComponents[current];
}
export default function Projects() {
	const [currentProject, setProject] = useState(0);
	const [visible, setVisible] = useState(true);
	useEffect(() => {}, [currentProject]);
	useEffect(() => {
		console.log('visiblity changed');
	}, [visible]);
	return (
		<motion.div
			initial={{ rotate: -180 }}
			animate={{ rotate: 0 }}
			exit={{ rotate: 180, scale: 0, display: 'none' }}
		>
			<Center
				w='100vw'
				h='100vh'
				bg='#09002F'
				position='absolute'
				// display={'none'}
			></Center>
			<motion.div
				initial={{ y: -500, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ opacity: 0, scale: 0 }}
				transition={{
					y: { delay: 1.5 },
					duration: 0.4,
				}}
			>
				<ProjectNavigation
					project={currentProject}
					setProject={setProject}
					projects={projects}
					visible={visible}
					setVisible={setVisible}
				/>
			</motion.div>
			{visible && (
				<Center w='100vw' h='100vh'>
					<motion.div
						initial={{ opacity: 0, x: window.innerWidth }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -window.innerWidth }}
						style={{
							width: '100vw',
							height: '100vh',
						}}
					>
						{getPage(currentProject)}
					</motion.div>
				</Center>
			)}
			{/* <Box bg='#09002F' h='20vh'></Box> */}
		</motion.div>
	);
}
