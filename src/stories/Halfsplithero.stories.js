import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { HalfSplitHero } from './Halfsplithero';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Home/Hero/Half Split Hero',
  component: HalfSplitHero,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    background: {
      control: 'color',
    },
  },
};

export const HalfAndHalfHero = {
  args: {
    image: '',
    imagealt: '',
    videosrc: '',
    background: '',
    textColor: '#FFFFFF',
    headline: 'New Toniebox 2 with Tonieplay',
    tagline: 'Get ready for screen-free stories, songs and more!',
    link: 'https://www.thetoyshop.com/brands/tonies',
    linktext: 'Pre-order',
    dataElementType: 'hp-hero-area',
    datapromotionindex: '3',
    datapromotionname: 'Hero-3-Huffy',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();
    const hasLoadedFromFirestore = useRef(false);

    // --- Load all fields from Firestore once ---
    useEffect(() => {
      const loadFromFirebase = async () => {
        try {
          const docRef = doc(db, 'stories', 'halfsplithero');
          const snapshot = await getDoc(docRef);

          if (snapshot.exists()) {
            const data = snapshot.data();

            // Merge data from Firestore into Storybook args
            updateArgs({
              ...args,
              ...data,
            });
          } else {
            console.warn('No such document: halfsplithero');
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
        const docRef = doc(db, 'stories', 'halfsplithero');

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

    return <HalfSplitHero {...args} />;
  },
};
