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
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl link-underline link-underline-black">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl link-underline link-underline-black">Experience</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl link-underline link-underline-black">Projects</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl link-underline link-underline-black">Contact</a></li>
            <li className="mb-2"><a href="#" className="hover:text-engineering text-2xl link-underline link-underline-black">Resume</a></li>
            <li className="mb-2"><Link href="/blog" className="hover:text-engineering text-2xl link-underline link-underline-black">Blog</Link></li>
          </ul>
      </div>

      <div className="flex flex-col">
        <section id="about" className="">
          <h1 className="text-7xl font-bold mb-4 ml-10">Riley Fletcher is an aspiring software engineer</h1>
          <p className="">
            paragraph about my achievements so far (high level)
          </p>
          <p className="">
            paragraph about my future goals (high level)
          </p>
          <p className="">
            paragraph about my technical interests
          </p>
          <p className="">
            paragraph about what i do outside of computer stuff
          </p>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p>
              have a good looking section for each past work experience (provide an image and a good description of what i did)
            </p>
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p>
              have project cards here with a general description/technologies and is clickable to see github
            </p>
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center">Contact</h2>
          <div>
            <p>have clickable icons for all stuff (github/email/linkedin/devpost etc.)</p>
          </div>
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
