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
import { HubsTabs } from './Hubstabs';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Hubs/Tabs',
  component: HubsTabs,

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
                'hubs-tabs-stories'
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
              'hubs-tabs-stories',
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
                'hubs-tabs-stories',
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

export const HubsTabsContainer = {
  args:{
    user:'stories',

    moduleName:'',
    selectedModule:'',
    saveModule:false,

    tabareabackgroundcolor:'',
    tabcontentbackgroundcolor:'',

    tab1order:1,
    tab1title:'',
    tab1titlecolor:'',
    tab1titlehovercolor:'',
    tab1titleactivecolor:'',
    tab1titlebackgroundcolor:'',
    tab1hoverbackgroundcolor:'',
    tab1activebackgroundcolor:'',

    tab2order:2,
    tab2title:'',
    tab2titlecolor:'',
    tab2titlehovercolor:'',
    tab2titleactivecolor:'',
    tab2titlebackgroundcolor:'',
    tab2hoverbackgroundcolor:'',
    tab2activebackgroundcolor:'',

    tab3order:3,
    tab3title:'',
    tab3titlecolor:'',
    tab3titlehovercolor:'',
    tab3titleactivecolor:'',
    tab3titlebackgroundcolor:'',
    tab3hoverbackgroundcolor:'',
    tab3activebackgroundcolor:'',

    tab4order:4,
    tab4title:'',
    tab4titlecolor:'',
    tab4titlehovercolor:'',
    tab4titleactivecolor:'',
    tab4titlebackgroundcolor:'',
    tab4hoverbackgroundcolor:'',
    tab4activebackgroundcolor:'',

    tab1content:'',
    tab2content:'',
    tab3content:'',
    tab4content:'',
  },
};