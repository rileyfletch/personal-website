import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pb-16">
            <div className="container mx-auto md:px-24 md:py-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
                        <h1 className="text-3xl font-extrabold leading-tight mb-4 sm:text-4xl md:text-5xl">
                        Hi, I&apos;m Riley
                        </h1>
                        <p className="font-medium mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed dark:text-gray-300 sm:text-lg">
                        I&apos;m an aspiring software engineer with a passion for backend development, an interest in systems, and a hunger to solve unique problems
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#" className="inline-flex text-white bg-pastel6 border-0 py-2 px-6 focus:outline-none hover:bg-pastel5 rounded-xl text-lg transition-colors duration-300 ease-in-out">
                            Download Resume
                        </a>
                        <a href="#" className="inline-flex text-gray-700 bg-pastel4 border-0 py-2 px-6 focus:outline-none hover:bg-pastel2 rounded-xl text-lg transition-colors duration-300 ease-in-out">
                            Read Articles
                        </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image className="object-cover object-center rounded" alt="hero" src="pyramid.svg" width={300} height={300} />
                    </div>
                    </div>
            </div>
        </section>
    )
}