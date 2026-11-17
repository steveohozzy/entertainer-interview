import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_AGES = [
  { value: '0-3', label: '0-3 Years', subtitle: 'Newborn and toddler toys', colour: '#e82416', age: '0-3', unit: 'Years' },
  { value: '3-5', label: '3-5 Years', subtitle: '3, 4 and 5 year olds', colour: '#8b2fc9', age: '3-5', unit: 'Years' },
  { value: '5-8', label: '5-8 Years', subtitle: '5 to 8 year olds', colour: '#2bb5c9', age: '5-8', unit: 'Years' },
  { value: '8-11', label: '8-11 Years', subtitle: '8 to 11 year olds', colour: '#4caf50', age: '8-11', unit: 'Years' },
  { value: '11', label: '11+ Years', subtitle: 'Big Kids', colour: '#0d943f', age: '11+', unit: 'Years' },
  { value: 'grown', label: 'Grown Ups', subtitle: 'Toys for Grown Ups', colour: '#111111', age: 'Grown', unit: 'Ups' }
];

const DEFAULT_INTERESTS = [
  { value: 'dolls', label: 'Dolls', subtitle: 'Fashion dolls, baby dolls, playsets', image: 'https://nalaber.com/preview/the-entertainer/media/pod-kpop.webp', type: 'photo' },
  { value: 'build', label: 'Construction Toys', subtitle: 'LEGO, Meccano and building sets', image: 'https://nalaber.com/preview/the-entertainer/media/lg-technic.webp', type: 'photo' },
  { value: 'soft', label: 'Plushies & Soft toys', subtitle: 'Teddies, movie plush, puppets', image: 'https://nalaber.com/preview/the-entertainer/media/cut-fuggler.webp', type: 'cut', background: '#cfe7a6' },
  { value: 'bikes', label: 'Bikes & Ride-Ons', subtitle: 'Bikes, trikes, scooters', image: 'https://nalaber.com/preview/the-entertainer/media/cut-spidey.webp', type: 'cut', background: '#bcd3f2' },
  { value: 'blasters', label: 'Toy Blasters', subtitle: 'Blasters and battle toys', image: 'https://nalaber.com/preview/the-entertainer/media/cut-laser.webp', type: 'cut', background: '#ffc9c2' },
  { value: 'games', label: 'Games & Puzzles', subtitle: 'Board games, jigsaws, family games', image: 'https://nalaber.com/preview/the-entertainer/media/pod-traitors.webp', type: 'photo' },
  { value: 'cards', label: 'Trading Cards', subtitle: 'Topps, Panini, Pokemon, Magic', image: 'https://nalaber.com/preview/the-entertainer/media/pod-topps.webp', type: 'photo' },
  { value: 'squish', label: 'Squishies & Pocket Money', subtitle: 'Blind bags, squishies, advent', image: 'https://nalaber.com/preview/the-entertainer/media/cut-dumpling.webp', type: 'cut', background: '#ffd6ec' }
];

const DEFAULT_BUDGETS = [
  { value: 'u10', label: 'Under £10', subtitle: 'Pocket money and stocking fillers', image: 'https://nalaber.com/preview/the-entertainer/media/cut-dumpling.webp', price: '£6.00', background: '#0d5d9c' },
  { value: 'u25', label: 'Under £25', subtitle: 'Party presents', image: 'https://nalaber.com/preview/the-entertainer/media/cut-laser.webp', price: '£15.00', background: '#407ec9' },
  { value: 'u50', label: 'Under £50', subtitle: 'Birthday presents', image: 'https://nalaber.com/preview/the-entertainer/media/cut-zoey.webp', price: '£30.00', background: '#2bb5c9' },
  { value: 'any', label: 'Any budget', subtitle: 'Show me everything', image: 'https://nalaber.com/preview/the-entertainer/media/cut-meccano.webp', price: '£180.00', background: '#009e44' }
];

/*
 * Editable sample recommendation catalogue.
 * Replace sample entries with verified product information when connecting
 * this component to a live product feed.
 */
