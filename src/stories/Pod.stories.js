import { Pod } from './Pod';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/Pod',
  component: Pod,
  argTypes: {
    position: {
      options: ['center', 'left', 'right'],
      control: { type: 'radio' },
      defaultValue: 'center',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PodItem = {
  args: {
    image: 'https://www.thetoyshop.com/medias/Web-Homepage-Pod-w350x350h-HotWheels.jpg?context=bWFzdGVyfHJvb3R8MjEwMTI4fGltYWdlL2pwZWd8YURNeEwyZzVaUzh4TWpZeE16WTFOVE01TmpNNE1pOVhaV0lnU0c5dFpYQmhaMlVnVUc5a0xYY3pOVEI0TXpVd2FGOUliM1JYYUdWbGJITXVhbkJufGIwNjdhZDE4M2U0YzE1MjYyYjQ4YjYwMzgyNDQ5MzA1NmNlOWYzYjUxZTQ0N2Q2NDc2NTViZWI4ZDQwMjVmNWQ',
    imagealt: 'Hot Wheels',
    tagline: 'Up To 20% Off',
    backgroundcolor: 'linear-gradient(213deg,rgba(0, 86, 173, 1) 0%, rgba(0, 153, 215, 1) 35%, rgba(0, 204, 239, 1) 100%)',
    textcolor: '#fff',
    link: 'https://www.thetoyshop.com/brands/hot-wheels',
    linktext: 'Upto 20% OFF',
    logoimage: 'https://www.thetoyshop.com/medias/Hot-Wheels-logo-2-.png?context=bWFzdGVyfHJvb3R8NDE4NjR8aW1hZ2UvcG5nfGFHWXpMMmc1TkM4eE1qWXlNREV4T1RJeE1qQTJNaTlJYjNRdFYyaGxaV3h6TFd4dloyOGdLRElwTG5CdVp3fDhhYzNhMDI1OTcyNjAzY2U3ZTYxNmRiZWNkZjRjNDkzNGRmZGYzYTcxYWMwMTVhZGZjZGUwOTdiMWVjOWU5NjI',
    logoimagealt: 'Hot Wheels Logo',
    logoheight: '50px',
    position: 'center',
    dataElementType: 'homepage-expanded-carousel',
    dataPromotionName: 'Pod-Hot Wheels',
    dataPromotionIndex: '1',
  },
};
