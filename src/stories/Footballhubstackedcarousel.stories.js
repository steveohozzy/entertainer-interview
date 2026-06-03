import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { FootballhubStackedCarousel } from './Footballhubstackedcarousel';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Football Hub/Stacked Carousel',
  component: FootballhubStackedCarousel,
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

export const FootballhubstackedcarouselContent = {
  args: {
    user: 'stories',
    panel1image: 'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-4-.png?context=bWFzdGVyfHJvb3R8NjIwNjR8aW1hZ2UvcG5nfGFHVXpMMmhsWWk4eE1qY3hPVFUwTlRNMU1qSXlNaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2cwS1M1d2JtY3w3NjYzODVkNGJiODkwMjEyZmVlMmEwZmMzYjBhZTQ0OGEzZTgzMDlhZTIwMDAxMDQ3YmViYWJjMWQ1N2ZmNjlj',
    panel1imagealt: 'Trading Cards',
    panel1title: 'Trading Cards',
    panel1link: 'https://www.thetoyshop.com/c/pocket-money/trading-cards',
    panel2image: 'https://www.thetoyshop.com/medias/edited-photo-17-.png?context=bWFzdGVyfHJvb3R8Njg0MjF8aW1hZ2UvcG5nfGFHWmpMMmd5TkM4eE1qY3hPVFUxTVRnd056VXhPQzlsWkdsMFpXUXRjR2h2ZEc4Z0tERTNLUzV3Ym1jfGFkMTk4ODk0MThjM2RiZWFjM2U0MTNkNmM1MWNmYjVkZTU4NTE0NzMwNDQ0M2QyYzAyYTI0MDNjNDYwOTM3NDc',
    panel2imagealt: 'LEGO',
    panel2title: 'LEGO',
    panel2link: 'https://www.thetoyshop.com/c/world-cup?brands=LEGO%20Sets%20%26%20Bricks',
    panel3image: 'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-2-.png?context=bWFzdGVyfHJvb3R8ODA3NTN8aW1hZ2UvcG5nfGFEUXdMMmc1Tmk4eE1qY3hPVFUwTkRreU5qSXpPQzlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2d5S1M1d2JtY3xhODQ4OGE4YzYwNTJiNjcxNjE1YTFmMTcwNjVjYzE3NDYyMTcyMDU3ZDYyZTAwN2JiMjU5NzBiOTFhY2ExOTZh',
    panel3imagealt: 'Collectibles',
    panel3title: 'Collectibles',
    panel3link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/football-collectibles',
    panel4image: 'https://www.thetoyshop.com/medias/edited-photo-18-.png?context=bWFzdGVyfHJvb3R8MTU2NzA2fGltYWdlL3BuZ3xhR0prTDJneU5TOHhNamN4T1RVMU1UZzNNekExTkM5bFpHbDBaV1F0Y0dodmRHOGdLREU0S1M1d2JtY3xjY2FlOWQwMDcyZTgxYzM4NWU2ZDQxODM1N2RiOTQ3NjQwYjdiNGMxYzA4MjU5ZGUwYTVlODk1MjZhMmZiYzU2',
    panel4imagealt: 'Footballs & Equipment',
    panel4title: 'Footballs & Equipment',
    panel4link: 'https://www.thetoyshop.com/c/outdoor-toys/sports-toys-and-equipment/football-toys',
    panel5image: 'https://www.thetoyshop.com/medias/edited-photo-19-.png?context=bWFzdGVyfHJvb3R8ODQwMTV8aW1hZ2UvcG5nfGFHSmlMMmd5T0M4eE1qY3hPVFUxTVRrek9EVTVNQzlsWkdsMFpXUXRjR2h2ZEc4Z0tERTVLUzV3Ym1jfDhmNDNlYzQyMzZjNTk1NGQxOTY2OTNkNDA1ZTk0ZDZkYTkzMjBhMWFhMzkxNmYzMzE5NzM5MmNlM2Q5N2U0Mjc',
    panel5imagealt: 'Football Tables',
    panel5title: 'Football Tables',
    panel5link: 'https://www.thetoyshop.com/search/?text=football%20table',
    panel6image: 'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-3-.png?context=bWFzdGVyfHJvb3R8ODA3MzJ8aW1hZ2UvcG5nfGFHUXhMMmhsT0M4eE1qY3hPVFUwTlRJNE5qWTROaTlEWVhRZ2NtOTFibVJsYkhOZk1qY3dlREkzTUY5QlkzUnBiMjRnVkc5NWN5QXhJQ2d6S1M1d2JtY3w1YTU4ZTJkYWRlZGM3NTI2NDJjNDQ1MmZkZGMzZjVkODMwMjBhZmQxMWJkYTFiMDVjYzc5ZjNjYThmOTJmMDY4',
    panel6imagealt: 'Player Figures',
    pane6title: 'Player Figures',
    panel6link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/display-figures?categories=Football%20Collectibles',
    panel7image: 'https://www.thetoyshop.com/medias/edited-photo-20-.png?context=bWFzdGVyfHJvb3R8MTY2MjMwfGltYWdlL3BuZ3xhRGM0TDJnM015OHhNamN4T1RVMU1qQXdOREV5Tmk5bFpHbDBaV1F0Y0dodmRHOGdLREl3S1M1d2JtY3w0ZjRhNTQxOWQxOTg2Y2FmOTgyYWZiNDNhYWVlZmEzMTVhZTljNjY4MjE2NzgxYWFhZDllOWQ5ZmI3ZGFjNDZi',
    panel7imagealt: 'Gift Sets',
    panel7title: 'Gift Sets',
    panel7link: 'https://www.thetoyshop.com/search/?text=football%20gift%20set',
    panel8image: 'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-6-.png?context=bWFzdGVyfHJvb3R8MTE0MjcwfGltYWdlL3BuZ3xhR0V5TDJobFppOHhNamN4T1RVME5UUTRNekk1TkM5RFlYUWdjbTkxYm1SbGJITmZNamN3ZURJM01GOUJZM1JwYjI0Z1ZHOTVjeUF4SUNnMktTNXdibWN8NDRmYTk4ZjgwMDY2YmVmZjViMDQ3OGMxMjA1MDNmODQ3MTA0YTY4NTlmNmJmZDNjOTk2MWNhNGY5ODNlNzM2YQ',
    panel8imagealt: 'TOPPS',
    panel8title: 'TOPPS',
    panel8link: 'https://www.thetoyshop.com/brands/topps-premier-league',
    panel9image: 'https://www.thetoyshop.com/medias/Cat-roundels-270x270-Action-Toys-1-5-.png?context=bWFzdGVyfHJvb3R8MTE2MTc2fGltYWdlL3BuZ3xhR1V3TDJobFpTOHhNamN4T1RVME5UUXhOemMxT0M5RFlYUWdjbTkxYm1SbGJITmZNamN3ZURJM01GOUJZM1JwYjI0Z1ZHOTVjeUF4SUNnMUtTNXdibWN8N2RlMzZkZDExNzNjMzA0ZTc2N2FhYjZmZjhkYzNmMDY1OWRkNWJiNWNiN2I3ZDlkMTNkODE4NTE5NWZmZjBjOA',
    panel9imagealt: 'Match Attax',
    panel9title: 'Match Attax',
    panel9link: 'https://www.thetoyshop.com/brands/match-attax',
    panel10image: 'https://www.thetoyshop.com/medias/edited-photo-21-.png?context=bWFzdGVyfHJvb3R8MTc2ODU3fGltYWdlL3BuZ3xhREpsTDJnNE5TOHhNamN4T1RVMU1qVTJNVEU0TWk5bFpHbDBaV1F0Y0dodmRHOGdLREl4S1M1d2JtY3wzZmZkMWJlMTJlZTE5NTM3ZDgyMmVmZDQwYWU2ZDlkOGE3Y2M1MjMwMzNhMTk1NzkyYjEzNjI1ODA3OWU3YmZh',
    panel10imagealt: 'Panini',
    panel10title: 'Panini',
    panel10link: 'https://www.thetoyshop.com/search?text=panini',
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
    // LOAD FROM FIREBASE (USER COLLECTION → Footballhubstackedcarousel DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "Footballhubstackedcarousel");
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
          const docRef = doc(db, selectedUser, "Footballhubstackedcarousel");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <FootballhubStackedCarousel {...args} />;
  },
};