export default function About() {
    return (
        <div className="flex flex-col items-center mb-10">

            <div className="max-w-2xl mx-auto space-y-5 mt-10">

                <p className="sm:text-xl mb-4 font-semibold">A quick summary.</p>

                <p className="sm:text-xl mb-4">
                Hey! I&apos;m Riley, a computer science and data science student at the
                <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://engineering.virginia.edu/department/computer-science"> University of Virginia</a>, graduating in Spring 2025.
                     
                     
                    
                    </p> 
                    <p className="sm:text-xl mb-4">
                    At UVA, I&apos;m a teaching assistant for Computer Systems and Organization I and II,
                    as well as a developer at <a className="text-red font-semibold transition-all duration-700 hover:text-green" href="https://thecourseforum.com/"> theCourseForum</a>. 
                    </p>
                    <p className="sm:text-xl mb-4">
                    Beyond academics, I&apos;ve interned for Dell Technologies, the United
                    States Navy, and Virginia Railway Express.
                </p>

                <p className="sm:text-xl mb-4"> 
                 Subjects I most enjoy learning about are operating systems, networks, security, computer hardware, and backend web development.
                </p>

                <p className="sm:text-xl mb-4"> 
                 I like engaging with data science, and while I have yet to do so, I greatly wish to
                 spend some time learning distributed systems, compilers, and concurrency.
                </p>

                <p className="sm:text-xl">
                In my free time I enjoy reading and creative writing, playing guitar, and sports like tennis or mountain biking. 
                Outside of tech, I love learning about finance, history, motorsports, and new recipes to cook poorly.
                </p>

                <p className="sm:text-xl mb-4 font-semibold">Work experience.</p>

                <p className="sm:text-xl"> 
                    During the Summer of 2024, I was a software engineering intern at <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://www.dell.com/en-us/shop/storage-servers-and-networking-for-business/sf/power-store"> Dell Technologies </a> 
                    working for on the Powerstore team. I built developer tools for bottleneck identification and performance profiling
                    on backend components near the xNVMe drive interface, and FIO workload automation tooling that could be run against
                    devices on the appliance itself. I also spent some time backporting new features into legacy performance analyis tools.
                </p>

                <p className="sm:text-xl">
                I&apos;m a computer science teaching assistant at the University of Virginia where I instruct for
                Computer Systems and Organization I and II, the two introductory systems courses that teach about hardware design,
                circuits, x86 assembly, and C programming to learn about concurrency, virtual memory, and Linux internals.
                </p>

                <p className="sm:text-xl">
                    Summer of 2023, after my final year at community college, I was a software engineering intern
                    for the United States Navy, at the <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://www.navsea.navy.mil/Media/News/Article/1929358/navy-warfare-center-engineers-revolutionize-aegis-combat-system-training-with-c/"> Dahlgren research facility </a>. As a part of the CIAT team,
                    I worked on naval training software where I spent most of my time improving the existing software by
                    addressing security concerns, outdated programming methodologies, and adding unit tests. I was able
                    to experience working on a large software project, and was introduced to things like CI/CD, agile
                    development, proper version control, and working in a lab with hardware appliances.
                </p>

                <p className="sm:text-xl">
                From the Summer of 2022 to Spring of 2023, I was an information technology intern at <a className="text-red font-semibold transition-all duration-700 hover:text-blue" href="https://www.vre.org/"> Virginia Railway Express </a>
                . As my first &apos;proper&apos; job,
                I learned a lot about working in a professional environment. Technically, I did
                a lot of physical networking both in-office and at train stations, shell scripting to automate
                tasks and aggegrate data, and general help desk stuff. This was a super unique experience, and easily one of my favorite places to work at.
                </p>

                
            </div>
        </div>
    )
}