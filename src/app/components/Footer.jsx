"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Footer() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const capsuleSection = gsap.utils.toArray(".Footer");

    const tl = gsap.timeline();

      tl.fromTo(
        ".logoName",
        {
          y: 0,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: capsuleSection,
            start: "top 30%",
            end: "bottom bottom",
            // markers: true,
            scrub: 4,
          },
          y: -125,
          opacity: 1,
          rotate: 0,
          ease: "power4",
          duration: 1,
          transformOrigin: "bottom top",
          delay: 0.85,
          scrub: 1,
          stagger: {
            each: 0.1,
          },
        }
      );
  }, []);

  return (
    <div className="Footer h-[44rem] overflow-hidden">
      <div className="topDiv flex flex-row justify-between px-[5rem] py-[4rem]">
        <div className="contactpst text-2xl flex flex-col gap-5">
          <p>Home</p>
          <p>Solutions</p>
          <p>About</p>
          <p>Team</p>
          <p>Contact</p>
        </div>
        <div className="subscribe text-4xl">
          <h1 className="w-[30rem]">
            Join our mapping pst for the latest updates.
          </h1>
          <div className="subscribeForm flex flex-row gap-6 mt-7">
            <input
              className="px-10 py-5 w-[25rem]"
              type="text"
              placeholder="Email Address"
            />
            <div className="px-10 py-5 w-fit border-[1px] border-[--dark-cyan]">
              <div className="maskerBtn overflow-hidden">
                <span className="inpne-block translate-y-1">Our Solutions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contactpst text-2xl flex flex-col gap-5">
          <p>Insights</p>
          <p>Newsroom</p>
          <p>Resources</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="LogoDiv mt-[8rem] flex flex-row text-[13rem] justify-center gap-3 relative -z-[10] -mb-[13rem]">
        <span className="logoName">A</span>
        <span className="logoName">N</span>
        <span className="logoName">I</span>
        <span className="logoName">M</span>
        <span className="logoName">A</span>
        <span className="logoName">T</span>
        <span className="logoName">O</span>
      </div>
      <div className="bottom bg-black z-10 flex flex-col">
        <hr className="w-[95%] ml-[6rem] -translate-x-[3rem]" />
        <div className="bottomDiv flex flex-row justify-between px-[5rem] py-[4rem]">
          <div className="privacy flex flex-row gap-6">
            <p>Privacy Popcy</p>
            <p>Terms of Use</p>
          </div>
          <div>© 2024 Animato Inc. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
