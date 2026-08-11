import { db } from '../config/firebase';
import { doc, getDoc, updateDoc, collection, onSnapshot, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { PokemonLaunch } from './Pokemonlaunch';
import { useArgs } from 'storybook/preview-api';

// -------------------------------------------------------
// Runs ONCE when this stories file is loaded/refreshed,
// before `meta` (and therefore `argTypes`) is created.
// This is what makes the dropdown show real groups on
// refresh / re-entering the module, without needing a
// live runtime update mechanism (which Storybook doesn't
// support for argTypes/options).
// -------------------------------------------------------
let dynamicGroupsAtLoad = ['POKEC'];
try {
  const snapshot = await getDocs(collection(db, 'storelist'));
  const foundGroups = new Set();

  snapshot.docs.forEach(doc => {
    const groups = doc.data().groups;
    if (Array.isArray(groups)) {
      groups.forEach(group => {
        if (group) foundGroups.add(group.trim());
      });
    }
  });

  if (foundGroups.size > 0) {
    dynamicGroupsAtLoad = [...foundGroups].sort();
  }
} catch (e) {
  console.error('Failed to preload groups for argTypes:', e);
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Pokemon Launch',
  component: PokemonLaunch,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },

    panel1Stores: { control: false, table: { disable: true } },
    panel2Stores: { control: false, table: { disable: true } },
    panel3Stores: { control: false, table: { disable: true } },
    panel4Stores: { control: false, table: { disable: true } },
    panel5Stores: { control: false, table: { disable: true } },
    panel6Stores: { control: false, table: { disable: true } },
    panel7Stores: { control: false, table: { disable: true } },
    panel8Stores: { control: false, table: { disable: true } },

    panel1Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel2Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel3Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel4Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel5Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel6Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel7Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },
    panel8Group: { control: { type: 'select' }, options: dynamicGroupsAtLoad },

    panel1ReleaseDate: { control: 'text' },
    panel2ReleaseDate: { control: 'text' },
    panel3ReleaseDate: { control: 'text' },
    panel4ReleaseDate: { control: 'text' },
    panel5ReleaseDate: { control: 'text' },
    panel6ReleaseDate: { control: 'text' },
    panel7ReleaseDate: { control: 'text' },
    panel8ReleaseDate: { control: 'text' },

    panel1Order: { control: 'number' },
    panel2Order: { control: 'number' },
    panel3Order: { control: 'number' },
    panel4Order: { control: 'number' },
    panel5Order: { control: 'number' },
    panel6Order: { control: 'number' },
    panel7Order: { control: 'number' },
    panel8Order: { control: 'number' },
  }
};

export default meta;

