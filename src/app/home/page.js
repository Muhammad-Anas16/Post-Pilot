import Footer from "@/component/common/Footer";
import HeroSection from "@/component/HeroSection";
import SocialPostsSection from "@/component/SocialPostsSection";
import React from "react";

const home = () => {
  return (
    <div>
      <HeroSection />
      <SocialPostsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default home;