export const DEFAULT_PRODUCTS = [
  {
    id: 'dumpling',
    name: 'Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)',
    category: 'Crazy Fun · Squishies',
    interest: ['squish'],
    ages: ['0-3', '3-5', '5-8'],
    price: 6,
    priceLabel: '£6.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/pk-dumpling.webp',
    badge: 'https://nalaber.com/preview/the-entertainer/media/roundel-new.webp',
    description: 'A surprise squishy dumpling treat. Styles vary.',
    url: 'https://www.thetoyshop.com/sensory-toys/squishies/Crazy-Fun-Original-Treasure-Edition-Mystery-Squishy-Dumpling-%28Styles-Vary%29/p/586191',
    categoryUrl: 'https://www.thetoyshop.com/c/pocket-money',
    points: [
      'Free Click & Collect within 30 minutes, subject to availability in store',
      'New toys, styles vary'
    ]
  },
  {
    id: 'mira',
    name: 'KPop Demon Hunters Mira Huntrix Doll',
    category: 'Dolls',
    interest: ['dolls'],
    ages: ['5-8', '8-11', '11'],
    price: 30,
    priceLabel: '£30.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/pod-kpop.webp',
    description: 'A KPop Demon Hunters fashion doll.',
    categoryUrl: 'https://www.thetoyshop.com/c/dolls',
    points: ['KPop Demon Hunters', 'Fashion doll']
  },
  {
    id: 'zoey',
    name: 'KPop Demon Hunters Zoey Huntrix Doll',
    category: 'Dolls',
    interest: ['dolls'],
    ages: ['5-8', '8-11', '11'],
    price: 30,
    priceLabel: '£30.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/cut-zoey.webp',
    description: 'A KPop Demon Hunters Zoey fashion doll.',
    categoryUrl: 'https://www.thetoyshop.com/c/dolls',
    points: ['KPop Demon Hunters', 'Fashion doll']
  },
  {
    id: 'fuggler',
    name: 'Fuggler Festive Fuggs Series 2 Sasquinch Soft Toy',
    category: 'Plushies & Soft toys',
    interest: ['soft'],
    ages: ['3-5', '5-8', '8-11', '11', 'grown'],
    price: 10,
    priceLabel: '£10.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/cut-fuggler.webp',
    description: 'A wonderfully weird Fuggler soft toy.',
    categoryUrl: 'https://www.thetoyshop.com/c/soft-toys',
    points: ['Festive Fuggs Series 2', 'Soft toy']
  },
  {
    id: 'laser',
    name: 'Laser Duel Tag Blaster Game',
    category: 'Toy Blasters',
    interest: ['blasters', 'games'],
    ages: ['5-8', '8-11', '11'],
    price: 15,
    priceLabel: '£15.00',
    wasPrice: '£30.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/cut-laser.webp',
    description: 'Laser tag battle fun.',
    categoryUrl: 'https://www.thetoyshop.com/c/toy-blasters',
    points: ['Laser tag battle game', 'Was £30.00']
  },
  {
    id: 'meccano',
    name: 'Meccano Pro Limited Edition Aston Martin Aramco Formula One Race Car Construction Set',
    category: 'Construction Toys',
    interest: ['build'],
    ages: ['11', 'grown'],
    price: 180,
    priceLabel: '£180.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/cut-meccano.webp',
    description: 'A detailed Meccano construction set.',
    categoryUrl: 'https://www.thetoyshop.com/c/construction-toys',
    points: ['Construction set', 'For experienced builders']
  },
  {
    id: 'spidey-bike',
    name: 'Huffy 12 Inch Spider-Man Light Up Bike',
    category: 'Bikes & Ride-Ons',
    interest: ['bikes'],
    ages: ['3-5', '5-8'],
    price: 124.99,
    priceLabel: '£124.99',
    image: 'https://nalaber.com/preview/the-entertainer/media/cut-spidey.webp',
    description: 'A Spider-Man themed first bike.',
    categoryUrl: 'https://www.thetoyshop.com/c/bikes',
    points: ['Spider-Man design', 'Kids bike']
  },
  {
    id: 'trike',
    name: 'Huffy Green Machine Drift Trike',
    category: 'Bikes & Ride-Ons',
    interest: ['bikes'],
    ages: ['8-11', '11'],
    price: 65,
    priceLabel: '£65.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/cut-spidey.webp',
    description: 'A drift trike for bigger kids.',
    categoryUrl: 'https://www.thetoyshop.com/c/bikes',
    points: ['Ride-on fun', 'For bigger kids']
  },
  {
    id: 'games',
    name: 'Family Games & Puzzles',
    category: 'Games & Puzzles',
    interest: ['games'],
    ages: ['5-8', '8-11', '11', 'grown'],
    price: 15,
    priceLabel: 'From £15.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/pod-traitors.webp',
    description: 'Games and puzzles for family fun.',
    categoryUrl: 'https://www.thetoyshop.com/c/games-and-puzzles',
    points: ['Family game time', 'Games and puzzles']
  },
  {
    id: 'cards',
    name: 'Trading Cards',
    category: 'Trading Cards',
    interest: ['cards'],
    ages: ['5-8', '8-11', '11', 'grown'],
    price: 6,
    priceLabel: 'From £6.00',
    image: 'https://nalaber.com/preview/the-entertainer/media/pod-topps.webp',
    description: 'Trading cards and collectables.',
    categoryUrl: 'https://www.thetoyshop.com/c/trading-cards',
    points: ['Collectable cards', 'Great for collectors']
  }
];

const DEFAULT_RESULT_LINKS = [
  { label: 'Shop Squishies & Pocket Money', url: 'https://www.thetoyshop.com/c/pocket-money' },
  { label: 'All toys for 0-3 Years', url: 'https://www.thetoyshop.com/c/all-categories?ageRange=0%20-%2018%20months&ageRange=18%20-%2036%20months' },
  { label: 'All Toys Under £10', url: 'https://www.thetoyshop.com/c/toys-under-10-pounds' }
];

const DEFAULT_THEME = {
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
};

