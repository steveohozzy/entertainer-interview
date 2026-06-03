import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { GaminghubGiftsForGamers } from './Gaminghubgiftsforgamers';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Gaming Hub/Gifts For Gamers',
  component: GaminghubGiftsForGamers,
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

export const GaminghubGiftsForGamersContent = {
  args: {
    user: 'stories',
    title: 'Gaming Guides',
    panel1image: 'https://www.thetoyshop.com/medias/Family-playing-video-games-blog-header-image-476x318px.jpg?context=bWFzdGVyfHJvb3R8MTUzNDIxfGltYWdlL2pwZWd8YURSakwyZzBOeTh4TWpjM016QXdOelkxTkRrME1pOUdZVzFwYkhrdGNHeGhlV2x1WnkxMmFXUmxieTFuWVcxbGN5QmliRzluSUdobFlXUmxjaUJwYldGblpTQXRJRFEzTm5nek1UaHdlQzVxY0djfDczYzFiZjY1MjIwYjQ2YjI5NjY5MzRlYjc4ZjQ5YTc3ZWM2MTQxYzcwN2MyN2ExMjU4Y2E3N2EwZmYyZjU2YWY',
    panel1imagealt: 'Video Game PEGI Ratings',
    panel1title: 'Video Game PEGI Ratings',
    panel1link: 'https://www.thetoyshop.com/childhood-adventures/video-game-pegi-ratings',
    panel2image: 'https://www.thetoyshop.com/medias/How-to-Keep-Your-Children-Safe-During-Online-Gaming-Blog-Header-IMage-story.jpg?context=bWFzdGVyfHJvb3R8NDQzODh8aW1hZ2UvanBlZ3xhRGcwTDJnMlpDOHhNamMzTkRNek9EQXdNamszTkM5SWIzY2dkRzhnUzJWbGNDQlpiM1Z5SUVOb2FXeGtjbVZ1SUZOaFptVWdSSFZ5YVc1bklFOXViR2x1WlNCSFlXMXBibWNnUW14dlp5QklaV0ZrWlhJZ1NVMWhaMlVnYzNSdmNua3VhbkJufDM3YzQwNTY4M2E1MWFlOTcxODQyODJmNmFiYjRiMThjNTE4YjhjZDk1ODI1MGYwNzQyZDdkMTVlYTZmNmI0ZmU',
    panel2imagealt: 'How to Keep Your Children Safe During Online Gaming',
    pane21title: 'How to Keep Your Children Safe During Online Gaming',
    panel2link: 'https://www.thetoyshop.com/childhood-adventures/online-gaming-safety-guide',
    panel3image: 'https://www.thetoyshop.com/medias/PlayStation-Safety-Made-Simple-Blog-Header-Image.jpg?context=bWFzdGVyfHJvb3R8MzE3NzR8aW1hZ2UvanBlZ3xhRE16TDJnMlpTOHhNamMzTkRNek9EQTJPRFV4TUM5UWJHRjVVM1JoZEdsdmJpQlRZV1psZEhrZ1RXRmtaU0JUYVcxd2JHVWdRbXh2WnlCSVpXRmtaWElnU1cxaFoyVXVhbkJufDYyNTZiOTdhYTU4YzZlOGMxY2Q3Njk5N2IyNGIxYWQ3ZWRiZmQ3NDY5OGU3MzQyZTRkMDFhOTNmMDM3ODI2NzE',
    panel3imagealt: 'PlayStation Safety Made Simple: A Parent’s Guide to the PS App & Console Controls',
    pane31title: 'PlayStation Safety Made Simple: A Parent’s Guide to the PS App & Console Controls',
    panel3link: 'https://www.thetoyshop.com/childhood-adventures/playstation-safety-made-simple-guide',
    panel4image: 'https://www.thetoyshop.com/medias/Nintendo-Switch-Parental-Controls-Blog-Header-Image-Story.jpg?context=bWFzdGVyfHJvb3R8NDkwNjl8aW1hZ2UvanBlZ3xhRFEwTDJnM01TOHhNamMzTkRNek9ERXpOREEwTmk5T2FXNTBaVzVrYnlCVGQybDBZMmdnVUdGeVpXNTBZV3dnUTI5dWRISnZiSE1nUW14dlp5QklaV0ZrWlhJZ1NXMWhaMlVnVTNSdmNua3VhbkJufDIxMzU5YjM5ZDE3Zjg5ZTZjODAzMWM5ZDRlNzc5MTkwYzA4ZDZkNGY4OGE2ZmVkNjE5MTBkMGJmNTMwYjRlNTU',
    panel4imagealt: 'Nintendo Switch Parental Controls: Keeping Play Fun and Safe',
    pane41title: 'Nintendo Switch Parental Controls: Keeping Play Fun and Safe',
    panel4link: 'https://www.thetoyshop.com/childhood-adventures/nintendo-switch-parental-controls-guide',
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
    // LOAD FROM FIREBASE (USER COLLECTION → GaminghubGiftsForGamers DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "GaminghubGiftsForGamers");
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
          const docRef = doc(db, selectedUser, "GaminghubGiftsForGamers");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <GaminghubGiftsForGamers {...args} />;
  },
};