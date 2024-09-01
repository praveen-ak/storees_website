"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from 'react';
import Logo from "../Logo";
import DesktopNavlink from "./DesktopNavlink";
import MobileMenubtn from "./MobileMenubtn";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
    const pathName = usePathname()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        setScrolling(window.scrollY > 50); // Adjust the scroll value as needed
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`transition fixed top-0 left-0 z-[21] right-0 ${scrolling ? 'scrolled bg-white shadow-md' : ``}`}>
            <div className={`hidden max-w-6xl mx-auto px-4 relative ${scrolling ? 'py-4' : `py-6`} sm:flex justify-center flex-wrap`}>
                <Logo isScrolling={scrolling} />
                <DesktopNavlink />
            </div>
            <div className="sm:hidden relative flex justify-between flex-row px-4 my-4">
                <Logo isScrolling="" />
                <MobileMenubtn onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
        </header>
    )
}