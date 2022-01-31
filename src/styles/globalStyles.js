import { makeStyles } from "@mui/styles";

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
    lightJuanBlueColor: {
        color: '#6C8294'
    }
}));