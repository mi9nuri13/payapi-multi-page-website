import classNames from 'classnames'
import { useStyles } from './styles'
import Card from './Card'
import { useGlobalStyles } from '../../styles'
import { Link } from 'react-router-dom'
import { useCallback } from 'react';
import { Typography } from '@mui/material';
import { ReactComponent as GoogleLogo } from '../../assets/images/shared/google.svg';
import { ReactComponent as MicrosoftLogo } from '../../assets/images/shared/microsoft.svg';
import { ReactComponent as TeslaLogo } from '../../assets/images/shared/tesla.svg';
import { ReactComponent as NvidiaLogo } from '../../assets/images/shared/nvidia.svg';
import { ReactComponent as OracleLogo } from '../../assets/images/shared/oracle.svg';
import { ReactComponent as HewlettPackardLogo } from '../../assets/images/shared/hewlett-packard.svg';
import codeIllustration from '../../assets/images/home/illustration-easy-to-implement.svg';
import simpleUIIllustration from '../../assets/images/home/illustration-simple-ui.svg';

const Home = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    
    const submitHandler = event => {
        event.preventDefault();
    }

    const ImageContainer = useCallback(({ alt, children, image }) => (
        <div className={classNames('mb-8 w-1/2', classes.companyImageContainer)}>
            { image }
        </div>
    ), [ classes ]);

    return (
        <main>
            <section className={classNames(globalStyles.px, classes.hero, 
                'bg-no-repeat flex items-center flex-col justify-end pb-16 md:justify-center sm:items-start')}
                data-aos="fade-up" data-aos-duration="3000">
                <div className={classNames(globalStyles.px, classes.heroContent, 'md:px-0')}>
                    <h1 className={classNames('text-center md:text-left font-bold text-4xl leading-9', 
                        globalStyles.sanJuanBlueColor, classes.heroTitle)}>
                        Start building with our APIs for absolutely free.
                    </h1>
                    <form 
                        className={classNames('mt-8 sm:flex sm:items-stretch sm:rounded-full sm:bg-white')}
                        onSubmit={submitHandler}>
                        <input 
                            className={classNames('border-0 outline-none w-full sm:w-auto rounded-full py-2 px-3.5',
                            'sm:grow sm:rounded-br-none sm:rounded-tr-none', globalStyles.lightJuanBlueColor)}
                            placeholder='Enter email address'
                        />
                        <button 
                            className={classNames(globalStyles.darkPinkBg, globalStyles.darkPinkButton,
                            'border-0 outline-none w-full sm:w-auto mt-4 sm:mt-0 rounded-full text-white py-2.5 px-5')}>
                            Schedule a Demo
                        </button>
                    </form>
                    <p className={classNames(globalStyles.lightJuanBlueColor, 'text-center mt-4 md:text-left')}>
                        Have any questions? 
                        <Link to="contact-us" className={classNames('font-bold', 'ml-3')}>
                            Contact us
                        </Link>
                    </p>
                </div>
            </section>
            <section 
                className={classNames(globalStyles.px, globalStyles.mirageBlueBg, classes.companies,
                'pt-16 pb-12 md:pb-16 bg-no-repeat md:flex md:flex-row-reverse md:justify-between md:items-center mb-12')}
                data-aos="fade-up" data-aos-duration="3000">
                <div className={classNames('flex items-center justify-between flex-wrap', classes.companiesLogosContainer)}>
                    <ImageContainer alt="tesla" image={<TeslaLogo  className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                    <ImageContainer alt="microsoft" image={<MicrosoftLogo className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                    <ImageContainer alt="hewlettPackard" image={<HewlettPackardLogo className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                    <ImageContainer alt="oracle" image={<OracleLogo className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                    <ImageContainer alt="google" image={<GoogleLogo  className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                    <ImageContainer alt="nvidia" image={<NvidiaLogo  className={classNames('text-white mx-auto', classes.companiesLogos)}/>} />
                </div>
                <div className={classNames('mt-8 md:mt-0 flex flex-col items-center md:items-start', classes.companiesContent)}>
                    <Typography 
                        component="h2" 
                        variant="h6" 
                        className={classNames('text-white text-center md:text-left font-bold')}>
                        Who we work with
                    </Typography>
                    <Typography 
                        component="p" 
                        className={classNames('text-slate-300 text-center md:text-left pt-4')}>
                        Today, millions of people around the world have successfully connected 
                        their accounts to apps they love using our API. We provide 
                        developers with the tools they need to create easy and accessible 
                        experiences for their users. 
                    </Typography>
                    <Link to="about-us" className={classNames('rounded-full mt-8 px-6 border-solid text-white border border-slate-300 py-2.5')}>
                        About
                    </Link>
                </div>
            </section>
            <section className={classNames(globalStyles.px, classes.services, 'md:mt-16 md:pt-8 md:pb-8 md:bg-no-repeat')}>
                <article className={classNames('pb-12 md:flex md:justify-between md:items-center')}>
                    <div 
                        className={classNames(classes.formCodeImageContainer)}
                        data-aos="fade-right" data-aos-duration="3000">
                        <img 
                            alt="code"
                            className={classNames('block h-full w-full')}
                            src={codeIllustration}  
                        />
                    </div>
                    <div 
                        className={classNames('sm:mt-8 md:mt-0', classes.formCodeContent)}
                        data-aos="fade-left" data-aos-duration="3000">
                        <Typography 
                            component="h2" 
                            variant="h5" 
                            className={classNames('text-center md:text-left font-bold', globalStyles.sanJuanBlueColor)}>
                            Easy to implement
                        </Typography>
                        <Typography 
                            variant="body2" 
                            className={classNames(globalStyles.lightJuanBlueColor, 'text-center md:text-left text-base mt-4')}>
                            Our API comes with just a few lines of code. You’ll be up and running 
                            in no time. We built our documentation page to integrate payments 
                            functionality with ease.
                        </Typography>
                    </div>
                </article>
                <article className={classNames('pb-12 md:flex md:justify-between md:flex-row-reverse md:items-center', 
                    classes.simpleUIContent)}>
                    <div 
                        className={classNames(classes.simpleUIImageContainer)}
                        data-aos="fade-left" data-aos-duration="3000">
                        <img 
                            alt="code"
                            className={classNames('block h-full w-full')}
                            src={simpleUIIllustration}  
                        />
                    </div>
                    <div 
                        className={classNames('mt-8 md:mt-0', classes.formCodeContent)}
                        data-aos="fade-right" data-aos-duration="3000">
                        <Typography 
                            component="h2" 
                            variant="h5" 
                            className={classNames('text-center md:text-left font-bold', globalStyles.sanJuanBlueColor)}>
                            Simple UI &amp; UX
                        </Typography>
                        <Typography 
                            variant="body2" 
                            className={classNames(globalStyles.lightJuanBlueColor, 'text-center md:text-left text-base mt-4')}>
                            Our pre-built form is easy to integrate in your app or website’s 
                            checkout flow and designed to optimize conversion. 
                        </Typography>
                    </div>
                </article>
            </section>
            <section className={classNames(globalStyles.px, 'flex flex-col md:flex-row items-stretch pt-8 pb-12',
                'md:justify-between')}>
                <Card 
                    description="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
                    index={0}
                    title="Personal Finances"
                    dataAOS="fade-up" 
                    dataAOSDutation="3000"
                />
                <Card 
                    description="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
                    index={1}
                    title={<>Banking &amp; Coverage</>}
                    dataAOS="fade-down" 
                    dataAOSDutation="3000"
                />
                <Card 
                    description="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
                    index={2}
                    title="Consumer Payments"
                    dataAOS="fade-up" 
                    dataAOSDutation="3000"
                />
            </section>
        </main>
    );
};

export default Home;