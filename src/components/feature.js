import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';

import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

const CircleIcon = ({children}) => {
	return (
		<Box m='20px' height='60px' width='60px' borderRadius='100%' bgcolor='primary.light' color='primary.main' display='inline-flex' alignItems='center' justifyContent='center'>
			<CodeOutlinedIcon color='inherit' fontSize='small' />
		</Box>
	)
}

export default () => {
	return (
		<>

		<Container maxWidth='lg'>
			<Box py='64px' px='16px'>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Box textAlign='center'>
							<CircleIcon />

							<Typography variant='h6'>
								Built for developers
							</Typography>

							<Typography variant='subtitle1' color='textSecondary'>
							Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.


							</Typography>
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Box textAlign='center'>
							<CircleIcon />

							<Typography variant='h6'>
								Built for developers
							</Typography>

							<Typography variant='subtitle1' color='textSecondary'>
							Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.


							</Typography>
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Box textAlign='center'>
							<CircleIcon />

							<Typography variant='h6'>
								Built for developers
							</Typography>

							<Typography variant='subtitle1' color='textSecondary'>
							Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.


							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
		</>
	)
}