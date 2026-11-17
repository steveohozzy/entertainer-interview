
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_ITEMS = [
  {
    show: '160',
    t: 'The Entertainer stores',
    d: 'Our own stores bring brilliant toys, games and gifts to high streets and shopping centres across the UK. Our story started with our first shop in Amersham in 1981.',
    n: 160,
    image: 'https://nalaber.com/preview/the-entertainer/media/ab-1981.webp',
    pins: true,
  },
  {
    show: '2,719',
    t: 'Tesco stores with our concessions',
    d: 'You can find The Entertainer toys in Tesco stores across the UK, making it even easier to pick up something brilliant on your everyday shop.',
    n: 2719,
    image: 'https://nalaber.com/preview/the-entertainer/media/logo-tesco-moonpig.webp',
  },
  {
    show: '140',
    t: 'Matalan stores',
    d: 'Our partnership with Matalan brings a selection of toys and gifts to even more families, with convenient locations across the country.',
    n: 140,
    image: '',
  },
  {
    show: 'M&S',
    t: 'Early Learning Centre at M&S',
    d: 'Discover Early Learning Centre toys at M&S, with playful products chosen to help little ones learn, explore and develop through play.',
    n: null,
    image: 'https://nalaber.com/preview/the-entertainer/media/logo-elc-ms.webp',
  },
  {
    show: '7,000',
    t: 'Products available online',
    d: 'Explore thousands of toys, games, outdoor favourites and gifts online. There is something brilliant for every age, interest and occasion.',
    n: 7000,
    image: 'https://nalaber.com/preview/the-entertainer/media/hist-1999.webp',
  },
  {
    show: '30',
    t: 'Minutes to Click & Collect',
    d: 'Click & Collect your online order in as little as 30 minutes if your store has it (subject to availability in store), otherwise 3 to 5 working days. It’s free, and you have 10 days to collect.',
    n: 30,
    image: 'https://nalaber.com/preview/the-entertainer/media/usp-cc.webp',
  },
];

const DEFAULT_PINS = [
  { name: 'Aberdeen', x: 67.54, y: 23.74 },
  { name: 'Inverness', x: 55.79, y: 18.99 },
  { name: 'Edinburgh', x: 60.53, y: 34.24 },
  { name: 'Glasgow - St Enoch', x: 51.93, y: 35.68 },
  { name: 'Belfast', x: 35.96, y: 47.48 },
  { name: 'Gateshead - Metro Centre', x: 71.05, y: 43.45 },
  { name: 'Carlisle', x: 60.53, y: 44.89 },
  { name: 'Leeds Trinity', x: 71.93, y: 54.68 },
  { name: 'Hull', x: 81.58, y: 55.83 },
  { name: 'Manchester Arndale', x: 67.54, y: 59.28 },
  { name: 'Liverpool One', x: 62.81, y: 58.99 },
  { name: 'Sheffield Meadowhall', x: 72.28, y: 60.14 },
  { name: 'Nottingham', x: 75.09, y: 64.46 },
  { name: 'Norwich', x: 93.86, y: 67.91 },
  { name: 'Birmingham Bullring', x: 69.30, y: 69.35 },
  { name: 'Cambridge', x: 86.32, y: 71.65 },
  { name: 'Ipswich', x: 94.74, y: 74.53 },
  { name: 'Cardiff', x: 58.42, y: 80.00 },
  { name: 'Bristol Cabot Circus', x: 63.51, y: 80.00 },
  { name: 'Amersham', x: 82.46, y: 77.70, home: true },
  { name: 'White City', x: 87.72, y: 80.00 },
  { name: 'Brighton', x: 85.96, y: 88.06 },
  { name: 'Eastleigh', x: 75.79, y: 86.33 },
  { name: 'Exeter', x: 55.26, y: 90.07 },
  { name: 'Plymouth', x: 49.47, y: 93.53 },
  { name: 'Truro', x: 44.91, y: 95.83 },
];

const LINE_POINTS = [
  { x: 74.8, y: 100.6 },
  { x: 555.9, y: 89.4 },
  { x: 51.7, y: 320.9 },
  { x: 572.9, y: 323.1 },
  { x: 105.6, y: 534.4 },
  { x: 534.5, y: 560.0 },
];

