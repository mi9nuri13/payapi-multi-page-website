import { Typography } from '@mui/material';
import classNames from 'classnames';
import { useGlobalStyles } from '../../styles'

const ScheduleDemo = () => {
    const globalStyles = useGlobalStyles();

    const submitHandler = event => {
        event.preventDefault();
    };

    return (
        <section 
            className={classNames('flex pt-8 pb-16 flex-col items-center md:flex-row md:justify-between',
            globalStyles.px)}>
            <Typography 
                component="h2" 
                data-aos="fade-left" 
                data-aos-duration="3000"
                variant="h5" 
                className={classNames('text-center md:text-4xl md:text-left font-bold', globalStyles.sanJuanBlueColor)}>
                Ready to start?
            </Typography>
            <form 
                className={classNames('mt-8 md:mt-0 sm:flex sm:items-stretch sm:rounded-full sm:bg-white')}
                data-aos="fade-right" 
                data-aos-duration="3000"
                onSubmit={submitHandler}>
                <input 
                    className={classNames('border-0 outline-none w-full sm:w-auto rounded-full py-2 px-3.5',
                    'sm:grow sm:rounded-br-none sm:rounded-tr-none', globalStyles.lightJuanBlueColor)}
                    placeholder="Enter email address"
                />
                <button 
                    className={classNames(globalStyles.darkPinkBg, globalStyles.darkPinkButton,
                    'border-0 outline-none w-full sm:w-auto mt-4 sm:mt-0 rounded-full text-white py-2.5 px-5')}>
                    Schedule a Demo
                </button>
            </form>
        </section>
    );
};

export default ScheduleDemo;