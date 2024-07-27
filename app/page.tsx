import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="bg-cream">
        <Navigation></Navigation>
        <hr className="h-0.2 mx-auto bg-dcream text-dcream"></hr>
      </header>
      
      <Hero></Hero>
      <Footer></Footer>
    </main>
  );
}
