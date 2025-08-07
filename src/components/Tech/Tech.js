import { SiClaris, SiR } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPexels } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { TbBrandSupabase } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";

const ICON_MAP = {
  "claris filemaker pro": <SiClaris />,
  css: <SiCss3 />,
  html: <SiHtml5 />,
  javascript: <SiJavascript />,
  "next.js": <SiNextdotjs />,
  "pexels api": <SiPexels />,
  postgresql: <SiPostgresql />,
  react: <SiReact />,
  supabase: <SiSupabase />,
  "supabase auth": <TbBrandSupabase />,
  "tailwind css": <SiTailwindcss />,
  vercel: <SiVercel />,
};

export default function Tech({ tech }) {
  return (
    // <div className="flex flex-wrap gap-4 justify-start">
    //   {tech.map((technology, index) => {
    //     return (
    //       <span
    //         key={index}
    //         className="px-1 py-1 text-sm font-base text-black bg-gray-100"
    //       >
    //         {technology}
    //       </span>
    //     );
    //   })}
    // </div>./
    <ul className="flex gap-4 flex-wrap items-center">
      {tech.map((tech) => (
        <li key={tech} className="flex items-center gap-2">
          <span className="text-2xl">{ICON_MAP[tech.toLowerCase()]}</span>
          <span className="capitalize text-sm">{tech}</span>
        </li>
      ))}
    </ul>
  );
}
