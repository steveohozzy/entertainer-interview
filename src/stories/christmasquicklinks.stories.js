import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";
import { useArgs } from "storybook/preview-api";

import { ChristmasQuickLinks } from "./christmasquicklinks";

export default {
  title: "Christmas/Quick Links",
  component: ChristmasQuickLinks,

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    selectedModule: {
      table: {
        disable: true,
      },
    },

    moduleName: {
      control: "text",
    },

    saveModule: {
      control: "boolean",
    },

    modulebackgroundcolor: {
      name: "Background colour",
      control: "color",
    },

    link1image: {
      name: "Link 1 image",
      control: "text",
    },

    link1imagealt: {
      name: "Link 1 image alt",
      control: "text",
    },

    link1title: {
      name: "Link 1 title",
      control: "text",
    },

    link1anchor: {
      name: "Link 1 anchor",
      control: "text",
    },

    link2image: {
      name: "Link 2 image",
      control: "text",
    },

    link2imagealt: {
      name: "Link 2 image alt",
      control: "text",
    },

    link2title: {
      name: "Link 2 title",
      control: "text",
    },

    link2anchor: {
      name: "Link 2 anchor",
      control: "text",
    },

    link3image: {
      name: "Link 3 image",
      control: "text",
    },

    link3imagealt: {
      name: "Link 3 image alt",
      control: "text",
    },

    link3title: {
      name: "Link 3 title",
      control: "text",
    },

    link3anchor: {
      name: "Link 3 anchor",
      control: "text",
    },

    link4image: {
      name: "Link 4 image",
      control: "text",
    },

    link4imagealt: {
      name: "Link 4 image alt",
      control: "text",
    },

    link4title: {
      name: "Link 4 title",
      control: "text",
    },

    link4anchor: {
      name: "Link 4 anchor",
      control: "text",
    },

    link5image: {
      name: "Link 5 image",
      control: "text",
    },

    link5imagealt: {
      name: "Link 5 image alt",
      control: "text",
    },

    link5title: {
      name: "Link 5 title",
      control: "text",
    },

    link5anchor: {
      name: "Link 5 anchor",
      control: "text",
    },

    link6image: {
      name: "Link 6 image",
      control: "text",
    },

    link6imagealt: {
      name: "Link 6 image alt",
      control: "text",
    },

    link6title: {
      name: "Link 6 title",
      control: "text",
    },

    link6anchor: {
      name: "Link 6 anchor",
      control: "text",
    },

    link7image: {
      name: "Link 7 image",
      control: "text",
    },

    link7imagealt: {
      name: "Link 7 image alt",
      control: "text",
    },

    link7title: {
      name: "Link 7 title",
      control: "text",
    },

    link7anchor: {
      name: "Link 7 anchor",
      control: "text",
    },

    link8image: {
      name: "Link 8 image",
      control: "text",
    },

    link8imagealt: {
      name: "Link 8 image alt",
      control: "text",
    },

    link8title: {
      name: "Link 8 title",
      control: "text",
    },

    link8anchor: {
      name: "Link 8 anchor",
      control: "text",
    },

    link9image: {
      name: "Link 9 image",
      control: "text",
    },

    link9imagealt: {
      name: "Link 9 image alt",
      control: "text",
    },

    link9title: {
      name: "Link 9 title",
      control: "text",
    },

    link9anchor: {
      name: "Link 9 anchor",
      control: "text",
    },

    link10image: {
      name: "Link 10 image",
      control: "text",
    },

    link10imagealt: {
      name: "Link 10 image alt",
      control: "text",
    },

    link10title: {
      name: "Link 10 title",
      control: "text",
    },

    link10anchor: {
      name: "Link 10 anchor",
      control: "text",
    },

    link11image: {
      name: "Link 11 image",
      control: "text",
    },

    link11imagealt: {
      name: "Link 11 image alt",
      control: "text",
    },

    link11title: {
      name: "Link 11 title",
      control: "text",
    },

    link11anchor: {
      name: "Link 11 anchor",
      control: "text",
    },
  },

  decorators: [
    (Story) => {
      const [currentArgs, updateArgs] = useArgs();

      const [modules, setModules] = useState([]);

      const loadingRef = useRef(false);

      const previousModule = useRef("");

      /*
       * =========================================================
       * LOAD MODULE
       * =========================================================
       */

      useEffect(() => {
        if (
          !currentArgs.selectedModule ||
          loadingRef.current ||
          previousModule.current ===
            currentArgs.selectedModule
        ) {
          return;
        }

        const load = async () => {
          loadingRef.current = true;

          try {
            const ref = doc(
              db,
              "Christmas-quick-links-modules",
              currentArgs.selectedModule
            );

            const snap = await getDoc(ref);

            if (snap.exists()) {
              previousModule.current =
                currentArgs.selectedModule;

              updateArgs({
                ...currentArgs,
                moduleName:
                  currentArgs.selectedModule,
                ...snap.data(),
              });
            }
          } catch (e) {
            console.log(
              "load error",
              e
            );
          }

          loadingRef.current = false;
        };

        load();
      }, [currentArgs.selectedModule]);


      /*
       * =========================================================
       * SAVE MODULE
       * =========================================================
       */

      useEffect(() => {
        if (
          loadingRef.current ||
          !currentArgs.saveModule ||
          !currentArgs.moduleName
        ) {
          return;
        }

        const save = async () => {
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
                "Christmas-quick-links-modules",
                moduleName
              ),
              fields,
              {
                merge: false,
              }
            );

            updateArgs({
              saveModule: false,
              selectedModule: moduleName,
            });
          } catch (e) {
            console.log(
              "save error",
              e
            );
          }
        };

        save();
      }, [currentArgs.saveModule]);


      /*
       * =========================================================
       * LOAD MODULE DROPDOWN
       * =========================================================
       */

      useEffect(() => {
        const loadModules = async () => {
          try {
            const snap = await getDocs(
              collection(
                db,
                "Christmas-quick-links-modules"
              )
            );

            setModules(
              snap.docs.map(
                (d) => d.id
              )
            );
          } catch (e) {
            console.log(
              "module list error",
              e
            );
          }
        };

        loadModules();
      }, []);


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
                borderRadius: "4px",
              }}
            >
              <div>
                <label>
                  Load existing module:
                </label>

                <select
                  value={
                    currentArgs.selectedModule ||
                    ""
                  }
                  style={{
                    color: "#000",
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
                    -- select saved module --
                  </option>

                  {modules.map((m) => (
                    <option
                      key={m}
                      value={m}
                    >
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>,
            document.body
          )}

          <Story />
        </>
      );
    },
  ],
};

