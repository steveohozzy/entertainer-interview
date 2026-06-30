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
import { HubStackedCarousel } from './Hubstackedcarousel';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Hubs/Stacked Carousel',
  component: HubStackedCarousel,

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
                'hubs-stacked-carousel'
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
              'hubs-stacked-carousel',
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
                'hubs-stacked-carousel',
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
export const HubstackedcarouselContent = {
  args: {
    user:'stories',

    moduleName:'',
    selectedModule:'',
    saveModule:false,

    panel1image:'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-4-.png?context=bWFzdGVyfHJvb3R8NjIwNjR8aW1hZ2UvcG5nfGFHVXpMMmhsWWk4eE1qY3hPVFUwTlRNMU1qSXlNaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2cwS1M1d2JtY3w3NjYzODVkNGJiODkwMjEyZmVlMmEwZmMzYjBhZTQ0OGEzZTgzMDlhZTIwMDAxMDQ3YmViYWJjMWQ1N2ZmNjlj',
    panel1imagealt:'Trading Cards',
    panel1bgimage:'https://www.thetoyshop.com/medias/Box-1-.png?context=bWFzdGVyfHJvb3R8MjY1NTc4fGltYWdlL3BuZ3xhREF3TDJnNU55OHhNamN4T1RVME5EazVNVGMzTkM5Q2IzZ2dLREVwTG5CdVp3fDc2YTFjYTQ0NjY2MmNlM2RlMDExNGJkYjBlMzFmMDY3MDJiZjllYzIyYmQ5MTg4MjhlZWRmMzkwNjdmMjg2Mjg',
    panel1bgimagealt:'Trading Cards',
    panel1title:'Trading Cards',
    panel1link:'https://www.thetoyshop.com/c/pocket-money/trading-cards',
    panel1backgroundcolor: '#fff',
    panel1backgroundhovercolor: '#fff',
    panel1bordercolor: '#34B597',
    panel1borderhovercolor: '#34B597',
    panel1textcolor:'#1f2b91',
    panel1texthovercolor:'#1f2b91',
    panel1buttontextcolor: "#fff",
    panel1buttonhovercolor: "#fff",
    panel1buttonbackgroundcolor:'#009e44',
    panel1buttonhoverbackgroundcolor:'#1f2b91',
    panel1buttonbordercolor:'#dbe3ff',
    panel1buttonborderhovercolor:'#dbe3ff',

    panel2image:'...',
    panel2imagealt:'...',
    panel2bgimage:'...',
    panel2bgimagealt:'...',
    panel2title:'...',
    panel2link:'...',
    panel2buttontext:'...',
    panel2buttonicon:'...',
    panel2backgroundcolor:'...',
    panel2backgroundhovercolor:'...',
    panel2textcolor:'...',
    panel2texthovercolor:'...',
    panel2buttonbackgroundcolor:'...',
    panel2buttonhovercolor:'...',
    panel2buttonhoverbackgroundcolor:'...',
    panel2buttonbordercolor:'...',
    panel2buttonborderhovercolor:'...',

    panel3image:'...',
    panel3imagealt:'...',
    panel3bgimage:'...',
    panel3bgimagealt:'...',
    panel3title:'...',
    panel3link:'...',
    panel3buttontext:'...',
    panel3buttonicon:'...',
    panel3backgroundcolor:'...',
    panel3backgroundhovercolor:'...',
    panel3textcolor:'...',
    panel3texthovercolor:'...',
    panel3buttonbackgroundcolor:'...',
    panel3buttonhovercolor:'...',
    panel3buttonhoverbackgroundcolor:'...',
    panel3buttonbordercolor:'...',
    panel3buttonborderhovercolor:'...',

    panel4image:'...',
    panel4imagealt:'...',
    panel4bgimage:'...',
    panel4bgimagealt:'...',
    panel4title:'...',
    panel4link:'...',
    panel4buttontext:'...',
    panel4buttonicon:'...',
    panel4backgroundcolor:'...',
    panel4backgroundhovercolor:'...',
    panel4textcolor:'...',
    panel4texthovercolor:'...',
    panel4buttonbackgroundcolor:'...',
    panel4buttonhovercolor:'...',
    panel4buttonhoverbackgroundcolor:'...',
    panel4buttonbordercolor:'...',
    panel4buttonborderhovercolor:'...',

    panel5image:'...',
    panel5imagealt:'...',
    panel5bgimage:'...',
    panel5bgimagealt:'...',
    panel5title:'...',
    panel5link:'...',
    panel5buttontext:'...',
    panel5buttonicon:'...',
    panel5backgroundcolor:'...',
    panel5backgroundhovercolor:'...',
    panel5textcolor:'...',
    panel5texthovercolor:'...',
    panel5buttonbackgroundcolor:'...',
    panel5buttonhovercolor:'...',
    panel5buttonhoverbackgroundcolor:'...',
    panel5buttonbordercolor:'...',
    panel5buttonborderhovercolor:'...',
  }
};