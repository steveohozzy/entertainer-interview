import { HalfSplitHero } from './Halfsplithero';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/Half Split Hero',
  component: HalfSplitHero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HalfAndHalfHero = {
  args: {
    image: '',
    imagealt:'',
    videosrc: 'https://www.thetoyshop.com/medias/2025-p9-tonies-2-announcement-video.mp4?context=bWFzdGVyfHJvb3R8Njk5NzgyNXx2aWRlby9xdWlja3RpbWV8YURrd0wyZzBOQzh4TWpVNE1qY3dORFUwTlRneU1pOHlNREkxTFhBNUxYUnZibWxsY3kweUxXRnVibTkxYm1ObGJXVnVkQzEyYVdSbGJ5NXRjRFF8ZGE2NDY2YjMwM2M4YmU4ZTdkMjlmOGJmNzcwODljYzFlZjEwY2FiZTAxOWI2MWZhNmZlMGMyYzFhM2Q5YzA1Yw',
    background: 'linear-gradient(213deg,rgba(0, 86, 173, 1) 0%, rgba(0, 153, 215, 1) 35%, rgba(0, 204, 239, 1) 100%)',
    headline: 'New Toniebox 2 with Tonieplay',
    tagline: 'Get ready for screen-free stories, songs and more!',
    link: 'https://www.thetoyshop.com/brands/tonies',
    linktext: 'Pre-order',
    dataElementType: 'hp-hero-area',
    datapromotionindex: '3',
    datapromotionname: 'Hero-3-Huffy',
    datagtmvisfirstonscreen8511273_2666: '21559',
    datagtmvistotalvisibletime8511273_2666: '100',
    datagtmvishasfired8511273_2666: '1',
  },
};
