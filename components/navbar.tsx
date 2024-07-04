import Image from "next/image";

export default function Navigation() {
    return(
        <nav className="py-3 px-4 flex items-center justify-between">
            <div className="flex flex-row">
                <a className="font-medium text-2xl tracking-tight transition-all duration-700 hover:text-red pr-2" href="/">
                riley fletcher 
                </a>
            </div>
            
            <div className="flex items-center">
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-blue" href="/about">about</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-green" href="/projects">projects</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-blue" href="/blog">blog</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-green" href="resume.pdf" download="fletcher_resume">resume</a>
            </div>
        </nav>
    )
}