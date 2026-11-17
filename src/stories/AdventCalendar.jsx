import React, { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_OFFERS = [
  {
    title: '[https://www.thetoyshop.com/medias/GBD-Logo-50px-high.png](https://www.thetoyshop.com/medias/GBD-Logo-50px-high.png)',
    discount: "25% off",
    description: "Selected Gabby's Dollhouse toys",
    code: "GABBY25",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-1-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-1-GOLD.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-1-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-1-GOLD.jpg)',
    link: "[https://www.thetoyshop.com/c/daily-deals](https://www.thetoyshop.com/c/daily-deals)",
    linkText: "Shop Now",
    terms: 'Offer ends 5th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/daily-deals#terms](https://www.thetoyshop.com/c/daily-deals#terms)" target="_blank">Terms and conditions apply</a>',
    inactive: true
  },
  {
    title: '[https://www.thetoyshop.com/medias/LOGO.png](https://www.thetoyshop.com/medias/LOGO.png)',
    discount: "Free Toothless soft toy",
    description: "When you spend £40 or more via home delivery",
    code: "FREEGIFT",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/door-2-edit-V2.jpg](https://www.thetoyshop.com/medias/door-2-edit-V2.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/door-2-edit-V2.jpg](https://www.thetoyshop.com/medias/door-2-edit-V2.jpg)',
    worth: "Worth £11",
    link: "[https://www.thetoyshop.com/c/all-categories](https://www.thetoyshop.com/c/all-categories)",
    linkText: "Shop Now",
    terms: 'Styles vary. While stocks last. Offer ends 6th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/all-categories#terms](https://www.thetoyshop.com/c/all-categories#terms)" target="_blank">Terms and conditions apply</a>',
    xavailable: "x200 available",
  },
  {
    title: '[https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png](https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png)',
    discount: "Win a Jurassic World bundle",
    description: "x3 to be won",
    code: "",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/Jurassic-Bundle-edit-V2.jpg](https://www.thetoyshop.com/medias/Jurassic-Bundle-edit-V2.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/Jurassic-Bundle-edit-V2.jpg](https://www.thetoyshop.com/medias/Jurassic-Bundle-edit-V2.jpg)',
    link: "[https://www.thetoyshop.com/jurassic-bundle-prize-draw](https://www.thetoyshop.com/jurassic-bundle-prize-draw)",
    linkText: "Enter Now",
    terms: 'Draw closes 7th December 2025 <a href="[https://www.thetoyshop.com/jurassic-bundle-terms](https://www.thetoyshop.com/jurassic-bundle-terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png](https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png)',
    discount: "Win a Wicked beauty bundle",
    description: "x3 to be won",
    code: "",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/Wicked-Bundle-2-edit.jpg](https://www.thetoyshop.com/medias/Wicked-Bundle-2-edit.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/Wicked-Bundle-2-edit.jpg](https://www.thetoyshop.com/medias/Wicked-Bundle-2-edit.jpg)',
    link: "[https://www.thetoyshop.com/wicked-bundle-prize-draw](https://www.thetoyshop.com/wicked-bundle-prize-draw)",
    linkText: "Enter Now",
    terms: 'Closes 8th December 2025 at 9am <a href="[https://www.thetoyshop.com/wicked-bundle-terms](https://www.thetoyshop.com/wicked-bundle-terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png](https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png)',
    discount: "20% off",
    description: "Selected Wicked dolls",
    code: "WICKED20",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-5-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-5-GOLD.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-5-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-5-GOLD.jpg)',
    link: "[https://www.thetoyshop.com/c/daily-deals](https://www.thetoyshop.com/c/daily-deals)",
    linkText: "Shop Now",
    terms: 'Offer ends 9th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/all-categories#terms](https://www.thetoyshop.com/c/all-categories#terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/DRAGON-logo-50px-high.png](https://www.thetoyshop.com/medias/DRAGON-logo-50px-high.png)',
    discount: "20% off",
    description: "Selected How to Train Your Dragon action figures",
    code: "DRAGON20",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-6-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-6-GOLD.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-6-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-6-GOLD.jpg)',
    link: "[https://www.thetoyshop.com/c/daily-deals](https://www.thetoyshop.com/c/daily-deals)",
    linkText: "Shop Now",
    terms: 'Offer ends 10th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/daily-deals#terms](https://www.thetoyshop.com/c/daily-deals#terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png](https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png)',
    discount: "Free Jurassic World soft toy",
    description: "When you spend £40 or more via home delivery",
    code: "FREEGIFT",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/door-7-edit-v2.jpg](https://www.thetoyshop.com/medias/door-7-edit-v2.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/door-7-edit-v2.jpg](https://www.thetoyshop.com/medias/door-7-edit-v2.jpg)',
    worth: "Worth £7.99",
    link: "[https://www.thetoyshop.com/c/all-categories](https://www.thetoyshop.com/c/all-categories)",
    linkText: "Shop Now",
    terms: 'While stocks last. Styles vary. Offer ends 11th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/all-categories#terms](https://www.thetoyshop.com/c/all-categories#terms)" target="_blank">Terms and conditions apply</a>',
    xavailable: "x200 available",
  },
  {
    title: '[https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png](https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png)',
    discount: "Free Wicked bag clip",
    description: "When you spend £40 or more via home delivery",
    code: "FREEGIFT",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/door-8-edit-v2.jpg](https://www.thetoyshop.com/medias/door-8-edit-v2.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/door-8-edit-v2.jpg](https://www.thetoyshop.com/medias/door-8-edit-v2.jpg)',
    worth: "Worth £4.99",
    link: "[https://www.thetoyshop.com/c/all-categories](https://www.thetoyshop.com/c/all-categories)",
    linkText: "Shop Now",
    terms: 'While stocks last. Styles vary. Offer ends 12th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/all-categories#terms](https://www.thetoyshop.com/c/all-categories#terms)" target="_blank">Terms and conditions apply</a>',
    xavailable: "x200 available",
  },
  {
    title: '[https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png](https://www.thetoyshop.com/medias/JW-LOGO-50px-high.png)',
    discount: "20% off",
    description: "Selected Jurassic World toys",
    code: "DINO20",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-9-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-9-GOLD.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-9-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-9-GOLD.jpg)',
    link: "[https://www.thetoyshop.com/c/daily-deals](https://www.thetoyshop.com/c/daily-deals)",
    linkText: "Shop Now",
    terms: 'Offer ends 13th December 2025 at 9am <a href="[https://www.thetoyshop.com/c/daily-deals#terms](https://www.thetoyshop.com/c/daily-deals#terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/GBD-Logo-50px-high.png](https://www.thetoyshop.com/medias/GBD-Logo-50px-high.png)',
    discount: "Win a Gabby's Dollhouse bundle",
    description: "x3 to be won",
    code: "",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/door-10-edit-v2.jpg](https://www.thetoyshop.com/medias/door-10-edit-v2.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/door-10-edit-v2.jpg](https://www.thetoyshop.com/medias/door-10-edit-v2.jpg)',
    link: "[https://www.thetoyshop.com/gabbys-dollhouse-bundle-prize-draw](https://www.thetoyshop.com/gabbys-dollhouse-bundle-prize-draw)",
    linkText: "Enter Now",
    terms: 'Draw closes 14th December 2025 at 9am <a href="[https://www.thetoyshop.com/gabbys-dollhouse-bundle-terms](https://www.thetoyshop.com/gabbys-dollhouse-bundle-terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/DRAGON-logo-50px-high.png](https://www.thetoyshop.com/medias/DRAGON-logo-50px-high.png)',
    discount: "Win a How to Train Your Dragon bundle",
    description: "x3 to be won",
    code: "",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/Dragon-big-bundle-edit-V2.jpg](https://www.thetoyshop.com/medias/Dragon-big-bundle-edit-V2.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/Dragon-big-bundle-edit-V2.jpg](https://www.thetoyshop.com/medias/Dragon-big-bundle-edit-V2.jpg)',
    link: "[https://www.thetoyshop.com/httyd-bundle-prize-draw](https://www.thetoyshop.com/httyd-bundle-prize-draw)",
    linkText: "Enter Now",
    terms: 'Closes 15th December 2025 at 9am <a href="[https://www.thetoyshop.com/httyd-bundle-terms](https://www.thetoyshop.com/httyd-bundle-terms)" target="_blank">Terms and conditions apply</a>',
  },
  {
    title: '[https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png](https://www.thetoyshop.com/medias/WICKED-2-LOGO-50px-high.png)',
    discount: "Win a magical weekend in France",
    description: "",
    code: "",
    color: "#AE1F23",
    image: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-12-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-12-GOLD.jpg)',
    mainImage: '[https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-12-GOLD.jpg](https://www.thetoyshop.com/medias/TE-Advent-Inside-Grid-Doors-12-GOLD.jpg)',
    link: "[https://www.thetoyshop.com/wicked-france-prize-draw](https://www.thetoyshop.com/wicked-france-prize-draw)",
    linkText: "Enter Now",
    terms: 'Closes 31st December 2025 at 11:59pm <a href="[https://www.thetoyshop.com/wicked-france-prize-draw-terms](https://www.thetoyshop.com/wicked-france-prize-draw-terms)" target="_blank">Terms and conditions apply</a>',
  }
];

