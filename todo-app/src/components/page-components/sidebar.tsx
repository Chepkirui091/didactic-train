'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from 'react-icons/fi';

const DevDaphSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-gray-900 text-white p-5
          transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-64'
                } md:translate-x-0`}
            >
                {/* Logo */}
                <h1 className="text-2xl font-bold mb-6">DevDaph</h1>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                    <Link href="/">
                        <div className="flex items-center text-5xl space-x-2 hover:text-red-500 cursor-pointer">
                            <FiHome />
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link href="/profile">
                        <div className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
                            <FiUser />
                            <span>Profile</span>
                        </div>
                    </Link>
                    <Link href="/settings">
                        <div className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
                            <FiSettings />
                            <span>Settings</span>
                        </div>
                    </Link>
                </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="absolute top-4 left-4 z-50 md:hidden text-white bg-gray-900 p-2 rounded"
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Main Content Overlay */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                ></div>
            )}
        </div>
    );
};

export default DevDaphSidebar;
