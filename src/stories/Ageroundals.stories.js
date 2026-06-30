import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { db } from "../config/firebase";
import {
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { Ageroundals } from "./Ageroundals";
import { useArgs } from "storybook/preview-api";

export default {
  title: "Hubs/Age Roundals",
  component: Ageroundals,

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

  roundal1age: { control: "text" },
  roundal1subword: { control: "text" },
  roundal1link: { control: "text" },
  roundal1color: { control: "color" },
  roundal1background: { control: "color" },

  roundal2age: { control: "text" },
  roundal2subword: { control: "text" },
  roundal2link: { control: "text" },
  roundal2color: { control: "color" },
  roundal2background: { control: "color" },

  roundal3age: { control: "text" },
  roundal3subword: { control: "text" },
  roundal3link: { control: "text" },
  roundal3color: { control: "color" },
  roundal3background: { control: "color" },

  roundal4age: { control: "text" },
  roundal4subword: { control: "text" },
  roundal4link: { control: "text" },
  roundal4color: { control: "color" },
  roundal4background: { control: "color" },

  roundal5age: { control: "text" },
  roundal5subword: { control: "text" },
  roundal5link: { control: "text" },
  roundal5color: { control: "color" },
  roundal5background: { control: "color" },

  roundal6age: { control: "text" },
  roundal6subword: { control: "text" },
  roundal6link: { control: "text" },
  roundal6color: { control: "color" },
  roundal6background: { control: "color" },

  roundal7age: { control: "text" },
  roundal7subword: { control: "text" },
  roundal7link: { control: "text" },
  roundal7color: { control: "color" },
  roundal7background: { control: "color" },

  roundal8age: { control: "text" },
  roundal8subword: { control: "text" },
  roundal8link: { control: "text" },
  roundal8color: { control: "color" },
  roundal8background: { control: "color" },

  roundal9age: { control: "text" },
  roundal9subword: { control: "text" },
  roundal9link: { control: "text" },
  roundal9color: { control: "color" },
  roundal9background: { control: "color" },

  roundal10age: { control: "text" },
  roundal10subword: { control: "text" },
  roundal10link: { control: "text" },
  roundal10color: { control: "color" },
  roundal10background: { control: "color" },

  roundal11age: { control: "text" },
  roundal11subword: { control: "text" },
  roundal11link: { control: "text" },
  roundal11color: { control: "color" },
  roundal11background: { control: "color" },

  roundal12age: { control: "text" },
  roundal12subword: { control: "text" },
  roundal12link: { control: "text" },
  roundal12color: { control: "color" },
  roundal12background: { control: "color" },

  roundal13age: { control: "text" },
  roundal13subword: { control: "text" },
  roundal13link: { control: "text" },
  roundal13color: { control: "color" },
  roundal13background: { control: "color" },

  roundal14age: { control: "text" },
  roundal14subword: { control: "text" },
  roundal14link: { control: "text" },
  roundal14color: { control: "color" },
  roundal14background: { control: "color" },

  roundal15age: { control: "text" },
  roundal15subword: { control: "text" },
  roundal15link: { control: "text" },
  roundal15color: { control: "color" },
  roundal15background: { control: "color" },

  roundal16age: { control: "text" },
  roundal16subword: { control: "text" },
  roundal16link: { control: "text" },
  roundal16color: { control: "color" },
  roundal16background: { control: "color" },

  roundal17age: { control: "text" },
  roundal17subword: { control: "text" },
  roundal17link: { control: "text" },
  roundal17color: { control: "color" },
  roundal17background: { control: "color" },

  roundal18age: { control: "text" },
  roundal18subword: { control: "text" },
  roundal18link: { control: "text" },
  roundal18color: { control: "color" },
  roundal18background: { control: "color" },

  roundal19age: { control: "text" },
  roundal19subword: { control: "text" },
  roundal19link: { control: "text" },
  roundal19color: { control: "color" },
  roundal19background: { control: "color" },

  roundal20age: { control: "text" },
  roundal20subword: { control: "text" },
  roundal20link: { control: "text" },
  roundal20color: { control: "color" },
  roundal20background: { control: "color" },

  roundal21age: { control: "text" },
  roundal21subword: { control: "text" },
  roundal21link: { control: "text" },
  roundal21color: { control: "color" },
  roundal21background: { control: "color" },

  roundal22age: { control: "text" },
  roundal22subword: { control: "text" },
  roundal22link: { control: "text" },
  roundal22color: { control: "color" },
  roundal22background: { control: "color" },

  roundal23age: { control: "text" },
  roundal23subword: { control: "text" },
  roundal23link: { control: "text" },
  roundal23color: { control: "color" },
  roundal23background: { control: "color" },

  roundal24age: { control: "text" },
  roundal24subword: { control: "text" },
  roundal24link: { control: "text" },
  roundal24color: { control: "color" },
  roundal24background: { control: "color" },
},
};

