import { Button, Drawer, Hidden, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import classNames from 'classnames'
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './styles'
import { Link } from 'react-router-dom';
import React, { useState, useCallback, useMemo } from 'react';
import logo from '../../assets/images/icons/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalStyles } from '../../styles'


const Header = () => {
    //const display = useDisplay();
    //const text = useTypography();
   // const bg = useBackground();
    //const responsive = useResponsive();
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    
    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);
    const clickHandler = useCallback(() => setCanIOpenNavBar(false), []);

    const headerNavigation = useMemo(() => (
        <nav className={classNames('pt-4 md:ml-8 md:pt-0 md:relative h-full', classes.headerNav)}>
            <Hidden mdUp>
                <Button onClick={menuClickHandler}><CloseIcon classes={{ root: 'text-white'}} /></Button>
            </Hidden>
            <List component="ul" className={classNames('flex flex-col md:flex-row',)}>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/" >
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white', 'color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0')}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/projects">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white', 'color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0')}} primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/resume">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white', 'color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0')}} primary="Resume" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden mdUp>
                <div elevation={0} className={classNames('flex flex-col items-stretch absolute w-full bg-transparent',  
                    classes.headerDrawerBottom)}>
                    <Link to="/resume" onClick={clickHandler} className={classNames('no-underline', classes.contactMeLink)}>
                        <Button 
                            className={classNames('w-full font-bold text-white', classes.headerGetStarted, 
                            classes.headerContactMe, 'bg-transition')}>
                            Contact me
                        </Button>
                    </Link>
                </div>
            </Hidden>
        </nav>
    ), [ classes, clickHandler, menuClickHandler, ]);

    return (
        <header className={classNames('flex items-center justify-between py-4', globalStyles.px)}>
            <div elevation={0} className={classNames('flex items-center')}>
                <Link to="/">
                    <img 
                        alt="logo"
                        className={classNames('block')}
                        src={logo}
                    />
                </Link>
                <Hidden mdDown>
                    { headerNavigation }
                </Hidden>
                <Hidden mdUp>
                    <Drawer anchor="right" open={canIOpenNavBar} onClose={menuClickHandler} classes={{ paper: classes.headerDrawe}}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </div>
            <div elevation={0} className={classNames('flex items-center')}>
                <Hidden mdDown>
                    <Link to="/resume" className={classNames()}>
                        <Button className={classNames(classes.headerGetStarted)}>Contact Me</Button>
                    </Link>
                </Hidden>
                <Hidden mdUp>
                    <button 
                        aria-label="menu" 
                        className={classNames('bg-transparent border-0 outline-none',)} 
                        onClick={menuClickHandler}>
                        <MenuIcon />
                    </button>
                </Hidden>
            </div>
        </header>
    );
};

export default Header;