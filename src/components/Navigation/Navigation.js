import React from "react";

function Navigation() {
  return (
    <nav className="mx-auto max-w-3xl mt-8 flex justify-between items-center">
      <ul className="flex space-x-16 mx-auto">
        <li className="text-lg font-semibold">
          <a href="/#experience">experience</a>
        </li>
        <li className="text-lg font-semibold">
          <a href="#projects">projects</a>
        </li>
        <li className="text-lg font-semibold">
          <a href="/#contact">contact</a>
        </li>
        <li className="text-lg font-semibold">resume</li>
      </ul>
    </nav>
  );
}

export default Navigation;
