// A side bar stretched along the left side of the layout for the app including links to Home and Discover
// Add icons to the links

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SideBar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 h-full pt-5">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <h1 className="text-2xl mb-8 font-bold text-white">Movies</h1>
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" onClick={toggleMobileMenu} aria-expanded={false}>
                            <span className="sr-only">Open main menu</span>
                            {/* Icons for menu open/close */}
                            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Navigation Links - Adjusted for React */}
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex flex-col justify-center">
                                {/* Icon and link for home page */}
                                <a href="/" className={`flex items-center mb-4 text-lg font-semibold ${router.pathname === '/' ? 'text-gray-200' : 'text-gray-500 hover:text-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <p>Home</p>
                                </a>
                                {/* Icon and link for discover page */}
                                <a href="/discover" className={`flex items-center mb-4 text-lg font-semibold ${router.pathname === '/discover' ? 'text-gray-200' : 'text-gray-500 hover:text-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />

                                    </svg>
                                    <p>Discover</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="inset-0 bg-gray-700 bg">
                    <div className="px-2 pt-2 pb-3 space-y-1 h-full w-min">
                        <a href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/' ? 'text- text-white' : 'text-gray-300 hover:text-white'}`}>
                            Home
                        </a>
                        <a href="/discover" className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/discover' ? 'text-boltic text-white' : 'text-gray-300 hover:text-white'}`}>
                            Discover
                        </a>
                    </div>
                </div>
            </div >
        </nav >
    );
};


export default SideBar;
