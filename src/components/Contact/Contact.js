import React from "react";
import CTAButton from "../Buttons/CTAButton";

function Contact() {
  return (
    <div className="flex flex-col items-center mb-20 mt-8">
      <div className="mx-auto mb-8 w-32 h-32 overflow-hidden rounded-full">
        <img
          src="/najeesimmons.jpg"
          height={150}
          width={150}
          layout="intrinsic"
          alt="Najee Simmons"
        />
      </div>
      <CTAButton
        label={"GET IN TOUCH"}
        className={"mx-auto"}
        href={
          "mailto:najee.bryant.simmons@gmail.com?subject=Hello+World&body=Hello+World"
        }
      />
    </div>
  );
}

export default Contact;
