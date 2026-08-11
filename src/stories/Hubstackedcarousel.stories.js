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
  title: 'Modules/Stacked Carousel',
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

    panel1buttonicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: "radio",
  },

    panel2buttonicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: "radio",
    },

    panel3buttonicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: "radio",
  },

  panel4buttonicon: {
    options: [
      "basket",
      "glasses",
      "football",
      "pencil",
      "plane",
    ],
    control: "radio",
  },

  panel5buttonicon: {
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

    panelbackgroundcolor:'#fff',
    panelhoverbackgroundcolor:'#fff',
    panelbordercolor:'#34B597',
    panelhoverbordercolor:'#34B597',
    paneltextcolor:'#1f2b91',
    panelhovertextcolor:'#1f2b91',
    panelbuttonbackgroundcolor:'#009e44',
    panelhoverbuttonbackgroundcolor:'#1f2b91',
    panelbuttontextcolor:"#fff",
    panelhoverbuttontextcolor:"#fff",
    panelbuttonbordercolor:'#dbe3ff',
    panelhoverbuttonbordercolor:'#dbe3ff',

    panel1image:'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-4-.png?context=bWFzdGVyfHJvb3R8NjIwNjR8aW1hZ2UvcG5nfGFHVXpMMmhsWWk4eE1qY3hPVFUwTlRNMU1qSXlNaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2cwS1M1d2JtY3w3NjYzODVkNGJiODkwMjEyZmVlMmEwZmMzYjBhZTQ0OGEzZTgzMDlhZTIwMDAxMDQ3YmViYWJjMWQ1N2ZmNjlj',
    panel1imagealt:'Trading Cards',
    panel1bgimage:'https://www.thetoyshop.com/medias/Box-1-.png?context=bWFzdGVyfHJvb3R8MjY1NTc4fGltYWdlL3BuZ3xhREF3TDJnNU55OHhNamN4T1RVME5EazVNVGMzTkM5Q2IzZ2dLREVwTG5CdVp3fDc2YTFjYTQ0NjY2MmNlM2RlMDExNGJkYjBlMzFmMDY3MDJiZjllYzIyYmQ5MTg4MjhlZWRmMzkwNjdmMjg2Mjg',
    panel1bgimagealt:'Trading Cards',
    panel1title:'Trading Cards',
    panel1buttontext: 'Shop Now',
    panel1buttonicon: 'basket',
    panel1link:'https://www.thetoyshop.com/c/pocket-money/trading-cards',

    panel2image:'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-4-.png?context=bWFzdGVyfHJvb3R8NjIwNjR8aW1hZ2UvcG5nfGFHVXpMMmhsWWk4eE1qY3hPVFUwTlRNMU1qSXlNaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2cwS1M1d2JtY3w3NjYzODVkNGJiODkwMjEyZmVlMmEwZmMzYjBhZTQ0OGEzZTgzMDlhZTIwMDAxMDQ3YmViYWJjMWQ1N2ZmNjlj',
    panel2imagealt:'Trading Cards',
    panel2bgimage:'https://www.thetoyshop.com/medias/Box-1-.png?context=bWFzdGVyfHJvb3R8MjY1NTc4fGltYWdlL3BuZ3xhREF3TDJnNU55OHhNamN4T1RVME5EazVNVGMzTkM5Q2IzZ2dLREVwTG5CdVp3fDc2YTFjYTQ0NjY2MmNlM2RlMDExNGJkYjBlMzFmMDY3MDJiZjllYzIyYmQ5MTg4MjhlZWRmMzkwNjdmMjg2Mjg',
    panel2bgimagealt:'Trading Cards',
    panel2title:'Trading Cards',
    panel2buttontext: 'Shop Now',
    panel2buttonicon: 'basket',
    panel2link:'https://www.thetoyshop.com/c/pocket-money/trading-cards',

    panel3image:'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-2-.png?context=bWFzdGVyfHJvb3R8ODA3NTN8aW1hZ2UvcG5nfGFEUTdMMmd6TWk4eE1qY3hPVFUwTkRreU5qSXpPQzlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2d5S1M1d2JtY3xhODQ4OGE4YzYwNTJiNjhxYzBiNDI2Njk2M2U2ZDAxYjc2NjI1ODA3ZTI0Yjc3NDYzYTIyZjc4YjVhM2JmMQ',
    panel3imagealt:'Collectibles',
    panel3bgimage:'https://www.thetoyshop.com/medias/Box-1-.png?context=bWFzdGVyfHJvb3R8MjY1NTc4fGltYWdlL3BuZ3xhREF3TDJnNE5TOHhNamMzTXpBd05UZzROVFEzTUM5bFpHbDBaV1F0Y0dodmRHOGdLRFE1S1M1d2JtY3wxNmJkYTc2YTg2ZjQ4Zjg0NjdhZDE0ZDAyMzg3NzZlODE0YTM0MTA3ODc4OTFhMDc0ZTljYjMxMDcwNDIxNjE4',
    panel3bgimagealt:'Collectibles',
    panel3title:'Collectibles',
    panel3buttontext:'Shop Now',
    panel3buttonicon:'basket',
    panel3link:'https://www.thetoyshop.com/c/toys-for-grown-ups/football-collectibles',

    panel4image:'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-4-.png?context=bWFzdGVyfHJvb3R8NjIwNjR8aW1hZ2UvcG5nfGFHVXpMMmhsWWk4eE1qY3hPVFUwTlRNMU1qSXlNaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2cwS1M1d2JtY3w3NjYzODVkNGJiODkwMjEyZmVlMmEwZmMzYjBhZTQ0OGEzZTgzMDlhZTIwMDAxMDQ3YmViYWJjMWQ1N2ZmNjlj',
    panel4imagealt:'Footballs & Equipment',
    panel4bgimage:'https://www.thetoyshop.com/medias/Box-1-.png?context=bWFzdGVyfHJvb3R8MjY1NTc4fGltYWdlL3BuZ3xhREF3TDJnNU55OHhNamN4T1RVME5EazVNVGMzTkM5Q2IzZ2dLREVwTG5CdVp3fDc2YTFjYTQ0NjY2MmNlM2RlMDExNGJkYjBlMzFmMDY3MDJiZjllYzIyYmQ5MTg4MjhlZWRmMzkwNjdmMjg2Mjg',
    panel4bgimagealt:'Footballs & Equipment',
    panel4title:'Footballs & Equipment',
    panel4buttontext:'Shop Now',
    panel4buttonicon:'basket',
    panel4link:'https://www.thetoyshop.com/c/outdoor-toys/sports-toys-and-equipment/football-toys',

    panel5image:'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-5-.png?context=bWFzdGVyfHJvb3R8MTE2Mjg8aW1hZ2UvcG5nfGFHWmpMMmd5TkM4eE1qY3hPVFUwTlRNMU1qSXlNaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2d6S1M1d2JtY3w1YTU4ZTJkYWRlZGM3NTI2NDJjNDQ1MmZkZGMzZjVkODMwMjBhZmQxMWJkYTFiMDVjYzc5ZjNjYThmOTJmMDY4',
    panel5imagealt:'Toypods',
    panel5bgimage:'https://www.thetoyshop.com/medias/Box-1-.png?context=bWFzdGVyfHJvb3R8MjY1NTc4fGltYWdlL3BuZ3xhREF3TDJnNE5TOHhNamMzTXpBd05UZzROVFEzTUM5bFpHbDBaV1F0Y0dodmRHOGdLRFE1S1M1d2JtY3wxNmJkYTc2YTg2ZjQ4Zjg0NjdhZDE0ZDAyMzg3NzZlODE0YTM0MTA3ODc4OTFhMDc0ZTljYjMxMDcwNDIxNjE4',
    panel5bgimagealt:'Toypods',
    panel5title:'Toypods',
    panel5buttontext:'Shop Now',
    panel5buttonicon: 'basket',
    panel5link:'https://www.thetoyshop.com/c/toys-for-grown-ups/display-figures?categories=Football%20Collectibles',
  }
};