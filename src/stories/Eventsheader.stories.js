
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { EventsHeader } from './Eventsheader';
import { useArgs } from 'storybook/preview-api';

// -------------------------------------------------------
// DEFAULT STORES
// -------------------------------------------------------

const defaultStores = [
  'all',
  'Aberdeen',
  'Aberdeen Union Square',
  'Altrincham',
  'Amersham',
  'Antrim',
  'Ashford',
  'Aylesbury',
  'Banbury',
  'Barnsley',
  'Barnstaple',
  'Basildon',
  'Basingstoke',
  'Bath',
  'Belfast',
  'Bexleyheath',
  'Birmingham Bullring',
  'Bluewater',
  "Bishop's Stortford",
  'Birkenhead',
  'Blackburn',
  'Bluewater - Greenhithe',
  'Bolton',
  'Bournemouth',
  'Bracknell',
  'Bradford',
  'Braehead',
  'Brighton',
  'Bristol Cabot Circus',
  'Bristol Cribbs Causeway',
  'Bromley Lower Mall',
  'Bromley Upper Mall',
  'Burnley',
  'Burton Upon Trent',
  'Bury',
  'Camberley',
  'Cambridge',
  'Cardiff',
  'Carlisle',
  'Carmarthen',
  'Chatham',
  'Chelmsford',
  'Cheshire Coliseum',
  'Chester',
  'Chester Broughton Shopping Park',
  'Chichester',
  'Colchester',
  'Corby',
  'Coventry',
  'Crawley',
  'Cumbernauld',
  'Cwmbran',
  'Dalton Park',
  'Doncaster',
  'Douglas',
  'Dover',
  'Dunfermline',
  'East Kilbride',
  'Eastleigh',
  'Edinburgh',
  'Exeter',
  'Gateshead - Metro Centre',
  'Glasgow - St Enoch',
  'Glasgow Silverburn',
  'Gloucester',
  'Grimsby',
  'Guildford',
  'Gunwharf Quays',
  'Hanley',
  'Harlow',
  'Hatfield',
  'Hemel Hempstead',
  'Hereford',
  'Huddersfield',
  'Hull',
  'Ilford',
  'Inverness',
  'Ipswich',
  'Jersey',
  "King's Lynn Vancouver Quarter",
  'Kingston Bentalls',
  'Lakeside',
  'Lancaster',
  'Leamington Spa',
  'Leeds Springs',
  'Leeds Trinity',
  'Leeds White Rose',
  'Leicester',
  'Lichfield',
  'Lincoln',
  'Liverpool One',
  'Liverpool St Johns',
  'Livingston',
  'Llandudno',
  'Macclesfield',
  'Manchester Arndale',
  'Merryhill',
  'Metro Centre - Gateshead',
  'Middlesbrough',
  'Milton Keynes',
  'Midsomer Norton',
  'Newbury',
  'Newport - Isle of Wight',
  'Newport - Wales',
  'Northampton',
  'Northwich',
  'Norwich',
  'Nottingham',
  'Oldham',
  'Peterborough',
  'Plymouth',
  'Port Talbot',
  'Reading',
  'Redditch',
  'Romford Brewery',
  'Rushden Lakes',
  'Sheffield Meadowhall',
  'Shrewsbury',
  'Southport',
  'Stevenage',
  'Stirling',
  'Stockport',
  'Stratford - Westfield',
  'Sunderland',
  'Sutton Coldfield',
  'Swindon',
  'Taunton',
  'Telford',
  'The O2 London',
  'Torquay',
  'Truro',
  'Uxbridge',
  'Walsall',
  'Warrington',
  'Watford',
  'Welwyn Garden City',
  'West Bromwich',
  'White City',
  'Whiteley',
  'Winchester',
  'Witney',
  'Woking',
  'Workington',
  'Wolverhampton',
  'Worcester',
  'Yate',
  'Yeovil',
  'York',
].map((value) => ({
  value,
  label: value === 'all' ? 'All Stores' : value,
}));

// -------------------------------------------------------
// DEFAULT EVENTS
// -------------------------------------------------------

const defaultEvents = [
  { value: 'all', label: 'All Events' },
  { value: 'panini', label: 'Panini Swap Shop' },
  { value: 'ballers', label: 'Ballers Swap Shop' },
  { value: 'lego-make', label: 'LEGO Make & Take' },
  { value: 'lego-dino', label: 'LEGO Dino' },
  { value: 'lego-unicorn', label: 'LEGO Unicorn' },
  { value: 'paw-patrol-on-the-road', label: 'Paw Patrol On The Road' },
  { value: 'chase', label: 'Chase From Paw Patrol' },
  { value: 'skye', label: 'Skye From Paw Patrol' },
  { value: 'marshall', label: 'Marshall From Paw Patrol' },
  { value: 'rubble', label: 'Rubble From Paw Patrol' },
  { value: 'cocomelon-jj', label: 'JJ From Cocomelon' },
  { value: 'rc-demo', label: 'Remote Control Cars Demo' },
  { value: 'paddington', label: 'Meet Paddington Bear' },
  { value: 'lego-smart-brick-banthas', label: 'LEGO Smart Brick & Bantha !' },
  { value: 'zuru-slime', label: 'Slime Mart by Zuru' },
];

