export default function AboutSection() {
  return (
    <section id="about" className="py-16 flex flex-col items-center">
      

      <div className="max-w-4xl">
        <p className="font-bold text-5xl mb-8 mt-16"><span className="text-verdigris">Hi,</span> I&apos;m Riley 👋</p>

        <p className="text-3xl mb-5 pt-4">
          I&apos;m currently studying at the <a href="https://www.virginia.edu/" 
          className="transition duration-500 hover:text-engineering  underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">University of Virginia
          </a> majoring in <span className="italic">computer science</span>, with a minor in <span className="italic">data science</span>. 
          I&apos;m a teaching assistant for Computer Systems and Organization I and II,
          and a student developer for <a href="https://thecourseforum.com/" 
          className="hover:text-engineering transition duration-500 underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">theCourseForum</a>.
        </p>

        <p className="text-3xl mb-5 pt-4">
          I love all things tech, but I&apos;m particularly interested in systems. 
          Anything to do with networks, operating systems, compilers, cybersecurity, and how they interact with hardware. 
          Consequently, I&apos;ve also become interested in learning about embedded systems, device drivers, and virtualization.
        </p>

        <p className="text-3xl mb-5 pt-4">
          Aside from that, I like to toy with data science/machine learning, and really any sort of backend programming interests me. If it isn&apos;t obvious
          from this site, web design is not my strong suit.
        </p>

        <p className="text-3xl mb-5 pt-4">
          Aside from computer stuff, I like to play guitar, read books, 
          and try to stay in shape by either mountain biking, 
          playing tennis/pickleball, or <span className="italic">occasionally</span> going to the gym. I also have a <a href="https://letterboxd.com/rileyfletcher/" 
          className="hover:text-engineering transition duration-500 underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">Letterboxd</a> if you want 
          to judge my horrific movie ratings.
        </p>
      </div>
    </section>
  );
}