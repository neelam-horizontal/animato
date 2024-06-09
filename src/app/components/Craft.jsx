"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
        <div className="cardContiner One">
          <div className="cards flex flex-row w-2/3 px-5 py-4 gap-[3rem] border-[1px] border-[--dark-cyan]">
            <div className="flex flex-col">
              <h2 className="text-xl font-light leading-[3rem]">
                Driven by Purpose
              </h2>
              <p>
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>

            <div className="cards__icon content-center">
              <div class="svg w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18 10H46L60 26L32 56L4 26L18 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4 26H60"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="cardContiner two">
          <div className="cards flex flex-row w-2/3 px-5 py-4 gap-[3rem] border-[1px] border-[--dark-cyan]">
            <div className="flex flex-col">
              <h2 className="text-xl font-light leading-[3rem]">
                Driven by Purpose
              </h2>
              <p>
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>

            <div className="cards__icon content-center">
              <div class="svg w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18 10H46L60 26L32 56L4 26L18 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4 26H60"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="cardContiner three">
          <div className="cards flex flex-row w-2/3 px-5 py-4 gap-[3rem] border-[1px] border-[--dark-cyan]">
            <div className="flex flex-col">
              <h2 className="text-xl font-light leading-[3rem]">
                Driven by Purpose
              </h2>
              <p>
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>

            <div className="cards__icon content-center">
              <div class="svg w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18 10H46L60 26L32 56L4 26L18 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4 26H60"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="cardContiner four">
          <div className="cards flex flex-row w-2/3 px-5 py-4 gap-[3rem] border-[1px] border-[--dark-cyan]">
            <div className="flex flex-col">
              <h2 className="text-xl font-light leading-[3rem]">
                Driven by Purpose
              </h2>
              <p>
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>

            <div className="cards__icon content-center">
              <div class="svg w-embed">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18 10H46L60 26L32 56L4 26L18 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4 26H60"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Craft;
