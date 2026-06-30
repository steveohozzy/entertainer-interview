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
import { Imageroundals } from './Imageroundals';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Hubs/Image Roundals',
  component: Imageroundals,

  parameters: {
    layout: 'centered',
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
                'hubs-image-roundals'
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
              'hubs-image-roundals',
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
                'hubs-image-roundals',
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

export const ImageRoundalsContent = {
  args: {
    user:'stories',

    moduleName:'',
    selectedModule:'',
    saveModule:false,

    roundal1image:'',
    roundal1alt:'',
    roundal1link:'',
    roundal1text:'',
    roundal1background:'',
    roundal1hoverbackground:'',
    roundal1textcolor:'',
    roundal1hovertextcolor:'',

    roundal2image:'',
    roundal2alt:'',
    roundal2link:'',
    roundal2text:'',
    roundal2background:'',
    roundal2hoverbackground:'',
    roundal2textcolor:'',
    roundal2hovertextcolor:'',

    roundal3image:'',
    roundal3alt:'',
    roundal3link:'',
    roundal3text:'',
    roundal3background:'',
    roundal3hoverbackground:'',
    roundal3textcolor:'',
    roundal3hovertextcolor:'',

    roundal4image:'',
    roundal4alt:'',
    roundal4link:'',
    roundal4text:'',
    roundal4background:'',
    roundal4hoverbackground:'',
    roundal4textcolor:'',
    roundal4hovertextcolor:'',

    roundal5image:'',
    roundal5alt:'',
    roundal5link:'',
    roundal5text:'',
    roundal5background:'',
    roundal5hoverbackground:'',
    roundal5textcolor:'',
    roundal5hovertextcolor:'',

    roundal6image:'',
    roundal6alt:'',
    roundal6link:'',
    roundal6text:'',
    roundal6background:'',
    roundal6hoverbackground:'',
    roundal6textcolor:'',
    roundal6hovertextcolor:'',

    roundal7image:'',
    roundal7alt:'',
    roundal7link:'',
    roundal7text:'',
    roundal7background:'',
    roundal7hoverbackground:'',
    roundal7textcolor:'',
    roundal7hovertextcolor:'',

    roundal8image:'',
    roundal8alt:'',
    roundal8link:'',
    roundal8text:'',
    roundal8background:'',
    roundal8hoverbackground:'',
    roundal8textcolor:'',
    roundal8hovertextcolor:'',

    roundal9image:'',
    roundal9alt:'',
    roundal9link:'',
    roundal9text:'',
    roundal9background:'',
    roundal9hoverbackground:'',
    roundal9textcolor:'',

    roundal10image:'',
    roundal10alt:'',
    roundal10link:'',
    roundal10text:'',
    roundal10background:'',
    roundal10hoverbackground:'',
    roundal10textcolor:'',
    roundal10hovertextcolor:'',

    roundal11image:'',
    roundal11alt:'',
    roundal11link:'',
    roundal11text:'',
    roundal11background:'',
    roundal11hoverbackground:'',
    roundal11textcolor:'',
    roundal11hovertextcolor:'',

    roundal12image:'',
    roundal12alt:'',
    roundal12link:'',
    roundal12text:'',
    roundal12background:'',
    roundal12hoverbackground:'',
    roundal12textcolor:'',
    roundal12hovertextcolor:'',

    roundal13image:'',
    roundal13alt:'',
    roundal13link:'',
    roundal13text:'',
    roundal13background:'',
    roundal13hoverbackground:'',
    roundal13textcolor:'',
    roundal13hovertextcolor:'',

    roundal14image:'',
    roundal14alt:'',
    roundal14link:'',
    roundal14text:'',
    roundal14background:'',
    roundal14hoverbackground:'',
    roundal14textcolor:'',
    roundal14hovertextcolor:'',

    roundal15image:'',
    roundal15alt:'',
    roundal15link:'',
    roundal15text:'',
    roundal15background:'',
    roundal15hoverbackground:'',
    roundal15textcolor:'',
    roundal15hovertextcolor:'',

    roundal16image:'',
    roundal16alt:'',
    roundal16link:'',
    roundal16text:'',
    roundal16background:'',
    roundal16hoverbackground:'',
    roundal16textcolor:'',
    roundal16hovertextcolor:'',

    roundal17image:'',
    roundal17alt:'',
    roundal17link:'',
    roundal17text:'',
    roundal17background:'',
    roundal17hoverbackground:'',
    roundal17textcolor:'',
    roundal17hovertextcolor:'',

    roundal18image:'',
    roundal18alt:'',
    roundal18link:'',
    roundal18text:'',
    roundal18background:'',
    roundal18hoverbackground:'',
    roundal18textcolor:'',
    roundal18hovertextcolor:'',

    roundal19image:'',
    roundal19alt:'',
    roundal19link:'',
    roundal19text:'',
    roundal19background:'',
    roundal19hoverbackground:'',
    roundal19textcolor:'',
    roundal19hovertextcolor:'',

    roundal20image:'',
    roundal20alt:'',
    roundal20link:'',
    roundal20text:'',
    roundal20background:'',
    roundal20hoverbackground:'',
    roundal20textcolor:'',
    roundal20hovertextcolor:'',

    roundal21image:'',
    roundal21alt:'',
    roundal21link:'',
    roundal21text:'',
    roundal21background:'',
    roundal21hoverbackground:'',
    roundal21textcolor:'',
    roundal21hovertextcolor:'',

    roundal22image:'',
    roundal22alt:'',
    roundal22link:'',
    roundal22text:'',
    roundal22background:'',
    roundal22hoverbackground:'',
    roundal22textcolor:'',
    roundal22hovertextcolor:'',

    roundal23image:'',
    roundal23alt:'',
    roundal23link:'',
    roundal23text:'',
    roundal23background:'',
    roundal23hoverbackground:'',
    roundal23textcolor:'',
    roundal23hovertextcolor:'',

    roundal24image:'',
    roundal24alt:'',
    roundal24link:'',
    roundal24text:'',
    roundal24background:'',
    roundal24hoverbackground:'',
    roundal24textcolor:'',
    roundal24hovertextcolor:'',
  },
};