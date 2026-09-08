import { collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { db } from '../config/firebase';
import { PodsCarousel } from './christmas26podscarousel';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Christmas/Pods Carousel',
  component: PodsCarousel,

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    selectedModule: {
      table: {
        disable: true,
      },
    },

    moduleName: {
      control: 'text',
    },

    saveModule: {
      control: 'boolean',
    },

    // -------------------------------------------------------
    // GENERATE CONTROLS FOR ALL 10 PODS
    // -------------------------------------------------------
    ...Object.fromEntries(
      Array.from({ length: 10 }, (_, index) => {
        const number = index + 1;

        return [
          [`positionNumber${number}`, {
            control: {
              type: 'number',
              min: 1,
              max: 10,
              step: 1,
            },
            name: `Pod ${number} Position Number`,
          }],

          [`image${number}`, {
            control: 'text',
            name: `Pod ${number} Image`,
          }],

          [`imagealt${number}`, {
            control: 'text',
            name: `Pod ${number} Image Alt Text`,
          }],

          [`tagline${number}`, {
            control: 'text',
            name: `Pod ${number} Tagline`,
          }],

          [`backgroundcolor${number}`, {
            control: 'color',
            name: `Pod ${number} Background Colour`,
          }],

          [`textcolor${number}`, {
            control: 'color',
            name: `Pod ${number} Text Colour`,
          }],

          [`link${number}`, {
            control: 'text',
            name: `Pod ${number} Link`,
          }],

          [`buttonStyle${number}`, {
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
            name: `Pod ${number} CTA`,
          }],

          [`pod${number}buttonicon`, {
            options: [
              'basket',
              'glasses',
              'football',
              'pencil',
              'plane',
            ],
            control: 'radio',
            name: `Pod ${number} Button Icon`,
          }],

          [`logoimage${number}`, {
            control: 'text',
            name: `Pod ${number} Logo Image`,
          }],

          [`logoimagealt${number}`, {
            control: 'text',
            name: `Pod ${number} Logo Alt Text`,
          }],

          [`logoheight${number}`, {
            control: 'text',
            name: `Pod ${number} Logo Height`,
          }],

          [`position${number}`, {
            options: [
              '',
              'left',
              'center',
              'right',
            ],
            control: 'radio',
            name: `Pod ${number} Logo Position`,
          }],

          [`dataElementType${number}`, {
            control: 'text',
            name: `Pod ${number} Data Element Type`,
          }],

          [`dataPromotionName${number}`, {
            control: 'text',
            name: `Pod ${number} Data Promotion Name`,
          }],

          [`dataPromotionIndex${number}`, {
            control: 'text',
            name: `Pod ${number} Data Promotion Index`,
          }],
        ];
      }).flat()
    ),
  },
};

