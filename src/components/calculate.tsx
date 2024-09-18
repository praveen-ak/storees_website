import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import Transition from './transition';

export default function Calculate() {
    const [revenue, setRevenue] = useState(0)
    const [sale, setSale] = useState(0)
    const changeSale = (value: any) => {
        setSale(value)
    }
    const changeRevenue = (value: any) => {
        setRevenue(value)
    }
    return (
        <main className='bg-zinc-100 md:pb-40'>
            <Transition>
                <div className="w-full overflow-hidden py-12 md:pb-24">
                    <h2 className="container text-center font-outfit md:text-4xl text-3xl font-bold max-w-xl mx-auto">Calculate the increase revenue you can get from Storees.</h2>
                </div>

                <div className="w-full py-8 bg-zinc-200">
                    <div className="container max-w-5xl">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 place-items-center">
                            <div className='relative w-full h-full'>
                                <div className="bg-white shadow-2xl rounded-2xl p-8 md:absolute md:-top-24 z-10 left-0">
                                    <div className="mb-6 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-2xl px-8 py-14 text-center w-full">
                                        <h4 className="text-4xl md:text-7xl mb-5 font-bold">${revenue * sale}</h4>
                                        <p className="text-xl">Additional Annual sales with keep automation</p>
                                    </div>
                                    <div className="flex flex-wrap p-2">
                                        <div className="mb-4">
                                            {/* <img src="" alt="" /> */}
                                            <div>
                                                <h5 className="font-bold text-xl md:text-2xl mb-1">Proof of quality</h5>
                                                <p>Check any pro's work samples, client reviews and identity verification</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            {/* <img src="" alt="" /> */}
                                            <div>
                                                <h5 className="font-bold text-xl md:text-2xl mb-1">Result of product</h5>
                                                <p>Check any pro's work samples, client reviews and identity verification</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-4 w-full">
                                <h6 className='text-xl font-semibold mb-4'>Howmany sales do you make each month? </h6>
                                <div className="bg-neutral-800 p-8 mb-10 rounded-xl w-full">
                                    <Slider
                                        onChange={changeSale}
                                        trackStyle={{ backgroundColor: "#2563eb", height: 5 }}
                                        railStyle={{ backgroundColor: "#484848", height: 5 }} handleStyle={{
                                            borderColor: "white",
                                            height: 14,
                                            borderRadius: 5,
                                            width: 20,
                                            boxShadow: '20 25px 50px -12px rgb(0 0 0 / 0.25)',
                                            backgroundColor: "#2563eb",
                                            opacity: 1
                                        }} min={0} value={sale} max={100} marks={{ 0: 0, 10: 10, 20: 20, 30: 30, 40: 40, 50: 50, 60: 60, 70: 70, 80: 80, 90: 90, 100: 100 }} />
                                </div>
                                <h6 className='text-xl font-semibold mb-4'>What is the average revenue from each sale? </h6>
                                <div className="bg-neutral-800 p-8 rounded-xl w-full">
                                    <Slider
                                        onChange={changeRevenue}
                                        trackStyle={{ backgroundColor: "#2563eb", height: 5 }}
                                        railStyle={{ backgroundColor: "#484848", height: 5 }} handleStyle={{
                                            borderColor: "white",
                                            height: 14,
                                            borderRadius: 5,
                                            width: 20,
                                            boxShadow: '20 25px 50px -12px rgb(0 0 0 / 0.25)',
                                            backgroundColor: "#2563eb",
                                            opacity: 1
                                        }} min={0} value={revenue} max={100} marks={{ 0: 0, 10: 10, 20: 20, 30: 30, 40: 40, 50: 50, 60: 60, 70: 70, 80: 80, 90: 90, 100: 100 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </main>
    )
}