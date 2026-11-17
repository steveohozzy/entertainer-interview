import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { db } from "../config/firebase";
import {
  getDoc,
  doc,
  setDoc,
  deleteDoc
} from "firebase/firestore";

import { AdventCalendar } from "./AdventCalendar";
import { useArgs } from "storybook/preview-api";

const DEFAULT_OFFERS = [
  {
    title: 'https://www.thetoyshop.com/medias/GBD-Logo-50px-high.png" />',
    discount: "25% off",
    description: "Selected Gabby's Dollhouse toys",
    code: "GABBY25",
    modalImage: 'https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-1-GOLD.jpg',
    mainImage: 'https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-1-GOLD.jpg',
    link: "https://www.thetoyshop.com/c/daily-deals",
    linkText: "Shop Now",
    terms: "Offer ends 5th December 2025 at 9am",
    xavailable: "",
    inactive: true
  },
  {
    title: 'https://www.thetoyshop.com/medias/LOGO.png',
    discount: "Free Toothless soft toy",
    description: "When you spend £40 or more via home delivery",
    code: "FREEGIFT",
    
    mainImage: "https://www.thetoyshop.com/medias/door-2-edit-V2.jpg",
    link: "https://www.thetoyshop.com/c/all-categories",
    linkText: "Shop Now",
    terms: "Styles vary. While stocks last.",
    xavailable: "x200 available",
    inactive: true
  },
  {
    title: 'https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png',
    discount: "Win a Jurassic World bundle",
    description: "x3 to be won",
    code: "",
    
    mainImage: 'https://www.thetoyshop.com/medias/Jurassic-Bundle-edit-V2.jpg" />',
    link: "https://www.thetoyshop.com/jurassic-bundle-prize-draw",
    linkText: "Enter Now",
    terms: "Draw closes 7th December 2025",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png',
    discount: "Win a Wicked beauty bundle",
    description: "x3 to be won",
    code: "",
    
    mainImage: 'https://www.thetoyshop.com/medias/Wicked-Bundle-2-edit.jpg',
    link: "https://www.thetoyshop.com/wicked-bundle-prize-draw",
    linkText: "Enter Now",
    terms: "Closes 8th December 2025 at 9am",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png',
    discount: "20% off",
    description: "Selected Wicked dolls",
    code: "WICKED20",
    
    mainImage: 'https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-5-GOLD.jpg',
    link: "https://www.thetoyshop.com/c/daily-deals",
    linkText: "Shop Now",
    terms: "Offer ends 9th December 2025 at 9am",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/DRAGON-logo-50px-high.png',
    discount: "20% off",
    description: "Selected How to Train Your Dragon action figures",
    code: "DRAGON20",
    
    mainImage: 'https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-6-GOLD.jpg',
    link: "https://www.thetoyshop.com/c/daily-deals",
    linkText: "Shop Now",
    terms: "Offer ends 10th December 2025 at 9am",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png',
    discount: "Free Jurassic World soft toy",
    description: "When you spend £40 or more via home delivery",
    code: "FREEGIFT",
    
    mainImage: "https://www.thetoyshop.com/medias/door-7-edit-v2.jpg",
    link: "https://www.thetoyshop.com/c/all-categories",
    linkText: "Shop Now",
    terms: "While stocks last. Styles vary.",
    xavailable: "x200 available",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png',
    discount: "Free Wicked bag clip",
    description: "When you spend £40 or more via home delivery",
    code: "FREEGIFT",
    
    mainImage: "https://www.thetoyshop.com/medias/door-8-edit-v2.jpg'",
    link: "https://www.thetoyshop.com/c/all-categories",
    linkText: "Shop Now",
    terms: "While stocks last. Styles vary.",
    xavailable: "x200 available",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png',
    discount: "20% off",
    description: "Selected Jurassic World toys",
    code: "DINO20",
    
    mainImage: 'https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-9-GOLD.jpg',
    link: "https://www.thetoyshop.com/c/daily-deals",
    linkText: "Shop Now",
    terms: "Offer ends 13th December 2025 at 9am",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/GBD-Logo-50px-high.png',
    discount: "Win a Gabby's Dollhouse bundle",
    description: "x3 to be won",
    code: "",
    
    mainImage: 'https://www.thetoyshop.com/medias/door-10-edit-v2.jpg',
    link: "https://www.thetoyshop.com/gabbys-dollhouse-bundle-prize-draw",
    linkText: "Enter Now",
    terms: "Draw closes 14th December 2025 at 9am",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/DRAGON-logo-50px-high.png',
    discount: "Win a How to Train Your Dragon bundle",
    description: "x3 to be won",
    code: "",
    
    mainImage: 'https://www.thetoyshop.com/medias/Dragon-big-bundle-edit-V2.jpg',
    link: "https://www.thetoyshop.com/httyd-bundle-prize-draw",
    linkText: "Enter Now",
    terms: "Closes 15th December 2025 at 9am",
    xavailable: "",
    inactive: false
  },
  {
    title: 'https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png',
    discount: "Win a magical weekend in France",
    description: "",
    code: "",
    
    mainImage: 'https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-12-GOLD.jpg',
    link: "https://www.thetoyshop.com/wicked-france-prize-draw",
    linkText: "Enter Now",
    terms: "Closes 31st December 2025 at 11:59pm",
    xavailable: "",
    inactive: false
  }
];

