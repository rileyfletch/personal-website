import Image from "next/image";

export default function Hero() {
    return (
        <section className="max-w-128 flex flex-row items-center pt-8">
            <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1
                        className="text-center text-3xl font-extrabold leading-9 tracking-tight mb-3 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                        Hi, I&apos;m Riley 
                    </h1>
                    <p className="mb-8 md:pl-0 pl-2 pr-16 mr-4 leading-relaxed dark:text-gray-300">
                        I&apos;m an aspiring software engineer with a passion for backend development, an interest in systems, and a hunger to solve unique problems
                    </p>
                    <div className="flex justify-center">
                        <a href="#"
                            className="inline-flex text-white bg-straw border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Start
                            Exploring
                        </a>
                        <a href="#"
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                            articles</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                    <Image className="object-cover object-center rounded" alt="hero" src="pyramid.svg" width={300} height={300}></Image>
                </div>
            </div>
        </section>
    )
}