import { collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { db } from '../config/firebase';
import { ShopByAgeModule } from './Shopbyagemodule';
import { useArgs } from 'storybook/preview-api';

export default {
title: 'Modules/Shop By Age',
component: ShopByAgeModule,
parameters: {
layout: 'fullscreen',
},

argTypes: {
  selectedModule: {
    table: {
      disable: true,
    },
  },

  moduleName: {
    control: 'text',
  },

  saveModule: {
    control: 'boolean',
  },

  images: {
    control: 'boolean',
  },

  modulebackgroundcolor: {
    control: 'color',
  },

  roundal1image: { control: 'text' },
  roundal1background: { control: 'color' },
  roundal1color: { control: 'color' },
  roundal1alt: { control: 'text' },
  roundal1age: { control: 'text' },
  roundal1textunderage: { control: 'text' },
  roundal1link: { control: 'text' },

  roundal2image: { control: 'text' },
  roundal2background: { control: 'color' },
  roundal2color: { control: 'color' },
  roundal2alt: { control: 'text' },
  roundal2age: { control: 'text' },
  roundal2textunderage: { control: 'text' },
  roundal2link: { control: 'text' },

  roundal3image: { control: 'text' },
  roundal3background: { control: 'color' },
  roundal3color: { control: 'color' },
  roundal3alt: { control: 'text' },
  roundal3age: { control: 'text' },
  roundal3textunderage: { control: 'text' },
  roundal3link: { control: 'text' },

  roundal4image: { control: 'text' },
  roundal4background: { control: 'color' },
  roundal4color: { control: 'color' },
  roundal4alt: { control: 'text' },
  roundal4age: { control: 'text' },
  roundal4textunderage: { control: 'text' },
  roundal4link: { control: 'text' },

  roundal5image: { control: 'text' },
  roundal5background: { control: 'color' },
  roundal5color: { control: 'color' },
  roundal5alt: { control: 'text' },
  roundal5age: { control: 'text' },
  roundal5textunderage: { control: 'text' },
  roundal5link: { control: 'text' },

  roundal6image: { control: 'text' },
  roundal6background: { control: 'color' },
  roundal6color: { control: 'color' },
  roundal6alt: { control: 'text' },
  roundal6age: { control: 'text' },
  roundal6textunderage: { control: 'text' },
  roundal6link: { control: 'text' },

  rounbdal1dataelementtype: { control: 'text' },
  rounbdal1datapromotionindex: { control: 'text' },
  roundal1datapromotionname: { control: 'text' },

  roundal2dataelementtype: { control: 'text' },
  roundal2datapromotionindex: { control: 'text' },
  roundal2datapromotionname: { control: 'text' },

  roundal3dataelementtype: { control: 'text' },
  roundal3datapromotionindex: { control: 'text' },
  roundal3datapromotionname: { control: 'text' },

  roundal4dataelementtype: { control: 'text' },
  roundal4datapromotionindex: { control: 'text' },
  roundal4datapromotionname: { control: 'text' },

  roundal5dataelementtype: { control: 'text' },
  roundal5datapromotionindex: { control: 'text' },
  roundal5datapromotionname: { control: 'text' },

  roundal6dataelementtype: { control: 'text' },
  roundal6datapromotionindex: { control: 'text' },
  roundal6datapromotionname: { control: 'text' },
},
};

export const ShopByAgeModuleRoundals = {
args: {
moduleName: '',
selectedModule: '',
saveModule: false,


images: false,

modulebackgroundcolor: '#dbe3ff',

roundal1image: '',
roundal1background: '',
roundal1color: '',
roundal1alt: '',
roundal1age: '',
roundal1textunderage: '',
roundal1link: '',

roundal2image: '',
roundal2background: '',
roundal2color: '',
roundal2alt: '',
roundal2age: '',
roundal2textunderage: '',
roundal2link: '',

roundal3image: '',
roundal3background: '',
roundal3color: '',
roundal3alt: '',
roundal3age: '',
roundal3textunderage: '',
roundal3link: '',

roundal4image: '',
roundal4background: '',
roundal4color: '',
roundal4alt: '',
roundal4age: '',
roundal4textunderage: '',
roundal4link: '',

roundal5image: '',
roundal5background: '',
roundal5color: '',
roundal5alt: '',
roundal5age: '',
roundal5textunderage: '',
roundal5link: '',

roundal6image: '',
roundal6background: '',
roundal6color: '',
roundal6alt: '',
roundal6age: '',
roundal6textunderage: '',
roundal6link: '',

rounbdal1dataelementtype: '',
rounbdal1datapromotionindex: '',
roundal1datapromotionname: '',

roundal2dataelementtype: '',
roundal2datapromotionindex: '',
roundal2datapromotionname: '',

roundal3dataelementtype: '',
roundal3datapromotionindex: '',
roundal3datapromotionname: '',

roundal4dataelementtype: '',
roundal4datapromotionindex: '',
roundal4datapromotionname: '',

roundal5dataelementtype: '',
roundal5datapromotionindex: '',
roundal5datapromotionname: '',

roundal6dataelementtype: '',
roundal6datapromotionindex: '',
roundal6datapromotionname: '',


},

render: function Render() {
const [currentArgs, updateArgs] = useArgs();
const [modules, setModules] = useState([]);


const loadingRef = useRef(false);
const previousModule = useRef('');

// -------------------------
// LOAD MODULE
// -------------------------
useEffect(() => {
  if (
    !currentArgs.selectedModule ||
    loadingRef.current ||
    previousModule.current === currentArgs.selectedModule
  )
    return;

  const load = async () => {
    loadingRef.current = true;

    try {
      const ref = doc(db, 'ShopByAgeModule', currentArgs.selectedModule);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        previousModule.current = currentArgs.selectedModule;

        updateArgs({
          ...currentArgs,
          moduleName: currentArgs.selectedModule,
          ...snap.data(),
        });
      }
    } catch (e) {
      console.log('load error', e);
    }

    loadingRef.current = false;
  };

  load();
}, [currentArgs.selectedModule]);

// -------------------------
// SAVE MODULE
// -------------------------
useEffect(() => {
  if (
    loadingRef.current ||
    !currentArgs.saveModule ||
    !currentArgs.moduleName
  )
    return;

  const save = async () => {
    try {
      const {
        moduleName,
        selectedModule,
        saveModule,
        ...fields
      } = currentArgs;

      await setDoc(
        doc(db, 'ShopByAgeModule', moduleName),
        fields,
        {
          merge: false,
        }
      );

      updateArgs({
        saveModule: false,
        selectedModule: moduleName,
      });

      console.log('saved:', moduleName);
    } catch (e) {
      console.log('save error', e);
    }
  };

  save();
}, [currentArgs.saveModule]);

// -------------------------
// LOAD MODULE LIST
// -------------------------
useEffect(() => {
  const loadModules = async () => {
    try {
      const snap = await getDocs(
        collection(db, 'ShopByAgeModule')
      );

      const list = snap.docs.map((d) => d.id);

      setModules(list);
    } catch (e) {
      console.log('module list error', e);
    }
  };

  loadModules();
}, []);

const {
  moduleName,
  selectedModule,
  saveModule,
  ...componentArgs
} = currentArgs;

return (
  <>
    {createPortal(
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 9999,
          padding: 12,
          background: '#111',
          color: '#fff',
          borderRadius: '4px',
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <label>Load existing module: </label>

          <select
            value={currentArgs.selectedModule || ''}
            style={{ color: '#000' }}
            onChange={(e) => {
              updateArgs({
                ...currentArgs,
                selectedModule: e.target.value,
              });
            }}
          >
            <option value=''>
              -- select saved module --
            </option>

            {modules.map((m) => (
              <option
                key={m}
                value={m}
              >
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>,
      document.body
    )}

    <ShopByAgeModule {...componentArgs} />
  </>
);


},
};
