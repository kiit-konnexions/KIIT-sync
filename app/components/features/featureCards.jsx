"use client";

import FeatureCard from "./featureCard";
import ViewFeatureButton from "../features/viewFeatureButton";
import { useState } from "react";
import React from "react";
import RequestFeature from "./requestFeature";

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
      <div className="flex flex-wrap mt-8 gap-6 justify-center min-[1285px]:hidden lg:hidden">
        {content.slice(0, open ? 9 : 3).map((item) => (
          <FeatureCard item={item} key={item.index} open={open} />
        ))}
      </div>
      {/* for large screen */}
      <div className="lg:flex flex-wrap mt-8 gap-6 justify-center hidden min-[1285px]:hidden">
        {content.slice(0, open ? 9 : 4).map((item) => (
          <FeatureCard item={item} key={item.index} open={open} />
        ))}
      </div>
      {/* for extra large screen */}
      <div className="min-[1285px]:flex flex-wrap mt-8 gap-6 justify-center hidden lg:hidden">
        {content.slice(0, open ? 9 : 6).map((item) => (
          <FeatureCard item={item} key={item.index} open={open} />
        ))}
      </div>
      {/* div for gradient effect */}
      <div
        className={`${open == false ? "bg-gradient-to-b from-white/[36%] to-white" : "hidden"} z-10 h-[290px] w-full absolute bottom-28`}
      ></div>
      <ViewFeatureButton open={open} setOpen={setOpen} />
      <RequestFeature open={open} />
    </>
  );
};

export default FeatureCards;
