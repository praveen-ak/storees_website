import { useEffect, useMemo, useState } from "react";
type PeriodUnit = 'year' | 'month';
interface ItemPrice {
    id: string;
    name: string;
    description?: string;
    currencyCode: string;
    price: number;
    period: number;
    periodUnit: string;
}
export default function Plan() {
    const [periodUnit, setPeriodUnit] = useState<PeriodUnit>('month');
    const itemPrices: ItemPrice[] = [
        {
            id: 'cbdemo_basic-USD-monthly',
            name: 'Basic',
            description: 'For early-stage startups that want to spend more time developing and less on manual operations.',
            currencyCode: 'USD',
            price: 400,
            period: 1,
            periodUnit: 'month',
        },
        {
            id: 'cbdemo_intermediary-USD-monthly',
            name: 'Intermediary',
            description:
                'For agile startups that want to grow their revenue with quick experiments and data-driven decision making.',
            currencyCode: 'USD',
            price: 600,
            period: 1,
            periodUnit: 'month',
        },
        {
            id: 'cbdemo_advanced-USD-monthly',
            name: 'Advanced',
            description: 'For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.',
            currencyCode: 'USD',
            price: 750,
            period: 1,
            periodUnit: 'month',
        },
        {
            id: 'cbdemo_basic-USD-yearly',
            name: 'Basic',
            description: 'For early-stage startups that want to spend more time developing and less on manual operations.',
            currencyCode: 'USD',
            price: 400000,
            period: 1,
            periodUnit: 'year',
        },
        {
            id: 'cbdemo_intermediary-USD-yearly',
            name: 'Intermediary',
            description:
                'For agile startups that want to grow their revenue with quick experiments and data-driven decision making.',
            currencyCode: 'USD',
            price: 600000,
            period: 1,
            periodUnit: 'year',
        },
        {
            id: 'cbdemo_advanced-USD-yearly',
            name: 'Advanced',
            description: 'For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.',
            currencyCode: 'USD',
            price: 750000,
            period: 1,
            periodUnit: 'year',
        },
    ];
    const itemPricesToDisplay = itemPrices.filter((item) => item.periodUnit === periodUnit);
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -top-32 z-10">
            <div className="sm:flex sm:flex-col sm:align-center">
                <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
                    <button
                        onClick={() => setPeriodUnit('month')}
                        type="button"
                        className={`${periodUnit === 'month'
                            ? 'relative w-1/2 bg-primary border-zinc-800 shadow-sm text-white'
                            : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                            } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
                    >
                        Monthly billing
                    </button>
                    <button
                        onClick={() => setPeriodUnit('year')}
                        type="button"
                        className={`${periodUnit === 'year'
                            ? 'relative w-1/2 bg-primary border-zinc-800 shadow-sm text-white'
                            : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                            } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
                    >
                        Yearly billing
                    </button>
                </div>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-3xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                {itemPricesToDisplay.map((itemPrice, idx) => {
                    return (
                        <div key={itemPrice.id} className='rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'>
                            <div className="p-6">
                                <h2 className="text-2xl leading-6 font-semibold text-white">{itemPrice.name}</h2>
                                <p className="mt-4 text-zinc-300">{itemPrice.description}</p>
                                <p className="mt-12">
                                    <span className="text-5xl font-extrabold white">${itemPrice.price}</span>
                                    <span className="text-base font-medium text-zinc-100">/{periodUnit}</span>
                                </p>
                                <div data-cb-type="checkout" data-cb-item-0={itemPrice.id} data-cb-item-0-quantity="1">
                                    <button
                                        className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-center hover:bg-zinc-900 hover:border-primary"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}