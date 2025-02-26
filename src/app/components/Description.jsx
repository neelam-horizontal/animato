"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

function Description() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var clutter = "";
    document
      .querySelector(".textPara")
      .textContent.split("")
      .forEach(function (e) {
        if (e === " ") clutter += `<span>&nbsp;</span>`;
        clutter += `<span>${e}</span>`;
      });
    document.querySelector(".textPara").innerHTML = clutter;

    const textAnimate = gsap.utils.toArray(".textPara span");

    gsap.set(".textPara span", { opacity: 0.1 });

    gsap.to(textAnimate, {
      scrollTrigger: {
        trigger: ".Description",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 0.3,
        // markers: true,
      },
      opacity: 1,
      stagger: 0.03,
      ease: "power2",
    });
  }, []);

  return (
    <div
      data-color="cyan"
      className="Description section w-full h-[70vh] flex items-center justify-center"
    >
      <div className="text w-[70%] flex flex-col items-center justify-center">
        <h3 className="textPara text-teal-800 text-3xl font-light text-center leading-[2.8rem]">
          Working with the Animato team has been such a pleasure! We took on a
          significant project to rebuild our entire platform and the team
          approached the project with our best interests in mind. They continue
          to prioritize the end user experience and offer amazing expertise in
          all of the areas we lack internally. I would personally be lost
          without this team, their ability to problem solve, their openness to
          feedback and desire to build the product like it is their own.
        </h3>

        <div className="person text-teal-800 flex flex-col items-center justify-center mt-10 gap-5">
          <div className="image w-32 h-32 bg-red-500 overflow-hidden rounded-full">
            <Image
              className="w-full h-full object-cover rounded-full"
              src="/person.jpeg"
              width={100}
              height={100}
              alt="Capsule Img 2"
            />
          </div>
          <h1 className="text-3x1">Miranda Ernst</h1>
          <h3>Product Manager @ HealthCheck360</h3>
        </div>
      </div>
    </div>
  );
}

export default Description;
