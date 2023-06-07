import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import PopularClassesSection from "../components/PopularClassesSection";
import PopularInstructorsSection from "../components/PopularInstructorsSection";
import MusicProgramsSection from "../components/MusicProgramsSection";

const MainLayout = () => {
  return (
    <div>
      <Slider />
      <PopularClassesSection />
      <PopularInstructorsSection />
      <MusicProgramsSection />
    </div>
  );
};

export default MainLayout;
