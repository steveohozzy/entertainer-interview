import { db } from '../config/firebase';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { EventModule } from './Eventmoduledynamic';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Components/Event Module Dynamic',
  component: EventModule,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    id: '',
    image: '',
    imagealt: '',
    title: { control: 'text' },
    rows: { control: 'object' },
    forPreview: { control: 'boolean' },
    buttontext: { control: 'text' },
    buttonlink: { control: 'text' },
    blurb: { control: 'text' },
  },
};

export const EventModuleComponent = (args) => {
  const [currentArgs, updateArgs] = useArgs();
  const [allDocs, setAllDocs] = useState([]);
  const [localTitle, setLocalTitle] = useState(currentArgs.title || '');

  const isLoadingRef = useRef(false);
  const lastSyncedData = useRef({});
  const saveTimeout = useRef(null);

  // Stable Firestore doc ID, separate from the typing title
  const currentDocId = useRef(currentArgs.title || 'untitled');

  // keep local title in sync if args.title changes externally
  useEffect(() => {
    setLocalTitle(currentArgs.title || '');
  }, [currentArgs.title]);

  // Load all documents for dropdown
  useEffect(() => {
    const fetchDocs = async () => {
      const colRef = collection(db, 'eventModuleDynamic');
      const snapshot = await getDocs(colRef);
      setAllDocs(snapshot.docs.map(d => d.id));
    };
    fetchDocs();
  }, []);

  // Load Firestore doc when currentDocId changes (stable ID)
  useEffect(() => {
    const loadDoc = async () => {
      const title = currentDocId.current || 'untitled';
      if (!title) return;

      isLoadingRef.current = true;

      try {
        const docRef = doc(db, 'eventModuleDynamic', title);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const data = snap.data();
          lastSyncedData.current = data;
          updateArgs({ ...data, title }); // load data into args
        } else {
          await setDoc(docRef, { title, rows: [] }); // init new doc
        }
      } catch (e) {
        console.error(e);
      }

      isLoadingRef.current = false;
    };

    loadDoc();
  }, [currentDocId.current]);

  // Auto-save all changes to Firestore (debounced)
  useEffect(() => {
    if (isLoadingRef.current) return;

    const title = currentDocId.current;
    if (!title) return;

    const changed = Object.entries(currentArgs).some(
      ([k, v]) => lastSyncedData.current[k] !== v
    );

    if (!changed) return;

    clearTimeout(saveTimeout.current);

    saveTimeout.current = setTimeout(async () => {
      try {
        const docRef = doc(db, 'eventModuleDynamic', title);

        await setDoc(docRef, currentArgs, { merge: true });

        lastSyncedData.current = { ...currentArgs };

        console.log('Saved to Firestore:', currentArgs);
      } catch (e) {
        console.error('Firestore save error:', e);
      }
    }, 1500); // wait 1.5s after changes stop

    return () => clearTimeout(saveTimeout.current);

  }, [currentArgs]);

  const addRow = () => {
    updateArgs({
      ...currentArgs,
      rows: [...(currentArgs.rows || []), { date: '', store: '', storeLink: '', price: '' }],
    });
  };

  return (
    <>
      {!args.forPreview && (
        <div style={{ marginBottom: 12 }}>
          <label>
            Select Existing Event:
            <select
              value={currentArgs.title || ''}
              onChange={e => {
                currentDocId.current = e.target.value; // stable doc ID
                updateArgs({ ...currentArgs, title: e.target.value });
              }}
              style={{ marginLeft: 8 }}
            >
              {allDocs.map(id => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          </label>

          <div style={{ marginTop: 8 }}>
            <label>
              Edit Title:
              <input
                value={localTitle}
                onChange={e => setLocalTitle(e.target.value)}
                onBlur={() => {
                  // Only update the stable Firestore doc ID on blur
                  currentDocId.current = localTitle || 'untitled';
                  updateArgs({ ...currentArgs, title: localTitle });
                }}
                style={{ marginLeft: 8 }}
              />
            </label>
          </div>
        </div>
      )}

      <EventModule
        {...args}
        rows={currentArgs.rows}
        updateRows={newRows => updateArgs({ ...currentArgs, rows: newRows })}
      />

      {!args.forPreview && (
        <button onClick={addRow} style={{ marginTop: 12, padding: '6px 12px' }}>
          Add Row
        </button>
      )}
    </>
  );
};

EventModuleComponent.args = {
  title: 'untitled',
  id: '',
  image: '',
  imagealt: '',
  buttontext: '',
  buttonlink: '',
  blurb: '',
  rows: [],
  forPreview: false,
};