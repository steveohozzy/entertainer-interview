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
import { SignUpModule } from "./SignUpModule";

export default {
  title: "Hubs/Sign Up Module",
  component: SignUpModule,

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

  signupvideo: {
    control: "text",
  },

  signupimage: {
    control: "text",
  },

  signupimagealt: {
    control: "text",
  },

  signuptitle: {
    control: "text",
  },

  signuplink: {
    control: "text",
  },

  signupbuttontext: {
    control: "text",
  },

  signupbuttonIcon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: "radio",
  },

  signuptextcolor: {
    control: "color",
  },

  signuptexthovercolor: {
    control: "color",
  },

  signupbuttonbackgroundcolor: {
    control: "color",
  },

  signupbuttonhoverbackgroundcolor: {
    control: "color",
  },

  signupbuttontextcolor: {
    control: "color",
  },

  signupbuttontexthovercolor: {
    control: "color",
  },

  signupbuttonbordercolor: {
    control: "color",
  },

  signupbuttonhoverbordercolor: {
    control: "color",
  },

  signupbordercolor: {
    control: "color",
  },

  signupborderhovercolor: {
    control: "color",
  },
  },
};

export const Default = {
  args: {
  moduleName: "",
  selectedModule: "",
  saveModule: false,

  signupvideo: "",
  signupimage: "",
  signupimagealt: "",
  signuptitle: "",
  signuplink: "",
  signupbuttontext: "Shop Now",
  signupbuttonIcon: "basket",
  signuptextcolor: "#1f2b91",
  signuptexthovercolor: "#1f2b91",
  signupbuttonbackgroundcolor: "#009e44",
  signupbuttonhoverbackgroundcolor: "#1f2b91",
  signupbuttontextcolor: "#fff",
  signupbuttontexthovercolor: "#fff",
  signupbuttonbordercolor: "",
  signupbuttonhoverbordercolor: "",
  signupbordercolor: "",
  signupborderhovercolor: "",
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
            "sign-up-modules",
            currentArgs.selectedModule
          );

          const snap = await getDoc(ref);

          if (snap.exists()) {

            previousModule.current =
              currentArgs.selectedModule;

            updateArgs({
              ...currentArgs,

              moduleName: currentArgs.selectedModule,

              signuptextcolor: "#1f2b91",
              signupbuttonbackgroundcolor: "#009e44",
              signupbuttonhoverbackgroundcolor: "#1f2b91",
              signupbuttontextcolor: "#fff",
              signupbuttontexthovercolor: "#fff",
              signupbuttonbordercolor: "#dbe3ff",
              signupbuttonhoverbordercolor: "#dbe3ff",

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
              "sign-up-modules",
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
        collection(db, "sign-up-modules")
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

    <SignUpModule {...componentArgs} />
  </>
);
  }
};