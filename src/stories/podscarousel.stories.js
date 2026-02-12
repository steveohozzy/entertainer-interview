import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { PodsCarousel } from './Podscarousel';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/Pods/Final Pods Carousel',
  component: PodsCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
    positionNumber1: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber2: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber3: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber4: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber5: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber6: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber7: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber8: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber9: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber10: { control: { type: 'number', min: 1, max: 10 } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HomeCarouselPods = {
  args: {
  user: 'stories',

  // Slide 1
  positionNumber1: 1,
  image1: '',
  imagealt1: '',
  tagline1: '',
  backgroundcolor1: '',
  textcolor1: '',
  link1: '',
  linktext1: '',
  buttonbackgroundcolor1: '',
  buttontextcolor1: '',
  logoimage1: '',
  logoimagealt1: '',
  logoheight1: '',
  position1: '',
  dataElementType1: '',
  dataPromotionName1: '',
  dataPromotionIndex1: '',

  // Slide 2
  positionNumber2: 2,
  image2: '',
  imagealt2: '',
  tagline2: '',
  backgroundcolor2: '',
  textcolor2: '',
  link2: '',
  linktext2: '',
  buttonbackgroundcolor2: '',
  buttontextcolor2: '',
  logoimage2: '',
  logoimagealt2: '',
  logoheight2: '',
  position2: '',
  dataElementType2: '',
  dataPromotionName2: '',
  dataPromotionIndex2: '',

  // Slide 3
  positionNumber3: 3,
  image3: '',
  imagealt3: '',
  tagline3: '',
  backgroundcolor3: '',
  textcolor3: '',
  link3: '',
  linktext3: '',
  buttonbackgroundcolor3: '',
  buttontextcolor3: '',
  logoimage3: '',
  logoimagealt3: '',
  logoheight3: '',
  position3: '',
  dataElementType3: '',
  dataPromotionName3: '',
  dataPromotionIndex3: '',

  // Slide 4
  positionNumber4: 4,
  image4: '',
  imagealt4: '',
  tagline4: '',
  backgroundcolor4: '',
  textcolor4: '',
  link4: '',
  linktext4: '',
  buttonbackgroundcolor4: '',
  buttontextcolor4: '',
  logoimage4: '',
  logoimagealt4: '',
  logoheight4: '',
  position4: '',
  dataElementType4: '',
  dataPromotionName4: '',
  dataPromotionIndex4: '',

  // Slide 5
  positionNumber5: 5,
  image5: '',
  imagealt5: '',
  tagline5: '',
  backgroundcolor5: '',
  textcolor5: '',
  link5: '',
  linktext5: '',
  buttonbackgroundcolor5: '',
  buttontextcolor5: '',
  logoimage5: '',
  logoimagealt5: '',
  logoheight5: '',
  position5: '',
  dataElementType5: '',
  dataPromotionName5: '',
  dataPromotionIndex5: '',

  // Slide 6
  positionNumber6: 6,
  image6: '',
  imagealt6: '',
  tagline6: '',
  backgroundcolor6: '',
  textcolor6: '',
  link6: '',
  linktext6: '',
  buttonbackgroundcolor6: '',
  buttontextcolor6: '',
  logoimage6: '',
  logoimagealt6: '',
  logoheight6: '',
  position6: '',
  dataElementType6: '',
  dataPromotionName6: '',
  dataPromotionIndex6: '',

  // Slide 7
  positionNumber7: 7,
  image7: '',
  imagealt7: '',
  tagline7: '',
  backgroundcolor7: '',
  textcolor7: '',
  link7: '',
  linktext7: '',
  buttonbackgroundcolor7: '',
  buttontextcolor7: '',
  logoimage7: '',
  logoimagealt7: '',
  logoheight7: '',
  position7: '',
  dataElementType7: '',
  dataPromotionName7: '',
  dataPromotionIndex7: '',

  // Slide 8
  positionNumber8: 8,
  image8: '',
  imagealt8: '',
  tagline8: '',
  backgroundcolor8: '',
  textcolor8: '',
  link8: '',
  linktext8: '',
  buttonbackgroundcolor8: '',
  buttontextcolor8: '',
  logoimage8: '',
  logoimagealt8: '',
  logoheight8: '',
  position8: '',
  dataElementType8: '',
  dataPromotionName8: '',
  dataPromotionIndex8: '',

  // Slide 9
  positionNumber9: 9,
  image9: '',
  imagealt9: '',
  tagline9: '',
  backgroundcolor9: '',
  textcolor9: '',
  link9: '',
  linktext9: '',
  buttonbackgroundcolor9: '',
  buttontextcolor9: '',
  logoimage9: '',
  logoimagealt9: '',
  logoheight9: '',
  position9: '',
  dataElementType9: '',
  dataPromotionName9: '',
  dataPromotionIndex9: '',

  // Slide 10
  positionNumber10: 10,
  image10: '',
  imagealt10: '',
  tagline10: '',
  backgroundcolor10: '',
  textcolor10: '',
  link10: '',
  linktext10: '',
  buttonbackgroundcolor10: '',
  buttontextcolor10: '',
  logoimage10: '',
  logoimagealt10: '',
  logoheight10: '',
  position10: '',
  dataElementType10: '',
  dataPromotionName10: '',
  dataPromotionIndex10: '',
},

  render: function Render(args) {
  const [currentArgs, updateArgs] = useArgs();

  const isLoadingRef = useRef(false);       // prevents writing during load
  const lastUserRef = useRef(args.user);    // track selected user
  const lastSyncedData = useRef({});        // prevent write loops

  // -------------------------------------------------------
  // 1. LOAD DATA FROM SELECTED USER
  // -------------------------------------------------------
  useEffect(() => {
    const load = async () => {
      isLoadingRef.current = true;  // BLOCK updates
      lastUserRef.current = args.user;

      try {
        const docRef = doc(db, args.user, "podscarousel");
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const firestoreData = snap.data();
          lastSyncedData.current = firestoreData;

          // Replace storybook args with loaded data
          updateArgs({
            ...currentArgs,
            ...firestoreData,
            user: args.user,
          });
        }
      } catch (e) {
        console.error("Firestore load error:", e);
      }

      isLoadingRef.current = false; // allow updates again
    };

    load();
  }, [args.user]);


  // -------------------------------------------------------
  // 2. SYNC ONLY FIELD CHANGES (NOT USER CHANGE)
  // -------------------------------------------------------
  useEffect(() => {
    if (isLoadingRef.current) return; // Don't sync during load

    const selectedUser = lastUserRef.current;

    // Don't sync if this change is caused by selecting a new user
    if (currentArgs.user !== selectedUser) return;

    // Remove user field before writing
    const { user, ...fields } = currentArgs;

    // Prevent re-writing unchanged data
    const prevFields = lastSyncedData.current;
    const changed = Object.entries(fields).some(
      ([k, v]) => prevFields[k] !== v
    );
    if (!changed) return;

    lastSyncedData.current = fields;

    const send = async () => {
      try {
        const docRef = doc(db, selectedUser, "podscarousel");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
  
      return <PodsCarousel {...args} />;
    },
};
