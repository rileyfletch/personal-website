import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
    return (
    <div className="px-2 py-8 bg-cream flex flex-col items-center">

        <p className="text-center font-medium text-lg">What I work on.</p>
        
        <div id="features" className="mx-auto max-w-6xl mt-8">
            <ul className=" grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                 <a href="https://github.com/nrfletcher/r86-virtual-machine" className="group">
                <Image src="processor.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">r86 Virtual Machine</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">A minimal virtual machine inspired by x86 and LC-3
                    architectures, featuring a program loader, debugging tools, and an assembler.
                </p>
                </a>
            </li>
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-green">
                <a href="https://github.com/nrfletcher/historymaps" className="group">
                <Image src="map.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">HistoryMaps</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">An interactive web application that allows users to explore how
                    geography and history mesh together. 
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="https://github.com/nrfletcher/trivia-bot" className="group">
                <Image src="question.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TriviaBot</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Discord bot that adds trivia to a channel, and an accompanying
                    server analytics application using PyQt and MySQL.
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-green">
                <a href="https://github.com/nrfletcher/swing-chess" className="group">
                <Image src="chess.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Swing Chess</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">A simple two-player chess game built using Java Swing that implements
                    the Model-View-Controller pattern.
                </p>
                </a>
            </li>

            <li className="rounded-3xl mb-8 px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="https://github.com/nrfletcher/openai-discord-chatbot" className="group">
                <Image src="bot.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text1">Automotive GPT Chatbot</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">A Discord chatbot that utilizes a corpus of scrubbed automotive data and the OpenAI API to answer questions.
                </p>
                </a>
            </li>

            <li className="rounded-3xl mb-8 px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-green">
                <a href="https://github.com/nrfletcher/personal-website" className="group">
                <Image src="website.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text1">Personal Website</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">The second iteration of my personal site. The stack consists of Next.js with TypeScript, TailwindCSS, and Framer Motion.
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="https://github.com/nrfletcher/fx-chat-app" className="group">
                <Image src="messages.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    SocketTalk
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">JavaFX desktop application for talking to other users on a local network.</p>
                </a>
            </li>


            </ul>
        </div>
    </div>
    )
}