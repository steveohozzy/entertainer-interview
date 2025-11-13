import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { ShopByAgeElc } from './Shopbyageelc';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/Shop By Age',
  component: ShopByAgeElc,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShopByAgeElcContainer = {
  args: {
    item1age: '',
    item1textunderage: '',
    item1link: '',
    item1dataelementtype: '',
    item1datapromotionindex: '',
    item1datapromotionname: '',
    item2age: '',
    item2textunderage: '',
    item2link: '',
    item2dataelementtype: '',
    item2datapromotionindex: '',
    item2datapromotionname: '',
    item3age: '',
    item3textunderage: '',
    item3link: '',
    item3dataelementtype: '',
    item3datapromotionindex: '',
    item3datapromotionname: '',
    item4age: '',
    item4textunderage: '',
    item4link: '',
    item4dataelementtype: '',
    item4datapromotionindex: '',
    item4datapromotionname: '',
    item5age: '',
    item5textunderage: '',
    item5link: '',
    item5dataelementtype: '',
    item5datapromotionindex: '',
    item5datapromotionname: '',
    item6age: '',
    item6textunderage: '',
    item6link: '',
    item6dataelementtype: '',
    item6datapromotionindex: '',
    item6datapromotionname: '',
  },
  render: function Render(args) {
        const [currentArgs, updateArgs] = useArgs();
        const hasLoadedFromFirestore = useRef(false);
    
        // --- Load all fields from Firestore once ---
        useEffect(() => {
          const loadFromFirebase = async () => {
            try {
              const docRef = doc(db, 'stories', 'elcshopbyage');
              const snapshot = await getDoc(docRef);
    
              if (snapshot.exists()) {
                const data = snapshot.data();
    
                // Merge data from Firestore into Storybook args
                updateArgs({
                  ...args,
                  ...data,
                });
              } else {
                console.warn('No such document: elcshopbyage');
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
            const docRef = doc(db, 'stories', 'elcshopbyage');
    
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
    
        return <ShopByAgeElc {...args} />;
      },
};
