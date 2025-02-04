import React from "react";
import Image from "next/image";
import CTAButton from "../Buttons/CTAButton";

function Contact() {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="mx-auto mb-8 w-32 h-32 overflow-hidden rounded-full">
        <Image
          src="/najeesimmons.png"
          height={125}
          width={150}
          objectFit="cover"
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
