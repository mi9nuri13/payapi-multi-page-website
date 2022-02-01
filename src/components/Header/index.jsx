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
        <nav className={classNames('pt-4 md:ml-8 sm:pt-0 md:relative h-full', classes.headerNav)}>
            <Hidden smUp>
                <Button onClick={menuClickHandler}><CloseIcon classes={{ root: 'text-white'}} /></Button>
            </Hidden>
            <List component="ul" className={classNames('flex flex-col sm:flex-row',)}>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/pricing" >
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white sm:text-sky-700', 'color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0')}} primary="Pricing" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/about-us">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white sm:text-sky-700', 'color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0')}} primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/contact">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white sm:text-sky-700', 'color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0')}} primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden smUp>
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
        <header className={classNames('flex items-center justify-between py-4 absolute w-full', globalStyles.px)}>
            <div elevation={0} className={classNames('flex items-center')}>
                <Link to="/">
                    <img 
                        alt="logo"
                        className={classNames('block')}
                        src={logo}
                    />
                </Link>
                <Hidden smDown>
                    { headerNavigation }
                </Hidden>
                <Hidden smUp>
                    <Drawer anchor="right" open={canIOpenNavBar} onClose={menuClickHandler} classes={{ paper: classes.headerDrawe}}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </div>
            <div elevation={0} className={classNames('flex items-center')}>
                <Hidden smDown>
                    <Link to="/resume" className={classNames('')}>
                        <button 
                            className={classNames(classes.headerGetStarted, globalStyles.darkPinkBg, 
                            'border-0 outline-none rounded-full text-white py-2 px-5')}>
                            Schedule a Demo
                        </button>
                    </Link>
                </Hidden>
                <Hidden smUp>
                    <button 
                        aria-label="menu" 
                        className={classNames('bg-transparent border-0 outline-none',)} 
                        onClick={menuClickHandler}>
                        <MenuIcon classes={{ root: 'text-sky-700'}} />
                    </button>
                </Hidden>
            </div>
        </header>
    );
};

export default Header;