import React from 'react';
import Transition from '../transition';

export default function Banner() {
    return (
        <main className="banner !bg-white relative md:pt-20">
            <Transition>
                <div className="container max-w-6xl pt-20 font-outfit relative z-10">
                    <div className="max-w-xl mx-auto text-center pb-28">
                        <h1 className="sm:text-6xl text-5xl font-bold mb-6">
                            Pick a plan that's right for you</h1>
                        <p className="text-lg mb-16">Pricing plans for businesses at every stage of growth. Try our risk-free for 14 days. No credit card required.
                        </p>
                        <p className="text-lg">No extra charges. No hidden fees.
                        </p>
                    </div>
                </div>
            </Transition>
        </main>
    )
}