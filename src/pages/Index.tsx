import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import LeadershipSection from "@/components/LeadershipSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <LeadershipSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="section-container py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Cristine Valentina. All rights reserved.
      </footer>
    </>
  );
};

export default Index;
