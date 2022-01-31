import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles'

const Home = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <section className={classNames(globalStyles.px, classes.hero, 'bg-no-repeat')}>

            </section>
        </main>
    );
};

export default Home;