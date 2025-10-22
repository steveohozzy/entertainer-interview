import { HeroCarousel } from './Herocarousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Home/HeroCarousel',
  component: HeroCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HomeCarouselHero = {
  args: {
    carouselfirstslide: '<a href="https://www.thetoyshop.com/brands/lego" title="Half Price Toy Sale" data-element-type="hp-hero-area" data-promotion-index="2" data-promotion-name="Hero-2-LEGO" data-gtm-vis-first-on-screen8511273_2666="21559" data-gtm-vis-total-visible-time8511273_2666="100" data-gtm-vis-has-fired8511273_2666="1"><picture><source media="(min-width:768px)" srcset="https://www.thetoyshop.com/medias/2025-lego-gaming-hero-desktop-1800x560.jpg?context=bWFzdGVyfHJvb3R8MzE2MjMxfGltYWdlL2pwZWd8YURoaUwyZ3pOaTh4TWpVNU9EZzRPRGMxT1RNeU5pOHlNREkxTFd4bFoyOHRaMkZ0YVc1bkxXaGxjbTh0WkdWemEzUnZjQzB4T0RBd2VEVTJNQzVxY0djfDFhYmUwN2JjNWMxODAyMzNjNDY0NDU1ZDFiZjA5M2MxMzIzYWE1YWZmNDNjYjdmZjUxOGQ3MGIyNzRhN2IyMzQ"><img alt="Half Price Toy Sale" src="https://www.thetoyshop.com/medias/2025-lego-gaming-hero-mobile-450x480.jpg?context=bWFzdGVyfHJvb3R8MTIyNTA2fGltYWdlL2pwZWd8YURFNEwyZzRPQzh4TWpVNU9EZzRPVEF5TVRRM01DOHlNREkxTFd4bFoyOHRaMkZ0YVc1bkxXaGxjbTh0Ylc5aWFXeGxMVFExTUhnME9EQXVhbkJufGNhMTA3OGRlMWQyMWFiZTRhMmIyNTFjNWZjY2U0MDNmN2ZiZTFlYTIzZmYzYmU0ODYxN2U1N2FkODhkOTEyMTY"></picture></a>',
    carouselsecondslide: '',
    carouselthirdslide: '',
    carouselforthslide: '',
  },
};
