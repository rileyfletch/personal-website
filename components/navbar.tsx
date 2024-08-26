import Link from "next/link"

export default function Navigation() {
    return(
        <nav className="py-3 px-4 flex items-center justify-between">
            <div className="flex flex-row">
                <Link className="font-medium text-2xl tracking-tight transition-all duration-700 hover:text-red pr-2" href="/">
                riley fletcher 
                </Link>
            </div>
            
            <div className="flex items-center">
                <Link className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-blue" href="/about">about</Link>
                <Link className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-green" href="/projects">projects</Link>
                <Link className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-blue" href="/blog">blog</Link>
                <Link className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-green" href="RileyFletcherResume2024.pdf" download="fletcher_resume">resume</Link>
            </div>
        </nav>
    )
}