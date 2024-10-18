import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Transition from "./transition";
import Lottie from "lottie-react";
import animationData from "../../public/lottie/Cash-Flow.json";

export default function Accelerate() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerPadding: "100px",
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };
    const growth = [{
        btn_name: "Email Marketing",
        description: "Creating effective email marketing content depends on the goal of your campaign"
    }, {
        btn_name: "SMS Marketing",
        description: "Creating effective email marketing content depends on the goal of your campaign"
    }, {
        btn_name: "Mobile Push",
        description: "Creating effective email marketing content depends on the goal of your campaign"
    }, {
        btn_name: "Reviews",
        description: "Creating effective email marketing content depends on the goal of your campaign"
    },]
    return (
        <div className="overflow-hidden py-7 bg-[#FFFCF5]">
            <div className="container">
                <Transition>
                    <div className="max-w-3xl mb-16 text-center font-outfit mx-auto">
                        <p className="uppercase text-sm mb-2">Engage + Convert</p>
                        <h2 className="mb-5 text-4xl font-bold">Accelerate Revenue Growth</h2>
                        <p className="text-xl mb-7">Power your business's growth through multiple channels, capture customer data and engage them with personalized notification.</p>
                    </div>
                    <div className="mb-10">
                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6">
                            {growth.map((item, index) => {
                                return (
                                    <div className="growth_section mb-5 relative mx-auto">
                                        <div className="bg-white overflow-hidden group transition relative border rounded-md text-center p-6 pb-0 font-poppins" key={index}>
                                            <button className="text-sm group-hover:bg-white group-hover:text-blue-600 transition-all rounded-md px-6 py-2 bg-blue-600 border-blue-600 border text-white mb-20">{item?.btn_name}</button>
                                            <div className="group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 duration-700 absolute transition-all translate-x-72 -translate-y-11 opacity-0 text-sm mx-auto left-0 right-0 top-20">
                                                <p>{item?.description}</p>
                                            </div>
                                            <div className="z-10 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 duration-700 max-w-64 right-0 mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 absolute transition-all opacity-0 left-0 top-44 -translate-x-40 -translate-y-10">
                                                <svg fill="#272bbb" className="w-8 h-8 mx-auto text-indigo-500 mb-3 bg-indigo-200 p-2 rounded-md" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.999 611.999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path> <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"></path> </g> </g> </g> </g></svg>
                                                <h6 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Subscribe to our newsletter</h6>
                                                <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">Fill your email below to join our email newsletter today.</p>
                                                <div className="flex text-xs flex-grow p-2 border bg-white border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500 ">
                                                    <input type="text" id="email" className="block text-ellipsis bg-white border-0 p-2 focus:outline-0 w-full text-gray-900" placeholder="Enter your email" />
                                                    <button type="button" className="px-2 py-2 transition bg-gradient-to-r text-xs from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 inline-block text-white rounded-3xl">Subscribe</button>
                                                </div>
                                            </div>
                                            <img src="images/mobile.png" alt="" className="group-hover:translate-x-32 group-hover:translate-y-16 duration-700" />
                                        </div>
                                    </div>)
                            })}
                        </div>
                        <div className="relative md:block hidden">
                            <hr className="mx-auto my-5" />
                        </div>
                        <div className="my-10 platform_data relative font-poppins bg-slate-200/50 text-center max-w-5xl mx-auto p-10 rounded-xl">
                            <button className=" hover:bg-white hover:text-blue-600 transition-all rounded-md px-6 py-2 bg-blue-600 border-blue-600 border text-white mb-10">Customer data platform</button>
                            <h6 className="text-gray-800 mb-10 max-w-xl mx-auto text-lg">Adminpanel can be adjusted to suit your specific needs and can be enhanced with visuals, personalization, and mobile-friendly design. Would you like help with anything more specific for STOREES</h6>
                            <Lottie
                                animationData={animationData}
                                className="flex justify-center items-center"
                                loop={true}
                            />
                        </div>
                        {/* <Slider {...settings}>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="">
                                    <div className="rounded-3xl bg-gradient-to-b from-white from-60% to-gray-300 to-15% p-5 text-center overflow-hidden my-4">
                                        <div className="max-w-sm mx-auto p-5 pb-0">
                                            <p className="text-xl mb-4 font-bold">Offline Sale</p>
                                            <p className="text-md mb-8">Capture your offline sale data and link it with the customer with our omni channel POS Application</p>
                                        </div>
                                        <img src="../images/accelarate.png" alt="" className="mx-auto" />
                                    </div>
                                </div>
                            ))}
                        </Slider> */}
                    </div>
                </Transition>
            </div>
        </div>
    )
}