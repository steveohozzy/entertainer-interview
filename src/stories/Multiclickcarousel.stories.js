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
    buttonicon: '<svg width="22" height="18" viewBox="0 0 22 18"fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path></svg>',
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
