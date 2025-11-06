import { KidultTab4 } from './Kidulttab4';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Tabs',
  component: KidultTab4,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultTab4Content = {
  args: {
    roundal1image: 'https://www.thetoyshop.com/medias/miniverse.svg?context=bWFzdGVyfHJvb3R8MzE0OTQ2fGltYWdlL3N2Zyt4bWx8YURKbUwyZzNPQzh4TWpZeU1UWTRPRGc1TnpVMk5pOXRhVzVwZG1WeWMyVXVjM1pufDY5ZWQ1ZjlhNjVkN2IwODgyNjBiYTk5YjZmYWQzNDgyZmY1NDcyZmZhNjliZmU5MGVlMGFlN2Q0NTlkMzAyOWY',
    roundal1alt: 'Miniverse',
    roundal1link: 'https://www.thetoyshop.com/brands/miniverse',
    roundal1background: '#fff',
    roundal2image: 'https://www.thetoyshop.com/medias/2025-lego-adults-welcome-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8MjA2Mjl8aW1hZ2UvanBlZ3xhREkzTDJnek5DOHhNalV3TkRRMU5qWTVNVGMwTWk4eU1ESTFMV3hsWjI4dFlXUjFiSFJ6TFhkbGJHTnZiV1V0Y0c5a0xUTTFNSGd6TlRBdWFuQm58ZmY2ZjA1NmEwOGY4OThkYjQ3Nzk1MDEwYzdjOTQxMzM3NjNkOWI1NjlmZGM2MTExNzhkYzczNmE5ZWI4YjVhYg',
    roundal2alt: 'LEGO Adults',
    roundal2link: 'https://www.thetoyshop.com/brands/lego/lego-adult-shop',
    roundal2background: '#000',
    roundal3image: 'https://www.thetoyshop.com/medias/brickshop.svg?context=bWFzdGVyfHJvb3R8MTc1MDN8aW1hZ2Uvc3ZnK3htbHxhR1ZoTDJoak5TOHhNall5TVRZNE9UQXlPRFl6T0M5aWNtbGphM05vYjNBdWMzWm58NzA3NDc4Njg1MzQ1NGE3NzU1NDk0NmM2OGFmNTMyNDViOTdmOWJkNGVlZjIxNDc0NDJhYWUwMDZjYjk3Yzg1NA',
    roundal3alt: 'Hot Wheels Brick Shop',
    roundal3link: 'https://www.thetoyshop.com/brands/brick-shop',
    roundal3background: '#000',
    roundal4image: 'https://www.thetoyshop.com/medias/pokemon-mega.svg?context=bWFzdGVyfHJvb3R8NjE4OTR8aW1hZ2Uvc3ZnK3htbHxhR0U1TDJoak9TOHhNall5TVRZNE9URTFPVGN4TUM5d2IydGxiVzl1TFcxbFoyRXVjM1pufDk2Yjk2MGVjNjExNzVmZTQ2NmNjYmMyNGUwNDNkZTFhYmRhMWRmYzkzNWY0MzM1MTU2ZWU3YmQ0YzY3NmNmYTY',
    roundal4alt: 'Pokemon MEGA Construction',
    roundal4link: 'https://www.thetoyshop.com/brands/pokemon/pokemon-mega',
    roundal4background: '#0096D1',
  }
};