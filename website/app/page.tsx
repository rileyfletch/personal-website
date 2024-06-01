import AboutSection from "@/components/about";
import BackgroundAnimation from "@/components/animation";
import ContactSection from "@/components/contact";
import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import IntroSection from "@/components/intro";
import NavigationSidebar from "@/components/navbar";
import ProjectSection from "@/components/projects";

export default function Page() {
  return (
    <main className="font-serif area flex flex-row">

      <BackgroundAnimation></BackgroundAnimation>

      <div className="flex flex-col items-center">
        <IntroSection></IntroSection>
        <ExperienceSection></ExperienceSection>
        <ProjectSection></ProjectSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </div>

      <div className="sticky top-0 right-0">
        <NavigationSidebar />
      </div>

    </main>
  );
}