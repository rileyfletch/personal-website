import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-prussian">

      <div className="sticky top-0 p-8 flex items-center">
          <ul className="list-none ml-auto">
            <li className="mb-2"><a href="#" className="hover:bg-red-700 text-2xl">About</a></li>
            <li className="mb-2"><a href="#" className="hover:bg-red-700 text-2xl">Experience</a></li>
            <li className="mb-2"><a href="#" className="hover:bg-red-700 text-2xl">Projects</a></li>
            <li className="mb-2"><a href="#" className="hover:bg-red-700 text-2xl">Contact</a></li>
            <li className="mb-2"><Link href="/blog" className="hover:bg-red-700 text-2xl">Blog</Link></li>
          </ul>
      </div>

      <div className="flex flex-col items-center">
        <section id="about" className="">
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
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

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p>
              text
            </p>
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
          <form className="max-w-md">
          </form>
        </section>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Your Name
          </div>
        </footer>
      </div>

      

    </main>
  );
}
