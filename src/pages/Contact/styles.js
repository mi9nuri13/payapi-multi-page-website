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
    }
}));