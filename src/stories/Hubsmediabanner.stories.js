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
import { HubsMediaBanner } from './Hubsmediabanner';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Modules/Media Banner',
  component: HubsMediaBanner,

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
                'hubs-video-banner'
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
              'hubs-video-banner',
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
                'hubs-video-banner',
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

export const HubsMediaBannerSection = {
  args: {
    moduleName:'',
    selectedModule:'',
    saveModule:false,

    link:'https://www.thetoyshop.com/search?text=EA%20SPORTS%20FC26',

    video:'https://www.thetoyshop.com/medias/FC26-WC-RETAIL-CUSTOM-NoSubs-EditGlobal-1080p-16x9-29-97fps-30s-ENG-GB-1-1-.mp4?context=bWFzdGVyfHJvb3R8OTk0OTM1OXx2aWRlby9xdWlja3RpbWV8YUdZekwyZzBaaTh4TWpjNE5qYzVOVEU0TkRFMU9DOUdRekkyWDFkRFgxSkZWRUZKVEY5RFZWTlVUMDB0VG05VGRXSnpMVVZrYVhSSGJHOWlZV3hmTVRBNE1IQmZNVFo0T1Y4eU9TMDVOMlp3YzE4ek1ITmZSVTVIWDBkQ0lDZ3hLU0FvTVNrdWJYQTB8MDcwN2NiMjJjMGI1ZTc5MGMzOWJiMzMyNjNiM2U5NDMzZDY5OTczM2E3ZGI4Yjk3ZmVjNTk4NzdiZGUzYjNlMg',

    image:'',
    imagealt:'',

    buttontext:'Shop EA SPORTS FC26 Game Now',
    ctaIcon: 'basket',
    ctaposition: 'center',
    buttonbackgroundcolor:'#009e44',
    buttonhoverbackgroundcolor:'#1f2b91',
    buttontextcolor:'#fff',
    buttonhovertextcolor:'#fff',
    buttonbordercolor:'#dbe3ff',
    buttonborderhovercolor:'#dbe3ff',
  },
};