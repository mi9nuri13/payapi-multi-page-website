import { makeStyles } from '@mui/styles'
import circlePattern from '../../assets/images/icons/bg-pattern-circle.svg';
import phoneIllustration from '../../assets/images/home/illustration-phone-mockup.svg';

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `url(${phoneIllustration}), url(${circlePattern})`,
        backgroundPosition: 'center top 83px, center top -319px',
        backgroundSize: '240px, 600px',
        height: 500
    }
}))