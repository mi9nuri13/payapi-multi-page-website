import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';

const Contact = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <section className={classNames('bg-no-repeat flex flex-col items-stretch', globalStyles.hero, globalStyles.px)}>
                <Typography 
                    className={classNames('font-bold text-center md:text-left mb-16', 
                    globalStyles.sanJuanBlueColor, classes.heroContentTitle)}
                    component="h1"
                    variant="h4">
                        Submit a help request and we’ll get in touch shortly.
                </Typography>
                <div>
                    <form>
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Name" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Email Address" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Company Name" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Title" 
                            variant="standard" 
                        />
                        <TextField 
                            classes={{ root: classNames(classes.textField)}}
                            className={classNames('mb-2.5')}
                            fullWidth
                            label="Message" 
                            multiline
                            rows={5}
                            variant="standard" 
                        />
                        <FormControlLabel 
                            classes={{ root: classNames('mt-4', classes.formControlLabel)}}
                            control={
                                <Checkbox 
                                    defaultChecked 
                                />
                            } 
                            label="Stay up-to-date with company announcements and updates to our API" 
                        />
                        <button 
                            className={classNames('rounded-full bg-transparent px-8 py-1.5 mt-5 border border-cyan-900 border-solid capitalize',
                            globalStyles.sanJuanBlueColor, 'mr-auto')}>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;