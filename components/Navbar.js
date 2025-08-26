"use client"
import React, { useState } from 'react';
// Removed 'next/image' and 'next/link' as they are specific to a Next.js environment.
// We will use standard <img> and <a> tags instead.
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/blog', label: 'Blog' },
    ];

    return (
        // --- Main Navbar Container ---
        // sticky top-0 z-50: Makes the navbar stick to the top and stay above other content.
        // backdrop-blur-lg: Applies a large blur filter to the area behind the element.
        // bg-white/30: Sets the background to a semi-transparent white. The transparency is key to seeing the blur effect.
        // border-b border-slate-900/10: Adds a subtle border at the bottom for a nice visual separation from the page content.
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-slate-900/10 shadow-lg font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* --- Logo Section --- */}
                    <div className="flex-shrink-0">
                        {/* Replaced Next.js Link with a standard anchor tag <a> */}
                        <a href="/" className="flex items-center">
                            {/* Replaced Next.js Image with a standard img tag <img> */}
                            <img
                                src="/assets/logo.png"
                                alt="Marketing Agency Logo"
                                width="120"
                                height="30"
                                className="rounded"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/120x30/f97316/white?text=Logo'; }}
                            />
                        </a>
                    </div>

                    {/* --- Desktop Navigation Links --- */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-800 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 shadow-sm"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* --- Mobile Menu Button --- */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-orange-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu --- */}
            {/* The mobile menu also gets the blur effect for consistency */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden backdrop-blur-lg bg-white/30`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-slate-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        className="bg-orange-500 text-white block w-full text-center mt-2 px-3 py-2 rounded-md text-base font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-sm"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
