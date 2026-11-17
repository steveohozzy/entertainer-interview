import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4z" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

const getProducts = (props) => {
  return [1, 2, 3, 4, 5, 6].map((number) => {
    const prefix = `product${number}`;
    return {
      id: props[`${prefix}id`],
      enabled: props[`${prefix}enabled`],
      name: props[`${prefix}name`],
      category: props[`${prefix}category`],
      price: props[`${prefix}price`],
      was: props[`${prefix}was`],
      age: props[`${prefix}age`],
      productType: props[`${prefix}productType`],
      spotImage: props[`${prefix}spotImage`],
      quickViewImage: props[`${prefix}quickViewImage`],
      imageAlt: props[`${prefix}imageAlt`],
      imageBackground: props[`${prefix}imageBackground`],
      spotSummary: props[`${prefix}spotSummary`],
      spotDetail: props[`${prefix}spotDetail`],
      productUrl: props[`${prefix}productUrl`],
      categoryUrl: props[`${prefix}categoryUrl`],
      categoryLinkText: props[`${prefix}categoryLinkText`],
      position: {
        left: props[`${prefix}left`],
        right: props[`${prefix}right`],
        top: props[`${prefix}top`],
        bottom: props[`${prefix}bottom`],
        width: props[`${prefix}width`],
        rotation: props[`${prefix}rotation`],
      },
    };
  }).filter((product) => product.enabled && product.id && product.name);
};

