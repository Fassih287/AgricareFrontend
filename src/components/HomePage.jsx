import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Helpsection from "./Helpsection";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageSlider />
      <Analytics />
      <Helpsection />
      <Footer />
    </>
  );
}

export default HomePage;
