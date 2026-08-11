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
    saveModule: {
      control: "boolean",
      description: "Save this event to Firestore",
    },
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
  const [localTitle, setLocalTitle] = useState(currentArgs.title || 'steve test');
  const isLoadingRef = useRef(false);
  const lastSyncedData = useRef({});
  const saveTimeout = useRef(null);
  const currentDocId = useRef(currentArgs.id || 'stevetest');

  useEffect(() => setLocalTitle(currentArgs.title || ''), [currentArgs.title]);

const fetchDocs = async () => {
  const colRef = collection(db, "eventModuleDynamic");
  const snapshot = await getDocs(colRef);

  const docs = snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));

  setAllDocs(docs.map((d) => d.id));
};


  useEffect(() => {
    fetchDocs();
  }, []);

  useEffect(() => {
  if (allDocs.length > 0 && !currentArgs.id) {
    currentDocId.current = 'stevetest';

    loadDoc('stevetest');

    updateArgs({
      ...currentArgs,
      id: 'stevetest'
    });
  }
}, [allDocs]);

 // Load Firestore doc
const loadDoc = async (docId = currentDocId.current) => {
  const id = docId || 'untitled';

  if (!id) return;

  isLoadingRef.current = true;

  try {
    const docRef = doc(db, 'eventModuleDynamic', id);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data();

      lastSyncedData.current = data;

      updateArgs({
        ...data,
        id: id
      });

      console.log("Loaded event:", id, data);
    } else {
      await setDoc(docRef, {
        id,
        title: id,
        rows: []
      });
    }

  } catch (e) {
    console.error("Load error:", e);
  }

  isLoadingRef.current = false;
};


// Initial load
useEffect(() => {
  loadDoc();
}, []);

  // Manual save to Firestore
// Manual save to Firestore
useEffect(() => {

  if (isLoadingRef.current) {
    return;
  }

  if (!currentArgs.saveModule) {
    return;
  }

  const saveDoc = async () => {
    try {
      const docId =
        currentArgs.id ||
        (currentArgs.title || "untitled")
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");

      const dataToSave = {
        ...currentArgs,
      };

      delete dataToSave.saveModule;

      const docRef = doc(db, "eventModuleDynamic", docId);

      await setDoc(docRef, dataToSave, { merge: true });

      await fetchDocs();

      lastSyncedData.current = dataToSave;

      updateArgs({
        ...currentArgs,
        saveModule: false,
      });


    } catch (e) {
      console.error("❌ Firestore save error:", e);

      updateArgs({
        ...currentArgs,
        saveModule: false,
      });
    }
  };

  saveDoc();
}, [currentArgs.saveModule]);

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
              value={currentArgs.id || 'stevetest'}
              onChange={e => {
                const selectedId = e.target.value;

                currentDocId.current = selectedId;

                loadDoc(selectedId);

                updateArgs({
                  ...currentArgs,
                  id: selectedId,
                });
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
  saveModule: false,
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