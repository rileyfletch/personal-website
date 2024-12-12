import Footer from "@/components/footer";
import MobileHero from "@/components/mobile_hero";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="bg-cream">
        <Navigation></Navigation>
        <hr className="h-0.2 mx-auto bg-dcream text-dcream"></hr>
      </header>
      
      <MobileHero></MobileHero>
      <Footer></Footer>
    </main>
  );
}
