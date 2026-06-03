import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { GamingHubSplitHero } from './Gaminghubsplithero';
import { useArgs } from 'storybook/preview-api';
import { background } from 'storybook/internal/theming';

export default {
  title: 'Gaming Hub/Split Hero',
  component: GamingHubSplitHero,
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

export const GamingHubSplitHeroSection = {
  args: {
    user: 'stories',
    title: 'LEGO Batman Legacy of The Dark Knight',
    link: 'https://www.thetoyshop.com/search?text=LEGO%20Batman%20Legacy%20of%20The%20Dark%20Knight',
    image: 'https://www.thetoyshop.com/medias/edited-photo-49-.png?context=bWFzdGVyfHJvb3R8MzQ3NDgxfGltYWdlL3BuZ3xhREl6TDJnNE5TOHhNamMzTXpBd05UZzROVFEzTUM5bFpHbDBaV1F0Y0dodmRHOGdLRFE1S1M1d2JtY3wxNmJkYTc2YTg2ZjQ4Zjg0NjdhZDE0ZDAyMzg3NzZlODE0YTM0MTA3ODc4OTFhMDc0ZTljYjMxMDcwNDIxNjE4',
    imagealt: 'LEGO Batman Legacy of The Dark Knight',
    buttontext: 'Pre-Order Now',
    background: 'linear-gradient(180deg,        rgba(200, 200, 200, 0.9) 0%, rgba(180, 180, 180, 0.95) 50%, rgba(160, 160, 160, 1) 100%);',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → GamingHubHero DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "GamingHubSplitHero");
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
          const docRef = doc(db, selectedUser, "GamingHubSplitHero");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <GamingHubSplitHero {...args} />;
  },
};