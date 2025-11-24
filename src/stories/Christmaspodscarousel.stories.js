import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { ChristmasPodsCarousel } from './Christmaspodscarousel';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Christmas/Pods',
  component: ChristmasPodsCarousel,
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
export const ChristmasPodsCarouselSection = {
  args: {
    user: 'stories',
    pod1image: '',
    pod1alt: '',
    pod1link: '',
    pod2image: '',
    pod2alt: '',
    pod2link: '',
    pod3image: '',
    pod3alt: '',
    pod3link: '',
    pod4image: '',
    pod4alt: '',
    pod4link: '',
    pod5image: '',
    pod5alt: '',
    pod5link: '',
    pod6image: '',
    pod6alt: '',
    pod6link: '',
    pod1dataelementtype: '',
    pod1datapromotionname: '',
    pod1datapromotionindex: '',
    pod2dataelementtype: '',
    pod2datapromotionname: '',
    pod2datapromotionindex: '',
    pod3dataelementtype: '',
    pod3datapromotionname: '',
    pod3datapromotionindex: '',
    pod4dataelementtype: '',
    pod4datapromotionname: '',
    pod4datapromotionindex: '',
    pod5dataelementtype: '',
    pod5datapromotionname: '',
    pod5datapromotionindex: '',
    pod6dataelementtype: '',
    pod6datapromotionname: '',
    pod6datapromotionindex: '',
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
        const docRef = doc(db, args.user, "christmaspodscarousel");
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
        const docRef = doc(db, selectedUser, "christmaspodscarousel");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
      
          return <ChristmasPodsCarousel {...args} />;
        },
};
