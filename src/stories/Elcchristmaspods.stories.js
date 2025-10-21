import { ElcChristmasPods } from './Elcchristmaspods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/Christmas/Pods',
  component: ElcChristmasPods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ElcChristmasPodsSection = {
  args: {
    pod1image: 'https://www.thetoyshop.com/medias/Big-Gifts-for-Little-Ones-digital-assets-ELC-2024-Big-Gifts-Pod-350x350px.jpg?context=bWFzdGVyfHJvb3R8MTE0MjYzfGltYWdlL2pwZWd8YURFNEwyZzJZeTh4TWpNM05EazRNVGt3TWpNMk5pOUNhV2NnUjJsbWRITWdabTl5SUV4cGRIUnNaU0JQYm1WelgyUnBaMmwwWVd3Z1lYTnpaWFJ6WDBWTVExOHlNREkwWDBKcFp5QkhhV1owYzE5UWIyUmZNelV3ZURNMU1IQjRMbXB3Wnd8ZjA0YzAyNzZhYTFmNTViNzZhNTA1NzgzNzc0NDFjNDA0MTY4MzE5NGYwZTBkMGI3ZWFmYjg2MzY3YTUxYjFlZg',
    pod1alt: 'Big Gifts',
    pod1link: 'https://www.elc.co.uk/c/christmas-toys/big-gifts-for-little-ones',
    pod2image: 'https://www.thetoyshop.com/medias/Top-Toys-for-Christmas-digital-assets-ELC-2023-Top-Toys-Christmas-Email-MOB-500x500px.jpg?context=bWFzdGVyfHJvb3R8MTA0MDExfGltYWdlL2pwZWd8YURNd0wyaGlPQzh4TWpNM05EazRNakE1T0RrM05DOVViM0FnVkc5NWN5Qm1iM0lnUTJoeWFYTjBiV0Z6WDJScFoybDBZV3dnWVhOelpYUnpYMFZNUTE4eU1ESXpYMVJ2Y0NCVWIzbHpJRU5vY21semRHMWhjMTlGYldGcGJDQk5UMEpmTlRBd2VEVXdNSEI0TG1wd1p3fGM5YWEzN2I1ZDhmYmUzMDIzNjhiZGIyMjgwZjQ4NjRiMTM5NGQ1NWYxMDc4NmRiNzViNjM5MGY3YjJjOGIzNDU',
    pod2alt: 'Top Toys',
    pod2link: 'https://www.elc.co.uk/c/christmas-toys/top-toys-for-christmas',
    pod3image: 'https://www.thetoyshop.com/medias/Stocking-Fillers-digital-assets-ELC-2024-Stocking-Fillers-Pod-350x350px.jpg?context=bWFzdGVyfHJvb3R8MTA2NTMxfGltYWdlL2pwZWd8YURCakwyZ3hZUzh4TWpNNU16WTNNRFl6T1RZME5pOVRkRzlqYTJsdVp5QkdhV3hzWlhKelgyUnBaMmwwWVd3Z1lYTnpaWFJ6WDBWTVExOHlNREkwWDFOMGIyTnJhVzVuSUVacGJHeGxjbk5mVUc5a1h6TTFNSGd6TlRCd2VDNXFjR2N8MTUxZTUxNzVkOGY1M2JhYjJjZGJjYTRlZmU4MzY4NWZiYzBlOGNjNGIyNmJiMmVhNWExNTZiNDJhODdjN2ZmMw',
    pod3alt: 'Stocking Fillers',
    pod3link: 'https://www.elc.co.uk/c/christmas-toys/stocking-fillers',
    pod4image: 'https://www.thetoyshop.com/medias/Season-Favourites-digital-assets-ELC-2024-Season-Favourites-Pod-350x350px.jpg?context=bWFzdGVyfHJvb3R8ODYyNDJ8aW1hZ2UvanBlZ3xhRGd6TDJoaU55OHhNak0zTkRrNE1qQXpNelF6T0M5VFpXRnpiMjRnUm1GMmIzVnlhWFJsYzE5a2FXZHBkR0ZzSUdGemMyVjBjMTlGVEVOZk1qQXlORjlUWldGemIyNGdSbUYyYjNWeWFYUmxjMTlRYjJSZk16VXdlRE0xTUhCNExtcHdad3w1Y2QzM2JmN2UxZDIxZTgxOWNkNDZlNDMzYzM5MGVkZTAwYWYwY2QwZDk1ZDU2ZGY3MDlmZTk5MTEzNjIyNGFm',
    pod4alt: 'Season Favourites',
    pod4link: 'https://www.elc.co.uk/c/christmas-toys/season-favourites'
  },
};
