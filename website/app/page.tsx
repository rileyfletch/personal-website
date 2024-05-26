export default function Page() {
  return (
    <main className="flex flex-col">

      <div className="sticky top-0 p-4 flex items-center">
        <div className="ml-auto">
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="">Home</a></li>
            <li className="mb-2"><a href="#" className="">About</a></li>
            <li className="mb-2"><a href="#" className="">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="leading-relaxed">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
          <p className="leading-relaxed">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
          <p className="leading-relaxed">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
          <p className="leading-relaxed">
            this will be a bunch of stuff
            this will be a bunch of stuff
          </p>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p>
              text
            </p>
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <form className="max-w-md">
          </form>
        </section>

        <footer className="bg-gray-800 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Your Name
          </div>
        </footer>
      </div>

      

    </main>
  );
}
