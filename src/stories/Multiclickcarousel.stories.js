import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useCallback, useRef } from 'react';
import { MulticlickCarousel} from './Multiclickcarousel';
import { useArgs } from 'storybook/preview-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Multiclick Carousel Image Panels',
  component: MulticlickCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      options: ['stories', 'hasina', 'shermin', 'sam'],
      control: { type: 'select' },
    },
    itemsPerSlide: { control: { type: "number", min: 1, max: 6 } },
    background: { control: "color" },
    titlecolor: { control: "color" },
    textcolor: { control: "color" },
    buttonbackground: { control: "color" },
    buttontextcolor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MulticlickCarouselImages = {
  args: {
    user: 'stories',
    title: "Featured Products",
    blurb: "Shop our latest deals",
    buttontext: "Shop Now",
    background: "#18499b",
    titlecolor: "#ffffff",
    textcolor: "#ffffff",
    buttonbackground: "#009e44",
    buttontextcolor: "#ffffff",
    arrowsBackground: "#009e44",
    arrowsColor: "#ffffff",

    itemsPerSlide: 6,
    itemsPerRow: 3,
    itemsPerRowMobile: 2,

    image1: "https://picsum.photos/400/300?1",
    image1link: "#",
    image1alt: "Image 1",
    image1dataElementType: "promotion",
    image1datapromotionindex: "1",
    image1datapromotionname: "Winter Deals",
    image2: "https://picsum.photos/400/300?2",
    image2link: "#",
    image2alt: "Image 2",
    image2dataElementType: "promotion",
    image2datapromotionindex: "2",
    image2datapromotionname: "Spring Deals",
    image3: "https://picsum.photos/400/300?3",
    image3link: "#",
    image3alt: "Image 3",
    image3dataElementType: "promotion",
    image3datapromotionindex: "3",
    image3datapromotionname: "Summer Deals",
    image4: "https://picsum.photos/400/300?4",
    image4link: "#",
    image4alt: "Image 4",
    image4dataElementType: "promotion",
    image4datapromotionindex: "4",
    image4datapromotionname: "Fall Deals",
    image5: "https://picsum.photos/400/300?5",
    image5link: "#",
    image5alt: "Image 5",
    image5dataElementType: "promotion",
    image5datapromotionindex: "5",
    image5datapromotionname: "Winter Deals",
    image6: "https://picsum.photos/400/300?6",
    image6link: "#",
    image6alt: "Image 6",
    image6dataElementType: "promotion",
    image6datapromotionindex: "6",
    image6datapromotionname: "Spring Deals",
    image7: "https://picsum.photos/400/300?7",
    image7link: "#",
    image7alt: "Image 7",
    image7dataElementType: "promotion",
    image7datapromotionindex: "7",
    image7datapromotionname: "Summer Deals",
    image8: "https://picsum.photos/400/300?8",
    image8link: "#",
    image8alt: "Image 8",
    image8dataElementType: "promotion",
    image8datapromotionindex: "8",
    image8datapromotionname: "Fall Deals",
    image9: "https://picsum.photos/400/300?9",
    image9link: "#",
    image9alt: "Image 9",
    image9dataElementType: "promotion",
    image9datapromotionindex: "9",
    image9datapromotionname: "Winter Deals",
    image10: "https://picsum.photos/400/300?10",
    image10link: "#",
    image10alt: "Image 10",
    image10dataElementType: "promotion",
    image10datapromotionindex: "10",
    image10datapromotionname: "Spring Deals",
    image11: "https://picsum.photos/400/300?11",
    image11link: "#",
    image11alt: "Image 11",
    image11dataElementType: "promotion",
    image11datapromotionindex: "11",
    image11datapromotionname: "Summer Deals",
    image12: "https://picsum.photos/400/300?12",
    image12link: "#",
    image12alt: "Image 12",
    image12dataElementType: "promotion",
    image12datapromotionindex: "12",
    image12datapromotionname: "Fall Deals",

  },
  render: function Render(args) {
  const [currentArgs, updateArgs] = useArgs();

  const isLoadingRef = useRef(false);       // prevents writing during load
  const lastUserRef = useRef(args.user);    // track selected user
  const lastSyncedData = useRef({});        // prevent write loops

  // -------------------------------------------------------
  // 1. LOAD DATA FROM SELECTED USER
  // -------------------------------------------------------
  useEffect(() => {
    const load = async () => {
      isLoadingRef.current = true;  // BLOCK updates
      lastUserRef.current = args.user;

      try {
        const docRef = doc(db, args.user, "multiclickcarousel");
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const firestoreData = snap.data();
          lastSyncedData.current = firestoreData;

          // Replace storybook args with loaded data
          updateArgs({
            ...currentArgs,
            ...firestoreData,
            user: args.user,
          });
        }
      } catch (e) {
        console.error("Firestore load error:", e);
      }

      isLoadingRef.current = false; // allow updates again
    };

    load();
  }, [args.user]);


  // -------------------------------------------------------
  // 2. SYNC ONLY FIELD CHANGES (NOT USER CHANGE)
  // -------------------------------------------------------
  useEffect(() => {
    if (isLoadingRef.current) return; // Don't sync during load

    const selectedUser = lastUserRef.current;

    // Don't sync if this change is caused by selecting a new user
    if (currentArgs.user !== selectedUser) return;

    // Remove user field before writing
    const { user, ...fields } = currentArgs;

    // Prevent re-writing unchanged data
    const prevFields = lastSyncedData.current;
    const changed = Object.entries(fields).some(
      ([k, v]) => prevFields[k] !== v
    );
    if (!changed) return;

    lastSyncedData.current = fields;

    const send = async () => {
      try {
        const docRef = doc(db, selectedUser, "multiclickcarousel");
        await updateDoc(docRef, fields);
        console.log("UPDATED:", selectedUser, fields);
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    };

    send();
  }, [currentArgs]);
    
        return <MulticlickCarousel {...args} />;
      },
};