const doorFields = [
  "title",
  "discount",
  "description",
  "code",
  "modalImage",
  "mainImage",
  "link",
  "linkText",
  "terms",
  "xavailable",
  "inactive"
];

const argTypes = {
  moduleName: {
    control: "text",
    description: "Name used to save this Advent Calendar."
  },

  selectedModule: {
    table: {
      disable: true
    }
  },

  saveModule: {
    control: "boolean",
    description: "Save the current Advent Calendar configuration."
  },

  startDate: {
    control: "date",
    description:
      "Date when Door 1 becomes available. Each following door opens on the following day."
  },

  openingTime: {
    control: "text",
    description: "Time each door becomes available (24-hour format, e.g. 09:00)."
  },

  allDoorsAvailable: {
    control: "boolean",
    description:
      "Testing option. When enabled, all doors can be opened immediately."
  },

  heading: {
    control: "text",
    description: "Calendar heading."
  },

  headingColor: { control: "color" },

  instructions: {
    control: "text",
    description: "Instruction text displayed above the calendar."
  },

  instructionsColor: { control: "color" },

    headerImage: {
    control: "text",
    description:
      "Optional header image. When supplied, this replaces the heading and instruction text."
  },

  headerImageMobile: {
    control: "text",
    description:
      "Optional header image for mobile. When supplied, this replaces the heading and instruction text."
  },

  backgroundImage: {
    control: "text",
    description:
      "Optional main calendar background image URL."
  },

  backgroundImageMobile: {
    control: "text",
    description:
      "Optional main calendar background image URL for mobile."
  },

  backgroundColor: {
    control: "text",
    description:
      "Main calendar background colour."
  },

  footerImage: {
    control: "text",
    description:
      "Optional footer image displayed below the terms."
  },

  footerImageMobile: {
    control: "text",
    description:
      "Optional footer image for mobile."
  },

  modalBackgroundImage: {
    control: "text",
    description:
      "Optional modal background image URL."
  },

  modalBackgroundColor: {
    control: "text",
    description:
      "Modal background colour."
  },

  modalBorderColor: {
    control: "text",
    description:
      "Modal border colour."
  },

  modalTextColor: {
    control: "text",
    description:
      "Modal text colour."
  },

  modalBoxesBackgroundColor: {
    control: "text",
    description:
      "Modal text boxes background colour."
  },

  modalBoxesTextColor: {
    control: "text",
    description:
      "Modal text boxes text colour."
  },

  ctaColor: {
    control: "text",
    description: "CTA button text colour."
  },

  ctaBackgroundColor: {
    control: "text",
    description: "CTA button background colour."
  },

  mainTerms: {
    control: "text",
    description: "Terms text displayed below the calendar."
  },

  mainTermsLink: {
    control: "text",
    description: "Terms link text displayed below the calendar."
  },

  mainTermsColor: { control: "color" },

  doorlockedimage: {
    control: "text",
    description: "Image used for locked doors.",
  },
  highlightColor: { control: "color" },

  comingSoonTextColor: { control: "color" },

  comingSoonBackgroundColor: { control: "color" },
};

