import Link from "next/link";

export default function NavigationSidebar() {
    return (
        <div className="sticky top-0 right-0 p-8">
          <ul className="list-none ml-auto">
            
            <li className="mb-2"><a href="#experience" className="font-bold transition-colors duration-700 hover:text-persian text-2xl link-underline link-underline-black">
              Experience</a></li>
            <li className="mb-2"><a href="#projects" className="font-bold transition-colors duration-700 hover:text-persian text-2xl link-underline link-underline-black">
              Projects</a></li>
            <li className="mb-2"><a href="#about" className="font-bold transition-colors duration-700 hover:text-persian text-2xl link-underline link-underline-black">
              About</a></li>
            <li className="mb-2"><a href="#contact" className="font-bold transition-colors duration-700 hover:text-persian text-2xl link-underline link-underline-black">
              Contact</a></li>
            <li className="mb-2"><a href="#" className="font-bold transition-colors duration-700 hover:text-persian text-2xl link-underline link-underline-black">
              Resume</a></li>
            <li className="mb-2"><Link href="/blog" className="font-bold transition-colors duration-700 hover:text-persian text-2xl link-underline link-underline-black">
              Blog</Link></li>
          </ul>
      </div>
    )
}