const DEFAULT_TEXT = {
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
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 12H5m7 7-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6L2.5 8.9 9.1 8z" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PresentFinder = ({
  kicker,
  heading,
  questions,
  ageOptions,
  interestOptions,
  budgetOptions,
  products,
  accentColour,
  blueColour,
  redColour,
  greenColour,
  yellowColour,
  theme,
  text,
  resultCategory,
  resultName,
  resultDescription,
  resultPrice,
  resultWasPrice,
  resultImage,
  resultImageAlt,
  resultBadgeImage,
  resultBadgeAlt,
  resultPoints,
  resultLinks,
  resultButtonText,
  resultUrl,
  quickViewTitle,
  quickViewDescription,
  quickViewImage,
  quickViewButtonText,
  askText,
  askImage,
  onAskClick,
  showQuickView,
  resetText,
  backText,
  skipText,
  noResultsHeading,
  noResultsText,
  noResultsButtonText
}) => {
  const rootRef = useRef(null);
  const animationRef = useRef(null);

  const colours = {
    ...DEFAULT_THEME,
    ...(theme || {}),
    blue: blueColour || theme?.blue || DEFAULT_THEME.blue,
    red: redColour || theme?.red || DEFAULT_THEME.red,
    green: greenColour || theme?.green || DEFAULT_THEME.green,
    yellow: yellowColour || theme?.yellow || DEFAULT_THEME.yellow
  };

  const copy = {
    ...DEFAULT_TEXT,
    ...(text || {}),
    back: backText,
    skip: skipText,
    reset: resetText,
    resultButton: resultButtonText,
    quickViewButton: quickViewButtonText,
    noResultsHeading,
    noResultsText,
    noResultsButton: noResultsButtonText
  };

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ age: '', interest: '', budget: '' });
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedAge = ageOptions.find((item) => item.value === answers.age);
  const selectedInterest = interestOptions.find((item) => item.value === answers.interest);
  const selectedBudget = budgetOptions.find((item) => item.value === answers.budget);
  const accent = selectedAge?.colour || accentColour || colours.blue;

  const currentOptions = step === 1
    ? ageOptions
    : step === 2
      ? interestOptions
      : budgetOptions;

  const currentAnswer = step === 1
    ? answers.age
    : step === 2
      ? answers.interest
      : answers.budget;

  const question = questions[step - 1];

  const summary = [
    {
      key: 'age',
      label: copy.whoFor,
      value: selectedAge ? selectedAge.label : '',
      step: 1
    },
    {
      key: 'interest',
      label: copy.into,
      value: selectedInterest ? selectedInterest.label : '',
      step: 2
    },
    {
      key: 'budget',
      label: copy.budget,
      value: selectedBudget ? selectedBudget.label : '',
      step: 3
    }
  ];

  const recommendedProducts = products
    .map((product) => {
      let score = 0;

      if (answers.interest) {
        if (!product.interest || product.interest.indexOf(answers.interest) === -1) {
          return null;
        }
        score += 5;
      }

      if (answers.age) {
        if (!product.ages || product.ages.indexOf(answers.age) === -1) {
          return null;
        }
        score += 3;
      }

      if (answers.budget) {
        if (answers.budget === 'u10' && product.price > 10) return null;
        if (answers.budget === 'u25' && product.price > 25) return null;
        if (answers.budget === 'u50' && product.price > 50) return null;
        score += 4;
      }

      return { ...product, score };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.price - b.price;
    });

  const selectedProduct = recommendedProducts.length
    ? recommendedProducts[productIndex % recommendedProducts.length]
    : null;

  const answerQuestion = (key, value) => {
    setAnswers((previous) => {
      const next = { ...previous, [key]: value };

      if (key === 'age') {
        next.interest = '';
        next.budget = '';
      }

      if (key === 'interest') {
        next.budget = '';
      }

      return next;
    });

    setAnimationKey((previous) => previous + 1);

    if (key === 'budget') {
      setProductIndex(0);
      setResultVisible(true);
    } else {
      setStep(key === 'age' ? 2 : 3);
    }
  };

  /*
   * Clone the selected tile into a fixed-position layer.
   * The clone travels to the matching summary pill and fades out.
   * The real tile remains in place until the animation has completed.
   */
  const animateSelection = (event, key, value) => {
    if (isAnimating) return;

    const tile = event.currentTarget;
    const root = rootRef.current;
    const summaryTarget = root
      ? root.querySelector(`[data-summary="${key}"] .te-sum-b`)
      : null;

    if (!tile || !summaryTarget) {
      answerQuestion(key, value);
      return;
    }

    const start = tile.getBoundingClientRect();
    const end = summaryTarget.getBoundingClientRect();
    const clone = tile.cloneNode(true);
    const duration = Math.max(0, Number(colours.animationDuration) || 750);
    const x = end.left + (end.width / 2) - (start.left + start.width / 2);
    const y = end.top + (end.height / 2) - (start.top + start.height / 2);

    const computed = window.getComputedStyle(tile);

    clone.classList.remove('is-sel');
    clone.classList.add('pf-flight-tile');
    clone.removeAttribute('aria-pressed');
    clone.setAttribute('aria-hidden', 'true');

    Object.assign(clone.style, {
      position: 'fixed',
      top: `${start.top}px`,
      left: `${start.left}px`,
      width: `${start.width}px`,
      height: `${start.height}px`,
      margin: '0',
      zIndex: '999999',
      pointerEvents: 'none',
      transformOrigin: 'center center',
      overflow: 'hidden',
      borderRadius: computed.borderRadius,
      background: key === 'age' ? (tile.style.getPropertyValue('--c') || colours.flightColour) : computed.backgroundColor,
      boxShadow: '0 18px 45px rgba(13,30,60,.3)'
    });

    document.body.appendChild(clone);
    tile.classList.add('is-flight-selected');
    setIsAnimating(true);

    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;

      if (animationRef.current) {
        animationRef.current.onfinish = null;
        animationRef.current.cancel();
        animationRef.current = null;
      }

      clone.remove();
      tile.classList.remove('is-flight-selected');
      setIsAnimating(false);
      answerQuestion(key, value);
    };

    const reducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || duration === 0) {
      finish();
      return;
    }

    if (typeof clone.animate === 'function') {
      animationRef.current = clone.animate(
        [
          {
            transform: 'translate3d(0,0,0) scale(1)',
            opacity: 1,
            borderRadius: computed.borderRadius,
            filter: 'brightness(1)'
          },
          {
            transform: 'translate3d(0,0,0) scale(.94)',
            opacity: 1,
            offset: 0.14
          },
          {
            transform: `translate3d(${x * 0.48}px,${y * 0.48}px,0) scale(.48)`,
            opacity: 0.94,
            borderRadius: '28px',
            offset: 0.65
          },
          {
            transform: `translate3d(${x}px,${y}px,0) scale(.12)`,
            opacity: 0,
            borderRadius: '50%',
            filter: 'brightness(1.2)'
          }
        ],
        {
          duration,
          easing: colours.animationEasing,
          fill: 'forwards'
        }
      );

      animationRef.current.onfinish = finish;
      animationRef.current.oncancel = finish;
    } else {
      clone.style.transition = `transform ${duration}ms ${colours.animationEasing}, opacity ${duration}ms ease`;
      requestAnimationFrame(() => {
        clone.style.transform = `translate3d(${x}px,${y}px,0) scale(.12)`;
        clone.style.opacity = '0';
        clone.style.borderRadius = '50%';
      });
      window.setTimeout(finish, duration + 50);
    }
  };

  const changeStep = (nextStep) => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }

    setIsAnimating(false);
    setResultVisible(false);
    setQuickViewOpen(false);
    setStep(nextStep);
    setAnimationKey((previous) => previous + 1);
  };

  const skipStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      setProductIndex(0);
      setResultVisible(true);
    }

    setAnimationKey((previous) => previous + 1);
  };

  const restart = () => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }

    setAnswers({ age: '', interest: '', budget: '' });
    setStep(1);
    setResultVisible(false);
    setQuickViewOpen(false);
    setProductIndex(0);
    setIsAnimating(false);
    setAnimationKey((previous) => previous + 1);
  };

  const ask = () => {
    if (typeof onAskClick === 'function') {
      onAskClick({
        age: selectedAge ? selectedAge.label : 'any age',
        interest: selectedInterest ? selectedInterest.label : 'any interest',
        budget: selectedBudget ? selectedBudget.label : 'any budget'
      });
    }
  };

  const showNextProduct = () => {
    if (recommendedProducts.length > 1) {
      setProductIndex((previous) => (previous + 1) % recommendedProducts.length);
    }
  };

  const activeResult = selectedProduct || {
    category: resultCategory,
    name: resultName,
    description: resultDescription,
    priceLabel: resultPrice,
    wasPrice: resultWasPrice,
    image: resultImage,
    badge: resultBadgeImage,
    points: resultPoints,
    url: resultUrl,
    categoryUrl: resultUrl
  };

  useEffect(() => {
    if (!quickViewOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setQuickViewOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quickViewOpen]);

  useEffect(() => () => {
    if (animationRef.current) animationRef.current.cancel();
  }, []);

  const cssTheme = {
    '--pf-blue': colours.blue,
    '--pf-red': colours.red,
    '--pf-green': colours.green,
    '--pf-yellow': colours.yellow,
    '--pf-ink': colours.ink,
    '--pf-grey': colours.grey,
    '--pf-lav': colours.lavender,
    '--pf-lav2': colours.lavenderLight,
    '--pf-line': colours.line,
    '--pf-white': colours.white,
    '--pf-tile-overlay': colours.tileOverlay,
    '--pf-summary-bg': colours.summaryBackground,
    '--pf-summary-border': colours.summaryBorder,
    '--pf-selected-text': colours.selectedText,
    '--pf-flight-colour': colours.flightColour,
    '--pf-result-bg': colours.resultBackground,
    '--pf-drawer-overlay': colours.drawerOverlay,
    '--pf-tile-radius': colours.tileRadius,
    '--pf-panel-radius': colours.panelRadius,
    '--pf-animation-duration': `${colours.tileAnimationDuration}ms`,
    '--pf-result-duration': `${colours.resultAnimationDuration}ms`,
    '--pf-ease': colours.animationEasing,
    '--pf-spring': 'cubic-bezier(.34,1.56,.64,1)',
    '--ft': accent
  };

  return (
    <div className="te-present-finder" ref={rootRef} style={cssTheme}>
      <style>{`
        .te-present-finder {
          width: 100%;
          color: var(--pf-ink);
          font-family: Nunito, Arial, sans-serif;
        }

        .te-present-finder *,
        .te-present-finder *:before,
        .te-present-finder *:after {
          box-sizing: border-box;
        }

        .te-present-finder button,
        .te-present-finder a {
          font: inherit;
        }

        .te-present-finder .te-finder {
          padding: 0 0 30px;
        }

        .te-present-finder .te-find {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
          gap: clamp(22px, 3vw, 48px);
          padding: clamp(22px, 3.2vw, 44px);
          overflow: hidden;
          background: var(--pf-white);
          border-radius: var(--pf-panel-radius);
          box-shadow: 0 30px 60px -36px rgba(13,93,156,.55);
        }

        .te-present-finder .te-find:before {
          position: absolute;
          top: -120px;
          left: -120px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: var(--ft);
          opacity: .08;
          content: "";
          pointer-events: none;
          transition: background .5s;
        }

        .te-present-finder .te-find-l {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .te-present-finder .te-kicker {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
          color: var(--pf-blue);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .07em;
          text-transform: uppercase;
        }

        .te-present-finder .te-find h2 {
          margin: 0;
          color: var(--pf-blue);
          font-size: clamp(27px, 2.7vw, 38px);
          font-weight: 900;
          line-height: 1.08;
        }

        .te-present-finder .te-fsteps {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 18px 0 6px;
          color: var(--pf-grey);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .te-present-finder .te-fbars {
          display: flex;
          gap: 5px;
        }

        .te-present-finder .te-fbars i {
          width: 30px;
          height: 5px;
          border-radius: 4px;
          background: var(--pf-lav);
          transition: background .3s;
        }

        .te-present-finder .te-fbars i.on {
          background: var(--ft);
        }

        .te-present-finder .te-fq {
          margin: 6px 0 16px;
          color: var(--pf-ink);
          font-size: clamp(20px, 1.8vw, 24px);
          font-weight: 900;
        }

        .te-present-finder .te-sum {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .te-present-finder .te-sum-b {
          display: grid;
          grid-template-columns: 70px 1fr auto;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 10px 16px;
          border: 2px dashed var(--pf-summary-border);
          border-radius: 999px;
          background: var(--pf-summary-bg);
          color: var(--pf-ink);
          text-align: left;
          cursor: pointer;
          transition: background .25s, border-color .25s, transform .25s;
        }

        .te-present-finder .te-sum-b:disabled {
          cursor: default;
        }

        .te-present-finder .te-sum-b.is-set {
          border-style: solid;
          border-color: var(--ft);
          background: var(--pf-white);
          animation: pfSummaryArrive .45s var(--pf-spring) both;
        }

        .te-present-finder .te-sum-b.is-set:hover {
          transform: translateX(3px);
        }

        .te-present-finder .te-sum-k {
          color: var(--pf-grey);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .te-present-finder .te-sum-v {
          overflow: hidden;
          color: #7a8296;
          font-size: 15px;
          font-weight: 800;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .te-present-finder .te-sum-b.is-set .te-sum-v {
          color: var(--pf-selected-text);
        }

        .te-present-finder .te-sum-chg {
          display: none;
          align-items: center;
          gap: 5px;
          color: var(--pf-red);
          font-size: 12px;
          font-weight: 900;
        }

        .te-present-finder .te-sum-b.is-set .te-sum-chg {
          display: inline-flex;
        }

        @keyframes pfSummaryArrive {
          0% { transform: scale(.96); background: var(--pf-summary-bg); }
          65% { transform: scale(1.025); }
          100% { transform: scale(1); background: var(--pf-white); }
        }

        .te-present-finder .te-find-foot {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: auto;
          padding-top: 18px;
        }

        .te-present-finder .te-back,
        .te-present-finder .te-skipb,
        .te-present-finder .te-reset {
          padding: 8px 4px;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .te-present-finder .te-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--pf-blue);
          font-size: 14px;
          font-weight: 800;
        }

        .te-present-finder .te-back svg {
          width: 14px;
          height: 14px;
        }

        .te-present-finder .te-skipb {
          color: var(--pf-grey);
          font-size: 13px;
          font-weight: 700;
          text-decoration: underline;
        }

        .te-present-finder .te-reset {
          color: var(--pf-red);
          font-size: 13px;
          font-weight: 800;
          text-decoration: underline;
        }

        .te-present-finder .te-find-r {
          position: relative;
          min-width: 0;
        }

        .te-present-finder .te-tiles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .te-present-finder .te-tiles--s2 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .te-present-finder .te-tiles--s3 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .te-present-finder .te-tiles.is-enter .te-tile {
          animation: pfTile var(--pf-animation-duration) var(--pf-ease) both;
          animation-delay: calc(var(--i) * 55ms);
        }

        @keyframes pfTile {
          from { opacity: 0; transform: translateY(16px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .te-present-finder .te-tile {
          position: relative;
          min-width: 0;
          aspect-ratio: 4 / 3.2;
          overflow: hidden;
          padding: 0;
          border: 0;
          border-radius: var(--pf-tile-radius);
          background: var(--bg, var(--pf-lav));
          box-shadow: 0 16px 30px -20px rgba(13,30,60,.55);
          color: var(--pf-white);
          text-align: left;
          cursor: pointer;
          transform-origin: center;
          transition: transform .35s var(--pf-spring), box-shadow .3s, opacity .3s;
          -webkit-tap-highlight-color: transparent;
        }

        .te-present-finder .te-tile:hover,
        .te-present-finder .te-tile:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 26px 40px -22px rgba(13,30,60,.6);
        }

        .te-present-finder .te-tile:active {
          transform: scale(.96);
        }

        .te-present-finder .te-tile-img {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }

        .te-present-finder .te-tile-img > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s var(--pf-ease);
        }

        .te-present-finder .te-tile:hover .te-tile-img > img {
          transform: scale(1.07);
        }

        .te-present-finder .te-tile--cut .te-tile-img > img {
          width: 78%;
          height: 72%;
          margin-top: -6%;
          object-fit: contain;
          filter: drop-shadow(0 16px 16px rgba(0,0,0,.25));
        }

        .te-present-finder .te-tile--cut:hover .te-tile-img > img {
          transform: scale(1.08) rotate(-3deg);
        }

        .te-present-finder .te-tile:after {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, var(--pf-tile-overlay) 0, rgba(8,30,60,.25) 42%, transparent 62%);
          content: "";
          pointer-events: none;
        }

        .te-present-finder .te-tile--age {
          background: radial-gradient(circle at 50% 38%, var(--age-soft, #f5e4e4) 0, var(--age-pale, #fff5f5) 60%, var(--pf-white) 100%);
        }

        .te-present-finder .te-tile--age:after {
          background: linear-gradient(0deg, var(--c) 0, transparent 46%);
          opacity: .92;
        }

        .te-present-finder .te-acirc {
          display: grid;
          width: 46%;
          aspect-ratio: 1;
          place-content: center;
          margin-top: -14%;
          border-radius: 50%;
          background: var(--c);
          box-shadow: 0 14px 22px -12px rgba(0,0,0,.45);
          color: var(--pf-white);
          font-size: 15px;
          font-weight: 900;
          line-height: 1;
          text-align: center;
          transition: transform .45s var(--pf-spring);
        }

        .te-present-finder .te-acirc b {
          display: block;
          font-size: clamp(22px, 2.2vw, 32px);
        }

        .te-present-finder .te-tile--age:hover .te-acirc {
          transform: scale(1.1) rotate(-6deg);
        }

        .te-present-finder .te-tile--bud .te-tile-img > img {
          width: 60%;
          height: 60%;
        }

        .te-present-finder .te-tile-price {
          position: absolute;
          top: 12%;
          right: 12%;
          z-index: 2;
          display: grid;
          width: 72px;
          height: 72px;
          place-items: center;
          transform: rotate(10deg);
          border: 4px solid var(--pf-white);
          border-radius: 50%;
          background: var(--pf-red);
          box-shadow: 0 10px 18px -8px rgba(0,0,0,.4);
          color: var(--pf-white);
          font-size: 16px;
          font-weight: 900;
        }

        .te-present-finder .te-tile-txt {
          position: absolute;
          right: 48px;
          bottom: 12px;
          left: 14px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .te-present-finder .te-tile-l {
          font-size: 17px;
          font-weight: 900;
          line-height: 1.15;
        }

        .te-present-finder .te-tile-s {
          font-size: 12px;
          font-weight: 700;
          line-height: 1.25;
          opacity: .88;
        }

        .te-present-finder .te-tile-go {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 2;
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border-radius: 50%;
          background: var(--pf-white);
          color: var(--pf-blue);
          transition: transform .3s var(--pf-spring);
        }

        .te-present-finder .te-tile-go svg {
          width: 15px;
          height: 15px;
        }

        .te-present-finder .te-tile:hover .te-tile-go {
          transform: translateX(3px) scale(1.08);
        }

        .te-present-finder .te-tile-ok {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          transform: scale(.4);
          border-radius: 50%;
          background: var(--pf-green);
          color: var(--pf-white);
          opacity: 0;
          transition: .3s var(--pf-spring);
        }

        .te-present-finder .te-tile-ok svg {
          width: 15px;
          height: 15px;
        }

        .te-present-finder .te-tile.is-sel .te-tile-ok {
          transform: none;
          opacity: 1;
        }

        .te-present-finder .te-tile.is-sel {
          box-shadow: 0 0 0 4px var(--pf-green), 0 26px 40px -22px rgba(13,30,60,.6);
          animation: pfSelect .35s var(--pf-spring);
        }

        .te-present-finder .te-tile.is-flight-selected {
          background: var(--pf-flight-colour) !important;
          box-shadow: 0 0 0 4px var(--pf-flight-colour), 0 18px 40px rgba(13,30,60,.25) !important;
        }

        .te-present-finder .te-tile.is-flight-selected:after {
          background: var(--pf-flight-colour);
          opacity: .9;
        }

        .pf-flight-tile {
          display: block !important;
          cursor: default !important;
          box-shadow: 0 18px 45px rgba(13,30,60,.3) !important;
          will-change: transform, opacity;
        }

        @keyframes pfSelect {
          0% { transform: scale(1); }
          45% { transform: scale(.94); }
          100% { transform: scale(1); }
        }

        .te-present-finder .te-fres {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          align-items: stretch;
          gap: 22px;
          animation: pfResultIn var(--pf-result-duration) var(--pf-ease) both;
        }

        @keyframes pfResultIn {
          0% { opacity: 0; transform: translateY(22px) scale(.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .te-present-finder .te-res-img {
          position: relative;
          display: grid;
          min-height: 340px;
          place-items: center;
          overflow: hidden;
          border-radius: 20px;
          background: radial-gradient(circle at 50% 45%, var(--pf-white) 0, var(--pf-result-bg) 100%);
          cursor: pointer;
          animation: pfProductIn .7s var(--pf-spring) both;
        }

        @keyframes pfProductIn {
          0% { opacity: 0; transform: scale(.9) rotate(-3deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }

        .te-present-finder .te-res-pk {
          position: absolute;
          inset: 8% 10%;
          width: 80%;
          height: 84%;
          object-fit: contain;
          opacity: 0;
          transform: scale(.9) translateY(10px);
          filter: drop-shadow(0 22px 22px rgba(13,30,60,.28));
          transition: opacity .45s, transform .55s var(--pf-spring);
        }

        .te-present-finder .te-res-pk.on {
          transform: none;
          opacity: 1;
        }

        .te-present-finder .te-res-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 11px;
          border-radius: 999px;
          background: var(--pf-yellow);
          color: var(--pf-blue);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .te-present-finder .te-res-tag svg {
          width: 11px;
          height: 11px;
        }

        .te-present-finder .te-res-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
        }

        .te-present-finder .te-res-badge img {
          max-width: 74px;
          max-height: 74px;
          object-fit: contain;
        }

        .te-present-finder .te-res-body {
          display: flex;
          flex-direction: column;
          min-width: 0;
          gap: 10px;
        }

        .te-present-finder .te-res-k {
          color: var(--pf-grey);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .te-present-finder .te-res-name {
          margin: 0;
          color: var(--pf-blue);
          font-size: clamp(19px, 1.7vw, 24px);
          font-weight: 900;
          line-height: 1.2;
        }

        .te-present-finder .te-res-d {
          color: var(--pf-grey);
          font-weight: 600;
        }

        .te-present-finder .te-res-price {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 10px;
          color: var(--pf-red);
          font-size: 26px;
          font-weight: 900;
        }

        .te-present-finder .te-res-price s {
          color: var(--pf-grey);
          font-size: 15px;
          font-weight: 700;
        }

        .te-present-finder .te-res-pts {
          display: grid;
          gap: 7px;
          margin: 0;
          padding: 10px 0;
          border-top: 1px solid var(--pf-line);
          border-bottom: 1px solid var(--pf-line);
          list-style: none;
        }

        .te-present-finder .te-res-pts li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--pf-ink);
          font-size: 14px;
          font-weight: 700;
        }

        .te-present-finder .te-res-pts svg {
          flex: none;
          width: 18px;
          height: 18px;
          color: var(--pf-blue);
        }

        .te-present-finder .te-res-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .te-present-finder .te-pill {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          border: 2px solid transparent;
          border-radius: 999px;
          background: var(--pf-green);
          color: var(--pf-white);
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          cursor: pointer;
          transition: transform .2s, background .2s;
        }

        .te-present-finder .te-pill:hover {
          transform: translateY(-2px);
        }

        .te-present-finder .te-pill-outline {
          border-color: var(--pf-blue);
          background: var(--pf-white);
          color: var(--pf-blue);
        }

        .te-present-finder .te-res-links {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 18px;
        }

        .te-present-finder .te-flink {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--pf-blue);
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }

        .te-present-finder .te-flink:hover {
          text-decoration: underline;
        }

        .te-present-finder .te-flink svg {
          width: 13px;
          height: 13px;
        }

        .te-present-finder .te-ask-this {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 0;
          border-radius: 14px;
          background: var(--pf-lav2);
          color: var(--pf-blue);
          font-size: 14px;
          font-weight: 800;
          line-height: 1.35;
          text-align: left;
          cursor: pointer;
        }

        .te-present-finder .te-ask-this img {
          flex: none;
          width: 28px;
          height: auto;
        }

        .te-present-finder .te-ask-this:hover {
          background: var(--pf-lav);
        }

        .te-present-finder .te-more-products {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }

        .te-present-finder .te-more-products button {
          padding: 7px 12px;
          border: 1px solid var(--pf-blue);
          border-radius: 30px;
          background: var(--pf-white);
          color: var(--pf-blue);
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .te-present-finder .te-more-products span {
          color: var(--pf-grey);
          font-size: 12px;
          font-weight: 700;
        }

        .te-present-finder .te-no-results {
          display: flex;
          min-height: 260px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 30px;
          border-radius: 20px;
          background: var(--pf-result-bg);
          animation: pfResultIn .5s both;
        }

        .te-present-finder .te-no-results h3 {
          margin: 0 0 10px;
          color: var(--pf-blue);
          font-size: 24px;
          font-weight: 900;
        }

        .te-present-finder .te-no-results p {
          margin: 0 0 20px;
          color: var(--pf-grey);
        }

        .te-present-finder .te-qv[hidden] {
          display: none;
        }

        .te-present-finder .te-qv {
          position: fixed;
          inset: 0;
          z-index: 9999;
        }

        .te-present-finder .te-qv-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          background: var(--pf-drawer-overlay);
          cursor: pointer;
        }

        .te-present-finder .te-qv-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          display: flex;
          width: min(480px, 100%);
          flex-direction: column;
          overflow: auto;
          background: var(--pf-white);
          box-shadow: -20px 0 60px rgba(0,0,0,.25);
          animation: pfDrawerIn .4s var(--pf-ease) both;
        }

        @keyframes pfDrawerIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .te-present-finder .te-qv-head {
          position: sticky;
          top: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: var(--pf-blue);
          color: var(--pf-white);
        }

        .te-present-finder .te-qv-head b {
          font-size: 14px;
          font-weight: 800;
        }

        .te-present-finder .te-qv-x {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.15);
          color: var(--pf-white);
          cursor: pointer;
        }

        .te-present-finder .te-qv-x svg {
          width: 18px;
          height: 18px;
        }

        .te-present-finder .te-qv-img {
          display: grid;
          min-height: 260px;
          place-items: center;
          padding: 28px;
          background: var(--pf-result-bg);
        }

        .te-present-finder .te-qv-img img {
          width: auto;
          max-width: 100%;
          max-height: 240px;
          object-fit: contain;
        }

        .te-present-finder .te-qv-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 22px 24px 30px;
        }

        .te-present-finder .te-qv-cat {
          color: var(--pf-grey);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .te-present-finder .te-qv-body h3 {
          margin: 0;
          color: var(--pf-blue);
          font-size: 22px;
          font-weight: 900;
          line-height: 1.2;
        }

        .te-present-finder .te-qv-desc {
          color: var(--pf-grey);
          font-weight: 700;
        }

        .te-present-finder .te-qv-price {
          color: var(--pf-red);
          font-size: 28px;
          font-weight: 900;
        }

        @media (max-width: 1023px) {
          .te-present-finder .te-find {
            grid-template-columns: 1fr;
          }

          .te-present-finder .te-tiles--s2 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .te-present-finder .te-fres {
            grid-template-columns: 1fr;
          }

          .te-present-finder .te-res-img {
            min-height: 280px;
          }
        }

        @media (max-width: 760px) {
          .te-present-finder .te-tiles,
          .te-present-finder .te-tiles--s2,
          .te-present-finder .te-tiles--s3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .te-present-finder .te-tile {
            aspect-ratio: 1 / 1;
          }
        }

        @media (max-width: 640px) {
          .te-present-finder .te-find {
            padding: 18px 14px;
            border-radius: var(--pf-panel-radius);
          }

          .te-present-finder .te-tile-l {
            font-size: 15px;
          }

          .te-present-finder .te-tile-s {
            display: none;
          }

          .te-present-finder .te-tile-txt {
            right: 44px;
            bottom: 10px;
            left: 12px;
          }

          .te-present-finder .te-tile-go {
            right: 10px;
            bottom: 10px;
            width: 28px;
            height: 28px;
          }

          .te-present-finder .te-acirc {
            font-size: 12px;
          }

          .te-present-finder .te-tile-price {
            width: 58px;
            height: 58px;
            font-size: 14px;
          }

          .te-present-finder .te-sum-b {
            grid-template-columns: 58px 1fr auto;
            padding: 9px 12px;
          }

          .te-present-finder .te-res-img {
            min-height: 240px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .te-present-finder *,
          .te-present-finder *:before,
          .te-present-finder *:after {
            animation-duration: .001s !important;
            transition-duration: .001s !important;
          }
        }
      `}</style>

      <section className="te-finder" aria-label={heading}>
        <div className="te-find" style={{ '--ft': accent }}>
          <div className="te-find-l">
            <div className="te-kicker">
              <span aria-hidden="true">✦</span>
              {kicker}
            </div>

            <h2>{heading}</h2>

            {!resultVisible && (
              <>
                <div className="te-fsteps">
                  <span>{copy.step} {step} {copy.of} 3</span>
                  <div className="te-fbars">
                    {[1, 2, 3].map((number) => (
                      <i key={number} className={number <= step ? 'on' : ''} />
                    ))}
                  </div>
                </div>

                <h3 className="te-fq">{question}</h3>
              </>
            )}

            <ol className="te-sum">
              {summary.map((item) => (
                <li key={item.key} data-summary={item.key}>
                  <button
                    type="button"
                    className={`te-sum-b ${item.value ? 'is-set' : ''}`}
                    disabled={!item.value || isAnimating}
                    onClick={() => changeStep(item.step)}
                  >
                    <span className="te-sum-k">{item.label}</span>
                    <span className="te-sum-v">
                      {item.value || copy.notSelected}
                    </span>
                    <span className="te-sum-chg">
                      {copy.change} <span aria-hidden="true">✎</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="te-find-foot">
              {!resultVisible && step > 1 && (
                <button
                  type="button"
                  className="te-back"
                  onClick={() => changeStep(step - 1)}
                  disabled={isAnimating}
                >
                  <BackIcon />
                  {copy.back}
                </button>
              )}

              {!resultVisible && (
                <button
                  type="button"
                  className="te-skipb"
                  onClick={skipStep}
                  disabled={isAnimating}
                >
                  {copy.skip}
                </button>
              )}

              <button
                type="button"
                className="te-reset"
                onClick={restart}
                disabled={isAnimating}
              >
                {copy.reset}
              </button>
            </div>
          </div>

          <div className="te-find-r">
            {!resultVisible ? (
              <div
                key={`${step}-${animationKey}`}
                className={`te-tiles te-tiles--s${step} is-enter`}
                role="group"
                aria-label={question}
              >
                {currentOptions.map((option, index) => {
                  const isAge = step === 1;
                  const isBudget = step === 3;
                  const isSelected = currentAnswer === option.value;

                  return (
                    <button
                      type="button"
                      key={option.value}
                      className={[
                        'te-tile',
                        isAge ? 'te-tile--age' : '',
                        isBudget ? 'te-tile--cut te-tile--bud' : '',
                        !isAge && !isBudget && option.type === 'cut' ? 'te-tile--cut' : '',
                        isSelected ? 'is-sel' : ''
                      ].join(' ')}
                      style={{
                        '--i': index,
                        '--c': option.colour || colours.blue,
                        '--bg': option.background || colours.lavender,
                        '--age-soft': option.softBackground || `${option.colour || colours.blue}30`,
                        '--age-pale': option.paleBackground || `${option.colour || colours.blue}12`
                      }}
                      onClick={(event) => animateSelection(
                        event,
                        step === 1 ? 'age' : step === 2 ? 'interest' : 'budget',
                        option.value
                      )}
                      aria-pressed={isSelected}
                      disabled={isAnimating}
                    >
                      <span className="te-tile-img">
                        {isAge ? (
                          <span className="te-acirc">
                            <b>{option.age}</b>
                            {option.unit}
                          </span>
                        ) : (
                          <img src={option.image} alt="" />
                        )}
                      </span>

                      {isBudget && (
                        <span className="te-tile-price">{option.price}</span>
                      )}

                      <span className="te-tile-txt">
                        <span className="te-tile-l">{option.label}</span>
                        <span className="te-tile-s">{option.subtitle}</span>
                      </span>

                      <span className="te-tile-go"><ArrowIcon /></span>
                      <span className="te-tile-ok"><CheckIcon /></span>
                    </button>
                  );
                })}
              </div>
            ) : selectedProduct ? (
              <div className="te-fres" key={selectedProduct.id}>
                <div
                  className="te-res-img"
                  onClick={() => setQuickViewOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setQuickViewOpen(true);
                    }
                  }}
                >
                  <span className="te-res-tag">
                    <StarIcon />
                    {copy.ourPick}
                  </span>

                  {selectedProduct.badge && (
                    <span className="te-res-badge">
                      <img src={selectedProduct.badge} alt={resultBadgeAlt} />
                    </span>
                  )}

                  <img
                    className="te-res-pk on"
                    src={selectedProduct.image}
                    alt={resultImageAlt || selectedProduct.name}
                  />
                </div>

                <div className="te-res-body">
                  <div className="te-res-k">{selectedProduct.category}</div>

                  <h3 className="te-res-name">{selectedProduct.name}</h3>

                  {selectedProduct.description && (
                    <div className="te-res-d">{selectedProduct.description}</div>
                  )}

                  <div className="te-res-price">
                    {selectedProduct.priceLabel}
                    {selectedProduct.wasPrice && <s>{selectedProduct.wasPrice}</s>}
                  </div>

                  <ul className="te-res-pts">
                    {(selectedProduct.points || []).map((point, index) => (
                      <li key={`${point}-${index}`}>
                        <CheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="te-res-cta">
                    <a
                      className="te-pill"
                      href={selectedProduct.url || selectedProduct.categoryUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.resultButton}
                    </a>

                    {showQuickView && (
                      <button
                        type="button"
                        className="te-pill te-pill-outline"
                        onClick={() => setQuickViewOpen(true)}
                      >
                        {copy.quickView}
                      </button>
                    )}
                  </div>

                  <div className="te-res-links">
                    {selectedProduct.categoryUrl && (
                      <a
                        className="te-flink"
                        href={selectedProduct.categoryUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {copy.shopPrefix} {selectedProduct.category}
                        <ArrowIcon />
                      </a>
                    )}

                    {(resultLinks || []).map((link, index) => (
                      <a
                        className="te-flink"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        key={`${link.url}-${index}`}
                      >
                        {link.label}
                        <ArrowIcon />
                      </a>
                    ))}
                  </div>

                  {recommendedProducts.length > 1 && (
                    <div className="te-more-products">
                      <span>
                        {productIndex + 1} {copy.of} {recommendedProducts.length} {copy.resultCount}
                      </span>
                      <button type="button" onClick={showNextProduct}>
                        {copy.showAnother}
                      </button>
                    </div>
                  )}

                  {askText && (
                    <button type="button" className="te-ask-this" onClick={ask}>
                      {askImage && <img src={askImage} alt="" />}
                      {askText}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="te-no-results">
                <h3>{copy.noResultsHeading}</h3>
                <p>{copy.noResultsText}</p>
                <button type="button" className="te-pill" onClick={() => changeStep(2)}>
                  {copy.noResultsButton}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div
        className="te-qv"
        hidden={!quickViewOpen}
        role="dialog"
        aria-modal="true"
        aria-label={quickViewTitle || activeResult.name}
      >
        <button
          type="button"
          className="te-qv-bg"
          aria-label={copy.closeQuickView}
          onClick={() => setQuickViewOpen(false)}
        />

        <div className="te-qv-panel">
          <div className="te-qv-head">
            <b>{copy.quickView}</b>
            <button
              type="button"
              className="te-qv-x"
              onClick={() => setQuickViewOpen(false)}
              aria-label={copy.closeQuickView}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="te-qv-img">
            {(selectedProduct ? selectedProduct.image : quickViewImage) && (
              <img
                src={selectedProduct ? selectedProduct.image : quickViewImage}
                alt={activeResult.name}
              />
            )}
          </div>

          <div className="te-qv-body">
            <div className="te-qv-cat">{activeResult.category}</div>

            <h3>
              {selectedProduct
                ? selectedProduct.name
                : quickViewTitle || activeResult.name}
            </h3>

            <p className="te-qv-desc">
              {selectedProduct
                ? selectedProduct.description
                : quickViewDescription || activeResult.description}
            </p>

            <div className="te-qv-price">{activeResult.priceLabel}</div>

            <a
              className="te-pill"
              href={activeResult.url || activeResult.categoryUrl || '#'}
              target="_blank"
              rel="noreferrer"
            >
              {copy.quickViewButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PresentFinder.propTypes = {
  kicker: PropTypes.string,
  heading: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.string),
  ageOptions: PropTypes.arrayOf(PropTypes.object),
  interestOptions: PropTypes.arrayOf(PropTypes.object),
  budgetOptions: PropTypes.arrayOf(PropTypes.object),
  products: PropTypes.arrayOf(PropTypes.object),
  accentColour: PropTypes.string,
  blueColour: PropTypes.string,
  redColour: PropTypes.string,
  greenColour: PropTypes.string,
  yellowColour: PropTypes.string,
  theme: PropTypes.object,
  text: PropTypes.object,
  resultCategory: PropTypes.string,
  resultName: PropTypes.string,
  resultDescription: PropTypes.string,
  resultPrice: PropTypes.string,
  resultWasPrice: PropTypes.string,
  resultImage: PropTypes.string,
  resultImageAlt: PropTypes.string,
  resultBadgeImage: PropTypes.string,
  resultBadgeAlt: PropTypes.string,
  resultPoints: PropTypes.arrayOf(PropTypes.string),
  resultLinks: PropTypes.arrayOf(PropTypes.object),
  resultButtonText: PropTypes.string,
  resultUrl: PropTypes.string,
  quickViewTitle: PropTypes.string,
  quickViewDescription: PropTypes.string,
  quickViewImage: PropTypes.string,
  quickViewButtonText: PropTypes.string,
  askText: PropTypes.string,
  askImage: PropTypes.string,
  onAskClick: PropTypes.func,
  showQuickView: PropTypes.bool,
  resetText: PropTypes.string,
  backText: PropTypes.string,
  skipText: PropTypes.string,
  noResultsHeading: PropTypes.string,
  noResultsText: PropTypes.string,
  noResultsButtonText: PropTypes.string
};

PresentFinder.defaultProps = {
  kicker: 'Present Finder',
  heading: 'Stuck for present ideas?',
  questions: [
    'Who is it for?',
    'What are they into?',
    'What would you like to spend?'
  ],
  ageOptions: DEFAULT_AGES,
  interestOptions: DEFAULT_INTERESTS,
  budgetOptions: DEFAULT_BUDGETS,
  products: DEFAULT_PRODUCTS,
  accentColour: '#0d5d9c',
  blueColour: '#0d5d9c',
  redColour: '#e82416',
  greenColour: '#009e44',
  yellowColour: '#ffd100',
  theme: DEFAULT_THEME,
  text: DEFAULT_TEXT,
  resultCategory: 'Crazy Fun · Squishies',
  resultName: 'Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)',
  resultDescription: '',
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
  resultLinks: DEFAULT_RESULT_LINKS,
  resultButtonText: 'View on TheToyShop.com',
  resultUrl: 'https://www.thetoyshop.com/sensory-toys/squishies/Crazy-Fun-Original-Treasure-Edition-Mystery-Squishy-Dumpling-%28Styles-Vary%29/p/586191',
  quickViewTitle: 'Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)',
  quickViewDescription: 'A surprise squishy dumpling treat. Styles vary.',
  quickViewImage: 'https://nalaber.com/preview/the-entertainer/media/pk-dumpling.webp',
  quickViewButtonText: 'View on TheToyShop.com',
  askText: 'Ask us: “What would you suggest for a 0-3 year old who likes squishies & pocket money for under £10?”',
  askImage: 'https://nalaber.com/preview/the-entertainer/media/jack.webp',
  onAskClick: undefined,
  showQuickView: true,
  resetText: 'Start again',
  backText: 'Back',
  skipText: 'Skip',
  noResultsHeading: 'No exact match found',
  noResultsText: 'Try changing your age, interest or budget to see more present ideas.',
  noResultsButtonText: 'Change interests'
};

export default PresentFinder;