const args = {
  moduleName: "",
  selectedModule: "",
  saveModule: false,

  startDate: new Date("2025-12-04T00:00:00"),

  openingTime: "09:00",

  allDoorsAvailable: true,

  heading: "12 Surprises of Christmas",

  headingColor: "#fff",

  instructions:
    "There's a new festive gift, discount code or fabulous prize draw every day until 15th December. Unlock each door at 9am – some offers are only available in limited numbers and are first-come, first-served so don't leave it too late!",

  instructionsColor: "#fff",

  headerImage: "",

  headerImageMobile: "",

  backgroundImage:
    "https://thetoyshop.com/medias/edited-photo.png",

  backgroundImageMobile: "",

  backgroundColor: "#ffffff",

  footerImage: "",

  footerImageMobile: "",

  modalBackgroundImage:
    "https://thetoyshop.com/medias/edited-photo.png",

  modalBackgroundColor: "#ffffff",

  modalBorderColor: "#1f2b91",

  modalTextColor: "#fff",

  modalBoxesBackgroundColor: "#2F3D8D",

  modalBoxesTextColor: "#fff",

  ctaColor: "#fff",

  ctaBackgroundColor: "#009E44",

  mainTerms: "Terms and conditions apply",

  mainTermsLink: "#",

  mainTermsColor: "#fff",

  doorlockedimage:
    "https://thetoyshop.com/medias/Univ-advent-door-locked-1-.png?context=bWFzdGVyfHJvb3R8OTgzMzF8aW1hZ2UvcG5nfGFHUTFMMmczTnk4eE1qZzJOVEkzTVRNd01ERXlOaTlWYm1sMkxXRmtkbVZ1ZEMxa2IyOXlMV3h2WTJ0bFpDQW9NU2t1Y0c1bnw3NTAwMGIwZDRiMjQwMjMyOTdmZjE4OWYyODQzM2FiMzRkNTQ5ZDg1ZmEwZTUxYmYxYWU3Yzk2ZGQ1MzBiMDJi",
  highlightColor: "#B6985A",

  comingSoonTextColor: "#fff",

  comingSoonBackgroundColor: "#B6985A",
};

DEFAULT_OFFERS.forEach(function(offer, index) {
  var doorNumber = index + 1;

  doorFields.forEach(function(field) {
    var key =
      "door" +
      doorNumber +
      field.charAt(0).toUpperCase() +
      field.slice(1);

    argTypes[key] = {
      control:
        typeof offer[field] === "boolean"
          ? "boolean"
          : "text",
      description:
        "Door " + doorNumber + " " + field + "."
    };

    args[key] = offer[field];
  });
});

function buildDoorArgs(source, number) {
  var result = {};

  doorFields.forEach(function(field) {
    var key =
      "door" +
      number +
      field.charAt(0).toUpperCase() +
      field.slice(1);

    result[field] = source[key];
  });

  return result;
}

export default {
  title: "Advent Calendar/Advent Calendar",
  component: AdventCalendar,

  parameters: {
    layout: "fullscreen",
    html: {
      root: ".storybook-advent-export",
    },
  },

  argTypes: argTypes,

  args: args
};

