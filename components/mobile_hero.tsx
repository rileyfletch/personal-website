import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileHero() {
    return (
        <section className="min-h-screen flex items-center pb-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-56 py-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center">
                        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 transition-all duration-700 hover:text-blue text-center md:text-left">
                            Hi, I&apos;m Riley.
                        </h1>
                        <p className="font-medium mb-6 max-w-3xl mx-auto md:mx-0 leading-relaxed dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl text-center transition-all duration-700 hover:text-dblue">
                            Aspiring software engineer enthusiastic about software infrastructure, low-level computing, and systems programming.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                            <a href="https://www.github.com/rileyfletch">
                                <Image src="github.svg" alt="GitHub" width={40} height={40}
                                className="transition-all duration-1000 hover:brightness-0 hover:invert hover:sepia hover:saturate-[5000%] hover:hue-rotate-[190deg]" />
                            </a>
                            <a href="https://www.linkedin.com/in/rileyfletcher">
                                <Image src="linkedin.svg" alt="LinkedIn" width={40} height={40}
                                className="transition-all duration-1000 hover:brightness-0 hover:invert hover:sepia hover:saturate-[5000%] hover:hue-rotate-[190deg]" />
                            </a>
                            <a href="mailto:nrileyfletcher@gmail.com">
                                <Image src="email.svg" alt="Email" width={40} height={40}
                                className="transition-all duration-1000 hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[290deg]" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <Image className="object-cover object-center rounded max-w-full h-auto" alt="hero" src="shield.svg" width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}