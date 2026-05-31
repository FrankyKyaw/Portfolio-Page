import { AboutSection } from "@/components/AboutSection";
import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franky Kyaw",
  description: "IT Engineer & Developer — Portfolio",
};

export default function Home() {
  return (
    <>
      <HomeSection />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
