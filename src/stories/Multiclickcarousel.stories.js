import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { MulticlickCarousel} from './Multiclickcarousel';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Multiclick Carousel Image Panels',
  component: MulticlickCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MulticlickCarouselImages = {
  args: {
    user: 'stories',
    image1: '',
    image1alt: '',
    image1link: '',
    image2: '',
    image2alt: '',
    image2link: '',
    image3: '',
    image3alt: '',
    image3link: '',
    image4: '',
    image4alt: '',
    image4link: '',
    image5: '',
    image5alt: '',
    image5link: '',
    image6: '',
    image6alt: '',
    image6link: '',
    image7: '',
    image7alt: '',
    image7link: '',
    image8: '',
    image8alt: '',
    image8link: '',
    image9: '',
    image9alt: '',
    image9link: '',
    image10: '',
    image10alt: '',
    image10link: '',
    image11: '',
    image11alt: '',
    image11link: '',
    image12: '',
    image12alt: '',
    image12link: '',
    background: '',
    titlecolor: '',
    textcolor: '',
    buttonbackground: '',
    buttontextcolor: '',
    title: '',
    blurb: '',
    buttontext: '',
    link: '',
    logo: '',
    logoalt: '',
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
        const docRef = doc(db, args.user, "multiclickcarousel");
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
        const docRef = doc(db, selectedUser, "multiclickcarousel");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
    
        return <MulticlickCarousel {...args} />;
      },
};
