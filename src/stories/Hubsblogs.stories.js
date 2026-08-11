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
import { HubsGuides } from './Hubsblogs';
import { useArgs } from "storybook/preview-api";

export default {
  title: 'Modules/Blogs',
  component: HubsGuides,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    moduleName: { control: 'text' },
    selectedModule: { control: 'text' },
    saveModule: { control: 'boolean' },
    lozengetextcolor: {
      control: {
        type: 'select',
      },
      options: ['#000000', '#FFFFFF'],
      labels: {
        '#000000': 'Black',
        '#FFFFFF': 'White',
      },
    },

    panel1buttonStyle: {
      options: [
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },

  panel2buttonStyle: {
    options: [
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },

  panel3buttonStyle: {
    options: [
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },

  panel4buttonStyle: {
    options: [
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },

  panel5buttonStyle: {
    options: [
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },

  panel6buttonStyle: {
    options: [
      'shop-now',
      'pre-order-now',
      'store-events',
      'store-locator',
      'enter',
      'download',
      'read',
      'sign-up',
    ],
    control: 'radio',
  },
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
    lozengebackgroundcolor: '',
    lozengetextcolor: '#000000',

    panelbordercolor: '#fff',

    panel1image: 'https://www.thetoyshop.com/medias/300Wx300H-580440-Primary?context=bWFzdGVyfGltYWdlc3w3Mzg5N3xpbWFnZS9qcGVnfGFHVTNMMmd6T0M4eE1qWXhPRFkxTnpVNU5UUXlNaTh6TURCWGVETXdNRWhmTlRnd05EUXdYMUJ5YVcxaGNua3xjMWVlY2NlNGZkY2Q1Y2EzMTkwM2Y5YThhNzM3NzM3ZTlmODM0OTIwNTQ3N2Y0MGZkYjA1MWVhYWY2ZGE5NWQ2',
    panel1imagealt: 'Nintendo Switch 2 Mario Kart World Deluxe Travel Case',
    panel1title: 'Nintendo Switch 2 Mario Kart World Deluxe Travel Case',
    panel1link: 'https://www.thetoyshop.com/online-only/Nintendo-Switch-2-Mario-Kart-World-Deluxe-Travel-Case/p/580440',
    panel1buttonStyle: 'read',

    panel2image: 'https://www.thetoyshop.com/medias/300Wx300H-581558-581558-3.jpg?context=bWFzdGVyfGltYWdlc3w4ODIwOXxpbWFnZS9qcGVnfGFHRTVMMmcyT1M4eE1qY3hNekl4TnpVeU16YzBNaTh6TURCWGVETXdNRWhmTlRneE5UVTRYelU0TVRVMU9DMHpMbXB3Wnd8N2NiMGExZmY0NmJjN2RkN2M4YzBhYTc2NTQyNGVkZjlhNWJlMDZlODU4M2I4M2ExNjcxYmJlYzNiNWE3ZDUzZQ',
    panel2imagealt: 'DC Batman Desk Pad and Coaster Set',
    panel2title: 'DC Batman Desk Pad and Coaster Set',
    panel2link: 'https://www.thetoyshop.com/online-only/DC-Batman-Desk-Pad-and-Coaster-Set/p/581558',
    panel2buttonStyle: 'read',

    panel3image: 'https://www.thetoyshop.com/medias/300Wx300H-583611-583611-5.jpg?context=bWFzdGVyfGltYWdlc3w0NjEyOHxpbWFnZS9qcGVnfGFEUTNMMmd6TWk4eE1qWTVORFkwTmpNMU9EQTBOaTh6TURCWGVETXdNRWhmTlRnek5qRXhYelU0TXpZeE1TMDFMbXB3Wnd8ZThkNWU1ZTIzN2ZkNjYxM2JmYjA4Yzk2MTk4MWM4OGMxNTM0YjVmMTFjMGVkYzExM2FlZDU2YTM3ZTI0YmQ0OQ',
    panel3imagealt: 'Numskull Minecraft Creeper Gaming Locker',
    panel3title: 'Numskull Minecraft Creeper Gaming Locker',
    panel3link: 'https://www.thetoyshop.com/online-only/Numskull-Minecraft-Creeper-Gaming-Locker/p/583611',
    panel3buttonStyle: 'read',

    panel4image: 'https://www.thetoyshop.com/medias/300Wx300H-583602-Primary?context=bWFzdGVyfGltYWdlc3wzMjA5NnxpbWFnZS9qcGVnfGFERTNMMmd3Tmk4eE1qY3dNVGN5TnpRMU56TXhNQzh6TURCWGVETXdNRWhmTlRnek5qQXlYMUJ5YVcxaGNua3w4YWRkMDk0NThiNDM5MjY2Mzg0MDIwZTdhYWY3MTI1ZDQ3ZmJkN2VjZmQxYzU3ZWUwNmZkYTdmNjM0YmQ1YjQz',
    panel4imagealt: 'Maxx Tech 4In1 Combo Kit Gaming Bundle with Men of War PC Game Download Code',
    panel4title: 'Maxx Tech 4In1 Combo Kit Gaming Bundle with Men of War PC Game Download Code',
    panel4link: 'https://www.thetoyshop.com/online-only/Maxx-Tech-4In1-Combo-Kit-Gaming-Bundle-with-Men-of-War-PC-Game-Download-Code/p/583602',
    panel4buttonStyle: 'read',

    panel5image: '',
    panel5imagealt: '',
    panel5title: '',
    panel5link: '',
    panel5buttonStyle: 'read',

    panel6image: '',
    panel6imagealt: '',
    panel6title: '',
    panel6link: '',
    panel6buttonStyle: 'read',

  },
};