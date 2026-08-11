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
import { Brandmodules } from './Brandmodules';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Modules/Brand Modules',
  component: Brandmodules,

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

    lozengetextcolor: {
      control: {
        type: 'select',
      },
      options: ['#000000', '#FFFFFF'],
      labels: {
        '#000000': 'Black',
        '#FFFFFF': 'White',
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
                'hubs-brand-modules'
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
              'hubs-brand-modules',
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
                'hubs-brand-modules',
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

export const BrandmodulesContent = {
  args: {
    moduleName:'',
    selectedModule:'',
    saveModule:false,

    roundelbackgroundcolor:'',
    roundelborerhovercolor:'',
    roundeltextcolor:'',

    lozengebackgroundcolor: '',
    lozengetextcolor: '#000000',
    
    lozengetitle: '',

    roundel1image:'',
    roundel1alt:'',
    roundel1link:'',
    roundel1text:'',

    roundel2image:'',
    roundel2alt:'',
    roundel2link:'',
    roundel2text:'',

    roundel3image:'',
    roundel3alt:'',
    roundel3link:'',
    roundel3text:'',

    roundel4image:'',
    roundel4alt:'',
    roundel4link:'',
    roundel4text:'',

    roundel5image:'',
    roundel5alt:'',
    roundel5link:'',
    roundel5text:'',

    roundel6image:'',
    roundel6alt:'',
    roundel6link:'',
    roundel6text:'',

    roundel7image:'',
    roundel7alt:'',
    roundel7link:'',
    roundel7text:'',

    roundel8image:'',
    roundel8alt:'',
    roundel8link:'',
    roundel8text:'',

    roundel9image:'',
    roundel9alt:'',
    roundel9link:'',
    roundel9text:'',

    roundel10image:'',
    roundel10alt:'',
    roundel10link:'',
    roundel10text:'',

    roundel11image:'',
    roundel11alt:'',
    roundel11link:'',
    roundel11text:'',

    roundel12image:'',
    roundel12alt:'',
    roundel12link:'',
    roundel12text:'',
  },
};