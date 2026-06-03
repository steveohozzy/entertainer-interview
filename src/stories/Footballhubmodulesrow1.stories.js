import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { FootballHubModulesRow1 } from './Footballhubmodulesrow1';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Football Hub/Story Modules Row 1',
  component: FootballHubModulesRow1,
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

export const FootballHubModulesRow1Section = {
  args: {
    user: 'stories',
    panel1video: 'https://www.thetoyshop.com/medias/Sockers-football-figures-vid-content.mp4?context=bWFzdGVyfHJvb3R8NDA5NzUxMXx2aWRlby9tcDR8YUdZekwyZzRaQzh4TWpjek1qQXhOemd6TmpBMk1pOVRiMk5yWlhKekxXWnZiM1JpWVd4c0xXWnBaM1Z5WlhNdGRtbGtMV052Ym5SbGJuUXViWEEwfDRkY2RlMjgwNjQ1NDQ0ODcyYjFmNDc4ODBhNjJlODA0ZDlmOThkMzM4YjI1ZWMwNDdhMDZjMTRmNjFiNDJhZWE',
    panel1image: '',
    panel1imagealt: 'Sockers Football Figures',
    panel1title: 'Sockers Football Figures',
    panel1link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/display-figures?categories=Football%20Collectibles',
    panel1buttontext: 'Shop Now',
    panel2video: '',
    panel2image: 'https://www.thetoyshop.com/medias/Blog-image.png?context=bWFzdGVyfHJvb3R8Mjg3Mjg4fGltYWdlL3BuZ3xhRFF5TDJnek9TOHhNamN4T1RVek9UUTFNems0TWk5Q2JHOW5JR2x0WVdkbExuQnVad3w1YzJlNmMwZmIzMjU5M2RiMDc1OTc0N2RlNmYyOTU5YTBmOTQ3MjFlOTJhMDIwNjkwMThiYTdmMzhjYmQxNWJh',
    panel2imagealt: 'Football Fever is Here!',
    panel2title: 'Football Fever is Here!',
    panel2link: 'https://www.thetoyshop.com/childhood-adventures/football-fever-is-here',
    panel2buttontext: 'Read',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → FootballHubModulesRow1 DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "FootballHubModulesRow1");
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
          const docRef = doc(db, selectedUser, "FootballHubModulesRow1");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <FootballHubModulesRow1 {...args} />;
  },
};