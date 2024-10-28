import Transition from "../transition";
import Slider from "react-slick";

export default function Powerful() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            }
        ],
    };
    let powerslide = [{
        image: "../images/gmail.png",
        title: "Email",
        description: "Data-driven power meets captivating design",
        btn_text: "Explore Email"
    }, {
        image: "../images/sms.png",
        title: "SMS",
        description: "Connect with customers where they’re most active.",
        btn_text: "Explore SMS"
    }, {
        image: "../images/push.png",
        title: "Mobile Push",
        description: "Drive mobile app engagement and retention.",
        btn_text: "Explore Mobile Push"
    }]
    return (
        <Transition>
            <div className="overflow-hidden py-12 bg-[#f4f3f3]">
                <div className="container">
                    <div className="max-w-3xl text-center font-outfit mx-auto">
                        <h2 className="mb-5 text-5xl font-bold">One platform, powerful customer experiences across channels</h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#ececec] p-8 powerful">
                <Slider {...settings}>
                    {powerslide.map((item, index) => (
                        <div key={index} className="">
                            <div className="rounded-3xl bg-white p-8 overflow-hidden my-4">
                                <div className="max-w-sm mx-auto pb-0">
                                    <img src={`${item?.image}`} alt="" className="mx-auto mb-5" />
                                    <p className="text-2xl mb-3 font-bold">{item?.title}</p>
                                    <p className="text-lg mb-4">{item?.description}</p>
                                    <p>
                                        <button type="button" className="relative rounded-lg px-5 py-3 overflow-hidden group bg-black hover:bg-gradient-to-r hover:from-black-500 hover:to-black-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300">
                                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                            <span className="relative">{item?.btn_text}</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Transition>
    )
}