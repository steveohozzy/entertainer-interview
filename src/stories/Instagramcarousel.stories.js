import { db } from '../config/firebase';

import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs
} from 'firebase/firestore';

import {
  useEffect,
  useRef,
  useState
} from 'react';

import { createPortal } from 'react-dom';

import { InstagramCarousel } from './Instagramcarousel';

import { useArgs } from 'storybook/preview-api';


export default {
  title: 'Modules/Instagram Carousel',

  component: InstagramCarousel,

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {

    moduleName: {
      control: 'text',
    },

    selectedModule: {
      control: 'text',

      table: {
        disable: true,
      },
    },

    saveModule: {
      control: 'boolean',
    },

    title: {
      control: 'text',
    },


    post1Platform: {
      control: 'select',

      options: [
        'instagram',
        'tiktok',
      ],

      name: 'Post 1 Platform',
    },

    post1: {
      control: 'text',

      name: 'Instagram / TikTok Post 1',
    },


    post2Platform: {
      control: 'select',

      options: [
        'instagram',
        'tiktok',
      ],

      name: 'Post 2 Platform',
    },

    post2: {
      control: 'text',

      name: 'Instagram / TikTok Post 2',
    },


    post3Platform: {
      control: 'select',

      options: [
        'instagram',
        'tiktok',
      ],

      name: 'Post 3 Platform',
    },

    post3: {
      control: 'text',

      name: 'Instagram / TikTok Post 3',
    },


    post4Platform: {
      control: 'select',

      options: [
        'instagram',
        'tiktok',
      ],

      name: 'Post 4 Platform',
    },

    post4: {
      control: 'text',

      name: 'Instagram / TikTok Post 4',
    },


    post5Platform: {
      control: 'select',

      options: [
        'instagram',
        'tiktok',
      ],

      name: 'Post 5 Platform',
    },

    post5: {
      control: 'text',

      name: 'Instagram / TikTok Post 5',
    },


    post6Platform: {
      control: 'select',

      options: [
        'instagram',
        'tiktok',
      ],

      name: 'Post 6 Platform',
    },

    post6: {
      control: 'text',

      name: 'Instagram / TikTok Post 6',
    },

  },


  decorators: [

    (Story) => {

      const [
        currentArgs,
        updateArgs
      ] = useArgs();


      const [
        modules,
        setModules
      ] = useState([]);


      const loadingRef =
        useRef(false);


      const previousModule =
        useRef('');


      useEffect(() => {

        const loadModules = async () => {

          try {

            const snap =
              await getDocs(
                collection(
                  db,
                  'instagram-carousel-modules'
                )
              );


            setModules(
              snap.docs.map(
                (d) => d.id
              )
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
              'instagram-carousel-modules',
              currentArgs.selectedModule
            );


            const snap =
              await getDoc(ref);


            if (snap.exists()) {

              previousModule.current =
                currentArgs.selectedModule;


              updateArgs({

                ...currentArgs,

                ...snap.data(),

                moduleName:
                  currentArgs.selectedModule,

                saveModule: false,

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

      }, [
        currentArgs.selectedModule
      ]);


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
                'instagram-carousel-modules',
                moduleName
              ),

              fields,

              {
                merge: false,
              }

            );


            updateArgs({

              ...currentArgs,

              saveModule: false,

              selectedModule:
                moduleName,

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

      }, [
        currentArgs.saveModule
      ]);


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
                borderRadius: 4,
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
                    currentArgs.selectedModule ||
                    ''
                  }

                  style={{
                    color: '#000',
                    marginLeft: 8,
                  }}

                  onChange={(e) =>
                    updateArgs({

                      ...currentArgs,

                      selectedModule:
                        e.target.value,

                    })
                  }
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


export const InstagramCarouselContent = {

  args: {

    moduleName: '',

    selectedModule: '',

    saveModule: false,


    title:
      'Follow us on Instagram & TikTok',


    post1Platform:
      'instagram',

    post1:
      'https://www.instagram.com/reel/DVJeIW7gvp4/',


    post2Platform:
      'instagram',

    post2:
      'https://www.instagram.com/reel/DV_iMlsDIZd/',


    post3Platform:
      'tiktok',

    post3:
      '',


    post4Platform:
      'instagram',

    post4:
      '',


    post5Platform:
      'tiktok',

    post5:
      '',


    post6Platform:
      'instagram',

    post6:
      '',

  },

};