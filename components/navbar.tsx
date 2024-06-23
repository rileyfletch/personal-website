import Image from "next/image";

export default function Navigation() {
    return(
        <nav className="py-3 px-4 flex items-center justify-between">
            <a className="font-medium text-2xl tracking-tight" href="/">riley fletcher</a>
            <div className="flex items-center">
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/experience">Experience</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/projects">Projects</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/contact">Contact</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/blog">Blog</a>
                <a className="font-medium text-md px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/public/train.svg" download="fletcher_resume">Resume</a>
            </div>
        </nav>
    )
}