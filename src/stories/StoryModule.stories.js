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
import { StoryModule } from "./StoryModule";

export default {
  title: "Hubs/Story Modules",
  component: StoryModule,

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

  panel1video: {
    control: "text",
  },

  panel1image: {
    control: "text",
  },

  panel1imagealt: {
    control: "text",
  },

  panel1title: {
    control: "text",
  },

  panel1link: {
    control: "text",
  },

  panel1buttontext: {
    control: "text",
  },

  panel1buttonIcon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: "radio",
  },

  panel1textcolor: {
    control: "color",
  },

  panel1texthovercolor: {
    control: "color",
  },

  panel1buttonbackgroundcolor: {
    control: "color",
  },

  panel1buttonhoverbackgroundcolor: {
    control: "color",
  },

  panel1buttontextcolor: {
    control: "color",
  },

  panel1buttontexthovercolor: {
    control: "color",
  },

  panel1buttonbordercolor: {
    control: "color",
  },

  panel1buttonhoverbordercolor: {
    control: "color",
  },

  panel1bordercolor: {
    control: "color",
  },

  panel1borderhovercolor: {
    control: "color",
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

  panel2title: {
    control: "text",
  },

  panel2link: {
    control: "text",
  },

  panel2buttontext: {
    control: "text",
  },

  panel2buttonIcon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
    ],
    control: "radio",
  },

  panel2textcolor: {
    control: "color",
  },

  panel2texthovercolor: {
    control: "color",
  },

  panel2buttonbackgroundcolor: {
    control: "color",
  },

  panel2buttonhoverbackgroundcolor: {
    control: "color",
  },

  panel2buttontextcolor: {
    control: "color",
    },

   panel2buttontexthovercolor: {
     control: "color",
     },

   panel2buttonbordercolor: {
    control: "color",
    },

   panel2buttonhoverbordercolor: {
    control: "color",
    },
    
     panel2bordercolor: {
    control: "color",
    },

    panel2borderhovercolor: {
    control: "color",
    },
  },
};

export const Default = {
  args: {
  moduleName: "",
  selectedModule: "",
  saveModule: false,

  panel1video: "",
  panel1image: "",
  panel1imagealt: "",
  panel1title: "",
  panel1link: "",
  panel1buttontext: "Shop Now",
  panel1buttonIcon: "basket",
  panel1textcolor: "#1f2b91",
  panel1texthovercolor: "#1f2b91",
  panel1buttonbackgroundcolor: "#009e44",
  panel1buttonhoverbackgroundcolor: "#1f2b91",
  panel1buttontextcolor: "#fff",
  panel1buttontexthovercolor: "#fff",
  panel1buttonbordercolor: "",
  panel1buttonhoverbordercolor: "",
  panel1bordercolor: "",
  panel1borderhovercolor: "",

  panel2video: "",
  panel2image: "",
  panel2imagealt: "",
  panel2title: "",
  panel2link: "",
  panel2buttontext: "Shop Now",
  panel2buttonIcon: "basket",
  panel2textcolor: "#1f2b91",
  panel2texthovercolor: "#1f2b91",
  panel2buttonbackgroundcolor: "#009e44",
  panel2buttonhoverbackgroundcolor: "#1f2b91",
  panel2buttontextcolor: "#fff",
  panel2buttontexthovercolor: "#fff",
  panel2buttonbordercolor: "",
  panel2buttonhoverbordercolor: "",
  panel2bordercolor: "",
  panel2borderhovercolor: "",
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
            "stories-modules",
            currentArgs.selectedModule
          );

          const snap = await getDoc(ref);

          if (snap.exists()) {

            previousModule.current =
              currentArgs.selectedModule;

            updateArgs({
              ...currentArgs,

              moduleName: currentArgs.selectedModule,

              panel1textcolor: "#1f2b91",
              panel1buttonbackgroundcolor: "#009e44",
              panel1buttonhoverbackgroundcolor: "#1f2b91",
              panel1buttontextcolor: "#fff",
              panel1buttontexthovercolor: "#fff",

              panel2textcolor: "#1f2b91",
              panel2buttonbackgroundcolor: "#009e44",
              panel2buttonhoverbackgroundcolor: "#1f2b91",
              panel2buttontextcolor: "#fff",
              panel2buttontexthovercolor: "#fff",

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
              "stories-modules",
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
        collection(db, "stories-modules")
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

    <StoryModule {...componentArgs} />
  </>
);
  }
};