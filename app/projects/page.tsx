import Navigation from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="sticky top-0 z-2 bg-cream">
        <Navigation></Navigation>
        <hr className="h-0.2 mx-auto bg-dcream text-dcream"></hr>
      </header>
      
      <Projects></Projects>
    </main>
  );
}
