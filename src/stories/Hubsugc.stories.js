import { db } from '../config/firebase';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs
} from 'firebase/firestore';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Hubsugc } from './Hubsugc';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Hubs/UGC Carousel',
  component: Hubsugc,

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
  user: {
    options: ['stories', 'hasina', 'shermin', 'sam'],
    control: { type: 'select' },
  },

  moduleName: {
    control: 'text',
  },

  selectedModule: {
    table: {
      disable: true,
    },
  },

  saveModule: {
    control: 'boolean',
  },

  // PANEL 1
  panel1linkicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: {
      type: "radio", // or "select"
    },
  },

  // PANEL 2
  panel2linkicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: {
      type: "radio",
    },
  },

  // PANEL 3
  panel3linkicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: {
      type: "radio",
    },
  },
},

  decorators: [
    (Story) => {

      const [currentArgs, updateArgs] = useArgs();

      const [modules, setModules] = useState([]);

      const loadingRef = useRef(false);
      const previousModule = useRef('');

      // -------------------------
      // LOAD MODULE LIST
      // -------------------------

      useEffect(() => {

        const loadModules = async () => {

          try {

            const snap = await getDocs(
              collection(
                db,
                'hubs-ugc-carousel'
              )
            );

            setModules(
              snap.docs.map(d => d.id)
            );

          } catch(e){

            console.log(
              'module list error',
              e
            );

          }

        };

        loadModules();

      }, []);

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
              'hubs-ugc-carousel',
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
                saveModule:false,
                ...snap.data(),
              });

            }

          } catch(e){

            console.log(
              'load error',
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
                'hubs-ugc-carousel',
                moduleName
              ),
              fields,
              {
                merge:false
              }
            );

            updateArgs({
              ...currentArgs,
              saveModule:false,
              selectedModule:moduleName
            });

            console.log(
              'saved:',
              moduleName
            );

          } catch(e){

            console.log(
              'save error',
              e
            );

          }

        };

        save();

      }, [currentArgs.saveModule]);

      return (
        <>
          {createPortal(
            <div
              style={{
                position:'fixed',
                top:10,
                right:10,
                zIndex:9999,
                padding:12,
                background:'#111',
                color:'#fff',
                borderRadius:'4px',
              }}
            >
              <div
                style={{
                  marginBottom:8
                }}
              >
                <label>
                  Load module:
                </label>

                <select
                  value={
                    currentArgs.selectedModule || ""
                  }
                  style={{
                    color:'#000'
                  }}
                  onChange={(e)=>{

                    updateArgs({
                      ...currentArgs,
                      selectedModule:
                        e.target.value
                    });

                  }}
                >

                  <option value="">
                    -- select module --
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

          <Story />
        </>
      );

    },
  ],
};

