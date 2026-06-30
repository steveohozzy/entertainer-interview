import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { Footballhubugc } from './Footballhubugc';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Football Hub/UGC Carousel',
  component: Footballhubugc,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

export const FootballhubugcContent = {
  args: {
    user: 'stories',
    title: 'Our Panini Store Tour',
    panel1image: 'https://www.thetoyshop.com/medias/IMG-3402.jpeg?context=bWFzdGVyfHJvb3R8MjgxOTg1MHxpbWFnZS9qcGVnfGFHSTNMMmhsWVM4eE1qYzROamM0TURrNU5UWXhOQzlKVFVkZk16UXdNaTVxY0dWbnw0ZTc3ZGQ0MzJhYzZiNjg4MDE4Njg2NTA4NjAyYTY1Yzk3NTAzN2ZiZDhhMTVhOTE4MTY5NDMxYTY5MGEwYTcz',
    panel1imagealt: 'Panini Tour',
    panel2image: 'https://www.thetoyshop.com/medias/IMG-3412.jpeg?context=bWFzdGVyfHJvb3R8MTg2MzA0MnxpbWFnZS9qcGVnfGFEaGpMMmhqWVM4eE1qYzROamM0TVRBMk1URTFNQzlKVFVkZk16UXhNaTVxY0dWbnwzN2M3NTQzNDFhM2VmMzNiM2IxOTRlMGIxNDBiNDI2Njk2M2QyNjVjODJhNDdhNTc0YjA3MTk0YTczYzQ1MDc3',
    panel2imagealt: 'Panini Tour',
    panel3image: 'https://www.thetoyshop.com/medias/IMG-3407.jpeg?context=bWFzdGVyfHJvb3R8MzA2NDE5OHxpbWFnZS9qcGVnfGFEaGxMMmhqTnk4eE1qYzROamM0TVRFeU5qWTROaTlKVFVkZk16UXdOeTVxY0dWbnxkODk0OWY5MWQ1YmMzZjQxNjdmMmE3NjQwZGI0MTI4NmNiNWJjMTVmZmU2OGZkYWE0MmEyZjQ4ZjU0M2U2ZGEy',
    panel3imagealt: 'Panini Tour',
    panel4image: 'https://www.thetoyshop.com/medias/IMG-3404.jpeg?context=bWFzdGVyfHJvb3R8MzUzMjA2OHxpbWFnZS9qcGVnfGFHTmpMMmhqTmk4eE1qYzROamM0TVRFNU1qSXlNaTlKVFVkZk16UXdOQzVxY0dWbnxjMzMzMWEwMGVjMGRhZGMxZWNiZTY3MjYyM2FjNjg0ZGU5ZWI1YmE0NmI2ZmU5Yjc1N2FlODFmNjFjYWJlMTY3',
    panel4imagealt: 'Panini Tour',
    panel5image: 'https://www.thetoyshop.com/medias/IMG-3484.jpeg?context=bWFzdGVyfHJvb3R8MzQ4Mjc2OHxpbWFnZS9qcGVnfGFHTm1MMmhqTXk4eE1qYzROamM0TVRJMU56YzFPQzlKVFVkZk16UTROQzVxY0dWbnw1ZjJlNzVkZDQwNDA5MWIyYzFmNDQyODA3YmVkZTE3YjU1YzY4NDRkOGEzOTUxNDJiMzU2MzM3YjFjZDIwN2E5',
    panel5imagealt: 'Panini Tour',
    panel6image: '',
    panel6imagealt: '',
    panel7image: '',
    panel7imagealt: '',
    panel8image: '',
    panel8imagealt: '',
    panel9image: 'h',
    panel9imagealt: '',
    panel10image: '',
    panel10imagealt: '',
    panel11image: '',
    panel11imagealt: '',
    panel12image: '',
    panel12imagealt: '',
  },

  render: function Render(args) {
  const [currentArgs, updateArgs] = useArgs();

  const isLoadingRef = useRef(false);
  const lastSyncedData = useRef({});
  const lastUserRef = useRef(args.user);

  // ----------------------------
  // LOAD FROM FIREBASE
  // ----------------------------
  useEffect(() => {
    const load = async () => {
      isLoadingRef.current = true;
      lastUserRef.current = args.user;

      try {
        const docRef = doc(
          db,
          args.user,
          "Footballhubugc"
        );

        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const firestoreData = snap.data();

          lastSyncedData.current = firestoreData;

          // Important: preserve all existing args structure
          updateArgs({
            ...args,
            ...firestoreData,
            user: args.user,
          });
        }

      } catch (e) {
        console.error("Firestore load error:", e);
      }

      isLoadingRef.current = false;
    };

    load();

  }, [args.user]);

  // ----------------------------
  // SAVE TO FIREBASE
  // ----------------------------
  useEffect(() => {
    if (isLoadingRef.current) return;

    const selectedUser = lastUserRef.current;

    if (currentArgs.user !== selectedUser) return;

    const { user, ...fields } = currentArgs;

    const changed = Object.entries(fields).some(
      ([k, v]) => lastSyncedData.current[k] !== v
    );

    if (!changed) return;

    lastSyncedData.current = fields;

    const save = async () => {
      try {
        const docRef = doc(
          db,
          selectedUser,
          "Footballhubugc"
        );

        await setDoc(docRef, fields, {
          merge: false
        });

      } catch (e) {
        console.error("Firestore save error:", e);
      }
    };

    save();

  }, [currentArgs]);

  return <Footballhubugc {...currentArgs} />;
}
};