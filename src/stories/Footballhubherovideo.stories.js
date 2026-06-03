import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { FootballHubVideoHero } from './Footballhubherovideo';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Football Hub/Video Hero',
  component: FootballHubVideoHero,
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

export const FootballHubVideoHeroSection = {
  args: {
    user: 'stories',
    video: 'https://www.thetoyshop.com/medias/LEGO-World-Cup-2026-Edit.mp4?context=bWFzdGVyfHJvb3R8Mjk5MDA3NXx2aWRlby9tcDR8YURsaEwyZzBOQzh4TWpjek9UWTROVGswTVRJM09DOU1SVWRQWDFkdmNteGtYME4xY0Y4eU1ESTJYMFZrYVhRdWJYQTB8MjNlMjA4NGJiNjZiOGZmNTlmNWFkNjBiMWMzZDEwYTgxNGEyNDQ4NzA0MjcxZmFiYjFiMjdiNTc3MTNjZjI5NA',
    title: 'New LEGO Editions Sets launched',
    link: 'https://www.thetoyshop.com/c/world-cup?brands=LEGO%20Sets%20%26%20Bricks',
    buttonText: 'Shop Now',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → FootballHubVideoHero DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "FootballHubVideoHero");
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
          const docRef = doc(db, selectedUser, "FootballHubVideoHero");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <FootballHubVideoHero {...args} />;
  },
};