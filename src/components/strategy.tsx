import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Strategy() {
    return (
        <main className='bg-zinc-100 md:pb-64 pb-16 px-8'>
            <div className="container md:absolute mx-auto z-20 left-0 right-0 bg-gradient-to-b from-blue-600 p-0.5 from-[20%] to-[40%] to-white relative rounded-3xl lg:max-w-4xl md:max-w-xl font-outfit">
                <div className="bg-white rounded-3xl">
                    <div className="mx-auto px-5 py-16 text-center max-w-xl">
                        <i className="fa-sharp text-black fa-solid fa-circle-arrow-right fa-2xs"></i>
                        <h3 className="text-4xl lg:text-5xl font-bold mb-5">Become part of the Smarter Sales Strategy</h3>
                        <p className="text-md mb-4 text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus neque autem odit a. Ut, et quas dolore doloribus nulla unde eveniet!</p>
                        <button type="button" className="btn px-10 py-3 rounded-lg text-center bg-blue-800 text-white overflow-hidden group hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 relative ease-in-out duration-300 transition">See Pricing
                            <FontAwesomeIcon icon={faCircleArrowRight} size="sm" className="ml-3 group-hover:translate-x-2 transition duration-200" />
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        </button>
                    </div>
                    <img src="../images/spiral.png" alt="" className="hidden md:block absolute max-w-36 -right-14 -top-14" />
                </div>
            </div>
        </main>)
}