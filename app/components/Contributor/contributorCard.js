/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub } from "react-icons/fa";

const members = [
  {
    name: "John Doe",
    profilePhoto: "./Profile.png",
    githubLink: "#",
  },
  {
    name: "John Doe",
    profilePhoto: "./Profile.png",
    githubLink: "#",
  },
  {
    name: "John Doe",
    profilePhoto: "./Profile.png",
    githubLink: "#",
  },
  {
    name: "John Doe",
    profilePhoto: "./Profile.png",
    githubLink: "#",
  },
  {
    name: "John Doe",
    profilePhoto: "./Profile.png",
    githubLink: "#",
  },
  {
    name: "John Doe",
    profilePhoto: "./Profile.png",
    githubLink: "#",
  },
];

export default function ContributorCard() {
  return (
    <div className="grid grid-cols-3 gap-14 lg:mt-14 md:mt-9 mt-5 bg-white w-fit mx-auto">
      {members.map((member, index) => (
        <div key={index} className="rounded-lg w-fit">
          <div className="flex flex-col items-center m-2 ">
            <div className="border-[1px] rounded-full  flex items-center justify-center">
              <img
                src={member.profilePhoto}
                alt="Profile Picture"
                className="lg:w-[90px] w-[85px] m-2 bg-white  rounded-full"
              />
            </div>
            <h2 className="mt-4 lg:text-lg text-[18px] font-semibold text-gray-800">
              {member.name}
            </h2>
            <div className="flex">
              <p className="mt-2 text-[14px] lg:text-sm text-gray-600">
                Developer
              </p>
              <div className="mt-2">
                <a
                  href={member.githubLink}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaGithub className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