// -------------------------------------------------------
// SHARED EDITOR STYLES
// -------------------------------------------------------

const sectionStyle = {
  marginTop: '20px',
  padding: '16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  background: '#fff',
  color: '#222',
};

const tableHeaderStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 75px',
  gap: '8px',
  padding: '8px 10px',
  fontWeight: 'bold',
  fontSize: '12px',
  borderBottom: '1px solid #ddd',
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 75px',
  gap: '8px',
  alignItems: 'center',
  padding: '6px 10px',
  borderBottom: '1px solid #eee',
};

const inputStyle = {
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  padding: '7px 9px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '13px',
};

const buttonStyle = {
  padding: '7px 12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  background: '#f5f5f5',
  cursor: 'pointer',
  fontSize: '13px',
};

const deleteButtonStyle = {
  ...buttonStyle,
  color: '#b42318',
  borderColor: '#e5b7b4',
  background: '#fff',
};

// -------------------------------------------------------
// FIRESTORE DATA HELPER
// -------------------------------------------------------

const getFirestoreFields = (source) => {
  const {
    user,
    saveModule,
    forPreview,
    ...fields
  } = source;

  return fields;
};

// -------------------------------------------------------
// STORYBOOK CONFIGURATION
// -------------------------------------------------------

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

    stores: {
      control: false,
    },

    events: {
      control: false,
    },

    forPreview: {
      name: 'Preview Only (Hide Editor)',
      control: { type: 'boolean' },
      description: 'Hides the Stores and Events editor, leaving only the component preview.',
    },

    saveModule: {
      name: 'Save Changes',
      control: { type: 'boolean' },
    },
  },
};

// -------------------------------------------------------
// EVENTS HEADER STORY
// -------------------------------------------------------

