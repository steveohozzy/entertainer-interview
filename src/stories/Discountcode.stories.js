import { DiscountCode } from './Discountcode';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Discount Code Module',
  component: DiscountCode,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DiscountCodeModule = {
  args: {
    expanding: true,
    title: 'Save £30 On Selected Brands',
    blurb: `<p>
      Use code <code>STEVE30</code> to save £30 on selected Pokemon cards. Do a
      cabin-ectomy. We're gonna play some games here with different planes.
      Let's do another one -- what the heck! I just like to wash brushes.
    </p>`,
    link: 'http://thetoyshop.com/',
    linktext: 'Shop Now',
    termslink: 'https://www.thetoyshop.com/brands/lego#terms',
    terms: `<p>
          Don't be afraid of it. Make all kinds of little tree things happen.
          Think like a cloud. Son of a gun, it looks like we've got two big eyes
          on there. You can do it!
        </p>
        <p>
          Don't be afraid to experiment. Throw in some happy little things
          wherever you want them. I don't want a lot of mountains today. You're
          limited only by your imagination. Don't want much... don't want
          much...
        </p>`
  },
};
