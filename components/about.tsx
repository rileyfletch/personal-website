import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-col items-center mb-10">

            <div className="flex flex-row items-center mb-6 mt-4">
                    <h2 className="pr-2 text-xl font-medium leading-tight mb-1 sm:text-4xl md:text-5xl text-center transition-colors duration-1000 ease-in-out hover:text-red">
                            About
                    </h2>
                    <Image src="codesquare.svg" alt="code" width={50} height={50}></Image>
            </div>

            <div className="max-w-5xl mx-auto space-y-5">
                <p className="sm:text-lg mb-4">
                    Hi, I&apos;m Riley, and I&apos;m currently studying computer and data science at 
                    the <a href="https://www.virginia.edu/" className="underline hover:text-blue transition-colors duration-700 ease-in-out">University of Virginia</a>.
                    Besides taking classes, I&apos;m a teaching assistant for Computer Systems and Organization, 
                    and a student developer at <a href="https://thecourseforum.com" className="underline hover:text-red transition-colors duration-700 ease-in-out">theCourseForum</a>. 
                    I love all things technology and computers,
                    however, I find particular interest in areas such as operating systems,
                    embedded systems, networks, security, and machine learning.
                </p>

                <p className="sm:text-lg">
                    Beyond computer stuff, I love to listen to music, read, and play a variety of sports. 
                    Lately, I&apos;ve been having fun mountain biking.
                    As much as I enjoy living in an IDE for hours, getting outside is crucial to me, and I love to explore new places. 
                </p>

            </div>

            <div className="flex flex-row items-center mb-6 mt-6">
                <h2 className="pr-2 text-medium font-medium leading-tight mb-2 sm:text-4xl md:text-5xl text-center transition-colors duration-1000 ease-in-out hover:text-red">
                        Experience
                </h2>
            </div>

            <div className="max-w-6xl mx-auto space-y-10">
            <div>
                <h3 className="font-bold text-xl sm:text-2xl">
                        Dell Technologies, <span className="font-medium">Software Engineering Intern</span>
                    </h3>
                    <h2 className="font-light text-xl mt-2">
                        May 2024 - August 2024
                    </h2>
                    <p className="mt-3 sm:text-lg">
                        Creating Python utilities for NVMe drive performance monitoring and analysis for the PowerStore backend protocols team.
                    </p>
                </div>

            <div>
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    United States Navy, <span className="font-medium">Software Engineering Intern</span>
                    </h3>
                    <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                        April 2023 - August 2023
                    </h2>
                    <p className="sm:text-lg mt-3">
                    Enhanced naval training software with new features and improved security. 
                    Integrated virtualization technology and implemented JUnit testing. 
                    Improved CI/CD process involving Gradle and Jenkins.
                    </p>
            </div>

            <div>
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    University of Virginia, <span className="font-medium">Teaching Assistant</span>
                    </h3>
                    <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                        January 2024 - Current
                    </h2>
                    <p className="sm:text-lg mt-3">
                    Supported Computer Systems and Organization I & II courses. Hosted labs, office hours, and exam prep sessions. 
                    Topics included hardware design, circuits, x86 assembly, and C programming for systems concepts like concurrency, virtual memory, and Linux internals.
                </p>
            </div>

            <div>
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Virginia Railway Express, <span className="font-medium">Technology Intern</span>
                </h3>
                <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                    June 2022 - April 2023
                </h2>
                <p className="sm:text-lg mt-3">
                Automated data analysis and workstation setup. Offered IT support for cloud and collaboration tools. 
                Maintained network infrastructure across office and remote sites, including train stations.
                </p>
            </div>
            </div>

        </div>
    )
}