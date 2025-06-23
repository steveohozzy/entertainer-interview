import { useState } from "react";

const Dropdown = ({ title, answer, ...otherProps}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
        <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            {...otherProps}
        >
            <span className="mr-2">{title} </span>
            <span
            className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-brandBlue transition-all ${
                accordionOpen && "rotate-180"
            }`}
            ></span>
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
            <div className="overflow-hidden">{answer}</div>
        </div>
    </>
  );
};

export default Dropdown;