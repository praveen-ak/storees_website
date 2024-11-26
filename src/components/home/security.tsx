import Transition from "../transition"

export default function Security() {
    const tools = [
        {
            image: "../images/star.png",
            title: "GDPR",
            content: "Complaint"
        },
        {
            image: "../images/trust_big.png",
            title: "AICPA",
            content: "SOC 2 Type 2"
        },
        {
            image: "../images/anchor.png",
            title: "HIPAA",
            content: "Complaint"
        },
        {
            image: "../images/lock.png",
            title: "CCPA",
            content: "Complaint"
        },
        {
            image: "../images/world.png",
            title: "ISO 27001",
            content: "Pending"
        },
    ]
    return (
        <main className='bg-zinc-100 pb-20'>
            <Transition>
                <div className="container max-w-6xl font-outfit overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-5 rounded-xl security relative text-white bg-gradient-to-tl from-blue-950 to-neutral-900">
                        <div className="mb-5 px-10 py-10 w-full">
                            <h3 className="text-2xl mb-5">Security you can trust</h3>
                            <p className="text-md md:pb-40 mb-3">As a data company, we understand the importance of keeping your company's data secure.</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="mb-2">
                                    <p><img className="bg-gradient-to-br from-neutral-500 to-blue-950 mb-2 p-2 rounded-md" src="../images/trust.png" alt="" /></p>
                                    <p className="text-sm mb-0">GDPR, HIPAA, SOC 2 Type II, and CCPA complaint.</p>
                                </div>
                                <div className="">
                                    <p><img className="bg-gradient-to-br from-neutral-500 to-blue-950 mb-2 p-2 rounded-md" src="../images/dash.png" alt="" /></p>
                                    <p className="text-sm mb-0">Choose between an EU or US data residency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 z-10 text-center w-full">
                            <div className="py-10 flex flex-wrap justify-center items-center gap-6">
                                {tools.map((item, index) => {
                                return (
                                    <div key={index} className={`sm:w-1/4 md:h-1/3 w-1/3 h-1/3 text-center rounded-lg bg-gradient-to-br from-neutral-500 to-blue-950`}>
                                        <img src={item?.image} className="p-4 mx-auto w-[100px] h-[120px] object-contain" />
                                        <div className="p-2 bg-gray-200 text-stone-700 text-center rounded-b-lg">
                                            <p className="text-md uppercase font-bold">{item?.title}</p>
                                            <p className="text-xs uppercase">{item?.content}</p>
                                        </div>
                                    </div>)
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </main>)
}