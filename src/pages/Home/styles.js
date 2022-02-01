import { makeStyles } from '@mui/styles'
import circlePattern from '../../assets/images/icons/bg-pattern-circle.svg';
import phoneIllustration from '../../assets/images/home/illustration-phone-mockup.svg';

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `url(${phoneIllustration}), url(${circlePattern})`,
        backgroundPosition: 'center top 83px, center top -319px',
        backgroundSize: '240px, 600px',
        height: 765,
        [theme.breakpoints.up('sm')]: {
            backgroundPosition: 'center top 83px, center top -634px',
            backgroundSize: '240px, 900px',
        },
        [theme.breakpoints.up(800)]: {
            backgroundPosition: 'center top 83px, center top -725px',
            backgroundSize: '240px, 1020px',
            height: 500,

        },
        [theme.breakpoints.up('md')]: {
            backgroundPosition: 'right 121px top 83px, right -100px top -64px',
            backgroundSize: '270px, contain',

        },
        [theme.breakpoints.up(1200)]: {
            backgroundPosition: 'right 190px top 83px, right -100px top -173px',
            backgroundSize: '323px, 622px',
            height: 580,

        }
    },
    heroTitle: {
        [theme.breakpoints.up(1100)]: {
            fontSize: '2.75rem !important',
            lineHeight: '2.9rem !important'
        }
    },
    companies: {
        backgroundImage: `url(${circlePattern})`,
        backgroundPosition: 'center top -200px',
        backgroundSize: 400,
        [theme.breakpoints.up(1200)]: {
            backgroundPosition: 'left -152px top -192px',
            backgroundSize: 514,
        }
    },
    companiesLogosContainer: {
        [theme.breakpoints.up(1200)]: {
            maxWidth: '46% !important'
        }
    },
    companyImageContainer: {
        height: 24,
        [theme.breakpoints.up('sm')]: {
            width: '31% !important'
        }
    },
    companyImage: {
        width: 121
    },
    companiesLogos: {
        '& path': {
            fill: 'currentcolor !important'
        }
    },
    companiesContent: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '45% !important'
        }
    },
    formCodeImageContainer: {
        height: 300
    }
}))