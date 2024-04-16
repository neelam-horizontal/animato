"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LandingPage from "./components/LandingPage";
import Craft from "./components/Craft";
import Vertical from "./components/Vertical";
import Team from "./components/Team";
import Description from "./components/Description";
import Capsules from "./components/Capsules";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrolledSection = gsap.utils.toArray(".section");
    document.querySelectorAll(".section").forEach(function (e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        onEnter: function(){
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
          document.body.setAttribute("theme", e.dataset.color);
        }
      });
    });
  });

  return (
    <>
    <body theme="black">
      <LandingPage />
      <Craft />
      <Vertical />
      <Team />
      <Description />
      <Capsules />
      <Footer />
    </body>
    </>
  );
}