const adventCSS = `
@import url("https://use.typekit.net/bke4tog.css");

:root {
   --highlight-color: HIGHLIGHT_COLOR;
   --coming-soon-text-color: COMING_SOON_TEXT_COLOR;
   --coming-soon-background-color: COMING_SOON_BACKGROUND_COLOR;
}

.breadcrumb-section {
  display: none;
}

.advent-wrapper {
  color: #fff;
  overflow: hidden;
  position: relative;
  background-image: url('BACKGROUND_IMAGE');
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  margin-bottom: 0;
  max-width: 100vw;
  top: -1px;
}

footer {
  position: relative;
  z-index: 2;
}

.advent-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
  position: relative;
  z-index: 20;
}

.hero {
  text-align: center;
  padding: 20px 0;
}

.hero-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  margin: 0 auto 20px;
}

.heading-area {
  display: flex;
  gap: 10px;
  align-items: center;
}

.header-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header-image picture {
  display: block;
  width: 100%;
}

.header-image img {
  display: block;
  max-width: 64rem;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.hero-title {
  margin: 0;
  line-height: 1.2;
  font-family: "ice-cream-standard", sans-serif;
  font-weight: 400;
  font-size: 80px;
  color: transparent;
  background-image: url('https://thetoyshop.com/medias/gold-square.png?context=bWFzdGVyfHJvb3R8NTIyMjV8aW1hZ2UvcG5nfGFEUmtMMmcyWXk4eE1qWTBPVFE1TXpNek1UazVPQzluYjJ4a0lITnhkV0Z5WlM1d2JtY3xiZmFlNDVkNTNjMDJlMWRkZTliZDNhZDIwMGMxNDdjOWJkYjBkODNkZmNlOWQ3NGQ1NmNlYWY1MzI5MDA3NWQ2');
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: repeat;
  filter: drop-shadow(4px 4px #021833);
}

.hero-instructions {
  font-size: 18px;
  color: #fff;
  margin: 0 auto;
  max-width: 59rem;
  line-height: 1.2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.hero-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  font-size: 14px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin: 0 auto;
  max-width: 64rem;
  padding-bottom: 30px;
}

.calendar-door {
  aspect-ratio: 1;
  cursor: pointer;
  transition: all .5s;
  border-radius: 8px;
  position: relative;
  background-image: url('https://thetoyshop.com/medias/Univ-advent-door-unlocked.png?context=bWFzdGVyfHJvb3R8MTYzMTA3fGltYWdlL3BuZ3xhRGd5TDJnd1ppOHhNalkxTURFMU5EQXdNRFF4TkM5VmJtbDJMV0ZrZG1WdWRDMWtiMjl5TFhWdWJHOWphMlZrTG5CdVp3fDhjN2Q3ZjU3OWRjODdkOTE0MGViNzg0ZTY4OTI2MGFjMDZhMjAyNzBhYzE2YmUxZGQ0NzhmZmVkOWU3ZjQ2NDg');
  background-size: cover;
  overflow: hidden;
}

.calendar-door.available {
  box-shadow: 0 10px 25px rgba(0,0,0,.3);
}

.calendar-door.available:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(0,0,0,.5);
}

.calendar-door.today {
  opacity: 1;
  animation: pulse-animation 2s infinite, bounce-animation 2s infinite;
}

.calendar-door.today:hover {
  animation: none;
  transform: scale(1.05);
  box-shadow: 0 0 0 5px rgba(var(--highlight-color),.4);
}

.calendar-door.past {
  opacity: 0.7;
  cursor: not-allowed;
}

@keyframes pulse-animation {
  0% { box-shadow: 0 0 0 0 rgba(var(--highlight-color),.8); }
  100% { box-shadow: 0 0 0 20px rgba(229,167,62,0); }
}

@keyframes bounce-animation {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.calendar-door.locked {
  cursor: not-allowed;
  background-image: url('https://thetoyshop.com/medias/Univ-advent-door-locked-1-.png?context=bWFzdGVyfHJvb3R8OTgzMzF8aW1hZ2UvcG5nfGFHUTFMMmczTnk4eE1qZzJOVEkzTVRNd01ERXlOaTlWYm1sMkxXRmtkbVZ1ZEMxa2IyOXlMV3h2WTJ0bFpDQW9NU2t1Y0c1bnw3NTAwMGIwZDRiMjQwMjMyOTdmZjE4OWYyODQzM2FiMzRkNTQ5ZDg1ZmEwZTUxYmYxYWU3Yzk2ZGQ1MzBiMDJi');
}

.door-content {
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 20px;
}

.door-number {
  font-family: "ice-cream-standard", sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  color: #fff;
  filter: drop-shadow(4px 4px #021833);
}

.calendar-door.opened .door-title {
  display: none;
}

.calendar-door.opened .door-number {
  font-size: 16px;
  width: 30%;
  border: none;
  filter: none;
  transform: rotate(0deg) !important;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "ice-cream-standard", sans-serif;
  margin-top: 0;
}

.door-opened {
  text-align: center;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.door-image {
  width: 100%;
  margin: 0 auto 1rem;
  height: 100%;
}

.door-image img {
  width: 70%;
  height: auto;
  border: 3px solid #2F3D8D;
  border-radius: 5px;
}

.door-opened .door-image {
  width: 100%;
  display: flex;
  flex-flow: row-reverse;
  background-color: #001533;
  border-radius: 8px;
}

.door-opened .door-image img {
  width: 100%;
  height: 100%;
  border: none;
}

.door-opened .door-image .door-number {
  display: none;
}

.door-title {
  font-size: .75rem;
  font-weight: bold;
  color: #7f1d1d;
  margin-bottom: .25rem;
}

.door-discount {
  font-size: .75rem;
  padding: .125rem .5rem;
  border-radius: .25rem;
  color: #072442;
  font-weight: bold;
  background: #2F3D8D;
  font-family: "ice-cream-standard", sans-serif;
}

.door-opened .door-discount {
  width: 100%;
}

.door-available {
  text-align: center;
  width: calc(100% - 30px);
  padding-top: 20px;
  display: none;
}

.door-open-text {
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background-color: #124E05;
  border: 3px solid #2F3D8D;
  border-radius: 30px;
  padding: 5px 10px;
  width: 100%;
}

.door-locked {
  text-align: center;
  width: calc(100% - 30px);
}

.progress-section {
  max-width: 32rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  border: 3px solid #2F3D8D;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  font-size: 14px;
  display: none;
}

.progress-info {
  display: flex;
  justify-content: flex-end;
  margin-bottom: .5rem;
  color: #407ec9;
  font-weight: 600;
  font-size: 16px;
}

.progress-bar {
  width: 100%;
  background: #124E05;
  border-radius: 9999px;
  height: 20px;
  overflow: hidden;
}

.progress-sleigh {
  display: flex;
  align-items: flex-start;
  margin-top: 5px;
}

.progress-sleigh svg {
  position: relative;
  margin-left: -10px;
}

.progress-fill {
  height: 100%;
  background-color: #AE1F23;
  transition: width 1s ease-out;
  position: relative;
}

.advent-modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(13,93,156,.6);
  z-index: 99999;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.advent-modal.show {
  display: flex !important;
}

.advent-modal-content {
  background-image: url('https://thetoyshop.com/medias/edited-photo.png?context=bWFzdGVyfHJvb3R8MjQyMDQ1fGltYWdlL3BuZ3xhRFl4TDJoaE15OHhNamcyTkRFM01UQXhOakl5TWk5bFpHbDBaV1F0Y0dodmRHOHVjRzVufDFmNTc2OWIxZjI1NGEwNDMzZTk1MDRjZTI2NzM1YjIwYjRkMTJmZjAxMDY2YjBlNGFjZjlhNTI2NmVjMjRhNzk');
  background-size: cover;
  max-width: 28rem;
  width: 100%;
  max-height: 90vh;
  border-radius: 1rem;
  color: white;
  position: relative;
  margin: auto;
  border: 3px solid #fff;
  animation: modal-bounce .6s ease-out;
  overflow: hidden;
}

@keyframes modal-bounce {
  0% { transform: scale(.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.modal-close {
  position: absolute;
  top: .5rem;
  right: .5rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: .5rem;
  border-radius: .25rem;
  z-index: 10;
}

.modal-body {
  padding: 2rem;
  text-align: center;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.offer-image {
  width: 70%;
  height: auto;
  margin: 0 auto 1rem;
  overflow: hidden;
  background: #2F3D8D;
  padding: 4px;
  position: relative;
}

.offer-image img {
  width: 100%;
  height: auto;
}

.offer-image .worth {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #fff;
  background-color: #001533;
  padding: 2px 10px;
  border-radius: 8px;
  font-family: "Nunito Bold","Tahoma Bold",sans-serif;
}

.offer-day {
  font-size: 45px;
  line-height: 50px;
  font-family: "ice-cream-standard", sans-serif;
  color: #fff;
  filter: drop-shadow(4px 4px #021833);
  margin: 0 0 20px;
}

.offer-title {
  margin: 10px auto;
  width: 75%;
}

.offer-title img {
  margin: 0 auto;
  width: 100%;
}

.offer-discount-box {
  padding: 10px 10px 20px;
  margin-bottom: 20px;
  background: #2F3D8D;
  background-size: cover;
  background-position: center;
  box-shadow: inset .2em .2em .2em 0 rgba(255,255,255,.5), inset -.2em -.2em .2em 0 rgba(0,0,0,.5);
  position: relative;
}

.offer-discount {
  font-size: 34px;
  line-height: 34px;
  margin-bottom: 0;
  color: #fff;
  font-family: "ice-cream-standard", sans-serif;
}

#offer-description {
  font-size: 20px;
  color: #fff;
  font-family: "Nunito Bold","Tahoma Bold",sans-serif;
  text-shadow: 0 0 8px rgba(0,0,0,1);
  filter: drop-shadow(0 0 4px #021833);
  margin-top: 5px;
}

.offer-code-box {
  margin-bottom: 20px;
  font-size: 32px;
  padding: 10px 10px 20px;
  background: #2F3D8D;
  background-size: cover;
  background-position: center;
  box-shadow: inset .2em .2em .2em 0 rgba(255,255,255,.5), inset -.2em -.2em .2em 0 rgba(0,0,0,.5);
  font-family: "ice-cream-standard", sans-serif;
  position: relative;
}

.offer-code-box p {
  font-size: 20px;
  color: #fff;
}

.offer-code-box.hide p {
  display: none;
}

.offer-code-box.vanish {
  display: none;
}

.offer-code {
  font-size: 32px;
  color: #fff;
  font-family: "Nunito Bold","Tahoma Bold",sans-serif;
  text-shadow: 0 0 8px rgba(0,0,0,1);
  filter: drop-shadow(0 0 4px #021833);
  cursor: pointer;
}

.offer-code-box.hide .offer-code {
  font-size: 20px;
}

.offer-code-box .offer-code-copy {
  display: none;
  font-size: 18px;
  border-radius: 8px;
}

.offer-code-box.copied .offer-code-copy {
  display: block;
  background-image: url('https://thetoyshop.com//medias/Frame.png?context=bWFzdGVyfHJvb3R8NzgxODN8aW1hZ2UvcG5nfGFEQTNMMmcyTUM4eE1qWTBPVFE0TXpRek5qQTJNaTlHY21GdFpTNXdibWN8YzdiNjBlY2I0YTcyNGU5MTI4YjIyNWU3YjljM2Q3ZTg2YmViNThiMWRiOGU2MDg5NGI4Mzg3MWU2NDAwYzFmMA');
  background-size: cover;
  padding: 10px;
  width: 80%;
  box-shadow: 0 0 8px rgba(3,33,33,.3);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
}

.modal-actions {
  display: flex;
  gap: 30px;
}

.hero-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #fff;
  color: #072442;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  height: 40px;
  box-shadow: 0 0 5px rgba(3,33,33,.3);
  transition: all .3s;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.hero-button:hover {
  background-color: #072442;
  transform: scale(1.05);
  box-shadow: 0 0 18px rgba(3,33,33,.3);
  color: #fff;
}

.xavailable {
  position: absolute;
  top: -60px;
  right: -10px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: #001533;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  box-shadow: inset .2em .2em .2em 0 rgba(255,255,255,.5), inset -.2em -.2em .2em 0 rgba(0,0,0,.5);
  text-align: center;
}

.xavailable {
  font-size: 12px;
}

.xavailable.hide {
  display: none;
}

.main-terms {
  text-align: center;
  margin-bottom: 20px;
}

.footer-image {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.footer-image img {
  display: block;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
}

.coming-soon {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: var(--coming-soon-text-color);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
  font-family: "ice-cream-standard", sans-serif;
  background: rgba(var(--coming-soon-background-color), .75);
  background-size: cover;
  background-position: center;
  box-shadow: inset .2em .2em .2em 0 rgba(255,255,255,.5), inset -.2em -.2em .2em 0 rgba(0,0,0,.5);
  text-shadow: 0 0 8px rgba(0,0,0,1);
  letter-spacing: 1px;
  line-height: 1.1;
}

.available .coming-soon {
  display: none;
}

.inactive-offer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--highlight-color), .85);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  line-height: 2.8rem;
  color: inherit;
  font-family: "ice-cream-standard", sans-serif;
  z-index: 9;
  text-align: center;
  padding: 20px;
  text-shadow: 0 0 8px rgba(0,0,0,1);
}

@media (max-width: 768px) {
  .advent-wrapper {
    background-image: url('MOBILE_BACKGROUND_IMAGE');
  }

  .offer-discount {
    font-size: 35px;
    line-height: 35px;
  }

  .progress-section {
    width: 100%;
  }

  .modal-body {
    padding: 1rem;
  }

  .heading-area {
    justify-content: center;
  }

  .hero-instructions {
    font-size: 14px;
  }

  .hero-instructions .instruction {
    width: 100%;
  }

  .calendar-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-info {
    justify-content: space-between;
    gap: 1rem;
  }

  .modal-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .calendar-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@keyframes bang {
  from {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
}

i {
  position: absolute;
  display: block;
  left: 50%;
  top: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
`;

