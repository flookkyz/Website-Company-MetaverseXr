import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import EndSection from "../components/EndSection";
import Footers from "../components/Footer";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Partner from "../components/Partner";
import Portfolio from "../components/Portfolio";
import ServicesSection from "../components/ServicesSection";
import ServicesSection2 from "../components/ServicesSection2";
import React,{ useState } from "react";
import Sidebar from "../components/Sidebar";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <ServicesSection />
      <ServicesSection2 />
      <Portfolio />
      <About />
      <Partner />
      <EndSection />
      <Footers />
    </div>
  );
}