export const AgeroundalsContent = {
  args: {

    moduleName: "",
    selectedModule: "",
    saveModule: false,

    roundal1age: "NEWBORN",
    roundal1subword: "",
    roundal1link: "#",
    roundal1color: "#fff",
    roundal1background: "#e4bb21",

    roundal2age: "1",
    roundal2subword: "year",
    roundal2link: "#",
    roundal2color: "#fff",
    roundal2background: "#e59325",

    roundal3age: "",
    roundal3subword: "",
    roundal3link: "",
    roundal3color: "",
    roundal3background: "#000",

    roundal4age: "",
    roundal4subword: "",
    roundal4link: "#",
    roundal4color: "",
    roundal4background: "#000",

    roundal5age: "",
    roundal5subword: "",
    roundal5link: "#",
    roundal5color: "",
    roundal5background: "#000",

    roundal6age: "",
    roundal6subword: "",
    roundal6link: "#",
    roundal6color: "",
    roundal6background: "#000",

    roundal7age: "",
    roundal7subword: "",
    roundal7link: "#",
    roundal7color: "",
    roundal7background: "#000",

    roundal8age: "",
    roundal8subword: "",
    roundal8link: "#",
    roundal8color: "",
    roundal8background: "#000",

    roundal9age: "",
    roundal9subword: "",
    roundal9link: "#",
    roundal9color: "",
    roundal9background: "#000",

    roundal10age: "",
    roundal10subword: "",
    roundal10link: "#",
    roundal10color: "",
    roundal10background: "#000",

    roundal11age: "",
    roundal11subword: "",
    roundal11link: "#",
    roundal11color: "",
    roundal11background: "#000",

    roundal12age: "",
    roundal12subword: "",
    roundal12link: "#",
    roundal12color: "",
    roundal12background: "#000",

    roundal13age: "",
    roundal13subword: "",
    roundal13link: "#",
    roundal13color: "",
    roundal13background: "#000",

    roundal14age: "",
    roundal14subword: "",
    roundal14link: "#",
    roundal14color: "",
    roundal14background: "#000",

    roundal15age: "",
    roundal15subword: "",
    roundal15link: "#",
    roundal15color: "",
    roundal15background: "#000",

    roundal16age: "",
    roundal16subword: "",
    roundal16link: "#",
    roundal16color: "",
    roundal16background: "#000",

    roundal17age: "",
    roundal17subword: "",
    roundal17link: "#",
    roundal17color: "",
    roundal17background: "#000",

    roundal18age: "",
    roundal18subword: "",
    roundal18link: "#",
    roundal18color: "",
    roundal18background: "#000",

    roundal19age: "",
    roundal19subword: "",
    roundal19link: "#",
    roundal19color: "",
    roundal19background: "#000",

    roundal20age: "",
    roundal20subword: "",
    roundal20link: "#",
    roundal20color: "",
    roundal20background: "#000",

    roundal21age: "",
    roundal21subword: "",
    roundal21link: "#",
    roundal21color: "",
    roundal21background: "#000",

    roundal22age: "",
    roundal22subword: "",
    roundal22link: "#",
    roundal22color: "",
    roundal22background: "#000",

    roundal23age: "",
    roundal23subword: "",
    roundal23link: "#",
    roundal23color: "",
    roundal23background: "#000",

    roundal24age: "",
    roundal24subword: "",
    roundal24link: "#",
    roundal24color: "",
    roundal24background: "#000",
  },

  render: function Render() {

    const [currentArgs, updateArgs] = useArgs();
    const [modules, setModules] = useState([]);

    const loadingRef = useRef(false);
    const previousModule = useRef("");

    // LOAD

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
            "ageroundals-modules",
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

          console.log("load error",e);

        }

        loadingRef.current=false;

      };

      load();

    },[currentArgs.selectedModule]);



    // SAVE

    useEffect(()=>{

      if(
        loadingRef.current ||
        !currentArgs.saveModule ||
        !currentArgs.moduleName
      ) return;

      const save=async()=>{

        try{

          const {
            moduleName,
            selectedModule,
            saveModule,
            ...fields
          }=currentArgs;

          await setDoc(
            doc(
              db,
              "ageroundals-modules",
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

        }catch(e){

          console.log(
            "save error",
            e
          );

        }

      };

      save();

    },[currentArgs.saveModule]);


    // LOAD DROPDOWN

    useEffect(()=>{

      const loadModules=async()=>{

        try{

          const snap=await getDocs(
            collection(
              db,
              "ageroundals-modules"
            )
          );

          setModules(
            snap.docs.map(
              d=>d.id
            )
          );

        }catch(e){

          console.log(
            "module list error",
            e
          );

        }

      };

      loadModules();

    },[]);


    const {
      moduleName,
      selectedModule,
      saveModule,
      ...componentArgs
    }=currentArgs;

    return(
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

        <Ageroundals
          {...componentArgs}
        />
      </>
    );
  },
};