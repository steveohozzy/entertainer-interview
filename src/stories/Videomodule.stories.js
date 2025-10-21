import { VideoModule } from './Videomodule';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/VideoModule',
  component: VideoModule,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const VideoModuleHero = {
  args: {
    video: 'https://www.thetoyshop.com/medias/2025-rc-car-mp4.mp4?context=bWFzdGVyfHJvb3R8MjU1NDYzOHx2aWRlby9tcDR8YURaaEwyZzFNQzh4TWpVME9USTVNamN5TURFMU9DOHlNREkxTFhKakxXTmhjaTF0Y0RRdWJYQTB8MDJkMzQ3MDM1NzEwOWNjNWU3NjFhMDZmNzZkNDAwOTc0M2NjMDdhZDIzNThlZTJhZmY5Y2QwYTQwNmE3MTE2Yg',
    background: '#a7a7a7',
    titlecolor: '#ffffff',
    textcolor: '#ffffff',
    buttonbackground: '#0057B8',
    buttontextcolor: '#ffffff',
    buttonbackgroundhover: '#e82416',
    title: 'Remote Control Cars',
    blurb: 'Experience the thrill of speed and control with our exciting range of remote control cars. Perfect for kids and adults alike!',
    buttontext: 'Shop Now',
  },
};
