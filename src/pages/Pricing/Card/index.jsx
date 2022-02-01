import classNames from 'classnames'
import { useGlobalStyles } from '../../../styles'
import { Divider, Typography } from '@mui/material';
import { useCallback } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { useStyles } from './styles';

const Card = ({ list, price, title }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const ListItem = useCallback(({ name, isChecked }) => (
        <li className={classNames('flex items-center mb-2.5', globalStyles.lightJuanBlueColor)}>
            { isChecked ? <CheckIcon className={classNames(globalStyles.darkPinkColor, 'mr-3')} /> : <span aria-label='not included in this plan' className={classNames('mr-3', classes.notChecked)}></span>}
            { name }
        </li>
    ), [ classes, globalStyles ])

    return (
        <article className={classNames('mb-16 flex flex-col items-center')}>
            <Typography 
                className={classNames('font-bold text-center', globalStyles.darkPinkColor)}
                component="h2"
                variant="h5">
                { title }
            </Typography>
            <Typography 
                className={classNames('font-bold mt-8 text-center', globalStyles.sanJuanBlueColor)}
                component="h3"
                variant="h4">
                ${ price }
            </Typography>
            <Divider className={classNames('border-slate-300 mt-8 w-full')} />
            <ul className={classNames('flex flex-col items-start mt-4 py-4')}>
                {
                    list.map(item => (
                        <ListItem { ...item } />
                    ))
                }
            </ul>
            <Divider className={classNames('border-slate-300 w-full')} />
            <button 
                className={classNames('rounded-full bg-transparent px-4 py-2 mt-8 border border-cyan-900 border-solid capitalize',
                globalStyles.sanJuanBlueColor)}>
                Request access
            </button>
        </article>
    );
};

export default Card;