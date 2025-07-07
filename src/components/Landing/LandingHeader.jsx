import React, { useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'
import CommonButton from '../commonComponent/CommonButton';

function LandingHeader() {
    // State for mobile menu
    const [menuOpen, setMenuOpen] = useState(false);
    // Alert handler for nav links
    const handleNavClick = (label) => {
        alert(`You clicked ${label}`);
        setMenuOpen(false); // Close menu on mobile after click
    };

    const menuItems = [
        { label: 'Home', href: '#' },
        { label: 'How It Works', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Success Stories', href: '#' },
        { label: 'FAQ', href: '#' },
    ];

    // Helper function/component
    const renderMenu = (className) => (
        menuItems.map(item => (
            <li key={item.label}>
                <a href={item.href} onClick={() => handleNavClick(item.label)} className={className}>{item.label}</a>
            </li>
        ))
    );

    return (
        // Header wrapper with transparent background, margin, and flex layout
        <header className="w-[95%] flex items-center justify-between py-3 px-6 mx-2 xl:py-2 xl:px-10 xl:mx-0 fixed top-0 left-0 z-50 bg-white rounded-full shadow-md border border-gray-200 xl:bg-transparent xl:rounded-none xl:shadow-none xl:border-none" style={{ marginTop: '18px' }}>
            {/* Left: Logo and Brand Name */}
            <div className="flex items-center gap-2 md:gap-4">
                <span className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold icon-button relative group">
                    <MdOutlineAdd className="text-white text-xl md:text-2xl" />
                </span>
                <span className={`text-lg md:text-xl font-semibold text-gray-900 transition-opacity duration-300`}>
                    PlusFive
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="flex-1 justify-center hidden xl:flex">
                <ul className="flex gap-7 bg-white rounded-full px-7 py-5 shadow-sm border border-gray-200 text-xl">
                    {renderMenu('px-5 py-3 rounded-full bg-gray-200 text-gray-900 font-medium shadow-sm')}
                </ul>
            </nav>

            {/* Desktop Button */}
            <div className="hidden xl:block">

                <CommonButton
                    text="Start Free Trial"
                    className=" !text-white rounded-lg px-4 py-2 font-bold text-xl"
                    type="submit"
                />
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="xl:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    {menuOpen ? <HiX className="text-3xl text-gray-900" /> : <HiMenu className="text-3xl text-gray-900" />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end xl:hidden">
                    <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col gap-6 relative animate-slide-in">
                        {/* Close button absolute top-right */}
                        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl text-gray-700 focus:outline-none z-10">
                            <HiX />
                        </button>
                        <ul className="flex flex-col gap-4 text-lg mt-10">
                            {renderMenu('block px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium')}
                        </ul>
                        <CommonButton
                            text="Start Free Trial"
                            className=" !text-white rounded-lg px-4 py-2 font-bold text-xl"
                            type="submit"
                        />
                    </div>
                </div>
            )}
        </header>
    )
}

export default LandingHeader
