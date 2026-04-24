import { db } from '../config/firebase';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { HalfSplitHeroDynamic } from './Halfsplitherodynamic';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Home/Hero/Half Split Hero Dynamic',
  component: HalfSplitHeroDynamic,
  parameters: { layout: 'centered' },
};

export const HalfAndHalfHeroDynamic = {
  args: {
    version: 'v1',
    flipped: false,
    image: '',
    imagealt: '',
    videosrc: '',
    background: '',
    textColor: '#FFFFFF',
    logo: '',
    logoalt: '',
    headline: 'New Toniebox 2 with Tonieplay',
    tagline: 'Get ready for screen-free stories, songs and more!',
    link: 'https://www.thetoyshop.com/brands/tonies',
    linktext: 'Pre-order',
    termslink: 'https://www.thetoyshop.com/brands/tonies',
    termslinktext: 'terms and conditions',
    dataElementType: 'hp-hero-area',
    datapromotionindex: '3',
    datapromotionname: 'Hero-3-Huffy',
    forPreview: true,
  },

  render: (args) => {
    const [currentArgs, updateArgs] = useArgs();
    const [allVersions, setAllVersions] = useState([]);
    const [draft, setDraft] = useState(currentArgs);

    const currentDocId = useRef(args.version || 'v1');
    const isLoadingRef = useRef(false);
    const lastSyncedData = useRef({});
    const saveTimeout = useRef(null);

    // Sync version ref
    useEffect(() => {
      currentDocId.current = currentArgs.version || 'v1';
    }, [currentArgs.version]);

    // Fetch versions
    useEffect(() => {
      const fetchVersions = async () => {
        try {
          const snapshot = await getDocs(collection(db, 'halfsplitherodynamic'));
          setAllVersions(snapshot.docs.map((d) => d.id));
        } catch (e) {
          console.error('Error fetching versions:', e);
        }
      };
      fetchVersions();
    }, []);

    // Load / create doc
    useEffect(() => {
      const loadDoc = async () => {
        const version = currentDocId.current;
        if (!version) return;

        isLoadingRef.current = true;

        try {
          const docRef = doc(db, 'halfsplitherodynamic', version);
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const data = snap.data();
            lastSyncedData.current = data;

            updateArgs({ ...data, version });

            // ✅ Sync draft ONLY when loading
            setDraft({ ...data, version });
          } else {
            const initialData = { ...currentArgs, version };
            await setDoc(docRef, initialData);
            lastSyncedData.current = initialData;

            setDraft(initialData);
          }
        } catch (e) {
          console.error('Firestore load/create error:', e);
        }

        isLoadingRef.current = false;
      };

      loadDoc();
    }, [currentArgs.version]);

    // Auto-save (debounced)
    useEffect(() => {
      if (isLoadingRef.current) return;

      const version = currentDocId.current;
      if (!version) return;

      const { version: _, ...fields } = currentArgs;

      const changed = Object.entries(fields).some(
        ([k, v]) => lastSyncedData.current[k] !== v
      );

      if (!changed) return;

      clearTimeout(saveTimeout.current);

      saveTimeout.current = setTimeout(async () => {
        try {
          const docRef = doc(db, 'halfsplitherodynamic', version);
          await setDoc(docRef, fields, { merge: true });
          lastSyncedData.current = { ...fields };
          console.log('Saved:', version, fields);
        } catch (e) {
          console.error('Firestore save error:', e);
        }
      }, 1500);

      return () => clearTimeout(saveTimeout.current);
    }, [currentArgs]);

    // ✅ Dirty check
    const isDirty = () => {
      const { version: _v1, ...draftFields } = draft;
      const { version: _v2, ...currentFields } = currentArgs;

      return Object.keys(draftFields).some(
        (key) => draftFields[key] !== currentFields[key]
      );
    };

    // ✅ Commit ONLY if dirty
    const commitChanges = () => {
      if (!isDirty()) {
        console.log('No changes — skip save');
        return;
      }

      updateArgs((prev) => ({ ...prev, ...draft }));
    };

    return (
      <>
        {!currentArgs.forPreview && (
          <div style={{ marginBottom: 12 }}>
            <label>
              Select Existing Version:
              <select
                value={currentDocId.current}
                onChange={(e) => {
                  currentDocId.current = e.target.value;
                  updateArgs({ ...currentArgs, version: e.target.value });
                }}
                style={{ marginLeft: 8 }}
              >
                {allVersions.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            <div style={{ marginTop: 8 }}>
              <label>
                Edit / Add Version:
                <input
                  value={currentDocId.current}
                  onChange={(e) => (currentDocId.current = e.target.value)}
                  onBlur={() =>
                    updateArgs({ ...currentArgs, version: currentDocId.current })
                  }
                  style={{ marginLeft: 8 }}
                />
              </label>
            </div>

            {/* Editable fields (use draft) */}
            <div style={{ marginTop: 12 }}>
              <input
                value={draft.headline || ''}
                onChange={(e) =>
                  setDraft({ ...draft, headline: e.target.value })
                }
                onBlur={commitChanges}
                placeholder="Headline"
              />

              <input
                value={draft.tagline || ''}
                onChange={(e) =>
                  setDraft({ ...draft, tagline: e.target.value })
                }
                onBlur={commitChanges}
                placeholder="Tagline"
                style={{ marginLeft: 8 }}
              />
            </div>
          </div>
        )}

        {/* Preview uses draft so typing is instant */}
        <HalfSplitHeroDynamic {...draft} />
      </>
    );
  },
};