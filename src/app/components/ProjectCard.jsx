import React from "react";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="cursor-pointer" >
      <div
        onClick={() => window.open(previewUrl, "_blank")}
        className="h-52 md:h-72 rounded-t-xl relative group "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
      </div>
      <div className="flex justify-between">

        <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
        <Link href={gitUrl} target="_blank" className=" h-14 pt-2 w-14 border-[#ADB7BE] hover:border-white group/link" >
          <Image src={GithubIcon} alt="Github" className="h-10 w-10 " />
        </Link >
      </div>
    </div>
  );
};

export default ProjectCard;
