import { Button, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
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
        <nav className={classNames('pt-8 md:ml-8 sm:pt-0 md:relative sm:px-0 h-full', globalStyles.px)}>
            <Hidden smUp>
                <IconButton 
                    className={classNames('block ml-auto')}
                    onClick={menuClickHandler}>
                    <CloseIcon classes={{ root: 'text-white'}} />
                </IconButton>
                <Divider className={classNames('w-full mt-4 mb-4 border-slate-200')} />
            </Hidden>
            <List component="ul" className={classNames('flex flex-col item-center sm:flex-row sm:pb-0 sm:pt-0',)}>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/pricing" >
                    <ListItemButton className={classNames('sm:pb-0 sm:pt-0')}>
                        <ListItemText classes={{ root: classNames('sm:text-sky-700 text-center color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0', globalStyles.lightJuanBlueColor, globalStyles.lightJuanBlueColorHover)}} primary="Pricing" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/about-us">
                    <ListItemButton className={classNames('sm:pb-0 sm:pt-0')}>
                        <ListItemText classes={{ root: classNames('sm:text-sky-700 text-center color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0', globalStyles.lightJuanBlueColor, globalStyles.lightJuanBlueColorHover)}} primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/contact">
                    <ListItemButton className={classNames('sm:pb-0 sm:pt-0')}>
                        <ListItemText classes={{ root: classNames('sm:text-sky-700 text-center color-transition', classes.headerNavItemText, 
                            'md:mb-0 md:mt-0', globalStyles.lightJuanBlueColor, globalStyles.lightJuanBlueColorHover)}} primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden smUp>
                <Link to="/contact" onClick={clickHandler} className={classNames('no-underline', classes.contactMeLink)}>
                    <button 
                        className={classNames('w-full border-0 py-3 rounded-full outline-none font-bold text-white', 
                        globalStyles.darkPinkBg, classes.headerContactMe, 'bg-transition', globalStyles.darkPinkButton,)}>
                        Schedule a Demo
                    </button>
                </Link>
            </Hidden>
        </nav>
    ), [ classes, clickHandler, globalStyles, menuClickHandler, ]);

    return (
        <header className={classNames('flex items-center justify-between py-4 sm:pt-6 absolute w-full', globalStyles.px)}>
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
                    <Drawer 
                        anchor="right" 
                        open={canIOpenNavBar} 
                        onClose={menuClickHandler} 
                        classes={{ paper: classes.headerDrawer,}}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </div>
            <div elevation={0} className={classNames('flex items-center')}>
                <Hidden smDown>
                    <Link to="/contact" className={classNames('')}>
                        <button 
                            className={classNames(globalStyles.darkPinkBg, globalStyles.darkPinkButton, classes.scheduleButton,
                            'border-0 outline-none rounded-full text-white py-2.5')}>
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