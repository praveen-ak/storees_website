import Transition from "../transition";

export default function TrustedBrand() {
    return (
        <Transition>
            <section className="bg-power py-16 overflow-hidden px-5">
                <div className="text-center text-white max-w-xl mx-auto font-outfit pb-12 mt-5 mb-10">
                    <p className="uppercase mb-2 font-light text-sm">Powered By Data</p>
                    <h4 className="font-bold mb-4 text-4xl">All your data without limits</h4>
                    <p className="text-[#FBF9F9CC] font-poppins text-md">Trusted by brands across industries, geographies and sizes including those servicing both B2B and B2C markets.</p>
                </div>
                <div className="main">
                    <img src="../images/trusted_brands.svg" alt="" className="max-w-lg mx-auto" />
                </div>
            </section>
        </Transition>)
}