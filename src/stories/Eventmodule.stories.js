import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { EventModule } from './Eventmodule';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Event Module',
  component: EventModule,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EventModuleComponent = {
  args: {
    id: '',
    image: '',
    imagealt: '',
    title: '',
    buttontext: '',
    buttonlink: '',
    blurb: ``,
    row1date: '',
    row1location: '',
    row1locationlink: '',
    row1price: '',
    row2date: '',
    row2location: '',
    row2locationlink: '',
    row2price: '',
    row3date: '',
    row3location: '',
    row3locationlink: '',
    row3price: '',
    row4date: '',
    row4location: '',
    row4locationlink: '',
    row4price: '',
    row5date: '',
    row5location: '',
    row5locationlink: '',
    row5price: '',
    row6date: '',
    row6location: '',
    row6locationlink: '',
    row6price: '',
    row7date: '',
    row7location: '',
    row7locationlink: '',
    row7price: '',
    row8date: '',
    row8location: '',
    row8locationlink: '',
    row8price: '',
    row9date: '',
    row9location: '',
    row9locationlink: '',
    row9price: '',
    row10date: '',
    row10location: '',
    row10locationlink: '',
    row10price: '',
  },
  render: function Render(args) {
        const [currentArgs, updateArgs] = useArgs();
        const hasLoadedFromFirestore = useRef(false);
    
        // --- Load all fields from Firestore once ---
        useEffect(() => {
          const loadFromFirebase = async () => {
            try {
              const docRef = doc(db, 'stories', 'eventmodule');
              const snapshot = await getDoc(docRef);
    
              if (snapshot.exists()) {
                const data = snapshot.data();
    
                // Merge data from Firestore into Storybook args
                updateArgs({
                  ...args,
                  ...data,
                });
              } else {
                console.warn('No such document: eventmodule');
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
            const docRef = doc(db, 'stories', 'eventmodule');
    
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
    
        return <EventModule {...args} />;
      },
};
