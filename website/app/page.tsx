import Link from "next/link";

export default function Page() {
  return (
    <main className="font-serif area">

      <div>
        <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
      

      <div className="sticky top-0 p-8 flex items-center">
          <ul className="list-none ml-auto">
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl">Experience</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl">Projects</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl">Contact</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl">Resume</a></li>
            <li className="mb-2"><Link href="/blog" className="hover:text-engineering text-2xl">Blog</Link></li>
          </ul>
      </div>

      <div className="flex flex-col">
        <section id="about" className="">
          <h1 className="text-7xl font-bold mb-4 ml-10">Riley Fletcher is an aspiring software engineer</h1>
          <p className="">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
          <p className="">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
          <p className="">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
          <p className="">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p>
              text
            </p>
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p>
              text
            </p>
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Contact</h2>
          <form className="max-w-md">
          </form>
        </section>

        <footer className="text-white py-4">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Riley Fletcher
          </div>
        </footer>
      </div>

    </main>
  );
}
