import Image from "next/image";

export default function Experience() {
    return (
        <div className="text-center md:px-48 space-y-24">
            <h2 className="text-3xl font-extrabold leading-tight mb-4 sm:text-4xl md:text-5xl text-center">
                Experience
            </h2>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
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
                        Use the LocaleData gem to download translations directly into your Ruby on Rails
                        projects using the provided command line interface. Just create a project and follow
                        the step-by-step instructions.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="navy.svg" alt="project members" className="inline-block" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    United States Navy, <span className="font-medium">Software Engineering Intern</span>
                    </h3>
                    <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                        May 2024 - August 2024
                    </h2>
                    <p className="sm:text-lg mt-3">
                        Use the LocaleData gem to download translations directly into your Ruby on Rails
                        projects using the provided command line interface. Just create a project and follow
                        the step-by-step instructions.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left  text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="/uvalogo.png" alt="editor" className="inline-block" width={250} height={250}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        University of Virginia, <span className="font-medium">Teaching Assistant</span>
                        </h3>
                        <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                            May 2024 - August 2024
                        </h2>
                        <p className="sm:text-lg mt-3">
                            Use the LocaleData gem to download translations directly into your Ruby on Rails
                            projects using the provided command line interface. Just create a project and follow
                            the step-by-step instructions.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="train2.svg" alt="bulk editing" className="inline-block" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Virginia Railway Express, <span className="font-medium">Technology Intern</span>
                        </h3>
                        <h2 className="font-light mt-10 text-xl md:mt-2 sm:text-1xl">
                            May 2024 - August 2024
                        </h2>
                        <p className="sm:text-lg mt-3">
                            Use the LocaleData gem to download translations directly into your Ruby on Rails
                            projects using the provided command line interface. Just create a project and follow
                            the step-by-step instructions.
                        </p>
                </div>
            </div>

        </div>
    )
}