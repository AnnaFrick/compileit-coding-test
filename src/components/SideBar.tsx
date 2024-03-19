// A side bar stretched along the left side of the layout for the app including links to Home and Discover
// Add icons to the links

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SideBar: React.FC = () => {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <nav className={`md:block ${isSidebarOpen ? 'block' : 'hidden'} fixed`}>
            <h2 className={`mb-6 text-2xl font-semibold`}>Movie App</h2>
            <div className="flex flex-col justify-center">
                <a href="/" className={`mb-4 text-lg font-semibold ${router.pathname === '/' ? 'text-gray-200' : 'text-gray-500 hover:text-white'}`}>
                    Home
                </a>
                <a href="/discover" className={`mb-4 text-lg font-semibold ${router.pathname === '/discover' ? 'text-gray-200' : 'text-gray-500 hover:text-white'}`}>
                    Discover
                </a>
            </div>
            <button onClick={toggleSidebar} className="md:hidden">Toggle Sidebar</button>
        </nav>
    );
};

export default SideBar;
