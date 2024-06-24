import Image from "next/image";

export default function Projects() {
    return (
    <div className="px-2 py-8 bg-cream flex flex-col items-center">
        <div className="flex flex-row items-center">
                <h2 className="pr-2 text-xl font-medium leading-tight mb-1 sm:text-4xl md:text-5xl text-center transition-colors duration-1000 ease-in-out hover:text-red">
                        Projects
                </h2>
                <Image src="codesquare.svg" alt="code" width={50} height={50}></Image>
        </div>

        <p className="text-center font-medium text-lg mt-8">Building projects is a fun way to learn new languages and technologies.</p>
        
        <div id="features" className="mx-auto max-w-6xl mt-8">
            <ul className="mt-4 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                 <a href="/pricing" className="group">
                <Image src="processor.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Out-of-order Processor</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Simple processor emulator with program loader, debugger, and 
                    tooling to understand aspects of out-of-order program execution.
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="/pricing" className="group">
                <Image src="map.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">HistoryMaps</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">An interactive web application that allows users to explore how
                    geography and history mesh together. 
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="/pricing" className="group">
                <Image src="question.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TriviaBot</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Discord bot that adds trivia to a channel, and an accompanying
                    server analytics application using PyQt and MySQL.
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="/pricing" className="group">
                <Image src="chess.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Swing Chess</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">A simple two-player chess game built using Java Swing that implements
                    the Model-View-Controller pattern.
                </p>
                </a>
            </li>

            <li className="rounded-3xl mb-8 px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="/download" className="group">
                <Image src="bot.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text1">Personalized GPT Chatbot</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Add a Discord bot to your server which can utilize an internal corpus of knowledge to answer questions.
                </p>
                </a>
            </li>

            <li className="rounded-3xl mb-8 px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="/download" className="group">
                <Image src="website.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text1">Personal Website</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">The second iteration of my personal site. My web stack consists of Next.js with TypeScript, TailwindCSS, and Framer Motion.
                </p>
                </a>
            </li>

            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-blue">
                <a href="/templates" className="group">
                <Image src="messages.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    SocketTalk
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">JavaFX application for talking to other computers on a local network.</p>
                </a>
            </li>


            </ul>
        </div>
    </div>
    )
}