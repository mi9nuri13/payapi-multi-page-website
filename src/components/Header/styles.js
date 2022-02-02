import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    headerDrawer: {
        backgroundColor: '#1B262F',
        width: '80%'
    },
    scheduleButton: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '.65rem',
            paddingRight: '.65rem'
        },
        [theme.breakpoints.up(620)]: {
            paddingLeft: '1rem',
            paddingRight: '1rem'
        }
    }
}))