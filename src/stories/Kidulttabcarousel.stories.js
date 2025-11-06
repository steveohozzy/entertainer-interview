import { KidultCarousel } from './Kidulttabcarousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Kidult/Carousel',
  component: KidultCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KidultCarouselContent = {
  args: {
    carouseltitle: 'Shop by Type',
    roundal1image: 'https://www.thetoyshop.com/medias/300Wx300H-577175-577175-7.jpg?context=bWFzdGVyfGltYWdlc3w1OTgyOHxpbWFnZS9qcGVnfGFEY3dMMmhrTUM4eE1qVXhOekF3TnpZNE56Y3hNQzh6TURCWGVETXdNRWhmTlRjM01UYzFYelUzTnpFM05TMDNMbXB3Wnd8ZTMxMzUyMDZjNjY4YTM1Y2Y0NTA2NTVlNzcxZWQ5NTk0NzY4YTY1MzA5NWIxYWQyNGRhOTZhZDhlNzI1OWU1ZQ',
    roundal1alt: 'Construction Sets for Adults',
    roundal1link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/construction-sets-for-adults',
    roundal1buttontext: 'Construction',
    roundal2image: 'https://www.thetoyshop.com/medias/544604-HTX24-544604-HTX24-4.jpg?context=bWFzdGVyfGltYWdlc3w2NDAwOTR8aW1hZ2UvanBlZ3xhRE5sTDJoallTOHhNakU1TXpZeU56UXpPVEV6TkM4MU5EUTJNRFJmU0ZSWU1qUmZOVFEwTmpBMFgwaFVXREkwTFRRdWFuQm58ODRjZmUxZTNjZWI0MDM5MTdjNzQ1OWI4ZGU2ZWU4NWNlMDMyOTA1NzRmYWUyYmY4ODMwMzFkZmQ4NjdhZmNhNg',
    roundal2alt: 'Display Figures',
    roundal2link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/display-figures',
    roundal2buttontext: 'Display Figures',
    roundal3image: 'https://www.thetoyshop.com/medias/300Wx300H-572341-572341-5.jpg?context=bWFzdGVyfGltYWdlc3w3ODk3N3xpbWFnZS9qcGVnfGFHUmhMMmhtTVM4eE1qUTNNakE0TXpnME1UQTFOQzh6TURCWGVETXdNRWhmTlRjeU16UXhYelUzTWpNME1TMDFMbXB3Wnd8ODZmNTQ2ZWIzYjc2MjdjODg4MTk5MGJhODlhMzFhMTI4YzA3Y2RmOTU4YWU3MTkzZjc1ODJiNTA2OTU2YzM0YQ',
    roundal3alt: 'Gaming Memorabilia',
    roundal3link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/gaming-memorabilia',
    roundal3buttontext: 'Gaming Memorabilia',
    roundal4image: 'https://www.thetoyshop.com/medias/barbie-background.jpg?context=bWFzdGVyfHJvb3R8MjE5MTA3fGltYWdlL2pwZWd8YURKa0wyZ3paaTh4TWpZeE1USTNNelUxTlRrNU9DOWlZWEppYVdVdFltRmphMmR5YjNWdVpDNXFjR2N8OTIyMzk4OWExZDNhZWUyNzJjODE1MjcwMjJhNGQyN2I1NDk4NjBmZDNiZWRmYzMzOTU1NjRjODMwMjIwN2FmMQ',
    roundal4alt: 'Collectible Dolls',
    roundal4link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/collectible-dolls',
    roundal4buttontext: 'Collectible Dolls',
    roundal5image: 'https://www.thetoyshop.com/medias/300Wx300H-580094-580094-6.jpg?context=bWFzdGVyfGltYWdlc3w1Njk3MXxpbWFnZS9qcGVnfGFEWXhMMmc0WkM4eE1qWXlNREF6TVRBMk5qRTBNaTh6TURCWGVETXdNRWhmTlRnd01EazBYelU0TURBNU5DMDJMbXB3Wnd8MzA3ZTA5M2E0ZjhhYTNmNTJiNjgzMWJmODIxY2Y3OTJjMjAxY2YxOTljMWNiNTZlMGM2MWM2ODM4NTkzYmZkNw',
    roundal5alt: 'Drones & RC',
    roundal5link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/drones-and-rc',
    roundal5buttontext: 'Drones & RC',
    roundal6image: 'https://www.thetoyshop.com/medias/300Wx300H-580033-Primary?context=bWFzdGVyfGltYWdlc3wzNjI2NXxpbWFnZS9qcGVnfGFEY3dMMmd4TkM4eE1qWXlNREEyTXpnMk5qa3hNQzh6TURCWGVETXdNRWhmTlRnd01ETXpYMUJ5YVcxaGNua3xhMjg2ZjZhNmY4MzI0YjZkM2JlZDY0NmE4ZTA3ZDc4ZWMxMWQ0YTlkZTZlOTgyMjg2OTFjMmEwZWUwY2E5ODIw',
    roundal6alt: 'Lighting & Wall Art',
    roundal6link: 'https://www.thetoyshop.com/c/lifestyle-and-homewares/lighting',
    roundal6buttontext: 'Lighting & Wall Art',
    roundal7image: 'https://www.thetoyshop.com/medias/Funko-with-background.jpg?context=bWFzdGVyfHJvb3R8MzE5ODV8aW1hZ2UvanBlZ3xhR1prTDJoaFppOHhNall4TURjNU9EUTFNamMyTmk5R2RXNXJieTEzYVhSb0xXSmhZMnRuY205MWJtUXVhbkJufDQ4ZWUyNjMwNjBjYTg0Yjg0OTZjZTRiZDllYjY5ZWY1N2JlZmQ5YjlmMTcyNDlhZTAxYmI1ZmU4ODQ1ZmNiOGQ',
    roundal7alt: 'Vinyl Figures',
    roundal7link: 'https://www.thetoyshop.com/c/action-toys/vinyl-figures',
    roundal7buttontext: 'Vinyl Figures',
    roundal8image: 'https://www.thetoyshop.com/medias/kawaii-background.jpg?context=bWFzdGVyfHJvb3R8MTA4Mzk2fGltYWdlL2pwZWd8YURaa0wyaGhOUzh4TWpZeE1EYzVPRGM0TURRME5pOXJZWGRoYVdrdFltRmphMmR5YjNWdVpDNXFjR2N8NGRkNGU1NGE5YmI1NjVkNmE1OTNhZDRhZjNiMjhhNTEzZjZiYTM0MThkMTAwYmRjZTk5ZjIxYjFkZTQxMGE2MQ',
    roundal8alt: 'Kawaii',
    roundal8link: 'https://www.thetoyshop.com/c/kawaii',
    roundal8buttontext: 'Kawaii',
    roundal9image: 'https://www.thetoyshop.com/medias/530024-530024-6.jpg?context=bWFzdGVyfGltYWdlc3wyNjk4NTR8aW1hZ2UvanBlZ3xhREF3TDJneVpDOHhNak0xTVRFeU5UUTROelkwTmk4MU16QXdNalJmTlRNd01ESTBMVFl1YW5CbnwxODQ0YTI5MjA3YzhiMjRkMThmMGFkYTUyNzI4OTFmNmIyOWUxMWMxMTc2ZGQ2NmYxYzUxZmVlYTFlM2ExOGJj',
    roundal9alt: 'Games',
    roundal9link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/games-for-grown-ups',
    roundal9buttontext: 'Games',
    roundal10image: 'https://www.thetoyshop.com//medias/ronaldo-on-background.jpg?context=bWFzdGVyfHJvb3R8NTEzMjl8aW1hZ2UvanBlZ3xhRGhtTDJoaVlTOHhNall5TVRZMk9UazFOelkyTWk5eWIyNWhiR1J2TFc5dUxXSmhZMnRuY205MWJtUXVhbkJufDliODZjZmRjZDgzMTJhODQyMTIwMGM2OTJlM2E5ZWE3NGYxNjQxZmQ5NTUwZjdjNjU1YzVhMWIyYjE5YzhiODk',
    roundal10alt: 'Football Collectors',
    roundal10link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/football-collectibles',
    roundal10buttontext: 'Football Collectors',
    roundal11image: 'https://www.thetoyshop.com/medias/300Wx300H-580118-580118-4.jpg?context=bWFzdGVyfGltYWdlc3w0MDU2MXxpbWFnZS9qcGVnfGFETTVMMmhtT1M4eE1qWXlNREExTXpJeE56TXhNQzh6TURCWGVETXdNRWhmTlRnd01URTRYelU0TURFeE9DMDBMbXB3Wnd8NzJmODNhZGIyMWMwODA1YmE1MWNjZWNmM2Y4NWY5ZWJhN2E4MTJmZTYwMDY5NTkzNDM2NWJlYzY2ODc1Y2Y1Zg',
    roundal11alt: 'Audio & Speakers',
    roundal11link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/audio-and-speakers',
    roundal11buttontext: 'Audio & Speakers',
    roundal12image: 'https://www.thetoyshop.com/medias/300Wx300H-575405-575405-6.jpg?context=bWFzdGVyfGltYWdlc3w3NjgzNXxpbWFnZS9qcGVnfGFHTmhMMmc0WlM4eE1qVXdNREkwTkRJd01UVXdNaTh6TURCWGVETXdNRWhmTlRjMU5EQTFYelUzTlRRd05TMDJMbXB3Wnd8ZjQ1NGUyNWI5ZGJmMDAyZjRlNTQzNDVkOTAzY2M1Mjg4MmVjMGNjOWQ4NjYyMDg5YzM3MjA2NTIyYTg5YjhhMA',
    roundal12alt: 'Collectible Soft Toys',
    roundal12link: 'https://www.thetoyshop.com/c/toys-for-grown-ups/gaming-memorabilia',
    roundal12buttontext: 'Collectible Soft Toys',
  }
};