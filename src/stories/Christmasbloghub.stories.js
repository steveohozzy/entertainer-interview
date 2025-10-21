import { ChristmasBlogHub } from './Christmasbloghub';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Christmas/Christmas Blog Hub',
  component: ChristmasBlogHub,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChristmasBlogHubSection = {
  args: {
    desktopimage: 'https://www.thetoyshop.com/medias/christmas-hub-blog-ddesktop.png?context=bWFzdGVyfHJvb3R8MTYzMTU1fGltYWdlL3BuZ3xhRGt3TDJnMk5DOHhNall3T1RBd09UazBNalUxT0M5amFISnBjM1J0WVhNdGFIVmlMV0pzYjJjdFpHUmxjMnQwYjNBdWNHNW58NmI0NDI3MThlNWE0MGY1NGViM2E1ZWYzNjNjYzgxNTIxYzUwOWRkYzAzMTc0YzkxZmQ0NmEzNDg5MmI5ZmEwOA',
    mobileimage: 'https://www.thetoyshop.com/medias/christmas-hub-blog-mobile.png?context=bWFzdGVyfHJvb3R8MTU2OTc0fGltYWdlL3BuZ3xhR1ptTDJoaE1pOHhNall3T1RBeE1EQXdPREE1TkM5amFISnBjM1J0WVhNdGFIVmlMV0pzYjJjdGJXOWlhV3hsTG5CdVp3fGY3MjI4NTJhMGQ4ZjAxMmZmNTA5ODhmMzMxNDExYjVmZmEwNjY0ZmFlMzA4MzU1YjJmYTMwZDE4MjY0ZjdmZTc',
    alt: 'Christmas Blog Hub',
    titlelink: 'https://www.thetoyshop.com/childhood-adventures/christmas-blogs',
    titlelinktitletext: 'Christmas Blogs',
    titlelinkactiontext: 'Read Here',
    link1: 'https://www.thetoyshop.com/childhood-adventures/top-10-christmas-toys-for-2025',
    link1text: 'Top 10 Christmas Toys for 2025',
    link2: 'https://www.thetoyshop.com/childhood-adventures/ultimate-christmas-shopping-checklist',
    link2text: 'Ultimate Christmas Shopping Checklist',
    link3: 'https://www.thetoyshop.com/childhood-adventures/29-christmas-goodie-bag-ideas-for-special-gifting',
    link3text: '29 Christmas Goodie Bag Ideas for Special Gifting',
    link4: 'https://www.thetoyshop.com/childhood-adventures/your-guide-to-blind-bags-this-christmas',
    link4text: 'Your Guide To Blind Bags This Christmas',
    link5: 'https://www.thetoyshop.com/childhood-adventures/what-goes-into-a-christmas-box',
    link5text: 'What Goes Into A Christmas Box?',
    link6: 'https://www.thetoyshop.com/childhood-adventures/fun-christmas-craft-ideas-for-kids',
    link6text: 'Fun Christmas Craft Ideas for Kids!',
  },
};
