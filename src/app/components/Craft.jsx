"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    headerTitle: "Driven by Purpose",
    content:
      "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale.",
    icon: "/camera.svg",
  },
  {
    id: 2,
    headerTitle: "Driven by Purpose",
    content:
      "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale.",
    icon: "/inspiration.svg",
  },
  {
    id: 3,
    headerTitle: "Driven by Purpose",
    content:
      "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale.",
    icon: "/setting.svg",
  },
  {
    id: 4,
    headerTitle: "Driven by Purpose",
    content:
      "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale.",
    icon: "/target.svg",
  },
];

function Craft() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cardSection = gsap.utils.toArray(".cardContiner");
    const capsuleSelected = gsap.utils.toArray(".cards");

    gsap.to(capsuleSelected, {
      scrollTrigger: {
        trigger: cardSection,
        start: "top 40%",
        end: "bottom 40%",
        // markers: true,
        scrub: 2,
      },
      ease: "power4",
      color: "var(--cyan)",
      backgroundColor: "var(--dark-cyan)",
      width: "80%",
      duration: 1,
      delay: 1.5,
      scrub: 4,
      stagger: {
        each: 0.1,
      },
    });
  }, []);

  return (
    <div
      data-color="cyan"
      className="craft section relative w-full px-10 py-10 flex justify-between items-start gap-10"
    >
      <div className="lText w-[40%] sticky top-0 left-0">
        <p className="text-3xl font-light leading-[3rem]">
          Significo is a leading health software creator founded on the belief
          that technology can transform healthcare to put people first. Whether
          they are employees, members, customers, or clients, we never forget
          the real people we're designing for.
        </p>
        <h1 className="text-[4.5rem] leading-[6rem] mt-20 font-[PPNeueMachina-Regular] mb-10">
          We Craft Human-Centric Health Software
        </h1>
        <div className="px-10 py-5 w-fit border-[1px] border-[--dark-cyan]">
          <div className="maskerBtn overflow-hidden">
            <span className="inline-block translate-y-1">Our Solutions</span>
          </div>
        </div>
      </div>
      <div className="cardsBlock mt-[20%] flex flex-col gap-12 w-2/5">
        {cardData.map((item, key) => (
          <div key={key} className="cardContiner One">
            <div className="cards flex flex-row w-2/3 px-5 py-4 gap-[3rem] border-[1px] border-[--dark-cyan]">
              <div className="flex flex-col">
                <h2 className="text-xl font-light leading-[3rem]">
                  {item.headerTitle}
                </h2>
                <p>{item.content}</p>
              </div>

              <div className="cards__icon content-center">
                <div class="svg w-embed">
                  <Image
                    className="w-[60%] h-[60%] object-cover"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt="Capsule Img 2"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Craft;
