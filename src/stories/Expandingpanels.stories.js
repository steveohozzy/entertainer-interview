import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { ExpandingPanels } from './Expandingpanels';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'ELC/Expanding Panels',
  component: ExpandingPanels,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

export const ExpandingPanelsHero = {
  args: {
    user: 'stories',
    panel1image1: '',
    panel1imagealt1: '',
    panel1image2: '',
    panel1imagealt2: '',
    panel1image3: '',
    panel1imagealt3: '',
    panel1image4: '',
    panel1imagealt4: '',
    panel1image5: '',
    panel1imagealt5: '',
    panel1title: '',
    panel1blurb: '',
    panel1buttontext: '',
    panel1link: '',
    panel2image1: '',
    panel2imagealt1: '',
    panel2expandedimage: '',
    panel2iexpandedimagealt: '',
    panel2title: '',
    panel2blurb: '',
    panel2buttontext: '',
    panel2link: '',
    panel3image1: '',
    panel3imagealt1: '',
    panel3expandedimage: '',
    panel3iexpandedimagealt: '',
    panel3title: '',
    panel3blurb: '',
    panel3buttontext: '',
    panel3link: '',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → ExpandingPanels DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "ExpandingPanels");
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const firestoreData = snap.data();
            lastSyncedData.current = firestoreData;

            updateArgs({
              ...currentArgs,
              ...firestoreData,
              user: args.user,
            });
          }
        } catch (e) {
          console.error("Firestore load error:", e);
        }

        isLoadingRef.current = false;
      };

      load();
    }, [args.user]);

    // -------------------------------------------------------
    // SAVE TO FIREBASE (FULL OVERWRITE)
    // -------------------------------------------------------
    useEffect(() => {
      if (isLoadingRef.current) return;

      const selectedUser = lastUserRef.current;
      if (currentArgs.user !== selectedUser) return;

      const { user, ...fields } = currentArgs;

      const prevFields = lastSyncedData.current;

      const changed = Object.entries(fields).some(
        ([k, v]) => prevFields[k] !== v
      );

      if (!changed) return;

      lastSyncedData.current = fields;

      const send = async () => {
        try {
          const docRef = doc(db, selectedUser, "ExpandingPanels");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <ExpandingPanels {...args} />;
  },
};