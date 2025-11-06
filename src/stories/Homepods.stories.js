import { HomePods} from './Homepods';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'ELC/HomePods',
  component: HomePods,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HomePodsContianer = {
  args: {
    textcolor: '#4f4f4f',
    backgroundcolor: '#fff',
    bordercolor: '#0d943f',
    linkhovercolor: '#0d943f',
    pod1isblog: false,
    pod1image: 'https://www.elc.co.uk/medias/elc-smoby-beauty-centre-577899-story-560x318.jpg?context=bWFzdGVyfHJvb3R8NDg4MTR8aW1hZ2UvanBlZ3xhRFEwTDJnMU15OHhNalU1TkRBNE1UQXpPRE0yTmk5bGJHTXRjMjF2WW5rdFltVmhkWFI1TFdObGJuUnlaUzAxTnpjNE9Ua3RjM1J2Y25rdE5UWXdlRE14T0M1cWNHY3wyM2JiZTk5MTk0ZmZmZTRiYWNkNTg3NDdmYmViY2RmYTRjN2MwOTQxZDIwYWUxZGIzM2ZjNWYxMTY3ZGE5NzRj',
    pod1alt: 'Exploring The World Through Touch, Sight and Sound',
    pod1title: 'Exploring The World Through Touch, Sight and Sound',
    pod1text: 'Indulge their creativity as a hairstylist with this roleplay set',
    pod1buttontext: 'Shop Now',
    pod1link: 'https://www.elc.co.uk/online-only/Smoby-My-Beauty-Salon-Roleplay-Playset/p/577899',
    pod1dataelementtype: 'elc-story-modules',
    pod1datapromotionindex: '1',
    pod1datapromotionname: 'ELC-Story-1',
    pod2isblog: true,
    pod2image: 'https://www.elc.co.uk/medias/elc-blog-exploring-the-world-through-touch-sight-and-sound-story-560x318.jpg?context=bWFzdGVyfHJvb3R8NjU2MDF8aW1hZ2UvanBlZ3xhR013TDJnMk1TOHhNalU1TVRrNU56VXhOemcxTkM5bGJHTXRZbXh2WnkxbGVIQnNiM0pwYm1jdGRHaGxMWGR2Y214a0xYUm9jbTkxWjJndGRHOTFZMmd0YzJsbmFIUXRZVzVrTFhOdmRXNWtMWE4wYjNKNUxUVTJNSGd6TVRndWFuQm58OGRjOGI2NzFmOGIxZGFkMzQ3MTcyNWFjNDUxY2MxNDQ5NGZhMTk4NjlmYjdmMDIwZjU2OGJmODMzM2Y3YTljZg',
    pod2alt: 'Read Our Blog: Exploring The World Through Touch, Sight and Sound',
    pod2title: 'Exploring The World Through Touch, Sight and Sound',
    pod2text: 'Read how sensory play supports the development of key learning skills',
    pod2buttontext: 'Read More',
    pod2link: 'https://www.elc.co.uk/raising-little-explorers/exploring-the-world-through-touch-sight-and-sound',
    pod2dataelementtype: 'elc-story-modules',
    pod2datapromotionindex: '2',
    pod2atapromotionname: 'ELC-Story-2',
  },
};
