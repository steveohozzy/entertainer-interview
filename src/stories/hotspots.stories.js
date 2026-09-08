import { db } from "../config/firebase";

import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

import { useArgs } from "storybook/preview-api";

import { Hotspots } from "./hotspots";


/* ============================================================
   STORYBOOK META
   ============================================================ */

export default {

  title: "Christmas/Hotspots",

  component: Hotspots,

  parameters: {

    layout: "fullscreen",

    /*
     * IMPORTANT
     *
     * @whitespace/storybook-addon-html will capture
     * ONLY this element.
     *
     * This prevents the Storybook Desktop/Mobile
     * preview switcher from appearing in the
     * copied HTML.
     */
    html: {
      root: ".storybook-hotspots-export",
    },

  },


  argTypes: {

    moduleName: {
      control: "text",
      description:
        "Name used when saving the module to Firebase.",
    },


    selectedModule: {
      table: {
        disable: true,
      },
    },


    saveModule: {
      control: "boolean",
      description:
        "Save the current module to Firebase.",
    },

    lozengetitle: {
      control: 'text',
    },

    lozengebackgroundcolor: {
      control: 'color',
    },

    lozengetextcolor: {
      control: 'color',
  },

    modulebackgroundcolor: {
      control: "color",
      description:
        "Module background color.",
    },


    /*
     * ==========================================================
     * DESKTOP IMAGE
     * ==========================================================
     */

    image: {
      control: "text",
      description:
        "Desktop image.",
    },


    imageAlt: {
      control: "text",
    },


    /*
     * ==========================================================
     * MOBILE IMAGE
     * ==========================================================
     */

    mobileImage: {
      control: "text",
      description:
        "Mobile image.",
    },


    /*
     * ==========================================================
     * DESKTOP HOTSPOTS
     * ==========================================================
     */

    hotspots: {
      control: "object",
      description:
        "Desktop hotspot positions.",
    },


    /*
     * ==========================================================
     * MOBILE HOTSPOTS
     * ==========================================================
     */

    mobileHotspots: {
      control: "object",
      description:
        "Mobile hotspot positions.",
    },


    /* ==========================================================
       HOTSPOT PANEL 1
       ========================================================== */

    hotspotPanel1Title: {
      control: "text",
      description:
        "Title shown when hotspot 1 is clicked.",
    },

    hotspotPanel1ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 1.",
    },

    hotspotPanel1InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 1.",
    },


    /* ==========================================================
       HOTSPOT PANEL 2
       ========================================================== */

    hotspotPanel2Title: {
      control: "text",
      description:
        "Title shown when hotspot 2 is clicked.",
    },

    hotspotPanel2ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 2.",
    },

    hotspotPanel2InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 2.",
    },


    /* ==========================================================
       HOTSPOT PANEL 3
       ========================================================== */

    hotspotPanel3Title: {
      control: "text",
      description:
        "Title shown when hotspot 3 is clicked.",
    },

    hotspotPanel3ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 3.",
    },

    hotspotPanel3InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 3.",
    },


    /* ==========================================================
       HOTSPOT PANEL 4
       ========================================================== */

    hotspotPanel4Title: {
      control: "text",
      description:
        "Title shown when hotspot 4 is clicked.",
    },

    hotspotPanel4ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 4.",
    },

    hotspotPanel4InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 4.",
    },


    /* ==========================================================
       HOTSPOT PANEL 5
       ========================================================== */

    hotspotPanel5Title: {
      control: "text",
      description:
        "Title shown when hotspot 5 is clicked.",
    },

    hotspotPanel5ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 5.",
    },

    hotspotPanel5InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 5.",
    },


    /* ==========================================================
       HOTSPOT PANEL 6
       ========================================================== */

    hotspotPanel6Title: {
      control: "text",
      description:
        "Title shown when hotspot 6 is clicked.",
    },

    hotspotPanel6ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 6.",
    },

    hotspotPanel6InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 6.",
    },


    /* ==========================================================
       HOTSPOT PANEL 7
       ========================================================== */

    hotspotPanel7Title: {
      control: "text",
      description:
        "Title shown when hotspot 7 is clicked.",
    },

    hotspotPanel7ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 7.",
    },

    hotspotPanel7InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 7.",
    },


    /* ==========================================================
       HOTSPOT PANEL 8
       ========================================================== */

    hotspotPanel8Title: {
      control: "text",
      description:
        "Title shown when hotspot 8 is clicked.",
    },

    hotspotPanel8ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 8.",
    },

    hotspotPanel8InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 8.",
    },


    /* ==========================================================
       HOTSPOT PANEL 9
       ========================================================== */

    hotspotPanel9Title: {
      control: "text",
      description:
        "Title shown when hotspot 9 is clicked.",
    },

    hotspotPanel9ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 9.",
    },

    hotspotPanel9InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 9.",
    },


    /* ==========================================================
       HOTSPOT PANEL 10
       ========================================================== */

    hotspotPanel10Title: {
      control: "text",
      description:
        "Title shown when hotspot 10 is clicked.",
    },

    hotspotPanel10ShopLink: {
      control: "text",
      description:
        "Shop link for hotspot 10.",
    },

    hotspotPanel10InfoLink: {
      control: "text",
      description:
        "Info link for hotspot 10.",
    },

  },


  /* ============================================================
     DECORATORS
     ============================================================ */

  decorators: [

    (Story) => {

      const [
        currentArgs,
        updateArgs,
      ] = useArgs();


      const [
        modules,
        setModules,
      ] = useState([]);


      const [
        previewMode,
        setPreviewMode,
      ] = useState("desktop");


      const loadingRef =
        useRef(false);


      const previousModule =
        useRef("");


      /* ========================================================
         LOAD MODULE LIST
         ======================================================== */

      useEffect(() => {

        const loadModules =
          async () => {

            try {

              const snap =
                await getDocs(
                  collection(
                    db,
                    "hotspots-modules"
                  )
                );


              const list =
                snap.docs.map(
                  (d) => d.id
                );


              setModules(list);

            } catch (e) {

              console.log(
                "hotspots module list error",
                e
              );

            }

          };


        loadModules();

      }, []);


      /* ========================================================
         LOAD MODULE
         ======================================================== */

      useEffect(() => {

        if (
          !currentArgs.selectedModule ||
          loadingRef.current ||
          previousModule.current ===
            currentArgs.selectedModule
        ) {

          return;

        }


        const load =
          async () => {

            loadingRef.current =
              true;


            try {

              const ref =
                doc(
                  db,
                  "hotspots-modules",
                  currentArgs.selectedModule
                );


              const snap =
                await getDoc(ref);


              if (snap.exists()) {

                previousModule.current =
                  currentArgs.selectedModule;


                updateArgs({

                  ...currentArgs,

                  moduleName:
                    currentArgs.selectedModule,

                  saveModule:
                    false,

                  ...snap.data(),

                });

              }

            } catch (e) {

              console.log(
                "hotspots module load error",
                e
              );

            }


            loadingRef.current =
              false;

          };


        load();

      }, [
        currentArgs.selectedModule,
      ]);


      /* ========================================================
         SAVE MODULE
         ======================================================== */

      useEffect(() => {

        if (
          loadingRef.current ||
          !currentArgs.saveModule ||
          !currentArgs.moduleName
        ) {

          return;

        }


        const save =
          async () => {

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
                  "hotspots-modules",
                  moduleName
                ),

                fields,

                {
                  merge: false,
                }

              );


              updateArgs({

                saveModule:
                  false,

                selectedModule:
                  moduleName,

              });


              console.log(
                "Hotspots module saved:",
                moduleName
              );

            } catch (e) {

              console.log(
                "hotspots module save error",
                e
              );

            }

          };


        save();

      }, [
        currentArgs.saveModule,
      ]);


      /* ========================================================
         DESKTOP POSITION EDITOR
         ======================================================== */

      const handleCoordinateChange =
        (
          id,
          field,
          value
        ) => {

          const numVal =
            value === ""
              ? 0
              : parseFloat(value);


          updateArgs({

            hotspots: {

              ...(
                currentArgs.hotspots ||
                {}
              ),

              [id]: {

                ...(
                  currentArgs.hotspots?.[id] ||
                  {}
                ),

                [field]:
                  numVal,

              },

            },

          });

        };


      /* ========================================================
         MOBILE POSITION EDITOR
         ======================================================== */

      const handleMobileCoordinateChange =
        (
          id,
          field,
          value
        ) => {

          const numVal =
            value === ""
              ? 0
              : parseFloat(value);


          updateArgs({

            mobileHotspots: {

              ...(
                currentArgs.mobileHotspots ||
                {}
              ),

              [id]: {

                ...(
                  currentArgs.mobileHotspots?.[id] ||
                  {}
                ),

                [field]:
                  numVal,

              },

            },

          });

        };


      /* ========================================================
         POSITION ROW
         ======================================================== */

      const renderPositionRows =
        (
          hotspotData,
          handler
        ) => (

          <div
            style={{
              maxHeight: 320,
              overflowY: "auto",
              paddingRight: 5,
            }}
          >

            {Object.entries(
              hotspotData || {}
            ).map(
              ([id, hotspot]) => (

                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    padding:
                      "6px 0",
                    borderBottom:
                      "1px solid #333",
                    fontSize: 12,
                  }}
                >

                  <strong
                    style={{
                      width: 25,
                    }}
                  >
                    #{id}
                  </strong>


                  <div
                    style={{
                      display:
                        "flex",
                      gap: 6,
                      alignItems:
                        "center",
                    }}
                  >

                    <label
                      style={{
                        color:
                          "#aaa",
                        fontSize:
                          11,
                      }}
                    >
                      Top:
                    </label>


                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="100"
                      value={
                        hotspot.top ??
                        50
                      }
                      onChange={(e) =>
                        handler(
                          id,
                          "top",
                          e.target.value
                        )
                      }
                      style={{
                        width: 55,
                        padding:
                          "3px 5px",
                        background:
                          "#222",
                        color:
                          "#fff",
                        border:
                          "1px solid #444",
                        borderRadius:
                          3,
                        textAlign:
                          "center",
                      }}
                    />


                    <label
                      style={{
                        color:
                          "#aaa",
                        fontSize:
                          11,
                      }}
                    >
                      Left:
                    </label>


                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="100"
                      value={
                        hotspot.left ??
                        50
                      }
                      onChange={(e) =>
                        handler(
                          id,
                          "left",
                          e.target.value
                        )
                      }
                      style={{
                        width: 55,
                        padding:
                          "3px 5px",
                        background:
                          "#222",
                        color:
                          "#fff",
                        border:
                          "1px solid #444",
                        borderRadius:
                          3,
                        textAlign:
                          "center",
                      }}
                    />


                    <span
                      style={{
                        color:
                          "#666",
                      }}
                    >
                      %
                    </span>

                  </div>

                </div>

              )
            )}

          </div>

        );


      /* ========================================================
         EDITOR PANEL
         ======================================================== */

      return (

        <>

          {createPortal(

            <div
              style={{
                position:
                  "fixed",
                top: 10,
                right: 10,
                zIndex:
                  99999,
                width: 340,
                padding: 14,
                background:
                  "#111",
                color:
                  "#fff",
                borderRadius:
                  8,
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.4)",
                fontFamily:
                  "Arial, sans-serif",
                fontSize:
                  13,
                  overflow: "auto",
                maxHeight: "100vh",
              }}
            >


              {/* ==================================================
                  STORYBOOK PREVIEW TOGGLE
                  ================================================== */}

              <div
                style={{
                  marginBottom:
                    12,
                  display:
                    "flex",
                  justifyContent:
                    "center",
                }}
              >

                <div
                  style={{
                    display:
                      "inline-flex",
                    padding: 4,
                    background:
                      "#222",
                    borderRadius:
                      999,
                    gap: 4,
                  }}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setPreviewMode(
                        "desktop"
                      )
                    }
                    style={{
                      border:
                        "none",
                      borderRadius:
                        999,
                      padding:
                        "8px 18px",
                      cursor:
                        "pointer",
                      fontWeight:
                        700,
                      fontSize:
                        13,
                      background:
                        previewMode ===
                        "desktop"
                          ? "#E31B23"
                          : "transparent",
                      color:
                        previewMode ===
                        "desktop"
                          ? "#fff"
                          : "#aaa",
                    }}
                  >
                    Desktop
                  </button>


                  <button
                    type="button"
                    onClick={() =>
                      setPreviewMode(
                        "mobile"
                      )
                    }
                    style={{
                      border:
                        "none",
                      borderRadius:
                        999,
                      padding:
                        "8px 18px",
                      cursor:
                        "pointer",
                      fontWeight:
                        700,
                      fontSize:
                        13,
                      background:
                        previewMode ===
                        "mobile"
                          ? "#E31B23"
                          : "transparent",
                      color:
                        previewMode ===
                        "mobile"
                          ? "#fff"
                          : "#aaa",
                    }}
                  >
                    Mobile
                  </button>

                </div>

              </div>


              {/* ==================================================
                  LOAD MODULE
                  ================================================== */}

              <div
                style={{
                  marginBottom:
                    12,
                }}
              >

                <label
                  style={{
                    display:
                      "block",
                    marginBottom:
                      5,
                    fontWeight:
                      "bold",
                  }}
                >
                  Load module
                </label>


                <select
                  value={
                    currentArgs.selectedModule ||
                    ""
                  }
                  style={{
                    width:
                      "100%",
                    padding:
                      7,
                    color:
                      "#000",
                    borderRadius:
                      4,
                  }}
                  onChange={(e) => {

                    updateArgs({

                      ...currentArgs,

                      selectedModule:
                        e.target.value,

                    });

                  }}
                >

                  <option value="">
                    -- select module --
                  </option>


                  {modules.map(
                    (module) => (

                      <option
                        key={module}
                        value={module}
                      >
                        {module}
                      </option>

                    )
                  )}

                </select>

              </div>


              {/* ==================================================
                  DESKTOP POSITIONS
                  ================================================== */}

              <div
                style={{
                  marginBottom:
                    12,
                  padding:
                    10,
                  background:
                    "#263238",
                  borderRadius:
                    5,
                }}
              >

                <strong>
                  Desktop Hotspot Positions
                </strong>


                <div
                  style={{
                    marginTop:
                      5,
                    marginBottom:
                      8,
                    color:
                      "#b0bec5",
                    lineHeight:
                      1.4,
                    fontSize:
                      12,
                  }}
                >
                  Adjust desktop
                  top and left
                  percentages.
                </div>


                {renderPositionRows(
                  currentArgs.hotspots,
                  handleCoordinateChange
                )}

              </div>


              {/* ==================================================
                  MOBILE POSITIONS
                  ================================================== */}

              <div
                style={{
                  marginBottom:
                    12,
                  padding:
                    10,
                  background:
                    "#263238",
                  borderRadius:
                    5,
                }}
              >

                <strong>
                  Mobile Hotspot Positions
                </strong>


                <div
                  style={{
                    marginTop:
                      5,
                    marginBottom:
                      8,
                    color:
                      "#b0bec5",
                    lineHeight:
                      1.4,
                    fontSize:
                      12,
                  }}
                >
                  Adjust mobile
                  top and left
                  percentages.
                </div>


                {renderPositionRows(
                  currentArgs.mobileHotspots,
                  handleMobileCoordinateChange
                )}

              </div>

            </div>,

            document.body

          )}


          {/* ======================================================
              STORYBOOK PREVIEW FRAME

              IMPORTANT:

              This wrapper is NOT the HTML addon root.

              The addon is specifically pointed at
              .storybook-hotspots-export inside Hotspots.
              ====================================================== */}

          <div
            style={{
              width:
                "100%",
              display:
                "flex",
              justifyContent:
                "center",
            }}
          >

            <div
              style={{
                width:
                  previewMode ===
                  "mobile"
                    ? "390px"
                    : "100%",
                minHeight:
                  previewMode ===
                  "mobile"
                    ? "700px"
                    : "auto",
                overflow:
                  "visible",
                margin:
                  "0 auto",
                transition:
                  "width .2s ease",
              }}
            >

              <div
                className={
                  previewMode ===
                  "mobile"
                    ? "storybook-preview-mobile"
                    : "storybook-preview-desktop"
                }
              >

                <Story
                  args={{
                    ...currentArgs,
                    previewMode,
                  }}
                />

              </div>

            </div>

          </div>

        </>

      );

    },

  ],

};


