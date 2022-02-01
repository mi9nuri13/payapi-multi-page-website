import { Typography } from '@mui/material';
import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../../styles'
import { useMemo } from 'react';

const Card = ({ description, index, title }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const titleClasses = useMemo(() => [ classes.personalFinances, classes.banking, classes.payments ], [ classes ]);

    return (
        <article className={classNames('mb-8 relative', classes.card)}>
            <Typography 
                component="h2" 
                className={classNames('text-center sm:text-left md:text-center font-bold', globalStyles.sanJuanBlueColor, 
                classes.title, titleClasses[index])}
                variant="h6"
            >
                { title }
            </Typography>
            <Typography 
                variant="body2" 
                className={classNames(globalStyles.lightJuanBlueColor, 'text-center sm:text-left md:text-center text-base mt-4')}>
                { description }
            </Typography>
        </article>
    );
};

export default Card;