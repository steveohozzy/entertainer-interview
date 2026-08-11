import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { db } from "../config/firebase";
import {
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { CountdownTimer } from "./CountdownTimer";
import { useArgs } from "storybook/preview-api";
import { control } from "leaflet";

export default {
  title: "Modules/Countdown Timer",
  component: CountdownTimer,

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

    logoImage: {
      control: "text",
    },

    logoAlt: {
      control: "text",
    },

    title: {
      control: "text",
    },

    tagline: {
      control: "text",
    },

    targetDate: {
      control: "date",
    },

    targetTime: {
      control: "text",
    },

    expiredText: {
      control: "text",
    },

    backgroundColor: {
      control: "color",
    },

    titleColor: {
      control: "color",
    },

    textColor: {
      control: "color",
    },

    numberColor: {
      control: "color",
    },

    labelColor: {
      control: "color",
    },

    buttonStyle: {
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
      control: {
        type: 'radio',
      },
    },
    buttonLink: {
      control: 'text',
    },
  },
};

export const Countdown = {

  args: {

    moduleName: "",
    selectedModule: "",
    saveModule: false,

    logoImage: "",
    logoAlt: "",

    title: "Coming Soon",

    tagline: "The Entertainer is coming soon!",

    targetDate: new Date("2026-12-25").getTime(),

    targetTime: "09:00",

    expiredText: "This event has started!",

    backgroundColor: "#1f2b91",
    titleColor: "#ffffff",
    textColor: "#ffffff",
    numberColor: "#1f2b91",
    labelColor: "#444444",
    buttonStyle: 'none',
    buttonLink: '',

  },

  render: function Render() {

    const [currentArgs, updateArgs] = useArgs();
    const [modules, setModules] = useState([]);

    const loadingRef = useRef(false);
    const previousModule = useRef("");

    useEffect(() => {

      if (
        !currentArgs.selectedModule ||
        loadingRef.current ||
        previousModule.current === currentArgs.selectedModule
      ) return;

      const load = async () => {

        loadingRef.current = true;

        try {

          const ref = doc(
            db,
            "countdown-modules",
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
              "countdown-modules",
              moduleName
            ),
            fields,
            {
              merge: false
            }
          );

          updateArgs({
            saveModule: false,
            selectedModule: moduleName
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


    // LOAD DROPDOWN

    useEffect(() => {

      const loadModules = async () => {

        try {

          const snap = await getDocs(
            collection(
              db,
              "countdown-modules"
            )
          );

          setModules(
            snap.docs.map(
              d => d.id
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
            <div>
              <label>
                Load existing module:
              </label>

              <select
                value={
                  currentArgs.selectedModule || ""
                }
                style={{
                  color: "#000",
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

        <CountdownTimer
          {...componentArgs}
        />

      </>
    );
  },
};