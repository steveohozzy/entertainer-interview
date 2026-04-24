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
  const currentDocId = useRef(currentArgs.title || 'untitled');

  useEffect(() => setLocalTitle(currentArgs.title || ''), [currentArgs.title]);

  // Fetch all docs for dropdown
  useEffect(() => {
    const fetchDocs = async () => {
      const colRef = collection(db, 'eventModuleDynamic');
      const snapshot = await getDocs(colRef);
      setAllDocs(snapshot.docs.map(d => d.id));
    };
    fetchDocs();
  }, []);

  // Load Firestore doc for currentDocId
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
          updateArgs({ ...data, title });
        } else {
          await setDoc(docRef, { title, rows: [] });
        }
      } catch (e) {
        console.error(e);
      }

      isLoadingRef.current = false;
    };
    loadDoc();
  }, [currentDocId.current]);

  // Auto-save to Firestore
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
    }, 1500);

    return () => clearTimeout(saveTimeout.current);
  }, [currentArgs]);

  // Add new row
  const addRow = () => {
    updateArgs({
      ...currentArgs,
      rows: [
        ...(currentArgs.rows || []),
        {
          type: 'single', // default type
          date: '',
          times: [],
          startDate: '',
          endDate: '',
          store: '',
          storeLink: '',
          price: ''
        }
      ],
    });
  };

  // Update a single row
  const updateRow = (index, newRow) => {
    const updatedRows = [...currentArgs.rows];
    updatedRows[index] = { ...updatedRows[index], ...newRow };
    updateArgs({ ...currentArgs, rows: updatedRows });
  };

  // Remove a row
  const removeRow = (index) => {
    const updatedRows = currentArgs.rows.filter((_, i) => i !== index);
    updateArgs({ ...currentArgs, rows: updatedRows });
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
                currentDocId.current = e.target.value;
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
        <>
          {currentArgs.rows && currentArgs.rows.length > 0 && (
            <div style={{ marginTop: 12 }}>
              {currentArgs.rows.map((row, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: 8,
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                  }}
                >
                  <span>Row {index + 1}:</span>

                  <select
                    value={row.type || 'single'}
                    onChange={(e) =>
                      updateRow(index, { type: e.target.value })
                    }
                  >
                    <option value="single">Single Date</option>
                    <option value="times">Date with Times</option>
                    <option value="range">Date Range</option>
                  </select>

                  <button onClick={() => removeRow(index)}>Delete</button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={addRow}
            style={{ marginTop: 12, padding: '6px 12px' }}
          >
            Add Row
          </button>
        </>
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