/* ============================================================
   DEFAULT DESKTOP HOTSPOTS
   ============================================================ */

const defaultHotspots = {

  1: {
    top: 42,
    left: 50,
  },

  2: {
    top: 52,
    left: 40,
  },

  3: {
    top: 52,
    left: 58,
  },

  4: {
    top: 62,
    left: 38,
  },

  5: {
    top: 62,
    left: 48,
  },

  6: {
    top: 62,
    left: 62,
  },

  7: {
    top: 77,
    left: 36,
  },

  8: {
    top: 79,
    left: 52,
  },

  9: {
    top: 78,
    left: 65,
  },

  10: {
    top: 87,
    left: 50,
  },

};


/* ============================================================
   DEFAULT MOBILE HOTSPOTS
   ============================================================ */

const defaultMobileHotspots = {

  1: {
    top: 24.5,
    left: 50,
  },

  2: {
    top: 52,
    left: 40,
  },

  3: {
    top: 52,
    left: 58,
  },

  4: {
    top: 62,
    left: 38,
  },

  5: {
    top: 62,
    left: 48,
  },

  6: {
    top: 62,
    left: 62,
  },

  7: {
    top: 77,
    left: 36,
  },

  8: {
    top: 79,
    left: 52,
  },

  9: {
    top: 78,
    left: 65,
  },

  10: {
    top: 87,
    left: 50,
  },

};


