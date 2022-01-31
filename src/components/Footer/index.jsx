import classNames from 'classnames'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icons/logo.svg';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useGlobalStyles } from '../../styles'
import { useStyles } from './styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <footer className={classNames('flex flex-col items-center bg-no-repeat bg-center bg-cover pt-8 pb-12', 
            classes.footer)}>
            <div className={classNames('flex flex-col items-center sm:flex-row')}>
                <Link to="/">
                    <img 
                        alt="logo"
                        className={classNames('block')}
                        src={logo}
                    />
                </Link>
                <ul className={classNames('flex flex-col items-center mt-8 sm:flex-row',)}>
                    <li >
                        <Link to="/pricing" className={classNames('text-slate-200 sm:text-sky-700', 'color-transition', 
                            'md:mb-0 md:mt-0')}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="about-us" className={classNames('text-slate-200 sm:text-sky-700', 'color-transition', 
                            'md:mb-0 mt-4 block md:mt-0')} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={classNames('text-slate-200 sm:text-sky-700', 'color-transition', 
                            'md:mb-0 mt-4 block md:mt-0')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className={classNames('flex items-center mt-8 sm:flex-row',)}>
                <FacebookIcon className={classNames('text-white mr-4')} />
                <TwitterIcon className={classNames('text-white mr-4')} />
                <LinkedInIcon className={classNames('text-white')} />
            </ul>
        </footer>
    );
};

export default Footer;