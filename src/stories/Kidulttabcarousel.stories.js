import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { KidultCarousel } from './Kidulttabcarousel';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Carousel',
  component: KidultCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultCarouselContent = {
  args: {
    user: 'stories',
    carouseltitle: '',
    roundal1image: '',
    roundal1alt: '',
    roundal1link: '',
    roundal1buttontext: '',
    roundal2image: '',
    roundal2alt: '',
    roundal2link: '',
    roundal2buttontext: '',
    roundal3image: '',
    roundal3alt: '',
    roundal3link: '',
    roundal3buttontext: '',
    roundal4image: '',
    roundal4alt: '',
    roundal4link: '',
    roundal4buttontext: '',
    roundal5image: '',
    roundal5alt: '',
    roundal5link: '',
    roundal5buttontext: '',
    roundal6image: '',
    roundal6alt: '',
    roundal6link: '',
    roundal6buttontext: '',
    roundal7image: '',
    roundal7alt: '',
    roundal7link: '',
    roundal7buttontext: '',
    roundal8image: '',
    roundal8alt: '',
    roundal8link: '',
    roundal8buttontext: '',
    roundal9image: '',
    roundal9alt: '',
    roundal9link: '',
    roundal9buttontext: '',
    roundal10image: '',
    roundal10alt: '',
    roundal10link: '',
    roundal10buttontext: '',
    roundal11image: '',
    roundal11alt: '',
    roundal11link: '',
    roundal11buttontext: '',
    roundal12image: '',
    roundal12alt: '',
    roundal12link: '',
    roundal12buttontext: '',
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
        const docRef = doc(db, args.user, "kidultcarousel");
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
        const docRef = doc(db, selectedUser, "kidultcarousel");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
              
                  return <KidultCarousel {...args} />;
                },
};