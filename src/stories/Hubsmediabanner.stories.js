
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

    // -------------------------
    // MEDIA LINKS
    // -------------------------

    link: {
      control: 'text',
      description: 'Destination when clicking the media image or banner',
    },

    buttonLink: {
      control: 'text',
      description: 'CTA destination. If empty, the main link is used',
    },

    // -------------------------
    // CTA BUTTON
    // -------------------------

    ctaposition: {
      options: [
        'left',
        'center',
        'right',
      ],
      control: {
        type: 'radio',
      },
    },

    buttonPosition: {
      options: [
        'overlay',
        'below',
      ],
      control: {
        type: 'radio',
      },
      description: 'Display the CTA over the media or underneath the blurb',
      labels: {
        overlay: 'Overlay',
        below: 'Below blurb',
      },
    },

    buttonStyle: {
      options: [
        'none',
        'shop-now',
        'pre-order-now',
        'store-events',
        'store-locator',
        'enter',
        'download',
        'read',
        'sign-up',
        'play',
      ],
      control: {
        type: 'radio',
      },
    },

    // -------------------------
    // MODULE BACKGROUND
    // -------------------------

    backgroundColor: {
      control: 'color',
    },

    // -------------------------
    // LOZENGE TITLE
    // -------------------------

    lozengeTitle: {
      control: 'text',
      description: 'Optional title displayed over the media',
    },

    lozengeBackgroundColor: {
      control: 'color',
      description: 'Lozenge background colour',
    },

    lozengeTextColor: {
      control: 'color',
      description: 'Lozenge text colour',
    },

    // -------------------------
    // HEADER LOGO
    // -------------------------

    headerLogo: {
      control: 'text',
      description: 'Logo image URL displayed instead of the lozenge',
    },

    headerLogoAlt: {
      control: 'text',
      description: 'Alternative text for the header logo',
    },

    headerLogoMaxHeight: {
      control: {
        type: 'range',
        min: 50,
        max: 300,
        step: 10,
      },
      description: 'Maximum logo height in pixels',
    },

    headerLogoBackgroundColor: {
      control: 'color',
      description: 'Full-width background colour behind the header logo',
    },

    // -------------------------
    // BLURB TEXT
    // -------------------------

    blurbText: {
      control: 'text',
      description: 'Text displayed underneath the media',
    },

    blurbTextColor: {
      control: 'color',
      description: 'Blurb text colour',
    },

    blurbBackgroundColor: {
      control: 'color',
      description: 'Blurb background colour',
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
                saveModule: false,
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
                merge: false
              }
            );

            setModules((prev) =>
              prev.includes(moduleName)
                ? prev
                : [...prev, moduleName]
            );

            updateArgs({
              ...currentArgs,
              saveModule: false,
              selectedModule: moduleName
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

      // -------------------------
      // DELETE MODULE
      // -------------------------

      const deleteSelectedModule = async () => {

        const moduleName =
          currentArgs.selectedModule;

        if (!moduleName) return;

        if (
          !window.confirm(
            `Delete module "${moduleName}"?`
          )
        ) return;

        try {

          await deleteDoc(
            doc(
              db,
              'hubs-video-banner',
              moduleName
            )
          );

          setModules((prev) =>
            prev.filter(
              (m) => m !== moduleName
            )
          );

          previousModule.current = '';

          updateArgs({
            ...currentArgs,
            moduleName: '',
            selectedModule: '',
            saveModule: false
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
                position: 'fixed',
                top: 10,
                right: 10,
                zIndex: 9999,
                padding: 12,
                background: '#111',
                color: '#fff',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  marginBottom: 8
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
                    color: '#000'
                  }}
                  onChange={(e) => {

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

                  {modules.map((m) => (

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
                  onClick={deleteSelectedModule}
                  disabled={!currentArgs.selectedModule}
                  style={{
                    marginLeft: 8
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

export const HubsMediaBannerSection = {
  args: {
    moduleName: '',
    selectedModule: '',
    saveModule: false,

    // -------------------------
    // MEDIA
    // -------------------------

    link: 'https://www.thetoyshop.com/search?text=EA%20SPORTS%20FC26',

    video: 'https://www.thetoyshop.com/medias/FC26-WC-RETAIL-CUSTOM-NoSubs-EditGlobal-1080p-16x9-29-97fps-30s-ENG-GB-1-1-.mp4?context=bWFzdGVyfHJvb3R8OTk0OTM1OXx2aWRlby9xdWlja3RpbWV8YUdZekwyZzBaaTh4TWpjNE5qYzVOVEU0TkRFMU9DOUdRekkyWDFkRFgxSkZWRUZKVEY5RFZWTlVUMDB0VG05VGRXSnpMVVZrYVhSSGJHOWlZV3hmTVRBNE1IQmZNVFo0T1Y4eU9TMDVOMlp3YzE4ek1ITmZSVTVIWDBkQ0lDZ3hLU0FvTVNrdWJYQTB8MDcwN2NiMjJjMGI1ZTc5MGMzOWJiMzMyNjNiM2U5NDMzZDY5OTczM2E3ZGI4Yjk3ZmVjNTk4NzdiZGUzYjNlMg',

    image: '',
    imagealt: '',

    // -------------------------
    // CTA BUTTON
    // -------------------------

    buttonStyle: 'shop-now',

    buttonLink: 'https://www.thetoyshop.com/search?text=EA%20SPORTS%20FC26',

    ctaposition: 'center',

    buttonPosition: 'overlay',

    // -------------------------
    // MODULE BACKGROUND
    // -------------------------

    backgroundColor: '#ffffff',

    // -------------------------
    // LOZENGE TITLE
    // -------------------------

    lozengeTitle: '',

    lozengeBackgroundColor: '#ffffff',

    lozengeTextColor: '#000000',

    // -------------------------
    // HEADER LOGO
    // -------------------------

    headerLogo: '',

    headerLogoAlt: '',

    headerLogoMaxHeight: 300,

    headerLogoBackgroundColor: 'transparent',

    // -------------------------
    // BLURB TEXT
    // -------------------------

    blurbText: '',

    blurbTextColor: '#000000',

    blurbBackgroundColor: 'transparent',
  },
};
