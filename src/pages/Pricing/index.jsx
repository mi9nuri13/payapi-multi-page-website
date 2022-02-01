import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Typography } from '@mui/material';

const Pricing = () => {
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <section 
                className={classNames(globalStyles.hero, 'bg-no-repeat')}>
                <Typography 
                    className={classNames('font-bold text-center', globalStyles.sanJuanBlueColor)}
                    component="h1"
                    variant="h5">
                    Pricing
                </Typography>
            </section>
        </main>
    );
};

export default Pricing;