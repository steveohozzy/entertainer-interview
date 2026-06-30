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
    saveVersion: false,
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

    // ✅ FIX: base draft from args (prevents mismatch on load)
    const [draft, setDraft] = useState(args);

    const [selectedVersion, setSelectedVersion] = useState('');

    const isLoadingRef = useRef(false);
    const lastSyncedData = useRef({});

    // ----------------------------
    // FETCH VERSIONS
    // ----------------------------
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

    // ----------------------------
    // LOAD VERSION (dropdown ONLY)
    // ----------------------------
    useEffect(() => {
      if (!selectedVersion) return;

      const loadDoc = async () => {
        isLoadingRef.current = true;

        try {
          const docRef = doc(db, 'halfsplitherodynamic', selectedVersion);
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const data = snap.data();

            lastSyncedData.current = data;

            // ✅ sync BOTH states so everything stays aligned
            setDraft({ ...data, version: selectedVersion });

            updateArgs({
              ...currentArgs,
              ...data,
              version: selectedVersion,
            });
          }

        } catch (e) {
          console.error('Firestore load error:', e);
        }

        isLoadingRef.current = false;
      };

      loadDoc();
    }, [selectedVersion]);

    // ----------------------------
    // SAVE (toggle only)
    // ----------------------------
    useEffect(() => {
      if (!currentArgs.saveVersion) return;

      const save = async () => {
        try {
          const version = currentArgs.version;

          if (!version) return;

          const { version: _, saveVersion, ...fields } = currentArgs;

          await setDoc(
            doc(db, 'halfsplitherodynamic', version),
            fields,
            { merge: true }
          );

          lastSyncedData.current = { ...fields };

          console.log('Saved:', version);

        } catch (e) {
          console.error('Save error:', e);
        }

        updateArgs({
          ...currentArgs,
          saveVersion: false,
        });
      };

      save();
    }, [currentArgs.saveVersion]);

    // ----------------------------
    // SYNC EDITS → BOTH STATES
    // ----------------------------
    const syncField = (key, value) => {
      const updated = { ...draft, [key]: value };

      setDraft(updated);

      updateArgs(prev => ({
        ...prev,
        [key]: value,
      }));
    };

    return (
      <>
        {!currentArgs.forPreview && (
          <div style={{ marginBottom: 12 }}>

            <label>
              Select Existing Version:
              <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
                style={{ marginLeft: 8 }}
              >
                <option value="">-- select version --</option>
                {allVersions.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            {/* version input stays manual ONLY */}
            <div style={{ marginTop: 8 }}>
              <label>
                Edit / Add Version:
                <input
                  value={currentArgs.version || ''}
                  onChange={(e) =>
                    updateArgs({
                      ...currentArgs,
                      version: e.target.value
                    })
                  }
                  style={{ marginLeft: 8 }}
                />
              </label>
            </div>

            {/* EDIT FIELDS (NOW PROPER SYNC) */}
            <div style={{ marginTop: 12 }}>

              <input
                value={draft.headline || ''}
                onChange={(e) => syncField('headline', e.target.value)}
                placeholder="Headline"
              />

              <input
                value={draft.tagline || ''}
                onChange={(e) => syncField('tagline', e.target.value)}
                placeholder="Tagline"
                style={{ marginLeft: 8 }}
              />

            </div>

          </div>
        )}

        <HalfSplitHeroDynamic {...currentArgs} />
      </>
    );
  },
};