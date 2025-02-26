"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./svgImgRotate.css";

function SubFooter() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    gsap.set(".movingIcon", { xPercent: 0, yPercent: 0 });
    let targets = gsap.utils.toArray(".movingIcon");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: gsap.utils.mapRange(
          0,
          window.innerWidth - 500,
          80,
          -80,
          e.clientX - 500
        ),
        ease: "power2",
      });
    });

    window.addEventListener("mouseleave", function (e) {
      gsap.to(targets, { x: 0, ease: "power2", duration: 0.5 });
    });
  }, []);

  return (
    <div className="SubFooter h-[20rem] text-black bg-[#f5f19c] w-full">
      <div className="topDiv flex flex-row justify-between pl-[7rem] pr-[15rem] py-[7rem] overflow-hidden">
        <div className="subscribe text-5xl">
          <h2
            className="fluid !text-5xl w-[70rem]"
            style={{ textShadow: "-2px 2px 5px #f6dddd" }}
          >
            Join Animato Today.
          </h2>
        </div>
        <div className="movingIcon -mt-7 relative">
          <div id="svgImgRotate" className="rotating absolute"></div>
          <div
            className="border border-black w-[7.5rem] h-[7.5rem] absolute ml-[9px] mt-[9px] px-[2.78rem] py-[2.57rem] rounded-[100vw] border-solid cursor-pointer"
            onClick={goToTop}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031"
                stroke="black"
                stroke-width="2"
              ></path>
              <path
                d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031"
                stroke="black"
                stroke-width="2"
              ></path>
              <path
                d="M16 0.703125L16 37.2746"
                stroke="black"
                stroke-width="2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