const styles = `
.te-stores-story {
  --ss-blue: #0d5d9c;
  --ss-mid: #407ec9;
  --ss-red: #e82416;
  --ss-green: #009e44;
  --ss-yellow: #ffd100;
  --ss-ink: #19212b;
  --ss-grey: #585858;
  --ss-line: #e5e5e5;
  --ss-fill: 0;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: clamp(44px, 6vw, 84px) clamp(16px, 3vw, 40px) 40px;
  color: var(--ss-ink);
  background: var(--ss-background, #e9f5d8);
  font-family: inherit;
  isolation: isolate;
}
.te-stores-story *,
.te-stores-story *::before,
.te-stores-story *::after { box-sizing: border-box; }
.te-stores-story .ss-inner {
  width: 100%;
  max-width: var(--ss-max-width, 1320px);
  margin: 0 auto;
}
.te-stores-story .ss-grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  align-items: center;
  gap: clamp(28px, 4vw, 64px);
}
.te-stores-story .ss-copy { position: relative; z-index: 2; }
.te-stores-story .ss-heading {
  max-width: 620px;
  margin: 0 0 18px;
  color: var(--ss-text, var(--ss-ink));
  font-size: clamp(34px, 4.3vw, 62px);
  font-weight: 900;
  line-height: .99;
  letter-spacing: -.045em;
}
.te-stores-story .ss-lead {
  max-width: 560px;
  margin: 0 0 30px;
  color: var(--ss-muted, var(--ss-grey));
  font-size: clamp(15px, 1.35vw, 18px);
  line-height: 1.65;
}
.te-stores-story .ss-rows {
  display: grid;
  gap: 9px;
}
.te-stores-story .ss-row {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) auto;
  align-items: center;
  gap: 13px;
  width: 100%;
  min-height: 70px;
  padding: 8px 14px 8px 9px;
  border: 1px solid rgba(13,93,156,.10);
  border-radius: var(--ss-radius, 14px);
  background: rgba(255,255,255,.72);
  color: var(--ss-ink);
  text-align: left;
  cursor: pointer;
  transition: background .22s ease, border-color .22s ease, transform .22s ease, box-shadow .22s ease;
}
.te-stores-story .ss-row:hover,
.te-stores-story .ss-row:focus-visible {
  border-color: var(--ss-accent, var(--ss-blue));
  background: #fff;
  transform: translateX(3px);
  outline: none;
}
.te-stores-story .ss-row[aria-pressed="true"] {
  border-color: var(--ss-accent, var(--ss-blue));
  background: #fff;
  box-shadow: 0 5px 18px rgba(13,93,156,.12);
}
.te-stores-story .ss-thumb {
  display: flex;
  width: 64px;
  height: 52px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 9px;
  background: rgba(255,255,255,.8);
}
.te-stores-story .ss-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.te-stores-story .ss-thumb svg { width: 34px; height: 34px; }
.te-stores-story .ss-row-copy { min-width: 0; }
.te-stores-story .ss-row-number {
  display: block;
  margin-bottom: 2px;
  color: var(--ss-accent, var(--ss-blue));
  font-size: 21px;
  font-weight: 900;
  line-height: 1.1;
}
.te-stores-story .ss-row-title {
  display: block;
  color: var(--ss-ink);
  font-size: 13px;
  font-weight: 750;
  line-height: 1.35;
}
.te-stores-story .ss-row-arrow {
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(13,93,156,.08);
  color: var(--ss-accent, var(--ss-blue));
  font-size: 18px;
  font-weight: 800;
  transition: transform .2s ease, background .2s ease;
}
.te-stores-story .ss-row[aria-pressed="true"] .ss-row-arrow {
  transform: rotate(45deg);
  background: var(--ss-accent, var(--ss-blue));
  color: #fff;
}
.te-stores-story .ss-panel {
  min-height: 132px;
  margin-top: 16px;
  padding: 19px 21px;
  border-radius: var(--ss-radius, 14px);
  background: rgba(255,255,255,.76);
  box-shadow: 0 6px 20px rgba(13,93,156,.07);
}
.te-stores-story .ss-panel-number {
  margin: 0 0 8px;
  color: var(--ss-accent, var(--ss-blue));
  font-size: 21px;
  font-weight: 900;
  line-height: 1.2;
}
.te-stores-story .ss-panel-number span {
  color: var(--ss-ink);
  font-size: 15px;
  font-weight: 800;
}
.te-stores-story .ss-panel-description {
  margin: 0;
  color: var(--ss-grey);
  font-size: 13px;
  line-height: 1.65;
}
.te-stores-story .ss-hint {
  margin: 0;
  color: var(--ss-grey);
  font-size: 14px;
  line-height: 1.6;
}
.te-stores-story .ss-visual {
  position: relative;
  width: 100%;
  max-width: 680px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  transform: translate3d(calc(var(--ss-tx, 0) * 5px), calc(var(--ss-ty, 0) * 5px), 0);
  transition: transform .2s ease-out;
}
.te-stores-story .ss-lines {
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}
.te-stores-story .ss-lines line {
  stroke: var(--ss-line-colour, var(--ss-blue));
  stroke-width: 1.5;
  stroke-dasharray: 5 6;
  opacity: .22;
  transition: stroke .25s ease, opacity .25s ease, stroke-width .25s ease;
}
.te-stores-story[data-active="0"] .ss-lines line[data-line="0"],
.te-stores-story[data-active="1"] .ss-lines line[data-line="1"],
.te-stores-story[data-active="2"] .ss-lines line[data-line="2"],
.te-stores-story[data-active="3"] .ss-lines line[data-line="3"],
.te-stores-story[data-active="4"] .ss-lines line[data-line="4"],
.te-stores-story[data-active="5"] .ss-lines line[data-line="5"] {
  stroke: var(--ss-green);
  stroke-width: 3;
  opacity: .95;
}
.te-stores-story .ss-map {
  position: absolute;
  z-index: 0;
  top: 7%;
  left: 16%;
  width: 68%;
  height: 86%;
  filter: drop-shadow(0 12px 15px rgba(20,50,70,.12));
  transition: transform .7s cubic-bezier(.2,.8,.2,1);
}
.te-stores-story .ss-map img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.te-stores-story .ss-big-number {
  position: absolute;
  z-index: 2;
  top: 42%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  min-height: 20%;
  transform: translate(-50%, -50%);
  color: var(--ss-big-text, var(--ss-blue));
  font-size: clamp(43px, 6.5vw, 88px);
  font-weight: 1000;
  line-height: .9;
  letter-spacing: -.06em;
  white-space: nowrap;
  pointer-events: none;
  text-shadow: 0 2px 0 rgba(255,255,255,.3);
}
.te-stores-story .ss-big-number span {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.te-stores-story .ss-big-number .ss-big-fill {
  color: var(--ss-fill-colour, var(--ss-green));
  clip-path: inset(calc((1 - var(--ss-fill)) * 100%) 0 0 0);
}
.te-stores-story .ss-pin {
  position: absolute;
  z-index: 2;
  left: var(--pin-x);
  top: var(--pin-y);
  width: 10px;
  height: 10px;
  padding: 0;
  border: 2px solid #fff;
  border-radius: 50% 50% 50% 0;
  background: var(--ss-pin-colour, var(--ss-red));
  box-shadow: 0 2px 5px rgba(0,0,0,.2);
  opacity: 0;
  transform: translate(-50%, -50%) rotate(-45deg) scale(.3);
  transition: opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);
}
.te-stores-story.ss-show-pins .ss-pin,
.te-stores-story[data-active="0"] .ss-pin {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(-45deg) scale(1);
}
.te-stores-story .ss-pin.ss-home {
  width: 15px;
  height: 15px;
  background: var(--ss-green);
}
.te-stores-story .ss-map-caption {
  position: absolute;
  z-index: 3;
  right: 4%;
  bottom: 2%;
  max-width: 58%;
  padding: 9px 15px;
  border-radius: 30px;
  background: var(--ss-caption-background, var(--ss-blue));
  color: var(--ss-caption-text, #fff);
  font-size: 12px;
  font-weight: 850;
  line-height: 1.3;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,.12);
}
.te-stores-story .ss-disc {
  position: absolute;
  z-index: 4;
  display: flex;
  width: clamp(86px, 12vw, 126px);
  aspect-ratio: 1 / 1;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border: 0;
  border-radius: 50%;
  background: var(--ss-disc-background, #fff);
  box-shadow: 0 6px 20px rgba(13,93,156,.16);
  cursor: pointer;
  transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease, background .25s ease;
}
.te-stores-story .ss-disc:hover,
.te-stores-story .ss-disc:focus-visible {
  z-index: 5;
  transform: scale(1.09);
  outline: 3px solid var(--ss-accent, var(--ss-blue));
  outline-offset: 3px;
}
.te-stores-story .ss-disc[aria-pressed="true"] {
  background: var(--ss-accent, var(--ss-blue));
  box-shadow: 0 8px 24px rgba(13,93,156,.28);
  transform: scale(1.08);
}
.te-stores-story .ss-disc-inner {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid rgba(13,93,156,.12);
  border-radius: 50%;
  background: rgba(255,255,255,.94);
  overflow: hidden;
}
.te-stores-story .ss-disc[aria-pressed="true"] .ss-disc-inner {
  border-color: rgba(255,255,255,.55);
}
.te-stores-story .ss-disc-image {
  display: flex;
  width: 62%;
  height: 42%;
  align-items: center;
  justify-content: center;
}
.te-stores-story .ss-disc-image img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.te-stores-story .ss-disc-image svg { width: 35px; height: 35px; }
.te-stores-story .ss-disc-label {
  max-width: 90%;
  overflow: hidden;
  color: var(--ss-blue);
  font-size: clamp(10px, 1.15vw, 14px);
  font-weight: 950;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.te-stores-story .ss-disc[aria-pressed="true"] .ss-disc-label { color: var(--ss-blue); }
.te-stores-story .ss-disc--0 { top: 4%; left: 1%; }
.te-stores-story .ss-disc--1 { top: 2%; right: 1%; }
.te-stores-story .ss-disc--2 { top: 43%; left: 0; }
.te-stores-story .ss-disc--3 { top: 43%; right: 0; }
.te-stores-story .ss-disc--4 { bottom: 2%; left: 7%; }
.te-stores-story .ss-disc--5 { right: 5%; bottom: 0; }
@media (max-width: 1023px) {
  .te-stores-story .ss-grid { grid-template-columns: 1fr; gap: 28px; }
  .te-stores-story .ss-copy { max-width: 760px; margin: 0 auto; }
  .te-stores-story .ss-visual { width: min(100%, 650px); }
  .te-stores-story .ss-heading { max-width: 760px; }
}
@media (max-width: 600px) {
  .te-stores-story { padding: 38px 14px 30px; }
  .te-stores-story .ss-grid { gap: 22px; }
  .te-stores-story .ss-heading { font-size: clamp(34px, 10vw, 46px); }
  .te-stores-story .ss-lead { margin-bottom: 22px; font-size: 15px; }
  .te-stores-story .ss-row { grid-template-columns: 52px minmax(0,1fr) 24px; gap: 10px; min-height: 64px; padding: 7px 10px 7px 7px; }
  .te-stores-story .ss-thumb { width: 52px; height: 48px; }
  .te-stores-story .ss-row-number { font-size: 19px; }
  .te-stores-story .ss-row-title { font-size: 12px; }
  .te-stores-story .ss-panel { min-height: 0; padding: 16px; }
  .te-stores-story .ss-visual { width: 100%; }
  .te-stores-story .ss-disc { width: clamp(70px, 21vw, 92px); padding: 5px; }
  .te-stores-story .ss-disc-label { font-size: 10px; }
  .te-stores-story .ss-disc-image { height: 39%; }
  .te-stores-story .ss-map-caption { right: 3%; bottom: 0; max-width: 62%; padding: 7px 10px; font-size: 10px; }
  .te-stores-story .ss-big-number { font-size: clamp(38px, 11vw, 64px); }
}
@media (prefers-reduced-motion: reduce) {
  .te-stores-story *,
  .te-stores-story *::before,
  .te-stores-story *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
    scroll-behavior: auto !important;
  }
  .te-stores-story .ss-pin { opacity: 1 !important; transform: translate(-50%, -50%) rotate(-45deg) !important; }
  .te-stores-story .ss-big-fill { clip-path: none !important; }
}
`;

function MatalanIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 20 24 7l17 13v21H7z" fill="none" stroke="#0d5d9c" strokeWidth="3" strokeLinejoin="round" />
      <path d="M18 41V27h12v14M13 20h22" fill="none" stroke="#0d5d9c" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ItemImage({ item }) {
  if (item.image) {
    return <img src={item.image} alt="" />;
  }
  return <MatalanIcon />;
}

function formatNumber(value) {
  return Number(value).toLocaleString('en-GB');
}

export default function StoresStory({
  heading = "The UK's largest chain of Toy Shops",
  lead = "From one shop in Amersham in 1981 to toy aisles in thousands of stores. Choose a number to see where you'll find us.",
  items = DEFAULT_ITEMS,
  pins = DEFAULT_PINS,
  mapImage = 'https://nalaber.com/preview/the-entertainer/media/map-big.webp',
  defaultCaption = '1,000+ locations in the UK!',
  initialActive = 5,
  backgroundColor = '#e9f5d8',
  textColor = '#19212b',
  mutedTextColor = '#585858',
  accentColor = '#0d5d9c',
  lineColor = '#0d5d9c',
  fillColor = '#009e44',
  pinColor = '#e82416',
  captionBackground = '#0d5d9c',
  captionTextColor = '#ffffff',
  showMap = true,
  showPins = true,
  animateNumbers = true,
  enableParallax = true,
  maxWidth = '1320px',
  borderRadius = 14,
}) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : DEFAULT_ITEMS), [items]);
  const [active, setActive] = useState(
    initialActive >= 0 && initialActive < safeItems.length ? initialActive : -1
  );
  const [displayNumber, setDisplayNumber] = useState(
    safeItems[initialActive] ? safeItems[initialActive].show : '1,000+'
  );
  const [fill, setFill] = useState(1);
  const visualRef = useRef(null);
  const animationRef = useRef(null);
  const pointerFrame = useRef(null);

  const selectedItem = active >= 0 ? safeItems[active] : null;

  useEffect(() => {
    if (!selectedItem) {
      setDisplayNumber('1,000+');
      setFill(0);
      return undefined;
    }

    const target = selectedItem.n;
    const label = selectedItem.show;

    if (!animateNumbers || target === null || target === undefined || !Number.isFinite(Number(target))) {
      setDisplayNumber(label);
      setFill(1);
      return undefined;
    }

    const end = Number(target);
    const startTime = performance.now();
    const duration = 900;
    let frame;

    setFill(0);

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(end * eased);

      setDisplayNumber(formatNumber(value));
      setFill(eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplayNumber(label);
        setFill(1);
      }
    };

    frame = requestAnimationFrame(tick);
    animationRef.current = frame;

    return () => cancelAnimationFrame(frame);
  }, [active, selectedItem, animateNumbers]);

  useEffect(() => {
    if (!enableParallax) return undefined;

    const visual = visualRef.current;
    if (!visual) return undefined;

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return;
      const rect = visual.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

      if (pointerFrame.current) cancelAnimationFrame(pointerFrame.current);
      pointerFrame.current = requestAnimationFrame(() => {
        visual.style.setProperty('--ss-tx', Math.max(-1, Math.min(1, x)).toFixed(3));
        visual.style.setProperty('--ss-ty', Math.max(-1, Math.min(1, y)).toFixed(3));
      });
    };

    const onLeave = () => {
      visual.style.setProperty('--ss-tx', '0');
      visual.style.setProperty('--ss-ty', '0');
    };

    visual.addEventListener('pointermove', onMove);
    visual.addEventListener('pointerleave', onLeave);

    return () => {
      visual.removeEventListener('pointermove', onMove);
      visual.removeEventListener('pointerleave', onLeave);
      if (pointerFrame.current) cancelAnimationFrame(pointerFrame.current);
    };
  }, [enableParallax]);

  useEffect(() => () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  }, []);

  const selectItem = (index) => {
    setActive((current) => (current === index ? -1 : index));
  };

  const cssVars = {
    '--ss-background': backgroundColor,
    '--ss-text': textColor,
    '--ss-muted': mutedTextColor,
    '--ss-ink': textColor,
    '--ss-accent': accentColor,
    '--ss-line-colour': lineColor,
    '--ss-fill-colour': fillColor,
    '--ss-pin-colour': pinColor,
    '--ss-caption-background': captionBackground,
    '--ss-caption-text': captionTextColor,
    '--ss-max-width': maxWidth,
    '--ss-radius': `${borderRadius}px`,
    '--ss-fill': fill,
  };

  return (
    <section
      className={`te-stores-story${showPins && active === 0 ? ' ss-show-pins' : ''}`}
      style={cssVars}
      data-active={active}
      aria-label="The Entertainer stores and locations"
    >
      <style>{styles}</style>

      <div className="ss-inner">
        <div className="ss-grid">
          <div className="ss-copy">
            <h2 className="ss-heading">{heading}</h2>
            <p className="ss-lead">{lead}</p>

            <div className="ss-rows" aria-label="Store and service facts">
              {safeItems.map((item, index) => (
                <button
                  className="ss-row"
                  type="button"
                  key={`${item.t}-${index}`}
                  aria-pressed={active === index}
                  onClick={() => selectItem(index)}
                >
                  <span className="ss-thumb">
                    <ItemImage item={item} />
                  </span>
                  <span className="ss-row-copy">
                    <span className="ss-row-number">{item.show}</span>
                    <span className="ss-row-title">{item.t}</span>
                  </span>
                  <span className="ss-row-arrow" aria-hidden="true">+</span>
                </button>
              ))}
            </div>

            <div className="ss-panel" aria-live="polite" aria-atomic="true">
              {selectedItem ? (
                <>
                  <p className="ss-panel-number">
                    {selectedItem.show} <span>{selectedItem.t}</span>
                  </p>
                  <p className="ss-panel-description">{selectedItem.d}</p>
                  {selectedItem.pins && (
                    <p className="ss-panel-description" style={{ marginTop: 8 }}>
                      Pins show a few of the stores on our events page, including the first, in Amersham.
                    </p>
                  )}
                </>
              ) : (
                <p className="ss-hint">Tap a number to see how The Entertainer describes it.</p>
              )}
            </div>
          </div>

          <div
            className="ss-visual"
            ref={visualRef}
            onPointerLeave={() => {
              if (visualRef.current) {
                visualRef.current.style.setProperty('--ss-tx', '0');
                visualRef.current.style.setProperty('--ss-ty', '0');
              }
            }}
          >
            {showMap && (
              <>
                <svg className="ss-lines" viewBox="0 0 640 640" preserveAspectRatio="none" aria-hidden="true">
                  {LINE_POINTS.slice(0, safeItems.length).map((point, index) => (
                    <line
                      key={index}
                      data-line={index}
                      x1="346.3"
                      y1="300.8"
                      x2={point.x}
                      y2={point.y}
                    />
                  ))}
                </svg>

                <div className="ss-map">
                  <img src={mapImage} alt="Map of the UK and Ireland" />
                  {showPins && pins.map((pin, index) => (
                    <span
                      className={`ss-pin${pin.home ? ' ss-home' : ''}`}
                      key={`${pin.name}-${index}`}
                      style={{
                        '--pin-x': `${pin.x}%`,
                        '--pin-y': `${pin.y}%`,
                      }}
                      title={pin.name}
                      aria-label={pin.name}
                    />
                  ))}
                </div>

                <div className="ss-big-number" aria-live="off">
                  <span>{displayNumber}</span>
                  <span className="ss-big-fill" style={{ '--ss-fill': fill }}>{displayNumber}</span>
                </div>
                <div className="ss-map-caption">
                  {selectedItem ? `${selectedItem.show} ${selectedItem.t}` : defaultCaption}
                </div>
              </>
            )}

            {safeItems.map((item, index) => (
              <button
                type="button"
                className={`ss-disc ss-disc--${index}`}
                key={`disc-${item.t}-${index}`}
                aria-label={`${item.show} ${item.t}`}
                aria-pressed={active === index}
                onClick={() => selectItem(index)}
              >
                <span className="ss-disc-inner">
                  <span className="ss-disc-image"><ItemImage item={item} /></span>
                  <span className="ss-disc-label">{item.show}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

StoresStory.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    show: PropTypes.string.isRequired,
    t: PropTypes.string.isRequired,
    d: PropTypes.string,
    n: PropTypes.number,
    image: PropTypes.string,
    pins: PropTypes.bool,
  })),
  pins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    home: PropTypes.bool,
  })),
  mapImage: PropTypes.string,
  defaultCaption: PropTypes.string,
  initialActive: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  mutedTextColor: PropTypes.string,
  accentColor: PropTypes.string,
  lineColor: PropTypes.string,
  fillColor: PropTypes.string,
  pinColor: PropTypes.string,
  captionBackground: PropTypes.string,
  captionTextColor: PropTypes.string,
  showMap: PropTypes.bool,
  showPins: PropTypes.bool,
  animateNumbers: PropTypes.bool,
  enableParallax: PropTypes.bool,
  maxWidth: PropTypes.string,
  borderRadius: PropTypes.number,
};

export { DEFAULT_ITEMS as defaultStoresStoryItems, DEFAULT_PINS as defaultStoresStoryPins };
