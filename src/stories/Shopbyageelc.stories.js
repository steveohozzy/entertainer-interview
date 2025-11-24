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
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShopByAgeElcContainer = {
  args: {
    user: 'stories',
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
        const docRef = doc(db, args.user, "elcshopbyage");
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
        const docRef = doc(db, selectedUser, "elcshopbyage");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
    
        return <ShopByAgeElc {...args} />;
      },
};
