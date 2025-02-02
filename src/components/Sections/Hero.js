import React from "react";
import ResumeButton from "../Buttons/ResumeButtton";
import BioCard from "../BioCard/BioCard";

function Hero() {
  return (
    <>
      {/* <div className="flex mt-48"> */}
      <div className="mx-auto mt-48 max-w-3xl">
        <div className="flex">
          {/* <div className="flex flex-col"> */}
          <h1 className="mb-2 text-5xl font-semibold leading-tight text-primary mr-2">
            Najee
          </h1>
          <h1 className="mb-2 text-5xl font-medium leading-tight text-primary">
            Simmons
          </h1>
        </div>
        <h2 className="mb-1 text-md text-[#ef9218] tracking-widest font-bold">
          SOFTWARE ENGINEER
        </h2>
        <p className="w-2/3">
          {/* Passionate software engineer with professional experience building
          scalable, feature-rich web applications and optimizing frontend
          usability. */}
          Building scalable, feature-rich web apps and optimizing frontend
          usablity.
        </p>
        <ResumeButton className="mt-8" />
      </div>
      {/* <BioCard />
      </div> */}
    </>
  );
}

export default Hero;