export const TheEntertainerHero = (props) => {
  const {
    proofImage,
    proofImageAlt,
    proofYear,
    proofStores,
    proofProducts,
    headingPrefix,
    headingWords,
    subheading,
    primaryButtonText,
    primaryButtonUrl,
    secondaryButtonText,
    secondaryButtonUrl,
    askText,
    askUrl,
    stageLabel,
    showSaleSticker,
    saleStickerTop,
    saleStickerMain,
    saleStickerBottom,
    saleStickerUrl,
    stageHint,
    backgroundColor,
    heroBackground,
    delivery1Icon,
    delivery1Title,
    delivery1Description,
    delivery2Icon,
    delivery2Title,
    delivery2Description,
    delivery3Icon,
    delivery3Title,
    delivery3Description,
    priceNote,
    ...productProps
  } = props;

  const products = getProducts(productProps);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef(null);
  const lastFocusRef = useRef(null);
  const panelRef = useRef(null);
  const wordList = (headingWords || '').split('|').map((word) => word.trim()).filter(Boolean);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordList.length < 2) return undefined;
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % wordList.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, [headingWords]);

  useEffect(() => {
    if (!activeProduct) return undefined;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      if (closeButtonRef.current) closeButtonRef.current.focus();
      setIsVisible(true);
    }, 30);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeQuickView();
      }

      if (event.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [activeProduct]);

  const openQuickView = (product, event) => {
    lastFocusRef.current = event.currentTarget;
    setIsVisible(false);
    setActiveProduct(product);
  };

  const closeQuickView = () => {
    setIsVisible(false);
    setActiveProduct(null);
    window.setTimeout(() => {
      if (lastFocusRef.current && lastFocusRef.current.focus) {
        lastFocusRef.current.focus({ preventScroll: true });
      }
    }, 0);
  };

  const deliveryItems = [
    { icon: delivery1Icon, title: delivery1Title, description: delivery1Description },
    { icon: delivery2Icon, title: delivery2Title, description: delivery2Description },
    { icon: delivery3Icon, title: delivery3Title, description: delivery3Description },
  ].filter((item) => item.title || item.description);

  const activeWord = wordList.length ? wordList[wordIndex % wordList.length] : '';

  return (
    <section
      className="te-hero"
      style={{ '--te-hero-bg': heroBackground || '#dbe3ff', '--te-page-bg': props.backgroundColor || '#dbe3ff', '--te-card-bg': props.cardBackgroundColor || '#ffffff', '--te-card-shadow': props.cardShadowColor || 'rgba(13,93,156,.45)', '--te-info-start': props.infoBackgroundStartColor || '#e82416', '--te-info-end': props.infoBackgroundEndColor || '#b70000', '--te-info-text': props.infoTextColor || '#ffffff', '--te-proof-bg': props.proofBackgroundColor || 'rgba(0,0,0,.16)', '--te-proof-text': props.proofTextColor || '#ffffff', '--te-proof-highlight': props.proofHighlightColor || '#ffd100', '--te-proof-separator': props.proofSeparatorColor || '#ffd100', '--te-heading': props.headingColor || '#ffffff', '--te-heading-word': props.headingWordColor || '#ffd100', '--te-subheading': props.subheadingColor || '#ffffff', '--te-primary-bg': props.primaryButtonBackgroundColor || '#009e44', '--te-primary-text': props.primaryButtonTextColor || '#ffffff', '--te-primary-hover': props.primaryButtonHoverColor || '#0b8a3b', '--te-secondary-bg': props.secondaryButtonBackgroundColor || 'transparent', '--te-secondary-text': props.secondaryButtonTextColor || '#ffffff', '--te-secondary-border': props.secondaryButtonBorderColor || 'rgba(255,255,255,.75)', '--te-secondary-hover': props.secondaryButtonHoverColor || 'rgba(255,255,255,.12)', '--te-ask-link': props.askLinkColor || '#ffffff', '--te-ask-hover': props.askLinkHoverColor || '#ffd100', '--te-stage-start': props.stageBackgroundStartColor || '#ffffff', '--te-stage-middle': heroBackground || '#f0f3ff', '--te-stage-end': props.stageBackgroundEndColor || '#dbe3ff', '--te-stage-decoration-1': props.stageDecoration1Color || 'rgba(64,126,201,.08)', '--te-stage-decoration-2': props.stageDecoration2Color || 'rgba(232,36,22,.06)', '--te-stage-decoration-3': props.stageDecoration3Color || 'rgba(255,209,0,.12)', '--te-product-label-bg': props.productLabelBackgroundColor || '#ffffff', '--te-product-name': props.productLabelNameColor || '#0d5d9c', '--te-product-price': props.productLabelPriceColor || '#e82416', '--te-product-was': props.productLabelWasColor || '#777777', '--te-product-detail': props.productLabelDetailColor || '#585858', '--te-product-link': props.productLabelLinkColor || '#009e44', '--te-sale-bg': props.saleStickerBackgroundColor || '#ffd100', '--te-sale-top': props.saleStickerTopColor || '#b70000', '--te-sale-main': props.saleStickerMainColor || '#b70000', '--te-sale-bottom': props.saleStickerBottomColor || '#b70000', '--te-hint-bg': props.stageHintBackgroundColor || 'rgba(255,255,255,.82)', '--te-hint-text': props.stageHintTextColor || '#0d5d9c', '--te-hint-indicator': props.stageHintIndicatorColor || '#009e44', '--te-qv-overlay': props.quickViewOverlayColor || 'rgba(13,33,60,.55)', '--te-qv-bg': props.quickViewBackgroundColor || '#ffffff', '--te-qv-header-bg': props.quickViewHeaderBackgroundColor || '#0d5d9c', '--te-qv-header-text': props.quickViewHeaderTextColor || '#ffffff', '--te-qv-close-bg': props.quickViewCloseBackgroundColor || 'rgba(255,255,255,.15)', '--te-qv-close-text': props.quickViewCloseTextColor || '#ffffff', '--te-qv-category': props.quickViewCategoryColor || '#585858', '--te-qv-title': props.quickViewTitleColor || '#0d5d9c', '--te-qv-price': props.quickViewPriceColor || '#e82416', '--te-qv-was': props.quickViewWasColor || '#8a8a8a', '--te-qv-meta-bg': props.quickViewMetaBackgroundColor || '#eef2ff', '--te-qv-meta-text': props.quickViewMetaTextColor || '#0d5d9c', '--te-delivery-title': props.deliveryTitleColor || '#0d5d9c', '--te-delivery-description': props.deliveryDescriptionColor || '#585858', '--te-qv-primary-bg': props.quickViewPrimaryButtonBackgroundColor || '#009e44', '--te-qv-primary-text': props.quickViewPrimaryButtonTextColor || '#ffffff', '--te-qv-secondary-bg': props.quickViewSecondaryButtonBackgroundColor || '#ffffff', '--te-qv-secondary-text': props.quickViewSecondaryButtonTextColor || '#0d5d9c', '--te-qv-secondary-border': props.quickViewSecondaryButtonBorderColor || '#d9e2ef', '--te-price-note': props.priceNoteColor || '#777777', '--te-focus': props.focusOutlineColor || '#ffd100' }}
      aria-label="The Entertainer homepage hero"
    >
      <style>{`
.te-hero {
  --blue: #0d5d9c;
  --red: #e82416;
  --red2: #b70000;
  --green: #009e44;
  --yellow: #ffd100;
  --lav: #dbe3ff;
  --lav2: #eef2ff;
  --ink: #19212b;
  --grey: #585858;
  --ease: cubic-bezier(.2,.8,.2,1);
  padding: 22px 0 10px;
  position: relative;
  z-index: 1;
  background: var(--te-page-bg, #dbe3ff);
  color: var(--ink);
  font-family: Nunito, Arial, sans-serif;
}
.te-hero *, .te-hero *::before, .te-hero *::after { box-sizing: border-box; }
.te-hero .te-wrap { max-width: 1320px; margin: 0 auto; padding: 0 clamp(16px,3vw,40px); }
.te-hero img { max-width: 100%; display: block; }
.te-hero a { text-decoration: none; }
.te-hero button { font: inherit; }
.te-hero :focus-visible { outline: 3px solid var(--te-focus, var(--yellow)); outline-offset: 3px; }
.te-hero-card {
  display: grid;
  grid-template-columns: minmax(0,46fr) minmax(0,54fr);
  border-radius: 20px;
  box-shadow: 0 24px 50px -24px var(--te-card-shadow, rgba(13,93,156,.45));
  background: var(--te-card-bg, #fff);
  min-height: 560px;
  overflow: hidden;
}
.te-hero-info {
  background: linear-gradient(160deg,var(--te-info-start, var(--red)) 0%,var(--te-info-end, var(--red2)) 100%);
  color: var(--te-info-text, #fff);
  padding: clamp(28px,4vw,56px) clamp(22px,3.4vw,52px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}
.te-proof {
  color: var(--te-proof-text, inherit);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  font-size: 14px;
  font-weight: 800;
  background: var(--te-proof-bg, rgba(0,0,0,.16));
  border-radius: 999px;
  padding: 6px 14px 6px 6px;
  line-height: 1.25;
  flex-wrap: wrap;
}
.te-proof img { width: 30px; height: 30px; object-fit: contain; background: #fff; border-radius: 50%; padding: 3px; }
.te-proof i { width: 4px; height: 4px; border-radius: 50%; background: var(--te-proof-separator, var(--yellow)); }
.te-proof b { color: var(--te-proof-highlight, var(--yellow)); font-weight: 900; }
.te-hero h1 { font-size: clamp(34px,4.2vw,62px); line-height: 1.02; font-weight: 900; color: var(--te-heading, inherit); margin: 20px 0 14px; letter-spacing: -.01em; text-wrap: balance; }
.te-flip { display: inline-block; position: relative; vertical-align: bottom; white-space: nowrap; perspective: 600px; }
.te-fw { display: inline-block; color: var(--te-heading-word, var(--yellow)); animation: teHeroWord .35s ease both; }
@keyframes teHeroWord { from { opacity: 0; transform: translateY(9px) rotateX(-20deg); } to { opacity: 1; transform: none; } }
.te-hero p.te-sub { font-size: clamp(15px,1.25vw,18px); font-weight: 600; max-width: 46ch; opacity: .96; color: var(--te-subheading, inherit); line-height: 1.5; }
.te-hero-cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
.te-pill { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 48px; padding: 0 22px; border-radius: 999px; font-weight: 800; font-size: 15px; border: 0; cursor: pointer; transition: transform .2s,box-shadow .2s,background .2s; position: relative; font-family: inherit; white-space: normal; text-align: center; }
.te-pill svg { width: 20px; height: 16px; flex: none; }
.te-pill-green { background: var(--te-primary-bg, var(--green)); color: var(--te-primary-text, #fff); box-shadow: 0 10px 20px -10px rgba(0,0,0,.4); }
.te-pill-green:hover { background: var(--te-primary-hover, #0b8a3b); transform: translateY(-2px); }
.te-pill-ghost { background: var(--te-secondary-bg, transparent); color: var(--te-secondary-text, #fff); box-shadow: inset 0 0 0 2px var(--te-secondary-border, rgba(255,255,255,.75)); }
.te-pill-ghost:hover { background: var(--te-secondary-hover, rgba(255,255,255,.12)); transform: translateY(-2px); }
.te-pill-outline { background: #fff; color: var(--te-qv-secondary-text, var(--blue)); box-shadow: inset 0 0 0 2px var(--te-qv-secondary-border, #d9e2ef); background: var(--te-qv-secondary-bg, #fff); }
.te-pill-outline:hover { background: var(--te-qv-secondary-bg, var(--lav2)); }
.te-hero-ask { margin-top: 18px; }
 .te-hero-ask a { color: var(--te-ask-link, #fff); font-weight: 800; font-size: 14px; display: inline-flex; align-items: center; gap: 6px; text-decoration: underline; text-underline-offset: 3px; }
.te-hero-ask svg, .te-spot-go svg { width: 14px; height: 14px; transition: transform .2s; }
.te-hero-ask a:hover { color: var(--te-ask-hover, var(--yellow)); }
.te-hero-ask a:hover svg { transform: translateX(3px); }
.te-hero-stage { min-height: 560px; position: relative; overflow: hidden; isolation: isolate; background: radial-gradient(circle at 50% 45%,var(--te-stage-start, #fff) 0%,var(--te-stage-middle, #f0f3ff) 62%,var(--te-stage-end, #dbe3ff) 100%); }
.te-stage-bg { position: absolute; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; }
.te-stage-bg i { position: absolute; display: block; border-radius: 50%; background: var(--te-stage-decoration-1, rgba(64,126,201,.08)); }
.te-stage-bg i:nth-child(1) { width: 340px; height: 340px; left: -90px; top: -130px; }
.te-stage-bg i:nth-child(2) { width: 260px; height: 260px; right: -80px; bottom: -90px; background: var(--te-stage-decoration-2, rgba(232,36,22,.06)); }
.te-stage-bg i:nth-child(3) { width: 180px; height: 180px; left: 44%; bottom: 8%; background: var(--te-stage-decoration-3, rgba(255,209,0,.12)); }
.te-spot { position: absolute; display: block; width: var(--w,22%); padding: 0; border: 0; background: transparent; cursor: pointer; transform: rotate(var(--rot,0deg)); transform-origin: center; transition: transform .25s var(--ease),filter .25s; z-index: 1; }
.te-spot:hover, .te-spot:focus-visible { transform: rotate(0) scale(1.045); z-index: 4; filter: drop-shadow(0 15px 16px rgba(13,33,60,.18)); }
.te-spot > img { width: 100%; height: auto; max-height: 390px; object-fit: contain; filter: drop-shadow(0 12px 14px rgba(13,33,60,.12)); }
.te-spot-label { display: block; position: absolute; left: 50%; bottom: 8px; transform: translate(-50%,100%); min-width: 150px; max-width: 230px; background: var(--te-product-label-bg, #fff); color: var(--te-product-name, var(--blue)); border-radius: 12px; box-shadow: 0 8px 24px rgba(13,33,60,.18); padding: 9px 12px; font-size: 12px; line-height: 1.25; font-weight: 800; opacity: 0; pointer-events: none; transition: opacity .2s,transform .2s; text-align: left; }
.te-spot:hover .te-spot-label, .te-spot:focus-visible .te-spot-label { opacity: 1; transform: translate(-50%,calc(100% + 4px)); }
.te-spot-label em { display: block; color: var(--te-product-price, var(--red)); font-style: normal; font-size: 14px; margin-top: 3px; }
.te-spot-label s { color: var(--te-product-was, #777); font-size: 11px; margin-left: 5px; }
.te-spot-label small { display: block; color: var(--te-product-detail, var(--grey)); margin-top: 3px; }
.te-spot-go { display: flex; align-items: center; gap: 5px; margin-top: 6px; color: var(--te-product-link, var(--green)); }
.te-hsticker { position: absolute; top: 38%; right: 3%; width: 112px; height: 112px; display: grid; place-items: center; border-radius: 50%; background: var(--te-sale-bg, var(--yellow)); color: var(--te-sale-main, var(--red)); text-align: center; transform: rotate(9deg); box-shadow: 0 10px 22px rgba(13,33,60,.18); z-index: 3; }
.te-hsticker span { display: flex; flex-direction: column; line-height: 1.05; }
.te-hsticker small { color: var(--te-sale-top, inherit); font-size: 12px; font-weight: 800; }
.te-hsticker b { color: var(--te-sale-main, inherit); font-size: 20px; font-weight: 900; }
.te-hsticker em { color: var(--te-sale-bottom, inherit); font-size: 12px; font-weight: 900; font-style: normal; text-transform: uppercase; }
.te-stage-hint { position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%); display: flex; align-items: center; gap: 8px; color: var(--te-hint-text, var(--blue)); background: var(--te-hint-bg, rgba(255,255,255,.82)); border-radius: 999px; padding: 7px 13px; font-size: 12px; font-weight: 800; white-space: nowrap; }
.te-stage-hint i { width: 7px; height: 7px; border-radius: 50%; background: var(--te-hint-indicator, var(--green)); }
.te-qv { position: fixed; inset: 0; z-index: 9999; }
.te-qv-bg { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; padding: 0; background: var(--te-qv-overlay, rgba(13,33,60,.55)); opacity: 0; transition: opacity .3s; cursor: default; }
.te-qv.is-in .te-qv-bg { opacity: 1; }
.te-qv-panel { position: absolute; top: 0; right: 0; bottom: 0; width: min(480px,100%); background: var(--te-qv-bg, #fff); box-shadow: -20px 0 60px rgba(0,0,0,.25); transform: translateX(100%); transition: transform .4s var(--ease); display: flex; flex-direction: column; overflow: auto; overscroll-behavior: contain; }
.te-qv.is-in .te-qv-panel { transform: none; }
.te-qv-head { display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; background: var(--te-qv-header-bg, var(--blue)); color: var(--te-qv-header-text, #fff); position: sticky; top: 0; z-index: 2; flex: none; }
.te-qv-head b { font-weight: 800; font-size: 14px; }
.te-qv-x { width: 40px; height: 40px; border-radius: 50%; border: 0; background: var(--te-qv-close-bg, rgba(255,255,255,.15)); color: var(--te-qv-close-text, #fff); cursor: pointer; display: grid; place-items: center; }
.te-qv-x svg { width: 18px; height: 18px; }
.te-qv-img { --t: #eef2ff; background: radial-gradient(circle at 50% 45%,#fff 0,var(--t) 75%); padding: 28px; display: grid; place-items: center; position: relative; min-height: 300px; flex: none; }
.te-qv-img img { max-height: 280px; width: auto; max-width: 100%; object-fit: contain; }
.te-qv-body { padding: 22px 24px 30px; display: flex; flex-direction: column; gap: 14px; }
.te-qv-cat { color: var(--te-qv-category, var(--grey)); font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; }
.te-qv-body h3 { color: var(--te-qv-title, var(--blue)); font-weight: 900; font-size: 22px; line-height: 1.2; margin: 0; }
.te-qv-price { display: flex; align-items: baseline; gap: 10px; color: var(--te-qv-price, var(--red)); font-weight: 900; font-size: 28px; flex-wrap: wrap; margin: 0; }
.te-qv-price s { color: var(--te-qv-was, #8a8a8a); font-size: 16px; font-weight: 700; }
.te-qv-meta { display: flex; flex-wrap: wrap; gap: 8px; }
.te-qv-meta span { font-size: 13px; font-weight: 800; color: var(--blue); background: var(--te-qv-secondary-bg, var(--lav2)); border-radius: 999px; padding: 6px 12px; }
.te-qv-del { display: grid; gap: 12px; list-style: none; margin: 0; padding: 0; }
.te-qv-del li { display: flex; align-items: center; gap: 12px; color: var(--te-delivery-title, var(--blue)); font-size: 13px; font-weight: 800; }
.te-qv-del img { width: 42px; height: 42px; object-fit: contain; flex: none; }
.te-qv-del small { display: block; color: var(--te-delivery-description, var(--grey)); font-size: 11px; font-weight: 600; line-height: 1.35; margin-top: 2px; }
.te-qv-actions { display: flex; flex-direction: column; align-items: stretch; gap: 9px; }
.te-qv-actions .te-pill { width: 100%; }
.te-qv-actions .te-pill-green { background: var(--te-qv-primary-bg, var(--te-primary-bg, var(--green))); color: var(--te-qv-primary-text, #fff); }
.te-qv-actions .te-pill-outline { background: var(--te-qv-secondary-bg, #fff); color: var(--te-qv-secondary-text, var(--blue)); box-shadow: inset 0 0 0 2px var(--te-qv-secondary-border, #d9e2ef); }
.te-qv-note { color: var(--te-price-note, #777); font-size: 11px; line-height: 1.4; margin: 0; }
@media (max-width: 900px) {
  .te-hero-card { grid-template-columns: 1fr; }
  .te-hero-info { border-radius: 20px 20px 0 0; }
  .te-hero-stage { min-height: 500px; }
  .te-spot > img { max-height: 340px; }
}
@media (max-width: 600px) {
  .te-hero { padding-top: 12px; }
  .te-hero .te-wrap { padding: 0 12px; }
  .te-hero-card { border-radius: 15px; }
  .te-hero-info { padding: 28px 20px; }
  .te-proof { font-size: 11px; gap: 5px; }
  .te-proof img { width: 25px; height: 25px; }
  .te-hero h1 { font-size: clamp(34px,10vw,48px); }
  .te-hero-cta { gap: 9px; }
  .te-pill { min-height: 44px; padding: 0 16px; font-size: 14px; }
  .te-hero-stage { min-height: 390px; }
  .te-spot-label { display: none; }
  .te-hsticker { width: 82px; height: 82px; top: 40%; right: 2%; }
  .te-hsticker b { font-size: 15px; }
  .te-hsticker small, .te-hsticker em { font-size: 10px; }
  .te-stage-hint { bottom: 10px; font-size: 10px; }
  .te-qv-panel { width: 100%; }
  .te-qv-img { min-height: 230px; padding: 20px; }
  .te-qv-img img { max-height: 210px; }
  .te-qv-body { padding: 18px 20px 26px; }
}
@media (prefers-reduced-motion: reduce) {
  .te-hero *, .te-hero *::before, .te-hero *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}

      `}</style>
      <div className="te-wrap">
        <div className="te-hero-card">
          <div className="te-hero-info">
            <p className="te-proof">
              {proofImage && <img src={proofImage} alt={proofImageAlt || ''} />}
              <span>{props.proofSinceText || 'Since'} {proofYear}</span>
              <i aria-hidden="true" />
              <b>{proofStores}</b> {props.proofStoresText || 'stores'}
              <i aria-hidden="true" />
              <b>{proofProducts}</b> {props.proofProductsText || 'toys online'}
            </p>

            <h1>
              {headingPrefix}{' '}
              <span className="te-flip" aria-live="polite">
                <span className="te-fw">{activeWord}</span>
              </span>
            </h1>

            <p className="te-sub">{subheading}</p>

            <div className="te-hero-cta">
              {primaryButtonText && primaryButtonUrl && (
                <a className="te-pill te-pill-green" href={primaryButtonUrl}>
                  <span>{primaryButtonText}</span>
                  <SparkIcon />
                </a>
              )}
              {secondaryButtonText && secondaryButtonUrl && (
                <a className="te-pill te-pill-ghost" href={secondaryButtonUrl}>
                  <span>{secondaryButtonText}</span>
                </a>
              )}
            </div>

            {askText && askUrl && (
              <p className="te-hero-ask">
                <a href={askUrl}>{askText}<ArrowIcon /></a>
              </p>
            )}
          </div>

          <div className="te-hero-stage" aria-label={stageLabel || 'Choose a toy for a quick view'}>
            <div className="te-stage-bg" aria-hidden="true"><i /><i /><i /></div>

            {products.map((product) => {
              const position = {
                left: product.position.left || undefined,
                right: product.position.right || undefined,
                top: product.position.top || undefined,
                bottom: product.position.bottom || undefined,
                '--w': product.position.width || '22%',
                '--rot': product.position.rotation || '0deg',
              };

              return (
                <button
                  type="button"
                  key={product.id}
                  className={`te-spot te-spot--${product.id}`}
                  style={position}
                  aria-label={`${product.name}, ${product.price}, ${props.spotQuickViewText || 'Quick view'}`}
                  onClick={(event) => openQuickView(product, event)}
                >
                  {product.spotImage && <img src={product.spotImage} alt="" />}
                  <span className="te-spot-label" aria-hidden="true">
                    {product.spotSummary || product.name}
                    <em>{product.price}{product.was ? <s>{product.was}</s> : null}</em>
                    {product.spotDetail && <small>{product.spotDetail}</small>}
                    <span className="te-spot-go">{props.spotQuickViewText || 'Quick view'} <ArrowIcon /></span>
                  </span>
                </button>
              );
            })}

            {showSaleSticker && (
              <a className="te-hsticker" href={saleStickerUrl || '#'} aria-label={`${saleStickerTop} ${saleStickerMain} ${saleStickerBottom}`}>
                <span><small>{saleStickerTop}</small><b>{saleStickerMain}</b><em>{saleStickerBottom}</em></span>
              </a>
            )}

            {stageHint && <span className="te-stage-hint"><i />{stageHint}</span>}
          </div>
        </div>
      </div>

      {activeProduct && (
        <div className={`te-qv is-open${isVisible ? ' is-in' : ''}`} role="dialog" aria-modal="true" aria-label={props.quickViewDialogLabel || 'Quick view'} aria-labelledby="te-qv-title">
          <button type="button" className="te-qv-bg" aria-label={props.closeQuickViewLabel || 'Close quick view'} onClick={closeQuickView} />
          <div className="te-qv-panel" ref={panelRef}>
            <div className="te-qv-head">
              <b>{props.quickViewTitle || 'Quick view'}</b>
              <button type="button" className="te-qv-x" aria-label={props.closeQuickViewLabel || 'Close quick view'} ref={closeButtonRef} onClick={closeQuickView}>
                <CloseIcon />
              </button>
            </div>

            <div className="te-qv-img" style={{ '--t': activeProduct.imageBackground || '#eef2ff' }}>
              {activeProduct.quickViewImage && (
                <img src={activeProduct.quickViewImage} alt={activeProduct.imageAlt || activeProduct.name} />
              )}
            </div>

            <div className="te-qv-body">
              <p className="te-qv-cat">{activeProduct.category}</p>
              <h3 id="te-qv-title">{activeProduct.name}</h3>
              <p className="te-qv-price">
                {activeProduct.price}
                {activeProduct.was && <s>{activeProduct.was}</s>}
              </p>

              <div className="te-qv-meta">
                {activeProduct.age && <span>{props.ageLabel || 'Age:'} {activeProduct.age}</span>}
                {activeProduct.productType && <span>{activeProduct.productType}</span>}
              </div>

              {deliveryItems.length > 0 && (
                <ul className="te-qv-del">
                  {deliveryItems.map((item, index) => (
                    <li key={index}>
                      {item.icon && <img src={item.icon} alt="" />}
                      <span>{item.title}<small>{item.description}</small></span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="te-qv-actions">
                {activeProduct.productUrl && (
                  <a className="te-pill te-pill-green" href={activeProduct.productUrl} target="_blank" rel="noopener noreferrer">
                    <SparkIcon />{props.viewProductButtonText || 'View on TheToyShop.com'}
                  </a>
                )}
                {activeProduct.categoryUrl && (
                  <a className="te-pill te-pill-outline" href={activeProduct.categoryUrl} target="_blank" rel="noopener noreferrer">
                    {activeProduct.categoryLinkText || `${props.moreCategoryPrefix || 'More'} ${activeProduct.category}`}
                  </a>
                )}
              </div>

              {priceNote && <p className="te-qv-note">{priceNote}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const productPropTypes = {};
[1, 2, 3, 4, 5, 6].forEach((number) => {
  const fields = ['id', 'enabled', 'name', 'category', 'price', 'was', 'age', 'productType', 'spotImage', 'quickViewImage', 'imageAlt', 'imageBackground', 'spotSummary', 'spotDetail', 'productUrl', 'categoryUrl', 'categoryLinkText', 'left', 'right', 'top', 'bottom', 'width', 'rotation'];
  fields.forEach((field) => {
    productPropTypes[`product${number}${field}`] = field === 'enabled' ? PropTypes.bool : PropTypes.string;
  });
});

TheEntertainerHero.propTypes = {
  proofImage: PropTypes.string,
  proofImageAlt: PropTypes.string,
  proofYear: PropTypes.string,
  proofStores: PropTypes.string,
  proofProducts: PropTypes.string,
  headingPrefix: PropTypes.string,
  headingWords: PropTypes.string,
  subheading: PropTypes.string,
  primaryButtonText: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  askText: PropTypes.string,
  askUrl: PropTypes.string,
  stageLabel: PropTypes.string,
  showSaleSticker: PropTypes.bool,
  saleStickerTop: PropTypes.string,
  saleStickerMain: PropTypes.string,
  saleStickerBottom: PropTypes.string,
  saleStickerUrl: PropTypes.string,
  stageHint: PropTypes.string,
  backgroundColor: PropTypes.string,
  heroBackground: PropTypes.string,
  delivery1Icon: PropTypes.string,
  delivery1Title: PropTypes.string,
  delivery1Description: PropTypes.string,
  delivery2Icon: PropTypes.string,
  delivery2Title: PropTypes.string,
  delivery2Description: PropTypes.string,
  delivery3Icon: PropTypes.string,
  delivery3Title: PropTypes.string,
  delivery3Description: PropTypes.string,
  priceNote: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardShadowColor: PropTypes.string,
  infoBackgroundStartColor: PropTypes.string,
  infoBackgroundEndColor: PropTypes.string,
  infoTextColor: PropTypes.string,
  proofBackgroundColor: PropTypes.string,
  proofTextColor: PropTypes.string,
  proofHighlightColor: PropTypes.string,
  proofSeparatorColor: PropTypes.string,
  headingColor: PropTypes.string,
  headingWordColor: PropTypes.string,
  subheadingColor: PropTypes.string,
  primaryButtonBackgroundColor: PropTypes.string,
  primaryButtonTextColor: PropTypes.string,
  primaryButtonHoverColor: PropTypes.string,
  secondaryButtonBackgroundColor: PropTypes.string,
  secondaryButtonTextColor: PropTypes.string,
  secondaryButtonBorderColor: PropTypes.string,
  secondaryButtonHoverColor: PropTypes.string,
  askLinkColor: PropTypes.string,
  askLinkHoverColor: PropTypes.string,
  stageBackgroundStartColor: PropTypes.string,
  stageBackgroundEndColor: PropTypes.string,
  stageDecoration1Color: PropTypes.string,
  stageDecoration2Color: PropTypes.string,
  stageDecoration3Color: PropTypes.string,
  productLabelBackgroundColor: PropTypes.string,
  productLabelNameColor: PropTypes.string,
  productLabelPriceColor: PropTypes.string,
  productLabelWasColor: PropTypes.string,
  productLabelDetailColor: PropTypes.string,
  productLabelLinkColor: PropTypes.string,
  saleStickerBackgroundColor: PropTypes.string,
  saleStickerTopColor: PropTypes.string,
  saleStickerMainColor: PropTypes.string,
  saleStickerBottomColor: PropTypes.string,
  stageHintBackgroundColor: PropTypes.string,
  stageHintTextColor: PropTypes.string,
  stageHintIndicatorColor: PropTypes.string,
  quickViewOverlayColor: PropTypes.string,
  quickViewBackgroundColor: PropTypes.string,
  quickViewHeaderBackgroundColor: PropTypes.string,
  quickViewHeaderTextColor: PropTypes.string,
  quickViewCloseBackgroundColor: PropTypes.string,
  quickViewCloseTextColor: PropTypes.string,
  quickViewCategoryColor: PropTypes.string,
  quickViewTitleColor: PropTypes.string,
  quickViewPriceColor: PropTypes.string,
  quickViewWasColor: PropTypes.string,
  quickViewMetaBackgroundColor: PropTypes.string,
  quickViewMetaTextColor: PropTypes.string,
  deliveryTitleColor: PropTypes.string,
  deliveryDescriptionColor: PropTypes.string,
  quickViewPrimaryButtonBackgroundColor: PropTypes.string,
  quickViewPrimaryButtonTextColor: PropTypes.string,
  quickViewSecondaryButtonBackgroundColor: PropTypes.string,
  quickViewSecondaryButtonTextColor: PropTypes.string,
  quickViewSecondaryButtonBorderColor: PropTypes.string,
  priceNoteColor: PropTypes.string,
  focusOutlineColor: PropTypes.string,
  proofSinceText: PropTypes.string,
  proofStoresText: PropTypes.string,
  proofProductsText: PropTypes.string,
  spotQuickViewText: PropTypes.string,
  quickViewTitle: PropTypes.string,
  quickViewDialogLabel: PropTypes.string,
  closeQuickViewLabel: PropTypes.string,
  ageLabel: PropTypes.string,
  viewProductButtonText: PropTypes.string,
  moreCategoryPrefix: PropTypes.string,
  ...productPropTypes,
};

export default TheEntertainerHero;
