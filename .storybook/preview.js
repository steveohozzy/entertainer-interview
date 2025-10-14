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
    docs: {
      codePanel: true,
    },
  },
};

export default preview;