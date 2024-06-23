import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navigation from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="sticky top-0 z-2 bg-cream">
        <Navigation></Navigation>
        <hr className="h-0.2 mx-auto bg-black dark:bg-gray-700"></hr>
      </header>
      
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
    </main>
  );
}
