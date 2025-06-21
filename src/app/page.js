import { SkillSection } from "../sections/Skills";
import { ContactSection } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { HeroSection } from "../sections/Hero";
import { ProjectsSection } from "../sections/Projects";
import { TapeSection } from "../sections/Tape";
import AboutSection from "../sections/About";


export default function Home() {
  return (
    <div>
 <Header />
 <HeroSection />
 <AboutSection />
 <ProjectsSection />
 <TapeSection />
 <SkillSection />
 <ContactSection />
 <Footer />
    </div>
  );
}
