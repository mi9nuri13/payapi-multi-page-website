import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    heroContent: {
        [theme.breakpoints.up('md')]: {
            padding: '0 5%'
        }
    },
    heroContentTitle: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%'
        }
    },
    contentCardDescription: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '70%'
        }
    }
}));