export const Default = {
  render: function Render() {
    const [currentArgs, updateArgs] = useArgs();
    const [modules, setModules] = useState([]);
    const loadingRef = useRef(false);
    const previousModule = useRef("");

    useEffect(function() {
      if (
        !currentArgs.selectedModule ||
        loadingRef.current ||
        previousModule.current === currentArgs.selectedModule
      ) {
        return;
      }

      const load = async function() {
        loadingRef.current = true;

        try {
          const ref = doc(
            db,
            "advent-calendar-modules",
            currentArgs.selectedModule
          );

          const snap = await getDoc(ref);

          if (snap.exists()) {
            var data = snap.data();

            if (
              data.startDate &&
              typeof data.startDate.toDate === "function"
            ) {
              data.startDate = data.startDate.toDate();
            }

            previousModule.current = currentArgs.selectedModule;

            updateArgs({
              ...currentArgs,
              moduleName: currentArgs.selectedModule,
              ...data
            });
          }
        } catch (e) {
          console.log("load error", e);
        }

        loadingRef.current = false;
      };

      load();
    }, [currentArgs.selectedModule]);

    useEffect(function() {
      if (
        loadingRef.current ||
        !currentArgs.saveModule ||
        !currentArgs.moduleName
      ) {
        return;
      }

      const save = async function() {
        try {
          const {
            moduleName,
            selectedModule,
            saveModule,
            ...fields
          } = currentArgs;

          await setDoc(
            doc(
              db,
              "advent-calendar-modules",
              moduleName
            ),
            fields,
            {
              merge: false
            }
          );

          setModules(function(prev) {
            return prev.includes(moduleName)
              ? prev
              : [...prev, moduleName];
          });

          updateArgs({
            saveModule: false,
            selectedModule: moduleName
          });
        } catch (e) {
          console.log("save error", e);
        }
      };

      save();
    }, [currentArgs.saveModule]);

    useEffect(function() {
      const loadModules = async function() {
        try {
          const snap = await getDocs(
            collection(
              db,
              "advent-calendar-modules"
            )
          );

          setModules(
            snap.docs.map(function(d) {
              return d.id;
            })
          );
        } catch (e) {
          console.log("module list error", e);
        }
      };

      loadModules();
    }, []);

    const deleteSelectedModule = async function() {
      const selectedModule = currentArgs.selectedModule;

      if (!selectedModule) {
        return;
      }

      const confirmed = window.confirm(
        'Are you sure you want to delete "' +
          selectedModule +
          '"?'
      );

      if (!confirmed) {
        return;
      }

      try {
        await deleteDoc(
          doc(
            db,
            "advent-calendar-modules",
            selectedModule
          )
        );

        setModules(function(prev) {
          return prev.filter(function(module) {
            return module !== selectedModule;
          });
        });

        previousModule.current = "";

        updateArgs({
          ...currentArgs,
          moduleName: "",
          selectedModule: "",
          saveModule: false
        });
      } catch (e) {
        console.log("delete error", e);
      }
    };

    const componentProps = {
      heading: currentArgs.heading,
      headingColor: currentArgs.headingColor,
      instructions: currentArgs.instructions,
      instructionsColor: currentArgs.instructionsColor,
      headerImage: currentArgs.headerImage,
      headerImageMobile: currentArgs.headerImageMobile,
      mainTerms: currentArgs.mainTerms,
      mainTermsLink: currentArgs.mainTermsLink,
      mainTermsColor: currentArgs.mainTermsColor,
      startDate: currentArgs.startDate,
      openingTime: currentArgs.openingTime,
      allDoorsAvailable: currentArgs.allDoorsAvailable,
      backgroundImage: currentArgs.backgroundImage,
      backgroundImageMobile: currentArgs.backgroundImageMobile,
      backgroundColor: currentArgs.backgroundColor,
      footerImage: currentArgs.footerImage,
      footerImageMobile: currentArgs.footerImageMobile,
      modalBackgroundImage: currentArgs.modalBackgroundImage,
      modalBackgroundColor: currentArgs.modalBackgroundColor,
      modalBorderColor: currentArgs.modalBorderColor,
      modalTextColor: currentArgs.modalTextColor,
      modalBoxesBackgroundColor: currentArgs.modalBoxesBackgroundColor,
      modalBoxesTextColor: currentArgs.modalBoxesTextColor,
      ctaColor: currentArgs.ctaColor,
      ctaBackgroundColor: currentArgs.ctaBackgroundColor,
      doorlockedimage: currentArgs.doorlockedimage,
      highlightColor: currentArgs.highlightColor,
      comingSoonTextColor: currentArgs.comingSoonTextColor,
      comingSoonBackgroundColor: currentArgs.comingSoonBackgroundColor,
    };

    var doorNumbers = Object.keys(currentArgs)
      .filter(function(key) {
        return /^door\d+Discount$/.test(key) &&
          currentArgs[key];
      })
      .map(function(key) {
        return Number(key.match(/^door(\d+)Discount$/)[1]);
      })
      .sort(function(a, b) {
        return a - b;
      });

    doorNumbers.forEach(function(number, index) {
      componentProps["door" + (index + 1)] = buildDoorArgs(
        currentArgs,
        number
      );
    });

    return (
      <>
        {createPortal(
          <div
            style={{
              position: "fixed",
              top: 10,
              right: 10,
              zIndex: 9999,
              padding: 12,
              background: "#111",
              color: "#fff",
              borderRadius: "4px"
            }}
          >
            <div>
              <label>
                Load existing module:
              </label>

              <select
                value={
                  currentArgs.selectedModule || ""
                }
                style={{
                  color: "#000"
                }}
                onChange={function(e) {
                  updateArgs({
                    ...currentArgs,
                    selectedModule: e.target.value
                  });
                }}
              >
                <option value="">
                  -- select saved module --
                </option>

                {modules.map(function(m) {
                  return (
                    <option
                      key={m}
                      value={m}
                    >
                      {m}
                    </option>
                  );
                })}
              </select>

              <button
                type="button"
                disabled={!currentArgs.selectedModule}
                onClick={deleteSelectedModule}
                style={{
                  marginLeft: 8
                }}
              >
                Delete
              </button>
            </div>
          </div>,
          document.body
        )}

        <AdventCalendar
          {...componentProps}
        />
      </>
    );
  }
};

