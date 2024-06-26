import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-col items-center mb-10">

            <div className="flex flex-row items-center mb-6 mt-8">
                    <h2 className="pr-2 text-xl font-medium leading-tight mb-1 sm:text-4xl md:text-5xl text-center transition-colors duration-1000 ease-in-out hover:text-red">
                            About Me
                    </h2>
                    <Image src="codesquare.svg" alt="code" width={50} height={50}></Image>
            </div>

            <div className="max-w-xl mx-auto space-y-5">
                <p className="sm:text-lg mb-4">
                    Hi, I&apos;m <span className="underline font-semibold">Riley</span>, and I&apos;m currently studying computer and data science at 
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

                <p className="sm:text-lg">
                    Beyond computer stuff, I love to listen to music, read, and play a variety of sports. 
                    Lately, I&apos;ve been having fun mountain biking.
                    As much as I enjoy living in an IDE for hours, getting outside is crucial to me, and I love to explore new places. 
                    Dell Technologies, <span className="font-medium">Software Engineering Intern</span>
                    Creating Python utilities for NVMe drive performance monitoring and analysis for the PowerStore backend protocols team.
                </p>

                <p className="sm:text-lg">
                University of Virginia, <span className="font-medium">Teaching Assistant</span>
                Supported Computer Systems and Organization I & II courses. Hosted labs, office hours, and exam prep sessions. 
                Topics included hardware design, circuits, x86 assembly, and C programming for systems concepts like concurrency, virtual memory, and Linux internals.
                </p>

                <p className="sm:text-lg">
                United States Navy, <span className="font-medium">Software Engineering Intern</span>
                Enhanced naval training software with new features and improved security. 
                    Integrated virtualization technology and implemented JUnit testing. 
                    Improved CI/CD process involving Gradle and Jenkins.
                </p>

                <p className="sm:text-lg">
                After my first year at community college I did an internship at Virginia Railway Express,
                where I was an information technology intern. As my first &apos;proper&apos; technical role,
                I learned a lot about being in a professional environment. From a technical perspective, I did
                a lot of physical networking both in-office and at train stations, shell scripting to automate
                tasks and aggegrate data, and general help desk stuff. I ended up working here part time until the Summer
                of my second year at community college.
                </p>

            </div>
        </div>
    )
}