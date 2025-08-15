import { useRef, useState, useEffect } from "react";
import { ChevronRight, MenuIcon, X, Sparkles } from "lucide-react";

import menuCategories from "../../data/menuCategories";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubCategories, setExpandedSubCategories] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
    // Reset states when menu closes
    setTimeout(() => {
      setExpandedCategories({});
      setExpandedSubCategories({});
      setHoveredItem(null);
    }, 300);
  };

  const menuRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMenu(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(menuRef);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleSubCategory = (subCategoryId) => {
    setExpandedSubCategories((prev) => ({
      ...prev,
      [subCategoryId]: !prev[subCategoryId],
    }));
  };
  return (
    <>
      <button
        name="Activate Menu"
        className="transition-all shadow-lg flex flex-col items-center justify-center text-brandBlue bg-white px-3 md:py-1 rounded-xl rounded-tl-none hover:scale-105 h-full md:rounded-tl-xl md:rounded-bl-xl"
        onClick={toggleMenu}
      >
        <MenuIcon />
        <span className="text-[10px] mt-[-3px] relative">Menu</span>
        <span className="sr-only">Activate Menu</span>
      </button>
      {/* Hamburger Menu Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-textBlue bg-opacity-50 z-40 h-screen"
        />
      )}

      {/* Sliding Hamburger Menu */}
      <div
        className={`fixed overflow-y-auto h-screen top-0 left-0 h-full w-80 z-50 transform transition-transform ease-in-out ${
          showMenu ? "translate-x-0 top-2 left-2" : "-translate-x-full"
        }`}
      >
        <div ref={menuRef} className="bg-white overflow-hidden relative rounded-tl-3xl rounded-bl-3xl rounded-xl shadow-xl">
          {/* Animated Menu Categories */}
          <nav className="relative space-y-2 pt-6 pb-4">
            <div className="h-full w-[40px] bg-brandBlue rounded-full absolute left-0 top-0"></div>
            <button
              className="absolute -top-[5px] left-[5px]"
              onClick={() => setShowMenu(false)}
            >
              <X className="h-7 w-7 mt-2" />
            </button>
            {menuCategories.map((category, categoryIndex) => (
              <div
                key={category.id}
                className={`transform transition-all duration-300 ${
                  showMenu ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                {category.hasSubmenu ? (
                  <>
                    {/* Category Header with Icon Bar */}
                    <div className="flex items-stretch rounded-xl overflow-hidden">
                      {/* Icon Bar */}
                      <div
                        className={`w-[40px] flex items-center justify-center relative ${
                          expandedCategories[category.id] ? "shadow-inner" : ""
                        }`}
                      >
                        <span className="text-2xl text-white">
                          {category.icon}
                        </span>
                        <span
                          className={`w-0 h-0 border-l-[8px] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-brandBlue transition-all absolute left-full ${
                            expandedCategories[category.id] &&
                            "rotate-180 border-white left-[calc(100%-8px)]"
                          }`}
                        ></span>
                      </div>

                      {/* Category Button */}
                      <button
                        onClick={() => toggleCategory(category.id)}
                        onMouseEnter={() => setHoveredItem(category.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`flex-1 flex items-center justify-between p-4 text-left transition-all duration-300 group hover:shadow-lg text-brandBlue`}
                      >
                        <span className="font-bold text-lg">
                          {category.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {hoveredItem === category.id && (
                            <Sparkles className="h-4 w-4 animate-spin" />
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Submenu Items */}
                    {expandedCategories[category.id] && (
                      <div className="animate-fadeIn relative">
                        <div
                          className={`w-[40px] absolute top-0 left-0 justify-center bg-brandLightBlue rounded-full h-full`}
                        ></div>
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            {/* Second Level Item */}
                            <div className="flex items-stretch overflow-hidden">
                              {/* Icon Bar for Second Level */}
                              <div
                                className={`w-[40px] flex items-center justify-center relative`}
                              >
                                {item.hasSubItems && (
                                  <span
                                    className={`w-0 h-0 border-l-[8px] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-brandLightBlue transition-all absolute left-full ${
                                      expandedSubCategories[
                                        `${category.id}-${itemIndex}`
                                      ] &&
                                      "rotate-180 border-white left-[calc(100%-8px)]"
                                    }`}
                                  ></span>
                                )}
                              </div>

                              {/* Item Content */}
                              {item.hasSubItems ? (
                                <button
                                  onClick={() =>
                                    toggleSubCategory(
                                      `${category.id}-${itemIndex}`
                                    )
                                  }
                                  className={`flex-1 p-3 text-left transition-all duration-300 group`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="flex items-center gap-2 mb-1">
                                        <span
                                          className={`font-bold text-textBlue`}
                                        >
                                          {item.name}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={(e) => {
                                    if (item.onClick) {
                                      e.preventDefault();
                                      closeMenu();
                                      setTimeout(() => item.onClick(e), 300);
                                    } else {
                                      closeMenu();
                                    }
                                  }}
                                  className={`flex-1 p-3 transition-all duration-300 group`}
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className={`font-bold text-textBlue`}>
                                      {item.name}
                                    </span>
                                    {item.color && (
                                      <div
                                        className={`w-3 h-3 rounded-full ${item.color} animate-pulse`}
                                      ></div>
                                    )}
                                    <ChevronRight className="h-4 w-4 transition-transform duration-300 text-brandBlue" />
                                  </div>
                                </a>
                              )}
                            </div>

                            {/* Third Level Items */}
                            {item.hasSubItems &&
                              expandedSubCategories[
                                `${category.id}-${itemIndex}`
                              ] && (
                                <div className="ml-8 space-y-1 animate-fadeIn">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <div
                                      key={subIndex}
                                      className="flex items-stretch rounded-md overflow-hidden shadow-sm"
                                    >
                                      {/* Icon Bar for Third Level */}
                                      <div className="w-4 flex"></div>

                                      {/* Third Level Content */}
                                      <a
                                        href={subItem.href}
                                        onClick={(e) => {
                                          closeMenu();
                                        }}
                                        className="flex-1 p-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md group"
                                      >
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="flex items-center text-sm text-brandBlue opacity-75 group-hover:opacity-100">
                                            {subItem.name}{" "}
                                            <ChevronRight className="w-4 h-4 ml-2" />
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Simple Menu Item with Icon Bar */
                  <div className="flex items-stretch rounded-xl overflow-hidden shadow-lg">
                    {/* Icon Bar */}
                    <div
                      className={`w-16 flex items-center justify-center bg-gradient-to-b ${category.color}`}
                    >
                      <span className="text-2xl animate-bounce">
                        {category.icon}
                      </span>
                    </div>

                    {/* Category Content */}
                    <a
                      href={category.href}
                      onClick={(e) => {
                        if (category.onClick) {
                          e.preventDefault();
                          closeMenu();
                          setTimeout(() => category.onClick(), 300);
                        } else {
                          closeMenu();
                        }
                      }}
                      className={`flex-1 p-4 transition-all duration-300 group `}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-bold text-lg text-gray-600`}>
                          {category.name}
                        </span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
