"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16" >
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center lg:w-[600px] md:w-[500px] sm:w-[350px]"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-900">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="text-blue-300"
              sequence={[
                "M SUHIAB",
                1000,
                "Web Developer",
                1000,
                "UI Designer",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="cursor-pointer">
            <Link
              href="#contact">
              <button className="px-8   py-2   sm:w-[300px] lg:w-[200px] text-center border cursor-pointer border-slate-200px rounded-full bg-gradient-to-r from-blue-200 to-blue-900 hover:bg-slate-300 text-white mt-3"> HIRE ME</button> </Link>
            <a
              href="fbg.jpg"
              download="resume.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-2 ml-[20px]  sm:w-[150px] lg:w-[150px] text-center border  cursor-pointer border-slate-200px rounded-full bg-gradient-to-r from-blue-200 to-blue-900 hover:bg-slate-300 text-white mt-3">Download CV</button>
            </a>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/my pic.jpg"
              alt="my image"
              className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
