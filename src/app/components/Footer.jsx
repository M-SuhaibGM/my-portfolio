// Here's an example code for a responsive footer in React using Tailwind CSS:
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-2 border-white text-white body-font">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-bold mb-4">About Me</h5>
            <p className="text-white">
              I'm a full stack web Developer with a passion for building innovative
              websites.
            </p>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-bold mb-4">Links</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a
                  href="https://github.com/M-SuhaibGM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/muhammad-suhaib-811452326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-bold mb-4">Contact</h5>
            <p className="text-white">
              Email: <a href="mailto:your-email@example.com">mmsohaib617@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 text-white body-font py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} M Suhiab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

