import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { GamingHubHero } from './Gaminghubhero';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Gaming Hub/Hero',
  component: GamingHubHero,
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

export const GamingHubHeroSection = {
  args: {
    user: 'stories',
    title: 'Gaming',
    desktopBanner: 'https://www.thetoyshop.com/medias/Gaming-Hub-Digital-Assets-V3-DT-Header-900x120px.jpg?context=bWFzdGVyfHJvb3R8OTk2MTh8aW1hZ2UvanBlZ3xhR05pTDJoak15OHhNamMzTlRFMU1URTBNRGc1TkM5SFlXMXBibWNnU0hWaUlFUnBaMmwwWVd3Z1FYTnpaWFJ6SUMwZ1ZqTmZSRlFnU0dWaFpHVnlYemt3TUhneE1qQndlQzVxY0djfDBlMjE5ZDMwYjBjMzQ2NmEwMmE2NzU4ZDdkNTNlNTA3NDg3YjgzODJhYzQzNTkwMjkyY2ZhYmY2MWRiYmYxYzA',
    desktopBannerAlt: 'sign up image desktop',    
    mobileBanner: 'https://www.thetoyshop.com/medias/Gaming-Hub-Digital-Assets-V3-Email-Secondary-600px.jpg?context=bWFzdGVyfHJvb3R8MzIwMjI4fGltYWdlL2pwZWd8YURFeUwyZzRNaTh4TWpjM016QXdOVGsxTVRBd05pOUhZVzFwYm1jZ1NIVmlJRVJwWjJsMFlXd2dRWE56WlhSeklDMGdWak5mUlcxaGFXeGZVMlZqYjI1a1lYSjVYell3TUhCNExtcHdad3w1ZjdiYmMyOWE1Mjc3ZGVmMDhlZGVhNmJmZjRjNmVlZTkwNWVhNzNjNmUyYzY5MDY2YTdmNDBmZjcyZWQ0MjBl',
    mobileBannerAlt: 'sign up image mobile',
    bannerLink: 'https://www.thetoyshop.com/be-in-the-know-with-the-entertainer',
    introText: 'Welcome to our gaming hub where we have everything from the latest generation of consoles to retro machines filled with nostalgia. Whether its family friendly titles from Nintendo, action and adventure with PlayStation or the hottest hits from Xbox, we’ve got you covered. Explore games, headsets, controllers, accessories and more, including gifts and merch, chairs, and the latest releases. Find your fandom, fire up your chosen machine, and jump head-first into the action.',
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
          const docRef = doc(db, args.user, "GamingHubHero");
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
          const docRef = doc(db, selectedUser, "GamingHubHero");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <GamingHubHero {...args} />;
  },
};