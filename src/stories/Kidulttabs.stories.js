import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { KidultTabs } from './Kidulttabs';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Tabs',
  component: KidultTabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultTabsContainer = {
  args:{
    tabareatitle:'',
    tab1title:'',
    tab2title:'',
    tab3title:'',
    tab4title:'',
    tab1content:``,
    tab2content:"",
    tab3content:'',
    tab4content:'',
  },
  render: function Render(args) {
                  const [currentArgs, updateArgs] = useArgs();
                  const hasLoadedFromFirestore = useRef(false);
              
                  // --- Load all fields from Firestore once ---
                  useEffect(() => {
                    const loadFromFirebase = async () => {
                      try {
                        const docRef = doc(db, 'stories', 'kidulttabs');
                        const snapshot = await getDoc(docRef);
              
                        if (snapshot.exists()) {
                          const data = snapshot.data();
              
                          // Merge data from Firestore into Storybook args
                          updateArgs({
                            ...args,
                            ...data,
                          });
                        } else {
                          console.warn('No such document: kidulttabs');
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
                      const docRef = doc(db, 'stories', 'kidulttabs');
              
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
              
                  return <KidultTabs {...args} />;
                },
};
