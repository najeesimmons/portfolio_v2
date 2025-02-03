import React from "react";

function Section({ className, children, title, id }) {
  return (
    <section id={id} className={`mx-auto max-w-3xl ${className}`}>
      {title && (
        <h3 className="tracking-widest font-semibold mt-8 mb-8">{title}</h3>
      )}
      <div>{children}</div>
    </section>
  );
}

export default Section;
