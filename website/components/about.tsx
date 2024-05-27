export default function AboutSection() {
  return (
    <section id="about" className="py-16 flex flex-col items-center">
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-10 pb-1 text-5xl text-white font-bold text-center mb-10">
        Aspiring to contribute to the world of compute
      </h1>

      <div className="max-w-5xl">
        <p className="font-bold text-2xl mb-5">Hi, I&apos;m Riley 👋</p>

        <p className="text-2xl mb-5">
          I&apos;m currently studying at the <a href="https://www.virginia.edu/" 
          className="hover:text-engineering transition duration-500 underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">University of Virginia
          </a> majoring in <span className="italic">computer science</span>, with a minor in <span className="italic">data science</span>. 
          I&apos;m a teaching assistant for CSO1 and CSO2, the first two introductory courses in computer systems which are a part of the core UVA CS curriculum.
          Additionally, I have been a part of <a href="https://thecourseforum.com/" 
          className="hover:text-engineering transition duration-500 underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">theCourseForum</a> as a developer, a member of Virginia Motorsports, and Outdoors Club.
          I greatly enjoy teaching others and collaborating on fun, interesting, or innovative projects.
        </p>

        <p className="text-2xl mb-5">
          I truly love all things tech, but I&apos;m particularly interested in systems. 
          Anything to do with networks, operating systems, compilers, cybersecurity, and how these areas interact with hardware, all fascinate me. 
          Consequently, I&apos;ve also become interested in learning about embedded systems, device drivers, and virtualization.
          Aside from that, I like to toy with data science/machine learning, and really any sort of backend programming interests me. If it isn&apos;t obvious
          from this site, web design is not my strong suit.
        </p>

        <p className="text-2xl mb-5">
          Aside from computer stuff, I love music (more so listening than playing these days, but I dabble in guitar), reading books, 
          and trying to stay in shape by either mountain biking, 
          playing tennis/pickleball, or <span className="italic">occasionally</span> going to the gym. I also love to learn about history, finance, and fast cars. I also have a <a href="https://letterboxd.com/rileyfletcher/" 
          className="hover:text-engineering transition duration-500 underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">Letterboxd</a> if you want 
          to judge my horrific movie ratings.
        </p>
      </div>
    </section>
  );
}