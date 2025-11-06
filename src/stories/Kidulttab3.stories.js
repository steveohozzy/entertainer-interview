import { KidultTab3 } from './Kidulttab3';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Tabs',
  component: KidultTab3,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultTab3Content = {
  args: {
    roundal1image: 'https://www.thetoyshop.com/medias/hotwheels.svg?context=bWFzdGVyfHJvb3R8MTA0NTJ8aW1hZ2Uvc3ZnK3htbHxhRFF4TDJnd1pTOHhNall5TVRZNE56ZzRNVGMxT0M5b2IzUjNhR1ZsYkhNdWMzWm58MzVmOTFjMWExNDUzOTgxMjZmOTlhNDViYTdlYTJkNjQxY2ZlNTcyZDZlYWEwMWQyMGE4MWIwMzJmMzY0ODRkNg',
    roundal1alt: 'Hot Wheels Mattel Creations',
    roundal1link: 'https://www.thetoyshop.com/brands/hot-wheels/hot-wheels-collectibles',
    roundal1background: '#0057B8',
    roundal2image: 'https://www.thetoyshop.com/medias/barbie.svg?context=bWFzdGVyfHJvb3R8NjgxNnxpbWFnZS9zdmcreG1sfGFEVXpMMmcxWXk4eE1qWXlNVFk0T0RBME5UVTVPQzlpWVhKaWFXVXVjM1pufDViZDVlMjJlZDFmOGVkYTcyNjdjYzE3MjUzNDllNTk4MTYxNjA0M2YzMjQ2OGFmODZkZDJjOTg4MzAxOWE2ZTY',
    roundal2alt: 'Barbie Signature',
    roundal2link: 'https://www.thetoyshop.com/brands/barbie/barbie-signature',
    roundal2background: '#EB008B',
    roundal3image: 'https://www.thetoyshop.com/medias/wwe.svg?context=bWFzdGVyfHJvb3R8MjQ3MHxpbWFnZS9zdmcreG1sfGFERXlMMmcyTUM4eE1qWXlNVFk0T0RFM05qWTNNQzkzZDJVdWMzWm58NDNlYmRmODU5MTQxMGU1NDBmNTljYmQzMGI4YzFiNGM4MzI0OTc2YWE3ZTkyYjc4ZWVhYjVkYmFkYjc3ZjdiZA',
    roundal3alt: 'WWE',
    roundal3link: 'https://www.thetoyshop.com/brands/wwe/wwe-ultimates-and-elites',
    roundal3background: '#222222',
    roundal4image: 'https://www.thetoyshop.com/medias/funko.svg?context=bWFzdGVyfHJvb3R8ODgyN3xpbWFnZS9zdmcreG1sfGFESTBMMmcyTXk4eE1qWXlNVFk0T0RJME1qSXdOaTltZFc1cmJ5NXpkbWN8ZTgxMjc0YWNlNWEwMTUzOTBiY2FjMjZkZDc1MjVjMzcxODg2NmRlZDJiYmNkNjkyNzI4OTg1MjI0NjFiMDk2YQ',
    roundal4alt: 'Funko Pop',
    roundal4link: 'https://www.thetoyshop.com/brands/funko',
    roundal4background: '#0074CA',
    roundal5image: 'https://www.thetoyshop.com/medias/fuggler.svg?context=bWFzdGVyfHJvb3R8MzA1MDQ0fGltYWdlL3N2Zyt4bWx8YURJeEwyZzJOaTh4TWpZeU1UWTRPRE13TnpjME1pOW1kV2RuYkdWeUxuTjJad3w0ODRjZmJhNTJhODRmMzg2NjhlMGJhODk0ZGIwYjQ5YTcyM2U2OGYwMWVhZTczZWU4MDQ5MDI4NzFiZDk0YmFj',
    roundal5alt: 'Fuggler',
    roundal5link: 'https://www.thetoyshop.com/brands/fuggler',
    roundal5background: '#C9A385',
    roundal6image: 'https://www.thetoyshop.com/medias/f1.svg?context=bWFzdGVyfHJvb3R8MjExMnxpbWFnZS9zdmcreG1sfGFHVXpMMmcyTmk4eE1qWXlNVFk0T0RNM016STNPQzltTVM1emRtY3wwZWU1YTcwZGE5OWU1NzZiZWU5ZjgwMWFmYWJmNTAyOWQxMDE5NTcyODFlMmQzZGE2YTkzZDQ5OWUwZTEwZDdi',
    roundal6alt: 'Bburago F1',
    roundal6link: 'https://www.thetoyshop.com/brands/bburago',
    roundal6background: '#1C1C25',
    roundal7image: 'https://www.thetoyshop.com/medias/Topps-Logo.svg?context=bWFzdGVyfHJvb3R8MTA2MzU0fGltYWdlL3N2Zyt4bWx8YURWaEwyZzNNQzh4TWpZeU1UWTRPRFl3TWpZMU5DOVViM0J3YzE5TWIyZHZMbk4yWnd8ZGI1ZTg5YTdlOTEwZmUwZjllZDBiYWViNDU0ZWVmZGQzMWU1ZDYzZDJkZTUyM2Y0MWQzMGQ3NmY4YjYwYzY1Zg',
    roundal7alt: 'Topps',
    roundal7link: 'https://www.thetoyshop.com/brands/topps-premier-league',
    roundal7background: '#000',
    roundal8image: 'https://www.thetoyshop.com/medias/Untitled.png?context=bWFzdGVyfHJvb3R8MTE0MzI0fGltYWdlL3BuZ3xhREF6TDJnME9TOHhNall5TkRRNU1USTBPVFk1TkM5VmJuUnBkR3hsWkM1d2JtY3xmMzBlOWNiZDU2ZDRjZGM5ZTYyYjkyZGY4NTZmMzJkNzlhNmRmNmE1MWQ1MzU4M2VmMTY5YWIxY2ZiNjNkMGFk',
    roundal8alt: 'Little People Collector',
    roundal8link: 'https://www.thetoyshop.com/brands/little-people-collector',
    roundal8background: '#fff',
  }
};