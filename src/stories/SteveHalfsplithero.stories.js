import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { SteveHalfsplithero } from './SteveHalfsplithero';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Steve Ideas/Halfsplithero',
  component: SteveHalfsplithero,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    background: {
      control: 'color',
    },
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

export const SteveHalfAndHalfHero = {
  args: {
    user: "stories",
    flipped: false,
    image: '',
    imagealt: '',
    videosrc: '',
    background: '',
    textColor: '#FFFFFF',
    logo: '',
    logoalt: '',
    headline: 'New Toniebox 2 with Tonieplay',
    tagline: 'Get ready for screen-free stories, songs and more!',
    link: 'https://www.thetoyshop.com/brands/tonies',
    linktext: 'Pre-order',
    linkTextColor: '#fff',
    linkTextColorHover: '#fff',
    linkBackground: '#009E44',
    linkBackgroundHover: '#AFCB17',
    linkBorderColor: '#DBE3FF',
    linkBorderColorHover: '#DBE3FF',
    termslink: 'https://www.thetoyshop.com/brands/tonies',
    termslinktext: 'terms and conditions',
    dataElementType: 'hp-hero-area',
    datapromotionindex: '3',
    datapromotionname: 'Hero-3-Huffy',
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
        const docRef = doc(db, args.user, "SteveHalfsplithero");
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
        const docRef = doc(db, selectedUser, "SteveHalfsplithero");

        await setDoc(docRef, fields, { merge: true });

        console.log("WRITTEN:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore write error:", e);
      }
    };

    send();
  }, [currentArgs]);


  return <SteveHalfsplithero {...currentArgs} />;
}


};
