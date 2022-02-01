import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { Typography } from '@mui/material';
import Card from './Card';
import { useMemo } from 'react';

const Pricing = () => {
    const globalStyles = useGlobalStyles();

    const cardsContent = useMemo(() => [
        {
            description: 'Build and test using our core set of products with up to 100 API requests ',
            price: '0.00',
            title: 'Free Plan',
            list: [
                {
                    isChecked: true,
                    name: 'Transactions'
                },
                {
                    isChecked: true,
                    name: 'Auth'
                },
                {
                    isChecked: true,
                    name: 'Identity'
                },
                {
                    isChecked: false,
                    name: 'Investments'
                },
                {
                    isChecked: false,
                    name: 'Assets'
                },
                {
                    isChecked: false,
                    name: 'Liabilities'
                },
                {
                    isChecked: false,
                    name: 'Income'
                }
            ]
        },{
            description: 'Launch your project with unlimited requests and no contractual minimums ',
            price: '249.00',
            title: 'Basic Plan',
            list: [
                {
                    isChecked: true,
                    name: 'Transactions'
                },
                {
                    isChecked: true,
                    name: 'Auth'
                },
                {
                    isChecked: true,
                    name: 'Identity'
                },
                {
                    isChecked: true,
                    name: 'Investments'
                },
                {
                    isChecked: true,
                    name: 'Assets'
                },
                {
                    isChecked: false,
                    name: 'Liabilities'
                },
                {
                    isChecked: false,
                    name: 'Income'
                }
            ]
        },{
            description: 'Get tailored solutions, volume pricing, and dedicated support for your team ',
            price: '499.00',
            title: 'Premium Plan',
            list: [
                {
                    isChecked: true,
                    name: 'Transactions'
                },
                {
                    isChecked: true,
                    name: 'Auth'
                },
                {
                    isChecked: true,
                    name: 'Identity'
                },
                {
                    isChecked: true,
                    name: 'Investments'
                },
                {
                    isChecked: true,
                    name: 'Assets'
                },
                {
                    isChecked: true,
                    name: 'Liabilities'
                },
                {
                    isChecked: true,
                    name: 'Income'
                }
            ]
        }
    ], []);


    return (
        <main>
            <section 
                className={classNames(globalStyles.px, globalStyles.hero, 'bg-no-repeat')}>
                <Typography 
                    className={classNames('font-bold text-center', globalStyles.sanJuanBlueColor)}
                    component="h1"
                    variant="h5">
                    Pricing
                </Typography>
                <div className={classNames('flex flex-col items-stretch mt-8')}>
                    {
                        cardsContent.map((item, index) => (
                            <Card key={index} { ...item } />
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default Pricing;