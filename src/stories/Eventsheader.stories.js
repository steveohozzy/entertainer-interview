import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { EventsHeader } from './Eventsheader';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Components/Events Header',
  component: EventsHeader,
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

export const EventsHeaderSection = {
  args: {
    user: 'stories',
    title: 'Store Events',
    intro: "Can’t decide what to do today? Here at The Entertainer, we have lots of free events and kids' activities for children of all ages. Scrollthrough our events below to find out when this is happening in your local store. We look forward to seeing you at one of our free family fun events with visits from your favourite characters, giveaways and more!",
    searchbytext: 'I want to search store events by…',
    stores: [
  { value: "all", label: "All Stores" },
  { value: "Aberdeen", label: "Aberdeen" },
  { value: "Aberdeen Union Square", label: "Aberdeen Union Square" },
  { value: "Bexleyheath", label: "Bexleyheath" },
  { value: "Birmingham - Bullring", label: "Birmingham - Bullring" },
  { value: "Birmingham Bullring", label: "Birmingham Bullring" },
  { value: "Bluewater", label: "Bluewater" },
  { value: "Bluewater - Greenhithe", label: "Bluewater - Greenhithe" },
  { value: "Bracknell", label: "Bracknell" },
  { value: "Braehead", label: "Braehead" },
  { value: "Bristol Cribbs Causeway", label: "Bristol Cribbs Causeway" },
  { value: "Chelmsford", label: "Chelmsford" },
  { value: "Chester Broughton Shopping Park", label: "Chester Broughton Shopping Park" },
  { value: "Cwmbran", label: "Cwmbran" },
  { value: "Dalton Park", label: "Dalton Park" },
  { value: "Doncaster", label: "Doncaster" },
  { value: "Gateshead - Metro Centre", label: "Gateshead - Metro Centre" },
  { value: "Glasgow - St Enoch", label: "Glasgow - St Enoch" },
  { value: "Glasgow Silverburn", label: "Glasgow Silverburn" },
  { value: "Inverness", label: "Inverness" },
  { value: "King's Lynn Vancouver Quarter", label: "King's Lynn Vancouver Quarter" },
  { value: "Kingston Bentalls", label: "Kingston Bentalls" },
  { value: "Lakeside", label: "Lakeside" },
  { value: "Leeds Springs", label: "Leeds Springs" },
  { value: "Leeds Trinity", label: "Leeds Trinity" },
  { value: "Liverpool One", label: "Liverpool One" },
  { value: "Manchester Arndale", label: "Manchester Arndale" },
  { value: "Metro Centre - Gateshead", label: "Metro Centre - Gateshead" },
  { value: "Milton Keynes", label: "Milton Keynes" },
  { value: "Newbury", label: "Newbury" },
  { value: "Nottingham", label: "Nottingham" },
  { value: "Plymouth", label: "Plymouth" },
  { value: "Rushden Lakes", label: "Rushden Lakes" },
  { value: "Sheffield Meadowhall", label: "Sheffield Meadowhall" },
  { value: "West Bromwich", label: "West Bromwich" },
  { value: "White City", label: "White City" }
],

events: [
  { value: "all", label: "All Events" },

  { value: "football", label: "Football’s Coming …To The Entertainer" },

  { value: "lego-make", label: "LEGO Make & Take" },

  { value: "star-wars", label: "LEGO Star Wars Make and Take" },

  { value: "lego-dino", label: "LEGO Dino" },

  { value: "lego-unicorn", label: "LEGO Unicorn" },

  { value: "paw-patrol-on-the-road", label: "Paw Patrol On The Road" },

  { value: "chase", label: "Chase From Paw Patrol" },

  { value: "skye", label: "Skye From Paw Patrol" },

  { value: "marshall", label: "Marshall From Paw Patrol" },

  { value: "rubble", label: "Rubble From Paw Patrol" },

  { value: "cocomelon-jj", label: "JJ From Cocomelon" },

  { value: "rc-demo", label: "Remote Control Cars Demo" },

  { value: "paddington", label: "Meet Paddington Bear" },

  { value: "lego-smart-brick-banthas", label: "LEGO Smart Brick & Bantha !" },

  { value: "zuru-slime", label: "Slime Mart by Zuru" }
]
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → EventsHeader DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "EventsHeader");
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
          const docRef = doc(db, selectedUser, "EventsHeader");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <EventsHeader {...args} />;
  },
};