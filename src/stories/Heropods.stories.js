import { HeroPods} from './Heropods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/HeroPods',
  component: HeroPods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HeroPodsContianer = {
  args: {
    textcolor: '#ffffff',
    backgroundcolor: '#0d943f',
    bordercolor: '#ffffff',
    buttoncolor: '#0d943f',
    buttonbackgroundcolor: '#ffffff',
    buttonhovercolor: '#ffffff',
    buttonhoverbackcolor: '#e82416',
    pod1image: 'https://www.elc.co.uk/medias/Half-Price-2025-HP-Story-mod-560x318px.jpg?context=bWFzdGVyfHJvb3R8NzAyNjY1fGltYWdlL2pwZWd8YUdOaUwyZ3hOUzh4TWpVNU1UYzNOams0T1RJeE5DOUlZV3htSUZCeWFXTmxJREl3TWpVZ1NGQWdVM1J2Y25rZ2JXOWtJRFUyTUhnek1UaHdlQzVxY0djfGQxZGJkNTkzMDQ5NWMyZTc1N2M1N2Q3NTA3Yzc5Mjc2MDk2ODIyMTNjNzg3YzkyYTY4ZTEzNTY3ODgxZjYzYTI',
    pod1alt: 'Spend and Save Promo',
    pod1title: 'Spend and Save Promo',
    pod1text: 'Stack Up the Fun, Stack Up the Savings!',
    pod1buttontext: 'Shop Now',
    pod1link: 'https://www.elc.co.uk/c/half-price-toys',
    pod1dataelementtype: 'hp-half-hero-modules',
    pod1datapromotionindex: '1',
    pod1datapromotionname: 'ELC-Hero-1',
    pod1datagtmvisfirstonscreen8511273_2666: '1239',
    pod1datagtmvishasfired8511273_2666: '1',
    pod1datagtmvistotalvisibletime8511273_2666: '100',
    pod2image: 'https://www.elc.co.uk/medias/Happyland-Christmas-2024-digital-assets-ELC-2024-Happyland-Story-Module-560x318px.jpg?context=bWFzdGVyfHJvb3R8MTc5NDEwfGltYWdlL2pwZWd8YURobUwyaGtOQzh4TWpNNE1UUTFNRFUyTnpjeE1DOUlZWEJ3ZVd4aGJtUWdRMmh5YVhOMGJXRnpJREl3TWpSZlpHbG5hWFJoYkNCaGMzTmxkSE5mUlV4RFh6SXdNalJmU0dGd2NIbHNZVzVrWDFOMGIzSjVJRTF2WkhWc1pWODFOakI0TXpFNGNIZ3VhbkJufDkxNTc5Yjg0MTQ1ZTQxZjhkNmU3ZmJlYTg3ZDhmNzdhMmVkNDVlNzZhNzIwMDBhOGU4MDIwOTljNzMwY2E1M2I',
    pod2alt: 'Happyland Toys & Playsets',
    pod2title: 'Inspiring Moments With Happyland',
    pod2text: 'Step into a world of endless adventure and wonder',
    pod2buttontext: 'Shop Now',
    pod2link: 'https://www.elc.co.uk/brands/happyland',
    pod2dataelementtype: 'hp-half-hero-modules',
    pod2datapromotionindex: '2',
    pod2datapromotionname: 'ELC Hero 2',
    pod2datagtmvisfirstonscreen8511273_2666: '1245',
    pod2datagtmvishasfired8511273_2666: '1',
    pod2datagtmvistotalvisibletime8511273_2666: '100',
  },
};
