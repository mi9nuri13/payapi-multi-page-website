import { makeStyles } from "@mui/styles";
import circlePattern from '../assets/images/icons/bg-pattern-circle.svg';

export const useGlobalStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        }
    },
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    svgColor: {
        '& path': {
            fill: 'currentcolor !important'
        },
        '& g': {
            fill: 'currentcolor !important'
        }
    },
    darkPinkBg: {
        backgroundColor: '#BA4270'
    },
    mirageBlueBg: {
        backgroundColor: '#1B262F'
    },
    sanJuanBlueBg: {
        backgroundColor: '#36536B'
    },
    sanJuanBlueColor: {
        color: '#36536B'
    },
    darkPinkColor: {
        color: '#BA4270'
    },
    lightJuanBlueColor: {
        color: '#6C8294'
    },
    hero: {
        backgroundImage: `url(${circlePattern})`,
        backgroundPosition: 'right -136px top -207px',
        backgroundSize: '300px',
        paddingTop: '7rem'
    }
}));