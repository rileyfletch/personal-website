import AboutSection from "@/components/about";
import IntroSection from "@/components/intro";

export default function Page() {
  return (
    <main className="font-serif flex flex-row text-medium bg-bg">

    
      <div className="flex flex-col items-center">
        <IntroSection></IntroSection>
        
        <AboutSection></AboutSection>
        
      </div>

      

    </main>
  );
}