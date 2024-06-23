import Image from "next/image";

export default function Navigation() {
    return(
        <nav className="py-3 px-4 flex items-center justify-between">
            <a className="font-medium text-2xl tracking-tight transition-all duration-700 hover:text-lblue" href="/">riley fletcher</a>
            <div className="flex items-center">
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-lblue" href="/about">about</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-lblue" href="/projects">projects</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-lblue" href="/blog">blog</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full tracking-tight transition-all duration-700 hover:text-lblue" href="/public/train.svg" download="fletcher_resume">resume</a>
            </div>
        </nav>
    )
}