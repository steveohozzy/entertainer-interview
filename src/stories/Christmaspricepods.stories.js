import { ChristmasPricePods } from './Christmaspricepods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Christmas/Price Pods',
  component: ChristmasPricePods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ChristmasPricePodsSection = {
  args: {
    pod1image: 'https://www.thetoyshop.com/medias/2025-christmas-price-bucket-under-15-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8ODU0Mjl8aW1hZ2UvanBlZ3xhRE15TDJoaU1pOHhNalU1TURrM09EZ3lOakkzTUM4eU1ESTFMV05vY21semRHMWhjeTF3Y21salpTMWlkV05yWlhRdGRXNWtaWEl0d3FNeE5TMXdiMlF0TXpVd2VETTFNQzVxY0djfGFjYjgzYmVkOTIxZWRlZWI4YzEwMDA5YTljYTg5ZDlkMjg0NjA0MzFkNGViZDg2ZmI5MGRjNjZmZGVlZWUxMDA',
    pod1alt: 'Toys Under £15',
    pod1link: 'https://www.thetoyshop.com/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99',
    pod2image: 'https://www.thetoyshop.com/medias/2025-christmas-price-bucket-under-30-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8ODM3NjR8aW1hZ2UvanBlZ3xhREE0TDJnMk15OHhNalU1TURrM09UQTRPRFF4TkM4eU1ESTFMV05vY21semRHMWhjeTF3Y21salpTMWlkV05yWlhRdGRXNWtaWEl0d3FNek1DMXdiMlF0TXpVd2VETTFNQzVxY0djfGYwNzc3OTdiMWE3ODNkMjg3OTNmYWI1MmEzMzk2Yjk2NThhNmFmZDIxM2JjYjY2NjY2ZWY1YzFlNmZmZmE3ZmE',
    pod2alt: 'Toys Under £30',
    pod2link: 'https://www.thetoyshop.com/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99&priceRange=%C2%A315%20-%20%C2%A329.99',
    pod3image: 'https://www.thetoyshop.com/medias/2025-christmas-price-bucket-under-45-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8ODc0NjZ8aW1hZ2UvanBlZ3xhREkzTDJnMU9TOHhNalU1TURrM09UTTFNRFUxT0M4eU1ESTFMV05vY21semRHMWhjeTF3Y21salpTMWlkV05yWlhRdGRXNWtaWEl0d3FNME5TMXdiMlF0TXpVd2VETTFNQzVxY0djfDY2MDE5MTUwNzY1YmZjZTdmZDVmZjE0ZTY3ODMyMTE5NWNhOTkwYTNjMzk1ZWU1YTE2MGVhNGQ4MDQ4ODRhMTY',
    pod3alt: 'Toys Under £45',
    pod3link: 'https://www.thetoyshop.com/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99&priceRange=%C2%A315%20-%20%C2%A329.99&priceRange=%C2%A330%20-%20%C2%A344.99',
    pod4image: 'https://www.thetoyshop.com/medias/2025-christmas-price-bucket-under-60-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8ODc3MDB8aW1hZ2UvanBlZ3xhRFU1TDJnMFppOHhNalU1TURrM09UWXhNamN3TWk4eU1ESTFMV05vY21semRHMWhjeTF3Y21salpTMWlkV05yWlhRdGRXNWtaWEl0d3FNMk1DMXdiMlF0TXpVd2VETTFNQzVxY0djfGU4ZTI4YjIwZjRkNjQ3NDEwNmY5ZTcxMzRkNzRhYjEyZGMwOTAwOGZkMGZkOTY3OGNjYzkzMGFkZTU0NzMxZjc',
    pod4alt: 'Toys Under £60',
    pod4link: 'https://www.thetoyshop.com/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99&priceRange=%C2%A315%20-%20%C2%A329.99&priceRange=%C2%A330%20-%20%C2%A344.99&priceRange=%C2%A345%20-%20%C2%A359.99',
    pod5image: 'https://www.thetoyshop.com/medias/2025-christmas-price-bucket-under-75-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8ODQ0NDl8aW1hZ2UvanBlZ3xhR1JoTDJnME55OHhNalU1TURrM09UZzNORGcwTmk4eU1ESTFMV05vY21semRHMWhjeTF3Y21salpTMWlkV05yWlhRdGRXNWtaWEl0d3FNM05TMXdiMlF0TXpVd2VETTFNQzVxY0djfGM1ZGU4ZTlkMmM5ZDFiYTA3NjNkZmEwYmRlNTJhYjA4YmY3ZTdmMzcyNWM0MTc3MWM1ZmFhY2U0NzRjZWQwYTk',
    pod5alt: 'Toys Under £75',
    pod5link: 'https://www.thetoyshop.com/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99&priceRange=%C2%A315%20-%20%C2%A329.99&priceRange=%C2%A330%20-%20%C2%A344.99&priceRange=%C2%A345%20-%20%C2%A359.99&priceRange=%C2%A360%20-%20%C2%A374.99',
  },
};
