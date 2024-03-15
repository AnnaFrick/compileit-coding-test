// A side bar stretched along the left side of the layout for the app including links to Home and Discover
// Add icons to the links

import React from 'react';
import { useRouter } from 'next/router';

const SideBar: React.FC = () => {
    const router = useRouter();

    return (
        <nav className="flex flex-col items-center justify-between h-full fixed left-0 top-0 bg-gray-800 p-4">
            <h2 className={`mb-6 text-2xl font-semibold`}>Movie App</h2>
            <div className="flex flex-col justify-center">
                <a href="/" className={`mb-4 text-lg font-semibold ${router.pathname === '/' ? 'text-gray-200' : 'text-gray-500 hover:text-white'}`}>
                    Home
                </a>
                <a href="/discover" className={`mb-4 text-lg font-semibold ${router.pathname === '/discover' ? 'text-gray-200' : 'text-gray-500 hover:text-white'}`}>
                    Discover
                </a>
            </div>
        </nav>
    );
};

export default SideBar;