export const PokemonLaunchContent = {
  args: {
    user: 'stories',
    pageBackgroundColor: '#0D2B2B',
    pageTitle: 'POKÉMON AT THE ENTERTAINER',
    pageTitleColor: '#fff',
    pageTitleStroke: '#fcc80b',
    introBlurb: `<p>A brand-new adventure is about to begin. Discover where to pick up packs of the Pokémon trading card game and complete your quest to collect ‘em all...</p>`,
    introBlurbColor: '#fff',
    secondaryTitle: 'LATEST CARD RELEASES',
    secondaryTitleColor: '#fff',
    panelsBackgroundColor: '#fff',
    panelsBorderColor: '#34B597',
    panelsTextColor: '#3b519a',
    panelsInputColor: '#41254B',
    panelsInputDetailsHoverColor: '#EC7AAC',
    panelsStoreslistColor: '#0D2B2B',
    panelsStoresListBorderColor: '#dbe3ff',
    promoPanelsStoresListHoverBackgroundColor: '#dbe3ff',
    panelsInputBorderColor: '#EC7AAC',
    panelsInputActiveBorderColor: '#34B597',

    panel1Order: 1,
    panel1Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel1Group: 'POKEC',
    panel1Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png',
    panel1ReleaseDate: '20th Feb 2026',
    panel1Items: `<span>Box contains:</span>`,
    panel1SmallPrint: `Only stores listed may have stock`,

    panel2Order: 2,
    panel2Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes Mini Tin',
    panel2Group: 'POKEC',
    panel2Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png',
    panel2ReleaseDate: '20th Feb 2026',
    panel2Items: `<span>Box contains:</span>`,
    panel2SmallPrint: `Only stores listed may have stock`,

    panel3Order: 3,
    panel3Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes Mini Tin',
    panel3Group: 'POKEC',
    panel3Image: 'https://www.thetoyshop.com/medias/Group-4.png',
    panel3ReleaseDate: '20th Feb 2026',
    panel3Items: `<span>Box contains:</span>`,
    panel3SmallPrint: `Only stores listed may have stock`,

    panel4Order: 4,
    panel4Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel4Group: 'POKEC',
    panel4Image: 'https://www.thetoyshop.com/medias/Group-4.png',
    panel4ReleaseDate: '20th Feb 2026',
    panel4Items: `<span>Box contains:</span>`,
    panel4SmallPrint: `Only stores listed may have stock`,

    panel5Order: 5,
    panel5Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel5Group: 'POKEC',
    panel5Image: 'https://www.thetoyshop.com/medias/Group-4.png',
    panel5ReleaseDate: '20th Feb 2026',
    panel5Items: `<span>Box contains:</span>`,
    panel5SmallPrint: `Only stores listed may have stock`,

    panel6Order: 6,
    panel6Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel6Group: 'POKEC',
    panel6Image: 'https://www.thetoyshop.com/medias/Group-4.png',
    panel6ReleaseDate: '20th Feb 2026',
    panel6Items: `<span>Box contains:</span>`,
    panel6SmallPrint: `Only stores listed may have stock`,

    panel7Order: 7,
    panel7Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel7Group: 'POKEC',
    panel7Image: 'https://www.thetoyshop.com/medias/Group-4.png',
    panel7ReleaseDate: '20th Feb 2026',
    panel7Items: `<span>Box contains:</span>`,
    panel7SmallPrint: `Only stores listed may have stock`,

    panel8Order: 8,
    panel8Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel8Group: 'POKEC',
    panel8Image: 'https://www.thetoyshop.com/medias/Group-4.png',
    panel8ReleaseDate: '20th Feb 2026',
    panel8Items: `<span>Box contains:</span>`,
    panel8SmallPrint: `Only stores listed may have stock`,

    promoPanelsBorderColor: '#34B597',
    promoPanelsButtonBackgroundColor: '#EC7AAC',
    promoPanelsButtonTextColor: '#fff',
    promoPanelsButtonBorderColor: '#dbe3ff',
    promoPanelsButtonHoverBackgroundColor: '#41254B',
    promoPanelsButtonHoverTextColor: '#fff',
    promoPanelsButtonHoverBorderColor: '#fff',
    promoPanel1Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png',
    promoPanel1Link: 'https://www.thetoyshop.com/store/amersham',
    promoPanel1LinkText: 'Check your local store',
    promoPanel1LinkHasIcons: true,
    promoPanel2Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png',
    promoPanel2Link: 'https://www.thetoyshop.com/store/amersham',
    promoPanel2LinkText: 'Check your local store',
    promoPanel2LinkHasIcons: true,
    promoPanel3Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png',
    promoPanel3Link: 'https://www.thetoyshop.com/store/amersham',
    promoPanel3LinkText: 'Check your local store',
    promoPanel3LinkHasIcons: false,
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();
    const [liveStores, setLiveStores] = useState([]);

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // 1. LIVE STORE LIST (still real-time — used to compute
    //    which stores belong to whichever group is selected)
    // -------------------------------------------------------
    useEffect(() => {
      const unsubscribe = onSnapshot(
        collection(db, 'storelist'),
        (snapshot) => {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setLiveStores(data);
        }
      );

      return () => unsubscribe();
    }, []);

    // -------------------------------------------------------
    // 2. LOAD DATA FROM SELECTED USER DOCUMENT
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "pokemonlaunch");
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
    // 3. COMPUTE DYNAMIC STORES MATRIX
    // -------------------------------------------------------
    const enrichedArgs = { ...currentArgs };

    for (let i = 1; i <= 8; i++) {
      const groupKey = currentArgs[`panel${i}Group`];

      enrichedArgs[`panel${i}Stores`] = groupKey
        ? liveStores.filter(store => store.groups && store.groups.includes(groupKey)).map(store => store.short)
        : [];
    }

    // -------------------------------------------------------
    // 4. SYNC ONLY FIELD CHANGES (NOT USER CHANGE) TO FIRESTORE
    // -------------------------------------------------------
    useEffect(() => {
      if (isLoadingRef.current) return;

      const selectedUser = lastUserRef.current;
      if (currentArgs.user !== selectedUser) return;

      const {
        user,
        panel1Stores, panel2Stores, panel3Stores, panel4Stores,
        panel5Stores, panel6Stores, panel7Stores, panel8Stores,
        ...fields
      } = currentArgs;

      const prevFields = lastSyncedData.current;
      const changed = Object.entries(fields).some(([k, v]) => prevFields[k] !== v);
      if (!changed) return;

      lastSyncedData.current = fields;

      const send = async () => {
        try {
          const docRef = doc(db, selectedUser, "pokemonlaunch");
          await updateDoc(docRef, fields);
          console.log("UPDATED PROFILE:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore update error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return (
      <PokemonLaunch
        {...enrichedArgs}
        allStores={liveStores}
      />
    );
  },
};