export default function Page() {
  return (
    <main className="flex flex-col justify-between px-4 bg-stone-600">

        <nav className="fixed container mx-auto flex justify-end items-center pr-8 pt-4">
          <ul className="space-x-4">
            <li>
              <a href="#about" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

      <section id="about" className="container mx-auto py-16">
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

      <section id="projects" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <p>
            text
          </p>
        </div>
      </section>

      <section id="contact" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="max-w-md">
        </form>
      </section>

      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Your Name
        </div>
      </footer>

    </main>
  );
}
