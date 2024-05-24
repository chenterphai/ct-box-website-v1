import HeroSection from "@/components/Hero";
import MemberSection from "@/components/MemberSection";
import OurTeamSection from "@/components/OurTeam";
import ServiceComponent from "@/components/Service";
import SummaryResultSection from "@/components/SummaryResult";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto p-5">
      {/* <ThemeSwitcher /> */}
      <HeroSection />
      <SummaryResultSection />
      <ServiceComponent />
      <OurTeamSection />
      <MemberSection />
    </main>
  );
}