function escapeScript(value) {
  return String(value || "").replace(/<\/script/gi, "<\\/script");
}

function escapeAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getBackgroundStyle(image, color) {
  var style = "";

  if (color) {
    style += "background-color:" + escapeAttribute(color) + ";";
  }

  if (image) {
    style +=
      "background-image:url('" +
      escapeAttribute(image) +
      "');";
  }

  return style;
}

function getStartDateValue(startDate, openingTime) {
  if (!startDate) {
    return null;
  }

  var date = new Date(startDate);

  if (isNaN(date.getTime())) {
    return null;
  }

  var timeParts = String(openingTime || "09:00").split(":");
  var hours = parseInt(timeParts[0], 10);
  var minutes = parseInt(timeParts[1], 10);

  if (isNaN(hours)) {
    hours = 9;
  }

  if (isNaN(minutes)) {
    minutes = 0;
  }

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes,
    0,
    0
  );
}

function getDoorAvailableDate(
  startDate,
  availabilityDay,
  openingTime
) {
  var start = getStartDateValue(
    startDate,
    openingTime
  );

  if (!start) {
    return null;
  }

  var availableDate = new Date(start);

  availableDate.setDate(
    availableDate.getDate() + (availabilityDay - 1)
  );

  return availableDate;
}

function isDoorAvailable(
  startDate,
  availabilityDay,
  openingTime,
  allDoorsAvailable
) {
  if (allDoorsAvailable === true) {
    return true;
  }

  var availableDate = getDoorAvailableDate(
    startDate,
    availabilityDay,
    openingTime
  );

  if (!availableDate) {
    return false;
  }

  return new Date() >= availableDate;
}

