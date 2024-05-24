'use client'
import HeroSection from "@/components/Hero";
import MemberSection from "@/components/MemberSection";
import OurTeamSection from "@/components/OurTeam";
import RecentProject from "@/components/RecentProject";
import ServiceComponent from "@/components/Service";
import SummaryResultSection from "@/components/SummaryResult";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";


export default function Home() {

  return (
    <>

      <main className="flex flex-col container mx-auto p-5 mt-16">
        {/* <ThemeSwitcher /> */}
        <HeroSection />
        <SummaryResultSection />
        <ServiceComponent />
        <OurTeamSection />
        <RecentProject />
        <MemberSection />
      </main>
    </>
  );
}
