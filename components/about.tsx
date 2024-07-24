export default function About() {
    return (
        <div className="flex flex-col items-center mb-10">

            <div className="max-w-xl mx-auto space-y-5 mt-10">

                <p className="sm:text-xl mb-4 font-semibold">A brief overview.</p>

                <p className="sm:text-xl mb-4">
                Hi! I&apos;m Riley, a computer science and data science student at
                <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://engineering.virginia.edu/department/computer-science"> University of Virginia</a>, graduating in Spring 2025.
                     
                     
                    
                    </p> 
                    <p className="sm:text-xl mb-4">
                    At UVA, I&apos;m a teaching assistant for Computer Systems and Organization I and II,
                    and a developer at <a className="text-red font-semibold transition-all duration-700 hover:text-green" href="https://thecourseforum.com/"> theCourseForum</a>. I&apos;ve interned at Dell Technologies, the United
                    States Navy, and Virginia Railway Express.
                </p>

                <p className="sm:text-xl mb-4"> 
                While I&apos;m passionate about all aspects of computing, my primary interests lie in systems, including operating systems, networks, security, embedded systems, and backend web development.
                </p>

                <p className="sm:text-xl">
                Outside of technology, I enjoy reading, writing, listening to music, playing guitar, mountain biking, and exploring nature. For a more detailed overview of my work experience, continue reading.
                </p>

                <p className="sm:text-xl mb-4 font-semibold">Work experience.</p>

                <p className="sm:text-xl"> 
                    During the Summer of 2024, I was a software engineering intern at <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://www.dell.com/en-us/shop/storage-servers-and-networking-for-business/sf/power-store"> Dell Technologies </a> working for Powerstore
                    on the backend protocols team. I built developer tools for bottleneck identification and performance profiling
                    on backend components near the xNVMe drive interface, and FIO workload automation tooling that could be run against
                    devices on the appliance itself. I also spent some time backporting new features into legacy performance analyis tools.
                </p>

                <p className="sm:text-xl">
                I am a computer science teaching assistant at the University of Virginia where I instruct for
                Computer Systems and Organization I, an introductory systems course that teaches about hardware design,
                circuits, x86 assembly, and C programming. I primarily host office hours, labs, and assist in exam
                preperation. I&apos;ve really enjoyed this role, and it&apos;s taught me a lot about discussing problems
                and knowledge transferring. This Fall I&apos;m returning to CSO1 as well as CSO2, our secondary systems course 
                that focuses on C programming for systems concepts like concurrency, virtual memory, and Linux internals.
                </p>

                <p className="sm:text-xl">
                    The Summer of 2023, after my final year at community college, I was a software engineering intern
                    for the United States Navy, at the <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://www.navsea.navy.mil/Media/News/Article/1929358/navy-warfare-center-engineers-revolutionize-aegis-combat-system-training-with-c/"> Dahlgren research facility </a>. As a part of the CIAT team,
                    I worked on naval training software where I spent most of my time improving the existing software by
                    addressing security concerns, outdated programming methodologies, and adding unit tests. I was able
                    to experience working on a large software project, and was introduced to things like CI/CD, agile
                    development, proper version control, and working in a lab with hardware appliances.
                </p>

                <p className="sm:text-xl">
                From the Summer of 2022 to Spring of 2023, I was an information technology intern at <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://www.vre.org/"> Virginia Railway Express </a>
                . As my first &apos;proper&apos; technical role,
                I learned a lot about being in a professional environment. From a technical perspective, I did
                a lot of physical networking both in-office and at train stations, shell scripting to automate
                tasks and aggegrate data, and general help desk stuff. I ended up working here part time until the Summer
                of my second year at community college.
                </p>

                
            </div>
        </div>
    )
}