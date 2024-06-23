import Image from "next/image";

export default function Projects() {
    return (
    <div className="px-2 py-8 bg-cream">
        <div id="features" className="mx-auto max-w-6xl">
            <h2 className="text-xl font-smibold leading-tight mb-4 sm:text-4xl md:text-5xl text-center">
                    Projects
            </h2>

            <ul className="mt-8 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-lblue">

                 <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Out-of-order Processor</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Simple processor emulator with program loader, debugger, and 
                    tooling to understand aspects of out-of-order program execution.
                </p>
                </a>

            </li>
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-lblue">

                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">HistoryMaps</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">An interactive web application that allows users to explore how
                    geography and history mesh together. 
                </p>
                </a>

            </li>
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-lblue">

                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">TriviaBot</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Discord bot that adds trivia to a channel, and an accompanying
                    server analytics application using PyQt and MySQL.
                </p>
                </a>

            </li>
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-lblue">
                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Swing Chess</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">A simple two-player chess game built using Java Swing that implements
                    the Model-View-Controller pattern.
                </p>
                </a>
            </li>
            <li className="rounded-3xl px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-lblue">
                <a href="/templates" className="group">
                <Image src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    SocketTalk
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">JavaFX application for talking to other computers on a local network.</p>
                </a>
            </li>
            <li className="rounded-3xl mb-8 px-6 py-8 shadow-sm transition-colors duration-1000 ease-in-out hover:bg-lblue">
                <a href="/download" className="group">
                <Image src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text1">Personalized GPT Chatbot</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Add a Discord bot to your server which can utilize an internal corpus of knowledge to answer questions.
                </p>
                </a>
            </li>
            </ul>

        </div>
    </div>
    )
}