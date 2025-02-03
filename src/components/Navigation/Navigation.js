import React from "react";

function Navigation() {
  return (
    <nav className="mx-auto max-w-3xl mt-8 flex justify-between items-center">
      <ul className="flex space-x-16 mx-auto">
        <li className="text-lg font-semibold">experience</li>
        <li className="text-lg font-semibold">projects</li>
        <li className="text-lg font-semibold">contact</li>
        <li className="text-lg font-semibold">resume</li>
      </ul>
    </nav>
  );
}

export default Navigation;
