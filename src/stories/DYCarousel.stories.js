import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { db } from "../config/firebase";
import {
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { useArgs } from "storybook/preview-api";
import { DYCarousel } from "./DYCarousel";

export default {
  title: "Modules/DY Carousel",
  component: DYCarousel,

  parameters: {
    layout: "fullscreen",
    html: {
      root: "#dy-css-output",
    },
  },

  argTypes: {
    preview: {
      table: {
        disable: true,
      },
    },
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

  lozengebackgroundcolor: {
    control: "color",
  },

  lozengetextcolor: {
    control: "color",
  },

  bordercolor: {
    control: "color",
  },
},
};

export const Default = {
  args: {
  moduleName: "",
  selectedModule: "",
  saveModule: false,
  lozengebackgroundcolor: "#000",
  lozengetextcolor: "#fff",
  bordercolor: '#000'

},

  render: function Render() {

    const [currentArgs, updateArgs] = useArgs();
    const [modules, setModules] = useState([]);

    const loadingRef = useRef(false);
    const previousModule = useRef("");

    // -------------------------
    // LOAD MODULE
    // -------------------------

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
            "dy-carousel-module",
            currentArgs.selectedModule
          );

          const snap = await getDoc(ref);

          if (snap.exists()) {

            previousModule.current =
              currentArgs.selectedModule;

            updateArgs({
              ...currentArgs,

              moduleName: currentArgs.selectedModule,

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

    // -------------------------
    // SAVE MODULE
    // -------------------------

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
              "dy-carousel-module",
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

          console.log(
            "saved:",
            moduleName
          );

        } catch(e){

          console.log(
            "save error",
            e
          );

        }

      };

      save();

    }, [currentArgs.saveModule]);

    useEffect(() => {
  const loadModules = async () => {
    try {
      const snap = await getDocs(
        collection(db, "dy-carousel-module")
      );

      const list = snap.docs.map((d) => d.id);

      setModules(list);


    } catch (e) {
      console.log("module list error", e);
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
        <div style={{ marginBottom: 8 }}>
          <label>Load existing module: </label>

          <select
            value={currentArgs.selectedModule || ""}
            style={{
                  color: '#000'
                }}
            onChange={(e) => {
              updateArgs({
                ...currentArgs,
                selectedModule: e.target.value,
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

    <DYCarousel {...componentArgs} />
  </>
);
  }
};