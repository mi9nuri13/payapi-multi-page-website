import { makeStyles } from '@mui/styles'
import circlePattern from '../../assets/images/icons/bg-pattern-circle.svg';

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#1B262F',
        backgroundImage: `url(${circlePattern})`,
        backgroundPosition: 'center bottom -236px'
    }
}))