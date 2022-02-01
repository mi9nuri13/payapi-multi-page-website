import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Typography } from '@mui/material';
import { useStyles } from './styles';
import { useCallback } from 'react'

const About = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const ContentCard = useCallback(({ description, title }) => (
        <div className={classNames('mb-8')}>
            <Typography 
                className={classNames('font-bold capitalize text-center', globalStyles.sanJuanBlueColor)}
                component="h1"
                variant="h5">
                    { title }
            </Typography>
            <Typography 
                className={classNames('text-center text-base mt-4', globalStyles.lightJuanBlueColor)}
                component="p"
                variant="body2">
                    { description }
            </Typography>
        </div>
    ), [ globalStyles ])

    return (
        <main>
            <section className={classNames('bg-no-repeat', globalStyles.hero, globalStyles.px)}>
                <Typography 
                    className={classNames('font-bold text-center mb-16', globalStyles.sanJuanBlueColor)}
                    component="h1"
                    variant="h4">
                        We empower innovators by delivering access to the financial system
                </Typography>
                <ContentCard 
                    description="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
                    title="Our vision"
                />
                <ContentCard 
                    description="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
                    title="Our business"
                />
            </section>
        </main>
    );
};

export default About;