/* ============================================================
   STORY
   ============================================================ */

export const HotspotsSection = {

  args: {

    moduleName:
      "",

    selectedModule:
      "",

    saveModule:
      false,

    lozengetitle:
      "Lozenge",

    lozengebackgroundcolor:
      "transparent",

    lozengetextcolor:
      "transparent",

    modulebackgroundcolor:
      "transparent",


    /* ==========================================================
       DESKTOP IMAGE
       ========================================================== */

    image:
      "https://www.thetoyshop.com/medias/10-toys.png?context=bWFzdGVyfHJvb3R8NTgzODkzfGltYWdlL3BuZ3xhRGxqTDJneFpDOHhNamd5TXpVek1EZzVOelF6T0M4eE1DMTBiM2x6TG5CdVp3fDMwZWEzMmI4OWM4NGFhOWZhYjc1NzAwYjkyMzA0NDE1YjA1ZmJhNmI2YmU2ZTA1NzFlY2E3YmY5ODdmZmM5OTk",

    imageAlt:
      "The Entertainer Top 10 Toys",


    /* ==========================================================
       MOBILE IMAGE
       ========================================================== */

    mobileImage:
      "https://www.thetoyshop.com/medias/image-9-.png?context=bWFzdGVyfHJvb3R8Njk3OTR8aW1hZ2UvcG5nfGFEWmlMMmc0T0M4eE1qZ3pNakU0TURZd01EZzJNaTlwYldGblpTQW9PU2t1Y0c1bnxlODNmNGE2NThkNjM5NThkODNjMmY2ZjI4ZTY3ZjM4YmJmOWU4ZTM5OGVmOTI4ODE1NDU1NjRhY2U4MDg2NmM5",


    /* ==========================================================
       DESKTOP HOTSPOTS
       ========================================================== */

    hotspots:
      defaultHotspots,


    /* ==========================================================
       MOBILE HOTSPOTS
       ========================================================== */

    mobileHotspots:
      defaultMobileHotspots,


    /* ==========================================================
       PANEL 1
       ========================================================== */

    hotspotPanel1Title:
      "Featured Christmas Main Toy",

    hotspotPanel1ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel1InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 2
       ========================================================== */

    hotspotPanel2Title:
      "Trending Electronic Companion",

    hotspotPanel2ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel2InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 3
       ========================================================== */

    hotspotPanel3Title:
      "Action & Adventure Playset",

    hotspotPanel3ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel3InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 4
       ========================================================== */

    hotspotPanel4Title:
      "Creative Building Set",

    hotspotPanel4ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel4InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 5
       ========================================================== */

    hotspotPanel5Title:
      "Collectible Character Plush",

    hotspotPanel5ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel5InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 6
       ========================================================== */

    hotspotPanel6Title:
      "High-Speed Vehicle Track",

    hotspotPanel6ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel6InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 7
       ========================================================== */

    hotspotPanel7Title:
      "Interactive Tech Toy",

    hotspotPanel7ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel7InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 8
       ========================================================== */

    hotspotPanel8Title:
      "Classic Family Favorite",

    hotspotPanel8ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel8InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 9
       ========================================================== */

    hotspotPanel9Title:
      "Imaginative Roleplay Set",

    hotspotPanel9ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel9InfoLink:
      "https://www.thetoyshop.com",


    /* ==========================================================
       PANEL 10
       ========================================================== */

    hotspotPanel10Title:
      "Must-Have Holiday Hit",

    hotspotPanel10ShopLink:
      "https://www.thetoyshop.com",

    hotspotPanel10InfoLink:
      "https://www.thetoyshop.com",

  },

};