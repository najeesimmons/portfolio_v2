import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="mx-auto mt-16 max-w-3xl">
      <h3 className="tracking-widest font-semibold mt-8 mb-8">CONTACT_</h3>
      <div className="flex mx-auto h-[500px] max-w-sm mb-8 max-w-xs rounded overflow-hidden shadow-lg">
        <div className="mx-auto px-6 py-4">
          <Image
            src={"/DSC_0127.png"}
            alt="Photo of Najee Simmons"
            width={150}
            height={75}
            className="rounded-full" // Add rounded-full to make it circular
          />
        </div>
        <div>
          <h1>Najee Simmons</h1>
          <h1>email</h1>
          <h1>icons</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
