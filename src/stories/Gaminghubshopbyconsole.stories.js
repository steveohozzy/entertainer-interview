import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { GamingHubShopByConsole } from './Gaminghubshopbyconsole';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Gaming Hub/Shop By Console',
  component: GamingHubShopByConsole,
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

export const GamingHubShopByConsoleSection = {
  args: {
    user: 'stories',
    title: 'Shop By Console',
    logo1image: 'https://www.thetoyshop.com/medias/playstaion-logo.svg?context=bWFzdGVyfHJvb3R8OTI2fGltYWdlL3N2Zyt4bWx8YURNMUwyZ3pOaTh4TWpZek5ESTVOREUxTnpNME1pOXdiR0Y1YzNSaGFXOXVMV3h2WjI4dWMzWm58NTQ2ZjY3YTczMzY1MmVjMDkzYzAzMDBhN2JhNjljMTE1ZTE0NzI4ODZlNTJkNWU5ZmVkNTgwNDg0MTczODMwMg',
    logo1imagealt: 'Playatation',    
    logo1link: 'https://www.thetoyshop.com/brands/sony-playstation',
    logo1background: '#0070D1',
    logo2image: 'https://www.thetoyshop.com/medias/nintendo.svg?context=bWFzdGVyfHJvb3R8NDUzNHxpbWFnZS9zdmcreG1sfGFERmtMMmd3TXk4eE1qWXlNVFk0TnpNMU56UTNNQzl1YVc1MFpXNWtieTV6ZG1jfDdmNDY4MDNkZGViMzNlYzA5ODIxMWJiOGViODk2ZGIwODYwNGVjMjA1NzgyMGI1MGY2NWY0MjA5OGU5OGE0ODk',
    logo2imagealt: 'Nintendo',
    logo2link: 'https://www.thetoyshop.com/brands/nintendo',
    logo2background: '#E60012',
    logo3image: 'https://www.thetoyshop.com/medias/RW4ESm.png?context=bWFzdGVyfHJvb3R8MTAyODF8aW1hZ2UvcG5nfGFHUTBMMmd3WVM4eE1qY3hPREk0TXpNMU9ESXpPQzlTVnpSRlUyMHVjRzVufDg1NDZjYTI1MTZkNjU3ZDg3NTg2YjExM2MwOWIzMGNmY2YwZDRjYzcxNWZiYmM5MTY4MTllMDUxMTY3YzFkYTY',
    logo3imagealt: 'Xbox',
    logo3link: 'https://www.thetoyshop.com/brands/xbox',
    logo3background: '#107C10',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → GamingHubShopByConsole DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "GamingHubShopByConsole");
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
          const docRef = doc(db, selectedUser, "GamingHubShopByConsole");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <GamingHubShopByConsole {...args} />;
  },
};