import React from "react";
import AboutSection from "../components/AboutSection";
import ContactBanner from "../components/ContactBanner";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";


export default function Home() {
    return (
        <div>
           <HeroSection />
           <AboutSection />
           <ProjectsSection />
           <ContactBanner />
           <Footer />
        </div>
    )
}

