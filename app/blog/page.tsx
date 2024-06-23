import Blog from "@/components/blog";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="sticky top-0 z-2 bg-cream">
        <Navigation></Navigation>
        <hr className="h-0.2 mx-auto bg-dcream text-dcream"></hr>
      </header>
      
      <Blog></Blog>
    </main>
  );
}
