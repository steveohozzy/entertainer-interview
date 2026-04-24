import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { PokemonLaunch } from './Pokemonlaunch';
import { useArgs } from 'storybook/preview-api';
import { stores } from "./Storeslist";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Pages/Pokemon Launch',
  component: PokemonLaunch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
    panel1Stores: {
      control: { type: 'check' },
      options: stores.map(store => store.short),
    },
    panel2Stores: {
      control: { type: 'check' },
      options: stores.map(store => store.short),
    },
    panel3Stores: {
      control: { type: 'check' },
      options: stores.map(store => store.short),
    },
    panel4Stores: {
      control: { type: 'check' },
      options: stores.map(store => store.short),
    },
    panel5Stores: {
      control: { type: 'check' },
      options: stores.map(store => store.short),
    },
    panel6Stores: {
      control: { type: 'check' },
      options: stores.map(store => store.short),
    },
    panel1ReleaseDate: { control: 'text' },
    panel2ReleaseDate: { control: 'text' },
    panel3ReleaseDate: { control: 'text' },
    panel4ReleaseDate: { control: 'text' },
    panel5ReleaseDate: { control: 'text' },
    panel6ReleaseDate: { control: 'text' },
    panel1Order: { control: 'number' },
    panel2Order: { control: 'number' },
    panel3Order: { control: 'number' },
    panel4Order: { control: 'number' },
    panel5Order: { control: 'number' },
    panel6Order: { control: 'number' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PokemonLaunchContent = {
  args: {
    user: 'stories',
    pageBackgroundColor: '#0D2B2B',
    pageTitle: 'POKÉMON AT THE ENTERTAINER',
    pageTitleColor: '#fff',
    pageTitleStroke: '#fcc80b',
    introBlurb: `<p>A brand-new adventure is about to begin. Discover where to pick up packs of the Pokémon trading card game and complete your quest to collect ‘em all. Range will vary from shop to shop so use the handy store search below if you’ve got your eye on a particular booster, box, or bundle.  Stock is limited so to ensure fairness for all customers, purchase quantities will be limited and on a first‑come, first‑served basis.  Don’t forget to keep an eye out on site for updates and giveaways.</p>
    <p>Ascended Heroes launches on the 20th February 2026, and you can be among the first to experience the excitement at The Entertainer. Rise to the challenge and find where you can catch these legendary creatures but be swift…they’re flying off the shelves.</p>`,
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
    panel1Stores: [
      "Amersham",
      "Uxbridge",
      "Camberley",
    ],
    panel1Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png?context=bWFzdGVyfHJvb3R8NzMzNTV8aW1hZ2UvcG5nfGFEZ3dMMmczTVM4eE1qWTVPREkzTXpjeE1ERXhNQzlIY205MWNDQTBOU0FvTVNrdWNHNW58MzRmY2E5ZTNlYjkwYjAzNTMyNmMwYTE0YTk3OGU2ODQ2ZDJhOTYwMGU1YjU5MzFjYjkyZmMyYzhmMGQ0MTZjYw',
    panel1ReleaseDate: '20th Feb 2026',
    panel1Items: `<span>Box contains:</span>
                  <span>9 AH booster packs</span>
                  <span>Promo card featuring N’s Zekrom</span>
                  <span>65 card sleeves</span>
                  <span>40 Energy cards</span>
                  <span>1 Damage-counter dice</span>
                  <span>1 Coin-flip die1 Plastic coin</span>
                  <span>Player’s guide</span>`,
    panel1SmallPrint: `Only stores listed may have stock`,
    panel2Order: 2,
    panel2Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes Mini Tin',
    panel2Stores: [
      "Amersham",
      "Uxbridge",
      "Camberley",
    ],
    panel2Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png?context=bWFzdGVyfHJvb3R8NzMzNTV8aW1hZ2UvcG5nfGFHRXlMMmcwWVM4eE1qRXpPREU1T0RneU56QXpPQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNQzB6TFcxdmJuUm9jeTV3Ym1jfDI2NjgyZjA2ZWMxMWY0NzZmYmVlNTMyZGY5MDFjMDg1YjQ4OTg2ZGI3MjViYjliZDg5YThjOTI3NTE0M2ZkODY',
    panel2ReleaseDate: '20th Feb 2026',
    panel2Items: `<span>Box contains:</span>
                  <span>9 AH booster packs</span>
                  <span>Promo card featuring N’s Zekrom</span>
                  <span>65 card sleeves</span>
                  <span>40 Energy cards</span>
                  <span>1 Damage-counter dice</span>
                  <span>1 Coin-flip die1 Plastic coin</span>
                  <span>Player’s guide</span>`,
    panel2SmallPrint: `Only stores listed may have stock`,
    panel3Order: 3,
    panel3Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes Mini Tin',
    panel3Stores: [
      "Amersham",
      "Uxbridge",
      "Camberley",
    ],
    panel3Image: 'https://www.thetoyshop.com/medias/Group-4.png?context=bWFzdGVyfHJvb3R8MTk2Nzh8aW1hZ2UvcG5nfGFEUmlMMmcwWVM4eE1qRXpPREU1T0RnMU9UZ3dOaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNeTAyTFcxdmJuUm9jeTV3Ym1jfDI2NjgyZjA2ZWMxMWY0NzZmYmVlNTMyZGY5MDFjMDg1YjQ4OTg2ZGI3MjViYjliZDg5YThjOTI3NTE0M2ZkODY',
    panel3ReleaseDate: '20th Feb 2026',
    panel3Items: `<span>Box contains:</span>
                  <span>9 AH booster packs</span>
                  <span>Promo card featuring N’s Zekrom</span>
                  <span>65 card sleeves</span>
                  <span>40 Energy cards</span>
                  <span>1 Damage-counter dice</span>
                  <span>1 Coin-flip die1 Plastic coin</span>
                  <span>Player’s guide</span>`,
    panel3SmallPrint: `Only stores listed may have stock`,
    panel4Order: 4,
    panel4Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel4Stores: [
      "Amersham",
      "Uxbridge",
      "Camberley",
    ],
    panel4Image: 'https://www.thetoyshop.com/medias/Group-4.png?context=bWFzdGVyfHJvb3R8MTk1OTV8aW1hZ2UvcG5nfGFEUXdMMmd3Tnk4eE1qRXpPREU1T1RBeU16WTBOaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNeTAwTFhsbFlYSnpMbkJ1Wnd8YjhhMzdmNzdlYzQxNzg4OTJiYzU4ZjFjMWRiZDI4YjgzNWU5MWQ3MTRlODAwNzIzZjRjZDJjYWU2MDYyN2FiMQ',
    panel4ReleaseDate: '20th Feb 2026',
    panel4Items: `<span>Box contains:</span>
                  <span>9 AH booster packs</span>
                  <span>Promo card featuring N’s Zekrom</span>
                  <span>65 card sleeves</span>
                  <span>40 Energy cards</span>
                  <span>1 Damage-counter dice</span>
                  <span>1 Coin-flip die1 Plastic coin</span>
                  <span>Player’s guide</span>`,
    panel4SmallPrint: `Only stores listed may have stock`,
    panel5Order: 5,
    panel5Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel5Stores: [
      "Amersham",
      "Uxbridge",
      "Camberley",
    ],
    panel5Image: 'https://www.thetoyshop.com/medias/Group-4.png?context=bWFzdGVyfHJvb3R8MTk1OTV8aW1hZ2UvcG5nfGFEUXdMMmd3Tnk4eE1qRXpPREU1T1RBeU16WTBOaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNeTAwTFhsbFlYSnpMbkJ1Wnd8YjhhMzdmNzdlYzQxNzg4OTJiYzU4ZjFjMWRiZDI4YjgzNWU5MWQ3MTRlODAwNzIzZjRjZDJjYWU2MDYyN2FiMQ',
    panel5ReleaseDate: '20th Feb 2026',
    panel5Items: `<span>Box contains:</span>
                  <span>9 AH booster packs</span>
                  <span>Promo card featuring N’s Zekrom</span>
                  <span>65 card sleeves</span>
                  <span>40 Energy cards</span>
                  <span>1 Damage-counter dice</span>
                  <span>1 Coin-flip die1 Plastic coin</span>
                  <span>Player’s guide</span>`,
    panel5SmallPrint: `Only stores listed may have stock`,
    panel6Order: 6,
    panel6Title: 'Pokémon TCG: Mega Evolution - Ascended Heroes 2 Pack Blister',
    panel6Stores: [
      "Amersham",
      "Uxbridge",
      "Camberley",
    ],
    panel6Image: 'https://www.thetoyshop.com/medias/Group-4.png?context=bWFzdGVyfHJvb3R8MTk1OTV8aW1hZ2UvcG5nfGFEUXdMMmd3Tnk4eE1qRXpPREU1T1RBeU16WTBOaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNeTAwTFhsbFlYSnpMbkJ1Wnd8YjhhMzdmNzdlYzQxNzg4OTJiYzU4ZjFjMWRiZDI4YjgzNWU5MWQ3MTRlODAwNzIzZjRjZDJjYWU2MDYyN2FiMQ',
    panel6ReleaseDate: '20th Feb 2026',
    panel6Items: `<span>Box contains:</span>
                  <span>9 AH booster packs</span>
                  <span>Promo card featuring N’s Zekrom</span>
                  <span>65 card sleeves</span>
                  <span>40 Energy cards</span>
                  <span>1 Damage-counter dice</span>
                  <span>1 Coin-flip die1 Plastic coin</span>
                  <span>Player’s guide</span>`,
    panel6SmallPrint: `Only stores listed may have stock`,
  },
  promoPanelsBorderColor: '#34B597',
  promoPanelsButtonBackgroundColor: '#EC7AAC',
  promoPanelsButtonTextColor: '#fff',
  promoPanelsButtonBorderColor: '#dbe3ff',
  promoPanelsButtonHoverBackgroundColor: '#41254B',
  promoPanelsButtonHoverTextColor: '#fff',
  promoPanelsButtonHoverBorderColor: '#fff',
  promoPanel1Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png?context=bWFzdGVyfHJvb3R8NzMzNTV8aW1hZ2UvcG5nfGFHRXlMMmcwWVM4eE1qRXpPREU1T0RneU56QXpPQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNQzB6TFcxdmJuUm9jeTV3Ym1jfDViMTA3YTQyOTUzM2E4MDcwYjFjMzI3NTE2YzkzM2FjZjhlNTI1ZWYyMTljZDY1ZmNmOWJlMjBlNTFkMzRiYTg',
  promoPanel1Link: 'https://www.thetoyshop.com/store/amersham',
  promoPanel1LinkText: 'Check your local store',
  promoPanel1LinkHasIcons: true,
  promoPanel2Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png?context=bWFzdGVyfHJvb3R8NzMzNTV8aW1hZ2UvcG5nfGFHRXlMMmcwWVM4eE1qRXpPREU1T0RneU56QXpPQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNQzB6TFcxdmJuUm9jeTV3Ym1jfDViMTA3YTQyOTUzM2E4MDcwYjFjMzI3NTE2YzkzM2FjZjhlNTI1ZWYyMTljZDY1ZmNmOWJlMjBlNTFkMzRiYTg',
  promoPanel2Link: 'https://www.thetoyshop.com/store/amersham',
  promoPanel2LinkText: 'Check your local store',
  promoPanel2LinkHasIcons: true,
  promoPanel3Image: 'https://www.thetoyshop.com/medias/Group-45-1-.png?context=bWFzdGVyfHJvb3R8NzMzNTV8aW1hZ2UvcG5nfGFHRXlMMmcwWVM4eE1qRXpPREU1T0RneU56QXpPQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNQzB6TFcxdmJuUm9jeTV3Ym1jfDViMTA3YTQyOTUzM2E4MDcwYjFjMzI3NTE2YzkzM2FjZjhlNTI1ZWYyMTljZDY1ZmNmOWJlMjBlNTFkMzRiYTg',
  promoPanel3Link: 'https://www.thetoyshop.com/store/amersham',
  promoPanel3LinkText: 'Check your local store',
  promoPanel3LinkHasIcons: false,
  render: function Render(args) {
  const [currentArgs, updateArgs] = useArgs();

  const isLoadingRef = useRef(false);       // prevents writing during load
  const lastUserRef = useRef(args.user);    // track selected user
  const lastSyncedData = useRef({});        // prevent write loops

  // -------------------------------------------------------
  // 1. LOAD DATA FROM SELECTED USER
  // -------------------------------------------------------
  useEffect(() => {
    const load = async () => {
      isLoadingRef.current = true;  // BLOCK updates
      lastUserRef.current = args.user;

      try {
        const docRef = doc(db, args.user, "pokemonlaunch");
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const firestoreData = snap.data();
          lastSyncedData.current = firestoreData;

          // Replace storybook args with loaded data
          updateArgs({
            ...currentArgs,
            ...firestoreData,
            user: args.user,
          });
        }
      } catch (e) {
        console.error("Firestore load error:", e);
      }

      isLoadingRef.current = false; // allow updates again
    };

    load();
  }, [args.user]);


  // -------------------------------------------------------
  // 2. SYNC ONLY FIELD CHANGES (NOT USER CHANGE)
  // -------------------------------------------------------
  useEffect(() => {
    if (isLoadingRef.current) return; // Don't sync during load

    const selectedUser = lastUserRef.current;

    // Don't sync if this change is caused by selecting a new user
    if (currentArgs.user !== selectedUser) return;

    // Remove user field before writing
    const { user, ...fields } = currentArgs;

    // Prevent re-writing unchanged data
    const prevFields = lastSyncedData.current;
    const changed = Object.entries(fields).some(
      ([k, v]) => prevFields[k] !== v
    );
    if (!changed) return;

    lastSyncedData.current = fields;

    const send = async () => {
      try {
        const docRef = doc(db, selectedUser, "pokemonlaunch");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
    
        return <PokemonLaunch {...args} />;
      },
};
