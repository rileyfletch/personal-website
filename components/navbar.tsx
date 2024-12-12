"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    // Function to determine if a link is active
    const isActive = (path: string) => pathname === path;

    return(
        <nav className="py-3 px-4 flex items-center justify-between">
            <div className="flex flex-row">
                <Link 
                    className={`font-bold text-3xl tracking-tight transition-all duration-700 hover:text-red pr-2 ${isActive('/') ? 'text-red' : ''}`} 
                    href="/"
                >
                    riley fletcher
                </Link>
            </div>
           
            <div className="flex items-center">
                <Link 
                    className={`font-bold text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-300 hover:text-blue ${isActive('/about') ? 'text-blue' : ''}`} 
                    href="/about"
                >
                    about
                </Link>
                <Link 
                    className={`font-bold text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-300 hover:text-green ${isActive('/projects') ? 'text-green' : ''}`} 
                    href="/projects"
                >
                    projects
                </Link>
                <Link 
                    className={`font-bold text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-300 hover:text-blue ${isActive('/blog') ? 'text-blue' : ''}`} 
                    href="/blog"
                >
                    blog
                </Link>
                <Link 
                    className={`font-bold text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-300 hover:text-green ${isActive('FletcherResume2024.pdf') ? 'text-green' : ''}`} 
                    href="FletcherResume2024.pdf" 
                    download="fletcher_resume"
                >
                    resume
                </Link>
            </div>
        </nav>
    )
}