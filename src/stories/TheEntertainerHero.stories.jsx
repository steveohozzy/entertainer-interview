import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { db } from '../config/firebase';
import { useArgs } from 'storybook/preview-api';
import { TheEntertainerHero } from './TheEntertainerHero';
import './storybook-tools.css';

const collectionName = 'homepage-hero-modules';

export default {
  title: 'Agency Examples/The Entertainer Hero',
  component: TheEntertainerHero,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    moduleName: { control: 'text' },
    selectedModule: { table: { disable: true } },
    saveModule: { control: 'boolean' },
    proofImage: { control: 'text' },
    proofImageAlt: { control: 'text' },
    proofYear: { control: 'text' },
    proofStores: { control: 'text' },
    proofProducts: { control: 'text' },
    headingPrefix: { control: 'text' },
    headingWords: { control: 'text' },
    subheading: { control: 'text' },
    primaryButtonText: { control: 'text' },
    primaryButtonUrl: { control: 'text' },
    secondaryButtonText: { control: 'text' },
    secondaryButtonUrl: { control: 'text' },
    askText: { control: 'text' },
    askUrl: { control: 'text' },
    stageLabel: { control: 'text' },
    showSaleSticker: { control: 'boolean' },
    saleStickerTop: { control: 'text' },
    saleStickerMain: { control: 'text' },
    saleStickerBottom: { control: 'text' },
    saleStickerUrl: { control: 'text' },
    stageHint: { control: 'text' },
    backgroundColor: { control: 'color' },
    heroBackground: { control: 'color' },
    delivery1Icon: { control: 'text' },
    delivery1Title: { control: 'text' },
    delivery1Description: { control: 'text' },
    delivery2Icon: { control: 'text' },
    delivery2Title: { control: 'text' },
    delivery2Description: { control: 'text' },
    delivery3Icon: { control: 'text' },
    delivery3Title: { control: 'text' },
    delivery3Description: { control: 'text' },
    priceNote: { control: 'text' },
    cardBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    cardShadowColor: { control: 'color', table: { category: 'Colours' } },
    infoBackgroundStartColor: { control: 'color', table: { category: 'Colours' } },
    infoBackgroundEndColor: { control: 'color', table: { category: 'Colours' } },
    infoTextColor: { control: 'color', table: { category: 'Colours' } },
    proofBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    proofTextColor: { control: 'color', table: { category: 'Colours' } },
    proofHighlightColor: { control: 'color', table: { category: 'Colours' } },
    proofSeparatorColor: { control: 'color', table: { category: 'Colours' } },
    headingColor: { control: 'color', table: { category: 'Colours' } },
    headingWordColor: { control: 'color', table: { category: 'Colours' } },
    subheadingColor: { control: 'color', table: { category: 'Colours' } },
    primaryButtonBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    primaryButtonTextColor: { control: 'color', table: { category: 'Colours' } },
    primaryButtonHoverColor: { control: 'color', table: { category: 'Colours' } },
    secondaryButtonBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    secondaryButtonTextColor: { control: 'color', table: { category: 'Colours' } },
    secondaryButtonBorderColor: { control: 'color', table: { category: 'Colours' } },
    secondaryButtonHoverColor: { control: 'color', table: { category: 'Colours' } },
    askLinkColor: { control: 'color', table: { category: 'Colours' } },
    askLinkHoverColor: { control: 'color', table: { category: 'Colours' } },
    stageBackgroundStartColor: { control: 'color', table: { category: 'Colours' } },
    stageBackgroundEndColor: { control: 'color', table: { category: 'Colours' } },
    stageDecoration1Color: { control: 'color', table: { category: 'Colours' } },
    stageDecoration2Color: { control: 'color', table: { category: 'Colours' } },
    stageDecoration3Color: { control: 'color', table: { category: 'Colours' } },
    productLabelBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    productLabelNameColor: { control: 'color', table: { category: 'Colours' } },
    productLabelPriceColor: { control: 'color', table: { category: 'Colours' } },
    productLabelWasColor: { control: 'color', table: { category: 'Colours' } },
    productLabelDetailColor: { control: 'color', table: { category: 'Colours' } },
    productLabelLinkColor: { control: 'color', table: { category: 'Colours' } },
    saleStickerBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    saleStickerTopColor: { control: 'color', table: { category: 'Colours' } },
    saleStickerMainColor: { control: 'color', table: { category: 'Colours' } },
    saleStickerBottomColor: { control: 'color', table: { category: 'Colours' } },
    stageHintBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    stageHintTextColor: { control: 'color', table: { category: 'Colours' } },
    stageHintIndicatorColor: { control: 'color', table: { category: 'Colours' } },
    quickViewOverlayColor: { control: 'color', table: { category: 'Colours' } },
    quickViewBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    quickViewHeaderBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    quickViewHeaderTextColor: { control: 'color', table: { category: 'Colours' } },
    quickViewCloseBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    quickViewCloseTextColor: { control: 'color', table: { category: 'Colours' } },
    quickViewCategoryColor: { control: 'color', table: { category: 'Colours' } },
    quickViewTitleColor: { control: 'color', table: { category: 'Colours' } },
    quickViewPriceColor: { control: 'color', table: { category: 'Colours' } },
    quickViewWasColor: { control: 'color', table: { category: 'Colours' } },
    quickViewMetaBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    quickViewMetaTextColor: { control: 'color', table: { category: 'Colours' } },
    deliveryTitleColor: { control: 'color', table: { category: 'Colours' } },
    deliveryDescriptionColor: { control: 'color', table: { category: 'Colours' } },
    quickViewPrimaryButtonBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    quickViewPrimaryButtonTextColor: { control: 'color', table: { category: 'Colours' } },
    quickViewSecondaryButtonBackgroundColor: { control: 'color', table: { category: 'Colours' } },
    quickViewSecondaryButtonTextColor: { control: 'color', table: { category: 'Colours' } },
    quickViewSecondaryButtonBorderColor: { control: 'color', table: { category: 'Colours' } },
    priceNoteColor: { control: 'color', table: { category: 'Colours' } },
    focusOutlineColor: { control: 'color', table: { category: 'Colours' } },
    proofSinceText: { control: 'text', table: { category: 'Editable Text' } },
    proofStoresText: { control: 'text', table: { category: 'Editable Text' } },
    proofProductsText: { control: 'text', table: { category: 'Editable Text' } },
    spotQuickViewText: { control: 'text', table: { category: 'Editable Text' } },
    quickViewTitle: { control: 'text', table: { category: 'Editable Text' } },
    quickViewDialogLabel: { control: 'text', table: { category: 'Editable Text' } },
    closeQuickViewLabel: { control: 'text', table: { category: 'Editable Text' } },
    ageLabel: { control: 'text', table: { category: 'Editable Text' } },
    viewProductButtonText: { control: 'text', table: { category: 'Editable Text' } },
    moreCategoryPrefix: { control: 'text', table: { category: 'Editable Text' } },
    product1id: { control: 'text' },
    product1enabled: { control: 'boolean' },
    product1name: { control: 'text' },
    product1category: { control: 'text' },
    product1price: { control: 'text' },
    product1was: { control: 'text' },
    product1age: { control: 'text' },
    product1productType: { control: 'text' },
    product1spotImage: { control: 'text' },
    product1quickViewImage: { control: 'text' },
    product1imageAlt: { control: 'text' },
    product1imageBackground: { control: 'color' },
    product1spotSummary: { control: 'text' },
    product1spotDetail: { control: 'text' },
    product1productUrl: { control: 'text' },
    product1categoryUrl: { control: 'text' },
    product1categoryLinkText: { control: 'text' },
    product1left: { control: 'text' },
    product1right: { control: 'text' },
    product1top: { control: 'text' },
    product1bottom: { control: 'text' },
    product1width: { control: 'text' },
    product1rotation: { control: 'text' },
    product2id: { control: 'text' },
    product2enabled: { control: 'boolean' },
    product2name: { control: 'text' },
    product2category: { control: 'text' },
    product2price: { control: 'text' },
    product2was: { control: 'text' },
    product2age: { control: 'text' },
    product2productType: { control: 'text' },
    product2spotImage: { control: 'text' },
    product2quickViewImage: { control: 'text' },
    product2imageAlt: { control: 'text' },
    product2imageBackground: { control: 'color' },
    product2spotSummary: { control: 'text' },
    product2spotDetail: { control: 'text' },
    product2productUrl: { control: 'text' },
    product2categoryUrl: { control: 'text' },
    product2categoryLinkText: { control: 'text' },
    product2left: { control: 'text' },
    product2right: { control: 'text' },
    product2top: { control: 'text' },
    product2bottom: { control: 'text' },
    product2width: { control: 'text' },
    product2rotation: { control: 'text' },
    product3id: { control: 'text' },
    product3enabled: { control: 'boolean' },
    product3name: { control: 'text' },
    product3category: { control: 'text' },
    product3price: { control: 'text' },
    product3was: { control: 'text' },
    product3age: { control: 'text' },
    product3productType: { control: 'text' },
    product3spotImage: { control: 'text' },
    product3quickViewImage: { control: 'text' },
    product3imageAlt: { control: 'text' },
    product3imageBackground: { control: 'color' },
    product3spotSummary: { control: 'text' },
    product3spotDetail: { control: 'text' },
    product3productUrl: { control: 'text' },
    product3categoryUrl: { control: 'text' },
    product3categoryLinkText: { control: 'text' },
    product3left: { control: 'text' },
    product3right: { control: 'text' },
    product3top: { control: 'text' },
    product3bottom: { control: 'text' },
    product3width: { control: 'text' },
    product3rotation: { control: 'text' },
    product4id: { control: 'text' },
    product4enabled: { control: 'boolean' },
    product4name: { control: 'text' },
    product4category: { control: 'text' },
    product4price: { control: 'text' },
    product4was: { control: 'text' },
    product4age: { control: 'text' },
    product4productType: { control: 'text' },
    product4spotImage: { control: 'text' },
    product4quickViewImage: { control: 'text' },
    product4imageAlt: { control: 'text' },
    product4imageBackground: { control: 'color' },
    product4spotSummary: { control: 'text' },
    product4spotDetail: { control: 'text' },
    product4productUrl: { control: 'text' },
    product4categoryUrl: { control: 'text' },
    product4categoryLinkText: { control: 'text' },
    product4left: { control: 'text' },
    product4right: { control: 'text' },
    product4top: { control: 'text' },
    product4bottom: { control: 'text' },
    product4width: { control: 'text' },
    product4rotation: { control: 'text' },
    product5id: { control: 'text' },
    product5enabled: { control: 'boolean' },
    product5name: { control: 'text' },
    product5category: { control: 'text' },
    product5price: { control: 'text' },
    product5was: { control: 'text' },
    product5age: { control: 'text' },
    product5productType: { control: 'text' },
    product5spotImage: { control: 'text' },
    product5quickViewImage: { control: 'text' },
    product5imageAlt: { control: 'text' },
    product5imageBackground: { control: 'color' },
    product5spotSummary: { control: 'text' },
    product5spotDetail: { control: 'text' },
    product5productUrl: { control: 'text' },
    product5categoryUrl: { control: 'text' },
    product5categoryLinkText: { control: 'text' },
    product5left: { control: 'text' },
    product5right: { control: 'text' },
    product5top: { control: 'text' },
    product5bottom: { control: 'text' },
    product5width: { control: 'text' },
    product5rotation: { control: 'text' },
    product6id: { control: 'text' },
    product6enabled: { control: 'boolean' },
    product6name: { control: 'text' },
    product6category: { control: 'text' },
    product6price: { control: 'text' },
    product6was: { control: 'text' },
    product6age: { control: 'text' },
    product6productType: { control: 'text' },
    product6spotImage: { control: 'text' },
    product6quickViewImage: { control: 'text' },
    product6imageAlt: { control: 'text' },
    product6imageBackground: { control: 'color' },
    product6spotSummary: { control: 'text' },
    product6spotDetail: { control: 'text' },
    product6productUrl: { control: 'text' },
    product6categoryUrl: { control: 'text' },
    product6categoryLinkText: { control: 'text' },
    product6left: { control: 'text' },
    product6right: { control: 'text' },
    product6top: { control: 'text' },
    product6bottom: { control: 'text' },
    product6width: { control: 'text' },
    product6rotation: { control: 'text' },
  },
};

