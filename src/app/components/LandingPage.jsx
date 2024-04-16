"use client";

import React, { useEffect } from "react";
import Image from "next/image";
// import gsap from "gsap";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import animateStyles from "../../Animation.module.css";

function LandingPage() {
  // const container = useRef();

  // useGSAP(
  //   () => {
  //     // use selectors...
  //     gsap.to(".videoDiv", {
  //       ScrollTrigger: {
  //         trigger: ".home",
  //         start: "top top",
  //         end: "bottom top",
  //         markers: true,
  //         pin: true,
  //         scrub: 2,
  //       },
  //       "--clip": "0%",
  //       ease: "power2.in",
  //       duration: 2,
  //     });
  //   },
  //   { scope: container }
  // );

  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const videoSection = gsap.utils.toArray(".videoDiv");
    const marqueeSlideSection = gsap.utils.toArray(".marqueeSlidesDiv");

    // increase scale on scroll down
    gsap.set(".marqueeSlidesDiv", { scale: 3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        screenX: 10,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        scrub: 2,
        // pin: true,
        // end: 'center center',
        // end: "+=" + document.querySelector(".heading").offsetWidth,
        // scrub: true
      },
    });

    // Video animation
    tl.to(
      videoSection,
      {
        // gsap.to(videoSection, {
        // scrollTrigger: {
        //   trigger: ".videoDiv",
        //   screenX: 10,
        //   start: "top top",
        //   end: "bottom top",
        //   // end: "+=" + document.querySelector(".heading").offsetWidth,
        //   markers: true,
        //   pin: true,
        //   scrub: 2,
        //   // end: 'center center',
        //   // scrub: true
        // },
        "--clip": "2%",
        ease: "power2",
        // duration: 2,
      },
      "animateOnScroll"
    )
      .to(
        marqueeSlideSection,
        {
          scale: 1,
          ease: "power2",
        },
        "animateOnScroll"
      )
      .to(
        ".lft",
        {
          xPercent: -10,
          stagger: 0.03,
          // ease: "Power2",
        },
        "animateSlides"
      )
      .to(
        ".rgt",
        {
          xPercent: 10,
          stagger: 0.03,
          // ease: "Power2",
        },
        "animateSlides"
      )
      .to(
        videoSection,
        {
          "--clip": "0%",
          ease: "power2",
          // duration: 2,
        },
        "animateSlides"
      );
  }, []);

  return (
    <div
      data-color="black"
      onLoadStart={gsap.registerPlugin(ScrollTrigger)}
      className="main w-full relative"
    >
      <div className="home w-full h-[200vh] relative">
        <div className="containerDiv w-full sticky top-0 left-0">
          {/* Bottom Text */}
          <div className="btmText z-[4] absolute bottom-[3%] left-[5%] w-52">
            <h1>
              We build ideas. Software. Apps. Tools. For real people. Real
              lives.
            </h1>
          </div>
          {/* Video Page */}
          <div
            className={`videoDiv z-[3] w-full h-screen absolute top-0 left-0 ${animateStyles.videoDiv}`}
          >
            <video
              autoPlay
              loop
              muted
              className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
              src={`/3D-Shoes.mp4`}
            />
          </div>
          {/* Text Page */}
          <div className="marqueeContainer w-full h-screen relative overflow-hidden">
            <div className="heading z-[4] absolute top-[10%] bg-[#64748bbf] rounded-md left-1/2 -translate-x-1/2 w-60 text-center">
              <h1 className="text-xl font-regular">
                Crafting a new paradigm of footwear, one that is
              </h1>
            </div>
            <div className="marqueeSlidesDiv absolute scale-[0.3] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
              <div className="rowTwo rgt -translate-x-1/3 w-full py-5 flex items-center gap-7 whitespace-nowrap">
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f3.jpeg"
                      width={100}
                      height={100}
                      alt="f3"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f4.png"
                      width={100}
                      height={100}
                      alt="f4"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
              </div>
              <div className="rowOne lft -translate-x-[39.4%] w-full py-5 flex items-center gap-7 whitespace-nowrap">
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f1.png"
                      width={100}
                      height={100}
                      alt="f1"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden"></div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f2.webp"
                      width={100}
                      height={100}
                      alt="f2"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
              </div>
              <div className="rowTwo rgt -translate-x-1/3 w-full py-5 flex items-center gap-7 whitespace-nowrap">
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f3.jpeg"
                      width={100}
                      height={100}
                      alt="f3"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f4.png"
                      width={100}
                      height={100}
                      alt="f4"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
              </div>
              <div className="rowThree lft -translate-x-1/6 w-full py-5 flex items-center gap-7 whitespace-nowrap">
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f5.jpeg"
                      width={100}
                      height={100}
                      alt="f5"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src="/f6.png"
                      width={100}
                      height={100}
                      alt="f6"
                    />
                  </div>
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
                <div className="wordsInRow flex items-center gap-7">
                  <h1 className="font-semibold font-[PPNeueMachina-Regular] text-7xl">
                    classic
                  </h1>
                  <div className="imgDiv w-[3rem] h-[3rem] rounded-full bg-yellow-500 overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

// <!-- selecting all images from other website -->
// <!-- document.querySelectorAll(".hero__rows img").forEach(e => console.log(e)) -->
