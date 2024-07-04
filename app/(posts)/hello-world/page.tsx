import Post from "@/components/post";
import Navigation from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-cream text-black">
      <header className="bg-cream sticky top-0 z-50">
        <Navigation ></Navigation>
        <hr className=" h-0.2 mx-auto text-dcream bg-dcream"></hr>
      </header>
      
      <Post></Post>
    </main>
  );
}