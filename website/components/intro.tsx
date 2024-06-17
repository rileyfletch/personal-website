export default function IntroSection() {
    return (
    <section id="intro" className="py-16 flex flex-col items-center">
      <div className="max-w-4xl">
        <p className="font-bold text-5xl mb-8 mt-16"><span className="text-persian">Hi,</span> I&apos;m Riley 👋</p>
        <p className="text-3xl mb-5 pt-4">
          I&apos;m currently studying at the <a href="https://www.virginia.edu/" 
          className="transition duration-500 hover:text-persian  underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">University of Virginia
          </a> majoring in <span className="italic">computer science</span>, with a minor in <span className="italic">data science</span>. 
          I&apos;m a teaching assistant for Computer Systems and Organization I and II,
          and a student developer for <a href="https://thecourseforum.com/" 
          className="hover:text-persian transition duration-500 underline underline-offset-4 decoration-green-500 hover:decoration-blue-700">theCourseForum</a>.
        </p>
      </div>
    </section>
    )
}