import PropTypes from "prop-types";
import { stores } from "./Storeslist";
import { useEffect } from "react";

export const PokemonLaunch = ({ pageBackgroundColor, pageTitleColor, pageTitleStroke, introBlurbColor, panel1Stores = [], panel2Stores = [], panel3Stores = [], panel4Stores = [], panel5Stores = [], panel6Stores = [], pageTitle, introBlurb, secondaryTitle, secondaryTitleColor, panelsBackgroundColor, panelsBorderColor, panelsTextColor, panelsInputColor, panelsInputDetailsHoverColor, panelsInputActiveBorderColor, promoPanelsStoresListHoverBackgroundColor, panelsStoreslistColor, panelsStoresListBorderColor, panelsInputBorderColor, panel1Title, panel2Title, panel3Title, panel4Title, panel5Title, panel6Title, panel1Order, panel2Order, panel3Order, panel4Order, panel5Order, panel6Order, panel1ReleaseDate, panel2ReleaseDate, panel3ReleaseDate, panel4ReleaseDate, panel5ReleaseDate, panel6ReleaseDate, panel1Items, panel2Items, panel3Items, panel4Items, panel5Items, panel6Items, panel1Image, panel2Image, panel3Image, panel4Image, panel5Image, panel6Image, promoPanelsBorderColor, promoPanelsButtonBackgroundColor, promoPanelsButtonTextColor, promoPanelsButtonBorderColor, promoPanelsButtonHoverBackgroundColor, promoPanelsButtonHoverTextColor, promoPanelsButtonHoverBorderColor, promoPanel1Image, promoPanel2Image, promoPanel3Image, promoPanel1Link, promoPanel2Link, promoPanel3Link, promoPanel1LinkText, promoPanel2LinkText, promoPanel3LinkText, promoPanel1LinkHasIcons, promoPanel2LinkHasIcons, promoPanel3LinkHasIcons }) => {
  // Helper function to filter and sort stores alphabetically by short name
const filterAndSortStores = (storeList) => 
  stores
    .filter(store => storeList.includes(store.short))
    .sort((a, b) => a.short.localeCompare(b.short));

// Filter and sort the stores
const filteredStores1 = filterAndSortStores(panel1Stores);
const filteredStores2 = filterAndSortStores(panel2Stores);
const filteredStores3 = filterAndSortStores(panel3Stores);
const filteredStores4 = filterAndSortStores(panel4Stores);
const filteredStores5 = filterAndSortStores(panel5Stores);
const filteredStores6 = filterAndSortStores(panel6Stores);

useEffect(() => {
  document.querySelectorAll(".store-selector").forEach((selector) => {
    const input = selector.querySelector(".store-input");
    const dropdown = selector.querySelector(".store-dropdown");
    const list = selector.querySelector(".store-list");
    const listItems = list.querySelectorAll("li");
    const detailsLink = selector.querySelector(".store-details-selected");
    const searchIcon = selector.querySelector(".store-search-icon");
    const selectedIcon = selector.querySelector(".store-selected-icon");

    searchIcon.hidden = false;
    selectedIcon.hidden = true;

    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      list.querySelectorAll("li").forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "" : "none";
      });

      const firstVisible = Array.from(list.children).find(
        (li) => li.style.display !== "none"
      );
      if (firstVisible) firstVisible.scrollIntoView({ block: "nearest" });
    });

    input.addEventListener("focus", () => {
      dropdown.style.display = "block";
    });

    input.addEventListener("blur", () => {
      setTimeout(() => {
        dropdown.style.display = "none";
      }, 100);
    });

    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        input.value = item.textContent.trim();
        dropdown.style.display = "none";
        searchIcon.hidden = true;
        selectedIcon.hidden = false;

        if (item.dataset.url) {
          detailsLink.href = item.dataset.url;
          detailsLink.hidden = false;
        } else {
          detailsLink.href = "#";
          detailsLink.hidden = true;
        }
      });
    });
  });
}, [stores]);


  return (
    <>
      <style>
        {`
        .breadcrumb-section {
    display: none;
  }
  .payment-rotate {
    margin-bottom: 0;
  }
  #container {
    background-color: ${pageBackgroundColor};
    padding-bottom: 40px;
		font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    margin-top: -1px;
  }

  .container-intro {
    max-width: 980px;
    padding: 20px 20px 0;
    margin: 0 auto;
    text-align: center;
    color: ${introBlurbColor};
  }

  .container-intro h1 {
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: ${pageTitleColor};
    -webkit-text-stroke: 5px ${pageTitleStroke};
    paint-order: stroke fill;
    font-size: 36px;
    line-height: 1.4;
  }

  .container-intro p {
    font-size: 12px;
  }

  .pokeball-header {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
  }

  .pokeball-header-text {
    color: ${secondaryTitleColor};
  }

  .pokeball-header-text h2 {
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 20px;
    margin: 0;
    letter-spacing: 0;
  }

  #moving-container {
    position: relative;
  }

  #moving-container.flipped {
    transform: scaleX(-1);
  }

  .poke-panels {
    margin: 0 auto;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .poke-panel {
    background-color: ${panelsBackgroundColor};
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    border: 3px solid ${panelsBorderColor};
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    color: ${panelsTextColor};
  }

  .poke-panel h3 {
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    margin: 0 0 10px;
    letter-spacing: 0;
  }

  .poke-panel p {
    margin: 0;
  }

  .poke-panel-content {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 5px;
    flex-wrap: nowrap;
  }

  @media (min-width: 1024px) {
    .poke-panel-content {
      width: 60%;
      gap: 20px;
    }
  }

  .poke-panel-image {
    width: 37%;
    flex-shrink: 0;
  }

  .poke-panel-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .poke-contains {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    line-height: 1.4;
  }

  .store-selector {
    width: 100%;
    position: relative;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    .store-selector {
      width: 40%;
      margin-top: 40px;
    }
  }

  .store-input-row {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  .store-input {
    width: 100%;
    padding: 10px 70px 10px 12px;
    border: 2px solid ${panelsInputBorderColor};
    border-radius: 6px;
    font-family: "Nunito Bold", sans-serif;
    padding-left: 36px;
    color: ${panelsInputColor};
    text-align: left;
  }
  .store-input::placeholder {
    color: ${panelsInputColor};
    font-family: "Nunito Bold", sans-serif;
  }

  .store-search-icon {
    position: absolute;
    left: 12px;
    align-items: center;
    pointer-events: none;
  }

  .store-selected-icon {
    position: absolute;
    left: 12px;
    align-items: center;
    pointer-events: none;
  }

  .store-input:focus {
    outline: none;
    border-color: ${panelsInputActiveBorderColor}
  }

  .store-details-selected {
    position: absolute;
    right: 10px;
    font-size: 0.85rem;
    color: ${panelsInputColor};
    text-decoration: none;
    user-select: none;
  }

  .store-details-selected:hover {
    text-decoration: underline;
    color: ${panelsInputDetailsHoverColor};
  }

  /* dropdown */
  .store-dropdown {
    display: none;
    position: absolute;
    top: calc(100% - 22px);
    width: 100%;
    background: #fff;
    border: 2px solid ${panelsStoresListBorderColor};
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 110px;
    z-index: 10;
  }

  .store-scroll-area {
    flex: 1;
    max-height: 100px;
    overflow-y: scroll;
    width: 99%;
  }

  .store-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .store-list li {
    padding: 8px 12px;
    cursor: pointer;
    font-family: "Nunito Bold", sans-serif;
    font-size: 13px;
  }
  .store-list li:hover {
    background: ${promoPanelsStoresListHoverBackgroundColor};
  }

  .poke-promo-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }

  .poke-promo-section .poke-promo-tile {
    width: 100%;
  }

  .poke-promo-section a {
    display: block;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
  }

  .poke-promo-section img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 3px solid ${promoPanelsBorderColor};
  }

  .poke-promo-section .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${promoPanelsButtonBackgroundColor};
    color: ${promoPanelsButtonTextColor};
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 30px 10px 10px;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    border: 3px solid ${promoPanelsButtonBorderColor};
    transition: all 0.3s;
    margin: 20px auto;
    width: 100%;
  }

  .poke-promo-section .hero-button.no-icons {
    padding: 10px;
  }

  .poke-promo-section .hero-button:hover {
    background-color: ${promoPanelsButtonHoverBackgroundColor};
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: ${promoPanelsButtonHoverTextColor};
    border-color: ${promoPanelsButtonHoverBorderColor};
  }

  .poke-promo-section .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .poke-promo-section .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .poke-promo-section .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .poke-promo-section .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .poke-promo-section .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .poke-promo-section .hero-button:hover .swoosh {
    width: 7px;
  }

  .poke-promo-section .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .poke-promo-section .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }

  @media (min-width: 1024px) {
    .poke-promo-section .poke-promo-tile {
      width: calc(100% / 3 - 10px);
    }
  }

  /* pokeball container */
  #pokeball-container {
    width: 20px;
    height: 20px;
    margin: 20px auto;
    animation: spinning 1.5s infinite;
  }

  /* pokeball */
  #pokeball {
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }

  /* top red half */
  #pokeball::before {
    content: "";
    width: 20px;
    height: 10px;
    background: red;
    border-radius: 10px 10px 0 0;
    position: absolute;
  }

  /* middle stripe */
  .pokeball-details {
    width: 20px;
    height: 2px;
    background: #333;
    position: absolute;
    top: 9px;
  }

  /* button */
  .pokeball-details::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: -3.5px;
    left: 6.5px;
    z-index: 200;
  }
  .pokeball-details::after {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: -2.3px;
    left: 7.6px;
    z-index: 250;
    animation: color-change 1.5s infinite;
  }

  /* spinning animation */
  @keyframes spinning {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-45deg);
    }
    60% {
      transform: rotate(45deg);
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  /* color change */
  @keyframes color-change {
    0%,
    100% {
      background: #fff;
    }
    50% {
      background: #30A7D7;
    }
  }

  /* lightning bolts (outside the ball, diagonal) */
  .lightning {
    position: absolute;
    width: 1.2em;
    height: auto;
    opacity: 0;
    top: calc(50% - 5px); /* aligned vertically to middle of ball */
    left: calc(50% + 10px); /* start from right edge of 20px ball */
    transform-origin: bottom left;
    animation: shoot-diagonal 1.5s linear infinite;
  }

  .lightning2 {
    position: absolute;
    width: 1.2em;
    height: auto;
    opacity: 0;
    top: calc(50% - 5px); /* aligned vertically to middle of ball */
    left: calc(50% + 10px); /* start from right edge of 20px ball */
    transform-origin: bottom left;
    animation: shoot-diagonal2 1.5s linear infinite;
  }

  /* synced to ball rotation */
  @keyframes shoot-diagonal {
    0% {
      transform: translate(0, 0) rotate(35deg) scale(0);
      opacity: 0;
    }
    30% {
      transform: translate(0, 0) rotate(35deg) scale(0);
      opacity: 0;
    }
    60% {
      transform: translate(5px, -10px) rotate(35deg) scale(1);
      opacity: 1;
    }
    80% {
      transform: translate(10px, -15px) rotate(35deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(10px, -15px) rotate(35deg) scale(1);
      opacity: 0;
    }
  }
  @keyframes shoot-diagonal2 {
    0% {
      transform: translate(0, 0) rotate(50deg) scale(0);
      opacity: 0;
    }
    30% {
      transform: translate(0, 0) rotate(50deg) scale(0);
      opacity: 0;
    }
    60% {
      transform: translate(5px, -5px) rotate(50deg) scale(1);
      opacity: 1;
    }
    80% {
      transform: translate(10px, -10px) rotate(50deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(15px, -20px) rotate(50deg) scale(0);
      opacity: 0;
    }
  }
        `}
      </style>
      <div id="container">
        <div class="container-intro">
          <h1>{pageTitle}</h1>
          <div dangerouslySetInnerHTML={{__html:introBlurb}} />
        </div>
        {secondaryTitle &&
        <div class="pokeball-header">
          <div id="moving-container" class="flipped">
            <div id="pokeball-container">
              <div id="pokeball">
                <div class="pokeball-details"></div>
              </div>
            </div>

            <div class="lightning lightning1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
              >
                <path
                  d="M6.65431 5.1175C6.81431 5.2075 6.89432 5.3475 6.89432 5.5275C6.89432 5.7075 6.81431 5.8475 6.65431 5.9375L0.704315 9.3375C0.544315 9.4275 0.394315 9.4275 0.234315 9.3375C0.104315 9.2575 0.0243153 9.1475 0.00431532 8.9975C-0.0156847 8.8475 0.0343153 8.7175 0.144315 8.6075L2.82432 5.7875L0.814315 4.6175C0.694315 4.5475 0.614315 4.4375 0.594315 4.3075C0.564315 4.1775 0.594315 4.0475 0.674315 3.9275L3.56432 0.1775C3.63432 0.0775 3.72432 0.0275 3.84432 0.0075C3.96432 -0.0125 4.07432 0.0075 4.17431 0.0675L6.60432 1.4775C6.73432 1.5575 6.81432 1.6675 6.83432 1.8275C6.85432 1.9775 6.80432 2.1075 6.70432 2.2175L4.72432 3.9975L6.66432 5.1275L6.65431 5.1175Z"
                  fill="#FCC80B"
                />
              </svg>
            </div>

            <div class="lightning lightning2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
              >
                <path
                  d="M6.65431 5.1175C6.81431 5.2075 6.89432 5.3475 6.89432 5.5275C6.89432 5.7075 6.81431 5.8475 6.65431 5.9375L0.704315 9.3375C0.544315 9.4275 0.394315 9.4275 0.234315 9.3375C0.104315 9.2575 0.0243153 9.1475 0.00431532 8.9975C-0.0156847 8.8475 0.0343153 8.7175 0.144315 8.6075L2.82432 5.7875L0.814315 4.6175C0.694315 4.5475 0.614315 4.4375 0.594315 4.3075C0.564315 4.1775 0.594315 4.0475 0.674315 3.9275L3.56432 0.1775C3.63432 0.0775 3.72432 0.0275 3.84432 0.0075C3.96432 -0.0125 4.07432 0.0075 4.17431 0.0675L6.60432 1.4775C6.73432 1.5575 6.81432 1.6675 6.83432 1.8275C6.85432 1.9775 6.80432 2.1075 6.70432 2.2175L4.72432 3.9975L6.66432 5.1275L6.65431 5.1175Z"
                  fill="#FCC80B"
                />
              </svg>
            </div>
          </div>
          
          <div class="pokeball-header-text">
            <h2>{secondaryTitle}</h2>
          </div>

          <div id="moving-container">
            <div id="pokeball-container">
              <div id="pokeball">
                <div class="pokeball-details"></div>
              </div>
            </div>

            <div class="lightning lightning1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
              >
                <path
                  d="M6.65431 5.1175C6.81431 5.2075 6.89432 5.3475 6.89432 5.5275C6.89432 5.7075 6.81431 5.8475 6.65431 5.9375L0.704315 9.3375C0.544315 9.4275 0.394315 9.4275 0.234315 9.3375C0.104315 9.2575 0.0243153 9.1475 0.00431532 8.9975C-0.0156847 8.8475 0.0343153 8.7175 0.144315 8.6075L2.82432 5.7875L0.814315 4.6175C0.694315 4.5475 0.614315 4.4375 0.594315 4.3075C0.564315 4.1775 0.594315 4.0475 0.674315 3.9275L3.56432 0.1775C3.63432 0.0775 3.72432 0.0275 3.84432 0.0075C3.96432 -0.0125 4.07432 0.0075 4.17431 0.0675L6.60432 1.4775C6.73432 1.5575 6.81432 1.6675 6.83432 1.8275C6.85432 1.9775 6.80432 2.1075 6.70432 2.2175L4.72432 3.9975L6.66432 5.1275L6.65431 5.1175Z"
                  fill="#FCC80B"
                />
              </svg>
            </div>

            <div class="lightning lightning2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
              >
                <path
                  d="M6.65431 5.1175C6.81431 5.2075 6.89432 5.3475 6.89432 5.5275C6.89432 5.7075 6.81431 5.8475 6.65431 5.9375L0.704315 9.3375C0.544315 9.4275 0.394315 9.4275 0.234315 9.3375C0.104315 9.2575 0.0243153 9.1475 0.00431532 8.9975C-0.0156847 8.8475 0.0343153 8.7175 0.144315 8.6075L2.82432 5.7875L0.814315 4.6175C0.694315 4.5475 0.614315 4.4375 0.594315 4.3075C0.564315 4.1775 0.594315 4.0475 0.674315 3.9275L3.56432 0.1775C3.63432 0.0775 3.72432 0.0275 3.84432 0.0075C3.96432 -0.0125 4.07432 0.0075 4.17431 0.0675L6.60432 1.4775C6.73432 1.5575 6.81432 1.6675 6.83432 1.8275C6.85432 1.9775 6.80432 2.1075 6.70432 2.2175L4.72432 3.9975L6.66432 5.1275L6.65431 5.1175Z"
                  fill="#FCC80B"
                />
              </svg>
            </div>
          </div>
        </div>
}

        <div class="poke-panels">
          {panel1Title &&
          <div class="poke-panel" style={{ order: panel1Order }}>
            <div class="poke-panel-content">
              <div class="poke-panel-image">
                <img
                  src={panel1Image}
                  alt={panel1Title}
                />
              </div>
              <div class="poke-panel-details">
                <h3>{panel1Title}</h3>
                <p>{panel1ReleaseDate}</p>
                <div class="poke-contains" dangerouslySetInnerHTML={{__html:panel1Items}} />
              </div>
            </div>
            <div class="store-selector">
              <div class="store-input-row">
                <span class="store-search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.0393 11.4384C13.2716 11.6966 13.2716 12.0839 13.0134 12.3163L12.2905 13.0393C12.0581 13.2975 11.6708 13.2975 11.4126 13.0393L8.85637 10.4831C8.72727 10.354 8.67563 10.199 8.67563 10.0441V9.60516C7.74609 10.3281 6.61 10.7413 5.37063 10.7413C2.40129 10.7413 0 8.33997 0 5.37063C0 2.42711 2.40129 4.64916e-06 5.37063 4.64916e-06C8.31414 4.64916e-06 10.7413 2.42711 10.7413 5.37063C10.7413 6.63583 10.3023 7.77192 9.60516 8.67563H10.0183C10.1732 8.67563 10.3281 8.75309 10.4572 8.85637L13.0393 11.4384ZM5.37063 8.67563C7.17805 8.67563 8.67563 7.20387 8.67563 5.37063C8.67563 3.56321 7.17805 2.06563 5.37063 2.06563C3.53738 2.06563 2.06563 3.56321 2.06563 5.37063C2.06563 7.20387 3.53738 8.67563 5.37063 8.67563Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>

                <span class="store-selected-icon" aria-hidden="true" hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M4.44109 12.9618C0.671328 7.53954 0 6.97149 0 4.9575C0 2.22055 2.19473 4.64916e-06 4.9575 4.64916e-06C7.69445 4.64916e-06 9.915 2.22055 9.915 4.9575C9.915 6.97149 9.21785 7.53954 5.44809 12.9618C5.2157 13.3233 4.67348 13.3233 4.44109 12.9618ZM4.9575 7.02313C6.09359 7.02313 7.02313 6.11942 7.02313 4.9575C7.02313 3.82141 6.09359 2.89188 4.9575 2.89188C3.79559 2.89188 2.89188 3.82141 2.89188 4.9575C2.89188 6.11942 3.79559 7.02313 4.9575 7.02313Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="store-input"
                  placeholder="Check your local store"
                  autocomplete="off"
                />
                <a class="store-details-selected" target="_blank" href="https://thetoyshop.com" rel="noreferrer" hidden>Details</a>
              </div>

              <div class="store-dropdown">
                <div class="store-scroll-area">
                  <ul className="store-list">
                    {filteredStores1.map(store => (
                      <li key={store.url} data-url={store.url}>
                        {store.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{fontSize: '12px'}}>Only stores listed may have stock</div>
            </div>
          </div>
          }

          {panel2Title &&
          <div class="poke-panel" style={{ order: panel2Order }}>
            <div class="poke-panel-content">
              <div class="poke-panel-image">
                <img
                  src={panel2Image}
                  alt={panel2Title}
                />
              </div>
              <div class="poke-panel-details">
                <h3>{panel2Title}</h3>
                <p>{panel2ReleaseDate}</p>
                <div class="poke-contains" dangerouslySetInnerHTML={{__html:panel2Items}} />
              </div>
            </div>
            <div class="store-selector">
              <div class="store-input-row">
                <span class="store-search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.0393 11.4384C13.2716 11.6966 13.2716 12.0839 13.0134 12.3163L12.2905 13.0393C12.0581 13.2975 11.6708 13.2975 11.4126 13.0393L8.85637 10.4831C8.72727 10.354 8.67563 10.199 8.67563 10.0441V9.60516C7.74609 10.3281 6.61 10.7413 5.37063 10.7413C2.40129 10.7413 0 8.33997 0 5.37063C0 2.42711 2.40129 4.64916e-06 5.37063 4.64916e-06C8.31414 4.64916e-06 10.7413 2.42711 10.7413 5.37063C10.7413 6.63583 10.3023 7.77192 9.60516 8.67563H10.0183C10.1732 8.67563 10.3281 8.75309 10.4572 8.85637L13.0393 11.4384ZM5.37063 8.67563C7.17805 8.67563 8.67563 7.20387 8.67563 5.37063C8.67563 3.56321 7.17805 2.06563 5.37063 2.06563C3.53738 2.06563 2.06563 3.56321 2.06563 5.37063C2.06563 7.20387 3.53738 8.67563 5.37063 8.67563Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>

                <span class="store-selected-icon" aria-hidden="true" hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M4.44109 12.9618C0.671328 7.53954 0 6.97149 0 4.9575C0 2.22055 2.19473 4.64916e-06 4.9575 4.64916e-06C7.69445 4.64916e-06 9.915 2.22055 9.915 4.9575C9.915 6.97149 9.21785 7.53954 5.44809 12.9618C5.2157 13.3233 4.67348 13.3233 4.44109 12.9618ZM4.9575 7.02313C6.09359 7.02313 7.02313 6.11942 7.02313 4.9575C7.02313 3.82141 6.09359 2.89188 4.9575 2.89188C3.79559 2.89188 2.89188 3.82141 2.89188 4.9575C2.89188 6.11942 3.79559 7.02313 4.9575 7.02313Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="store-input"
                  placeholder="Check your local store"
                  autocomplete="off"
                />
                <a class="store-details-selected" target="_blank" href="https://thetoyshop.com" rel="noreferrer" hidden>Details</a>
              </div>

              <div class="store-dropdown">
                <div class="store-scroll-area">
                  <ul className="store-list">
                    {filteredStores2.map(store => (
                      <li key={store.url} data-url={store.url}>
                        {store.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{fontSize: '12px'}}>Only stores listed may have stock</div>
            </div>
          </div>
          }

          {panel3Title &&
          <div class="poke-panel" style={{ order: panel3Order }}>
            <div class="poke-panel-content">
              <div class="poke-panel-image">
                <img
                  src={panel3Image}
                  alt={panel3Title}
                />
              </div>
              <div class="poke-panel-details">
                <h3>{panel3Title}</h3>
                <p>{panel3ReleaseDate}</p>
                <div class="poke-contains" dangerouslySetInnerHTML={{__html:panel3Items}} />
              </div>
            </div>
            <div class="store-selector">
              <div class="store-input-row">
                <span class="store-search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.0393 11.4384C13.2716 11.6966 13.2716 12.0839 13.0134 12.3163L12.2905 13.0393C12.0581 13.2975 11.6708 13.2975 11.4126 13.0393L8.85637 10.4831C8.72727 10.354 8.67563 10.199 8.67563 10.0441V9.60516C7.74609 10.3281 6.61 10.7413 5.37063 10.7413C2.40129 10.7413 0 8.33997 0 5.37063C0 2.42711 2.40129 4.64916e-06 5.37063 4.64916e-06C8.31414 4.64916e-06 10.7413 2.42711 10.7413 5.37063C10.7413 6.63583 10.3023 7.77192 9.60516 8.67563H10.0183C10.1732 8.67563 10.3281 8.75309 10.4572 8.85637L13.0393 11.4384ZM5.37063 8.67563C7.17805 8.67563 8.67563 7.20387 8.67563 5.37063C8.67563 3.56321 7.17805 2.06563 5.37063 2.06563C3.53738 2.06563 2.06563 3.56321 2.06563 5.37063C2.06563 7.20387 3.53738 8.67563 5.37063 8.67563Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>

                <span class="store-selected-icon" aria-hidden="true" hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M4.44109 12.9618C0.671328 7.53954 0 6.97149 0 4.9575C0 2.22055 2.19473 4.64916e-06 4.9575 4.64916e-06C7.69445 4.64916e-06 9.915 2.22055 9.915 4.9575C9.915 6.97149 9.21785 7.53954 5.44809 12.9618C5.2157 13.3233 4.67348 13.3233 4.44109 12.9618ZM4.9575 7.02313C6.09359 7.02313 7.02313 6.11942 7.02313 4.9575C7.02313 3.82141 6.09359 2.89188 4.9575 2.89188C3.79559 2.89188 2.89188 3.82141 2.89188 4.9575C2.89188 6.11942 3.79559 7.02313 4.9575 7.02313Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="store-input"
                  placeholder="Check your local store"
                  autocomplete="off"
                />
                <a class="store-details-selected" target="_blank" href="https://thetoyshop.com" rel="noreferrer" hidden>Details</a>
              </div>

              <div class="store-dropdown">
                <div class="store-scroll-area">
                  <ul className="store-list">
                    {filteredStores3.map(store => (
                      <li key={store.url} data-url={store.url}>
                        {store.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{fontSize: '12px'}}>Only stores listed may have stock</div>
            </div>
          </div>
          }

          {panel4Title &&
          <div class="poke-panel" style={{ order: panel4Order }}>
            <div class="poke-panel-content">
              <div class="poke-panel-image">
                <img
                  src={panel4Image}
                  alt={panel4Title}
                />
              </div>
              <div class="poke-panel-details">
                <h3>{panel4Title}</h3>
                <p>{panel4ReleaseDate}</p>
                <div class="poke-contains" dangerouslySetInnerHTML={{__html:panel4Items}} />
              </div>
            </div>
            <div class="store-selector">
              <div class="store-input-row">
                <span class="store-search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.0393 11.4384C13.2716 11.6966 13.2716 12.0839 13.0134 12.3163L12.2905 13.0393C12.0581 13.2975 11.6708 13.2975 11.4126 13.0393L8.85637 10.4831C8.72727 10.354 8.67563 10.199 8.67563 10.0441V9.60516C7.74609 10.3281 6.61 10.7413 5.37063 10.7413C2.40129 10.7413 0 8.33997 0 5.37063C0 2.42711 2.40129 4.64916e-06 5.37063 4.64916e-06C8.31414 4.64916e-06 10.7413 2.42711 10.7413 5.37063C10.7413 6.63583 10.3023 7.77192 9.60516 8.67563H10.0183C10.1732 8.67563 10.3281 8.75309 10.4572 8.85637L13.0393 11.4384ZM5.37063 8.67563C7.17805 8.67563 8.67563 7.20387 8.67563 5.37063C8.67563 3.56321 7.17805 2.06563 5.37063 2.06563C3.53738 2.06563 2.06563 3.56321 2.06563 5.37063C2.06563 7.20387 3.53738 8.67563 5.37063 8.67563Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <span class="store-selected-icon" aria-hidden="true" hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M4.44109 12.9618C0.671328 7.53954 0 6.97149 0 4.9575C0 2.22055 2.19473 4.64916e-06 4.9575 4.64916e-06C7.69445 4.64916e-06 9.915 2.22055 9.915 4.9575C9.915 6.97149 9.21785 7.53954 5.44809 12.9618C5.2157 13.3233 4.67348 13.3233 4.44109 12.9618ZM4.9575 7.02313C6.09359 7.02313 7.02313 6.11942 7.02313 4.9575C7.02313 3.82141 6.09359 2.89188 4.9575 2.89188C3.79559 2.89188 2.89188 3.82141 2.89188 4.9575C2.89188 6.11942 3.79559 7.02313 4.9575 7.02313Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="store-input"
                  placeholder="Check your local store"
                  autocomplete="off"
                />
                <a class="store-details-selected" target="_blank" href="https://thetoyshop.com" rel="noreferrer" hidden>Details</a>
              </div>
              <div class="store-dropdown">
                <div class="store-scroll-area">
                  <ul className="store-list">
                    {filteredStores4.map(store => (
                      <li key={store.url} data-url={store.url}>
                        {store.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{fontSize: '12px'}}>Only stores listed may have stock</div>
            </div>
          </div>
          }

          {panel5Title &&
          <div class="poke-panel" style={{ order: panel5Order }}>
            <div class="poke-panel-content">
              <div class="poke-panel-image">
                <img
                  src={panel5Image}
                  alt={panel5Title}
                />
              </div>
              <div class="poke-panel-details">
                <h3>{panel5Title}</h3>
                <p>{panel5ReleaseDate}</p>
                <div class="poke-contains" dangerouslySetInnerHTML={{__html:panel5Items}} />
              </div>
            </div>
            <div class="store-selector">
              <div class="store-input-row">
                <span class="store-search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.0393 11.4384C13.2716 11.6966 13.2716 12.0839 13.0134 12.3163L12.2905 13.0393C12.0581 13.2975 11.6708 13.2975 11.4126 13.0393L8.85637 10.4831C8.72727 10.354 8.67563 10.199 8.67563 10.0441V9.60516C7.74609 10.3281 6.61 10.7413 5.37063 10.7413C2.40129 10.7413 0 8.33997 0 5.37063C0 2.42711 2.40129 4.64916e-06 5.37063 4.64916e-06C8.31414 4.64916e-06 10.7413 2.42711 10.7413 5.37063C10.7413 6.63583 10.3023 7.77192 9.60516 8.67563H10.0183C10.1732 8.67563 10.3281 8.75309 10.4572 8.85637L13.0393 11.4384ZM5.37063 8.67563C7.17805 8.67563 8.67563 7.20387 8.67563 5.37063C8.67563 3.56321 7.17805 2.06563 5.37063 2.06563C3.53738 2.06563 2.06563 3.56321 2.06563 5.37063C2.06563 7.20387 3.53738 8.67563 5.37063 8.67563Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <span class="store-selected-icon" aria-hidden="true" hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M4.44109 12.9618C0.671328 7.53954 0 6.97149 0 4.9575C0 2.22055 2.19473 4.64916e-06 4.9575 4.64916e-06C7.69445 4.64916e-06 9.915 2.22055 9.915 4.9575C9.915 6.97149 9.21785 7.53954 5.44809 12.9618C5.2157 13.3233 4.67348 13.3233 4.44109 12.9618ZM4.9575 7.02313C6.09359 7.02313 7.02313 6.11942 7.02313 4.9575C7.02313 3.82141 6.09359 2.89188 4.9575 2.89188C3.79559 2.89188 2.89188 3.82141 2.89188 4.9575C2.89188 6.11942 3.79559 7.02313 4.9575 7.02313Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="store-input"
                  placeholder="Check your local store"
                  autocomplete="off"
                />
                <a class="store-details-selected" target="_blank" href="https://thetoyshop.com" rel="noreferrer" hidden>Details</a>
              </div>
              <div class="store-dropdown">
                <div class="store-scroll-area">
                  <ul className="store-list">
                    {filteredStores5.map(store => (
                      <li key={store.url} data-url={store.url}>
                        {store.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{fontSize: '12px'}}>Only stores listed may have stock</div>
            </div>
          </div>
          }

          {panel6Title &&
          <div class="poke-panel" style={{ order: panel6Order }}>
            <div class="poke-panel-content">
              <div class="poke-panel-image">
                <img
                  src={panel6Image}
                  alt={panel6Title}
                />
              </div>
              <div class="poke-panel-details">
                <h3>{panel6Title}</h3>
                <p>{panel6ReleaseDate}</p>
                <div class="poke-contains" dangerouslySetInnerHTML={{__html:panel6Items}} />
              </div>
            </div>
            <div class="store-selector">
              <div class="store-input-row">
                <span class="store-search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.0393 11.4384C13.2716 11.6966 13.2716 12.0839 13.0134 12.3163L12.2905 13.0393C12.0581 13.2975 11.6708 13.2975 11.4126 13.0393L8.85637 10.4831C8.72727 10.354 8.67563 10.199 8.67563 10.0441V9.60516C7.74609 10.3281 6.61 10.7413 5.37063 10.7413C2.40129 10.7413 0 8.33997 0 5.37063C0 2.42711 2.40129 4.64916e-06 5.37063 4.64916e-06C8.31414 4.64916e-06 10.7413 2.42711 10.7413 5.37063C10.7413 6.63583 10.3023 7.77192 9.60516 8.67563H10.0183C10.1732 8.67563 10.3281 8.75309 10.4572 8.85637L13.0393 11.4384ZM5.37063 8.67563C7.17805 8.67563 8.67563 7.20387 8.67563 5.37063C8.67563 3.56321 7.17805 2.06563 5.37063 2.06563C3.53738 2.06563 2.06563 3.56321 2.06563 5.37063C2.06563 7.20387 3.53738 8.67563 5.37063 8.67563Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <span class="store-selected-icon" aria-hidden="true" hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                  >
                    <path
                      d="M4.44109 12.9618C0.671328 7.53954 0 6.97149 0 4.9575C0 2.22055 2.19473 4.64916e-06 4.9575 4.64916e-06C7.69445 4.64916e-06 9.915 2.22055 9.915 4.9575C9.915 6.97149 9.21785 7.53954 5.44809 12.9618C5.2157 13.3233 4.67348 13.3233 4.44109 12.9618ZM4.9575 7.02313C6.09359 7.02313 7.02313 6.11942 7.02313 4.9575C7.02313 3.82141 6.09359 2.89188 4.9575 2.89188C3.79559 2.89188 2.89188 3.82141 2.89188 4.9575C2.89188 6.11942 3.79559 7.02313 4.9575 7.02313Z"
                      fill={panelsInputColor}
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="store-input"
                  placeholder="Check your local store"
                  autocomplete="off"
                />
                <a class="store-details-selected" target="_blank" href="https://thetoyshop.com" rel="noreferrer" hidden>Details</a>
              </div>
              <div class="store-dropdown">
                <div class="store-scroll-area">
                  <ul className="store-list">
                    {filteredStores6.map(store => (
                      <li key={store.url} data-url={store.url}>
                        {store.full}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{fontSize: '12px'}}>Only stores listed may have stock</div>
            </div>
          </div>
          }

          <div class="poke-promo-section" style={{order: 20}}>
            {promoPanel1Image &&
            <div class="poke-promo-tile">
              <a href={promoPanel1Link}>
                <img src={promoPanel1Image} alt={promoPanel1LinkText} />

                {promoPanel1LinkText &&
                <button class={`hero-button ${!promoPanel1LinkHasIcons && 'no-icons'}`}>
                  {promoPanel1LinkHasIcons &&
                  <span class="swoosh-container">
                    <span class="star-start">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                          fill-opacity="0.5"
                        ></path>
                      </svg>
                    </span>
                    <span class="swoosh"> </span>
                  </span>
                  }
                  {promoPanel1LinkText}
                  {promoPanel1LinkHasIcons &&
                  <>
                  <span class="basket-icon">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="star-end">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                        fill-opacity="0.5"
                      ></path>
                    </svg>
                  </span>
                  </>
                  }
                </button>
                }
              </a>
            </div>
            }

            {promoPanel2Image &&
            <div class="poke-promo-tile">
              <a href={promoPanel2Link}>
                <img src={promoPanel2Image} alt={promoPanel2LinkText} />

                {promoPanel2LinkText &&
                <button class={`hero-button ${!promoPanel2LinkHasIcons && 'no-icons'}`}>
                  {promoPanel2LinkHasIcons &&
                  <span class="swoosh-container">
                    <span class="star-start">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                          fill-opacity="0.5"
                        ></path>
                      </svg>
                    </span>
                    <span class="swoosh"> </span>
                  </span>
                  }
                  {promoPanel2LinkText}
                  {promoPanel2LinkHasIcons &&
                  <>
                  <span class="basket-icon">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="star-end">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                        fill-opacity="0.5"
                      ></path>
                    </svg>
                  </span>
                  </>
                  }
                </button>
                }
              </a>
            </div>
            }

            {promoPanel3Image &&
            <div class="poke-promo-tile">
              <a href={promoPanel3Link}>
                <img src={promoPanel3Image} alt={promoPanel3LinkText} />

                {promoPanel3LinkText &&
                <button class={`hero-button ${!promoPanel3LinkHasIcons && 'no-icons'}`}>
                  {promoPanel3LinkHasIcons &&
                  <span class="swoosh-container">
                    <span class="star-start">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                          fill-opacity="0.5"
                        ></path>
                      </svg>
                    </span>
                    <span class="swoosh"> </span>
                  </span>
                  }
                  {promoPanel3LinkText}
                  {promoPanel3LinkHasIcons &&
                  <>
                  <span class="basket-icon">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="star-end">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                        fill-opacity="0.5"
                      ></path>
                    </svg>
                  </span>
                  </>
                  }
                </button>
                }
              </a>
            </div>
            }

        </div>
      </div>
    </div>
      
    <script>{`

      document.querySelectorAll(".store-selector").forEach((selector) => {
    const input = selector.querySelector(".store-input");
    const dropdown = selector.querySelector(".store-dropdown");
    const list = selector.querySelector(".store-list");
    const listItems = list.querySelectorAll("li");
    const detailsLink = selector.querySelector(".store-details-selected");
    const searchIcon = selector.querySelector(".store-search-icon");
    const selectedIcon = selector.querySelector(".store-selected-icon");

    // --- NEW: Sort list alphabetically ---
    const sortedItems = Array.from(listItems).sort((a, b) => 
      a.textContent.trim().localeCompare(b.textContent.trim())
    );
    sortedItems.forEach((item) => list.appendChild(item));

    // Initialize icons
    searchIcon.hidden = false;
    selectedIcon.hidden = true;

    // Handle input filtering
    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();

      list.querySelectorAll("li").forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "" : "none";
      });

      // Optional: keep the first matching item in view
      const firstVisible = Array.from(list.children).find(
        (li) => li.style.display !== "none"
      );
      if (firstVisible) {
        firstVisible.scrollIntoView({ block: "nearest" });
      }
    });

    // Handle dropdown toggle
    input.addEventListener("focus", () => {
      dropdown.style.display = "block";
    });

    input.addEventListener("blur", () => {
      setTimeout(() => {
        dropdown.style.display = "none";
      }, 100); // small delay to allow click on list items
    });

    // Handle selecting a store
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        input.value = item.textContent.trim();
        dropdown.style.display = "none";
        searchIcon.hidden = true;
        selectedIcon.hidden = false;

        // --- NEW: show details button with correct URL ---
        if (item.dataset.url) {
          detailsLink.href = item.dataset.url;
          detailsLink.hidden = false;
        } else {
          detailsLink.href = "#";
          detailsLink.hidden = true;
        }
      });
    });
  });
      `}
    </script>
  </>
  );
};

PokemonLaunch.propTypes = {
  pageBackgroundColor: PropTypes.string,
  pageTitle: PropTypes.string,
  pageTitleColor: PropTypes.string,
  pageTitleStroke: PropTypes.string,
  introBlurb: PropTypes.string,
  introBlurbColor: PropTypes.string,
  secondaryTitle: PropTypes.string,
  secondaryTitleColor: PropTypes.string,
  panelsBackgroundColor: PropTypes.string,
  panelsBorderColor: PropTypes.string,
  panelsTextColor: PropTypes.string,
  panelsInputColor: PropTypes.string,
  panelsInputDetailsHoverColor: PropTypes.string,
  panelsInputActiveBorderColor: PropTypes.string,
  promoPanelsStoresListHoverBackgroundColor: PropTypes.string,
  panelsStoreslistColor: PropTypes.string,
  panelsStoresListBorderColor: PropTypes.string,
  panelsInputBorderColor: PropTypes.string,
  panelInputActiveBorderColor: PropTypes.string,
  panel1Title: PropTypes.string,
  panel1Order: PropTypes.number,
  panel1Stores: PropTypes.arrayOf(PropTypes.string),
  panel1Image: PropTypes.string,
  panel1ReleaseDate: PropTypes.string,
  panel1Items: PropTypes.string,
  panel2Order: PropTypes.number,
  panel2Title: PropTypes.string,
  panel2Stores: PropTypes.arrayOf(PropTypes.string),
  panel2Image: PropTypes.string,
  panel2ReleaseDate: PropTypes.string,
  panel2Items: PropTypes.string,
  panel3Order: PropTypes.number,
  panel3Title: PropTypes.string,
  panel3Stores: PropTypes.arrayOf(PropTypes.string),
  panel3Image: PropTypes.string,
  panel3ReleaseDate: PropTypes.string,
  panel3Items: PropTypes.string,
  panel4Order: PropTypes.number,
  panel4Title: PropTypes.string,
  panel4Stores: PropTypes.arrayOf(PropTypes.string),
  panel4Image: PropTypes.string,
  panel4ReleaseDate: PropTypes.string,
  panel4Items: PropTypes.string,
  panel5Order: PropTypes.number,
  panel5Title: PropTypes.string,
  panel5Stores: PropTypes.arrayOf(PropTypes.string),
  panel5Image: PropTypes.string,
  panel5ReleaseDate: PropTypes.string,
  panel5Items: PropTypes.string,
  panel6Order: PropTypes.number,
  panel6Title: PropTypes.string,
  panel6Stores: PropTypes.arrayOf(PropTypes.string),
  panel6Image: PropTypes.string,
  panel6ReleaseDate: PropTypes.string,
  panel6Items: PropTypes.string,
  promoPanel1Image: PropTypes.string,
  promoPanel1Link: PropTypes.string,
  promoPanel1LinkText: PropTypes.string,
  promoPanel2Image: PropTypes.string,
  promoPanel2Link: PropTypes.string,
  promoPanel2LinkText: PropTypes.string,
  promoPanel3Image: PropTypes.string,
  promoPanel3Link: PropTypes.string,
  promoPanel3LinkText: PropTypes.string,
  promoPanel1LinkHasIcons: PropTypes.bool,
  promoPanel2LinkHasIcons: PropTypes.bool,
  promoPanel3LinkHasIcons: PropTypes.bool,
  promoPanelsButtonBackgroundColor: PropTypes.string,
  promoPanelsButtonTextColor: PropTypes.string,
  promoPanelsButtonBorderColor: PropTypes.string,
  promoPanelsButtonHoverBackgroundColor: PropTypes.string,
  promoPanelsButtonHoverTextColor: PropTypes.string,
  promoPanelsButtonHoverBorderColor: PropTypes.string,
};
