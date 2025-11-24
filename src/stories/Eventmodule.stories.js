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
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EventModuleComponent = {
  args: {
    user: 'stories',
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
        const docRef = doc(db, args.user, "eventmodule");
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
        const docRef = doc(db, selectedUser, "eventmodule");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
    
        return <EventModule {...args} />;
      },
};
