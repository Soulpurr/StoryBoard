import Creativity from "@/components/LandingPage/Creativity";
import Features from "@/components/LandingPage/Features";
import Info from "@/components/LandingPage/Info";
import Intro from "@/components/LandingPage/Intro";
import LeaderBoard from "@/components/LandingPage/LeaderBoard";
import Share from "@/components/LandingPage/Share";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <Creativity />
      <Features />
      <LeaderBoard />
      <Info/>
    </div>
  );
}
