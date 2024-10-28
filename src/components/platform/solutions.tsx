import Transition from "../transition"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Solutions() {
    return (
        <div className="overflow-hidden py-12 pb-6 bg-[#f4f3f3]">
            <div className="container">
                <Transition>
                    <div className="max-w-3xl text-center font-outfit mx-auto">
                        <h2 className="mb-8 text-5xl font-bold">See what happens when our solutions click together</h2>
                        <p className="text-md mb-8 font-poppins">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation magna aliqua ut enim ad minim veniam quis nostrud exercitation.</p>
                        <button type="button" className="btn px-10 py-3 rounded-lg text-center bg-blue-800 text-white overflow-hidden group hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 relative ease-in-out duration-300 transition">See Now
                            <FontAwesomeIcon icon={faCircleArrowRight} size="sm" className="ml-3 group-hover:translate-x-2 transition duration-200" />
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        </button>
                    </div>
                </Transition>
            </div>
            <Transition>
                <img src="../images/solution.png" alt="" />
            </Transition>
        </div>
    )
}