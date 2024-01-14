import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Dell",
    location: "Hopkinton, MA",
    description:
      "This coming Summer 2024 I will be working as an Infrastructure Software Group intern at Dell.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "UVA TA",
    location: "Charlottesville, VA",
    description:
      "Working as a teaching assistant for CS2130, the introductory computer architecture course for computer science students",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "United States Navy Dahlgren",
    location: "Dahlgren, VA",
    description:
      "Did desktop app software development for simulation software using Java.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Virginia Railway Express",
    location: "Alexandria, VA",
    description:
      "As an IT intern I did mainly help desk work and also the occasional project",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Fredericksburg Country Club",
    location: "Fredericksburg, VA",
    description:
      "The humble beginnings of my career; I worked in the golf shop managing tee times, answering phone calls, assisting the head golf pro with tournaments, and worked with Office Suite.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "theCourseForum",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Project 2",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project 3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Project 2",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project 3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "These",
  "Are",
  "Skills",
] as const;