import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Transition from "./transition";

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
    return (
        <div className="w-full overflow-hidden py-7 bg-zinc-100">
            <Transition>
                <div className="container max-w-3xl text-center font-outfit">
                    <p className="uppercase text-sm mb-2">Engage + Convert</p>
                    <h2 className="mb-5 text-4xl font-bold">Accelerate Revenue Growth</h2>
                    <p className="text-xl mb-7">Power your business's growth through multiple channels, capture customer data and engage them with personalized notification.</p>
                </div>
                <div className="mb-10">
                    <Slider {...settings}>
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
                    </Slider>
                </div>
            </Transition>
        </div>
    )
}