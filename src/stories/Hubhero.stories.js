import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { db } from "../config/firebase";
import {
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { HubHeroText } from "./HubheroText";
import { useArgs } from "storybook/preview-api";
import { color } from "storybook/internal/theming";

export default {
  title: "Hubs/Hero Text",
  component: HubHeroText,

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

    title: {
      control: "text",
    },

    text: {
      control: "text",
    },

    stripbackgroundcolor: {
      control: "color",
    },

    striptextcolor: {
      control: "color",
    },

    textcolor: {
      control: "color",
    },
  },
};

export const HubHeroSection = {
  args: {

    moduleName: "",
    selectedModule: "",
    saveModule: false,

    title: "Hub",

    text:
      "Get closer to the world’s most popular sport with quality collectibles and merch. Whether its club or country find your favourite football teams and players in cards, figures, games and more. Bring the atmosphere of the stadium home and get closer to the game than ever before!",

    stripbackgroundcolor: "#1f2b91",
    striptextcolor: "#fff",
    textcolor: "#1f2b91",
  },

  render: function Render() {

    const [currentArgs, updateArgs] = useArgs();
    const [modules, setModules] = useState([]);

    const loadingRef = useRef(false);
    const previousModule = useRef("");

    // LOAD MODULE

    useEffect(() => {

      if (
        !currentArgs.selectedModule ||
        loadingRef.current ||
        previousModule.current ===
        currentArgs.selectedModule
      ) return;

      const load = async () => {

        loadingRef.current = true;

        try {

          const ref = doc(
            db,
            "hub-hero-text-modules",
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

        } catch(e){

          console.log(
            "load error",
            e
          );

        }

        loadingRef.current = false;

      };

      load();

    }, [currentArgs.selectedModule]);


    // SAVE MODULE

    useEffect(() => {

      if (
        loadingRef.current ||
        !currentArgs.saveModule ||
        !currentArgs.moduleName
      ) return;

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
              "hub-hero-text-modules",
              moduleName
            ),
            fields,
            {
              merge:false
            }
          );

          updateArgs({
            saveModule:false,
            selectedModule:moduleName
          });

        } catch(e){

          console.log(
            "save error",
            e
          );

        }

      };

      save();

    }, [currentArgs.saveModule]);


    // LOAD DROPDOWN

    useEffect(() => {

      const loadModules = async () => {

        try {

          const snap = await getDocs(
            collection(
              db,
              "hub-hero-text-modules"
            )
          );

          setModules(
            snap.docs.map(
              d => d.id
            )
          );

        } catch(e){

          console.log(
            "module list error",
            e
          );

        }

      };

      loadModules();

    }, []);


    const {
      moduleName,
      selectedModule,
      saveModule,
      ...componentArgs
    } = currentArgs;


    return (
      <>
        {createPortal(
          <div
            style={{
              position:"fixed",
              top:10,
              right:10,
              zIndex:9999,
              padding:12,
              background:"#111",
              color:"#fff",
              borderRadius:"4px"
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
                  color: '#000'
                }}
                onChange={(e)=>{
                  updateArgs({
                    ...currentArgs,
                    selectedModule:e.target.value
                  });
                }}
              >

                <option value="">
                  -- select saved module --
                </option>

                {modules.map((m)=>(
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

        <HubHeroText
          {...componentArgs}
        />

      </>
    );
  },
};