/** @type { import('@storybook/react-webpack5').Preview } */
import '../src/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Home', ['Hero', ['Final Hero Carousel'], 'Pods', ['Final Pods Carousel']], 'Components', 'ELC', 'UI', '*'],
      },
    },
    docs: {
      codePanel: false,
    },
  },
};

export default preview;