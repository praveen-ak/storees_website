"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import React, { useState } from 'react';
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
    return (
        <header className="container transition max-w-6xl md:absolute top-0 left-0 mx-auto z-[1] right-0">
            <div className="hidden relative py-6 sm:flex justify-center flex-wrap">
                <Logo />
                <DesktopNavlink />
            </div>
            <div className="sm:hidden relative flex justify-between flex-row my-4">
                <Logo />
                <MobileMenubtn onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
        </header>
    )
}