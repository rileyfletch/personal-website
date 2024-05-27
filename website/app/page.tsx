import AboutSection from "@/components/about";
import BackgroundAnimation from "@/components/animation";
import ContactSection from "@/components/contact";
import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import NavigationSidebar from "@/components/navbar";
import ProjectSection from "@/components/projects";

export default function Page() {
  return (
    <main className="font-serif area flex flex-row">

      <BackgroundAnimation></BackgroundAnimation>

      <div className="flex flex-col items-center">
        <AboutSection></AboutSection>
        <ExperienceSection></ExperienceSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </div>

      <NavigationSidebar></NavigationSidebar>

    </main>
  );
}