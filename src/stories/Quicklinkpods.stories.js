import { QuickLinksPods } from './Quicklinkpods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/QuickLinksPods',
  component: QuickLinksPods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const QuickLinksPodsContainer = {
  args: {
    bordercolor: '#D2000F',
    buttontextcolor: '#000',
    buttonbackgroundcolor: '#fff',
    pod1image: 'https://www.thetoyshop.com/medias/ts-tonie-starter-sets-pod-350x350.png?context=bWFzdGVyfHJvb3R8MTI4ODAwfGltYWdlL3BuZ3xhRGd6TDJnellpOHhNalU0TkRjNE9EVTVNRFl5TWk5MGN5MTBiMjVwWlMxemRHRnlkR1Z5TFhObGRITXRjRzlrTFRNMU1IZ3pOVEF1Y0c1bnw4OTA1MDJjZjZiNjg4ZTA2NGNmNmM0ODYyMDI3MDFkYjM5NTA2NjgxZTc4OGQ2NGJlMGU0ZGVjNjRiNWNiNDg1',
    pod1alt: 'Toniebox 2',
    pod1link: 'https://www.thetoyshop.com/brands/tonies/tonies-toniebox',
    pod1text: 'Toniebox 2',
    pod2image: 'https://www.thetoyshop.com/medias/ts-tonie-character-pod-350x350.png?context=bWFzdGVyfHJvb3R8ODM3MTR8aW1hZ2UvcG5nfGFHTmlMMmhoT1M4eE1qVTRORGM0TmpBek5EY3hPQzkwY3kxMGIyNXBaUzFqYUdGeVlXTjBaWEl0Y0c5a0xUTTFNSGd6TlRBdWNHNW58N2M4ZmJiZjUzZjI1MzRkNjhkNjFhNmFhMTk1Yjk1ODVjYjA0Yzc4OWY1YzMyMzNiZjEzMzBkNDJhZDk1ODZiNg',
    pod2alt: 'Audio Tonies',
    pod2link: 'https://www.thetoyshop.com/brands/tonies/tonies-characters',
    pod2text: 'Audio Tonies',
    pod3image: 'https://www.thetoyshop.com/medias/ts-tonie-tonieplay-pod-350x350.png?context=bWFzdGVyfHJvb3R8ODQyOTF8aW1hZ2UvcG5nfGFEaGhMMmhqTVM4eE1qVTVOREEzTkRBNU1UVTFNQzkwY3kxMGIyNXBaUzEwYjI1cFpYQnNZWGt0Y0c5a0xUTTFNSGd6TlRBdWNHNW58NDE2ZWFhZTI4YjE2YzNkNGYwZDE1NGRkYmQ3MDJiODBiZjY5Y2IyNDdjNmVmYTZjMTEyODQyZWVhYzQwN2JlNA',
    pod3alt: 'Tonieplay',
    pod3link: 'https://www.thetoyshop.com/search/?text=Tonieplay',
    pod3text: 'Tonieplay',
    pod4image: 'https://www.thetoyshop.com/medias/ts-tonie-bundles-pod-350x350.png?context=bWFzdGVyfHJvb3R8MTE3NjcyfGltYWdlL3BuZ3xhR1UyTDJnME5DOHhNalU0TkRjNE9EZ3hPVGs1T0M5MGN5MTBiMjVwWlMxaWRXNWtiR1Z6TFhCdlpDMHpOVEI0TXpVd0xuQnVad3w3NjAzMjk0ZjQyN2EwNmY1MTRkOWYxYWMwNjQzZDAyNjNlMjcwMjBmM2ZiOTQ1M2RjZjhjOWI0ODVkYzYxODli',
    pod4alt: 'Bundles',
    pod4link: 'https://www.thetoyshop.com/brands/tonies?priceRange=%C2%A375%2B#sort-by',
    pod4text: 'Bundles',
    pod5image: 'https://www.thetoyshop.com/medias/ts-tonie-accessories-pod-350x350.png?context=bWFzdGVyfHJvb3R8ODA3MjF8aW1hZ2UvcG5nfGFHWTRMMmcyWlM4eE1qVTVOREEzTXpjek1URXdNaTkwY3kxMGIyNXBaUzFoWTJObGMzTnZjbWxsY3kxd2IyUXRNelV3ZURNMU1DNXdibWN8MjgzYmFiOTQ3NTc1NGQ3Y2E1NTdmMTJkNDZkNDM4MDI2ODk2YzA2OWUwOTk2YTkxMTU0ZTA4NmM2NmVjOWZlNA',
    pod5alt: 'Accessories',
    pod5link: 'https://www.thetoyshop.com/brands/tonies/tonies-accessories',
    pod5text: 'Accessories',
    pod6image: 'https://www.thetoyshop.com/medias/ts-tonie-blog-pod-350x350.png?context=bWFzdGVyfHJvb3R8MTY5NzY1fGltYWdlL3BuZ3xhRFUzTDJnNU1TOHhNalU0TkRjNE5qYzRPRE00TWk5MGN5MTBiMjVwWlMxaWJHOW5MWEJ2WkMwek5UQjRNelV3TG5CdVp3fDE2NTEyYmFiOWRlOTNmOWVlMWM2MzY1MmE0NGM4YjNjYWI4ZWIwYTRhYjc2NmFiMTA1MzQ3MWU4MDQ0ZGI4NzE',
    pod6alt: 'Read Our Blog',
    pod6link: 'https://www.thetoyshop.com/childhood-adventures/using-creative-tonie',
    pod6text: 'Read Our Blog',
  },
};
