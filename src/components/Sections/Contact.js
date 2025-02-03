import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div id="contact" className="mx-auto mt-16 max-w-3xl">
      <h3 className="tracking-widest font-semibold mt-8 mb-8">CONTACT_</h3>
      <div className="flex shadow-[0px_10px_15px_-3px_rgba(239,146,24,0.4),_0px_4px_6px_-2px_rgba(239,146,24,0.4)] mb-16">
        <div>
          <Image
            src={"/DSC_0127.png"}
            alt="Photo of Najee Simmons"
            width={175}
            height={175}
            className="rounded-full" // Add rounded-full to make it circular
          />
        </div>
        <div>
          <h4 className="text-2xl font-semibold leading-tight">
            Najee Simmons
          </h4>
          <span className="txt-lg">najee.bryant.simmons@gmail.com</span>
          <h1>icons</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
