import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Typography } from '@mui/material';
import { useCallback } from 'react'
import CheckIcon from '@mui/icons-material/Check';

const Card = ({ list, title }) => {
    const globalStyles = useGlobalStyles();

    const ListItem = useCallback(({ name, isChecked }) => (
        <li className={classNames('flex items-center')}>
            { isChecked ? <CheckIcon className={classNames(globalStyles.darkPinkColor)} /> : <span aria-label='not included in this plan' className='mr-3'></span>}
            { name }
        </li>
    ), [ globalStyles ])

    return (
        <article>
            <Typography 
                className={classNames('font-bold text-center', globalStyles.darkPinkColor)}
                component="h2"
                variant="h5">
                { title }
            </Typography>
            <Typography 
                className={classNames('font-bold mt-8 text-center', globalStyles.sanJuanBlueColor)}
                component="h3"
                variant="4">
                { title }
            </Typography>
            <ul className={classNames('flex flex-col mt-4 py-4 items-start')}>
                {
                    list.map(item => (
                        <ListItem { ...item } />
                    ))
                }
            </ul>
            <button className={classNames('rounded-full bg-transparent px-1.5 py-3.5 mt-4 capitalize')}>
                Request access
            </button>
        </article>
    );
};

export default Card;