import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Transition from "./transition"

export default function Faq() {
    const faqs = [{
        title: "Make the FAQs easy to find",
        isactive: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium"
    }, {
        title: "Are they any additional fees?",
        isactive: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium"
    }, {
        title: "What features do you offer or others not?",
        isactive: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium"
    }, {
        title: "How can i get the APP?",
        isactive: false,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium"
    }]

    return (
        <section className="bg-zinc-100 pb-24 font-outfit">
            <Transition>
                <div className="mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 justify-center items-center gap-10">
                        <div className="px-5">
                            <img src="../images/faq.svg" alt="FAQ tailwind section" className="w-full max-w-sm rounded-xl" />
                        </div>
                        <div className="px-5">
                            <div className="">
                                <div className="mb-10">
                                    <h6 className="md:text-4xl text-3xl text-center font-bold mb-2">
                                        FAQ's
                                    </h6>
                                    <h2 className="text-md text-center text-gray-500 mb-5">
                                        Providing answers to your questions
                                    </h2>
                                </div>
                                <div className="accordion-group">
                                    {faqs.map((item, index) => {
                                        return (
                                            <div key={index} className={`bg-white first:rounded-t-xl pl-14 pr-8 transition py-4 accordion relative border-b border-solid border-gray-200 active`}>
                                                <input type="checkbox" name="panel" id={`panel` + index} className={`hidden peer`} />
                                                <label htmlFor={`panel` + index} className={`accordion-toggle block w-full group z-10 text-xl font-bold py-4 text-gray-600 transition duration-500 relative`}>
                                                    <span className="text-gray-400 absolute top-1/2 -left-8 transform -translate-y-1/2 text-2xl md:text-3xl font-bold number">{index + 1}</span>
                                                    <h5 className="pr-6">{item?.title}</h5>
                                                </label>
                                                <FontAwesomeIcon icon={faPlus} size="xs" className={`peer-checked:rotate-45 peer-checked:bg-black peer-checked:text-white absolute top-8 right-8 transition-transform rounded-full shadow-xl p-2`} />
                                                <div className="accordion__content w-full px-0 overflow-hidden pr-4 active">
                                                    <p className="text-base font-normal text-gray-600 ">
                                                        {item?.content}
                                                    </p>
                                                </div>
                                            </div>)

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </section>
    )
}