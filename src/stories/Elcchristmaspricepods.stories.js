import { ElcChristmasPricePods } from './Elcchristmaspricepods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/Christmas/PricePods',
  component: ElcChristmasPricePods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ElcChristmasPricePodsSection = {
  args: {
    pod1image: 'https://www.thetoyshop.com/medias/Babys-First-Christmas-2024-digital-assets-ELC-2023-Baby-1st-Christmas-HP-Pod-350x350px.jpg?context=bWFzdGVyfHJvb3R8OTM5MTR8aW1hZ2UvanBlZ3xhRFZrTDJobFl5OHhNak0zTkRNeU1qSXhOams1TUM5Q1lXSjVjeUJHYVhKemRDQkRhSEpwYzNSdFlYTmZNakF5TkY5a2FXZHBkR0ZzSUdGemMyVjBjMTlGVEVOZk1qQXlNMTlDWVdKNUlERnpkQ0JEYUhKcGMzUnRZWE5mU0ZBZ1VHOWtYek0xTUhnek5UQndlQzVxY0djfDUzNzJiNWQ4ZGE2ZDI3MWIwYTllNjI0ZDM3YTdkYTY4YzI2ZTVlODVkYjBjYmM5MjBmYzU3ODc5MTBlMTY5ZDA',
    pod1alt: "Baby's First Christmas",
    pod1link: 'https://www.elc.co.uk/c/christmas-toys/baby-first-christmas',
    pod2image: 'https://www.thetoyshop.com/medias/elc-2023-christmas-15pounds-pod-350x350px-00681.jpg?context=bWFzdGVyfHJvb3R8OTg5MDl8aW1hZ2UvanBlZ3xhRFZoTDJneU1pOHhNakE0TkRZd056VTBPVFEzTUM5bGJHTXRNakF5TXkxamFISnBjM1J0WVhNdE1UVndiM1Z1WkhNdGNHOWtYek0xTUhnek5UQndlRjh3TURZNE1TNXFjR2N8NjMwYjZiMzc4NjAwNDU1M2VmMTNhNTBhMzhmNzJiNTkwMzA3Yjk1NWQwNmY1NmU5MjY1MTI4ZWJjN2YxMWY0Zg',
    pod2alt: 'Gifts Under £15',
    pod2link: 'https://www.elc.co.uk/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99',
    pod3image: 'https://www.thetoyshop.com/medias/elc-2023-christmas-30pounds-pod-350x350px-00681.jpg?context=bWFzdGVyfHJvb3R8MTA5MzAxfGltYWdlL2pwZWd8YURRNEwyZ3haaTh4TWpBNE5EWXdOell4TlRBd05pOWxiR010TWpBeU15MWphSEpwYzNSdFlYTXRNekJ3YjNWdVpITXRjRzlrWHpNMU1IZ3pOVEJ3ZUY4d01EWTRNUzVxY0djfDJkZjJjODNlZDJmYTM4NzgwODdjYjdhNTBlMmEyMzkyM2FlNWIwOWVkYjdjMTAwNWRhZDE1YWZmNDU5ZGNkYTc',
    pod3alt: 'Gifts Under £30',
    pod3link: 'https://www.elc.co.uk/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99&priceRange=%C2%A315%20-%20%C2%A329.99',
    pod4image: 'https://www.thetoyshop.com/medias/elc-2023-christmas-45pounds-pod-350x350px-00681.jpg?context=bWFzdGVyfHJvb3R8MTE2MjE0fGltYWdlL2pwZWd8YURnNUwyZ3hZaTh4TWpBNE5EWXdOemMwTmpBM09DOWxiR010TWpBeU15MWphSEpwYzNSdFlYTXRORFZ3YjNWdVpITXRjRzlrWHpNMU1IZ3pOVEJ3ZUY4d01EWTRNUzVxY0djfGFmZDNjYzQ1MWQ0OTA2MTc5ODhlMDE2Y2FhZTU2MmRjNGUwMTVhODIzYmUyNmY2YjVkM2JiYjM3ZmEwNGZlNmY',
    pod4alt: 'Gifts Under £45',
    pod4link: 'https://www.elc.co.uk/c/all-categories?priceRange=%C2%A30%20-%20%C2%A314.99&priceRange=%C2%A315%20-%20%C2%A329.99&priceRange=%C2%A330%20-%20%C2%A344.99'
  },
};
