import React from "react";
import Image from "next/image";
function BioCard() {
  return (
    <div className="h-[315px] w-[250px] mb-8 max-w-xs rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <Image
          src={"/DSC_0127.png"}
          alt="Photo of Najee Simmons"
          width={250}
          height={150}
        />
        <h2 className="font-bold text-xl mb-2">Card Title</h2>
        <p className="text-gray-700 text-base">
          This is a simple card with an image, title, and description.
        </p>
      </div>
      <div className="px-6 py-4"></div>
    </div>
  );
}

export default BioCard;
