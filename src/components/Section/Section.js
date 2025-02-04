import React from "react";

function Section({ className, children, title, id, bgcolor }) {
  return (
    <section id={id} className={`mx-auto max-w-3xl ${className}`}>
      {title && (
        <h3
          className={`inline-block tracking-widest font-semibold mt-8 mb-8 px-4 dark:text-black`}
          style={{ backgroundColor: bgcolor }}
        >
          {title}
        </h3>
      )}
      <div>{children}</div>
    </section>
  );
}

export default Section;
