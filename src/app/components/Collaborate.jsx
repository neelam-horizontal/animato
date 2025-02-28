"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Collaborate.css";

const Collaborate = () => {
  useEffect(() => {
    const config = {
      theme: "black",
      animate: true,
      snap: true,
      start: gsap.utils.random(0, 100, 1),
      end: gsap.utils.random(900, 1000, 1),
      scroll: true,
      debug: false,
    };

    let items;
    let scrollerScrub;
    let dimmerScrub;
    let chromaEntry;
    let chromaExit;

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
      document.documentElement.dataset.syncScrollbar = config.scroll;
      document.documentElement.dataset.animate = config.animate;
      document.documentElement.dataset.snap = config.snap;
      document.documentElement.dataset.debug = config.debug;
      document.documentElement.style.setProperty("--start", config.start);
      document.documentElement.style.setProperty("--hue", config.start);
      document.documentElement.style.setProperty("--end", config.end);

      if (!config.animate) {
        chromaEntry?.scrollTrigger.disable(true, false);
        chromaExit?.scrollTrigger.disable(true, false);
        dimmerScrub?.disable(true, false);
        scrollerScrub?.disable(true, false);
        gsap.set(items, { opacity: 1 });
        gsap.set(document.documentElement, { "--chroma": 0 });
      } else {
        gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });
        dimmerScrub?.enable(true, true);
        scrollerScrub?.enable(true, true);
        chromaEntry?.scrollTrigger.enable(true, true);
        chromaExit?.scrollTrigger.enable(true, true);
      }
    };

    // backfill the scroll functionality with GSAP
    if (
      !CSS.supports(
        "(animation-timeline: scroll()) and (animation-range: 0% 100%)"
      )
    ) {
      gsap.registerPlugin(ScrollTrigger);

      // animate the items with GSAP if there's no CSS support
      items = gsap.utils.toArray("ul li");

      gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

      const dimmer = gsap
        .timeline()
        .to(items.slice(1), {
          opacity: 1,
          stagger: 0.5,
        })
        .to(
          items.slice(0, items.length - 1),
          {
            opacity: 0.2,
            stagger: 0.5,
          },
          0
        );

      dimmerScrub = ScrollTrigger.create({
        trigger: items[0],
        endTrigger: items[items.length - 1],
        start: "center center",
        end: "center center",
        animation: dimmer,
        scrub: 0.2,
      });

      // register scrollbar changer
      const scroller = gsap.timeline().fromTo(
        document.documentElement,
        {
          "--hue": config.start,
        },
        {
          "--hue": config.end,
          ease: "none",
        }
      );

      scrollerScrub = ScrollTrigger.create({
        trigger: items[0],
        endTrigger: items[items.length - 1],
        start: "center center",
        end: "center center",
        animation: scroller,
        scrub: 0.2,
      });

      chromaEntry = gsap.fromTo(
        document.documentElement,
        {
          "--chroma": 0,
        },
        {
          "--chroma": 0.3,
          ease: "none",
          scrollTrigger: {
            scrub: 0.2,
            trigger: items[0],
            start: "center center+=40",
            end: "center center",
          },
        }
      );
      chromaExit = gsap.fromTo(
        document.documentElement,
        {
          "--chroma": 0.3,
        },
        {
          "--chroma": 0,
          ease: "none",
          scrollTrigger: {
            scrub: 0.2,
            trigger: items[items.length - 2],
            start: "center center",
            end: "center center-=40",
          },
        }
      );
    }

    update();
  }, []);

  return (
    <>
      <section className="content team section fluid">
        <h2>
          <span aria-hidden="true">you can&nbsp;</span>
          <span className="sr-only">you can ship things.</span>
        </h2>
        <ul aria-hidden="true" style={{ "--count": "22" }}>
          <li style={{ "--i": "0" }}>design.</li>
          <li style={{ "--i": "1" }}>prototype.</li>
          <li style={{ "--i": "2" }}>solve.</li>
          <li style={{ "--i": "3" }}>build.</li>
          <li style={{ "--i": "4" }}>develop.</li>
          <li style={{ "--i": "5" }}>debug.</li>
          <li style={{ "--i": "6" }}>learn.</li>
          <li style={{ "--i": "7" }}>access.</li>
          <li style={{ "--i": "8" }}>ship.</li>
          <li style={{ "--i": "9" }}>prompt.</li>
          <li style={{ "--i": "10" }}>collaborate.</li>
          <li style={{ "--i": "11" }}>create.</li>
          <li style={{ "--i": "12" }}>inspire.</li>
          <li style={{ "--i": "13" }}>follow.</li>
          <li style={{ "--i": "14" }}>innovate.</li>
          <li style={{ "--i": "15" }}>test.</li>
          <li style={{ "--i": "16" }}>optimize.</li>
          <li style={{ "--i": "17" }}>teach.</li>
          <li style={{ "--i": "18" }}>visualize.</li>
          <li style={{ "--i": "19" }}>transform.</li>
          <li style={{ "--i": "20" }}>scale.</li>
          <li style={{ "--i": "21" }}>do it.</li>
        </ul>
      </section>
      <section>
        <h2 class="fluid mt-[5em]">Animato.</h2>
        <Image
          className="w-full h-full object-cover rounded-full absolute -z-10"
          src="/animato-gify2.gif"
          width={100}
          height={100}
          alt="f6"
        />
      </section>

      {/* top logo */}
      <a
        className="bear-link"
        href="https://animato-shoe.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className="w-9"
          viewBox="0 0 969 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="161.191"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            stroke-width="20"
          ></circle>
          <circle
            cx="806.809"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            stroke-width="20"
          ></circle>
          <circle
            cx="695.019"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <circle
            cx="272.981"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <path
            d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
            fill="currentColor"
          ></path>
          <rect
            x="310.42"
            y="448.31"
            width="343.468"
            height="51.4986"
            fill="#FF1E1E"
          ></rect>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </>
  );
};

export default Collaborate;
