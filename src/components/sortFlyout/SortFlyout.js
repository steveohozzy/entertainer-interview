import { useState, useRef, useEffect } from "react";

export default function SortFlyout({ sortOption, setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const flyoutRef = useRef(null);

  const options = [
    { value: "Sort", label: "Sort" },
    { value: "relevance", label: "Relevance" },
    { value: "price-low", label: "Price (lowest first)" },
    { value: "price-high", label: "Price (highest first)" },
    { value: "rating", label: "Rating" },
    { value: "newest", label: "Newest" },
  ];

  // Close flyout if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={flyoutRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full h-full px-4 py-2 flex items-center justify-between w-full cursor-pointer focus:outline-none  ${isOpen ? "bg-white !text-brandBlue border-brandBlue border-[3px] border-b-white relative z-[2] rounded-bl-none rounded-tl-[20px]" : ""}`}
      >
        <span>{options.find((opt) => opt.value === sortOption)?.label || "Sort"}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out w-[calc(100vw-60px)] md:w-[calc(100%+40px)] left-[calc(-100%+5px)] md:left-[-20px] no-scrollbar max-h-[calc(100vh-250px)] overflow-y-auto border border-brandBlue border-[3px] rounded-bl-lg rounded-br-lg top-[calc(100%-3px)] ">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSortOption(option.value);
                setIsOpen(false);
              }}
              className="tranistion-all block w-full text-left px-4 py-2 text-brandBlue hover:bg-brandBlue hover:text-white"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
