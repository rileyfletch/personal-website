import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="bg-cream sticky top-0 z-50">
        <Navigation ></Navigation>
        <hr className=" h-0.2 mx-auto text-dcream bg-dcream"></hr>
      </header>

      <div className="flex flex-col items-center mb-10">

            <div className="max-w-xl mx-auto space-y-5 mt-10">

                <div className="">
                    <p className="sm:text-2xl font-semibold text-dblue">The process of making this website.</p>
                    <p>July 6th, 2024</p>
                </div>
                

                <p className="sm:text-xl mb-4">
                    WIP 
                </p>

                <p className="sm:text-xl mb-4"> 
                WIP
                </p>

                <p className="sm:text-xl">
                    WIP
                </p>

                <p className="sm:text-xl mb-4 font-semibold">WIP</p>

            </div>
        </div>
    </main>
  );
}