import { Center, Box, HStack, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ProjectNav from './ProjectNav';

export default function ProjectNavigation({
	projects,
	project,
	setProject,
	visible,
	setVisible,
}) {
	let nextProject = project + 1 == projects.length ? 0 : project + 1;
	let lastProject = project - 1 == -1 ? projects.length - 1 : project - 1;
	const [hoverRight, setRight] = useState(false);

	useEffect(() => {
		document.addEventListener('keydown', function (event) {
			if (event.defaultPrevented) return; // Do nothing if the event was already processed

			if (event.key == 'ArrowLeft') {
				setProject(lastProject);
			} else if (event.key == 'ArrowRight') {
				setProject(nextProject);
			}

			// Cancel the default action to avoid it being handled twice
			// event.preventDefault();
		});
	}, []);
	return (
		<Center mt='7vh' w='100vw' position='absolute' zIndex={58}>
			<Grid
				zIndex={59}
				templateColumns='repeat(3,1fr)'
				templateRows='repeat(1,1fr)'
				w='100%'
			>
				<ProjectNav
					style={{
						position: 'absolute',
						alignSelf: 'flex-start',
						transform: 'translateX(-50%)',
						zIndex: 60,
					}}
					text={projects[lastProject]}
					num={lastProject}
					set={setProject}
					left
					visible={visible}
					setVisible={setVisible}
				/>
				<ProjectNav
					style={{
						position: 'absolute',
						transform: 'translateX(-50%)',
						zIndex: 60,
					}}
					active
					text={projects[project]}
					num={project}
					visible={visible}
					setVisible={setVisible}
				/>
				<ProjectNav
					style={{
						position: 'absolute',
						alignSelf: 'flex-end',
						transform: 'translateX(-50%)',
						zIndex: 60,
					}}
					text={projects[nextProject]}
					num={nextProject}
					set={setProject}
					right
					visible={visible}
					setVisible={setVisible}
				/>
				{/* </HStack> */}
			</Grid>
		</Center>
	);
}
