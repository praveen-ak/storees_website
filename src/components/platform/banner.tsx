import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Transition from '../transition';

const TEXTS = ['One Platform', 'One Marketing', 'One Executives'];

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
        <main className="banner relative md:pt-20">
            <Transition>
                <div className="container max-w-6xl pt-20 font-outfit relative z-10">
                    <div className="max-w-5xl mx-auto text-center pb-20">
                        <h1 className="sm:text-6xl text-4xl font-bold mb-6">
                            <span className='text-blue-700 mr-2'>
                                Data-Driven
                            </span>
                            Marketing Solution, Designed To Secure Lifelong Customers</h1>
                        <p className="text-xl mb-6 font-poppins">Create powerful eCommerce experience backed with hyper personalised marketing messages via email, whatsapp, push notification and SMS to excite your customers and boost your revenue.</p>
                        <form className="max-w-lg mx-auto">
                            <div className="flex flex-grow p-2 border bg-white border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 ">
                                <input type="text" id="email" className="block text-ellipsis bg-white border-0 p-3 focus:outline-0 w-full text-gray-900 text-base" placeholder="Enter your email address" />
                                <button type="submit" className="px-6 font-semibold transition w-60 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 inline-block text-white rounded-lg">Get a Demo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>
        </main>
    )
}