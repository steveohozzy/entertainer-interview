
import React from 'react';
import StoresStory, {
  defaultStoresStoryItems,
  defaultStoresStoryPins,
} from './StoresStory';

const itemControls = {};

defaultStoresStoryItems.forEach((item, index) => {
  const number = index + 1;

  itemControls[`item${number}Number`] = {
    name: `Stat ${number} – Number`,
    control: 'text',
    description: `The number or short label displayed for stat ${number}.`,
  };

  itemControls[`item${number}Title`] = {
    name: `Stat ${number} – Title`,
    control: 'text',
    description: `The title displayed for stat ${number}.`,
  };

  itemControls[`item${number}Description`] = {
    name: `Stat ${number} – Description`,
    control: 'text',
    description: `The description displayed when stat ${number} is selected.`,
  };

  itemControls[`item${number}Image`] = {
    name: `Stat ${number} – Image`,
    control: 'text',
    description: `Image path for stat ${number}. Leave blank to use the built-in icon.`,
  };

  itemControls[`item${number}AnimationValue`] = {
    name: `Stat ${number} – Animation Value`,
    control: { type: 'number', min: 0 },
    description: 'Numeric target for the animated number. Leave blank for text-only stats.',
  };

  itemControls[`item${number}ShowPins`] = {
    name: `Stat ${number} – Show Store Pins Note`,
    control: 'boolean',
    description: 'Show the additional store-pins explanation for this statistic.',
  };
});

const defaultArgs = {
  heading: "The UK's largest chain of Toy Shops",
  lead: "From one shop in Amersham in 1981 to toy aisles in thousands of stores. Choose a number to see where you'll find us.",

  item1Number: '160',
  item1Title: 'The Entertainer stores',
  item1Description: defaultStoresStoryItems[0].d,
  item1Image: defaultStoresStoryItems[0].image,
  item1AnimationValue: 160,
  item1ShowPins: true,

  item2Number: '2,719',
  item2Title: 'Tesco stores with our concessions',
  item2Description: defaultStoresStoryItems[1].d,
  item2Image: defaultStoresStoryItems[1].image,
  item2AnimationValue: 2719,
  item2ShowPins: false,

  item3Number: '140',
  item3Title: 'Matalan stores',
  item3Description: defaultStoresStoryItems[2].d,
  item3Image: '',
  item3AnimationValue: 140,
  item3ShowPins: false,

  item4Number: 'M&S',
  item4Title: 'Early Learning Centre at M&S',
  item4Description: defaultStoresStoryItems[3].d,
  item4Image: defaultStoresStoryItems[3].image,
  item4AnimationValue: null,
  item4ShowPins: false,

  item5Number: '7,000',
  item5Title: 'Products available online',
  item5Description: defaultStoresStoryItems[4].d,
  item5Image: defaultStoresStoryItems[4].image,
  item5AnimationValue: 7000,
  item5ShowPins: false,

  item6Number: '30',
  item6Title: 'Minutes to Click & Collect',
  item6Description: defaultStoresStoryItems[5].d,
  item6Image: defaultStoresStoryItems[5].image,
  item6AnimationValue: 30,
  item6ShowPins: false,

  mapImage: 'https://nalaber.com/preview/the-entertainer/media/map-big.webp',
  defaultCaption: '1,000+ locations in the UK!',
  initialActive: 5,

  backgroundColor: '#e9f5d8',
  textColor: '#19212b',
  mutedTextColor: '#585858',
  accentColor: '#0d5d9c',
  lineColor: '#0d5d9c',
  fillColor: '#009e44',
  pinColor: '#e82416',
  captionBackground: '#0d5d9c',
  captionTextColor: '#ffffff',

  showMap: true,
  showPins: true,
  animateNumbers: true,
  enableParallax: true,

  maxWidth: '1320px',
  borderRadius: 14,
};

function createItems(args) {
  return defaultStoresStoryItems.map((original, index) => {
    const number = index + 1;

    const animationValue = args[`item${number}AnimationValue`];

    return {
      show: args[`item${number}Number`],
      t: args[`item${number}Title`],
      d: args[`item${number}Description`],
      image: args[`item${number}Image`],
      n: animationValue === '' || animationValue === null
        ? null
        : Number(animationValue),
      pins: args[`item${number}ShowPins`],
    };
  });
}

export default {
  title: 'Agency Examples/Sections/Stores Story',
  component: StoresStory,

  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Interactive stores and locations section. All six statistics have individual text and image controls, so content can be edited without changing JSON.',
      },
    },
  },

  argTypes: {
    heading: {
      name: 'Section – Heading',
      control: 'text',
    },
    lead: {
      name: 'Section – Intro Text',
      control: 'text',
    },

    ...itemControls,

    mapImage: {
      name: 'Map – Image',
      control: 'text',
    },
    defaultCaption: {
      name: 'Map – Default Caption',
      control: 'text',
    },
    initialActive: {
      name: 'Map – Initially Selected Stat',
      control: { type: 'number', min: -1, max: 5, step: 1 },
      description: '-1 means no stat is selected. 0–5 selects one of the six stats.',
    },

    backgroundColor: {
      name: 'Colours – Section Background',
      control: 'color',
    },
    textColor: {
      name: 'Colours – Main Text',
      control: 'color',
    },
    mutedTextColor: {
      name: 'Colours – Supporting Text',
      control: 'color',
    },
    accentColor: {
      name: 'Colours – Accent',
      control: 'color',
    },
    lineColor: {
      name: 'Colours – Connecting Lines',
      control: 'color',
    },
    fillColor: {
      name: 'Colours – Animated Number',
      control: 'color',
    },
    pinColor: {
      name: 'Colours – Map Pins',
      control: 'color',
    },
    captionBackground: {
      name: 'Colours – Map Caption Background',
      control: 'color',
    },
    captionTextColor: {
      name: 'Colours – Map Caption Text',
      control: 'color',
    },

    showMap: {
      name: 'Display – Show Map',
      control: 'boolean',
    },
    showPins: {
      name: 'Display – Show Map Pins',
      control: 'boolean',
    },
    animateNumbers: {
      name: 'Animation – Animate Numbers',
      control: 'boolean',
    },
    enableParallax: {
      name: 'Animation – Enable Mouse Movement',
      control: 'boolean',
    },

    maxWidth: {
      name: 'Layout – Maximum Width',
      control: 'text',
    },
    borderRadius: {
      name: 'Layout – Corner Radius',
      control: { type: 'number', min: 0, max: 32, step: 1 },
    },
  },

  render: (args) => {
    const items = createItems(args);

    return (
      <StoresStory
        {...args}
        items={items}
        pins={defaultStoresStoryPins}
      />
    );
  },
};

export const Default = {
  args: defaultArgs,
};

export const NoInitialSelection = {
  args: {
    ...defaultArgs,
    initialActive: -1,
  },
};

export const WithoutMapPins = {
  args: {
    ...defaultArgs,
    showPins: false,
  },
};

export const StaticNumbers = {
  args: {
    ...defaultArgs,
    animateNumbers: false,
    enableParallax: false,
  },
};

export const BlueBackground = {
  args: {
    ...defaultArgs,
    backgroundColor: '#dcecff',
    accentColor: '#0d5d9c',
    fillColor: '#e82416',
  },
};
