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
      <span className="text-sm">
        Enhance web app functionality with dynamic Next.js components, including
        data tables with complex state management and CRUD modals, improving
        user experience and data interactions. Optimize backend infrastructure
        to support 2,500+ active users and develop a custom CMS to automate the
        publishing of 6,000+ SEO-friendly web pages with integrated JSON-LD for
        enhanced search visibility.
      </span>
      <div className="my-4">
        <Tech tech={tech} />
      </div>
    </div>
  );
}

export default Experience;
