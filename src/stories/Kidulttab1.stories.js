import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { KidultTab1 } from './Kidulttab1';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Tabs',
  component: KidultTab1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultTab1Content = {
  args: {
    roundal1image: '',
    roundal1alt: '',
    roundal1link: '',
    roundal1background: '',
    roundal2image: '',
    roundal2alt: '',
    roundal2link: '',
    roundal2background: '',
    roundal3image: '',
    roundal3alt: '',
    roundal3link: '',
    roundal3background: '',
    roundal4image: '',
    roundal4alt: '',
    roundal4link: '',
    roundal4background: '',
    roundal5image: '',
    roundal5alt: '',
    roundal5link: '',
    roundal5background: '',
    roundal6image: '',
    roundal6alt: '',
    roundal6link: '',
    roundal6background: '',
    roundal7image: '',
    roundal7alt: '',
    roundal7link: '',
    roundal7background: '',
    roundal8image: '',
    roundal8alt: '',
    roundal8link: '',
    roundal8background: '',
    roundal9image: '',
    roundal9alt: '',
    roundal9link: '',
    roundal9background: '',
    roundal10image: '',
    roundal10alt: '',
    roundal10link: '',
    roundal10background: '',
    roundal11image: '',
    roundal11alt: '',
    roundal11link: '',
    roundal11background: '',
    roundal12image: '',
    roundal12alt: '',
    roundal12link: '',
    roundal12background: '',
    roundal13image: '',
    roundal13alt: '',
    roundal13link: '',
    roundal13background: ''
  },
  render: function Render(args) {
            const [currentArgs, updateArgs] = useArgs();
            const hasLoadedFromFirestore = useRef(false);
        
            // --- Load all fields from Firestore once ---
            useEffect(() => {
              const loadFromFirebase = async () => {
                try {
                  const docRef = doc(db, 'stories', 'kidulttab1');
                  const snapshot = await getDoc(docRef);
        
                  if (snapshot.exists()) {
                    const data = snapshot.data();
        
                    // Merge data from Firestore into Storybook args
                    updateArgs({
                      ...args,
                      ...data,
                    });
                  } else {
                    console.warn('No such document: kidulttab1');
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
                const docRef = doc(db, 'stories', 'kidulttab1');
        
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
        
            return <KidultTab1 {...args} />;
          },
};