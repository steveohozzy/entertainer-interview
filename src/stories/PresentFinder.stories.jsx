import React from 'react';
import PresentFinder from './PresentFinder';

export default {
  title: 'Agency Examples/Present Finder',
  component: PresentFinder,

  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
An interactive three-step Present Finder.

The Controls panel lets you edit:
- Main headings and questions
- All age, interest and budget options
- Tile labels, descriptions, colours and images
- Product recommendations and result content
- All theme colours and decorative styling
- Summary labels, buttons and other interface text
- Selection animation duration and easing
- Quick View content and related links

The selected tile animates towards its matching summary row before
the next question appears.

The recommendation catalogue is sample Storybook content. It is not
connected to a live product recommendation API.
        `
      }
    }
  },

  argTypes: {
    kicker: {
      control: 'text',
      description: 'Small label above the main heading.'
    },

    heading: {
      control: 'text',
      description: 'Main finder heading.'
    },

    questions: {
      control: 'object',
      description: 'Question text for steps 1, 2 and 3, in that order.'
    },

    ageOptions: {
      control: 'object',
      description: 'Age tiles. Edit value, label, subtitle, colour, age, unit, softBackground and paleBackground.'
    },

    interestOptions: {
      control: 'object',
      description: 'Interest tiles. Edit value, label, subtitle, image, type and background.'
    },

    budgetOptions: {
      control: 'object',
      description: 'Budget tiles. Edit value, label, subtitle, image, price and background.'
    },

    products: {
      control: 'object',
      description: 'Recommendation catalogue. Edit product names, categories, matching values, prices, images, descriptions, links and bullet points.'
    },

    accentColour: {
      control: 'color',
      description: 'Default accent colour before an age is selected.'
    },

    blueColour: {
      control: 'color',
      description: 'Primary brand colour.'
    },

    redColour: {
      control: 'color',
      description: 'Secondary brand colour.'
    },

    greenColour: {
      control: 'color',
      description: 'Selection and success colour.'
    },

    yellowColour: {
      control: 'color',
      description: 'Highlight and badge colour.'
    },

    theme: {
      control: 'object',
      description: 'Full theme configuration. Includes colours, backgrounds, borders, radii, animation timings and easing.'
    },

    text: {
      control: 'object',
      description: 'Editable interface text, including summary labels, step labels, result labels, buttons and empty states.'
    },

    resultCategory: {
      control: 'text'
    },

    resultName: {
      control: 'text'
    },

    resultDescription: {
      control: 'text'
    },

    resultPrice: {
      control: 'text'
    },

    resultWasPrice: {
      control: 'text'
    },

    resultImage: {
      control: 'text'
    },

    resultImageAlt: {
      control: 'text'
    },

    resultBadgeImage: {
      control: 'text'
    },

    resultBadgeAlt: {
      control: 'text'
    },

    resultPoints: {
      control: 'object'
    },

    resultLinks: {
      control: 'object',
      description: 'Related links. Each item needs a label and url.'
    },

    resultButtonText: {
      control: 'text'
    },

    resultUrl: {
      control: 'text'
    },

    quickViewTitle: {
      control: 'text'
    },

    quickViewDescription: {
      control: 'text'
    },

    quickViewImage: {
      control: 'text'
    },

    quickViewButtonText: {
      control: 'text'
    },

    askText: {
      control: 'text'
    },

    askImage: {
      control: 'text'
    },

    showQuickView: {
      control: 'boolean'
    },

    resetText: {
      control: 'text'
    },

    backText: {
      control: 'text'
    },

    skipText: {
      control: 'text'
    },

    noResultsHeading: {
      control: 'text'
    },

    noResultsText: {
      control: 'text'
    },

    noResultsButtonText: {
      control: 'text'
    },

    onAskClick: {
      control: false,
      table: {
        disable: true
      }
    }
  }
};

export const Default = {
  args: {
    kicker: 'Present Finder',
    heading: 'Stuck for present ideas?',

    questions: [
      'Who is it for?',
      'What are they into?',
      'What would you like to spend?'
    ],

    accentColour: '#0d5d9c',
    blueColour: '#0d5d9c',
    redColour: '#e82416',
    greenColour: '#009e44',
    yellowColour: '#ffd100',

    theme: {
      blue: '#0d5d9c',
      red: '#e82416',
      green: '#009e44',
      yellow: '#ffd100',
      ink: '#19212b',
      grey: '#585858',
      lavender: '#dbe3ff',
      lavenderLight: '#eef2ff',
      line: '#e5e5e5',
      white: '#ffffff',
      tileOverlay: 'rgba(8,30,60,.82)',
      summaryBackground: '#eef2ff',
      summaryBorder: '#c8d3f5',
      selectedText: '#0d5d9c',
      flightColour: '#009e44',
      resultBackground: '#eef2ff',
      drawerOverlay: 'rgba(13,33,60,.55)',
      tileRadius: '18px',
      panelRadius: '24px',
      animationDuration: 750,
      animationEasing: 'cubic-bezier(.22,1,.36,1)',
      tileAnimationDuration: 500,
      resultAnimationDuration: 650
    },

    text: {
      step: 'Step',
      of: 'of',
      whoFor: 'Who for?',
      into: 'Into',
      budget: 'Budget',
      notSelected: 'Not selected',
      change: 'Change',
      ourPick: 'Our pick',
      quickView: 'Quick view',
      showAnother: 'Show another idea',
      ideas: 'ideas',
      shopPrefix: 'Shop',
      back: 'Back',
      skip: 'Skip',
      reset: 'Start again',
      resultButton: 'View on TheToyShop.com',
      quickViewButton: 'View on TheToyShop.com',
      closeQuickView: 'Close quick view',
      askLabel: 'Ask us',
      noResultsHeading: 'No exact match found',
      noResultsText: 'Try changing your age, interest or budget to see more present ideas.',
      noResultsButton: 'Change interests',
      resultCount: 'ideas'
    },

    resultCategory: 'Crazy Fun · Squishies',

    resultName: 'Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)',

    resultDescription: 'A surprise squishy dumpling treat. Styles vary.',

    resultPrice: '£6.00',

    resultWasPrice: '',

    resultImage: 'https://nalaber.com/preview/the-entertainer/media/pk-dumpling.webp',

    resultImageAlt: 'Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)',

    resultBadgeImage: 'https://nalaber.com/preview/the-entertainer/media/roundel-new.webp',

    resultBadgeAlt: 'New toys',

    resultPoints: [
      'Free Click & Collect within 30 minutes, subject to availability in store',
      'New toys, styles vary'
    ],

    resultLinks: [
      {
        label: 'Shop Squishies & Pocket Money',
        url: 'https://www.thetoyshop.com/c/pocket-money'
      },
      {
        label: 'All toys for 0-3 Years',
        url: 'https://www.thetoyshop.com/c/all-categories?ageRange=0%20-%2018%20months&ageRange=18%20-%2036%20months'
      },
      {
        label: 'All Toys Under £10',
        url: 'https://www.thetoyshop.com/c/toys-under-10-pounds'
      }
    ],

    resultButtonText: 'View on TheToyShop.com',

    resultUrl: 'https://www.thetoyshop.com/sensory-toys/squishies/Crazy-Fun-Original-Treasure-Edition-Mystery-Squishy-Dumpling-%28Styles-Vary%29/p/586191',

    quickViewTitle: 'Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)',

    quickViewDescription: 'A surprise squishy dumpling treat. Styles vary.',

    quickViewImage: 'https://nalaber.com/preview/the-entertainer/media/pk-dumpling.webp',

    quickViewButtonText: 'View on TheToyShop.com',

    askText: 'Ask us: “What would you suggest for a 0-3 year old who likes squishies & pocket money for under £10?”',

    askImage: 'https://nalaber.com/preview/the-entertainer/media/jack.webp',

    showQuickView: true,

    resetText: 'Start again',

    backText: 'Back',

    skipText: 'Skip',

    noResultsHeading: 'No exact match found',

    noResultsText: 'Try changing your age, interest or budget to see more present ideas.',

    noResultsButtonText: 'Change interests'
  }
};

export const WithoutQuickView = {
  args: {
    ...Default.args,
    showQuickView: false
  }
};