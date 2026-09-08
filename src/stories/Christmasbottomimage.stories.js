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
import { Christmasbottomimage } from './Christmasbottomimage';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Christmas/Bottom Image',
  component: Christmasbottomimage,

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
                'christmas-bottom-image'
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
              'christmas-bottom-image',
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
                'christmas-bottom-image',
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
                bottom:10,
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

export const ChristmasbottomimageSection = {
  args: {
    moduleName:'',
    selectedModule:'',
    saveModule:false,

    image:'https://thetoyshop.com/medias/Xmas-Hub-Header-2800x470px.jpg?context=bWFzdGVyfHJvb3R8NDI5MTc4fGltYWdlL2pwZWd8YURJNUwyZzJOaTh4TWpnek5qWTRORFUyTWpRMk1pOVliV0Z6WDBoMVlsOUlaV0ZrWlhKZk1qZ3dNSGcwTnpCd2VDNXFjR2N8NmJiYjBkYmY2MTlkYzA5ZTBkYzA5ZjY0OTkxMGE3OTAzNWQ5MWEwZjgzNmM0NmFjN2Q1YzVhYWNjYTljZjNlZA',
    mobileImage:'https://thetoyshop.com/medias/Xmas-Hub-Header-2800x470px.jpg?context=bWFzdGVyfHJvb3R8NDI5MTc4fGltYWdlL2pwZWd8YURJNUwyZzJOaTh4TWpnek5qWTRORFUyTWpRMk1pOVliV0Z6WDBoMVlsOUlaV0ZrWlhKZk1qZ3dNSGcwTnpCd2VDNXFjR2N8NmJiYjBkYmY2MTlkYzA5ZTBkYzA5ZjY0OTkxMGE3OTAzNWQ5MWEwZjgzNmM0NmFjN2Q1YzVhYWNjYTljZjNlZA',
    imagealt:''
  },
};