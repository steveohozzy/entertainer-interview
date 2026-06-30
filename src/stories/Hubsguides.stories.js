import { db } from '../config/firebase';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs
} from 'firebase/firestore';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HubsGuides } from './Hubsguides';
import { useArgs } from "storybook/preview-api";

export default {
  title: 'Hubs/Guides',
  component: HubsGuides,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
    moduleName: { control: 'text' },
    selectedModule: { control: 'text' },
    saveModule: { control: 'boolean' },
  },

  decorators: [
    (Story) => {
      const [currentArgs, updateArgs] = useArgs();
      const [modules, setModules] = useState([]);
      const loadingRef = useRef(false);
      const previousModule = useRef('');

      // -------------------------
      // LOAD MODULE LIST
      // -------------------------
      useEffect(() => {
        const loadModules = async () => {
          try {
            const snap = await getDocs(collection(db, 'hubs-guides-modules'));
            setModules(snap.docs.map(d => d.id));
          } catch (e) {
            console.log('module list error', e);
          }
        };

        loadModules();
      }, []);

      // -------------------------
      // LOAD MODULE
      // -------------------------
      useEffect(() => {
        if (
          !currentArgs.selectedModule ||
          loadingRef.current ||
          previousModule.current === currentArgs.selectedModule
        ) return;

        const load = async () => {
          loadingRef.current = true;

          try {
            const ref = doc(
              db,
              'hubs-guides-modules',
              currentArgs.selectedModule
            );

            const snap = await getDoc(ref);

            if (snap.exists()) {
              previousModule.current = currentArgs.selectedModule;

              updateArgs({
                ...currentArgs,
                ...snap.data(),
                moduleName: currentArgs.selectedModule,
                saveModule: false,
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
        ) return;

        const save = async () => {
          try {
            const {
              moduleName,
              selectedModule,
              saveModule,
              ...fields
            } = currentArgs;

            await setDoc(
              doc(db, 'hubs-guides-modules', moduleName),
              fields,
              { merge: false }
            );

            updateArgs({
              ...currentArgs,
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

      return (
        <>
          {createPortal(
            <div style={{
              position: 'fixed',
              top: 10,
              right: 10,
              zIndex: 9999,
              padding: 12,
              background: '#111',
              color: '#fff',
              borderRadius: 4,
            }}>
              <div style={{ marginBottom: 8 }}>
                <label>Load module:</label>

                <select
                  value={currentArgs.selectedModule || ''}
                  style={{ color: '#000' }}
                  onChange={(e) =>
                    updateArgs({
                      ...currentArgs,
                      selectedModule: e.target.value,
                    })
                  }
                >
                  <option value="">-- select module --</option>
                  {modules.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>,
            document.body
          )}

          <Story />
        </>
      );
    },
  ],
};

export const HubsGuidesContent = {
  args: {
    user: 'stories',

    moduleName: '',
    selectedModule: '',
    saveModule: false,
    title: 'Gaming Guides',
    titlecolor: '#fff',
    titlebackgroundcolor: '#1f2b91',

    panel1image: 'https://www.thetoyshop.com/medias/300Wx300H-580440-Primary?context=bWFzdGVyfGltYWdlc3w3Mzg5N3xpbWFnZS9qcGVnfGFHVTNMMmd6T0M4eE1qWXhPRFkxTnpVNU5UUXlNaTh6TURCWGVETXdNRWhmTlRnd05EUXdYMUJ5YVcxaGNua3xjMWVlY2NlNGZkY2Q1Y2EzMTkwM2Y5YThhNzM3NzM3ZTlmODM0OTIwNTQ3N2Y0MGZkYjA1MWVhYWY2ZGE5NWQ2',
    panel1imagealt: 'Nintendo Switch 2 Mario Kart World Deluxe Travel Case',
    panel1title: 'Nintendo Switch 2 Mario Kart World Deluxe Travel Case',
    panel1link: 'https://www.thetoyshop.com/online-only/Nintendo-Switch-2-Mario-Kart-World-Deluxe-Travel-Case/p/580440',
    panel1backgroundcolor: '#1f2b91',
    panel1bordercolor: '#1f2b91',
    panel1borderhovercolor: '#1f2b91',
    panel1textcolor: '#fff',
    panel1hovercolor: '#1f2b91',
    panel1hoverbackgroundcolor: '#fff',
    panel1buttontextcolor: '#fff',
    panel1buttonhovercolor: '#fff',
    panel1buttonbackgroundcolor: '#009e44',
    panel1buttonhoverbackgroundcolor: '#1f2b91',
    panel1buttonbordercolor: '#dbe3ff',
    panel1buttonborderhovercolor: '#dbe3ff',

    panel2image: 'https://www.thetoyshop.com/medias/300Wx300H-581558-581558-3.jpg?context=bWFzdGVyfGltYWdlc3w4ODIwOXxpbWFnZS9qcGVnfGFHRTVMMmcyT1M4eE1qY3hNekl4TnpVeU16YzBNaTh6TURCWGVETXdNRWhmTlRneE5UVTRYelU0TVRVMU9DMHpMbXB3Wnd8N2NiMGExZmY0NmJjN2RkN2M4YzBhYTc2NTQyNGVkZjlhNWJlMDZlODU4M2I4M2ExNjcxYmJlYzNiNWE3ZDUzZQ',
    panel2imagealt: 'DC Batman Desk Pad and Coaster Set',
    panel2title: 'DC Batman Desk Pad and Coaster Set',
    panel2link: 'https://www.thetoyshop.com/online-only/DC-Batman-Desk-Pad-and-Coaster-Set/p/581558',
    panel2backgroundcolor: '',
    panel2bordercolor: '',
    panel2borderhovercolor: '',
    panel2textcolor: '',
    panel2hovercolor: '',
    panel2hoverbackgroundcolor: '',
    panel2buttontextcolor: '',
    panel2buttonhovercolor: '',
    panel2buttonbackgroundcolor: '',
    panel2buttonhoverbackgroundcolor: '',
    panel2buttonbordercolor: '',
    panel2buttonborderhovercolor: '',

    panel3image: 'https://www.thetoyshop.com/medias/300Wx300H-583611-583611-5.jpg?context=bWFzdGVyfGltYWdlc3w0NjEyOHxpbWFnZS9qcGVnfGFEUTNMMmd6TWk4eE1qWTVORFkwTmpNMU9EQTBOaTh6TURCWGVETXdNRWhmTlRnek5qRXhYelU0TXpZeE1TMDFMbXB3Wnd8ZThkNWU1ZTIzN2ZkNjYxM2JmYjA4Yzk2MTk4MWM4OGMxNTM0YjVmMTFjMGVkYzExM2FlZDU2YTM3ZTI0YmQ0OQ',
    panel3imagealt: 'Numskull Minecraft Creeper Gaming Locker',
    panel3title: 'Numskull Minecraft Creeper Gaming Locker',
    panel3link: 'https://www.thetoyshop.com/online-only/Numskull-Minecraft-Creeper-Gaming-Locker/p/583611',
    panel3backgroundcolor: '',
    panel3bordercolor: '',
    panel3borderhovercolor: '',
    panel3textcolor: '',
    panel3hovercolor: '',
    panel3hoverbackgroundcolor: '',
    panel3buttontextcolor: '',
    panel3buttonhovercolor: '',
    panel3buttonbackgroundcolor: '',
    panel3buttonhoverbackgroundcolor: '',
    panel3buttonbordercolor: '',
    panel3buttonborderhovercolor: '',

    panel4image: 'https://www.thetoyshop.com/medias/300Wx300H-583602-Primary?context=bWFzdGVyfGltYWdlc3wzMjA5NnxpbWFnZS9qcGVnfGFERTNMMmd3Tmk4eE1qY3dNVGN5TnpRMU56TXhNQzh6TURCWGVETXdNRWhmTlRnek5qQXlYMUJ5YVcxaGNua3w4YWRkMDk0NThiNDM5MjY2Mzg0MDIwZTdhYWY3MTI1ZDQ3ZmJkN2VjZmQxYzU3ZWUwNmZkYTdmNjM0YmQ1YjQz',
    panel4imagealt: 'Maxx Tech 4In1 Combo Kit Gaming Bundle with Men of War PC Game Download Code',
    panel4title: 'Maxx Tech 4In1 Combo Kit Gaming Bundle with Men of War PC Game Download Code',
    panel4link: 'https://www.thetoyshop.com/online-only/Maxx-Tech-4In1-Combo-Kit-Gaming-Bundle-with-Men-of-War-PC-Game-Download-Code/p/583602',
    panel4backgroundcolor: '',
    panel4bordercolor: '',
    panel4borderhovercolor: '',
    panel4textcolor: '',
    panel4hovercolor: '',
    panel4hoverbackgroundcolor: '',
    panel4buttontextcolor: '',
    panel4buttonhovercolor: '',
    panel4buttonbackgroundcolor: '',
    panel4buttonhoverbackgroundcolor: '',
    panel4buttonbordercolor: '',
    panel4buttonborderhovercolor: '',

    panel5image: '',
    panel5imagealt: '',
    panel5title: '',
    panel5link: '',
    panel5backgroundcolor: '',
    panel5bordercolor: '',
    panel5borderhovercolor: '',
    panel5textcolor: '',
    panel5hovercolor: '',
    panel5hoverbackgroundcolor: '',
    panel5buttontextcolor: '',
    panel5buttonhovercolor: '',
    panel5buttonbackgroundcolor: '',
    panel5buttonhoverbackgroundcolor: '',
    panel5buttonbordercolor: '',
    panel5buttonborderhovercolor: '',

    panel6image: '',
    panel6imagealt: '',
    panel6title: '',
    panel6link: '',
    panel6backgroundcolor: '',
    panel6bordercolor: '',
    panel6borderhovercolor: '',
    panel6textcolor: '',
    panel6hovercolor: '',
    panel6hoverbackgroundcolor: '',
    panel6buttontextcolor: '',
    panel6buttonhovercolor: '',
    panel6buttonbackgroundcolor: '',
    panel6buttonhoverbackgroundcolor: '',
    panel6buttonbordercolor: '',
    panel6buttonborderhovercolor: '',

    panel7image: '',
    panel7imagealt: '',
    panel7title: '',
    panel7link: '',
    panel7backgroundcolor: '',
    panel7bordercolor: '',
    panel7borderhovercolor: '',
    panel7textcolor: '',
    panel7hovercolor: '',
    panel7hoverbackgroundcolor: '',
    panel7buttontextcolor: '',
    panel7buttonhovercolor: '',
    panel7buttonbackgroundcolor: '',
    panel7buttonhoverbackgroundcolor: '',
    panel7buttonbordercolor: '',
    panel7buttonborderhovercolor: '',

    panel8image: '',
    panel8imagealt: '',
    panel8title: '',
    panel8link: '',
    panel8backgroundcolor: '',
    panel8bordercolor: '',
    panel8borderhovercolor: '',
    panel8textcolor: '',
    panel8hovercolor: '',
    panel8hoverbackgroundcolor: '',
    panel8buttontextcolor: '',
    panel8buttonhovercolor: '',
    panel8buttonbackgroundcolor: '',
    panel8buttonhoverbackgroundcolor: '',
    panel8buttonbordercolor: '',
    panel8buttonborderhovercolor: '',

    panel9image: '',
    panel9imagealt: '',
    panel9title: '',
    panel9link: '',
    panel9backgroundcolor: '',
    panel9bordercolor: '',
    panel9borderhovercolor: '',
    panel9textcolor: '',
    panel9hovercolor: '',
    panel9hoverbackgroundcolor: '',
    panel9buttontextcolor: '',
    panel9buttonhovercolor: '',
    panel9buttonbackgroundcolor: '',
    panel9buttonhoverbackgroundcolor: '',
    panel9buttonbordercolor: '',
    panel9buttonborderhovercolor: '',

    panel10image: '',
    panel10imagealt: '',
    panel10title: '',
    panel10link: '',
    panel10backgroundcolor: '',
    panel10bordercolor: '',
    panel10borderhovercolor: '',
    panel10textcolor: '',
    panel10hovercolor: '',
    panel10hoverbackgroundcolor: '',
    panel10buttontextcolor: '',
    panel10buttonhovercolor: '',
    panel10buttonbackgroundcolor: '',
    panel10buttonhoverbackgroundcolor: '',
    panel10buttonbordercolor: '',
    panel10buttonborderhovercolor: '',

    panel11image: '',
    panel11imagealt: '',
    panel11title: '',
    panel11link: '',
    panel11backgroundcolor: '',
    panel11bordercolor: '',
    panel11borderhovercolor: '',
    panel11textcolor: '',
    panel11hovercolor: '',
    panel11hoverbackgroundcolor: '',
    panel11buttontextcolor: '',
    panel11buttonhovercolor: '',
    panel11buttonbackgroundcolor: '',
    panel11buttonhoverbackgroundcolor: '',
    panel11buttonbordercolor: '',
    panel11buttonborderhovercolor: '',

    panel12image: '',
    panel12imagealt: '',
    panel12title: '',
    panel12link: '',
    panel12backgroundcolor: '',
    panel12bordercolor: '',
    panel12borderhovercolor: '',
    panel12textcolor: '',
    panel12hovercolor: '',
    panel12hoverbackgroundcolor: '',
    panel12buttontextcolor: '',
    panel12buttonhovercolor: '',
    panel12buttonbackgroundcolor: '',
    panel12buttonhoverbackgroundcolor: '',
    panel12buttonbordercolor: '',
    panel12buttonborderhovercolor: '',
  },
};