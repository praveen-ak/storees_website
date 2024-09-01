import Link from "next/link";
import { leftNavItems, rightNavItems } from "./NavLink";
import { usePathname } from "next/navigation";

export default function DesktopNavlink() {
    const pathName = usePathname()
    return (
        <div className="w-full block font-outfit flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="text-sm sm:flex-grow">
                {leftNavItems.map((item, index) => {
                    const isActive = item.path === pathName;
                    return (
                        <Link key={item.path} 
                            className={`hover:text-indigo-700 mr-4 relative no-underline duration-300 ease-in ${isActive ? "text-indigo-700" : "text-black"}`}
                            href={item.path}>
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>
            <div>
                {
                    rightNavItems.map((item,index) => {
                        const isLinkActive = item.path === pathName
                        return (
                            <Link href={item.path} key={item.path} 
                                className="transition hover:bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-sm px-4 py-2 rounded bg-gray-300 text-black font-medium hover:text-white mr-4">
                                    <span>{item.name}</span>
                                </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}