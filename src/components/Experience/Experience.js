import React from "react";
import Tech from "../Tech/Tech";

function Experience({ tech }) {
  return (
    <>
      <div className="flex items-start">
        <div className="w-1/4">
          <h2 className="text-xs font-bold">2023 — PRESENT</h2>
        </div>
        <div className="w-3/4">
          <h3 className="text-xs font-semibold mb-2">
            SOFTWARE ENGINEER, HEALTH STREET
          </h3>
          <span className="text-sm">
            Enhance web app functionality with dynamic Next.js components,
            including data tables with complex state management and CRUD modals,
            improving user experience and data interactions. Optimize backend
            infrastructure to support 2,500+ active users and develop a custom
            CMS to automate the publishing of 6,000+ SEO-friendly web pages with
            integrated JSON-LD for enhanced search visibility.
          </span>
          <div className="my-4">
            <Tech tech={tech} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