export const EventsHeaderSection = {
  args: {
    user: 'stories',
    saveModule: false,
    forPreview: false,

    title: 'Store Events',

    intro: "Can’t decide what to do today? Here at The Entertainer, we have lots of free events and kids' activities for children of all ages. Scrollthrough our events below to find out when this is happening in your local store. We look forward to seeing you at one of our free family fun events with visits from your favourite characters, giveaways and more!",

    searchbytext: 'I want to search store events by…',

    stores: defaultStores,
    events: defaultEvents,
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef(null);

    // -------------------------------------------------------
    // UPDATE STORE OR EVENT ENTRY
    // -------------------------------------------------------

    const updateOption = (type, index, field, value) => {
      const updatedOptions = [...(currentArgs[type] || [])];

      updatedOptions[index] = {
        ...updatedOptions[index],
        [field]: value,
      };

      updateArgs({
        [type]: updatedOptions,
      });
    };

    // -------------------------------------------------------
    // ADD STORE OR EVENT ENTRY
    // -------------------------------------------------------

    const addOption = (type) => {
      const updatedOptions = [...(currentArgs[type] || [])];

      updatedOptions.push({
        value: '',
        label: '',
      });

      updateArgs({
        [type]: updatedOptions,
      });
    };

    // -------------------------------------------------------
    // DELETE STORE OR EVENT ENTRY
    // -------------------------------------------------------

    const removeOption = (type, index) => {
      const updatedOptions = (currentArgs[type] || []).filter(
        (_, i) => i !== index
      );

      updateArgs({
        [type]: updatedOptions,
      });
    };

    // -------------------------------------------------------
    // LOAD FROM FIREBASE
    // -------------------------------------------------------

    useEffect(() => {
      let cancelled = false;

      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(
            db,
            args.user,
            'EventsHeader'
          );

          const snap = await getDoc(docRef);

          if (cancelled) return;

          if (snap.exists()) {
            const firestoreData = snap.data();

            const mergedData = {
              ...currentArgs,
              ...firestoreData,

              stores: Array.isArray(firestoreData.stores)
                ? firestoreData.stores
                : defaultStores,

              events: Array.isArray(firestoreData.events)
                ? firestoreData.events
                : defaultEvents,

              user: args.user,
              saveModule: false,
              forPreview: currentArgs.forPreview || false,
            };

            const fields = getFirestoreFields(mergedData);

            lastSyncedData.current = JSON.stringify(fields);

            updateArgs(mergedData);

          } else {
            const fields = getFirestoreFields({
              ...currentArgs,
              stores: currentArgs.stores || defaultStores,
              events: currentArgs.events || defaultEvents,
            });

            await setDoc(docRef, fields, {
              merge: false,
            });

            lastSyncedData.current = JSON.stringify(fields);
          }

        } catch (e) {
          console.error('Firestore load error:', e);
        }

        if (!cancelled) {
          isLoadingRef.current = false;
        }
      };

      load();

      return () => {
        cancelled = true;
      };

    }, [args.user]);

    // -------------------------------------------------------
    // AUTOMATIC SAVE TO FIREBASE
    // -------------------------------------------------------

    useEffect(() => {
      if (isLoadingRef.current) return;

      const selectedUser = lastUserRef.current;

      if (currentArgs.user !== selectedUser) return;

      const fields = getFirestoreFields(currentArgs);

      const changed =
        JSON.stringify(fields) !== lastSyncedData.current;

      if (!changed) return;

      const save = async () => {
        try {
          const docRef = doc(
            db,
            selectedUser,
            'EventsHeader'
          );

          await setDoc(docRef, fields, {
            merge: false,
          });

          lastSyncedData.current = JSON.stringify(fields);

        } catch (e) {
          console.error('Firestore save error:', e);
        }
      };

      save();

    }, [currentArgs]);

    // -------------------------------------------------------
    // MANUAL SAVE
    // -------------------------------------------------------

    useEffect(() => {
      if (!currentArgs.saveModule) return;

      const saveEvents = async () => {
        try {
          const fields = getFirestoreFields(currentArgs);

          const docRef = doc(
            db,
            currentArgs.user,
            'EventsHeader'
          );

          await setDoc(docRef, fields, {
            merge: false,
          });

          lastSyncedData.current = JSON.stringify(fields);

          updateArgs({
            saveModule: false,
          });

        } catch (e) {
          console.error('Manual save failed', e);

          updateArgs({
            saveModule: false,
          });
        }
      };

      saveEvents();

    }, [currentArgs.saveModule]);

    // -------------------------------------------------------
    // EDITOR ROWS
    // -------------------------------------------------------

    const renderEditor = (type, heading, singular) => {
      const options = currentArgs[type] || [];

      return (
        <section style={sectionStyle}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '16px' }}>
                {heading}
              </h3>

              <span style={{ fontSize: '12px', color: '#666' }}>
                {options.length} {singular.toLowerCase()} entries
              </span>
            </div>

            <button
              type="button"
              style={buttonStyle}
              onClick={() => addOption(type)}
            >
              + Add {singular}
            </button>
          </div>

          <div style={tableHeaderStyle}>
            <span>Value</span>
            <span>Label</span>
            <span>Action</span>
          </div>

          <div
            style={{
              maxHeight: '360px',
              overflowY: 'auto',
              borderBottom: '1px solid #ddd',
            }}
          >
            {options.length === 0 && (
              <p style={{ padding: '10px', color: '#666' }}>
                No {heading.toLowerCase()} added yet.
              </p>
            )}

            {options.map((option, index) => (
              <div
                key={index}
                style={rowStyle}
              >
                <input
                  type="text"
                  aria-label={`${singular} ${index + 1} value`}
                  placeholder="Value"
                  value={option.value || ''}
                  onChange={(e) =>
                    updateOption(
                      type,
                      index,
                      'value',
                      e.target.value
                    )
                  }
                  style={inputStyle}
                />

                <input
                  type="text"
                  aria-label={`${singular} ${index + 1} label`}
                  placeholder="Label"
                  value={option.label || ''}
                  onChange={(e) =>
                    updateOption(
                      type,
                      index,
                      'label',
                      e.target.value
                    )
                  }
                  style={inputStyle}
                />

                <button
                  type="button"
                  style={deleteButtonStyle}
                  onClick={() => removeOption(type, index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>
      );
    };

    // -------------------------------------------------------
    // COMPONENT PREVIEW
    // -------------------------------------------------------

    return (
      <>
        {!currentArgs.forPreview && (
          <div
            style={{
              padding: '16px',
              background: '#f7f7f7',
              borderBottom: '1px solid #ddd',
            }}
          >
            <h2 style={{ margin: '0 0 8px', fontSize: '18px' }}>
              Events Header Editor
            </h2>

            <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>
              Edit, add or remove stores and events below. Changes are
              automatically saved to the selected Firebase user.
            </p>

            {renderEditor('stores', 'Stores', 'Store')}
            {renderEditor('events', 'Events', 'Event')}
          </div>
        )}

        <EventsHeader
          title={currentArgs.title}
          intro={currentArgs.intro}
          searchbytext={currentArgs.searchbytext}
          stores={currentArgs.stores || []}
          events={currentArgs.events || []}
        />
      </>
    );
  },
};
