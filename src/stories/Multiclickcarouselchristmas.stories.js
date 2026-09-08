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
import { Multiclickcarouselchristmas } from './Multiclickcarouselchristmas';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at:
// https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'Christmas/Multiclick Carousel',
  component: Multiclickcarouselchristmas,

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

    buttonLink: {
      control: 'text',
    },

    itemsPerSlide: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
      },
    },

    background: {
      control: 'color',
    },

    titlecolor: {
      control: 'color',
    },

    textcolor: {
      control: 'color',
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
                'hubs-multiclick-carousel-christmas'
              )
            );

            setModules(
              snap.docs.map((d) => d.id)
            );
          } catch (e) {
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
        ) {
          return;
        }

        const load = async () => {
          loadingRef.current = true;

          try {
            const ref = doc(
              db,
              'hubs-multiclick-carousel-christmas',
              currentArgs.selectedModule
            );

            const snap = await getDoc(ref);

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
          } catch (e) {
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
        ) {
          return;
        }

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
                'hubs-multiclick-carousel-christmas',
                moduleName
              ),
              fields,
              {
                merge: false,
              }
            );

            previousModule.current =
              moduleName;

            updateArgs({
              ...currentArgs,
              saveModule: false,
              selectedModule: moduleName,
            });

            // Add newly created module to dropdown
            setModules((prev) => {
              if (prev.includes(moduleName)) {
                return prev;
              }

              return [
                ...prev,
                moduleName,
              ];
            });

            console.log(
              'saved:',
              moduleName
            );
          } catch (e) {
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
                  marginBottom: 8,
                }}
              >
                <label>
                  Load module:
                </label>

                <select
                  value={
                    currentArgs.selectedModule ||
                    ''
                  }
                  style={{
                    color: '#000',
                  }}
                  onChange={(e) => {
                    updateArgs({
                      ...currentArgs,
                      selectedModule:
                        e.target.value,
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

export const MulticlickcarouselchristmasImages = {
  args: {
    moduleName: '',
    selectedModule: '',
    saveModule: false,

    title: 'Featured Products',
    blurb: 'Shop our latest deals',
    mainImage: "",
    mainImagealt: "",
    mainImageLink: "",

    modulebackgroundcolor:'',

    background: '#18499b',
    titlecolor: '#ffffff',
    textcolor: '#ffffff',
    buttonStyle: 'shop-now',
    buttonLink: 'https://www.thetoyshop.com/search?text=LEGO%20Batman%20Legacy%20of%20The%20Dark%20Knight',

    arrowsBackground: '#009e44',
    arrowsColor: '#ffffff',

    itemsPerSlide: 6,
    itemsPerRow: 3,
    itemsPerRowMobile: 2,

    image1:
      'https://picsum.photos/400/300?1',
    image1link: '#',
    image1alt: 'Image 1',
    image1title: 'Winter Deals',
    image1dataElementType: 'promotion',
    image1datapromotionindex: '1',
    image1datapromotionname: 'Winter Deals',

    image2:
      'https://picsum.photos/400/300?2',
    image2link: '#',
    image2alt: 'Image 2',
    image2title: 'Spring Deals',
    image2dataElementType: 'promotion',
    image2datapromotionindex: '2',
    image2datapromotionname: 'Spring Deals',

    image3:
      'https://picsum.photos/400/300?3',
    image3link: '#',
    image3alt: 'Image 3',
    image3title: 'Summer Deals',
    image3dataElementType: 'promotion',
    image3datapromotionindex: '3',
    image3datapromotionname: 'Summer Deals',

    image4:
      'https://picsum.photos/400/300?4',
    image4link: '#',
    image4alt: 'Image 4',
    image4title: 'Fall Deals',
    image4dataElementType: 'promotion',
    image4datapromotionindex: '4',
    image4datapromotionname: 'Fall Deals',

    image5:
      'https://picsum.photos/400/300?5',
    image5link: '#',
    image5alt: 'Image 5',
    image5title: 'Winter Deals',
    image5dataElementType: 'promotion',
    image5datapromotionindex: '5',
    image5datapromotionname: 'Winter Deals',

    image6:
      'https://picsum.photos/400/300?6',
    image6link: '#',
    image6alt: 'Image 6',
    image6title: 'Spring Deals',
    image6dataElementType: 'promotion',
    image6datapromotionindex: '6',
    image6datapromotionname: 'Spring Deals',

    image7:
      'https://picsum.photos/400/300?7',
    image7link: '#',
    image7alt: 'Image 7',
    image7title: 'Summer Deals',
    image7dataElementType: 'promotion',
    image7datapromotionindex: '7',
    image7datapromotionname: 'Summer Deals',

    image8:
      'https://picsum.photos/400/300?8',
    image8link: '#',
    image8alt: 'Image 8',
    image8title: 'Fall Deals',
    image8dataElementType: 'promotion',
    image8datapromotionindex: '8',
    image8datapromotionname: 'Fall Deals',

    image9:
      'https://picsum.photos/400/300?9',
    image9link: '#',
    image9alt: 'Image 9',
    image9title: 'Winter Deals',
    image9dataElementType: 'promotion',
    image9datapromotionindex: '9',
    image9datapromotionname: 'Winter Deals',

    image10:
      'https://picsum.photos/400/300?10',
    image10link: '#',
    image10alt: 'Image 10',
    image10title: 'Spring Deals',
    image10dataElementType: 'promotion',
    image10datapromotionindex: '10',
    image10datapromotionname: 'Spring Deals',

    image11:
      'https://picsum.photos/400/300?11',
    image11link: '#',
    image11alt: 'Image 11',
    image11title: 'Summer Deals',
    image11dataElementType: 'promotion',
    image11datapromotionindex: '11',
    image11datapromotionname: 'Summer Deals',

    image12:
      'https://picsum.photos/400/300?12',
    image12link: '#',
    image12alt: 'Image 12',
    image12title: 'Fall Deals',
    image12dataElementType: 'promotion',
    image12datapromotionindex: '12',
    image12datapromotionname: 'Fall Deals',
  },
};