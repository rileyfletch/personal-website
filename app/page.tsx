import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navigation from "@/components/navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navigation></Navigation>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
    </main>
  );
}
