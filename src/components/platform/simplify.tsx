
import React from "react";
import Transition from "../transition";

export default function Simplify() {
    const list = [{
        title: "Flexible integrations your developers will love",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        sub_desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        sub_desc_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        background: "bg-[#ebf5ff]",
        border: "border-[#0080ff]",
        img_bg: "bg-[#D1D7FF]"
    }]
    const guarantee = [{
        title: "Guaranteed Results",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quaerat sint illo."
    },{
        title: "Guaranteed Results",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quaerat sint illo."
    },{
        title: "Guaranteed Results",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quaerat sint illo."
    },{
        title: "Guaranteed Results",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quaerat sint illo."
    },{
        title: "Guaranteed Results",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quaerat sint illo."
    },{
        title: "Guaranteed Results",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quaerat sint illo."
    },]
    return (
        <div className="overflow-hidden py-12 pb-16 bg-[#F6F8FF]">
            <div className="container">
                <Transition>
                    <div className="max-w-3xl mb-16 text-center font-outfit mx-auto">
                        <p className="uppercase text-sm mb-2">CONNECT YOUR DATA</p>
                        <h2 className="mb-5 text-5xl font-bold">Simplify campaign execution</h2>
                        <p className="text-xl mb-7 font-poppins">Build intricate, multi-step customer journeys with clarity. And, do it all without needing support from technical teams.</p>
                    </div>
                    <div className="mb-8">
                        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
                            {list.map((item, index) => {
                                return (
                                    <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-[#f4f3f3] to-[#8998FF] lg:bg-hero-pattern px-10 py-12 rounded-xl items-center bg-no-repeat bg-blend-color bg-[right_-40%_center] mb-5`}>
                                        <div className="font-poppins">
                                            <h6 className="font-bold text-3xl mb-3">{item?.title}</h6>
                                            <p className="text-sm mb-16 font-poppins">{item?.description}</p>
                                            <div className="flex">
                                                <div className="mb-5 mr-5">
                                                    <img className={`p-2 mb-3 max-w-10 rounded-md ${item?.img_bg}`} src="../images/smstar.png" alt="" />
                                                    <p>{item?.sub_desc}</p>
                                                </div>
                                                <div className="mb-5">
                                                    <img className={`p-2 mb-3 max-w-10 rounded-md ${item?.img_bg}`} src="../images/smstar.png" alt="" />
                                                    <p>{item?.sub_desc_1}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6">
                            {guarantee.map((item, index) => {
                                return(<div key={index} className="mb-5 flex flex-1">
                                    <div className="">
                                        <div className="mr-3 flex h-20 w-20 items-center justify-center rounded-full bg-white border">
                                            <img src="../images/chartcomp.svg" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 text-xl">{item?.title}</h4>
                                        <p className="text-sm font-poppins">{item?.description}</p>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}