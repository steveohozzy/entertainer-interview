import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { BlogPanels } from './Elcblogpanels';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'ELC/Blog Panels',
  component: BlogPanels,
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

export const BlogPanelsHero = {
  args: {
    user: 'stories',
    blogsectiontitle: 'Parenting Advice & Guides',
    blogpanel1link: 'https://www.elc.co.uk/raising-little-explorers/guide-to-your-babys-developmental-milestones',
    blogpanel1image: 'https://www.elc.co.uk/medias/HP-Hero-2.png?context=bWFzdGVyfHJvb3R8MTA2NTc5fGltYWdlL3BuZ3xhR0ZoTDJnM09TOHhNamN5TXpJeE56RTNNRFEyTWk5SVVDQklaWEp2SURJdWNHNW58MjEzYmNiZTdkN2MzZjkxMDc5YjM4MDUxMjRiNzY1NDhlN2UyYzA2ZTQzN2YxMTg1ZjE4MDFiYzE5NzdiNjQ5NA',
    blogpanel1imagealt: 'Guide to Your Baby’s Developmental Milestones',
    blogpanel1readtime: '5 min read',
    blogpanel1title: 'Guide to Your Baby’s Developmental Milestones',
    blogpanel1linktext: 'Read',
    blogpanel2link: 'https://www.elc.co.uk/raising-little-explorers/do-you-need-a-pushchair-a-travel-system-or-a-stroller',
    blogpanel2image: 'https://www.elc.co.uk/medias/HP-Hero-2-1-.png?context=bWFzdGVyfHJvb3R8OTQ3OTR8aW1hZ2UvcG5nfGFHUmlMMmcyWmk4eE1qY3lNekl4TnpRek1qWXdOaTlJVUNCSVpYSnZJRElnS0RFcExuQnVad3w2YjVkNGExZTM2M2U0MzdhYzM0ZDMwMTVkOTY1NGQ0MGU1YTRhYjFmYWI1MDEzNDY2YmU4ZTY4YmRmYmRkYTc3',
    blogpanel2imagealt: 'Do You Need a Pushchair, TravelSystem or a Stroller?',
    blogpanel2readtime: '6 min read',
    blogpanel2title: 'Do You Need a Pushchair, TravelSystem or a Stroller?',
    blogpanel2linktext: 'Read',
    blogpanel3link: 'https://www.elc.co.uk/raising-little-explorers/5-ways-music-helps-your-child-develop',
    blogpanel3image: 'https://www.elc.co.uk/medias/HP-Hero-2-2-.png?context=bWFzdGVyfHJvb3R8NzkyMDh8aW1hZ2UvcG5nfGFESmtMMmcyWmk4eE1qY3lNekl4TnpRNU9ERTBNaTlJVUNCSVpYSnZJRElnS0RJcExuQnVad3wwODhlYTYzZDZjNzk1YTQzODAxNzg2NGI5NmVlYWZlMjAxMjY4MmY4NGJhZjAyMDhkM2ZjNGRiM2JmZmE1YTI1',
    blogpanel3imagealt: '5 Ways Music Helps Your Child Develop',
    blogpanel3readtime: '7 min read',
    blogpanel3title: '5 Ways Music Helps Your Child Develop',
    blogpanel3linktext: 'Read',
    blogpanel4link: 'https://www.elc.co.uk/raising-little-explorers/learning-to-write',
    blogpanel4image: 'https://www.elc.co.uk//medias/HP-Hero-2-3-.png?context=bWFzdGVyfHJvb3R8NjcwMTN8aW1hZ2UvcG5nfGFERmpMMmcyWXk4eE1qY3lNekl4TnpVMk16WTNPQzlJVUNCSVpYSnZJRElnS0RNcExuQnVad3xlNDQxNjc1OTI1YTBhMmQ2MzkzMDBjZWNiODFkMDE5YzQxODdiNTg0M2RjNjc3NGIyMTk5MDEzYTdjNjVkMWQ3',
    blogpanel4imagealt: 'Learning to Write: From Scribbles to Stories',
    blogpanel4readtime: '6 min read',
    blogpanel4title: 'Learning to Write: From Scribbles to Stories',
    blogpanel4linktext: 'Read',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // -------------------------------------------------------
    // LOAD FROM FIREBASE (USER COLLECTION → BlogPanels DOC)
    // -------------------------------------------------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "BlogPanels");
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

    // -------------------------------------------------------
    // SAVE TO FIREBASE (FULL OVERWRITE)
    // -------------------------------------------------------
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
          const docRef = doc(db, selectedUser, "BlogPanels");

          // ✅ THIS CREATES OR OVERWRITES ENTIRE DOCUMENT
          await setDoc(docRef, fields, { merge: false });

          console.log("CREATED / OVERWRITTEN:", selectedUser, fields);
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      };

      send();
    }, [currentArgs]);

    return <BlogPanels {...args} />;
  },
};