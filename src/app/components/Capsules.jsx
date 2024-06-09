"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

function Capsules() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const capsuleSection = gsap.utils.toArray(".capsules");
    const capsuleSelected = gsap.utils.toArray(".capsule:nth-child(2)");

    gsap.to(capsuleSelected, {
      scrollTrigger: {
        trigger: capsuleSection,
        start: "top 70%",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
      },
      y: 0,
      ease: "power4",
    });
  }, []);

  return (
    <div className="capsules w-full flex items-start justify-between h-screen mt-[100px] px-32 bg-[#9f9fd8]">
      <div className="left w-1/3 h-full flex flex-col justify-between py-10">
        <h1 className="text-3xl leading-[2.8rem]">
          Stay up-to-date on the latest trends innovations and thought
          leadership.
        </h1>
        <div className="heading font-[PPNeueMachina-Regular]">
          <h1 className="text-8xl">Explore Our Insights</h1>
          <div className="w-fit mt-10 px-10 py-5 border-[1px] border-[--dcyan]">
            <div className="masker overflow-hidden">
              <span className="inline-block">Our Solutions</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right font-[PPNeueMachina-Regular] h-full flex items-center gap-20">
        <div className="capsule -rotate-[16deg] flex flex-col items-center py-10 px-6 rounded-full border-[1px] border-black">
          <div className="w-80 h-80 overflow-hidden rounded-full">
            <Image
              className="w-full h-full object-cover rounded-full"
              src="/Img1.png"
              width={100}
              height={100}
              alt="Capsule Img 1"
            />
          </div>
          <div className="text text-center mt-10">
            <h3 className="text-3xl font-semibold">Equity in Tech: An</h3>
            <h3 className="text-3xl font-semibold">International Women's</h3>
            <h3 className="text-3xl font-semibold">Day Conversation with</h3>
            <h3 className="text-3xl font-semibold">Caroline Nieto, </h3>
            <h3 className="text-3xl font-semibold">Significo's CPO</h3>
          </div>

          <button className="bg-purple-400 text-white px-4 text-xs mt-10 mb-40 rounded-full py-3">
            thought leadership
          </button>
        </div>
        <div className="capsule -rotate-[16deg] translate-y-60 flex flex-col items-center py-10 px-6 rounded-full border-[1px] border-black">
          <button className="bg-purple-400 text-white px-4 text-xs mt-10 rounded-full py-3">
            thought leadership
          </button>
          {/* text */}
          <div className="text text-center mt-10 mb-40">
            <h3 className="text-3xl font-semibold">Equity in Tech: An</h3>
            <h3 className="text-3xl font-semibold">International Women's</h3>
            <h3 className="text-3xl font-semibold">Day Conversation with</h3>
            <h3 className="text-3xl font-semibold">Caroline Nieto, </h3>
            <h3 className="text-3xl font-semibold">Significo's CPO</h3>
          </div>
          {/* Image */}
          <div className="w-80 h-80 overflow-hidden rounded-full">
            <Image
              className="w-full h-full object-cover rounded-full"
              src="/Img2.jpeg"
              width={100}
              height={100}
              alt="Capsule Img 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capsules;