function isDoorToday(
  startDate,
  availabilityDay,
  openingTime,
  allDoorsAvailable
) {
  if (allDoorsAvailable === true) {
    return false;
  }

  var availableDate = getDoorAvailableDate(
    startDate,
    availabilityDay,
    openingTime
  );

  if (!availableDate) {
    return false;
  }

  var now = new Date();

  return (
    now.getFullYear() === availableDate.getFullYear() &&
    now.getMonth() === availableDate.getMonth() &&
    now.getDate() === availableDate.getDate()
  );
}

function isDoorPast(
  startDate,
  availabilityDay,
  openingTime,
  allDoorsAvailable,
  totalDoors
) {
  if (allDoorsAvailable === true) {
    return false;
  }

  if (availabilityDay >= totalDoors) {
    return false;
  }

  var nextDoorDate = getDoorAvailableDate(
    startDate,
    availabilityDay + 1,
    openingTime
  );

  if (!nextDoorDate) {
    return false;
  }

  return new Date() >= nextDoorDate;
}


function buildCMSHTML(props) {
  var offers = props.offers || DEFAULT_OFFERS;
  var startDate = props.startDate || "2025-12-04";
  var allDoorsAvailable = props.allDoorsAvailable === true;

  var openingTime = props.openingTime || "09:00";

  var doorLockedImage = props.doorLockedImage || "";

  var modalTextColor = props.modalTextColor || "#fff";

  var modalBorderColor = props.modalBorderColor || "#1f2b91";

  var ctaBackgroundColor = props.ctaBackgroundColor || "#009E44";
  var ctaColor = props.ctaColor || "#fff";

  var exportStartDate = startDate;

  var highlightColor = props.highlightColor || "#B6985A";

  var comingSoonTextColor =
    props.comingSoonTextColor || "#fff";

  var comingSoonBackgroundColor =
    props.comingSoonBackgroundColor || "#B6985A";
    var hex = highlightColor.replace("#", "");
    var highlightRgb =
      parseInt(hex.substring(0, 2), 16) + ", " +
      parseInt(hex.substring(2, 4), 16) + ", " +
      parseInt(hex.substring(4, 6), 16);

  var comingSoonHex = comingSoonBackgroundColor.replace("#", "");

  var comingSoonBackgroundRgb =
    parseInt(comingSoonHex.substring(0, 2), 16) + ", " +
    parseInt(comingSoonHex.substring(2, 4), 16) + ", " +
    parseInt(comingSoonHex.substring(4, 6), 16);

  var generatedAdventCSS = adventCSS
    .replace(
      "BACKGROUND_IMAGE",
      escapeAttribute(props.backgroundImage || "")
    )
    .replace(
      "MOBILE_BACKGROUND_IMAGE",
      escapeAttribute(
        props.backgroundImageMobile ||
          props.backgroundImage ||
          ""
      )
    )
    .replace(
      "HIGHLIGHT_COLOR",
      highlightRgb
    )
    .replace(
      "COMING_SOON_TEXT_COLOR",
      props.comingSoonTextColor || "#fff"
    )
    .replace(
    "COMING_SOON_BACKGROUND_COLOR",
    comingSoonBackgroundRgb
  );

  if (startDate instanceof Date) {
    exportStartDate =
      startDate.getFullYear() +
      "-" +
      String(startDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(startDate.getDate()).padStart(2, "0");
  } else if (
    typeof startDate === "number" ||
    /^\d+$/.test(String(startDate))
  ) {
    var timestampDate = new Date(Number(startDate));

    if (!isNaN(timestampDate.getTime())) {
      exportStartDate =
        timestampDate.getFullYear() +
        "-" +
        String(timestampDate.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(timestampDate.getDate()).padStart(2, "0");
    }
  } else {
    var parsedStartDate = new Date(startDate);

    if (!isNaN(parsedStartDate.getTime())) {
      exportStartDate =
        parsedStartDate.getFullYear() +
        "-" +
        String(parsedStartDate.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(parsedStartDate.getDate()).padStart(2, "0");
    }
  }

  var safeOffers = JSON.stringify(offers)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  var wrapperStyle = "";

  if (props.backgroundColor) {
    wrapperStyle =
      "background-color:" +
      escapeAttribute(props.backgroundColor) +
      ";";
  }

  var modalStyle = getBackgroundStyle(
    props.modalBackgroundImage,
    props.modalBackgroundColor,
  );

  var modalBoxesStyle = getBackgroundStyle(
    props.modalBoxesBackgroundColor
  );

  var modalBoxesTextColor =
  "color:" + (props.modalBoxesTextColor || "#fff") + ";";

  var headerHTML = "";

  if (props.headerImage) {
    headerHTML =
      '<div class="header-image">' +
      '<picture>' +
      (props.headerImageMobile
        ? '<source media="(max-width: 768px)" srcset="' +
          escapeAttribute(props.headerImageMobile) +
          '" />'
        : "") +
      '<img src="' +
      escapeAttribute(props.headerImage) +
      '" alt="" />' +
      "</picture>" +
      "</div>";
  } else {
    if (props.heading) {
      headerHTML +=
        '<div class="heading-area">' +
        '<div class="hero-title" style="color:' + props.headingColor + '">' +
        props.heading +
        "</div>" +
        "</div>";
    }

    if (props.instructions) {
      headerHTML +=
        '<div class="hero-instructions" style="color:' + props.instructionsColor + '">' +
        props.instructions +
        "</div>";
    }
  }

  function getDoorImage(value) {
    if (!value) {
      return "";
    }

    var stringValue = String(value);

    if (stringValue.indexOf("<img") !== -1) {
      return stringValue;
    }

    return (
      '<img src="' +
      escapeAttribute(stringValue) +
      '" alt="" />'
    );
  }

  function getDoorOpeningTime() {
    var parts = String(openingTime || "").split(":");
    var hour = Number(parts[0]);
    var minute = parts[1] || "00";

    if (isNaN(hour)) {
      return openingTime;
    }

    var suffix = hour >= 12 ? "pm" : "am";
    var displayHour = hour % 12;

    if (displayHour === 0) {
      displayHour = 12;
    }

    if (minute === "00") {
      return displayHour + suffix;
    }

    return displayHour + ":" + minute + suffix;
  }

  function getDoorAvailableDate(dayNumber) {
    var date = new Date(
      exportStartDate + "T" + openingTime + ":00"
    );

    if (isNaN(date.getTime())) {
      return "";
    }

    date.setDate(
      date.getDate() + (dayNumber - 1)
    );

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long"
    });
  }

  function getDoorDate(dayNumber) {
    var date = new Date(exportStartDate + "T" + openingTime + ":00");

    if (isNaN(date.getTime())) {
      return null;
    }

    date.setDate(date.getDate() + (dayNumber - 1));

    return date;
  }

  function isAvailableAtBuildTime(dayNumber) {
    if (allDoorsAvailable === true) {
      return true;
    }

    var date = getDoorDate(dayNumber);

    if (!date) {
      return false;
    }

    return new Date() >= date;
  }

  function isTodayAtBuildTime(dayNumber) {
    if (allDoorsAvailable === true) {
      return false;
    }

    var date = getDoorDate(dayNumber);

    if (!date) {
      return false;
    }

    var now = new Date();

    return (
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth() &&
      now.getDate() === date.getDate()
    );
  }

  var doorHTML = offers
  .map(function (offer) {
    var available = isAvailableAtBuildTime(
      offer.availabilityDay
    );

    var today = isTodayAtBuildTime(
      offer.availabilityDay
    );

    var past = false;

    if (available && offer.availabilityDay < offers.length) {
      var nextDoorDate = getDoorDate(
        offer.availabilityDay + 1
      );

      if (nextDoorDate && new Date() >= nextDoorDate) {
        past = true;
      }
    }

    var doorClass = "calendar-door";

    if (available) {
      doorClass += " available";
    } else {
      doorClass += " locked";
    }

    var doorStyle = "";

    if (!available && doorLockedImage) {
      doorStyle +=
        "background-image:url('" +
        escapeAttribute(doorLockedImage) +
        "');";
    }

    if (today) {
      doorClass += " today";
    }

    if (past) {
      doorClass += " past";
    }

    var contentHTML =
      '<div class="door-content">';

    if (!available) {
      contentHTML +=
        '<div class="door-number">' +
        offer.dayNumber +
        "</div>";
    }

    if (available) {
      contentHTML +=
        '<div class="door-opened">' +

        '<div class="door-image">' +

        getDoorImage(
          offer.mainImage || offer.modalImage
        ) +

        (offer.worth
          ? '<div class="worth">' +
            offer.worth +
            "</div>"
          : "") +

        "</div>" +

        '<div class="door-title">' +

        (offer.title
          ? getDoorImage(offer.title)
          : "") +

        "</div>" +

        '<div class="door-discount">' +
        (offer.discount || "") +
        "</div>" +

        "</div>";
    } else {
      contentHTML +=
        '<div class="door-locked">' +
        '<div class="coming-soon">Open from ' +
        getDoorOpeningTime() +
        ' on ' +
        getDoorAvailableDate(
          offer.availabilityDay
        ) +
        "</div>" +
        "</div>";
    }

    contentHTML += "</div>";

    return (
      '<div class="' +
      doorClass +
      '" ' +
      'style="' +
        doorStyle +
        '" ' +
      'data-day="' +
      escapeAttribute(offer.day) +
      '" ' +
      'data-element-type="universal-advent-calendar" ' +
      'data-promotion-index="' +
      escapeAttribute(
        offer.dayNumber
      ) +
      
      '">' +
      contentHTML +
      "</div>"
    );
  })
  .join("");

  var js = `
    var adventOffers = ${safeOffers};
    var adventStartDate = '${escapeScript(exportStartDate)}';
    var adventOpeningTime = '${escapeScript(openingTime)}';
    var adventDoorLockedImage = '${escapeScript(doorLockedImage)}';
    var adventAllDoorsAvailable = ${allDoorsAvailable ? "true" : "false"};
    var selectedDoor = null;

    function adventGetDoorDate(dayNumber) {
      if (adventAllDoorsAvailable === true) {
        return null;
      }

      var date = new Date(adventStartDate + 'T' + adventOpeningTime + ':00');

      if (isNaN(date.getTime())) {
        return null;
      }

      date.setDate(date.getDate() + (Number(dayNumber) - 1));

      return date;
    }

    function adventIsDateAvailable(dayNumber) {
      if (adventAllDoorsAvailable === true) {
        return true;
      }

      var date = adventGetDoorDate(dayNumber);

      if (!date) {
        return false;
      }

      return new Date() >= date;
    }

    function adventIsDoorPast(dayNumber) {
      if (adventAllDoorsAvailable === true) {
        return false;
      }

      if (Number(dayNumber) >= adventOffers.length) {
        return false;
      }

      var nextDoorDate = adventGetDoorDate(
        Number(dayNumber) + 1
      );

      if (!nextDoorDate) {
        return false;
      }

      return new Date() >= nextDoorDate;
    }

        function refreshAdventDoors() {
      var doors = document.querySelectorAll(
        '.advent-wrapper .calendar-door'
      );

      for (var i = 0; i < doors.length; i++) {
        var door = doors[i];
        var day = door.getAttribute('data-day');
        var offer = null;

        for (var j = 0; j < adventOffers.length; j++) {
          if (
            String(adventOffers[j].day) ===
            String(day)
          ) {
            offer = adventOffers[j];
            break;
          }
        }

        if (!offer) {
          continue;
        }

        var available = adventIsDateAvailable(
          offer.availabilityDay
        );

        var past = adventIsDoorPast(
          offer.availabilityDay
        );

        var doorDate = adventGetDoorDate(
          offer.availabilityDay
        );

        var now = new Date();

        if (
          available &&
          doorDate &&
          doorDate.getFullYear() === now.getFullYear() &&
          doorDate.getMonth() === now.getMonth() &&
          doorDate.getDate() === now.getDate()
        ) {
          door.classList.add('today');
        } else {
          door.classList.remove('today');
        }

        if (available) {
          door.classList.remove('locked');
          door.classList.add('available');

          if (past) {
            door.classList.add('past');
          } else {
            door.classList.remove('past');
          }

          if (
            door.classList.contains('opened')
          ) {
            continue;
          }


          var opened = door.querySelector(
            '.door-opened'
          );

          var locked = door.querySelector(
            '.door-locked'
          );

          if (locked) {
            locked.style.display = 'none';
          }

          if (!opened) {
            var content =
              door.querySelector('.door-content');

            if (content) {
              var offerImage =
                getOfferImage(
                  offer.mainImage || offer.modalImage
                );

              content.innerHTML =
                '<div class="door-opened">' +
                  '<div class="door-image">' +
                    offerImage +
                    (
                      offer.worth
                        ? '<div class="worth">' +
                          offer.worth +
                          '</div>'
                        : ''
                    ) +
                  '</div>' +
                  '<div class="door-title">' +
                    (
                      offer.title
                        ? getOfferImage(
                            offer.title
                          )
                        : ''
                    ) +
                  '</div>' +
                  '<div class="door-discount">' +
                    (offer.discount || '') +
                  '</div>' +
                '</div>';
            }
          }
        }
      }

      updateProgress();
    }

    function handleDoorClick(day) {
      var offer = null;

      for (var i = 0; i < adventOffers.length; i++) {
        if (String(adventOffers[i].day) === String(day)) {
          offer = adventOffers[i];
          break;
        }
      }

      if (!offer) {
        return;
      }

      if (!adventIsDateAvailable(offer.availabilityDay)) {
        return;
      }

      if (adventIsDoorPast(offer.availabilityDay)) {
        return;
      }

      selectedDoor = offer.day;

      var door = document.querySelector(
        '.advent-wrapper [data-day="' + offer.day + '"]'
      );

      if (door) {
        door.classList.remove('available');
        door.classList.add('opened');
      }

      showOffer(offer.day);
      updateProgress();
    }

    function setupDoorListeners() {
      var doors = document.querySelectorAll(
        '.advent-wrapper .calendar-door'
      );

      for (var i = 0; i < doors.length; i++) {
        doors[i].addEventListener('click', function() {
          handleDoorClick(this.getAttribute('data-day'));
        });
      }
    }

    function showOffer(day) {
      var offer = null;

      for (var i = 0; i < adventOffers.length; i++) {
        if (String(adventOffers[i].day) === String(day)) {
          offer = adventOffers[i];
          break;
        }
      }

      if (!offer) {
        return;
      }

      selectedDoor = day;

      var modal = document.getElementById('offer-modal');

      if (!modal) {
        return;
      }

      var image = document.getElementById('offer-image');
      var dayNumber = document.getElementById('offer-day-number');
      var title = document.getElementById('offer-title');
      var discount = document.getElementById('offer-discount');
      var description = document.getElementById('offer-description');
      var code = document.getElementById('offer-code');
      var action = document.getElementById('offer-action');
      var terms = document.getElementById('offer-terms');
      var inactive = document.getElementById('offer-inactive');
      var codeBox = document.getElementById('offer-code-box');
      var xAvailable = document.getElementById('offer-xavailable');

      if (image) {
        image.innerHTML = getOfferImage(offer.modalImage || offer.mainImage);
      }

      if (dayNumber) {
        dayNumber.textContent = 'Day ' + offer.dayNumber;
      }

      if (title) {
        title.innerHTML = getOfferImage(offer.title);
      }

      if (discount) {
        discount.innerHTML = offer.discount || '';
      }

      if (description) {
        description.innerHTML = offer.description || '';
      }

      if (code) {
        code.textContent = offer.code || '';
      }

      if (action) {
        if (offer.link) {
          action.href = offer.link;
          action.textContent = offer.linkText || 'Shop Now';
          action.style.display = '';
        } else {
          action.style.display = 'none';
        }
      }

      if (terms) {
        terms.innerHTML = offer.terms || '';
      }

      if (inactive) {
        inactive.innerHTML =
          "Sorry all today's gifts have been claimed";
        inactive.style.display = offer.inactive ? '' : 'none';
      }

      if (codeBox) {
        codeBox.classList.remove('used');
        codeBox.classList.remove('hide');
        codeBox.classList.remove('vanish');

        if (!offer.code) {
          codeBox.classList.add('vanish');
        }
      }

      if (xAvailable) {
        if (offer.xavailable) {
          xAvailable.classList.remove('hide');
          xAvailable.innerHTML = offer.xavailable;
        } else {
          xAvailable.classList.add('hide');
        }
      }

      for (var i = 0; i < 70; i++) {
        var confetti = document.createElement('i');

        confetti.style.cssText =
          'left:' +
          Math.random() * 100 +
          '%;' +
          'transform:translate3d(' +
          (Math.random() * 500 - 250) +
          'px,' +
          (Math.random() * 200 - 50) +
          'px,0) rotate(' +
          Math.random() * 360 +
          'deg);' +
          'background:#DAB96A;' +
          'animation:bang 1.5s ease-out forwards;' +
          'opacity:0;';

        modal.appendChild(confetti);
      }

      modal.classList.add('show');

      var copyCode = document.getElementById('offer-code');

      if (copyCode) {
        copyCode.onclick = function() {
          if (!offer.code) {
            return;
          }

          if (
            navigator.clipboard &&
            navigator.clipboard.writeText
          ) {
            navigator.clipboard.writeText(offer.code);
          }

          if (codeBox) {
            codeBox.classList.add('copied');

            setTimeout(function() {
              codeBox.classList.remove('copied');
            }, 2000);
          }
        };
      }
    }

    function getOfferImage(value) {
      if (!value) {
        return '';
      }

      var stringValue = String(value);

      if (stringValue.indexOf('<img') !== -1) {
        return stringValue;
      }

      return '<img src="' + stringValue + '" alt="" />';
    }

    function closeOffer() {
      var modal = document.getElementById('offer-modal');

      if (modal) {
        modal.classList.remove('show');
      }

      selectedDoor = null;
    }

    function updateProgress() {
      var doorsOpened = document.querySelectorAll(
        '.advent-wrapper .calendar-door.opened'
      ).length;

      var total = adventOffers.length;
      var percentage = total
        ? (doorsOpened / total) * 100
        : 0;

      var count = document.getElementById('doors-opened');
      var progress = document.getElementById('progress-fill');
      var sleigh = document.getElementById('progress-sleigh');
      var progressText = document.getElementById(
        'calendar-progress-text'
      );

      if (count) {
        count.textContent = doorsOpened;
      }

      if (progress) {
        progress.style.width = percentage + '%';
      }

      if (sleigh) {
        sleigh.style.marginLeft = percentage + '%';
      }

      if (progressText) {
        progressText.textContent =
          doorsOpened + ' of ' + total + ' doors open';
      }
    }

    function setupEventListeners() {
      var closeButton =
        document.getElementById('modal-close') ||
        document.getElementById('offer-modal-close');

      if (closeButton) {
        closeButton.addEventListener('click', closeOffer);
      }

      var modal = document.getElementById('offer-modal');

      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            closeOffer();
          }
        });
      }

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && selectedDoor !== null) {
          closeOffer();
        }
      });
    }

    function showcopy() {
      var modal = document.querySelector('.advent-modal');

      if (!modal) {
        return;
      }

      if (
        modal.className.indexOf('show') > -1 &&
        document.querySelectorAll('.copyinfo').length < 1
      ) {
        var code = modal.querySelector('.offer-code');

        if (code) {
          var info = document.createElement('div');

          info.className = 'copyinfo';

          info.style.cssText =
            'color:#072442;font-size:12px;margin-bottom:-18px;font-family:Nunito Bold;';

          info.textContent = 'click to copy code';

        }
      } else {
        var copyInfo = document.querySelectorAll('.copyinfo');

        for (var i = 0; i < copyInfo.length; i++) {
          copyInfo[i].parentNode.removeChild(copyInfo[i]);
        }
      }
    }

    function initAdventCalendar() {
      setupDoorListeners();
      updateProgress();
      setupEventListeners();
      refreshAdventDoors();

      setInterval(function() {
        refreshAdventDoors();
      }, 30000);

      var modal = document.querySelector('.advent-modal');

      if (modal && typeof MutationObserver !== 'undefined') {
        showcopy();

        var mutshowcopy = new MutationObserver(function() {
          setTimeout(showcopy, 200);
        });

        mutshowcopy.observe(modal, {
          attributes: true,
          attributeFilter: ['class']
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener(
        'DOMContentLoaded',
        initAdventCalendar
      );
    } else {
      initAdventCalendar();
    }
  `;

  return `
    <style>${generatedAdventCSS}</style>

    <div class="advent-wrapper" style="${wrapperStyle}">
      <div class="advent-container">

        <div class="hero">
          <div class="hero-icons">
            ${headerHTML}

            <div class="progress-section">
              <div class="progress-bar">
                <div
                  class="progress-fill"
                  id="progress-fill"
                  style="width:0%"
                ></div>
              </div>

              <div
                class="progress-text"
                id="calendar-progress-text"
              >
                0 of ${offers.length} doors open
              </div>
            </div>
          </div>
        </div>

        <div
          class="calendar-grid"
          id="calendar-grid"
        >
          ${doorHTML}
        </div>

        <div class="main-terms" style="color:${escapeAttribute(props.mainTermsColor || "")}">
          ${escapeScript(
            props.mainTermsLink && props.mainTermsLink.trim() !== ""
              ? '<a href="' + props.mainTermsLink + '" target="_blank" style="color:' + props.mainTermsColor + '">' + props.mainTerms + '</a>'
              : props.mainTerms
          )}
        </div>

        ${props.footerImage
          ? '<div class="footer-image"><picture>' +
            (props.footerImageMobile
              ? '<source media="(max-width: 768px)" srcset="' +
                escapeAttribute(props.footerImageMobile) +
                '" />'
              : "") +
            '<img src="' +
            escapeAttribute(props.footerImage) +
            '" alt="" /></picture></div>'
          : ""}

      </div>
    </div>

    <div
  id="offer-modal"
  class="advent-modal"
>
  <div
    class="advent-modal-content"
    style="${modalStyle} color:${modalTextColor}; border-color:${modalBorderColor}"
  >
    <button
      type="button"
      id="modal-close"
      class="modal-close"
      aria-label="Close"
    >
      &times;
    </button>

    <div
        id="offer-inactive"
        class="inactive-offer"
        style="display:none"
      ></div>

    <div class="modal-body">

      <div
        id="offer-image"
        class="offer-image"
      ></div>

      <h2
        id="offer-day-number"
        class="offer-day"
        style="color:${modalTextColor}; border-color:${modalBorderColor}"
      ></h2>

      <h3
        id="offer-title"
        class="offer-title"
      ></h3>

      <div class="offer-discount-box" style="${modalBoxesStyle}">

        <div
          id="offer-discount"
          class="offer-discount"
          style="${modalBoxesTextColor}"
        ></div>

        <div id="offer-description"
          style="${modalBoxesTextColor}"
        ></div>

        <div
          id="offer-xavailable"
          class="xavailable hide"
        ></div>

      </div>

      <div
        id="offer-code-box"
        class="offer-code-box"
        style="${modalBoxesStyle}"
      >
        <p
          style="${modalBoxesTextColor}"
        >
          Use code at checkout:
        </p>

        <div
          id="offer-code"
          class="offer-code"
          style="${modalBoxesTextColor}"
        ></div>

        <div class="offer-code-copy">
          Code copied
        </div>
      </div>

      <div class="modal-actions">

        <a
          id="offer-action"
          class="hero-button"
          style="background-color:${ctaBackgroundColor};color:${ctaColor}"
          href="#"
        >
          Shop Now
        </a>

      </div>

      <p
        id="offer-terms"
        class="offer-terms"
      ></p>

    </div>
  </div>
</div>

    <script>${js}</script>
  `;
}

function buildOffersFromProps(props) {
  var doorNumbers = Object.keys(props)
    .filter(function(key) {
      return /^door\d+$/.test(key) &&
        props[key] &&
        props[key].discount;
    })
    .map(function(key) {
      return Number(key.replace("door", ""));
    })
    .sort(function(a, b) {
      return a - b;
    });

  return doorNumbers.map(function(sourceNumber, index) {
    var source = props["door" + sourceNumber];

    return {
      day: index + 1,
      dayNumber: index + 1,
      availabilityDay: sourceNumber,
      title: source.title,
      discount: source.discount,
      description: source.description,
      code: source.code,
      color: source.color,
      modalImage: source.modalImage,
      mainImage: source.mainImage,
      worth: source.worth,
      link: source.link,
      linkText: source.linkText,
      terms: source.terms,
      xavailable: source.xavailable,
      inactive: source.inactive
    };
  });
}

function getPreviewDate(startDate) {
  if (!startDate) {
    return new Date();
  }

  var date = new Date(startDate);

  if (isNaN(date.getTime())) {
    return new Date();
  }

  return date;
}

function formatOpeningTime(openingTime) {
  var parts = String(openingTime || "09:00").split(":");
  var hours = parseInt(parts[0], 10);
  var minutes = parseInt(parts[1], 10);

  if (isNaN(hours)) {
    hours = 9;
  }

  if (isNaN(minutes)) {
    minutes = 0;
  }

  var suffix = hours >= 12 ? "pm" : "am";
  var displayHours = hours % 12 || 12;

  if (minutes === 0) {
    return displayHours + suffix;
  }

  return (
    displayHours +
    ":" +
    String(minutes).padStart(2, "0") +
    suffix
  );
}

function getDoorOpeningLabel(
  startDate,
  dayNumber,
  openingTime
) {
  var date = getDoorAvailableDate(
    startDate,
    dayNumber,
    openingTime
  );

  if (!date) {
    return "";
  }

  var today = new Date();

  var isToday =
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate();

  if (isToday) {
    return "Open from " + formatOpeningTime(openingTime);
  }

  return (
    "Open from " +
    formatOpeningTime(openingTime) +
    " " +
    date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short"
    })
  );
}

