export default function AboutSection() {
  return (
    <section id="about" className="py-16 flex flex-col items-center">
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-10 pb-1 text-5xl text-white font-bold text-center mb-10">
        A student and aspiring software engineer
      </h1>

      <div className="max-w-5xl">
        <p className="text-2xl mb-5">Hi, I&apos;m Riley 👋</p>

        <p className="text-2xl mb-5">
          I&apos;m currently studying at the University of Virginia majoring in computer science, with a minor in data science. 
          I&apos;m a teaching assistant for CSO1 and CSO2, the first two introductory courses in computer systems which are a part of the core UVA CS curriculum.
          Additionally, I have been a part of theCourseForum as a developer, and a member of Motorsports Club and Outdoors Club.
        </p>

        <p className="text-2xl mb-5">
          I truly love all things tech, but I&apos;m particularly interested in systems. 
          Anything to do with compilers, networks, operating systems, security, device drivers, and how these areas interact with hardware, all fascinate me. 
          Consequently, I&apos;ve also become interested in learning about embedded systems, virtualization, and concurrent programming.
          Aside from that, I enjoy learning about data science and machine learning, and really any sort of backend programming interests me! If it isn&apos;t obvious
          from this website, design is not my strong suite.
        </p>

        <p className="text-2xl mb-5">
          Aside from computer stuff, I love music (more so listening than playing these days, but I dabble in guitar), reading books, and trying to stay in shape either mountain biking, 
          playing tennis/pickleball, or occasionally going to the gym. I also love to learn about history, finance, and fast cars. I also have a Letterboxd if you want 
          to judge my horrific movie ratings.
        </p>
      </div>
    </section>
  );
}