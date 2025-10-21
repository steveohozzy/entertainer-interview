import { MarketingBanners } from './Marketingbanners';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/MarketingBanners',
  component: MarketingBanners,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MarketingBannersHome = {
  args: {
    banner1image: 'https://www.thetoyshop.com/medias/2025-present-finder-comp-tile-944x200px.jpg?context=bWFzdGVyfHJvb3R8MTMyMzYzfGltYWdlL2pwZWd8YURkbUwyZ3pOQzh4TWpVMk5qSXhNamN6T1RFd01pOHlNREkxTFhCeVpYTmxiblF0Wm1sdVpHVnlMV052YlhBdGRHbHNaUzA1TkRSNE1qQXdjSGd1YW5CbnxmZTliZDExOTY0ZjBlZjliZmJmZTgzMGM1NmFlYmQ1N2ZiMDRjNzBlNjgyYmVlMzc0MmMwMTg1MzQ1ODY0Nzk3',
    banner1alt: 'Find the perfect gift with our present finder',
    banner1link: 'https://www.thetoyshop.com/presentfinder',
    banner2image: 'https://www.thetoyshop.com/medias/Reduced-Comp-Tile-944x200px.jpg?context=bWFzdGVyfHJvb3R8MTQ4MTIzfGltYWdlL2pwZWd8YURrMkwyaGtNUzh4TWpVM05UQXpORGN3TXprd01pOVNaV1IxWTJWa1gwTnZiWEFnVkdsc1pWODVORFI0TWpBd2NIZ3VhbkJufDc2MzRlZmI5NzAyYmU1ZjZiZmI0NTk3ZTA1YjJiM2M3NjUyZTc4NDY2YjQ1M2RlZDIwMDk5ZTA0OGZiN2RiOTE',
    banner2alt: 'Reduced to Clear',
    banner2link: 'https://www.thetoyshop.com/c/reduced-to-clear',
    banner1dataElementType: 'homepage-banner-1',
    banner1datapromotionindex: '1',
    banner1datapromotionname: 'Banner-1-Present-Finder',
    banner1datagtmvisrecentonscreen8511273_2666: '12345',
    banner1datagtmvisfirstonscreen8511273_2666: '12345',
    banner1datagtmvistotalvisibletime8511273_2666: '100',
    banner1datagtmvishasfired8511273_2666: '1',
    banner2dataElementType: 'homepage-banner-2',
    banner2datapromotionindex: '2',
    banner2datapromotionname: 'Banner-2-Reduced-to-Clear',
    banner2datagtmvisrecentonscreen8511273_2666: '12345',
    banner2datagtmvisfirstonscreen8511273_2666: '12345',
    banner2datagtmvistotalvisibletime8511273_2666: '100',
    banner2datagtmvishasfired8511273_2666: '1',
  },
};
