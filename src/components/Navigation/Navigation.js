import React from "react";

function Navigation() {
  return (
    <nav className="mx-auto max-w-3xl mt-8 flex justify-between items-center">
      <ul className="flex mx-auto space-x-[30px] md:space-x-16">
        <li className="text-lg font-semibold">
          <a href="/#experience">experience</a>
        </li>
        <li className="text-lg font-semibold">
          <a href="#projects">projects</a>
        </li>
        <li className="text-lg font-semibold">
          <a href="/#contact">contact</a>
        </li>
        <li className="text-lg font-semibold">
          <a
            href="https://drive.google.com/file/d/10888rfeezoSZ6VzjLi2aGFvhWjYza6bj/view?usp=share_link"
            rel="noopener noreferrer"
            target="_blank"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
