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
  { value: "Altrincham", label: "Altrincham" },
  { value: "Amersham", label: "Amersham" },
  { value: "Antrim", label: "Antrim" },
  { value: "Ashford", label: "Ashford" },
  { value: "Aylesbury", label: "Aylesbury" },
  { value: "Banbury", label: "Banbury" },
  { value: "Barnsley", label: "Barnsley" },
  { value: "Barnstaple", label: "Barnstaple" },
  { value: "Basildon", label: "Basildon" },
  { value: "Basingstoke", label: "Basingstoke" },
  { value: "Bath", label: "Bath" },
  { value: "Belfast", label: "Belfast" },
  { value: "Bexleyheath", label: "Bexleyheath" },
  { value: "Birmingham Bullring", label: "Birmingham Bullring" },
  { value: "Bluewater", label: "Bluewater" },
  { value: "Bishop's Stortford", label: "Bishop's Stortford" },
  { value: "Birkenhead", label: "Birkenhead" },
  { value: "Blackburn", label: "Blackburn" },
  { value: "Bluewater - Greenhithe", label: "Bluewater - Greenhithe" },
  { value: "Bolton", label: "Bolton" },
  { value: "Bournemouth", label: "Bournemouth" },
  { value: "Bracknell", label: "Bracknell" },
  { value: "Bradford", label: "Bradford" },
  { value: "Braehead", label: "Braehead" },
  { value: "Brighton", label: "Brighton" },
  { value: "Bristol Cabot Circus", label: "Bristol Cabot Circus" },
  { value: "Bristol Cribbs Causeway", label: "Bristol Cribbs Causeway" },
  { value: "Bromley Lower Mall", label: "Bromley Lower Mall" },
  { value: "Bromley Upper Mall", label: "Bromley Upper Mall" },
  { value: "Burnley", label: "Burnley" },
  { value: "Burton Upon Trent", label: "Burton Upon Trent" },
  { value: "Bury", label: "Bury" },
  { value: "Camberley", label: "Camberley" },
  { value: "Cambridge", label: "Cambridge" },
  { value: "Cardiff", label: "Cardiff" },
  { value: "Carlisle", label: "Carlisle" },
  { value: "Carmarthen", label: "Carmarthen" },
  { value: "Chatham", label: "Chatham" },
  { value: "Chelmsford", label: "Chelmsford" },
  { value: "Cheshire Coliseum", label: "Cheshire Coliseum" },
  { value: "Chester", label: "Chester" },
  { value: "Chester Broughton Shopping Park", label: "Chester Broughton Shopping Park" },
  { value: "Chichester", label: "Chichester" },
  { value: "Colchester", label: "Colchester" },
  { value: "Corby", label: "Corby" },
  { value: "Coventry", label: "Coventry" },
  { value: "Crawley", label: "Crawley" },
  { value: "Cumbernauld", label: "Cumbernauld" },
  { value: "Cwmbran", label: "Cwmbran" },
  { value: "Dalton Park", label: "Dalton Park" },
  { value: "Doncaster", label: "Doncaster" },
  { value: "Douglas", label: "Douglas" },
  { value: "Dover", label: "Dover" },
  { value: "Dunfermline", label: "Dunfermline" },
  { value: "East Kilbride", label: "East Kilbride" },
  { value: "Eastleigh", label: "Eastleigh" },
  { value: "Edinburgh", label: "Edinburgh" },
  { value: "Exeter", label: "Exeter" },
  { value: "Gateshead - Metro Centre", label: "Gateshead - Metro Centre" },
  { value: "Glasgow - St Enoch", label: "Glasgow - St Enoch" },
  { value: "Glasgow Silverburn", label: "Glasgow Silverburn" },
  { value: "Gloucester", label: "Gloucester" },
  { value: "Grimsby", label: "Grimsby" },
  { value: "Guildford", label: "Guildford" },
  { value: "Gunwharf Quays", label: "Gunwharf Quays" },
  { value: "Hanley", label: "Hanley" },
  { value: "Harlow", label: "Harlow" },
  { value: "Hatfield", label: "Hatfield" },
  { value: "Hemel Hempstead", label: "Hemel Hempstead" },
  { value: "Hereford", label: "Hereford" },
  { value: "Huddersfield", label: "Huddersfield" },
  { value: "Hull", label: "Hull" },
  { value: "Ilford", label: "Ilford" },
  { value: "Inverness", label: "Inverness" },
  { value: "Ipswich", label: "Ipswich" },
  { value: "Jersey", label: "Jersey" },
  { value: "King's Lynn Vancouver Quarter", label: "King's Lynn Vancouver Quarter" },
  { value: "Kingston Bentalls", label: "Kingston Bentalls" },
  { value: "Lakeside", label: "Lakeside" },
  { value: "Lancaster", label: "Lancaster" },
  { value: "Leamington Spa", label: "Leamington Spa" },
  { value: "Leeds Springs", label: "Leeds Springs" },
  { value: "Leeds Trinity", label: "Leeds Trinity" },
  { value: "Leeds White Rose", label: "Leeds White Rose" },
  { value: "Leicester", label: "Leicester" },
  { value: "Lichfield", label: "Lichfield" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "Liverpool One", label: "Liverpool One" },
  { value: "Liverpool St Johns", label: "Liverpool St Johns" },
  { value: "Livingston", label: "Livingston" },
  { value: "Llandudno", label: "Llandudno" },
  { value: "Macclesfield", label: "Macclesfield" },
  { value: "Manchester Arndale", label: "Manchester Arndale" },
  { value: "Merryhill", label: "Merryhill" },
  { value: "Metro Centre - Gateshead", label: "Metro Centre - Gateshead" },
  { value: "Middlesbrough", label: "Middlesbrough" },
  { value: "Milton Keynes", label: "Milton Keynes" },
  { value: "Midsomer Norton", label: "Midsomer Norton" },
  { value: "Newbury", label: "Newbury" },
  { value: "Newport - Isle of Wight", label: "Newport - Isle of Wight" },
  { value: "Newport - Wales", label: "Newport - Wales" },
  { value: "Northampton", label: "Northampton" },
  { value: "Northwich", label: "Northwich" },
  { value: "Norwich", label: "Norwich" },
  { value: "Nottingham", label: "Nottingham" },
  { value: "Oldham", label: "Oldham" },
  { value: "Peterborough", label: "Peterborough" },
  { value: "Plymouth", label: "Plymouth" },
  { value: "Port Talbot", label: "Port Talbot" },
  { value: "Reading", label: "Reading" },
  { value: "Redditch", label: "Redditch" },
  { value: "Romford Brewery", label: "Romford Brewery" },
  { value: "Rushden Lakes", label: "Rushden Lakes" },
  { value: "Sheffield Meadowhall", label: "Sheffield Meadowhall" },
  { value: "Shrewsbury", label: "Shrewsbury" },
  { value: "Southport", label: "Southport" },
  { value: "Stevenage", label: "Stevenage" },
  { value: "Stirling", label: "Stirling" },
  { value: "Stockport", label: "Stockport" },
  { value: "Stratford - Westfield", label: "Stratford - Westfield" },
  { value: "Sunderland", label: "Sunderland" },
  { value: "Sutton Coldfield", label: "Sutton Coldfield" },
  { value: "Swindon", label: "Swindon" },
  { value: "Taunton", label: "Taunton" },
  { value: "Telford", label: "Telford" },
  { value: "The O2 London", label: "The O2 London" },
  { value: "Torquay", label: "Torquay" },
  { value: "Truro", label: "Truro" },
  { value: "Uxbridge", label: "Uxbridge" },
  { value: "Walsall", label: "Walsall" },
  { value: "Warrington", label: "Warrington" },
  { value: "Watford", label: "Watford" },
  { value: "Welwyn Garden City", label: "Welwyn Garden City" },
  { value: "West Bromwich", label: "West Bromwich" },
  { value: "White City", label: "White City" },
  { value: "Whiteley", label: "Whiteley" },
  { value: "Winchester", label: "Winchester" },
  { value: "Witney", label: "Witney" },
  { value: "Woking", label: "Woking" },
  { value: "Workington", label: "Workington" },
  { value: "Wolverhampton", label: "Wolverhampton" },
  { value: "Worcester", label: "Worcester" },
  { value: "Yate", label: "Yate" },
  { value: "Yeovil", label: "Yeovil" },
  { value: "York", label: "York" },
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

            const { stores, events, ...otherData } = firestoreData;

            updateArgs({
              ...currentArgs,
              ...otherData,
              stores: args.stores,
              events: args.events,
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

    return <EventsHeader {...currentArgs} />;
  },
};