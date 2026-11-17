import { db } from '../config/firebase';
import {
doc,
getDoc,
setDoc,
deleteDoc,
collection,
getDocs
} from 'firebase/firestore';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HubsTabs } from './Hubstabs';
import { useArgs } from 'storybook/preview-api';

export default {
title: 'Modules/Tabs',
component: HubsTabs,

parameters: {
layout: 'fullscreen',
},

argTypes: {

  lozengetextcolor: {
  control: {
    type: 'select',
  },
  options: ['#000000', '#FFFFFF', '#1f2b91'],
  labels: {
    '#000000': 'Black',
    '#FFFFFF': 'White',
    '#1f2b91': 'Blue',
  },
},

tab1titlecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},

tab1titleactivecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},



tab2titlecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},

tab2titleactivecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},


tab3titlecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},

tab3titleactivecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},

tab4titlecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
},

tab4titleactivecolor: {
control: {
type: 'select',
},
options: ['#000000', '#FFFFFF', '#1f2b91'],
labels: {
'#000000': 'Black',
'#FFFFFF': 'White',
'#1f2b91': 'Blue',
},
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

        setModules(prev =>
          prev.includes(moduleName)
            ? prev
            : [...prev, moduleName]
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

  const deleteSelectedModule = async () => {

    const selectedModule =
      currentArgs.selectedModule;

    if (!selectedModule) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${selectedModule}"?`
    );

    if (!confirmed) return;

    try {

      await deleteDoc(
        doc(
          db,
          'hubs-tabs-stories',
          selectedModule
        )
      );

      setModules(prev =>
        prev.filter(
          module => module !== selectedModule
        )
      );

      previousModule.current = '';

      updateArgs({
        ...currentArgs,
        moduleName: '',
        selectedModule: '',
        saveModule: false,
      });

    } catch(e){

      console.log(
        'delete error',
        e
      );

    }

  };

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

            <button
              type="button"
              disabled={!currentArgs.selectedModule}
              onClick={deleteSelectedModule}
              style={{
                marginLeft:8
              }}
            >
              Delete
            </button>

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

moduleName:'',
selectedModule:'',
saveModule:false,

lozengetitle: '',
lozengebackgroundcolor: '',
lozengetextcolor: '#000000',



tab1order:1,
tab1title:'',
tab1titlecolor:'#000000',
tab1titleactivecolor:'',
tab1titlebackgroundcolor:'#FFFFFF',
tab1activebackgroundcolor:'#1f2b91',

tab2order:2,
tab2title:'',
tab2titlecolor:'#000000',
tab2titleactivecolor:'',
tab2titlebackgroundcolor:'#FFFFFF',
tab2hoverbackgroundcolor:'',
tab2activebackgroundcolor:'#1f2b91',

tab3order:3,
tab3title:'',
tab3titlecolor:'#000000',
tab3titleactivecolor:'',
tab3titlebackgroundcolor:'#FFFFFF',
tab3activebackgroundcolor:'#1f2b91',

tab4order:4,
tab4title:'',
tab4titlecolor:'#000000',
tab4titleactivecolor:'',
tab4titlebackgroundcolor:'#FFFFFF',
tab4activebackgroundcolor:'#1f2b91',

tab1content:'',
tab2content:'',
tab3content:'',
tab4content:'',

},
};