export const ChristmasPodsCarousel = {
  args: {
    moduleName: '',
    selectedModule: '',
    saveModule: false,

    // Pod 1
    positionNumber1: 1,
    image1: '',
    imagealt1: '',
    tagline1: '',
    backgroundcolor1: '',
    textcolor1: '',
    link1: '',
    buttonStyle1: 'none',
    logoimage1: '',
    logoimagealt1: '',
    logoheight1: '',
    position1: '',
    dataElementType1: '',
    dataPromotionName1: '',
    dataPromotionIndex1: '',

    // Pod 2
    positionNumber2: 2,
    image2: '',
    imagealt2: '',
    tagline2: '',
    backgroundcolor2: '',
    textcolor2: '',
    link2: '',
    buttonStyle2: 'none',
    logoimage2: '',
    logoimagealt2: '',
    logoheight2: '',
    position2: '',
    dataElementType2: '',
    dataPromotionName2: '',
    dataPromotionIndex2: '',

    // Pod 3
    positionNumber3: 3,
    image3: '',
    imagealt3: '',
    tagline3: '',
    backgroundcolor3: '',
    textcolor3: '',
    link3: '',
    buttonStyle3: 'none',
    logoimage3: '',
    logoimagealt3: '',
    logoheight3: '',
    position3: '',
    dataElementType3: '',
    dataPromotionName3: '',
    dataPromotionIndex3: '',

    // Pod 4
    positionNumber4: 4,
    image4: '',
    imagealt4: '',
    tagline4: '',
    backgroundcolor4: '',
    textcolor4: '',
    link4: '',
    buttonStyle4: 'none',
    logoimage4: '',
    logoimagealt4: '',
    logoheight4: '',
    position4: '',
    dataElementType4: '',
    dataPromotionName4: '',
    dataPromotionIndex4: '',

    // Pod 5
    positionNumber5: 5,
    image5: '',
    imagealt5: '',
    tagline5: '',
    backgroundcolor5: '',
    textcolor5: '',
    link5: '',
    buttonStyle5: 'none',
    logoimage5: '',
    logoimagealt5: '',
    logoheight5: '',
    position5: '',
    dataElementType5: '',
    dataPromotionName5: '',
    dataPromotionIndex5: '',

    // Pod 6
    positionNumber6: 6,
    image6: '',
    imagealt6: '',
    tagline6: '',
    backgroundcolor6: '',
    textcolor6: '',
    link6: '',
    buttonStyle6: 'none',
    logoimage6: '',
    logoimagealt6: '',
    logoheight6: '',
    position6: '',
    dataElementType6: '',
    dataPromotionName6: '',
    dataPromotionIndex6: '',

    // Pod 7
    positionNumber7: 7,
    image7: '',
    imagealt7: '',
    tagline7: '',
    backgroundcolor7: '',
    textcolor7: '',
    link7: '',
    buttonStyle7: 'none',
    logoimage7: '',
    logoimagealt7: '',
    logoheight7: '',
    position7: '',
    dataElementType7: '',
    dataPromotionName7: '',
    dataPromotionIndex7: '',

    // Pod 8
    positionNumber8: 8,
    image8: '',
    imagealt8: '',
    tagline8: '',
    backgroundcolor8: '',
    textcolor8: '',
    link8: '',
    buttonStyle8: 'none',
    logoimage8: '',
    logoimagealt8: '',
    logoheight8: '',
    position8: '',
    dataElementType8: '',
    dataPromotionName8: '',
    dataPromotionIndex8: '',

    // Pod 9
    positionNumber9: 9,
    image9: '',
    imagealt9: '',
    tagline9: '',
    backgroundcolor9: '',
    textcolor9: '',
    link9: '',
    buttonStyle9: 'none',
    logoimage9: '',
    logoimagealt9: '',
    logoheight9: '',
    position9: '',
    dataElementType9: '',
    dataPromotionName9: '',
    dataPromotionIndex9: '',

    // Pod 10
    positionNumber10: 10,
    image10: '',
    imagealt10: '',
    tagline10: '',
    backgroundcolor10: '',
    textcolor10: '',
    link10: '',
    buttonStyle10: 'none',
    logoimage10: '',
    logoimagealt10: '',
    logoheight10: '',
    position10: '',
    dataElementType10: '',
    dataPromotionName10: '',
    dataPromotionIndex10: '',
  },

  render: function Render() {
    const [currentArgs, updateArgs] = useArgs();

    const [modules, setModules] = useState([]);

    const loadingRef = useRef(false);
    const previousModule = useRef('');

    // -------------------------------------------------------
    // LOAD SAVED MODULE
    // -------------------------------------------------------
    useEffect(() => {
      if (
        !currentArgs.selectedModule ||
        loadingRef.current ||
        previousModule.current === currentArgs.selectedModule
      ) {
        return;
      }

      const load = async () => {
        loadingRef.current = true;

        try {
          const ref = doc(
            db,
            'ChristmasPodsCarousel',
            currentArgs.selectedModule
          );

          const snap = await getDoc(ref);

          if (snap.exists()) {
            previousModule.current = currentArgs.selectedModule;

            updateArgs({
              ...currentArgs,
              moduleName: currentArgs.selectedModule,
              ...snap.data(),
            });
          }
        } catch (e) {
          console.log('load error', e);
        }

        loadingRef.current = false;
      };

      load();
    }, [currentArgs.selectedModule]);

    // -------------------------------------------------------
    // SAVE MODULE
    // -------------------------------------------------------
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
            doc(db, 'ChristmasPodsCarousel', moduleName),
            fields,
            {
              merge: false,
            }
          );

          previousModule.current = moduleName;

          updateArgs({
            saveModule: false,
            selectedModule: moduleName,
          });

          console.log('saved:', moduleName);
        } catch (e) {
          console.log('save error', e);
        }
      };

      save();
    }, [currentArgs.saveModule]);

    // -------------------------------------------------------
    // LOAD SAVED MODULE LIST
    // -------------------------------------------------------
    useEffect(() => {
      const loadModules = async () => {
        try {
          const snap = await getDocs(
            collection(db, 'ChristmasPodsCarousel')
          );

          const list = snap.docs.map((d) => d.id);

          setModules(list);
        } catch (e) {
          console.log('module list error', e);
        }
      };

      loadModules();
    }, []);

    const {
      moduleName,
      selectedModule,
      saveModule,
      ...componentArgs
    } = currentArgs;

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
            <div style={{ marginBottom: 8 }}>
              <label>Load existing Christmas carousel: </label>

              <select
                value={currentArgs.selectedModule || ''}
                style={{ color: '#000' }}
                onChange={(e) => {
                  previousModule.current = '';

                  updateArgs({
                    ...currentArgs,
                    selectedModule: e.target.value,
                  });
                }}
              >
                <option value="">
                  -- select saved Christmas carousel --
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

        <PodsCarousel {...componentArgs} />
      </>
    );
  },
};