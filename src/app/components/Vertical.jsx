"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Vertical() {
  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sildeSection = gsap.utils.toArray(".slide");

    gsap.to(sildeSection, {
      scrollTrigger: {
        trigger: ".verticalDiv",
        // screenX: 10,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        scrub: 2,
      },
      xPercent: -200,
      // ease: "Power2",
      // },
      // gsap.to("slide", {
      //   scrollTrigger: {
      //     trigger: "verticalDiv",
      //     start: "top top",
      //     end: "bottom bottom",
      //     markers: true,
      //     scrub: 2,
      //     xPercent: -200,
      //   },
    });
  }, []);

  return (
    <div
    data-color="salmon"
      // onScrollCapture={gsap.registerPlugin(ScrollTrigger)}
      className="verticalDiv section w-full"
    >
      <div className="cont h-[400vh] relative">
        <div className="slides overflow-hidden sticky top-0 left-0 flex gap-20 w-full h-[100vh]">
          <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0">
            <div className="text font-[PPNeueMachina-Regular]">
              <h1 className="text-8xl">Real talk, </h1>
              <h1 className="text-8xl">Real impact</h1>
            </div>
            <div className="image absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-0 w-[20rem] h-[20rem] rounded-full overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/f1.png"
                width={100}
                height={100}
                alt="f1"
              />
            </div>
          </div>
          <div className="slide w-full h-screen flex justify-center items-center flex-shrink-0 relative">
            <div className="img1 absolute z-[3] left-[20%] top-[68%] -translate-y-1/3 rounded-full overflow-hidden w-[15rem] h-[15rem]">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/f2.webp"
                width={100}
                height={100}
                alt="f2"
              />
            </div>
            <div className="img2 absolute z-[3] left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 rounded-full overflow-hidden w-[25rem] h-[25rem]">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/f3.jpeg"
                width={100}
                height={100}
                alt="f3"
              />
            </div>
            <div className="centerTextDiv w-[60%] font-[PPNeueMachina-Regular] text-center relative">
              <h3 className="w-1/3 text-left font-semibold leading-7 tracking-tight text-[1.3rem] font-regular absolute top-0 left-0 -translate-y-1/2 -translate-x-[5rem] text-black">
                We're on a mission to impact as many lives as possible and build
                a better company while we do it. Here's our progress.
              </h3>
              <h1 className="font-semibold text-[12rem] leading-none text-white">
                20.4M
              </h1>
              <h3 className="text-5xl leading-none tracking-tight">
                Real people - real lives - we have built products and solutions
                for.
              </h3>
            </div>
            <div className="image absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-0 w-[20rem] h-[20rem] rounded-full overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/f4.png"
                width={100}
                height={100}
                alt="f4"
              />
            </div>
          </div>
          <div className="slide w-full h-screen flex justify-center items-center flex-shrink-0 relative">
            <div className="img1 absolute z-[3] left-[20%] top-[68%] -translate-y-1/3 rounded-full overflow-hidden w-[15rem] h-[15rem] ">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/p1.png"
                width={100}
                height={100}
                alt="p1"
              />
            </div>
            <div className="img2 absolute z-[3] left-1/2 top-0 -translate-y-[10%] -translate-x-1/2 rounded-full overflow-hidden w-[20rem] h-[20rem]">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/p2.png"
                width={100}
                height={100}
                alt="p2"
              />
            </div>
            <div className="centerTextDiv w-[60%] font-[PPNeueMachina-Regular] text-center relative">
              <h3 className="w-1/3 text-left font-semibold leading-7 tracking-tight text-[1.3rem] font-regular absolute top-0 left-0 -translate-y-[100%] -translate-x-[5rem] text-black">
                Our team is global and diverse, because our individual
                experiences make us stronger.
              </h3>
              <h1 className="font-semibold text-[12rem] leading-none text-white">
                49%
              </h1>
              <h3 className="text-5xl text-violet-100 leading-none tracking-tight">
                Expert Women in Tech.
              </h3>
            </div>
            <div className="image absolute top-1/2 -translate-y-1/2 -translate-x-1/2 right-0 w-[20rem] h-[20rem] rounded-full overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/p3.png"
                width={100}
                height={100}
                alt="p3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vertical;
