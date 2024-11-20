import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Transition from "../transition";

export default function Campaign() {
    const list = [{
        title: "Designed for collaboration",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        sub_desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        sub_desc_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        background: "bg-[#ebf5ff]",
        border: "border-[#0080ff]",
        img_bg: "bg-[#C5E0FB]"
    },{
        title: "Customize campaign triggers",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        sub_desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        sub_desc_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        background: "bg-[#f2fffb]",
        border: "border-[#00ffb1]",
        img_bg: "bg-[#cefff0]"
    },{
        title: "Designed for collaboration",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        sub_desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        sub_desc_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        background: "bg-[#fff2f2]",
        border: "border-[#ff7171]",
        img_bg: "bg-[#ffd8d8]"
    }]
    return (
        <div className="overflow-hidden py-12 pb-6 bg-[#f4f3f3]">
            <div className="container">
                <Transition>
                    <div className="max-w-3xl mb-16 text-center font-outfit mx-auto">
                        <p className="uppercase text-sm mb-2">VISUAL WORKFLOW BUILDER</p>
                        <h2 className="mb-5 text-4xl font-bold">Simplify campaign execution</h2>
                        <p className="text-xl mb-7">Build intricate, multi-step customer journeys with clarity. And, do it all without needing support from technical teams.</p>
                    </div>
                    <div className="mb-0">
                        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
                            {list.map((item, index) => {
                                return (
                                    <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${item?.background} border-2 p-10 ${item?.border} rounded-lg items-center mb-5`}>
                                        <div className="font-poppins">
                                            <h6 className="font-bold text-2xl mb-3">{item?.title}</h6>
                                            <p className="text-sm mb-16">{item?.description}</p>
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
                                        <div>
                                            <img src="images/campaign.png" alt=""/>
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