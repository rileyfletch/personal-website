import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className=" bg-cream">
        <Navigation></Navigation>
        <hr className="sticky h-0.2 mx-auto bg-dcream text-dcream"></hr>
      </header>
      
      <Blog></Blog>
      <Footer></Footer>
    </main>
  );
}
