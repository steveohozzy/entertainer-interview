import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { FootballHubModulesrow2 } from './Footballhubmodulesrow2';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Football Hub/Story Modules Row 2',
  component: FootballHubModulesrow2,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },

    panel1buttonIcon: {
      options: ['basket', 'glasses', 'football', 'pencil'],
      control: {
        type: 'radio',
      },
    },

    panel2buttonIcon: {
      options: ['basket', 'glasses', 'football', 'pencil'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const FootballHubModulesrow2Section = {
  args: {
    user: 'stories',
    panel1video: 'https://www.thetoyshop.com/medias/screen-capture-2-.mp4?context=bWFzdGVyfHJvb3R8Njk5MjU1fHZpZGVvL3F1aWNrdGltZXxhR0ppTDJnd1pDOHhNamN4T1RVME16QXlOVFk1TkM5elkzSmxaVzR0WTJGd2RIVnlaU0FvTWlrdWJYQTB8ZjFjYjA1ZjZhMGE5ZjdlY2NhYWQ3NTU5NThjY2Q2OTEwZTExZDM5ZjZiMzRmZTliNzA4MjkzYTZjYjAzNDg5NQ',
    panel1image: '',
    panel1imagealt: 'Sockers Football Figures',
    panel1link: 'https://www.thetoyshop.com/penalty-game',
    panel1buttontext: 'Play Our Game',
    panel1buttonIcon: 'basket',
    panel2video: '',
    panel2image: 'https://www.thetoyshop.com/medias/Football-Hub-Digital-Assets-V4-Story-mod-Comp-560x318px.jpg?context=bWFzdGVyfHJvb3R8MjM3NjIzfGltYWdlL2pwZWd8YUdNeEwyZ3pNUzh4TWpjM05UWXdORFkxTURBeE5DOUdiMjkwWW1Gc2JDQklkV0lnUkdsbmFYUmhiQ0JCYzNObGRITmZWalJmVTNSdmNua2diVzlrWDBOdmJYQmZOVFl3ZURNeE9IQjRMbXB3Wnd8NWVmZjZkYmE2ZjVhMmM5NjYxYmM3NTVhZTdkZmRmNGJmNTRiYTQ2YjczZjM3ODg0OGI4NWRiMjhjMzA3M2Y5MA',
    panel2imagealt: 'Comp Image',
    panel2link: 'https://www.thetoyshop.com/football-hub-comp-download',
    panel2buttontext: 'Enter Our Colouring Competition to WIN',
    panel2buttonIcon: 'basket',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → FootballHubModulesrow2 DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "FootballHubModulesrow2");
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
          const docRef = doc(db, selectedUser, "FootballHubModulesrow2");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <FootballHubModulesrow2 {...args} />;
  },
};