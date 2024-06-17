'use client'

import FeatureCard from "./featureCard";
import ViewFeatureButton from "../features/viewFeatureButton";
import {useState} from 'react';
import React from "react";

const FeatureCards = () => {

  const [open,setOpen] = useState(false);
  const [visible,setVisible] = useState(6);

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
    <div className="flex flex-wrap mt-8 gap-6 justify-center">
      {content.slice(0,open ? "9" : "6").map((item) => (
        <FeatureCard item={item} key={item.index} open={open}/>
      ))}
    </div>
      <ViewFeatureButton open={open} setOpen={setOpen}/>
    </>
  );
};

export default FeatureCards;
