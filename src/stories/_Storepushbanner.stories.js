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
import { Storepushbanner } from './_Storepushbanner';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Modules/Store Push Banner',
  component: Storepushbanner,

  tags: ["!dev"],

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {

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

    ctaposition: {
      options: [
        "left",
        "center",
        "right",
      ],
      control: "radio",
    },

    ctaIcon: {
      options: [
        "basket",
        "glasses",
        "football",
        "pencil",
        "plane",
      ],
      control: "radio",
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
                'storepushbanner-modules'
              )
            );

            const list =
              snap.docs.map(d => d.id);

            setModules(list);

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
              'storepushbanner-modules',
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
                'storepushbanner-modules',
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

export const StorepushbannerSection = {
  args: {

    moduleName:'',
    selectedModule:'',
    saveModule:false,

    flipped: true,
    title: 'LEGO Batman Legacy of The Dark Knight',
    link: 'https://www.thetoyshop.com/search?text=LEGO%20Batman%20Legacy%20of%20The%20Dark%20Knight',
    image: 'https://www.thetoyshop.com/medias/edited-photo-49-.png?context=bWFzdGVyfHJvb3R8MzQ3NDgxfGltYWdlL3BuZ3xhREl6TDJnNE5TOHhNamMzTXpBd05UZzROVFEzTUM5bFpHbDBaV1F0Y0dodmRHOGdLRFE1S1M1d2JtY3wxNmJkYTc2YTg2ZjQ4Zjg0NjdhZDE0ZDAyMzg3NzZlODE0YTM0MTA3ODc4OTFhMDc0ZTljYjMxMDcwNDIxNjE4',
    imagealt:'LEGO Batman Legacy of The Dark Knight',
    buttontext:'Pre-Order Now',
    ctaIcon: 'basket',
    ctaposition: 'center',
    background:'linear-gradient(180deg, rgba(200,200,200,.9) 0%, rgba(180,180,180,.95) 50%, rgba(160,160,160,1) 100%)',
    textColor:'rgb(33,33,33)',
    buttonBgColor:'#009e44',
    buttonTextColor:'#fff',
    buttonHoverBgColor:'#1f2b91',
    buttonHoverTextColor:'#fff',
    buttonBorderColor:'#dbe3ff',
    buttonHoverBorderColor:'#dbe3ff',
  },
};