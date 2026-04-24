import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { BrandsCarousel } from './Brandscarousel';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'ELC/Brands Carousel',
  component: BrandsCarousel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
    positionNumber1: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber2: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber3: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber4: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber5: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber6: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber7: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber8: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber9: { control: { type: 'number', min: 1, max: 10 } },
    positionNumber10: { control: { type: 'number', min: 1, max: 10 } },
  },
};

export const BrandsCarouselItems = {
  args: {
    user: 'stories',

    // Slides 1–10 (unchanged)
    positionNumber1: 1, image1: '', imagealt1: '', tagline1: '', link1: '', linktext1: '', logoimage1: '', logoimagealt1: '',
    positionNumber2: 2, image2: '', imagealt2: '', tagline2: '', link2: '', linktext2: '', logoimage2: '', logoimagealt2: '',
    positionNumber3: 3, image3: '', imagealt3: '', tagline3: '', link3: '', linktext3: '', logoimage3: '', logoimagealt3: '',
    positionNumber4: 4, image4: '', imagealt4: '', tagline4: '', link4: '', linktext4: '', logoimage4: '', logoimagealt4: '',
    positionNumber5: 5, image5: '', imagealt5: '', tagline5: '', link5: '', linktext5: '', logoimage5: '', logoimagealt5: '',
    positionNumber6: 6, image6: '', imagealt6: '', tagline6: '', link6: '', linktext6: '', logoimage6: '', logoimagealt6: '',
    positionNumber7: 7, image7: '', imagealt7: '', tagline7: '', link7: '', linktext7: '', logoimage7: '', logoimagealt7: '',
    positionNumber8: 8, image8: '', imagealt8: '', tagline8: '', link8: '', linktext8: '', logoimage8: '', logoimagealt8: '',
    positionNumber9: 9, image9: '', imagealt9: '', tagline9: '', link9: '', linktext9: '', logoimage9: '', logoimagealt9: '',
    positionNumber10: 10, image10: '', imagealt10: '', tagline10: '', link10: '', linktext10: '', logoimage10: '', logoimagealt10: '',
  },

  render: function Render(args) {
    const [currentArgs, updateArgs] = useArgs();

    const isLoadingRef = useRef(false);
    const lastUserRef = useRef(args.user);
    const lastSyncedData = useRef({});

    // ---------------- LOAD FROM FIRESTORE ----------------
    useEffect(() => {
      const load = async () => {
        isLoadingRef.current = true;
        lastUserRef.current = args.user;

        try {
          const docRef = doc(db, args.user, "brandscarousel");
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const firestoreData = snap.data()?.brandscarousel;

if (firestoreData) {
  lastSyncedData.current = firestoreData;

  updateArgs({
    ...currentArgs,
    ...firestoreData,
    user: args.user,
  });
}
          }
        } catch (e) {
          console.error("Firestore load error:", e);
        }

        isLoadingRef.current = false;
      };

      load();
    }, [args.user]);

    // ---------------- SYNC TO FIRESTORE ----------------
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
    const docRef = doc(db, selectedUser, "brandscarousel");

    await setDoc(
      docRef,
      {
        brandscarousel: fields
      },
      { merge: true }
    );

    console.log("UPDATED:", selectedUser, fields);
  } catch (e) {
    console.error("Firestore update error:", e);
  }
};

send();
    }, [currentArgs]);

    // ---------------- TRANSFORM ARGS → SLIDES ----------------
    const slides = Array.from({ length: 10 }, (_, i) => {
      const n = i + 1;

      return {
        positionNumber: args[`positionNumber${n}`],
        image: args[`image${n}`],
        imageAlt: args[`imagealt${n}`],
        tagline: args[`tagline${n}`],
        link: args[`link${n}`],
        linkText: args[`linktext${n}`],
        logoImage: args[`logoimage${n}`],
        logoImageAlt: args[`logoimagealt${n}`],
      };
    });

    return (
      <BrandsCarousel
        user={args.user}
        slides={slides}
      />
    );
  },
};