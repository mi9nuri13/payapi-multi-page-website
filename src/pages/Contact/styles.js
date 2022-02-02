import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    textField: {
        '& .MuiInputLabel-root': {
            color: '#6C8294'
        }
    },
    formControlLabel: {
        '& .MuiTypography-root': {
            color: '#6C8294',
            fontSize: '.92rem'
        }
    },
    companyImageContainer: {
        height: 24,
        [theme.breakpoints.up('sm')]: {
            width: '31% !important'
        },[theme.breakpoints.up('md')]: {
            height: 21,
            width: '26% !important'
        },[theme.breakpoints.up(1200)]: {
            height: 24,
            width: '31% !important'
        }
    },
}));