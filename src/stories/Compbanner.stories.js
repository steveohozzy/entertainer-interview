import { CompBanner } from './Compbanner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/CompetitionBanner',
  component: CompBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ImageCompBanner = {
  args: {
    image: 'https://www.thetoyshop.com/medias/Web-Competition-Tile-w944x200h.jpg?context=bWFzdGVyfHJvb3R8MTM4MDk0fGltYWdlL2pwZWd8YURnNEwyaGxOaTh4TWpZd09EWXdNelV5TVRBMU5DOVhaV0lnUTI5dGNHVjBhWFJwYjI0Z1ZHbHNaUzEzT1RRMGVESXdNR2d1YW5CbnxlOTczZTNiMmU1MjZmZDlkNzJmNjQzNDY3MjBmMDE1NTA4NjZlMDRlZGQ5MDg5Mzg0YjIwZjA1NmMzMDExYzFl',
    link: 'https://www.thetoyshop.com/tonies2-prize-draw',
    alt: 'Tonies Competition',
    dataElementType: 'hp-skinny-single-width-banner',
    datapromotionindex: '1',
    datapromotionname: 'Skinny-Single-Width-Tonies Comp',
    datagtmvisrecentonscreen8511273_2666: '1613',
    datagtmvisfirstonscreen8511273_2666: '1613',
    datagtmvistotalvisibletime8511273_2666: '100',
    datagtmvishasfired8511273_2666: '1',
  },
};
