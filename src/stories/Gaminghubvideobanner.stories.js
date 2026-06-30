import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { GamingHubVideoBanner } from './Gaminghubvideobanner';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Gaming Hub/Video Banner',
  component: GamingHubVideoBanner,
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

export const GamingHubVideoBannerSection = {
  args: {
    user: 'stories',
    link: 'https://www.thetoyshop.com/search?text=EA%20SPORTS%20FC26',
    video: 'https://www.thetoyshop.com/medias/FC26-WC-RETAIL-CUSTOM-NoSubs-EditGlobal-1080p-16x9-29-97fps-30s-ENG-GB-1-1-.mp4?context=bWFzdGVyfHJvb3R8OTk0OTM1OXx2aWRlby9xdWlja3RpbWV8YUdZekwyZzBaaTh4TWpjNE5qYzVOVEU0TkRFMU9DOUdRekkyWDFkRFgxSkZWRUZKVEY5RFZWTlVUMDB0VG05VGRXSnpMVVZrYVhSSGJHOWlZV3hmTVRBNE1IQmZNVFo0T1Y4eU9TMDVOMlp3YzE4ek1ITmZSVTVIWDBkQ0lDZ3hLU0FvTVNrdWJYQTB8MDcwN2NiMjJjMGI1ZTc5MGMzOWJiMzMyNjNiM2U5NDMzZDY5OTczM2E3ZGI4Yjk3ZmVjNTk4NzdiZGUzYjNlMg',
    image: '',
    imagealt: '',
    buttontext: 'Shop EA SPORTS FC26 Game Now',
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
          const docRef = doc(db, args.user, "GamingHubVideoBanner");
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
          const docRef = doc(db, selectedUser, "GamingHubVideoBanner");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <GamingHubVideoBanner {...args} />;
  },
};