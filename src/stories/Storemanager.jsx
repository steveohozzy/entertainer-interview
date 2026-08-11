import React, { useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot,
  writeBatch 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { stores as LOCAL_STORES_BACKUP } from './Storeslist'; 

export const StoreManager = () => {
  const [stores, setStores] = useState([]);
  const [groups, setGroups] = useState(['POKEC', 'POKEB', 'POKE75', 'POKEA']);
  const [newShortName, setNewShortName] = useState('');
  const [newFullName, setNewFullName] = useState('');
  const [newUrl, setNewUrl] = useState(''); // New state variable for raw manual URL text
  const [newGroupCode, setNewGroupCode] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // ⚡ One-click Migration Loop Engine
  const handleSeedDatabase = async () => {
    if (stores.length > 0) {
      if (!window.confirm("There is already data inside Firestore! Are you sure you want to run this sync overwrite?")) {
        return;
      }
    }

    setIsUploading(true);
    try {
      const batch = writeBatch(db);

      LOCAL_STORES_BACKUP.forEach((store) => {
        const docId = store.short.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const docRef = doc(db, 'storelist', docId);
        
        batch.set(docRef, {
          short: store.short,
          full: store.full,
          url: store.url,
          groups: store.groups || []
        });
      });

      await batch.commit();
      alert(`Success! All ${LOCAL_STORES_BACKUP.length} stores imported into Firebase!`);
    } catch (error) {
      console.error("Migration batch failure:", error);
      alert("Error seeding database. Check console log context.");
    }
    setIsUploading(false);
  };

  // ⏱️ Listen to live changes straight from your Firestore "storelist" collection
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'storelist'), (snapshot) => {
      const liveStores = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStores(liveStores);

      const customGroups = new Set(['POKEC', 'POKEB', 'POKE75', 'POKEA']);
      liveStores.forEach(store => {
        if (Array.isArray(store.groups)) {
          store.groups.forEach(g => customGroups.add(g));
        }
      });
      setGroups(Array.from(customGroups));
    });

    return () => unsubscribe();
  }, []);

  const handleAddStore = async (e) => {
    e.preventDefault();
    if (!newShortName || !newFullName || !newUrl) {
      return alert('Please completely fill in Short Name, Full Display Title, and Store URL fields.');
    }

    const docId = newShortName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const docRef = doc(db, 'storelist', docId);

    // Save manual attributes exactly as supplied by user text field parameters
    await setDoc(docRef, {
      short: newShortName,
      full: newFullName,
      url: newUrl,
      groups: []
    });

    setNewShortName('');
    setNewFullName('');
    setNewUrl('');
  };

  const handleAddGroup = (e) => {
    e.preventDefault();
    const upperGroup = newGroupCode.trim().toUpperCase();
    if (!upperGroup) return;
    
    if (!groups.includes(upperGroup)) {
      setGroups([...groups, upperGroup]);
    }
    setNewGroupCode('');
  };

  const handleToggleGroup = async (store, groupCode) => {
    const currentGroups = Array.isArray(store.groups) ? store.groups : [];
    let updatedGroups;

    if (currentGroups.includes(groupCode)) {
      updatedGroups = currentGroups.filter(g => g !== groupCode);
    } else {
      updatedGroups = [...currentGroups, groupCode];
    }

    const docRef = doc(db, 'storelist', store.id);
    await setDoc(docRef, { groups: updatedGroups }, { merge: true });
  };

  // 🔥 REMOVE LAUNCH GROUP CROSS-REFERENCE ENGINE
  const handleDeleteGroup = async (groupCode) => {
    if (!window.confirm(`Are you absolutely sure you want to completely delete the group code "${groupCode}"? This will clean and remove this group reference tag flag from all active retail store locations simultaneously.`)) {
      return;
    }

    try {
      const batch = writeBatch(db);
      let matchedCount = 0;

      stores.forEach(store => {
        const currentGroups = Array.isArray(store.groups) ? store.groups : [];
        if (currentGroups.includes(groupCode)) {
          const updatedGroups = currentGroups.filter(g => g !== groupCode);
          const docRef = doc(db, 'storelist', store.id);
          batch.update(docRef, { groups: updatedGroups });
          matchedCount++;
        }
      });

      if (matchedCount > 0) {
        await batch.commit();
      }

      // Automatically clean the local fallback state arrays out if it was a custom added text code
      setGroups(prev => prev.filter(g => g !== groupCode));
      alert(`Successfully wiped out group "${groupCode}" clean from infrastructure.`);
    } catch (error) {
      console.error("Error updating files on group elimination sequence:", error);
      alert("Failed to thoroughly eliminate target launch group. See debug logs.");
    }
  };

  const handleDeleteStore = async (storeId, storeName) => {
    if (window.confirm(`Are you sure you want to remove ${storeName}?`)) {
      await deleteDoc(doc(db, 'storelist', storeId));
    }
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, sans-serif', color: '#333' }}>
      <h1 style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '10px' }}>🏪 Store & Launch Group Manager</h1>
      
      {/* ⚡ THE INITIAL MIGRATION TRIGGER TOOLBAR */}
      {stores.length === 0 && (
        <div style={{ background: '#fff3cd', border: '1px solid #ffeba2', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 10px 0', color: '#856404', fontWeight: 'bold' }}>⚠️ Cloud collection is completely empty! Ready to parse local 'storeslist.js' file into Firestore?</p>
          <button 
            onClick={handleSeedDatabase} 
            disabled={isUploading}
            style={{ background: '#856404', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {isUploading ? 'Syncing Objects...' : '⚡ Sync Local JavaScript List to Live Firestore'}
          </button>
        </div>
      )}

      {/* Control Insertion Panels */}
      <div style={{ display: 'flex', gap: '40px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <form onSubmit={handleAddStore} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', minWidth: '320px' }}>
          <h3>Add New Location</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Short Name:</label>
            <input type="text" placeholder="e.g. Amersham" value={newShortName} onChange={e => setNewShortName(e.target.value)} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Full Display Title:</label>
            <input type="text" placeholder="e.g. The Entertainer Amersham" value={newFullName} onChange={e => setNewFullName(e.target.value)} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Store URL Link (Manual):</label>
            <input type="text" placeholder="https://www.thetoyshop.com/store/..." value={newUrl} onChange={e => setNewUrl(e.target.value)} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ background: '#0066cc', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>➕ Add Store</button>
        </form>

        <form onSubmit={handleAddGroup} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', minWidth: '250px', height: 'fit-content' }}>
          <h3>Create Launch Group</h3>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>Group Code:</label>
            <input type="text" placeholder="e.g. POKED" value={newGroupCode} onChange={e => setNewGroupCode(e.target.value)} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ background: '#28a745', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>🚀 Create Group Code</button>
        </form>
      </div>

      {/* Interactive Relational Data Table Grid */}
      <h3>Active Retail Infrastructure ({stores.length} total stores)</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ background: '#f5f5f5', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '12px 8px' }}>Store (Short)</th>
              <th style={{ padding: '12px 8px' }}>Full Display Title & Link</th>
              {groups.map(group => (
                <th key={group} style={{ padding: '12px 8px', textAlign: 'center', background: '#f0f7ff', minWidth: '90px' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{group}</div>
                  <button 
                    onClick={() => handleDeleteGroup(group)}
                    title={`Delete group ${group}`}
                    style={{ background: 'transparent', border: 'none', color: '#dc3545', cursor: 'pointer', fontSize: '11px', textDecoration: 'underline', padding: '0' }}
                  >
                    🗑️ Wipe
                  </button>
                </th>
              ))}
              <th style={{ padding: '12px 8px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store, idx) => (
              <tr key={store.id} style={{ borderBottom: '1px solid #eee', background: idx % 2 === 0 ? '#fff' : '#fafafa' }}>
                <td style={{ padding: '10px 8px', fontWeight: 'bold' }}>{store.short}</td>
                <td style={{ padding: '10px 8px', fontSize: '14px' }}>
                  <div>{store.full}</div>
                  <a href={store.url} target="_blank" rel="noreferrer" style={{ color: '#888', fontSize: '11px', textDecoration: 'none' }}>{store.url}</a>
                </td>
                {groups.map(group => {
                  const isChecked = Array.isArray(store.groups) && store.groups.includes(group);
                  return (
                    <td key={group} style={{ padding: '10px 8px', textAlign: 'center', background: isChecked ? '#e6f4ea' : 'transparent' }}>
                      <input 
                        type="checkbox" 
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        checked={isChecked}
                        onChange={() => handleToggleGroup(store, group)}
                      />
                    </td>
                  );
                })}
                <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                  <button onClick={() => handleDeleteStore(store.id, store.short)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>🗑️ Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};