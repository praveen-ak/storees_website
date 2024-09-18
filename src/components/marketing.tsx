import Transition from "./transition";

export default function Marketing() {
    return (
        <div className="w-full py-14 bg-slate-200">
            <Transition>
                <div className="container max-w-7xl">
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 place-items-center">
                        <div className="col-span-2">
                            <img src="../images/lotty.png" />
                        </div>
                        <div className="col-span-1">
                            <h4 className="font-semibold mb-3 md:text-3xl text-2xl">Reactive and Intelligent Marketing AI</h4>
                            <p className="mb-4">Forge Smarter Digital Relationships with Customers and Generate, Scale & Amplify sales.</p>
                            <div className="bg-white p-5 mb-3 rounded-2xl px-8">
                                <h5 className="font-bold text-xl mb-3">Segments</h5>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint debitis hic.</p>
                            </div>
                            <div className="bg-white p-5 mb-3 rounded-2xl px-8">
                                <h5 className="font-bold text-xl mb-3">Segments</h5>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint debitis hic.</p>
                            </div>
                            <div className="bg-white p-5 mb-3 rounded-2xl px-8">
                                <h5 className="font-bold text-xl mb-3">Segments</h5>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint debitis hic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}