export const QuickLinksHero = {
  args: {
    moduleName: "",
    selectedModule: "",
    saveModule: false,

    modulebackgroundcolor: "#27579f",

    link1image:
      "https://www.thetoyshop.com/medias/Navigation-10-1-.png?context=bWFzdGVyfHJvb3R8ODA5MnxpbWFnZS9wbmd8YURFMkwyZzFNUzh4TWpnME56RXlNREl5TURFNU1DOU9ZWFpwWjJGMGFXOXVJREV3SUNneEtTNXdibWN8NmYyY2EyNDFjN2E5NThiNWY1ODQ3YzViZTY3ZjdiOWUyNTcyNTBiNWIwMjU2MmJlNzBhZGM3NTFiNGY5NmI3MA",
    link1imagealt: "Toy Appeal",
    link1title: "Toy Appeal",
    link1anchor: "#toy-appeal",

    link2image:
      "https://www.thetoyshop.com/medias/Navigation-9.png?context=bWFzdGVyfHJvb3R8ODQ0OXxpbWFnZS9wbmd8YURoaEwyZzJPUzh4TWpnME56RXlNRGszTXpnMU5DOU9ZWFpwWjJGMGFXOXVJRGt1Y0c1bnxiNjEzZWZkNDI1NmY3YjUyN2ExMDg4ODI2YTMwMTAxZWM4ZDE1OWYyNjJlYWMzZDdmMzRmYTQ0ZWVlMzc5NWMy",
    link2imagealt: "Play Our Game",
    link2title: "Play Our Game",
    link2anchor: "#game",

    link3image:
      "https://www.thetoyshop.com/medias/Navigation-8.png?context=bWFzdGVyfHJvb3R8OTYyNXxpbWFnZS9wbmd8YURNekwyaGlOQzh4TWpnME56RXlNVEF6T1RNNU1DOU9ZWFpwWjJGMGFXOXVJRGd1Y0c1bnxlMjhhZDc3NGE0MTY0ODI2ODQ3NDI4ZjgxZWU4OTg1ZDRkODg1N2MxNmJlMGUxMjIzZmIwNGZjYWYyYzczMTYz",
    link3imagealt: "Christmas Activities",
    link3title: "Christmas Activities",
    link3anchor: "#activities",

    link4image:
      "https://www.thetoyshop.com/medias/Navigation-7.png?context=bWFzdGVyfHJvb3R8ODI0MXxpbWFnZS9wbmd8YUdRMEwyaGpNUzh4TWpnME56RXlNVFF6TWpZd05pOU9ZWFpwWjJGMGFXOXVJRGN1Y0c1bnw0ZDM3MDdjZjUwYmEwNjBlMTcyOTc1YTViODE3NjkzZjU3ZmRiYWU3MmM5YmE0NTQ3NWM0ZjE4MGU3M2YxZWE1",
    link4imagealt: "Store Events",
    link4title: "Store Events",
    link4anchor: "#events",

    link5image:
      "https://www.thetoyshop.com/medias/Navigation-6.png?context=bWFzdGVyfHJvb3R8OTI3N3xpbWFnZS9wbmd8YURneUwyaGpNaTh4TWpnME56RXlNVFE1T0RFME1pOU9ZWFpwWjJGMGFXOXVJRFl1Y0c1bnw2NTk4ZDQwZmU5MTljNGRlNWM2Y2Y1MmY3ZTU5ZDk4NjU4ZjAwMDU3Zjk3MzFkY2ExZWZlNDdjYWJkZGY2YzNh",
    link5imagealt: "Christmas Guides",
    link5title: "Christmas Guides",
    link5anchor: "#guides",

    link6image:
      "https://www.thetoyshop.com/medias/Navigation-5.png?context=bWFzdGVyfHJvb3R8ODQyMHxpbWFnZS9wbmd8YURrekwyaGpOUzh4TWpnME56RXlNVFUyTXpZM09DOU9ZWFpwWjJGMGFXOXVJRFV1Y0c1bnw1ZWI1NDRjZDE2MGJkNzU4ZGNjYTZjY2NmZmUzNGYzNzU2NTE0ZWI5MDhkYTY2ZjdlN2ZkYzA2ZjY5OGZiOTdj",
    link6imagealt: "Shop By Price",
    link6title: "Shop By Price",
    link6anchor: "#shop-by-price",

    link7image:
      "https://www.thetoyshop.com/medias/Navigation-4.png?context=bWFzdGVyfHJvb3R8OTI1MHxpbWFnZS9wbmd8YURreEwyaGpPQzh4TWpnME56RXlNVFl5T1RJeE5DOU9ZWFpwWjJGMGFXOXVJRFF1Y0c1bnw1NTZiYjc4NTlmZjRiOWNlN2VhZDBlNWY2OTQ1NGY2NDA1MmI0ZWMzOTY4NGM4MTcwMTY2ZjBjMWI1OGQwNWE0",
    link7imagealt: "Win Your Wishlist",
    link7title: "Win Your Wishlist",
    link7anchor: "#win-your-wishlist",

    link8image:
      "https://www.thetoyshop.com/medias/Navigation-3.png?context=bWFzdGVyfHJvb3R8Nzc0OXxpbWFnZS9wbmd8YURVeUwyaGpPUzh4TWpnME56RXlNVFk1TkRjMU1DOU9ZWFpwWjJGMGFXOXVJRE11Y0c1bnxkNTAwOWNlNTM0N2M5NDU2ZmI4ZDI3ZGU5NDVlOGU0YmZiOGM4ZDI0YjQ4MDhhODdhYTQyMGEwM2YzYzNlM2Vi",
    link8imagealt: "Top 10 Toys",
    link8title: "Top 10 Toys",
    link8anchor: "#top-10-toys",

    link9image:
      "https://www.thetoyshop.com/medias/Navigation-2.png?context=bWFzdGVyfHJvb3R8OTk4MnxpbWFnZS9wbmd8YURZMEwyaGpZeTh4TWpnME56RXlNVGMyTURJNE5pOU9ZWFpwWjJGMGFXOXVJREl1Y0c1bnxkM2U0NTI0YjQ0ZWExMTJjM2QxODhhNjcxYTViNGQ1ZTc3OWQxYzc1MDJlYTNiYjk0NDQxM2RkMmM5YzM4ODQ3",
    link9imagealt: "Christmas Categories",
    link9title: "Christmas Categories",
    link9anchor: "#christmas-categories",

    link10image:
      "https://www.thetoyshop.com/medias/Navigation-1.png?context=bWFzdGVyfHJvb3R8NzkwNXxpbWFnZS9wbmd8YURJd0wyaGtNeTh4TWpnME56RXlNVGsxTmpnNU5DOU9ZWFpwWjJGMGFXOXVJREV1Y0c1bnw5ZDEwODljMzVmMGQzZTY0NDQxNDYyNGFlYjBiZjZiMDQ2ZDBjNzgyNDgyNzQwNjdjYzMyMWQzMGU4NGFlOTdl",
    link10imagealt: "Gift By Age",
    link10title: "Gift By Age",
    link10anchor: "#gift-by-age",

    link11image: "",
    link11imagealt: "",
    link11title: "",
    link11anchor: "",
  },
};