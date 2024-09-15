import Image from "next/image";
import Marquee from "react-fast-marquee";
import Transition from "./transition";

export default function Brand() {
    const brand = [
        {
            src: "https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png",
            name: "IBM",
        },
        {
            src: "https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png",
            name: "Benefits",
        },
        {
            src: "https://www.react-fast-marquee.com/static/media/lucasfilm.ef28c5a6.png",
            name: "Services",
        },
        {
            src: "https://www.react-fast-marquee.com/static/media/pennsylvania.8c9f4108.png",
            name: "Pricing",
        },
        {
            src: "https://www.react-fast-marquee.com/static/media/us_navy.331c47b8.png",
            name: "Faq",
        },
        {
            src: "https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png",
            name: "Faq",
        },
        {
            src: "https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png",
            name: "Faq",
        }
    ];
    return (
        <div className="container-fluid bg-zinc-100 pb-20">
            <Transition>
                <Marquee speed={50} autoFill={true} pauseOnHover={true} gradientColor='#f4f4f5' gradient={true} gradientWidth={200}>
                    {brand.map((item, index) => {
                        return (
                            <img key={index} src={item.src} alt={item.name} className="h-[50px] mx-10" />
                        )
                    })}
                </Marquee>
            </Transition>
        </div>)
}