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
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShopByAgeRoundals = {
  args: {
    user: 'stories',
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
        const docRef = doc(db, args.user, "shopbyage");
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
        const docRef = doc(db, selectedUser, "shopbyage");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
    
        return <ShopByAge {...args} />;
      },
};
