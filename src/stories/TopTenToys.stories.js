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
import { TopTenToys } from './TopTenToys';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Christmas/Top Ten Toys',
  component: TopTenToys,

  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    moduleName: { control: 'text' },
    selectedModule: { table: { disable: true } },
    saveModule: { control: 'boolean' },
    
    containerBackground: { control: 'color' },
    textColor: { control: 'color' },
    oddRankBg: { control: 'color' },
    evenRankBg: { control: 'color' },
    panelTitle: { control: 'text' },
    panelBlurb: { control: 'text' },

    // Added controls for the header and footer sections
    headerType: {
      options: ['text', 'image'],
      control: { type: 'radio' },
    },
    headerTitle: { control: 'text' },
    headerBlurb: { control: 'text' },
    headerImage: { control: 'text' },
    headerImageAlt: { control: 'text' },
    footerTitle: { control: 'text' },
    footerBlurb: { control: 'text' },
    footerSecondTitle: { control: 'text' },
    footerSecondBlurb: { control: 'text' },

    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, num) => {
      acc[`toy${num}Title`] = { control: 'text' };
      acc[`toy${num}Title`] = { control: 'text' };
      acc[`toy${num}Rank`] = {
        control: { type: 'number', min: 1, max: 10, step: 1 },
      };
      acc[`toy${num}Blurb`] = { control: 'text' };
      acc[`toy${num}Love`] = { control: 'text' };
      acc[`toy${num}LoveCharacter`] = {
        options: ['sheep', 'fox', 'seal', 'robin'],
        control: { type: 'select' },
      };
      acc[`toy${num}Tip`] = { control: 'text' };
      acc[`toy${num}TipCharacter`] = {
        options: ['sheep', 'fox', 'seal', 'robin'],
        control: { type: 'select' },
      };
      acc[`toy${num}Link`] = { control: 'text' };
      acc[`toy${num}Hero`] = { control: 'text' };
      acc[`toy${num}Heroalt`] = { control: 'text' };
      acc[`toy${num}Life`] = { control: 'text' };
      acc[`toy${num}Lifealt`] = { control: 'text' };
      acc[`toy${num}Life2`] = { control: 'text' };
      acc[`toy${num}Life2alt`] = { control: 'text' };
      acc[`toy${num}ReviewName`] = { control: 'text' };
      acc[`toy${num}ReviewText`] = { control: 'text' };
      acc[`toy${num}Button`] = {
        options: [
          'none',
          'shop-now',
          'pre-order-now',
          'store-events',
          'store-locator',
          'enter',
          'download',
          'read',
          'sign-up'
        ],
        control: { type: 'radio' },
      };
      return acc;
    }, {})
  },

  decorators: [
    (Story) => {
      const [currentArgs, updateArgs] = useArgs();
      const [modules, setModules] = useState([]);
      const loadingRef = useRef(false);
      const previousModule = useRef('');

      useEffect(() => {
        const loadModules = async () => {
          try {
            const snap = await getDocs(collection(db, 'top-ten-toys-modules'));
            const list = snap.docs.map(d => d.id);
            setModules(list);
          } catch(e) {
            console.log('module list error', e);
          }
        };
        loadModules();
      }, []);

      useEffect(() => {
        if (!currentArgs.selectedModule || loadingRef.current || previousModule.current === currentArgs.selectedModule) return;

        const load = async () => {
          loadingRef.current = true;
          try {
            const ref = doc(db, 'top-ten-toys-modules', currentArgs.selectedModule);
            const snap = await getDoc(ref);
            if (snap.exists()) {
              previousModule.current = currentArgs.selectedModule;
              updateArgs({
                ...currentArgs,
                moduleName: currentArgs.selectedModule,
                saveModule: false,
                ...snap.data(),
              });
            }
          } catch(e) {
            console.log('load error', e);
          }
          loadingRef.current = false;
        };
        load();
      }, [currentArgs.selectedModule]);

      useEffect(() => {
        if (loadingRef.current || !currentArgs.saveModule || !currentArgs.moduleName) return;

        const save = async () => {
          try {
            const { moduleName, selectedModule, saveModule, ...fields } = currentArgs;
            await setDoc(doc(db, 'top-ten-toys-modules', moduleName), fields, { merge: false });
            updateArgs({
              saveModule: false,
              selectedModule: moduleName
            });
            console.log('saved:', moduleName);
          } catch(e) {
            console.log('save error', e);
          }
        };
        save();
      }, [currentArgs.saveModule]);

      return (
        <>
          {createPortal(
            <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999, padding: 12, background: '#111', color: '#fff', borderRadius: '4px' }}>
              <div style={{ marginBottom: 8 }}>
                <label>Load module: </label>
                <select
                  value={currentArgs.selectedModule || ""}
                  style={{ color: '#000' }}
                  onChange={(e) => {
                    updateArgs({
                      ...currentArgs,
                      selectedModule: e.target.value
                    });
                  }}
                >
                  <option value="">-- select module --</option>
                  {modules.map((m) => (
                    <option key={m} value={m}>{m}</option>
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

export const TopTenToysSection = {
  args: {
    moduleName: '',
    selectedModule: '',
    saveModule: false,

    containerBackground: '#29527a',
    textColor: '#1b263b',
    oddRankBg: '#3b8ea5',
    evenRankBg: '#29527a',
    oddRankColor: '#ffffff',
    evenRankColor: '#ffffff',
    separatorColor: '#d6e4f0',
    lozengeColor: '#ffffff',
    lozengeBg: '#29527a',
    footerTextColor: '#ffffff',
    panelTitle: 'Top 10 Toys',
    panelBlurb: 'Tap a toy to jump straight to it',

    headerType: 'image',

    headerTitle: 'Our Top Ten Toys',
    headerBlurb: 'Explore the ultimate collection of must-have toys for this festive season, tried and tested by families.',

    headerImage: 'https://www.thetoyshop.com/medias/Top-Ten-Toys-Editorial-Header-2000x300px-V2-01.jpg?context=bWFzdGVyfHJvb3R8MTY5NTk5fGltYWdlL2pwZWd8YUdVMUwyaG1OaTh4TWpnME9UTTJNelExTVRrek5DOVViM0FnVkdWdUlGUnZlWE1nUldScGRHOXlhV0ZzSUVobFlXUmxjaUF5TURBd2VETXdNSEI0WDFZeUxUQXhMbXB3Wnd8MTRkMWY4ZTQ3NWU2MWE2NmI0NzViMDY0NjQ4MTU2YTRhMGI4NTk4MDllNDIwMDFjNWI5NGMyMzliODRhODc2MA',
    headerImageMobile: 'https://www.thetoyshop.com/medias/Top-Ten-Toys-Editorial-Header-2000x300px-V2-01.jpg?context=bWFzdGVyfHJvb3R8MTY5NTk5fGltYWdlL2pwZWd8YUdVMUwyaG1OaTh4TWpnME9UTTJNelExTVRrek5DOVViM0FnVkdWdUlGUnZlWE1nUldScGRHOXlhV0ZzSUVobFlXUmxjaUF5TURBd2VETXdNSEI0WDFZeUxUQXhMbXB3Wnd8MTRkMWY4ZTQ3NWU2MWE2NmI0NzViMDY0NjQ4MTU2YTRhMGI4NTk4MDllNDIwMDFjNWI5NGMyMzliODRhODc2MA',
    headerImageAlt: 'Top Ten Toys',
    footerTitle: 'Top Tips for Chritmas Gifts',
    footerBlurb: 'Check out our full holiday gift guide and check off everyone on your list.',
    footerSecondTitle: '',
    footerSecondBlurb: '',

    // Toy 1
    toy1Title: 'Mega Build Space Rover',
    toy1Rank: 1,
    toy1Blurb: 'A 480-piece buildable Mars rover with working suspension, snap-on solar panels and a posable astronaut.',
    toy1Love: 'It nails that sweet spot between challenge and reward — detailed enough to feel grown-up.',
    toy1LoveCharacter: 'sheep',
    toy1Tip: 'Sort the pieces into a muffin tin before you start to avoid lost bricks.',
    toy1TipCharacter: 'fox',

    toy1Link: '#',
    toy1Hero: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
    toy1Heroalt: 'Action view',
    toy1Life: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=640&q=80',
    toy1Lifealt: 'Action view',
    toy1Life2: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=640&q=80',
    toy1Life2alt: 'Detail view',
    toy1Button: 'shop-now',
    toy1ReviewName: '',
    toy1ReviewText: '',

    // Toy 2
    toy2Title: 'Mega Build Space Rover',
    toy2Rank: 2,
    toy2Blurb: 'A 480-piece buildable Mars rover with working suspension, snap-on solar panels and a posable astronaut.',
    toy2Love: 'It nails that sweet spot between challenge and reward — detailed enough to feel grown-up.',
    toy2LoveCharacter: 'sheep',
    toy2Tip: 'Sort the pieces into a muffin tin before you start to avoid lost bricks.',
    toy2TipCharacter: 'fox',

    toy2Link: '#',
    toy2Hero: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
    toy2Heroalt: 'Action view',
    toy2Life: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=640&q=80',
    toy2Lifealt: 'Action view',
    toy2Life2: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=640&q=80',
    toy2Life2alt: 'Detail view',
    toy2Button: 'shop-now',
    toy2ReviewName: '',
    toy2ReviewText: '',

    // Toys 3 through 10 initialized with baseline structure
    ...[3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, num) => {
      acc[`toy${num}Title`] = `Toy Item Number ${num}`;
      acc[`toy${num}Rank`] = num;
      acc[`toy${num}Blurb`] = `This is the descriptive text block for item number ${num} in the top ten selection list.`;

      acc[`toy${num}Love`] = 'A wonderful addition that brings endless fun and incredible quality value to playtime.';
      acc[`toy${num}LoveCharacter`] = 'sheep';

      acc[`toy${num}Tip`] = 'Always follow the setup instructions for the best long-term experience.';
      acc[`toy${num}TipCharacter`] = 'fox';

      acc[`toy${num}Link`] = '#';
      acc[`toy${num}Hero`] = 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80';
      acc[`toy${num}Heroalt`] = 'Action view';
      acc[`toy${num}Life`] = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=640&q=80';
      acc[`toy${num}Lifealt`] = 'Action view';
      acc[`toy${num}Life2`] = 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=640&q=80';
      acc[`toy${num}Life2alt`] = 'Detail view';
      acc[`toy${num}Button`] = 'shop-now';
      acc[`toy${num}ReviewName`] = '';
      acc[`toy${num}ReviewText`] = '';
      return acc;
    }, {})
  },
};