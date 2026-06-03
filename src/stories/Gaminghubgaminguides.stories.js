import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { GaminghubGamingGuides } from './Gaminghubgamingguides';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Gaming Hub/Gaming Guides',
  component: GaminghubGamingGuides,
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

export const GaminghubGamingGuidesContent = {
  args: {
    user: 'stories',
    title: 'Gaming Guides',
    panel1image: 'https://www.thetoyshop.com/medias/300Wx300H-580440-Primary?context=bWFzdGVyfGltYWdlc3w3Mzg5N3xpbWFnZS9qcGVnfGFHVTNMMmd6T0M4eE1qWXhPRFkxTnpVNU5UUXlNaTh6TURCWGVETXdNRWhmTlRnd05EUXdYMUJ5YVcxaGNua3xjMWVlY2NlNGZkY2Q1Y2EzMTkwM2Y5YThhNzM3NzM3ZTlmODM0OTIwNTQ3N2Y0MGZkYjA1MWVhYWY2ZGE5NWQ2',
    panel1imagealt: 'Nintendo Switch 2 Mario Kart World Deluxe Travel Case',
    panel1title: 'Nintendo Switch 2 Mario Kart World Deluxe Travel Case',
    panel1link: 'https://www.thetoyshop.com/online-only/Nintendo-Switch-2-Mario-Kart-World-Deluxe-Travel-Case/p/580440',
    panel2image: 'https://www.thetoyshop.com/medias/300Wx300H-581558-581558-3.jpg?context=bWFzdGVyfGltYWdlc3w4ODIwOXxpbWFnZS9qcGVnfGFHRTVMMmcyT1M4eE1qY3hNekl4TnpVeU16YzBNaTh6TURCWGVETXdNRWhmTlRneE5UVTRYelU0TVRVMU9DMHpMbXB3Wnd8N2NiMGExZmY0NmJjN2RkN2M4YzBhYTc2NTQyNGVkZjlhNWJlMDZlODU4M2I4M2ExNjcxYmJlYzNiNWE3ZDUzZQ',
    panel2imagealt: 'DC Batman Desk Pad and Coaster Set',
    pane21title: 'DC Batman Desk Pad and Coaster Set',
    panel2link: 'https://www.thetoyshop.com/online-only/DC-Batman-Desk-Pad-and-Coaster-Set/p/581558',
    panel3image: 'https://www.thetoyshop.com/medias/300Wx300H-583611-583611-5.jpg?context=bWFzdGVyfGltYWdlc3w0NjEyOHxpbWFnZS9qcGVnfGFEUTNMMmd6TWk4eE1qWTVORFkwTmpNMU9EQTBOaTh6TURCWGVETXdNRWhmTlRnek5qRXhYelU0TXpZeE1TMDFMbXB3Wnd8ZThkNWU1ZTIzN2ZkNjYxM2JmYjA4Yzk2MTk4MWM4OGMxNTM0YjVmMTFjMGVkYzExM2FlZDU2YTM3ZTI0YmQ0OQ',
    panel3imagealt: 'Numskull Minecraft Creeper Gaming Locker',
    pane31title: 'Numskull Minecraft Creeper Gaming Locker',
    panel3link: 'https://www.thetoyshop.com/online-only/Numskull-Minecraft-Creeper-Gaming-Locker/p/583611',
    panel4image: 'https://www.thetoyshop.com/medias/300Wx300H-583602-Primary?context=bWFzdGVyfGltYWdlc3wzMjA5NnxpbWFnZS9qcGVnfGFERTNMMmd3Tmk4eE1qY3dNVGN5TnpRMU56TXhNQzh6TURCWGVETXdNRWhmTlRnek5qQXlYMUJ5YVcxaGNua3w4YWRkMDk0NThiNDM5MjY2Mzg0MDIwZTdhYWY3MTI1ZDQ3ZmJkN2VjZmQxYzU3ZWUwNmZkYTdmNjM0YmQ1YjQz',
    panel4imagealt: 'Maxx Tech 4In1 Combo Kit Gaming Bundle with Men of War PC Game Download Code',
    pane41title: 'Maxx Tech 4In1 Combo Kit Gaming Bundle with Men of War PC Game Download Code',
    panel4link: 'https://www.thetoyshop.com/online-only/Maxx-Tech-4In1-Combo-Kit-Gaming-Bundle-with-Men-of-War-PC-Game-Download-Code/p/583602',
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
    pane10title: '',
    panel10link: '',
    panel11image: '',
    panel11imagealt: '',
    pane11title: '',
    panel11link: '',
    panel12image: '',
    panel12imagealt: '',
    pane12title: '',
    panel12link: '',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → GaminghubGamingGuides DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "GaminghubGamingGuides");
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
          const docRef = doc(db, selectedUser, "GaminghubGamingGuides");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <GaminghubGamingGuides {...args} />;
  },
};