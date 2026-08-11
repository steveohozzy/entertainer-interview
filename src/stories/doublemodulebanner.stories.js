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
import { doublemodulebanner as DoubleModuleBanner } from "./doublemodulebanner";

export default {
  title: "Modules/Double Module Banner",
  component: DoubleModuleBanner,

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

  bordercolor: {
    control: "color",
  },

  backgroundcolor: {
    control: "color",
  },

  panel1video: {
    control: "text",
  },

  panel1image: {
    control: "text",
  },

  panel1imagealt: {
    control: "text",
  },

  panel1bodyText: {
    control: "text",
  },

  panel1link: {
    control: "text",
  },

  panel1buttonStyle: {
      options: [
      'none',
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },

  panel2video: {
    control: "text",
  },

  panel2image: {
    control: "text",
  },

  panel2imagealt: {
    control: "text",
  },

  panel2bodyText: {
    control: "text",
  },

  panel2link: {
    control: "text",
  },

  panel2buttonStyle: {
    options: [
      'none',
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },
  },
};

export const Default = {
  args: {
  moduleName: "",
  selectedModule: "",
  saveModule: false,

  bordercolor: "#000",
  backgroundcolor: "#fff",

  panel1video: "",
  panel1image: "",
  panel1imagealt: "",
  panel1bodyText: "",
  panel1link: "",
  panel1buttonStyle: 'shop-now',

  panel2video: "",
  panel2image: "",
  panel2imagealt: "",
  panel2bodyText: "",
  panel2link: "",
  panel2buttonStyle: 'shop-now',
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
            "doublemodulebanner",
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
              "doublemodulebanner",
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
        collection(db, "doublemodulebanner")
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

    <DoubleModuleBanner {...componentArgs} />
  </>
);
  }
};