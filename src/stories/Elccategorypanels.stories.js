import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { CategoryPanels } from './Elccategorypanels';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'ELC/Category Panels',
  component: CategoryPanels,
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

export const CategoryPanelsHero = {
  args: {
    user: 'stories',
    panel1image: '',
    panel1imagealt: '',
    panel1title: '',
    panel1link: '',
    panel2image: '',
    panel2imagealt: '',
    pane21title: '',
    panel2link: '',
    panel3image: '',
    panel3imagealt: '',
    pane31title: '',
    panel3link: '',
    panel4image: '',
    panel4imagealt: '',
    pane41title: '',
    panel4link: '',
    panel5image: '',
    panel5imagealt: '',
    pane51title: '',
    panel5link: '',
    panel6image: '',
    panel6imagealt: '',
    pane61title: '',
    panel6link: '',
    panel7image: '',
    panel7imagealt: '',
    pane71title: '',
    panel7link: '',
    panel8image: '',
    panel8imagealt: '',
    pane81title: '',
    panel8link: '',
    panel9image: '',
    panel9imagealt: '',
    pane91title: '',
    panel9link: '',
    panel10image: '',
    panel10imagealt: '',
    pane101title: '',
    panel10link: '',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → CategoryPanels DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "CategoryPanels");
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
          const docRef = doc(db, selectedUser, "CategoryPanels");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <CategoryPanels {...args} />;
  },
};