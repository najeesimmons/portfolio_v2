import React from "react";
import Tech from "../Tech/Tech";

function Experience({ tech }) {
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold mb-0">
        SOFTWARE ENGINEER, HEALTH STREET
      </h3>
      <h4 className="text-[12px] font-bold text-gray-500 mb-3">
        2023 - PRESENT
      </h4>
      <p>
        Develop and integrate dynamic Next.js components with complex state
        management to enhance web app functionality, improving user experience
        and data interactions. Optimize backend infrastructure to support 2,500+
        active users and develop a custom CMS to automate the publishing of
        6,000+ SEO-friendly web pages with integrated JSON-LD for enhanced
        search visibility.
      </p>
      <div className="my-4">
        <Tech tech={tech} isNoDarkMode={true} />
      </div>
    </div>
  );
}

export default Experience;
