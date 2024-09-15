import Transition from "./transition"
import Counter from "./counter"

export default function Scale() {
    const sizes = [
        {
            count: 99.98,
            suffix: "%",
            decimal: 2,
            text: "Platform uptime"
        },
        {
            count: 4,
            suffix: "B+",
            text: "Daily API calls"
        },
        {
            count: 99,
            suffix: "%",
            text: "Satisfaction score"
        },
        {
            count: 35,
            suffix: "B",
            text: "Messages sent in 2023"
        },
        {
            count: 3.4,
            suffix: "B+",
            text: "Webhooks sent in 2023"
        },
        {
            count: 24,
            suffix: "/5",
            text: "Global support coverage"
        },
    ]
    const tools = [{
        src: "../images/tools/1.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/2.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/3.png",
        class: "bg-white"
    }, {
        src: "../images/tools/4.png",
        class: "bg-white"
    }, {
        src: "../images/tools/5.png",
        class: "bg-white"
    }, {
        src: "../images/tools/6.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/7.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/8.png",
        class: "bg-white"
    }, {
        src: "../images/tools/9.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/10.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/11.png",
        class: "bg-white"
    }, {
        src: "../images/tools/12.png",
        class: "bg-white"
    }, {
        src: "../images/tools/13.png",
        class: "bg-white"
    }, {
        src: "../images/tools/14.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/15.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/16.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/17.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/18.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/19.png",
        class: "bg-neutral-900"
    }, {
        src: "../images/tools/20.png",
        class: "bg-neutral-900"
    }]
    return (
        <main className='bg-zinc-100 md:pb-14'>
            <Transition>
                <div className="w-full overflow-hidden px-5 font-outfit py-14 pb-10 text-center max-w-xl mx-auto">
                    <h2 className="container md:text-4xl mb-4 text-3xl font-bold max-w-xl mx-auto">Scale, Flex and Innovate</h2>
                    <p className="text-lg text-neutral-700">Designed of universal usability, our platform minimizes operational overhead, ensuring maximum ROI for brands of all sizes</p>
                </div>
                <div className="container max-w-4xl mb-10">
                    <div className="mb-6 p-7 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-3xl px-8 py-16 text-center w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center m-auto gap-10">
                            {sizes.map((item, index) => {
                                return (
                                    <div key={index} className={`text-white justify-items-center ${index == 4 ? 'md:col-start-2' : ''}`}>
                                        <Counter value={item?.count.toString()} className="text-3xl md:text-4xl font-bold" suffix={item?.suffix}></Counter>
                                        <p className="text-sm">{item?.text}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="container max-w-6xl font-outfit">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="mb-5 bg-gradient-to-tl from-blue-950 to-neutral-900 text-white rounded-xl px-10 py-14 text-center w-full">
                            <h3 className="font-bold text-3xl mb-5">You're in good company</h3>
                            <p className="text-lg">Trusted by brands across industries, geographies and sizes, including those servicing both B2B and B2C markets.</p>
                        </div>
                        <div className="mb-5 bg-gradient-to-tl from-blue-950 to-neutral-900 text-white rounded-xl px-10 py-14 text-center w-full">
                            <h3 className="font-bold text-3xl mb-5">Integrate with your tools</h3>
                            <p className="text-lg">Seamlessly connect the databases and applications you rely on to scale your business.</p>
                            <div className="py-16 pb-0 flex max-w-sm mx-auto flex-wrap justify-center items-center">
                                {tools.map((item, index) => {
                                    return (
                                        <div key={index} className={`w-16 h-16 m-1 justify-center items-center flex flex-wrap rounded-lg p-4 ${item?.class}`}>
                                            <img src={item?.src} />
                                        </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </main>
    )
}