export function AdventCalendar(props) {

  var offers = useMemo(
    function() {
      return buildOffersFromProps(
        props
      );
    },
    [props]
  );

  var cmsHTML = useMemo(
    function() {

      return buildCMSHTML({

        heading:
          props.heading,

        headingColor:
          props.headingColor,

        instructions:
          props.instructions,

        instructionsColor:
          props.instructionsColor,

        headerImage:
          props.headerImage,

        headerImageMobile:
          props.headerImageMobile,

        backgroundImage:
          props.backgroundImage,

        backgroundImageMobile:
          props.backgroundImageMobile,

        footerImage:
          props.footerImage,

        footerImageMobile:
          props.footerImageMobile,

        backgroundColor:
          props.backgroundColor,

        doorLockedImage:
          props.doorlockedimage,

        highlightColor:
          props.highlightColor,

        comingSoonTextColor:
          props.comingSoonTextColor,

        comingSoonBackgroundColor:
          props.comingSoonBackgroundColor,

        modalBackgroundImage:
          props.modalBackgroundImage,

        modalBackgroundColor:
          props.modalBackgroundColor,

        modalTextColor:
          props.modalTextColor,

        modalBorderColor:
          props.modalBorderColor,

        modalBoxesBackgroundColor:
          props.modalBoxesBackgroundColor,

        modalBoxesTextColor:
          props.modalBoxesTextColor,

        ctaColor:
          props.ctaColor,

        ctaBackgroundColor: 
          props.ctaBackgroundColor,

        mainTerms:
          props.mainTerms,

        mainTermsLink:
          props.mainTermsLink,

        mainTermsColor:
          props.mainTermsColor,

        startDate:
          props.startDate,

        openingTime:
          props.openingTime,

        allDoorsAvailable:
          props.allDoorsAvailable,

        offers:
          offers
      });

    },
    [
      props.heading,
      props.headingColor,
      props.instructions,
      props.instructionsColor,
      props.headerImage,
      props.headerImageMobile,
      props.backgroundImage,
      props.backgroundImageMobile,
      props.footerImage,
      props.footerImageMobile,
      props.backgroundColor,
      props.doorlockedimage,
      props.highlightColor,
      props.comingSoonTextColor,
      props.comingSoonBackgroundColor,
      props.modalBackgroundImage,
      props.modalBackgroundColor,
      props.modalBorderColor,
      props.modalTextColor,
      props.modalBoxesBackgroundColor,
      props.modalBoxesTextColor,
      props.ctaColor,
      props.ctaBackgroundColor,
      props.mainTerms,
      props.mainTermsLink,
      props.mainTermsColor,
      props.startDate,
      props.openingTime,
      props.allDoorsAvailable,
      offers
    ]
  );

  var [selectedDoor, setSelectedDoor] =
    useState(null);

  var [showModal, setShowModal] =
    useState(false);

  var previewRef =
    useRef(null);

  var openDoor =
    function(day, availabilityDay) {
      if (
        !isDoorAvailable(
          props.startDate,
          availabilityDay,
          props.openingTime,
          props.allDoorsAvailable
        )
      ) {
        return;
      }

      if (
        isDoorPast(
          props.startDate,
          availabilityDay,
          props.openingTime,
          props.allDoorsAvailable,
          offers.length
        )
      ) {
        return;
      }

      setSelectedDoor(day);
      setShowModal(true);
  };

  var selectedOffer =
    offers.find(
      function(offer) {
        return (
          offer.day ===
          selectedDoor
        );
      }
    ) || null;

  var previewDate =
    getPreviewDate(
      props.startDate
    );

  var openedDoors =
    offers.filter(
      function(offer) {
        return isDoorAvailable(
          props.startDate,
          offer.availabilityDay,
          props.openingTime,
          props.allDoorsAvailable
        );
      }
    ).length;

  var progressPercentage =
    Math.min(
      (openedDoors / offers.length) * 100,
      100
    );

  var wrapperStyle = {};

  if (props.backgroundColor) {
    wrapperStyle.backgroundColor =
      props.backgroundColor;
  }

  var modalStyle = {};

  var modalBoxesStyle = {};

  var ctaStyle = {};

  if (props.modalBackgroundColor) {
    modalStyle.backgroundColor =
      props.modalBackgroundColor;
  }

  if (props.modalBorderColor) {
    modalStyle.borderColor = props.modalBorderColor;
  }

  if (props.modalTextColor) {
    modalStyle.color = props.modalTextColor;
  }

  if (props.modalBoxesBackgroundColor) {
    modalBoxesStyle.backgroundColor =
      props.modalBoxesBackgroundColor;
  }

  if (props.modalBoxesTextColor) {
    modalBoxesStyle.color = props.modalBoxesTextColor;
  }

  if (props.ctaColor) {
    ctaStyle.color = props.ctaColor;
  }

  if (props.ctaBackgroundColor) {
    ctaStyle.backgroundColor = props.ctaBackgroundColor;
  }

  if (props.modalBackgroundImage) {
    modalStyle.backgroundImage =
      "url('" +
      props.modalBackgroundImage +
      "')";
  }

  var highlightColor = props.highlightColor || "#B6985A";
  var hex = highlightColor.replace("#", "");

  var highlightRgb =
    parseInt(hex.substring(0, 2), 16) + ", " +
    parseInt(hex.substring(2, 4), 16) + ", " +
    parseInt(hex.substring(4, 6), 16);

  var comingSoonBackgroundColor =
    props.comingSoonBackgroundColor || "#B6985A";

  var comingSoonHex =
    comingSoonBackgroundColor.replace("#", "");

  var comingSoonBackgroundRgb =
    parseInt(comingSoonHex.substring(0, 2), 16) + ", " +
    parseInt(comingSoonHex.substring(2, 4), 16) + ", " +
    parseInt(comingSoonHex.substring(4, 6), 16);

  var generatedAdventCSS = adventCSS
    .replace(
      "BACKGROUND_IMAGE",
      escapeAttribute(props.backgroundImage || "")
    )
    .replace(
      "MOBILE_BACKGROUND_IMAGE",
      escapeAttribute(
        props.backgroundImageMobile ||
          props.backgroundImage ||
          ""
      )
    )
    .replace(
      "HIGHLIGHT_COLOR",
      highlightRgb
    )
    .replace(
      "COMING_SOON_TEXT_COLOR",
      props.comingSoonTextColor || "#fff"
    )
    .replace(
      "COMING_SOON_BACKGROUND_COLOR",
      comingSoonBackgroundRgb
    );

  return (
    <div>

      <style
        dangerouslySetInnerHTML={{
          __html: generatedAdventCSS
        }}
      />

      <div
        className="advent-wrapper"
        ref={previewRef}
        style={wrapperStyle}
      >

        <div className="advent-container">

          <div className="hero">

            <div className="hero-icons">

              {props.headerImage ? (

                <div className="header-image">

                  <picture>

                    {props.headerImageMobile && (
                      <source
                        media="(max-width: 768px)"
                        srcSet={props.headerImageMobile}
                      />
                    )}

                    <img
                      src={props.headerImage}
                      alt=""
                    />

                  </picture>

                </div>

              ) : (

                <>
                  {props.heading && (
                    <div className="heading-area">

                      <h1 className="hero-title" style={{color: props.headingColor}}>
                        {props.heading}
                      </h1>

                    </div>
                  )}

                  {props.instructions && (
                    <div className="hero-instructions" style={{color: props.instructionsColor}}>
                      {props.instructions}
                    </div>
                  )}
                </>

              )}

              <div className="progress-section">

                <div className="hero-info">

                  <span>
                    December{" "}
                    {previewDate.getDate()},
                    {previewDate.getFullYear()}
                  </span>

                  <span>
                    {openedDoors}/{offers.length}
                    doors opened
                  </span>

                </div>

                <div
                  className="progress-sleigh"
                  style={{
                    marginLeft:
                      progressPercentage +
                      "%"
                  }}
                >
                  🛷
                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width:
                        progressPercentage +
                        "%"
                    }}
                  />

                </div>

              </div>

            </div>

            <div className="calendar-grid">

              {offers.map(
                function(offer) {

                  var available =
                    isDoorAvailable(
                      props.startDate,
                      offer.dayNumber,
                      props.openingTime,
                      props.allDoorsAvailable
                    );

                  var today =
                    isDoorToday(
                      props.startDate,
                      offer.dayNumber,
                      props.openingTime,
                      props.allDoorsAvailable
                    );

                  var past =
                    isDoorPast(
                      props.startDate,
                      offer.dayNumber,
                      props.openingTime,
                      props.allDoorsAvailable,
                      offers.length
                    );

                  return (
                    <div
                      key={offer.dayNumber}
                      className={
                        "calendar-door " +
                        (available
                          ? "available"
                          : "locked") +
                        (today
                          ? " today"
                          : "") +
                        (past
                          ? " past"
                          : "")
                      }
                      style={{
                        backgroundImage:
                          "url('" +
                          (
                            props.doorlockedimage) +
                          "')"
                      }}
                      data-day={offer.day}
                      data-element-type="universal-advent-calendar"
                      data-promotion-index={
                        offer.dayNumber
                      }
                      onClick={
                        !past
                          ? function() {
                              openDoor(
                                offer.day,
                                offer.dayNumber
                              );
                            }
                          : undefined
                      }
                    >

                      <div className="door-content">

                        {!available && (
                          <>
                            <div className="door-number">
                              {offer.dayNumber}
                            </div>

                            <div className="coming-soon">
                              {getDoorOpeningLabel(
                                props.startDate,
                                offer.dayNumber,
                                props.openingTime
                              )}
                            </div>
                          </>
                        )}

                        {available && (
                          <div className="door-opened">

                            <div
                              className="door-image"
                              dangerouslySetInnerHTML={{
                                __html:
                                  (offer.mainImage
                                    ? '<div class="door-mainImage"><img src="' +
                                      offer.mainImage +
                                      '" alt="" /></div>'
                                    : '') +
                                  (offer.worth
                                    ? '<div class="worth">' +
                                      offer.worth +
                                      "</div>"
                                    : "")
                              }}
                            />

                            <div className="door-title">

                              {offer.title && (
                                <img
                                  src={offer.title}
                                  alt=""
                                />
                              )}

                            </div>

                            <div className="door-discount">
                              {offer.discount}
                            </div>

                          </div>
                        )}

                      </div>

                    </div>
                  );
                }
              )}

            </div>

            <div className="main-terms" style={{color: props.mainTermsColor}}>
              {props.mainTermsLink && props.mainTermsLink.trim() !== " " ? (
                <a href={props.mainTermsLink} target="_blank" style={{color: props.mainTermsColor}}>
                  {props.mainTerms}
                </a>
              ) : (
                props.mainTerms && props.mainTerms.trim() !== " " && props.mainTerms
              )}
            </div>

            {props.footerImage && (
              <div className="footer-image">
                <picture>
                  {props.footerImageMobile && (
                    <source
                      media="(max-width: 768px)"
                      srcSet={props.footerImageMobile}
                    />
                  )}

                  <img
                    src={props.footerImage}
                    alt=""
                  />
                </picture>
              </div>
            )}

          </div>

        </div>

      </div>

      {showModal &&
        selectedOffer && (

          <div
            id="offer-modal"
            className="advent-modal show"
            onClick={function(event) {

              if (
                event.target ===
                event.currentTarget
              ) {

                setShowModal(false);
                setSelectedDoor(null);

              }
            }}
          >

            <div
              className="advent-modal-content"
              style={modalStyle}
            >

              <button
                className="modal-close"
                onClick={function() {

                  setShowModal(false);
                  setSelectedDoor(null);

                }}
              >
                ×
              </button>

              <div
                  className="inactive-offer"
                  style={{
                    display: selectedOffer.inactive ? "flex" : "none"
                  }}
                >
                  Sorry all today's gifts have been claimed
                </div>

              <div className="modal-body">

                <div
                  className="offer-image"
                  dangerouslySetInnerHTML={{
                    __html:
                      (
                        selectedOffer.modalImage ||
                        selectedOffer.mainImage
                      )
                        ? '<img src="' +
                          (
                            selectedOffer.modalImage ||
                            selectedOffer.mainImage
                          ) +
                          '" alt="" />'
                        : "" +
                          (
                            selectedOffer.worth
                              ? '<div class="worth">' +
                                selectedOffer.worth +
                                "</div>"
                              : ""
                          )
                  }}
                />

                <h2 className="offer-day" style={{color: 'inherit'}}>

                  Day{" "}

                  {selectedOffer.dayNumber}

                </h2>

                <h3 className="offer-title">

                  {selectedOffer.title && (
                    <img
                      src={selectedOffer.title}
                      alt=""
                    />
                  )}

                </h3>

                <div className="offer-discount-box" style={modalBoxesStyle}>

                  <div className="offer-discount" style={{color: 'inherit'}}>
                    {selectedOffer.discount}
                  </div>

                  <div id="offer-description" style={{color: 'inherit'}}>
                    {selectedOffer.description}
                  </div>

                  {selectedOffer.xavailable && (
                    <div className="xavailable">
                      {selectedOffer.xavailable}
                    </div>
                  )}

                </div>

                {selectedOffer.code && (

                  <div className="offer-code-box" style={modalBoxesStyle}>

                    <p style={{color: 'inherit'}}>
                      Use code at checkout:
                    </p>

                    <div className="offer-code" style={{color: 'inherit'}}>
                      {selectedOffer.code}
                    </div>

                  </div>

                )}

                <div className="modal-actions">

                  <a
                    href={
                      selectedOffer.link
                    }
                    className="hero-button"
                    style={ctaStyle}
                  >
                    {selectedOffer.linkText}
                  </a>

                </div>

                <p
                  className="offer-terms"
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedOffer.terms
                  }}
                />

              </div>

            </div>

          </div>

        )}

      <div
        id="849enz"
        className="storybook-advent-export"
        style={{
          display: "none"
        }}
        dangerouslySetInnerHTML={{
          __html: cmsHTML
        }}
      />

    </div>
  );
}

