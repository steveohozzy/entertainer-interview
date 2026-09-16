import { db } from '../config/firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { VideoModule } from './Videomodule';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Components/Video Module',
  component: VideoModule,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
  },
};

export const VideoModuleHero = {
  args: {
    user: 'stories',
    videosrc: '',
    background: '',
    titlecolor: '',
    textcolor: '',
    buttonbackground: '',
    buttontextcolor: '',
    buttonbackgroundhover: '',
    title: '',
    blurb: '',
    buttontext: '',
    link: '',
  },
  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "videomodule");
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const firestoreData = snap.data();
            lastSyncedData.current = firestoreData;

            updateArgs({
              ...currentArgs,
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

    useEffect(() => {
      if (isLoadingRef.current) return;

      const selectedUser = lastUserRef.current;

      if (currentArgs.user !== selectedUser) return;

      const { user, ...fields } = currentArgs;

      const prevFields = lastSyncedData.current;
      const changed = Object.entries(fields).some(
        ([k, v]) => prevFields[k] !== v
      );

      if (!changed) return;

      lastSyncedData.current = fields;

      const send = async () => {
        try {
          const docRef = doc(db, selectedUser, "videomodule");
          await updateDoc(docRef, fields);
          console.log("UPDATED:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore update error:", e);
        }
      };

      send();
    }, [currentArgs]);

    const deleteVideoModule = async () => {
      const selectedUser = currentArgs.user;

      if (!selectedUser) return;

      if (!window.confirm(`Delete the Video Module for "${selectedUser}"?`)) return;

      try {
        await deleteDoc(doc(db, selectedUser, "videomodule"));

        lastSyncedData.current = {};

        updateArgs({
          user: selectedUser,
          videosrc: '',
          background: '',
          titlecolor: '',
          textcolor: '',
          buttonbackground: '',
          buttontextcolor: '',
          buttonbackgroundhover: '',
          title: '',
          blurb: '',
          buttontext: '',
          link: '',
        });
      } catch (e) {
        console.error("Firestore delete error:", e);
      }
    };

    return (
      <>
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
          <button
            type="button"
            onClick={deleteVideoModule}
          >
            Delete {currentArgs.user} Video Module
          </button>
        </div>

        <VideoModule {...args} />
      </>
    );
  },
};