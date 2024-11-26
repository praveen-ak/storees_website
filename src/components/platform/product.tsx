import { MutableRefObject, useRef, useState } from "react";
import Transition from "../transition";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}>
            <img src="../images/next_new.png" alt="" />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src="../images/prev_new.png" alt="" />
        </div>
    );
}
export default function Product() {
    const [slideIndex, setSlideIndex] = useState(0);
    let sliderRef = useRef(null) as any;

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current: any, next: any) => setSlideIndex(next)
    };
    const reviews = [{
        name: "Gerald Aichholzer",
        position: "Digital Marketing Executive",
        review: "Storees can do what other marketing automation tools can’t take in millions of events from users per day, segment through them almost instantly."
    }, {
        name: "Gerald Aichholzer",
        position: "Digital Marketing Executive",
        review: "Storees can do what other marketing automation tools can’t take in millions of events from users per day, segment through them almost instantly."
    }, {
        name: "Gerald Aichholzer",
        position: "Digital Marketing Executive",
        review: "Storees can do what other marketing automation tools can’t take in millions of events from users per day, segment through them almost instantly."
    }, {
        name: "Gerald Aichholzer",
        position: "Digital Marketing Executive",
        review: "Storees can do what other marketing automation tools can’t take in millions of events from users per day, segment through them almost instantly."
    }, {
        name: "Gerald Aichholzer",
        position: "Digital Marketing Executive",
        review: "Storees can do what other marketing automation tools can’t take in millions of events from users per day, segment through them almost instantly."
    }]
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (sliderRef.slickGoTo && !isNaN(value)) {
            sliderRef.slickGoTo(value);
        }
    };
    return (
        <Transition>
            <div className="grid grid-cols-1 mb-24 md:grid-cols-2 items-center bg-gradient-to-tr from-[#0B21C3] from-[-42%] via-[#070A23] via-20% to-[#060606]">
                <div className="py-24 px-10">
                    <div className="max-w-lg mb-16 font-outfit mx-auto">
                        <p className="uppercase text-white text-sm mb-2">Customers Love Us</p>
                        <h2 className="mb-5 text-5xl text-white font-bold">Preferred by productled companies</h2>
                        <p className="text-lg text-slate-300 font-poppins">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation magna  quis nostrud exercitation.</p>
                    </div>
                </div>
                <div className="bg-black py-24 review">
                    <Slider ref={slider => {
                        sliderRef = slider;
                    }} {...settings}>
                        {reviews.map((item, index) => (
                            <div key={index} className="rounded-xl !flex flex-col text-white p-8 bg-[#242424] max-h-96 min-h-96">
                                <div className="flex items-center mb-3">
                                    <img src="../images/user.svg" className="mr-3" alt="" />
                                    <div className="">
                                        <h6 className="text-md">{item?.name}</h6>
                                        <p className="text-sm">{item?.position}</p>
                                    </div>
                                </div>
                                <p className="text-lg mb-4 max-h-52 overflow-auto">{item?.review}</p>
                                <p className="mt-auto"><img className="ml-auto" src="../images/buffer.svg" alt="" /></p>
                            </div>
                        ))}
                    </Slider>
                    <input className="flex mx-auto custom-range my-10"
                        onChange={handleChange}
                        value={slideIndex}
                        type="range"
                        min={0}
                        max={reviews?.length - 1}
                    />
                </div>
            </div>
        </Transition>
    )
}