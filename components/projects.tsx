import Image from "next/image";

export default function Projects() {
    return (
    <div className="px-2 py-24">
        <div id="features" className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-extrabold leading-tight mb-4 sm:text-4xl md:text-5xl text-center">
                    Projects
            </h2>

            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-3xl bg-dcream px-6 py-8 shadow-sm transition-colors duration-500 ease-in-out hover:bg-pastel1">

                 <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                    provide
                    many payment options including pay-as-you-go and subscription.</p>
                </a>

            </li>
            <li className="rounded-3xl bg-dcream px-6 py-8 shadow-sm transition-colors duration-500 ease-in-out hover:bg-pastel2">

                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                    provide
                    many payment options including pay-as-you-go and subscription.</p>
                </a>

            </li>
            <li className="rounded-3xl bg-dcream px-6 py-8 shadow-sm transition-colors duration-500 ease-in-out hover:bg-pastel4">
                
                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                    provide
                    many payment options including pay-as-you-go and subscription.</p>
                </a>

            </li>
            <li className="rounded-3xl bg-dcream px-6 py-8 shadow-sm transition-colors duration-500 ease-in-out hover:bg-pastel4">
                <a href="/pricing" className="group">
                <Image src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
                    provide
                    many payment options including pay-as-you-go and subscription.</p>
                </a>
            </li>
            <li className="rounded-3xl bg-dcream px-6 py-8 shadow-sm transition-colors duration-500 ease-in-out hover:bg-pastel5">
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
            <li className="rounded-3xl bg-dcream px-6 py-8 shadow-sm transition-colors duration-500 ease-in-out hover:bg-pastel6">
                <a href="/download" className="group">
                <Image src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10" width={200} height={200}></Image>
                <h3 className="my-3 font-display font-medium group-hover:text1">Use Anywhere</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
                    including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
                </a>
            </li>
            </ul>

        </div>
    </div>
    )
}