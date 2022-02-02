import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Hidden, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useCallback } from 'react'
import meetingImage from '../../assets/images/about/mobile/image-team-members.jpg';
import meetingTabletImage from '../../assets/images/about/tablet/image-team-members.jpg';
import meetingDesktopImage from '../../assets/images/about/desktop/image-team-members.jpg';

const About = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const ContentCard = useCallback(({ description, title }) => (
        <div className={classNames('mb-8 sm:flex sm:items-start sm:justify-between')}>
            <Typography 
                className={classNames('font-bold capitalize text-center sm:text-left', globalStyles.sanJuanBlueColor)}
                component="h2"
                variant="h5">
                    { title }
            </Typography>
            <Typography 
                className={classNames('text-center sm:text-left text-base mt-4 sm:mt-0 grow', 
                globalStyles.lightJuanBlueColor, classes.contentCardDescription)}
                component="p"
                variant="body2">
                    { description }
            </Typography>
        </div>
    ), [ classes, globalStyles ]);

    const Paragraph = useCallback(({ description, highlight }) => (
        <Typography 
            className={classNames('text-center text-base mb-8 flex flex-col items-center', 
            globalStyles.lightJuanBlueColor,)}
            component="p"
            variant="body2">
                { description }
                <span className={classNames(globalStyles.darkPinkColor, 'mt-2.5 text-4xl font-bold')}>
                    { highlight }
                </span>
        </Typography>
    ), [ globalStyles ])

    return (
        <main>
            <section className={classNames('bg-no-repeat flex md:mb-16', globalStyles.hero, globalStyles.px)}>
                <div className={classNames(classes.heroContent)}>
                    <Typography 
                        className={classNames('font-bold text-center md:text-left mb-16', 
                        globalStyles.sanJuanBlueColor, classes.heroContentTitle)}
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
                </div>
            </section>
            <div className={classNames(classes.meetingImage, 'mt-12 md:mt-16 mb-8')}>
                <Hidden smUp>
                    <img 
                        alt="meeting"
                        className={classNames('block w-full h-full object-cover')}
                        src={meetingImage}
                    />
                </Hidden>
                <Hidden smDown mdUp>
                    <img 
                        alt="meeting"
                        className={classNames('block w-full h-full object-cover')}
                        src={meetingTabletImage}
                    />
                </Hidden>
                <Hidden mdDown>
                    <img 
                        alt="meeting"
                        className={classNames('block w-full h-full object-cover')}
                        src={meetingDesktopImage}
                    />
                </Hidden>
            </div>
            <section className={classNames(globalStyles.px)}>
                <div className={classNames(classes.heroContent)}>
                    <div 
                        className={classNames('flex flex-col items-center pt-8 border-slate-300 border-y',
                        'border-solid mb-12')}>
                        <Paragraph 
                            description="Team Members"
                            highlight="300+"
                        />
                        <Paragraph 
                            description="Offices in the US"
                            highlight="3"
                        />
                        <Paragraph 
                            description="Transactions analyzed"
                            highlight="10M+"
                        />
                    </div>
                    <ContentCard 
                        description="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
                        title="Our business"
                    />
                    <ContentCard 
                        description="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
                        title="The people"
                    />
                </div>
            </section>
        </main>
    );
};

export default About;