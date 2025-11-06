import { ChristmasHero } from './Christmashero';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Christmas/ChristmasHero',
  component: ChristmasHero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChristmasHeroPods = {
  args: {
    hero1image: 'https://www.thetoyshop.com/medias/2025-spotlight-deal-576083-story-560x318.jpg?context=bWFzdGVyfHJvb3R8MTE5MjI5fGltYWdlL2pwZWd8YUdFMkwyaGhNeTh4TWpZeE16VXlOREkxT0RnME5pOHlNREkxTFhOd2IzUnNhV2RvZEMxa1pXRnNMVFUzTmpBNE15MXpkRzl5ZVMwMU5qQjRNekU0TG1wd1p3fGRlMWYzNDY5NGIzMTg3NTFjMzQ3OThjOGEwMjFiNGQ5MTUyOTg1NzE3NDlmZTVkNTUzOWM5MDFhYTI3MGE1MDM',
    hero1alt: 'Jurassic World Mosasaurus Rescue Action Boat',
    hero1link: 'https://www.thetoyshop.com/transport-toys/trains/Early-Learning-Centre-Wooden-Little-Town-Train-Table/p/574494',
    hero1title: 'Save 50% off the Matchbox Jurassic World Mosasaurus Rescue Action Boat',
    hero1subtitle: 'Embark on an epic land and sea adventure inspired by Jurassic World Rebirth',
    hero1buttontext: 'SHOP NOW',
    hero2image: 'https://www.thetoyshop.com/medias/2025-spotlight-deal-574494-story-560x318.jpg?context=bWFzdGVyfHJvb3R8MTE2MjEyfGltYWdlL2pwZWd8YUdaa0wyaGpZaTh4TWpZeE5EZ3lPVEUwTmpFME1pOHlNREkxTFhOd2IzUnNhV2RvZEMxa1pXRnNMVFUzTkRRNU5DMXpkRzl5ZVMwMU5qQjRNekU0TG1wd1p3fGI3YTgzY2Y3MjNlMTlkMzdmNjY5NTBjOTZhNWNjYjRlYTk0NmQ4OTk1MDQwYWJiOTc1OTc5ZDQ3NDg0ZjFjMWY',
    hero2alt: 'Early Learning Centre Wooden Little Town Train Table',
    hero2link: 'https://www.thetoyshop.com/transport-toys/trains/Early-Learning-Centre-Wooden-Little-Town-Train-Table/p/574494',
    hero2title: 'Save 50% off the Early Learning Centre Wooden Little Town Train Table',
    hero2subtitle: 'All aboard! Get ready for railroad adventures with this 46-piece wooden playset',
    hero2buttontext: 'SHOP NOW',
  },
};
