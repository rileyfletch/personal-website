import Experience from "@/components/about";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="sticky top-0 z-2 bg-cream">
        <Navigation></Navigation>
        <hr className="h-0.2 mx-auto text-dcream bg-dcream"></hr>
      </header>
      
      <Experience></Experience>
    </main>
  );
}