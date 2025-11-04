import { ShopByAgeElc } from './Shopbyageelc';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/ShopByAge',
  component: ShopByAgeElc,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ShopByAgeElcContainer = {
  args: {
    item1age: '0-3 ',
    item1textunderage: 'months',
    item1link: 'https://www.elc.co.uk/c/shop-by-age/0-3-months',
    item1dataelementtype: 'hp-shop-age',
    item1datapromotionindex: '1',
    item1datapromotionname: '0-3 months',
    item2age: '3-6 ',
    item2textunderage: 'months',
    item2link: 'https://www.elc.co.uk/c/shop-by-age/3-6-months',
    item2dataelementtype: 'hp-shop-age',
    item2datapromotionindex: '2',
    item2datapromotionname: '3-6 months',
    item3age: '6-12 ',
    item3textunderage: 'months',
    item3link: 'https://www.elc.co.uk/c/shop-by-age/6-12-months',
    item3dataelementtype: 'hp-shop-age',
    item3datapromotionindex: '3',
    item3datapromotionname: '6-12 months',
    item4age: '1-2 ',
    item4textunderage: 'years',
    item4link: 'https://www.elc.co.uk/c/shop-by-age/1-2-years',
    item4dataelementtype: 'hp-shop-age',
    item4datapromotionindex: '4',
    item4datapromotionname: '1-2 Years',
    item5age: '2-3 ',
    item5textunderage: 'years',
    item5link: 'https://www.elc.co.uk/c/shop-by-age/2-3-years',
    item5dataelementtype: 'hp-shop-age',
    item5datapromotionindex: '5',
    item5datapromotionname: '2-3 Years',
    item6age: '3-4 ',
    item6textunderage: 'years',
    item6link: 'https://www.elc.co.uk/c/shop-by-age/3-4-years',
    item6dataelementtype: 'hp-shop-age',
    item6datapromotionindex: '6',
    item6datapromotionname: '3-4 Years',
  },
};