export const HomepageHero = {
  args: {
    moduleName: '',
    selectedModule: '',
    saveModule: false,
    cardBackgroundColor: '#ffffff',
    cardShadowColor: 'rgba(13,93,156,.45)',
    infoBackgroundStartColor: '#e82416',
    infoBackgroundEndColor: '#b70000',
    infoTextColor: '#ffffff',
    proofBackgroundColor: 'rgba(0,0,0,.16)',
    proofTextColor: '#ffffff',
    proofHighlightColor: '#ffd100',
    proofSeparatorColor: '#ffd100',
    headingColor: '#ffffff',
    headingWordColor: '#ffd100',
    subheadingColor: '#ffffff',
    primaryButtonBackgroundColor: '#009e44',
    primaryButtonTextColor: '#ffffff',
    primaryButtonHoverColor: '#0b8a3b',
    secondaryButtonBackgroundColor: 'transparent',
    secondaryButtonTextColor: '#ffffff',
    secondaryButtonBorderColor: 'rgba(255,255,255,.75)',
    secondaryButtonHoverColor: 'rgba(255,255,255,.12)',
    askLinkColor: '#ffffff',
    askLinkHoverColor: '#ffd100',
    stageBackgroundStartColor: '#ffffff',
    stageBackgroundEndColor: '#dbe3ff',
    stageDecoration1Color: 'rgba(64,126,201,.08)',
    stageDecoration2Color: 'rgba(232,36,22,.06)',
    stageDecoration3Color: 'rgba(255,209,0,.12)',
    productLabelBackgroundColor: '#ffffff',
    productLabelNameColor: '#0d5d9c',
    productLabelPriceColor: '#e82416',
    productLabelWasColor: '#777777',
    productLabelDetailColor: '#585858',
    productLabelLinkColor: '#009e44',
    saleStickerBackgroundColor: '#ffd100',
    saleStickerTopColor: '#b70000',
    saleStickerMainColor: '#b70000',
    saleStickerBottomColor: '#b70000',
    stageHintBackgroundColor: 'rgba(255,255,255,.82)',
    stageHintTextColor: '#0d5d9c',
    stageHintIndicatorColor: '#009e44',
    quickViewOverlayColor: 'rgba(13,33,60,.55)',
    quickViewBackgroundColor: '#ffffff',
    quickViewHeaderBackgroundColor: '#0d5d9c',
    quickViewHeaderTextColor: '#ffffff',
    quickViewCloseBackgroundColor: 'rgba(255,255,255,.15)',
    quickViewCloseTextColor: '#ffffff',
    quickViewCategoryColor: '#585858',
    quickViewTitleColor: '#0d5d9c',
    quickViewPriceColor: '#e82416',
    quickViewWasColor: '#8a8a8a',
    quickViewMetaBackgroundColor: '#eef2ff',
    quickViewMetaTextColor: '#0d5d9c',
    deliveryTitleColor: '#0d5d9c',
    deliveryDescriptionColor: '#585858',
    quickViewPrimaryButtonBackgroundColor: '#009e44',
    quickViewPrimaryButtonTextColor: '#ffffff',
    quickViewSecondaryButtonBackgroundColor: '#ffffff',
    quickViewSecondaryButtonTextColor: '#0d5d9c',
    quickViewSecondaryButtonBorderColor: '#d9e2ef',
    priceNoteColor: '#777777',
    focusOutlineColor: '#ffd100',
    proofSinceText: 'Since',
    proofStoresText: 'stores',
    proofProductsText: 'toys online',
    spotQuickViewText: 'Quick view',
    quickViewTitle: 'Quick view',
    quickViewDialogLabel: 'Quick view',
    closeQuickViewLabel: 'Close quick view',
    ageLabel: 'Age:',
    viewProductButtonText: 'View on TheToyShop.com',
    moreCategoryPrefix: 'More',
        "proofImage": "/preview/the-entertainer/media/jack.webp",
        "proofImageAlt": "The Entertainer mascot Jack",
        "proofYear": "1981",
        "proofStores": "160",
        "proofProducts": "7,000",
        "headingPrefix": "Toys for",
        "headingWords": "every age.|pocket money.|grown ups.|Christmas.",
        "subheading": "Britain's toy shop. Free Click & Collect in as little as 30 minutes and free delivery on orders over £39.99.",
        "primaryButtonText": "Shop Now",
        "primaryButtonUrl": "https://www.thetoyshop.com/c/half-price-toys",
        "secondaryButtonText": "Find a store",
        "secondaryButtonUrl": "#stores",
        "askText": "Got a question? Ask us",
        "askUrl": "#ask",
        "stageLabel": "This week's Top Picks: choose a toy for a quick view",
        "showSaleSticker": true,
        "saleStickerTop": "Up to",
        "saleStickerMain": "Half price",
        "saleStickerBottom": "Toy Sale",
        "saleStickerUrl": "https://www.thetoyshop.com/c/half-price-toys",
        "stageHint": "Tap a toy for price and details",
        "backgroundColor": "#dbe3ff",
        "heroBackground": "#f0f3ff",
        "delivery1Icon": "/preview/the-entertainer/media/usp-cc.webp",
        "delivery1Title": "Free Click & Collect",
        "delivery1Description": "In as little as 30 minutes if your store has it, Monday to Saturday",
        "delivery2Icon": "/preview/the-entertainer/media/usp-standard.webp",
        "delivery2Title": "Free delivery on orders over £39.99",
        "delivery2Description": "Standard delivery 2 to 3 working days, UK mainland",
        "delivery3Icon": "/preview/the-entertainer/media/usp-express.webp",
        "delivery3Title": "Free Next Day Delivery on orders over £75",
        "delivery3Description": "Order by 7pm Monday to Friday, UK mainland",
        "priceNote": "Price as shown on thetoyshop.com on 5 October 2026.",
        "product1id": "meccano",
        "product1enabled": true,
        "product1name": "Meccano Pro Limited Edition Aston Martin Aramco Formula One Race Car Construction Set",
        "product1category": "Meccano Pro",
        "product1price": "£180.00",
        "product1was": "",
        "product1age": "18 years+",
        "product1productType": "Construction Toys",
        "product1spotImage": "/preview/the-entertainer/media/cut-meccano.webp",
        "product1quickViewImage": "/preview/the-entertainer/media/pk-meccano.webp",
        "product1imageAlt": "Meccano Pro Limited Edition Aston Martin Aramco Formula One Race Car Construction Set",
        "product1imageBackground": "#e7e9e9",
        "product1spotSummary": "Meccano Pro Limited Edition Aston Martin Ar…",
        "product1spotDetail": "1203 parts, age 18+",
        "product1productUrl": "https://www.thetoyshop.com/construction-toys/construction-sets/Meccano-Pro-Limited-Edition-Aston-Martin-Aramco-Formula-One-Race-Car-Construction-Set/p/582668",
        "product1categoryUrl": "https://www.thetoyshop.com/c/construction-toys",
        "product1categoryLinkText": "More Construction Toys",
        "product1left": "2%",
        "product1right": "",
        "product1top": "",
        "product1bottom": "4%",
        "product1width": "46%",
        "product1rotation": "-2deg",
        "product2id": "fuggler",
        "product2enabled": true,
        "product2name": "Fuggler Festive Fuggs Series 2 Sasquinch Soft Toy by ZURU",
        "product2category": "Fuggler",
        "product2price": "£10.00",
        "product2was": "",
        "product2age": "",
        "product2productType": "Plushies & Soft toys",
        "product2spotImage": "/preview/the-entertainer/media/cut-fuggler.webp",
        "product2quickViewImage": "/preview/the-entertainer/media/pk-fuggler.webp",
        "product2imageAlt": "Fuggler Festive Fuggs Series 2 Sasquinch Soft Toy by ZURU",
        "product2imageBackground": "#eaeade",
        "product2spotSummary": "Fuggler Festive Fuggs Series 2 Sasquinch So…",
        "product2spotDetail": "Festive Fuggs Series 2",
        "product2productUrl": "https://www.thetoyshop.com/brands/fuggler",
        "product2categoryUrl": "https://www.thetoyshop.com/c/soft-toys",
        "product2categoryLinkText": "More Soft Toys",
        "product2left": "36%",
        "product2right": "",
        "product2top": "5%",
        "product2bottom": "",
        "product2width": "21%",
        "product2rotation": "4deg",
        "product3id": "mira",
        "product3enabled": true,
        "product3name": "KPop Demon Hunters Mira Huntrix Doll How It's Done",
        "product3category": "KPop Demon Hunters",
        "product3price": "£30.00",
        "product3was": "",
        "product3age": "",
        "product3productType": "Fashion Dolls",
        "product3spotImage": "/preview/the-entertainer/media/cut-mira.webp",
        "product3quickViewImage": "/preview/the-entertainer/media/pk-mira.webp",
        "product3imageAlt": "KPop Demon Hunters Mira Huntrix Doll How It's Done",
        "product3imageBackground": "#e7e9e9",
        "product3spotSummary": "KPop Demon Hunters Mira Huntrix Doll How It…",
        "product3spotDetail": "New In KPop Demon Hunters",
        "product3productUrl": "https://www.thetoyshop.com/brands/kpop-demon-hunters",
        "product3categoryUrl": "https://www.thetoyshop.com/c/dolls",
        "product3categoryLinkText": "More Dolls",
        "product3left": "",
        "product3right": "8%",
        "product3top": "6%",
        "product3bottom": "",
        "product3width": "19%",
        "product3rotation": "-3deg",
        "product4id": "laser",
        "product4enabled": true,
        "product4name": "Laser Duel Tag Blaster Game",
        "product4category": "Laser Duel",
        "product4price": "£15.00",
        "product4was": "£30.00",
        "product4age": "",
        "product4productType": "Outdoor Toys",
        "product4spotImage": "/preview/the-entertainer/media/cut-laser.webp",
        "product4quickViewImage": "/preview/the-entertainer/media/pk-laser.webp",
        "product4imageAlt": "Laser Duel Tag Blaster Game",
        "product4imageBackground": "#e7e5e7",
        "product4spotSummary": "Laser Duel Tag Blaster Game",
        "product4spotDetail": "Half price, was £30.00",
        "product4productUrl": "https://www.thetoyshop.com/c/outdoor-toys/blasters",
        "product4categoryUrl": "https://www.thetoyshop.com/c/outdoor-toys/blasters",
        "product4categoryLinkText": "More Blasters",
        "product4left": "",
        "product4right": "2%",
        "product4top": "",
        "product4bottom": "7%",
        "product4width": "31%",
        "product4rotation": "0deg",
        "product5id": "dumpling",
        "product5enabled": true,
        "product5name": "Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)",
        "product5category": "Crazy Fun",
        "product5price": "£6.00",
        "product5was": "",
        "product5age": "",
        "product5productType": "Pocket Money Toys",
        "product5spotImage": "/preview/the-entertainer/media/cut-dumpling.webp",
        "product5quickViewImage": "/preview/the-entertainer/media/pk-dumpling.webp",
        "product5imageAlt": "Crazy Fun Original Treasure Edition Mystery Squishy Dumpling (Styles Vary)",
        "product5imageBackground": "#f5f1ee",
        "product5spotSummary": "Crazy Fun Original Treasure Edition Mystery…",
        "product5spotDetail": "New toys, styles vary",
        "product5productUrl": "https://www.thetoyshop.com/brands/crazy-fun-squishy-dumplings",
        "product5categoryUrl": "https://www.thetoyshop.com/c/pocket-money-toys",
        "product5categoryLinkText": "More Pocket Money Toys",
        "product5left": "7%",
        "product5right": "",
        "product5top": "7%",
        "product5bottom": "",
        "product5width": "17%",
        "product5rotation": "6deg",
        "product6id": "trike",
        "product6enabled": true,
        "product6name": "Huffy Green Machine 16\" Drift Trike",
        "product6category": "Huffy",
        "product6price": "£65.00",
        "product6was": "£129.99",
        "product6age": "",
        "product6productType": "Ride-ons",
        "product6spotImage": "/preview/the-entertainer/media/cut-trike.webp",
        "product6quickViewImage": "/preview/the-entertainer/media/pk-trike.webp",
        "product6imageAlt": "Huffy Green Machine 16\" Drift Trike",
        "product6imageBackground": "#e7e9e9",
        "product6spotSummary": "Huffy Green Machine 16\" Drift Trike",
        "product6spotDetail": "Clearance, was £129.99",
        "product6productUrl": "https://www.thetoyshop.com/c/ride-ons",
        "product6categoryUrl": "https://www.thetoyshop.com/c/ride-ons",
        "product6categoryLinkText": "More Ride-ons",
        "product6left": "46%",
        "product6right": "",
        "product6top": "",
        "product6bottom": "34%",
        "product6width": "25%",
        "product6rotation": "0deg"
  },
  render: function Render() {
    const [currentArgs, updateArgs] = useArgs();
    const [modules, setModules] = useState([]);
    const loadingRef = useRef(false);
    const previousModule = useRef('');

    useEffect(() => {
      const loadModules = async () => {
        try {
          const snap = await getDocs(collection(db, collectionName));
          setModules(snap.docs.map((item) => item.id));
        } catch (error) {
          console.error('Homepage hero module list error:', error);
        }
      };
      loadModules();
    }, []);

    useEffect(() => {
      if (
        !currentArgs.selectedModule ||
        loadingRef.current ||
        previousModule.current === currentArgs.selectedModule
      ) return;

      const load = async () => {
        loadingRef.current = true;
        try {
          const selectedName = currentArgs.selectedModule;
          const snap = await getDoc(doc(db, collectionName, selectedName));
          if (snap.exists()) {
            previousModule.current = selectedName;
            updateArgs({
              ...currentArgs,
              ...snap.data(),
              moduleName: selectedName,
              selectedModule: selectedName,
              saveModule: false,
            });
          }
        } catch (error) {
          console.error('Homepage hero module load error:', error);
        } finally {
          loadingRef.current = false;
        }
      };
      load();
    }, [currentArgs.selectedModule]);

    useEffect(() => {
      if (loadingRef.current || !currentArgs.saveModule || !currentArgs.moduleName) return;

      const save = async () => {
        try {
          const {
            moduleName,
            selectedModule,
            saveModule,
            ...fields
          } = currentArgs;

          await setDoc(doc(db, collectionName, moduleName), fields, { merge: false });

          setModules((previous) => previous.includes(moduleName)
            ? previous
            : [...previous, moduleName]);

          previousModule.current = moduleName;
          updateArgs({
            ...currentArgs,
            saveModule: false,
            selectedModule: moduleName,
          });
        } catch (error) {
          console.error('Homepage hero module save error:', error);
          updateArgs({ ...currentArgs, saveModule: false });
        }
      };
      save();
    }, [currentArgs.saveModule]);

    const deleteSelectedModule = async () => {
      if (!currentArgs.selectedModule) return;
      const moduleToDelete = currentArgs.selectedModule;
      if (!window.confirm(`Are you sure you want to delete "${moduleToDelete}"?`)) return;

      try {
        await deleteDoc(doc(db, collectionName, moduleToDelete));
        setModules((previous) => previous.filter((item) => item !== moduleToDelete));
        previousModule.current = '';
        updateArgs({
          ...currentArgs,
          moduleName: '',
          selectedModule: '',
          saveModule: false,
        });
      } catch (error) {
        console.error('Homepage hero module delete error:', error);
      }
    };

    const {
      moduleName,
      selectedModule,
      saveModule,
      ...componentArgs
    } = currentArgs;

    return (
      <>
        {createPortal(
          <div className="te-storybook-module-tools">
            <label htmlFor="te-hero-load-module">Load saved module</label>
            <select
              id="te-hero-load-module"
              value={currentArgs.selectedModule || ''}
              onChange={(event) => updateArgs({
                ...currentArgs,
                selectedModule: event.target.value,
              })}
            >
              <option value="">-- select saved module --</option>
              {modules.map((module) => (
                <option key={module} value={module}>{module}</option>
              ))}
            </select>

            <label htmlFor="te-hero-module-name">Module name to save</label>
            <input
              id="te-hero-module-name"
              type="text"
              value={currentArgs.moduleName || ''}
              onChange={(event) => updateArgs({
                ...currentArgs,
                moduleName: event.target.value,
              })}
              placeholder="e.g. homepage-hero-november"
            />

            <button
              type="button"
              disabled={!currentArgs.moduleName}
              onClick={() => updateArgs({ ...currentArgs, saveModule: true })}
            >
              Save module
            </button>
            <button
              type="button"
              disabled={!currentArgs.selectedModule}
              onClick={deleteSelectedModule}
            >
              Delete selected
            </button>
          </div>,
          document.body
        )}
        <TheEntertainerHero {...componentArgs} />
      </>
    );
  },
};