export const HubsugcContent = {
  args: {
    user:'stories',

    moduleName:'',
    selectedModule:'',
    saveModule:false,

    title:'Our Panini Store Tour',
    titlecolor:'#fff',
    titlebackgroundcolor:'#1f2b91',

    panel1image:'https://www.thetoyshop.com/medias/IMG-3402.jpeg?context=bWFzdGVyfHJvb3R8MjgxOTg1MHxpbWFnZS9qcGVnfGFHSTNMMmhsWVM4eE1qYzROamM4TURrNU5UWXhOQzlKVFVkZk16UXdNaTVxY0dWbnw0ZTc3ZGQ0MzJhYzZiNjg4MDE4Njg2NTA4NjAyYTY1Yzk3NTAzN2ZiZDhhMTVhOTE4MTY5NDMxYTY5MGEwYTcz',
    panel1imagealt:'Panini Tour',
    panel1link:'https://www.thetoyshop.com/search?text=panini',
    panel1linktext:'Pre-Order Now',
    panel1linkicon:'basket',

    panel2image:'https://www.thetoyshop.com/medias/IMG-3412.jpeg?context=bWFzdGVyfHJvb3R8MTg2MzA0MnxpbWFnZS9qcGVnfGFEaGpMMmhqWVM4eE1qYzROamM0TVRBMk1URTFNQzlKVFVkZk16UXhNaTVxY0dWbnwzN2M3NTQzNDFhM2VmMzNiM2IxOTRlMGIxNDBiNDI2Njk2M2QyNjVjODJhNDdhNTc0YjA3MTk0YTczYzQ1MDc3',
    panel2imagealt:'Panini Tour',
    panel2link:'https://www.thetoyshop.com/search?text=panini',
    panel2linktext:'Pre-Order Now',
    panel2linkicon:'basket',

    panel3image:'https://www.thetoyshop.com/medias/IMG-3407.jpeg?context=bWFzdGVyfHJvb3R8MzA2NDE5OHxpbWFnZS9qcGVnfGFEaGxMMmhqTnk4eE1qYzROamM0TVRFeU5qWTROaTlKVFVkZk16UXdOeTVxY0dWbnxkODk0OWY5MWQ1YmMzZjQxNjdmMmE3NjQwZGI0MTI4NmNiNWJjMTVmZmU2OGZkYWE0MmEyZjQ4ZjU0M2U2ZGEy',
    panel3imagealt:'Panini Tour',
    panel3link:'https://www.thetoyshop.com/search?text=panini',
    panel3linktext:'Pre-Order Now',
    panel3linkicon:'basket',

    panel4image:'https://www.thetoyshop.com/medias/IMG-3404.jpeg?context=bWFzdGVyfHJvb3R8MzUzMjA2OHxpbWFnZS9qcGVnfGFHTmpMMmhqTmk4eE1qYzROamM0TVRFNU1qSXlNaTlKVFVkZk16UXdOQzVxY0dWbnxjMzMzMWEwMGVjMGRhZGMxZWNiZTY3MjYyM2FjNjg0ZGU5ZWI1YmE0NmI2ZmU5Yjc1N2FlODFmNjFjYWJlMTY3',
    panel4imagealt:'Panini Tour',
    panel4link:'https://www.thetoyshop.com/search?text=panini',
    panel4linktext:'Pre-Order Now',
    panel4linkicon:'basket',

    panel5image:'https://www.thetoyshop.com/medias/IMG-3484.jpeg?context=bWFzdGVyfHJvb3R8MzQ4Mjc2OHxpbWFnZS9qcGVnfGFHTm1MMmhqTXk4eE1qYzROamM0TVRJMU56YzFPQzlKVFVkZk16UTROQzVxY0dWbnw1ZjJlNzVkZDQwNDA5MWIyYzFmNDQyODA3YmVkZTE3YjU1YzY4NDRkOGEzOTUxNDJiMzU2MzM3YjFjZDIwN2E5',
    panel5imagealt:'Panini Tour',
    panel5link:'https://www.thetoyshop.com/search?text=panini',
    panel5linktext:'Pre-Order Now',
    panel5linkicon:'basket',

    panel6image:'',
    panel6imagealt:'',
    panel6link:'',
    panel6linktext:'',
    panel6linkicon:'',
    panel7image:'',
    panel7imagealt:'',
    panel7link:'',
    panel7linktext:'',
    panel7linkicon:'',
    panel8image:'',
    panel8imagealt:'',
    panel8link:'',
    panel8linktext:'',
    panel8linkicon:'',
    panel9image:'h',
    panel9imagealt:'',
    panel9link:'',
    panel9linktext:'',
    panel9linkicon:'',
    panel10image:'',
    panel10imagealt:'',
    panel10link:'',
    panel10linktext:'',
    panel10linkicon:'',
    panel11image:'',
    panel11imagealt:'',
    panel11link:'',
    panel11linktext:'',
    panel11linkicon:'',
    panel12image:'',
    panel12imagealt:'',
    panel12link:'',
    panel12linktext:'',
    panel12linkicon:'',
  },
};