import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Hidden from '@material-ui/core/Hidden';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness3OutlinedIcon from '@material-ui/icons/Brightness3Outlined';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import {ReactComponent as Logo} from '../assets/icons/icon-logo.svg'

import {ThemeWrapper} from '../App'

const Spacing = () => <>&nbsp;&nbsp;
&nbsp;&nbsp;</>

const useStyles = makeStyles((theme) => ({
	root: ({darkMode}) => ({
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.primary,
		boxShadow: darkMode ? 'rgb(0 0 0 / 25%) 0px 3px 6px 0px' : 'rgb(140 152 164 / 25%) 0px 3px 6px 0px'
	})
}))

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
	  <Slide appear={false} direction="down" in={!trigger}>
		{children}
	  </Slide>
	);
  }

export default () => {
	const {toggleTheme, darkMode, theme} = useContext(ThemeWrapper);
	const classes = useStyles({darkMode});

	console.log('toogleTheme', {toggleTheme, darkMode, theme})

	return (
		<>
			<HideOnScroll>
				<AppBar classes={{root: classes.root}}>
					<Toolbar>
						<Container maxWidth='lg'>
							<Box display='flex' justifyContent='space-between'>
								<Box display='flex' alignItems='center'>
									<IconButton color='inherit'>
										<MenuIcon />
									</IconButton>

									<Spacing />

									<Logo height='30px' width='30px' />
								</Box>


								<Box display='flex' flex='1 auto' justifyContent='flex-end' alignItems='center' gap='5px'>
									<IconButton
										onClick={toggleTheme}
										color='inherit'
									>
										{darkMode ? <WbSunnyOutlinedIcon /> : <Brightness3OutlinedIcon />}
									</IconButton>

									<Spacing />

									<Typography>
										Home
									</Typography>

									<Spacing />

									<Typography>
										Documentation
									</Typography>

									<Spacing />

									<Hidden mdDown>
									<Button color='primary' variant='contained'>
										Purchase now
									</Button>
									</Hidden>

								</Box>
							</Box>
						</Container>
					</Toolbar>
				</AppBar>
			</HideOnScroll>

			<Toolbar />
		</>
	)
}