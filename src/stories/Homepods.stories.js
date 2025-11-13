import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { HomePods} from './Homepods';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/Home Pods',
  component: HomePods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HomePodsContianer = {
  args: {
    textcolor: '',
    backgroundcolor: '',
    bordercolor: '',
    linkhovercolor: '',
    pod1isblog: false,
    pod1image: '',
    pod1alt: '',
    pod1title: '',
    pod1text: '',
    pod1buttontext: '',
    pod1link: '',
    pod1dataelementtype: '',
    pod1datapromotionindex: '',
    pod1datapromotionname: '',
    pod2isblog: true,
    pod2image: '',
    pod2alt: '',
    pod2title: '',
    pod2text: '',
    pod2buttontext: '',
    pod2link: '',
    pod2dataelementtype: '',
    pod2datapromotionindex: '',
    pod2datapromotionname: '',
  },

  render: function Render(args) {
        const [currentArgs, updateArgs] = useArgs();
        const hasLoadedFromFirestore = useRef(false);
    
        // --- Load all fields from Firestore once ---
        useEffect(() => {
          const loadFromFirebase = async () => {
            try {
              const docRef = doc(db, 'stories', 'homepods');
              const snapshot = await getDoc(docRef);
    
              if (snapshot.exists()) {
                const data = snapshot.data();
    
                // Merge data from Firestore into Storybook args
                updateArgs({
                  ...args,
                  ...data,
                });
              } else {
                console.warn('No such document: homepods');
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
            const docRef = doc(db, 'stories', 'homepods');
    
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
    
        return <HomePods {...args} />;
      },
};
