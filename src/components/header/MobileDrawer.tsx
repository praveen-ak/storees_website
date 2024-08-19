import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { leftNavItems, rightNavItems } from './NavLink';
import { usePathname } from 'next/navigation';

export default function MobileDrawer({ isOpen, onClose }:any) {
    const pathName = usePathname()
    return (
        <div className={`fixed flex flex-col z-20 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <button className="absolute right-7 top-4 p-3" onClick={onClose}>
                <FontAwesomeIcon className="text-2xl" icon={faXmark} />
            </button>
            <ul className="flex flex-col justify-center px-8 pt-20 space-y-4">
                {leftNavItems.map((item, index) => {
                    const isActive = item.path === pathName;
                    return (
                        <li key={index} className="hover:text-blue-900 pt-2 pb-3 border-b-gray-200 border-b">
                            <Link
                                className={`hover:text-indigo-700 mr-4 relative no-underline duration-300 ease-in ${isActive ? "text-indigo-700" : "text-black"}`}
                                href={item.path}>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    );
                })}

                <div>
                    {
                        rightNavItems.map((item, index) => {
                            return (
                                <Link href={item.path} key={index}
                                    className="transition hover:bg-gradient-to-r from-blue-500 to-indigo-500 inline-block text-sm px-4 py-2 rounded bg-gray-300 text-gray-700 hover:text-white mr-4">
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    );
}