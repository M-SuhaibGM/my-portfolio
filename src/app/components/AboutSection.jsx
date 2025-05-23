"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/Css</li>
        <li>Tailwend css</li>
        <li>PRISMA</li>
        <li>Mongodb</li>
        <li>MYSQL</li>
        <li>NEXT.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>BS Computer Science</li>
          <p>University of Okara</p>
          <p>2022-2026</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>ICS</li>
          <p>Concardia collage Ellah Abad </p>
          <p>2020-2022</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Matriculation</li>
          <p>Govt. Higher Secondary School Kangan PurConcardia collage Ellah Abad </p>
          <p>2018-2020</p>
        </ul>
      </>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/bg.jpg" alt="bg-image" className="mb-[200px] h-[400px] w-[400px]" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Nex.js, Node.js,MYSQL,
            Tailwind, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
