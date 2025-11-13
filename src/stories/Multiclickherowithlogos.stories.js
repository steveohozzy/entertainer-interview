import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { Multiclickhero } from './Multiclickherowithlogos';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/Hero/Multi Click Hero',
  component: Multiclickhero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    background: {
      control: 'color',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MulticlickheroBanner = {
  args: {
    background: '',
    mobilelogosimage: '',
    desktoplogosimage: '',
    logosalt: '',
    heading: '',
    pod1image: '',
    pod2image: '',
    pod3image: '',
    pod4image: '',
    pod5image: '',
    pod6image: '',
    pod1alt: '',
    pod1link: '',
    pod2alt: '',
    pod2link: '',
    pod3alt: '',
    pod3link: '',
    pod4alt: '',
    pod4link: '',
    pod5alt: '',
    pod5link: '',
    pod6alt: '',
    pod6link: '',
    pod1text: '',
    pod2text: '',
    pod3text: '',
    pod4text: '',
    pod5text: '',
    pod6text: '',
    pod1datelementtype: '',
    pod1datapromotionindex: '',
    pod1datapromotionname: '',
    pod2datelementtype: '',
    pod2datapromotionindex: '',
    pod2datapromotionname: '',
    pod3datelementtype: '',
    pod3datapromotionindex: '',
    pod3datapromotionname: '',
    pod4datelementtype: '',
    pod4datapromotionindex: '',
    pod4datapromotionname: '',
    pod5datelementtype: '',
    pod5datapromotionindex: '',
    pod5datapromotionname: '',
    pod6datelementtype: '',
    pod6datapromotionindex: '',
    pod6datapromotionname: '',
  },
  render: function Render(args) {
      const [currentArgs, updateArgs] = useArgs();
      const hasLoadedFromFirestore = useRef(false);
  
      // --- Load all fields from Firestore once ---
      useEffect(() => {
        const loadFromFirebase = async () => {
          try {
            const docRef = doc(db, 'stories', 'multiclickhero');
            const snapshot = await getDoc(docRef);
  
            if (snapshot.exists()) {
              const data = snapshot.data();
  
              // Merge data from Firestore into Storybook args
              updateArgs({
                ...args,
                ...data,
              });
            } else {
              console.warn('No such document: multiclickhero');
            }
          } catch (err) {
            console.error('Error fetching from Firestore:', err);
          } finally {
            hasLoadedFromFirestore.current = true;
          }
        };
  
        loadFromFirebase();
      }, []);
  
      // --- Generic Firestore sync for all fields ---
      const syncAllArgsToFirebase = useCallback(async (newArgs) => {
        if (!hasLoadedFromFirestore.current) return; // skip before load
  
        try {
          const docRef = doc(db, 'stories', 'multiclickhero');
  
          // Clean values before saving
          const cleanedArgs = {};
          for (const [key, value] of Object.entries(newArgs)) {
            // Normalize empty values to empty strings
            cleanedArgs[key] = typeof value === 'string' && value.trim() === '' ? '' : value;
          }
  
          await updateDoc(docRef, cleanedArgs);
          console.log('✅ Firestore updated:', cleanedArgs);
        } catch (err) {
          console.error('Error updating Firestore:', err);
        }
      }, []);
  
      // --- Watch for *any* arg change and sync ---
      useEffect(() => {
        if (!hasLoadedFromFirestore.current) return;
        syncAllArgsToFirebase(currentArgs);
      }, [currentArgs, syncAllArgsToFirebase]);
  
      return <Multiclickhero {...args} />;
    },
};
