import Image from "next/image";

export default function Projects() {
    return (
    <div className="px-2 py-16">
        <div id="features" className="mx-auto max-w-6xl">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                Projects
            </h2>
            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">

                <Image src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium">Powered by ChatGPT</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
                effortlessly tap into the world of AI-generated text.
                </p>

            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">

                <Image src="https://www.svgrepo.com/show/530442/port-detection.svg"
                        alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium">Easy to use</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Simply input your subject, click the generate button, and the result will appear in seconds just like
                magick.
                </p>

            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <Image src="https://www.svgrepo.com/show/530444/availability.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium">Custom settings</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
                lengths,
                and formats.
                </p>

            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                    provide
                    many payment options including pay-as-you-go and subscription.</p>
                </a>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <a href="/templates" className="group">
                <Image src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    90+ templates
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
                    writing,
                    education, lifestyle and creativity to inspire your potential. </p>
                </a>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                <a href="/download" className="group">
                <Image src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Use Anywhere</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
                    including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
                </a>
            </li>
            </ul>
        </div>
    </div>
    )
}