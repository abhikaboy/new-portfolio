import React, { useState, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
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
	'Learn My Fretboard',
	'VScode Extension',
	'Jynx',
];
const projectComponents = [
	<ProjectPage
		thumbnail='https://cdn.discordapp.com/attachments/760776202121117706/1003185318784143491/unknown.png'
		title='Relay'
		description='A Fullstack application available on all platforms to help send content across any device. This is my most complex & useful project and I`m most proud of!'
		sub='Send Anything Anywhere'
		madeWith={['React', 'Electron', 'React Native', 'GraphQL', 'Express', 'MongoDB', 'AWS S3 & EC2']}
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
	<ProjectPage
		thumbnail='https://cdn.discordapp.com/attachments/227961738698555392/1204711845391368192/mwo.png?ex=65d5ba56&is=65c34556&hm=6225cfb229037d1d9e940cb6459b878e593b3eb6b6318470bb81c185c8bce187&'
		title='Learn My Fretboard'
		description='Web App made in one week to help guitarists memorize the fretboard through interactive activies and listening to user`s guitars'
		sub='Guitar Learning Web App'
		madeWith={['React', 'Typescript']}
		start='October 2023'
		modify='October 2023'
	/>,
	<ProjectPage
		thumbnail='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAACfCAMAAAC85v7+AAAAnFBMVEUoLDUjqfIAcrQAhtEmKjIhpu8AdbgkJiwkKDAjr/sAg80Ad7skHh4jrPckOk0HidQkfbAZk9glIyYAidYqJSYAfcQpJysAi9oAgMgkFg8oKjAlNkkkGxkmHx4qIyMnMT8fR2gbUXsNaaQlRV8idKYiZpIXXY4ik9MiVngihLwhQ2EhNksaU34Tca0SZJsjKzgmGAobSm8hgbkmHBUWEH0ZAAAEMUlEQVR4nO3cbVPaShiAYUiWJLDQ1LwARt61tAaxov//v3V3AySboMKZOWM73BeKjsMH5p5nFxLAVgsAAAAAAAAAAAAAAAAAAAAAAAAAgGuQRbNICPHVd+PflNw/vP7wpz4BLyeSdeqNu4PXb7cM4KWybJtKz7lpD7o/f932AwJeYHgnUykdVa+t+nUeggkL+GzJQrVTo2fqmYCP97dRQL8ziNk6teu1zQKeROT7VCZWup1dT+l2fkzI94nhnVfEq9dT/R761PtQku/bSa9Rr91VD75ffQf/ZmrLk/I4eo1633zqvUskq2M8/YSFehcYzp2yHbN3khDB6ae+SS4l9T6k2k03i+jEsevsqdzy9Bf1GoTwp9vRKFy+1Y4cxPA59TzdTZprz6NenRDR7/EoDMORF1hHXlmx5XnFRWfU8ZzHAfVKIsrDg+Wbf8w3zM20GdIrCjryOfpOvZLwF6NjvZEnDuM3Wx7bleRu2qdehZimYdXO7H5Zsm7Gk6v5UFCvSvS3o2q90Vbtfv58pfa4xuAl6lGZepZgPo5De/xeNs6eyeboknrw9EMM9SzCj+zpU+PnORbVTy5nOhL16kTwtrbzhW4tXzF4LeqdoA41FrXFG6bV0dsPXot6p6gnzHc9u19cjp+3uhuWt6RegzpYi7w4dPWiDQ9X+/GTyySr3JB6TUIEL2rzcw8Xk6/nVXa8w+2od4LKN1mElenTAePU2U2tE+/Ue4eI5o6ZOvOlqR+93D7xQr13JAu1UMf7cEejlXXej3qnzdb6RQsnjWv5wl4+KcePeqdk2Wr/DMVz66rjR70ThndOeXTRyBe6x/GjXlOSy+px2bi+eo/jxzmWpuTJiqee5I0a41fsftRryJ7teHL5smxM32H8AlWv02mri7puq59XXm+4tk6oqKPaKOhv3Ea/uJdPg2Bfz8QzP6+8XrKyBy/R21sUyBPj99z3VT1dzsydmcErr5ftyoXrbYvTKfol3lVj83Pj9H5qZq9icN31WsNjPvmUHM/jBW9PVr6e/u6565di9gz925XPnsq32e94m/J0in58yCvdzC+93njsPLaZPUvWWklPDV5W/aN+j4E0yfTM6StdL5U31XZt6uk36eU76zye+aPe/GK3iFd8j8epd8PsNWRZs4HZ/OJeFfXOp9+alrtuJZ6u16HemdTmN0/dSjzqXUJtfv1tXC7c1KHeBfTmt47LevXZ6/p84uADxeb33uwNXifE+5DZ/My2V6/XVvEYvU/oF8u3rnnUkJV6g87DfMKnJD9VbH5jq97g5tek7xPvDHrzW7hq4R7qDcyncwPinUe/UyhVs6cfc9WS/T3xTTvincdsfmr6OgP9XwlodyG9epevP78XS5Z2lxJB1J8wdv+ZOPjqO/JvIh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9UfX7te9CUReAAAAAAASUVORK5CYII='
		title='VSCode Extension'
		description='VS Code Extension designed to help teams develop with good practice quickly and on the fly.
		Featuring a robust command pallete to generate code'
		sub='Robotics Code Writing Tool'
		madeWith={['Typescript', 'Node.js']}
		start='June 2023'
		modify='June 2023'
	/>,
	<ProjectPage
		thumbnail='https://cdn.discordapp.com/attachments/227961738698555392/1204713248281206805/Screenshot_2024-02-07_at_4.00.09_AM.png?ex=65d5bba4&is=65c346a4&hm=6823172dbd00d12279eb858b60534fea3b15b319c65c51c0fb90ff8f36b9a6c8&'
		title='Jynx'
		description='Nemesis FRC 2590`s 2023 Robot with April Tag Detection, Odometry, and an Automatic Elevator.'
		sub='FRC Charged Up Robot'
		madeWith={['Java', 'WPIlib']}
		start='January 2023'
		modify='May 2023'
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
			exit={{ rotate: 180, scale: 0, display: 'none' }}>
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
				}}>
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
						}}>
						<AnimatePresence>{getPage(currentProject)}</AnimatePresence>
					</motion.div>
				</Center>
			)}
			{/* <Box bg='#09002F' h='20vh'></Box> */}
		</motion.div>
	);
}
