import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

import Typewriter from 'typewriter-effect';

import {ReactComponent as Rocket} from '../assets/vectors/vector-rocket.svg'

const Component = () => {
	return (
		<>

		<Container maxWidth='lg'>
			<Box py='64px' px='16px'>
				<Grid container alignItems='center'>
					<Grid item xs={12} md={6}>
						<Box width={{xs: '1' ,md: '70%'}}>
							<Typography variant='h3' paragraph>
								<b>Turn your ideas into a&nbsp;
									<Box component='span' color='primary.main' display='inline-block'>
										<Typewriter
										  options={{
										    strings: ['success.', 'startup.', 'future.'],
										    autoStart: true,
										    loop: true,
											delay: 30,
											deleteSpeed: 0
										  }}
										/>
									</Box>
								</b>
							</Typography>
						</Box>

						<Typography color='textSecondary' paragraph>
							Webbee will make your product look modern and professional while saving you precious time.
						</Typography>

						<Box display='flex' style={{gap: '16px'}} flexWrap={{xs: 'wrap', md: 'unset'}} width={{xs: '1', md: 'auto'}}>
							<Button variant='contained' color='primary'>
									Purchase now
								</Button>

								<Button variant='outlined' color='primary'>
								View Documentation
							</Button>
						</Box>

					</Grid>

					<Grid item xs={12} md={6}>
				 		<Box p='24px'>
							<Rocket />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
		</>
	)
}

export default Component;