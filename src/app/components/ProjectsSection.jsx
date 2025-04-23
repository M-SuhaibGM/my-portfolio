"use client";
import React, { useState, useRef } from "reacz t";
import ProjectCard from "./ProjectCard"; 
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "blog Website",
    description: "react mysql css express  authantication javascript ",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/blog-app.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " spotfy Website",
    description: "NEXT.js prisma react javascript  mysql",
    image: "/images/projects/spotify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/Spotify-Clone.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Project 3 description",
    image: "/images/projects/weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/weather-app.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo-list Application",
    description: "mysql node.js express react CRUD operations  ",
    image: "/images/projects/todolist.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/M-SuhaibGM/todo-list.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "facebook clone ",
    description: "Authentication  mysql node.js express react CRUD operations",
    image: "/images/projects/facebook.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/facebook-clone.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: " messanger clone",
    description: "Authentication and CRUD operations mysql shadcn prsima  react CRUD operations",
    image: "/images/projects/messanger.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/messanger-clone.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Dise game",
    description: "javascript html css",
    image: "/images/projects/dice.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/dice-game.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "NETFLIX clone ",
    description: "NEXT JS prisma chakra ui Authentication ",
    image: "/images/projects/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/Netflix-Clone.git",
    previewUrl: "/",
  }, {
    id: 8,
    title: "Portfolio",
    description: "NEXT JS tailwand css react javascript",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/M-SuhaibGM/portfolio.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects"  >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
    
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
