import Image from "next/image";

export default function Experience() {
    return (
        <div className="text-center md:px-36 space-y-24">
            <h2 className="text-3xl font-extrabold leading-tight mb-4 sm:text-4xl md:text-5xl text-center">
                Experience
            </h2>

            <div className="flex flex-wrap items-center mt-20">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="dell.svg" alt="gem" className="inline-block" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Dell Technologies, <span className="font-medium">Software Engineering Intern</span>
                    </h3>
                    <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                        May 2024 - August 2024
                    </h2>
                    <p className="sm:text-lg mt-3">
                        Creating Python utilities for NVMe drive performance monitoring and analysis for the PowerStore backend protocols team.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="navy.svg" alt="project members" className="inline-block" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    United States Navy, <span className="font-medium">Software Engineering Intern</span>
                    </h3>
                    <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                        April 2023 - August 2023
                    </h2>
                    <p className="sm:text-lg mt-3">
                        Developed features on a JavaFX desktop application for naval training software, addressed OWASP 10 security vulnerabilities, and 
                        integrated VMWare ESXi into the program. Introduced JUnit testing and improved the CI/CD process by leveraging features of Gradle,
                        Jenkins, and GitLab.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="/uvalogo.png" alt="editor" className="inline-block" width={250} height={250}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        University of Virginia, <span className="font-medium">Teaching Assistant</span>
                        </h3>
                        <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                            January 2024 - Current
                        </h2>
                        <p className="sm:text-lg mt-3">
                            Hosted labs, held office hours, and assisted in exam preparation for Computer Systems and Organization I and II. The two courses cover
                            hardware design, circuits, data and process representation, and x86 assembly. C programming is used to explore
                            concurrency, virtual memory, networking, security concepts, and Linux/unix internals.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="train2.svg" alt="bulk editing" className="inline-block" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Virginia Railway Express, <span className="font-medium">Technology Intern</span>
                        </h3>
                        <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                            June 2022 - April 2023
                        </h2>
                        <p className="sm:text-lg mt-3">
                        Developed scripts for data analysis and task automation. Streamlined user workstation setup processes. 
                        Provided IT support, focusing on cloud services and collaboration tools. 
                        Maintained network infrastructure at office and remote locations, including train stations.
                        </p>
                </div>
            </div>

        </div>
    )
}