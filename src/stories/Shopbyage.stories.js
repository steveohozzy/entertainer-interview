import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { ShopByAge } from './Shopbyage';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/Shop By Age',
  component: ShopByAge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShopByAgeRoundals = {
  args: {
    images: false,
    roundal1image: '',
    roundal1background: '',
    roundal1color: '',
    roundal1alt: '',
    roundal1age: '',
    roundal1textunderage: '',
    roundal1link: '',
    roundal2image: '',
    roundal2background: '',
    roundal2color: '',
    roundal2alt: '',
    roundal2age: '',
    roundal2textunderage: '',
    roundal2link: '',
    roundal3image: '',
    roundal3background: '',
    roundal3color: '',
    roundal3alt: '',
    roundal3age: '',
    roundal3textunderage: '',
    roundal3link: '',
    roundal4image: '',
    roundal4background: '',
    roundal4color: '',
    roundal4alt: '',
    roundal4age: '',
    roundal4textunderage: '',
    roundal4link: '',
    roundal5image: '',
    roundal5background: '',
    roundal5color: '',
    roundal5alt: '',
    roundal5age: '',
    roundal5textunderage: '',
    roundal5link: '',
    roundal6image: '',
    roundal6background: '',
    roundal6color: '',
    roundal6alt: '',
    roundal6age: '',
    roundal6textunderage: '',
    roundal6link: '',
    rounbdal1dataelementtype: '',
    rounbdal1datapromotionindex: '',
    roundal1datapromotionname: '',
    roundal2dataelementtype: '',
    roundal2datapromotionindex: '',
    roundal2datapromotionname: '',
    roundal3dataelementtype: '',
    roundal3datapromotionindex: '',
    roundal3datapromotionname: '',
    roundal4dataelementtype: '',
    roundal4datapromotionindex: '',
    roundal4datapromotionname: '',
    roundal5dataelementtype: '',
    roundal5datapromotionindex: '',
    roundal5datapromotionname: '',
    roundal6dataelementtype: '',
    roundal6datapromotionindex: '',
    roundal6datapromotionname: '',
  },
  render: function Render(args) {
        const [currentArgs, updateArgs] = useArgs();
        const hasLoadedFromFirestore = useRef(false);
    
        // --- Load all fields from Firestore once ---
        useEffect(() => {
          const loadFromFirebase = async () => {
            try {
              const docRef = doc(db, 'stories', 'shopbyage');
              const snapshot = await getDoc(docRef);
    
              if (snapshot.exists()) {
                const data = snapshot.data();
    
                // Merge data from Firestore into Storybook args
                updateArgs({
                  ...args,
                  ...data,
                });
              } else {
                console.warn('No such document: shopbyage');
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
            const docRef = doc(db, 'stories', 'shopbyage');
    
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
    
        return <ShopByAge {...args} />;
      },
};
