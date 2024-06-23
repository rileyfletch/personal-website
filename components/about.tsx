export default function About() {
    return (
        <div className="flex flex-col items-center pt-8">
            <h2 className="">About Me</h2>
            <p className="sm:text-lg mt-3">Hey, I&apos;m Riley, and I&apos;m currently studying computer and data science at the University of Virginia.

            </p>

            <div className="mt-20">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Dell Technologies, <span className="font-medium">Software Engineering Intern</span>
                    </h3>
                    <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                        May 2024 - August 2024
                    </h2>
                    <p className=" mt-3">
                        Creating Python utilities for NVMe drive performance monitoring and analysis for the PowerStore backend protocols team.
                    </p>
            </div>

            <div className="mt-20">
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

            <div className="mt-20">
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

            <div className="mt-20">
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
    )
}