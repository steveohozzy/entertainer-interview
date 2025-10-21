import { KidultIntro } from './Kidultintro';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Intro',
  component: KidultIntro,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultIntroContainer = {
  args: {
    title: 'Toys for Grown Ups',
    blurb: '<p>Collectibles, display figures, hobbies and more, discover the things you love to play with and display. From vinyl figures to plushies and everything in between, we’ve got it all from characters from the latest games and films to nostalgia triggering trinkets. Find your favourites to make your space a fun filled fan zone.</p>'
  },
};
