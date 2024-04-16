"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

function Team() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const teamSelected = gsap.utils.toArray("listElem");
    
    // var elements = document.getElementById(teamSelected);
    
    
    // for (var i = 0; i < circularPicture.length; i++) {
      // }
      // gsap.to(this.querySelector(teamPicture), {opacity: 1})
      
      // let circularPicture = document.querySelectorAll(`.listElem:nth-child(${index})`);
      let circularPicture = document.querySelectorAll(".listElem");
      circularPicture.forEach((el, index) => {
        const teamPicture = gsap.utils.toArray(".picture");
        // console.log("el", el.id);
        // console.log("index", index);
        console.log("teamPicture", teamPicture);
      el.addEventListener("mousemove", function (e) {
        // console.log("e.target.id === el.id", e.target.id === el.id)
        // if (e.target.id === el.id) {
          gsap.to(teamPicture, {
            opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
            ease: "power2",
            duration: 0.5,
          });
          // console.log("el in", el.id);
          // console.log("e", e.target.id);
        // }
      });
      el.addEventListener("mouseleave", function (e) {
        gsap.to(teamPicture, { opacity: 0, ease: "power2", duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="team section font-[PPNeueMachina-Regular] h-screen py-20">
      <h1 className="text-center text-8xl tracking-tight">Our Team</h1>
      {/* Team members */}
      <div className="list mt-10 w-full px-10">
        <div
          id="listElem1"
          className="listElem border-b-2 border-slate-800 w-full py-[3rem] relative"
        >
          <div className="relative flex items-center justify-between z-[3]">
            <div className="left flex gap-20">
              <h3 className="text-5xl">01</h3>
              <h1 className="text-5xl">Dr. Ric McCartney</h1>
            </div>
            <h3 className="text-3xl">CE0</h3>
          </div>
          <div className="picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem] overflow-hidden rounded-full bg-blue-500">
          <Image
              className="w-full h-full object-cover rounded-full"
              src="/Img2.jpeg"
              width={100}
              height={100}
              alt="Capsule Img 2"
            />
          </div>
          <div className="bluelayer absolute z-[2] bottom-0 left-0 w-full h-[0%] bg-blue-500"></div>
        </div>
      </div>
      <div className="list mt-10 w-full px-10">
        <div
          id="listElem2"
          className="listElem border-b-2 border-slate-800 w-full py-[3rem] relative"
        >
          <div className="relative flex items-center justify-between z-[3]">
            <div className="left flex gap-20">
              <h3 className="text-5xl">01</h3>
              <h1 className="text-5xl">Dr. Ric McCartney</h1>
            </div>
            <h3 className="text-3xl">CE0</h3>
          </div>
          <div className="picture opacity-0 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem] overflow-hidden rounded-full bg-blue-500">
          <Image
              className="w-full h-full object-cover rounded-full"
              src="/person.jpeg"
              width={100}
              height={100}
              alt="Capsule Img 2"
            />
          </div>
          <div className="bluelayer absolute z-[2] bottom-0 left-0 w-full h-[0%] bg-blue-500"></div>
        </div>
      </div>

      <div className="my-[10rem] px-10 py-5 absolute left-1/2 -translate-x-1/2 w-fit border-[1px] border-[--dark-cyan]">
        <div className="maskerBtn overflow-hidden">
          <span className="inline-block translate-y-1">
            MEET THE ENTIRE TEAM
          </span>
        </div>
      </div>
    </div>
  );
}

export default Team;
