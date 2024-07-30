import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pb-16">
            <div className="container mx-auto md:px-56 md:py-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:text-left">
                        <h1 className="text-7xl font-extrabold leading-tight mb-6 sm:text-7xl md:text-7xl transition-all duration-700 hover:text-blue">
                            Hi, I&apos;m Riley.
                        </h1>
                        <p className="font-medium mb-6 max-w-3xl mx-auto md:mx-0 leading-relaxed dark:text-gray-300 sm:text-xl text-center transition-all duration-700 hover:text-dblue">
                            Aspiring software engineer with interests in systems programming, security, and backend development.
                        </p>
                        <div className="flex flex-wrap items-center md:justify-start gap-6">
                            <a href="https://www.github.com/nrfletcher">
                                <Image src="github.svg" alt="GitHub" width={40} height={40} 
                                className="transition-all duration-1000 hover:brightness-0 hover:invert hover:sepia hover:saturate-[5000%] hover:hue-rotate-[190deg]"></Image></a>
                            <a href="https://www.linkedin.com/in/rileyfletcher">
                                <Image src="linkedin.svg" alt="GitHub" width={40} height={40}
                                className="transition-all duration-1000 hover:brightness-0 hover:invert hover:sepia hover:saturate-[5000%] hover:hue-rotate-[190deg]"></Image></a>
                            <a href="mailto:nrileyfletcher@gmail.com">
                                <Image src="email.svg" alt="GitHub" width={40} height={40}
                                className="transition-all duration-1000 hover:brightness-0 hover:invert hover:sepia  hover:hue-rotate-[290deg]"></Image></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image className="object-cover object-center rounded" alt="hero" src="shield.svg" width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}