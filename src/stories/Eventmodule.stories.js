import { EventModule } from './Eventmodule';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Event  Module',
  component: EventModule,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EventModuleComponent = {
  args: {
    id: 'zuru',
    image: 'https://www.thetoyshop.com/medias/Event-page-asset-376x306px.jpg?context=bWFzdGVyfHJvb3R8MTQxMzMyfGltYWdlL2pwZWd8YURrd0wyaGpPQzh4TWpZeU1URXpNREV3TkRnMk1pOUZkbVZ1ZENCd1lXZGxJR0Z6YzJWMFh6TTNObmd6TURad2VDNXFjR2N8ZWE4NmU3NGU3OWZmY2Y1YTE4ODk0ZDgzMThkZDUxMDcwZmE0ZGZmODkzZjNkMGYyMThmNTNjNDk3YzEwYjFhNQ',
    imagealt: 'Slime Mart by Zuru',
    title: 'Slime Mart by Zuru',
    buttontext: 'Our Slume Mart Range',
    buttonlink: 'https://www.thetoyshop.com/brands/zuru-slime-mart',
    blurb: `<p>
          Zuru will be showing what their Slime Mart sets can do with examples of just some of the many things you can make, and clever crafting techniques. Come down and join in the fun, creating your own slime masterpieces.</p><p>
          With interactive slime-making demos, you can build your own Slime Mart creations and take home your slime sculptures. Join the squishy, sensory fun at select The Entertainer stores.
        </p>
 
        <p>
          If you’ve got some crafty children who love to get involved in arts and crafts, bring them down to try out some slime sets and have an opportunity to take photos with the Slime Mart stand. Tag us in your social photos of the afternoon and we may even share them on our accounts!
        </p>`,
    row1date: '01/11/2025',
    row1location: 'Bluewater',
    row1locationlink: 'https://www.thetoyshop.com/store/bluewater',
    row1price: 'Free',
    row2date: '08/11/2025',
    row2location: 'Meadowhall',
    row2locationlink: 'https://www.thetoyshop.com/store/meadowhall',
    row2price: 'Free',
    row3date: '15/11/2025',
    row3location: 'Trafford Centre',
    row3locationlink: 'https://www.thetoyshop.com/store/trafford-centre',
    row3price: 'Free',
    row4date: '22/11/2025',
    row4location: 'Lakeside',
    row4locationlink: 'https://www.thetoyshop.com/store/lakeside',
    row4price: 'Free',
    row5date: '29/11/2025',
    row5location: 'Metrocentre',
    row5locationlink: 'https://www.thetoyshop.com/store/metrocentre',
    row5price: 'Free',
    row6date: '06/12/2025',
    row6location: 'Cheadle Hulme',
    row6locationlink: 'https://www.thetoyshop.com/store/cheadle-hulme',
    row6price: 'Free',
    row7date: '',
    row7location: '',
    row7locationlink: '',
    row7price: '',
    row8date: '',
    row8location: '',
    row8locationlink: '',
    row8price: '',
    row9date: '',
    row9location: '',
    row9locationlink: '',
    row9price: '',
    row10date: '',
    row10location: '',
    row10locationlink: '',
    row10price: '',
  },
};
