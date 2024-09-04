import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const platform_links = [{
        "path": "",
        "name": "Process"
    }, {
        "path": "",
        "name": "Benefits"
    }, {
        "path": "",
        "name": "Services"
    }, {
        "path": "",
        "name": "Portfolio"
    }, {
        "path": "",
        "name": "FAQ"
    },]
    return (
        <main className="">
            <div className="top-footer relative w-full bg-blue-950 md:pt-40 py-10 z-10">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                        <div className="text-white">
                            <h5 className="text-lg font-bold mb-4">Platform</h5>
                            <ul>
                                {platform_links.map((item, index) => {
                                    return (<li key={index} className="text-sm mb-2">
                                        <a href={item.path} className="group inline-flex text-foreground-muted hover:text-foreground">
                                            <span className="relative inline-flex items-center gap-1">
                                                <span>{item.name}</span>
                                                <span className="relative opacity-0 transition-all duration-300 ease-out-fast group-hover:opacity-100 group-hover:translate-x-2">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3">
                                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </li>)
                                })}
                            </ul>
                        </div>
                        <div className="text-white">
                            <h5 className="text-lg font-bold mb-4">Resource</h5>
                            <ul>
                                {platform_links.map((item, index) => {
                                    return (<li key={index} className="text-sm mb-2">
                                        <a href={item.path} className="group inline-flex text-foreground-muted hover:text-foreground">
                                            <span className="relative inline-flex items-center gap-1">
                                                <span>{item.name}</span>
                                                <span className="relative opacity-0 transition-all duration-300 ease-out-fast group-hover:opacity-100 group-hover:translate-x-2">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3">
                                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </li>)
                                })}
                            </ul>
                        </div>
                        <div className="text-white">
                            <h5 className="text-lg font-bold mb-4">Company</h5>
                            <ul>
                                {platform_links.map((item, index) => {
                                    return (<li key={index} className="text-sm mb-2">
                                        <a href={item.path} className="group inline-flex text-foreground-muted hover:text-foreground">
                                            <span className="relative inline-flex items-center gap-1">
                                                <span>{item.name}</span>
                                                <span className="relative opacity-0 transition-all duration-300 ease-out-fast group-hover:opacity-100 group-hover:translate-x-2">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3">
                                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </li>)
                                })}
                            </ul>
                        </div>
                        <div className="md:ml-auto">
                            <img src="../logo_white.png" className="max-w-40" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer w-full bg-[#04107E] py-6 sticky bottom-0">
                <div className="container max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 gap-5 pb-8 items-center border-b-slate-600 border-b">
                        <div className="max-w-sm text-white">
                            <h6 className="text-lg font-bold mb-3">www.storees.com</h6>
                            <p className="text-xs max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste voluptatibus harum. Quis eligendi corporis numquam voluptatum, debitis assumenda.</p>
                        </div>
                        <div className="ml-auto">
                            <ul className="text-white">
                                <li className="inline-block relative mr-3 mb-2">
                                    <a href="" className="relative overflow-hidden hover:border-transparent border-gray-600 border rounded-full inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] group transition-all duration-300">
                                        <FontAwesomeIcon icon={faFacebookF} size="xs" className="z-[1]" />
                                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                                    </a>
                                </li>
                                <li className="inline-block mr-3 mb-2">
                                    <a href="" className="relative overflow-hidden hover:border-transparent border-gray-600 border rounded-full inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] group transition-all duration-300">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="xs" className="z-[1]" />
                                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                                    </a>
                                </li>
                                <li className="inline-block mr-3 mb-2">
                                    <a href="" className="relative overflow-hidden hover:border-transparent border-gray-600 border rounded-full inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] group transition-all duration-300">
                                        <FontAwesomeIcon icon={faXTwitter} size="xs" className="z-[1]" />
                                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
                                    </a>
                                </li>
                                <li className="inline-block mr-3 mb-2">
                                    <a href="" className="relative overflow-hidden hover:border-transparent border-gray-600 border rounded-full inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] group transition-all duration-300">
                                        <FontAwesomeIcon icon={faYoutube} size="xs" className="z-[1]" />
                                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#FF3000] z-0 transition-all duration-500 group-hover:top-0"></div>
                                    </a>
                                </li>
                                <li className="inline-block mb-2">
                                    <a href="" className="relative overflow-hidden hover:border-transparent border-gray-600 border rounded-full inline-flex justify-center items-center w-[2.5rem] h-[2.5rem] group transition-all duration-300">
                                        <FontAwesomeIcon icon={faInstagram} size="xs" className="z-[1]" />
                                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="grid md:grid-cols-2 gap-5 items-center">
                            <ul className="text-white flex flex-wrap items-center gap-10 gap-y-5">
                                <li className="inline-block">
                                    <img src="https://customer.io/_next/static/media/hipaa.788b8b56.svg" alt="" width={70} height={100} />
                                </li>
                                <li className="inline-block">
                                    <img src="https://customer.io/_next/static/media/g2.32f94199.svg" alt="" width={70} height={100} />
                                </li>
                                <li className="inline-block">
                                    <img src="https://customer.io/_next/static/media/gdpr.d33ebfb7.svg" alt="" width={70} height={100} />
                                </li>
                                <li className="inline-block">
                                    <img src="https://customer.io/_next/static/media/aicpa.14d2e278.svg" alt="" width={70} height={100} />
                                </li>
                            </ul>
                            <ul className="text-white md:ml-auto text-xs flex flex-wrap items-center gap-10 gap-y-5">
                                <li className="">
                                    <a href="">2024 Storess* Global INC</a>
                                </li>
                                <li className="">
                                    <a href="">Terms of Services</a>
                                </li>
                                <li className="">
                                    <a href="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}