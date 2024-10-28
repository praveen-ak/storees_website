import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Transition from '../transition';

const TEXTS = ['Ecommerce', 'Marketing', 'Executives'];

export default function Banner() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <main className="banner chart relative md:pt-20">
            <Transition>
                <div className="container max-w-6xl pt-20 font-outfit relative z-10">
                    <div className="max-w-3xl mx-auto text-center pb-12">
                        <h1 className="sm:text-6xl text-5xl font-bold mb-6">Supercharged
                            <span>
                                <TextTransition className='!inline-flex mx-2 text-blue-700' springConfig={presets.gentle}> {TEXTS[index % TEXTS.length]} </TextTransition>
                            </span>
                            For Smarter sales strategy.</h1>
                        <p className="text-xl mb-6">Create seamless eCommerce journeys that excite your customers without of the box
                            retention & Marketing Solutions that work together.
                        </p>
                        <form className="max-w-lg mx-auto">
                            <div className="flex flex-grow p-2 border bg-white border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 ">
                                <input type="text" id="email" className="block text-ellipsis bg-white border-0 p-3 focus:outline-0 w-full text-gray-900 text-base" placeholder="Enter your email address" />
                                <button type="submit" className="px-6 font-semibold transition w-60 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 inline-block text-white rounded-lg">Get Started</button>
                            </div>
                        </form>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
                        <div className="text-center mb-5">
                            <h4 className="font-semibold mb-3 text-2xl">Start</h4>
                            <p>Start Building Multiple sales channels to grow your audience</p>
                        </div>
                        <div className="text-center mb-5">
                            <h4 className="font-semibold mb-3 text-2xl">Track</h4>
                            <p>Track customers interactions with your business to gather Deeper Insights </p>
                        </div>
                        <div className="text-center mb-5">
                            <h4 className="font-semibold mb-3 text-2xl">Engage</h4>
                            <p>Engage customers with Personalized marketing campaigns and monitize opportunities</p>
                        </div>
                        <div className="text-center mb-5">
                            <h4 className="font-semibold mb-3 text-2xl">Scale</h4>
                            <p>Scale your business to the next level with Automation, AI and Targeted Ads. </p>
                        </div>
                    </div>
                </div>
            </Transition>
        </main>
    )
}