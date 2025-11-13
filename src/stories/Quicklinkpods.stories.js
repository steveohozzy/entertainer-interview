import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { QuickLinksPods } from './Quicklinkpods';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Quick Links Pods',
  component: QuickLinksPods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const QuickLinksPodsContainer = {
  args: {
    bordercolor: '',
    buttontextcolor: '',
    buttonbackgroundcolor: '',
    pod1image: '',
    pod1alt: '',
    pod1link: '',
    pod1text: '',
    pod2image: '',
    pod2alt: '',
    pod2link: '',
    pod2text: '',
    pod3image: '',
    pod3alt: '',
    pod3link: '',
    pod3text: '',
    pod4image: '',
    pod4alt: '',
    pod4link: '',
    pod4text: '',
    pod5image: '',
    pod5alt: '',
    pod5link: '',
    pod5text: '',
    pod6image: '',
    pod6alt: '',
    pod6link: '',
    pod6text: '',
  },
  render: function Render(args) {
        const [currentArgs, updateArgs] = useArgs();
        const hasLoadedFromFirestore = useRef(false);
    
        // --- Load all fields from Firestore once ---
        useEffect(() => {
          const loadFromFirebase = async () => {
            try {
              const docRef = doc(db, 'stories', 'quicklinkpods');
              const snapshot = await getDoc(docRef);
    
              if (snapshot.exists()) {
                const data = snapshot.data();
    
                // Merge data from Firestore into Storybook args
                updateArgs({
                  ...args,
                  ...data,
                });
              } else {
                console.warn('No such document: quicklinkpods');
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
            const docRef = doc(db, 'stories', 'quicklinkpods');
    
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
    
        return <QuickLinksPods {...args} />;
      },
};
