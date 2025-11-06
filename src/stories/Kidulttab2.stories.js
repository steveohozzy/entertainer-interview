import { KidultTab2 } from './Kidulttab2';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Tabs',
  component: KidultTab2,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultTab2Content = {
  args: {
    roundal1image: 'https://www.thetoyshop.com/medias/nintendo.svg?context=bWFzdGVyfHJvb3R8NDUzNHxpbWFnZS9zdmcreG1sfGFERmtMMmd3TXk4eE1qWXlNVFk0TnpNMU56UTNNQzl1YVc1MFpXNWtieTV6ZG1jfDdmNDY4MDNkZGViMzNlYzA5ODIxMWJiOGViODk2ZGIwODYwNGVjMjA1NzgyMGI1MGY2NWY0MjA5OGU5OGE0ODk',
    roundal1alt: 'Nintendo',
    roundal1link: 'https://www.thetoyshop.com/brands/nintendo',
    roundal1background: '#E60012',
    roundal2image: 'https://www.thetoyshop.com/medias/fnaf.svg?context=bWFzdGVyfHJvb3R8NjA3MjQyfGltYWdlL3N2Zyt4bWx8YURCakwyZ3dNQzh4TWpZeU1UWTROelF5TXpBd05pOW1ibUZtTG5OMlp3fDM2MmJkNzNkYjRjODg1NjM4NmRjYmQ4NTE0Yjk4NWJmMTk2YjIwMzgyMmRmZDBmZDdjMDFiNWNjMmM4OGE5ZWE',
    roundal2alt: 'Five Nights at Freddys',
    roundal2link: 'https://www.thetoyshop.com/brands/fnaf',
    roundal2background: '#000',
    roundal3image: 'https://www.thetoyshop.com/medias/Mario-Series-Logo.svg?context=bWFzdGVyfHJvb3R8NzI1N3xpbWFnZS9zdmcreG1sfGFHRXhMMmd3TUM4eE1qWXlNVFk0TnpRNE9EVTBNaTlOWVhKcGIxOVRaWEpwWlhOZlRHOW5ieTV6ZG1jfDBhOWZkYmY0NjUyMjUyNjhjYjQ1ZjE0ODM1M2RiZjJhZjI1MGM0M2RjOWMwMDBhYmZiMzc0YjI5YjU2MDU1YmU',
    roundal3alt: 'Super Mario',
    roundal3link: 'https://www.thetoyshop.com/brands/super-mario/super-mario-merchandise',
    roundal3background: '#000',
    roundal4image: 'https://www.thetoyshop.com/medias/rainbow-friends.svg?context=bWFzdGVyfHJvb3R8NzczODl8aW1hZ2Uvc3ZnK3htbHxhR0l5TDJnd015OHhNall5TVRZNE56VTFOREEzT0M5eVlXbHVZbTkzTFdaeWFXVnVaSE11YzNabnw3ODMzMGJjMWM0ZmFjY2IyZWM4NDQ5ZDM5ZTAxYTk2NWMwNzgzNzU4OWQ2NjQ4MmE0M2IxMjI5YjI4Yjc5ZTAz',
    roundal4alt: 'Rainbow Friends',
    roundal4link: 'https://www.thetoyshop.com/brands/rainbow-friends',
    roundal4background: '#93C650',
    roundal5image: 'https://www.thetoyshop.com/medias/garten.svg?context=bWFzdGVyfHJvb3R8NTE1NDI3fGltYWdlL3N2Zyt4bWx8YUdJd0wyZ3dOaTh4TWpZeU1UWTROell4T1RZeE5DOW5ZWEowWlc0dWMzWm58N2U4Njc0MzkzNGMyMDAzNDQxMmY5ZWQ4MDA1NWQ5M2U5N2NlMjg3MGJlNWY5MjBhMjBmMmMyMjgyMWNiMGFlZQ',
    roundal5alt: 'Garten of Banban',
    roundal5link: 'https://www.thetoyshop.com/brands/garten-of-banban',
    roundal5background: '#FB9851',
    roundal6image: 'https://www.thetoyshop.com/medias/minecraft.svg?context=bWFzdGVyfHJvb3R8Mzg4OXxpbWFnZS9zdmcreG1sfGFEY3hMMmd3Tnk4eE1qWXlNVFk0TnpZNE5URTFNQzl0YVc1bFkzSmhablF1YzNabnwzNmQzYzAxNGI1NTE4ZWFmOWIxY2RjMDNmYmY1ODJkYjRiNGNjY2U5YjczYWM3NDMyZjg1YmE2YWZjZDMyN2Ji',
    roundal6alt: 'Minecraft',
    roundal6link: 'https://www.thetoyshop.com/brands/minecraft/minecraft-merchandise',
    roundal6background: '#3C8527',
    roundal7image: 'https://www.thetoyshop.com/medias/pokemon.svg?context=bWFzdGVyfHJvb3R8NTI2MDV8aW1hZ2Uvc3ZnK3htbHxhRGd5TDJnd1lTOHhNall5TVRZNE56YzFNRFk0Tmk5d2IydGxiVzl1TG5OMlp3fGVmZDhlOTZmNDBkMzUxMWVhMjUwZTg2NDNmYmU2MGFhMDI4OGZiYmM5MTFlMzkwYjM4NmJjMjQxZTliZjBiYzU',
    roundal7alt: 'Pokemon',
    roundal7link: 'https://www.thetoyshop.com/brands/pokemon',
    roundal7background: '#0096D1',
    roundal8image: 'https://www.thetoyshop.com/medias/sonic.svg?context=bWFzdGVyfHJvb3R8Mjc0NjV8aW1hZ2Uvc3ZnK3htbHxhRGd3TDJnd1pDOHhNall5TVRZNE56Z3hOakl5TWk5emIyNXBZeTV6ZG1jfDdjNmRmOGE0NjkzZDU5ZGJmZGYzZWY4ZDJmNGZlMTdhYjgxNDdlM2RlMzEwNmU5NWFjNTI1NDE3ZDYyNTE0N2I',
    roundal8alt: 'Sonic the Hedgehog',
    roundal8link: 'https://www.thetoyshop.com/brands/sonic-the-hedgehog/sonic-the-hedgehog-merchandise',
    roundal8background: '#007AFF',
    roundal9image: 'https://www.thetoyshop.com/medias/Zelda-2017-white.svg?context=bWFzdGVyfHJvb3R8NDE3M3xpbWFnZS9zdmcreG1sfGFEa3pMMmhoTlM4eE1qWXlORFE1T0RVeU5ERTVNQzlhWld4a1lWOHlNREUzWDNkb2FYUmxMbk4yWnd8NzIzZTM1NjhhY2Q4ZGM5NTY1NzkxZmY3ZWE3ZmIwY2UxYjZkZjg5NzdhMzQ0ODI0M2E4MTgzMjI5MTA2MzdjMQ',
    roundal9alt: 'Legend of Zelda',
    roundal9link: 'https://www.thetoyshop.com/brands/the-legend-of-zelda',
    roundal9background: '#B59C66',
    roundal10image: 'https://www.thetoyshop.com/medias/playstaion-logo.svg?context=bWFzdGVyfHJvb3R8OTI2fGltYWdlL3N2Zyt4bWx8YURNMUwyZ3pOaTh4TWpZek5ESTVOREUxTnpNME1pOXdiR0Y1YzNSaGFXOXVMV3h2WjI4dWMzWm58NTQ2ZjY3YTczMzY1MmVjMDkzYzAzMDBhN2JhNjljMTE1ZTE0NzI4ODZlNTJkNWU5ZmVkNTgwNDg0MTczODMwMg',
    roundal10alt: 'Playstation',
    roundal10link: 'https://www.thetoyshop.com/brands/sony-playstation',
    roundal10background: '#0070d1',
  }
};