AdventCalendar.propTypes = {

  heading:
    PropTypes.string,
  
  headingColor:
    PropTypes.string,

  instructions:
    PropTypes.string,

  instructionsColor:
    PropTypes.string,

  headerImage:
    PropTypes.string,

  headerImageMobile:
    PropTypes.string,

  backgroundImage:
    PropTypes.string,

  backgroundImageMobile:
    PropTypes.string,

  footerImage:
    PropTypes.string,

  footerImageMobile:
    PropTypes.string,

  backgroundColor:
    PropTypes.string,
  
  doorlockedimage:
    PropTypes.string,

  modalBackgroundImage:
    PropTypes.string,

  modalBackgroundColor:
    PropTypes.string,

  modalTextColor:
    PropTypes.string,

  modalBoxesBackgroundColor:
    PropTypes.string,

  modalBorderColor:
    PropTypes.string,

  modalBoxesTextColor:
    PropTypes.string,

  ctaColor:
    PropTypes.string,

  ctaBackgroundColor:
    PropTypes.string,

  mainTerms:
    PropTypes.string,

  mainTermsLink:
    PropTypes.string,

  mainTermsColor:
    PropTypes.string,

  startDate:
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date)
    ]),

  openingTime:
    PropTypes.string,

  allDoorsAvailable:
    PropTypes.bool,

  offers:
    PropTypes.array
};