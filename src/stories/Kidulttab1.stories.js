import { KidultTab1 } from './Kidulttab1';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Tabs',
  component: KidultTab1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultTab1Content = {
  args: {
    roundal1image: 'https://www.thetoyshop.com/medias/star-wars.svg?context=bWFzdGVyfHJvb3R8MjE0MzN8aW1hZ2Uvc3ZnK3htbHxhR0kwTDJoak5DOHhNall5TVRZMk9UWTJNamMxTUM5emRHRnlMWGRoY25NdWMzWm58ZjQyYTFhYzIxNzM5NWRmOTJiNjY3NDBhZDk2ZTZmZDQ1MjcwNzc0MzU4ZGU1MzA5YWM2OTc3NDI2NmRjYWY2NA',
    roundal1alt: 'Star Wars',
    roundal1link: 'https://www.thetoyshop.com/brands/star-wars/star-wars-merchandise',
    roundal1background: '#000',
    roundal2image: 'https://www.thetoyshop.com/medias/power-rangers.svg?context=bWFzdGVyfHJvb3R8ODMwMTJ8aW1hZ2Uvc3ZnK3htbHxhREZoTDJnME5TOHhNall5TVRZM01ESTFNalUzTkM5d2IzZGxjaTF5WVc1blpYSnpMbk4yWnd8YmJkYjMzYmI1ZGExOGMzMjdmYzk1YTlkYWJjNjcyN2QzZGRkZTQ4OWRhY2UzZjFjNzY0NGE5NjY4MTkzNjk4ZA',
    roundal2alt: 'Power Rangers',
    roundal2link: 'https://www.thetoyshop.com/brands/power-rangers',
    roundal2background: '#000',
    roundal3image: 'https://www.thetoyshop.com/medias/spongebob.svg?context=bWFzdGVyfHJvb3R8MTAwNzA5fGltYWdlL3N2Zyt4bWx8YURFNEwyZzBPQzh4TWpZeU1UWTNNRE14T0RFeE1DOXpjRzl1WjJWaWIySXVjM1pufDk3MTNhZDI2M2YxMTVhOTBlZDYxMzM2YjU0Y2UzMzc1ZTEwMmQ3ZTk0MDU1OWI5MDg3YzZjNmU5YzE2MGUwYjg',
    roundal3alt: 'Spongebob Squarepants',
    roundal3link: 'https://www.thetoyshop.com/brands/spongebob-squarepants',
    roundal3background: '#FFF56C',
    roundal4image: 'https://www.thetoyshop.com/medias/wicked.svg?context=bWFzdGVyfHJvb3R8Mjk5MTg3NXxpbWFnZS9zdmcreG1sfGFHSXhMMmhoWlM4eE1qWXlNVFkzTVRJek5UWXhOQzkzYVdOclpXUXVjM1pufGE2MTJjMzU5NTJjZTcwOGJhZGYyYjVhZTkxYjZjNzJiMDI1NGNlMzkzYjc2YWQyNDdkZTAwMTdmMzRmM2I4Yzk',
    roundal4alt: 'Wicked',
    roundal4link: 'https://www.thetoyshop.com/brands/wicked',
    roundal4background: '#000',
    roundal5image: 'https://www.thetoyshop.com/medias/stranger-things.svg?context=bWFzdGVyfHJvb3R8OTk4NHxpbWFnZS9zdmcreG1sfGFHTXlMMmhpTVM4eE1qWXlNVFkzTVRNd01URTFNQzl6ZEhKaGJtZGxjaTEwYUdsdVozTXVjM1pufDYyMDQ3ZDM2NDVjMTU5YmM3ODZiOTY2ZTkzYzA4MDE4MTIwOTc5ZDllOTljNjY5Y2VlYjZlYjc3YWI1ZjUyZWM',
    roundal5alt: 'Stranger Things',
    roundal5link: 'https://www.thetoyshop.com/brands/stranger-things',
    roundal5background: '#000',
    roundal6image: 'https://www.thetoyshop.com/medias/wednesday.svg?context=bWFzdGVyfHJvb3R8NDE3MDA2fGltYWdlL3N2Zyt4bWx8YURjd0wyaGlNaTh4TWpZeU1UWTNNVE0yTmpZNE5pOTNaV1J1WlhOa1lYa3VjM1pufGI2ZDRkYmNlZTE2MGE3MTZmN2JmNjA2NTVlNmE4OWRkOWJmYjJiMTkxNDM2MjA5Y2E5ZDY4ZjU5ZjZjYjZmZjY',
    roundal6alt: 'Wednesday',
    roundal6link: 'https://www.thetoyshop.com/brands/wednesday',
    roundal6background: '#000',
    roundal7image: 'https://www.thetoyshop.com/medias/simpsons.svg?context=bWFzdGVyfHJvb3R8NTQxNTN8aW1hZ2Uvc3ZnK3htbHxhREkyTDJobE1DOHhNall5TVRZM01qUTRNRGM1T0M5emFXMXdjMjl1Y3k1emRtY3w1NjNiMDg0MTNjNGM1MDUzM2IyOTQ0Y2Y4YjJhMjIxMTdiOWU3YjgwMjVmN2RkYmRkZmU1YzUwNzQ4MGNjOThm',
    roundal7alt: 'The Simpsons',
    roundal7link: 'https://www.thetoyshop.com/brands/the-simpsons',
    roundal7background: '#41C7F3',
    roundal8image: 'https://www.thetoyshop.com/medias/mervel.svg?context=bWFzdGVyfHJvb3R8MTIzNHxpbWFnZS9zdmcreG1sfGFEZGxMMmcxWmk4eE1qWXlNVFk0Tmpjek5EZzNPQzl0WlhKMlpXd3VjM1pufDYwMDcyYjI2Y2I5MjE3NDMzMDM2OTAxYmUwMzcxOWZmNzcxMTc5OTM3OGQ2ZjBkMzVlNmUzMWI5NWI0Nzg3ZTM',
    roundal8alt: 'Marvel',
    roundal8link: 'https://www.thetoyshop.com/brands/marvel/marvel-merchandise',
    roundal8background: '#EC1D24',
    roundal9image: 'https://www.thetoyshop.com/medias/dc.svg?context=bWFzdGVyfHJvb3R8NTE2MTh8aW1hZ2Uvc3ZnK3htbHxhRFprTDJnMVl5OHhNall5TVRZNE5qZ3dNRFF4TkM5a1l5NXpkbWN8YWQ3ODljODE2OGQ4NzAyNGZjZTE0MDkyNTNkODQ3MTQ4OTM3NmU3MjA0MzFiMDcxZGEzMTU1YWNkMTMwMTg0Mg',
    roundal9alt: 'DC',
    roundal9link: 'https://www.thetoyshop.com/brands/dccomics/dc-merchandise',
    roundal9background: '#fff',
    roundal10image: 'https://www.thetoyshop.com/medias/harry-potter.svg?context=bWFzdGVyfHJvb3R8MjQxNjh8aW1hZ2Uvc3ZnK3htbHxhR0ptTDJnMVlpOHhNall5TVRZNE5qZzJOVGsxTUM5b1lYSnllUzF3YjNSMFpYSXVjM1pufGYwNzEwNDU0MWQ2OTg0YjE0YTNmYTc2MTNlNTI2Y2U4ODMzYWFiMDE1YTdlMzRhNGEyMmQ1NDhiMzdiNjA1MzE',
    roundal10alt: 'Harry Potter',
    roundal10link: 'https://www.thetoyshop.com/brands/harry-potter',
    roundal10background: '#2A0A44',
    roundal11image: 'https://www.thetoyshop.com/medias/transformers.svg?context=bWFzdGVyfHJvb3R8MTYyOTV8aW1hZ2Uvc3ZnK3htbHxhR0ZrTDJnMU9DOHhNall5TVRZNE5qa3pNVFE0Tmk5MGNtRnVjMlp2Y20xbGNuTXVjM1pufGRkMjEzZDljMDNjNmI1NWY1M2ExODZmNjNmM2MzZGRjMmZiNWEwZGNiN2QyNGViZDUzOTFmNDQwMTM3M2QzNWY',
    roundal11alt: 'Transformers',
    roundal11link: 'https://www.thetoyshop.com/brands/transformers/transformer-figures',
    roundal11background: '#000',
    roundal12image: 'https://www.thetoyshop.com/medias/turtles.svg?context=bWFzdGVyfHJvb3R8MTI5NDM5fGltYWdlL3N2Zyt4bWx8YUdabUwyZzFOeTh4TWpZeU1UWTROams1TnpBeU1pOTBkWEowYkdWekxuTjJad3w1OWU3YmQxZWU5NTdhNDhiMTBiMTM3M2UxMGZiMjRlYjFlZDRkZDdkODIwNWI4MWZjNWUxYjlkZjJkZmU2ZTM1',
    roundal12alt: 'Teenage Mutant Ninja Turtles',
    roundal12link: 'https://www.thetoyshop.com/brands/teenage-mutant-ninja-turtles/teenage-mutant-ninja-turtles-merchandise',
    roundal12background: '#9B9B9B',
    roundal13image: 'https://www.thetoyshop.com/medias/kpop.svg?context=bWFzdGVyfHJvb3R8Mjc5Njg4fGltYWdlL3N2Zyt4bWx8YURRMEwyZ3dZUzh4TWpZeU1UWTROekV5T0RBNU5DOXJjRzl3TG5OMlp3fDNjZGZiNDEyNWVkOWE5YjE5Y2FlNmFiNTg4ZmNlMTViZGQxZWM1ZjdmMTk1ZTkyZjlhNDU3MzBkOTUxY2EyYmU',
    roundal13alt: 'K-Pop Demon Hunters',
    roundal13link: 'https://www.thetoyshop.com/brands/kpop-demon-hunters',
    roundal13background: '#653E85'
  }
};