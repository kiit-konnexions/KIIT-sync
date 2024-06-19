"use client";

import FeatureCard from "./featureCard";
import ViewFeatureButton from "../features/viewFeatureButton";
import { useState } from "react";
import React from "react";

const FeatureCards = () => {
  const [open, setOpen] = useState(false);

  const content = [
    {
      index: 0,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 1,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 2,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 3,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 4,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 5,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 6,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 7,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
    {
      index: 8,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor.",
    },
  ];
  return (
    <>
    {/* for small screen */}
      <div className="flex flex-wrap mt-8 gap-6 justify-center xl:hidden lg:hidden">
        {content.slice(0, open ? 9 : 3).map((item) => (
          <FeatureCard item={item} key={item.index} open={open} />
        ))}
      </div>
    {/* for large screen */}
      <div className="lg:flex flex-wrap mt-8 gap-6 justify-center hidden xl:hidden">
        {content.slice(0, open ? 9 : 4).map((item) => (
          <FeatureCard item={item} key={item.index} open={open} />
        ))}
      </div>
    {/* for extra large screen */}
      <div className="xl:flex flex-wrap mt-8 gap-6 justify-center hidden lg:hidden">
        {content.slice(0, open ? 9 : 6).map((item) => (
          <FeatureCard item={item} key={item.index} open={open} />
        ))}
      </div>
      <div className={`${open==false && 'custom-gradient'} z-10 h-[290px] w-full absolute bottom-24`}>
      </div>
      <ViewFeatureButton open={open} setOpen={setOpen} />
      <div className={`flex gap-1 z-20 mx-auto ${!open ? "relative bottom-16" : "relative top-8"} `}>
      <div>Got an idea?</div>
      <div className="text-blue-700">Request a feature</div>
      </div>
    </>
  );
};

export default FeatureCards;
