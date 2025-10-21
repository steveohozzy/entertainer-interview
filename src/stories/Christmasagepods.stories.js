import { ChristmasAgePods } from './Christmasagepods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Christmas/Age Pods',
  component: ChristmasAgePods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChristmasAgePodsSection = {
  args: {
    pod1image: 'https://www.thetoyshop.com/medias/2025-christmas-gifts-for-baby-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8OTk4NjB8aW1hZ2UvanBlZ3xhRFk1TDJnMll5OHhNall4TVRZMU1EazBOVEExTkM4eU1ESTFMV05vY21semRHMWhjeTFuYVdaMGN5MW1iM0l0WW1GaWVTMXdiMlF0TXpVd2VETTFNQzVxY0djfGE2YTY0OTVkODQzNTEwYjMzNWY1NjQ3ZWZmNTI0ZjZkMWVjZmIyYWU3NzQ5MWRkYWIyOWJlODlmYTBjMTlhMmE',
    pod1alt: 'Gifts for Baby',
    pod1link: 'https://www.thetoyshop.com/c/christmas-toys/christmas-gifts-for-baby',
    pod2image: 'https://www.thetoyshop.com/medias/2025-christmas-gifts-for-toddlers-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8OTYzNjV8aW1hZ2UvanBlZ3xhR1ZtTDJneFlTOHhNall4TVRZMU1USXdOekU1T0M4eU1ESTFMV05vY21semRHMWhjeTFuYVdaMGN5MW1iM0l0ZEc5a1pHeGxjbk10Y0c5a0xUTTFNSGd6TlRBdWFuQm58YjgxOWU0ZjM1ZTAyYWJiY2U1OWE3ZTRhNzY5MzY1MjMzZjNmYjY1NDk3ZjkxYTY4NDc2ZjdmZWVkY2FkYzY2ZQ',
    pod2alt: 'Gifts for Toddlers',
    pod2link: 'https://www.thetoyshop.com/c/christmas-toys/christmas-gifts-for-toddlers',
    pod3image: 'https://www.thetoyshop.com/medias/2025-christmas-gifts-for-teens-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8OTg4NzZ8aW1hZ2UvanBlZ3xhRFl3TDJneE1DOHhNall4TVRZMU1UVXpORGczT0M4eU1ESTFMV05vY21semRHMWhjeTFuYVdaMGN5MW1iM0l0ZEdWbGJuTXRjRzlrTFRNMU1IZ3pOVEF1YW5CbnxhNTJjYWIyMzljMDZmOThkNjViMDY1MzNiM2U2MjU4OTFmZTliNzNhYWU5ZmYzMGY0NjE2YzU1MjdmM2EwODll',
    pod3alt: 'Gifts for Teens',
    pod3link: 'https://www.thetoyshop.com/c/christmas-toys/christmas-gifts-for-teens',
    pod4image: 'https://www.thetoyshop.com/medias/2025-christmas-gifts-for-grown-ups-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8OTQ1MTF8aW1hZ2UvanBlZ3xhREkwTDJoaVppOHhNall4TkRneE5qRTNNREF4TkM4eU1ESTFMV05vY21semRHMWhjeTFuYVdaMGN5MW1iM0l0WjNKdmQyNHRkWEJ6TFhCdlpDMHpOVEI0TXpVd0xtcHdad3w3ZDZhZjk5MGY3OGIwNzU4Y2U3ZWI4MWY4NGVhOTE5MzI4ODNkNDcwZTYyYTFkZGU2MTY2NjBmYzVhODg3MDVk',
    pod4alt: 'Gifts for Grown Ups',
    pod4link: 'https://www.thetoyshop.com/c/christmas-toys/christmas-gifts-for-grown-ups',
  },
};
