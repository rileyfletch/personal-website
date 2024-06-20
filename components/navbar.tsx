import Image from "next/image";

export default function Navigation() {
    return(
        <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
            <a className="font-bold text-xl tracking-tight" href="#">riley fletcher</a>
            <div className="flex items-center">
                <a href="https://www.google.com" className="ml-5 mr-5"><Image src="train.svg" alt="" width={30} height={30}></Image>
                </a>
                <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
                <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
                <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
            </div>
            
        </nav>
    )
}