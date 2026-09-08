import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";

const getHotspots = (hotspots) => {
  if (hotspots && typeof hotspots === "object") {
    return Object.entries(hotspots).map(([id, hotspot]) => ({
      id: Number(id),

      top:
        typeof hotspot.top === "number"
          ? `${hotspot.top}%`
          : hotspot.top || "50%",

      left:
        typeof hotspot.left === "number"
          ? `${hotspot.left}%`
          : hotspot.left || "50%",
    }));
  }

  return [];
};

const getPanels = (props) => {
  const panels = {};

  for (let i = 1; i <= 10; i++) {
    panels[i] = {
      title: props[`hotspotPanel${i}Title`] || "",
      shopLink: props[`hotspotPanel${i}ShopLink`] || "",
      infoLink: props[`hotspotPanel${i}InfoLink`] || "",
    };
  }

  return panels;
};

const buildHotspotHTML = (hotspots) => {
  return hotspots
    .map(
      (hotspot) => `
        <button
          type="button"
          class="hotspot"
          id="spot-${hotspot.id}"
          style="top:${hotspot.top};left:${hotspot.left};"
          data-hotspot-id="${hotspot.id}"
          aria-label="Hotspot ${hotspot.id}"
        ></button>
      `,
    )
    .join("");
};

const buildToysData = (hotspots, panels) => {
  return hotspots
    .map((hotspot) => {
      const panel = panels[hotspot.id] || {};

      return `
        ${hotspot.id}: {
          title: ${JSON.stringify(panel.title || `Toy ${hotspot.id}`)},
          shopLink: ${JSON.stringify(panel.shopLink || "")},
          infoLink: ${JSON.stringify(panel.infoLink || "")}
        }
      `;
    })
    .join(",\n");
};

const buildCMSHTML = (props) => {
  const desktopHotspots = getHotspots(props.hotspots);

  const mobileHotspots = getHotspots(props.mobileHotspots);

  const panels = getPanels(props);

  const desktopHotspotHTML = buildHotspotHTML(desktopHotspots);

  const mobileHotspotHTML = buildHotspotHTML(mobileHotspots);

  const toysData = buildToysData(desktopHotspots, panels);

  return `
<style>

.hotspots-module {
  --entertainer-red: #E31B23;
  --entertainer-blue: #00A4E4;
  --festive-gold: #FFB81C;

  font-family:
    'Segoe UI',
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;

  color: #ffffff;
  width: 100%;
  position: relative;
}

.hotspots-module *,
.hotspots-module *::before,
.hotspots-module *::after {
  box-sizing: border-box;
}

.hotspots-version {
  position: relative;
  width: 100%;
}

.hotspots-desktop {
  display: block;
}

.hotspots-mobile {
  display: none;
}

@media (max-width: 767px) {

  .hotspots-desktop {
    display: none;
  }

  .hotspots-mobile {
    display: block;
  }

}

.hotspots-scene-container {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
}

.hotspots-image-wrapper {
  position: relative;
  width: 100%;
  line-height: 0;
  border-radius: 12px;
  overflow: hidden;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,0.5);

  border:
    2px solid
    rgba(255,255,255,0.1);
}

.hotspots-image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.hotspot {
  position: absolute;

  width: 22px;
  height: 22px;

  padding: 0;

  background-color: var(--entertainer-blue);

  border: 2px solid #ffffff;
  border-radius: 50%;

  cursor: pointer;

  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  box-shadow:
    0 0 0 0 rgba(0,164,228,0.7);

  animation: hotspotsPulse 2s infinite;

  font-size: 0;
}

.hotspot::before {
  content: "★";
  color: #ffffff;
  font-size: 12px;
  line-height: 1;
}

.hotspot:hover,
.hotspot.active {
  transform: translate(-50%, -50%) scale(1.2);
  background-color: var(--festive-gold);
}

@media (min-width: 768px) {
  .hotspot {
    width: 34px;
    height: 34px;
  }

  .hotspot::before {
    font-size: 16px;
  }
}

.hotspot::before {
  content: "★";
  color: #ffffff;
  font-size: 12px;
  line-height: 1;
}

.hotspot:hover,
.hotspot.active {
  transform: translate(-50%, -50%) scale(1.2);
  background-color: var(--festive-gold);
}

@media (min-width: 768px) {
  .hotspot {
    width: 34px;
    height: 34px;
  }

  .hotspot::before {
    font-size: 16px;
  }
}

.hotspot:hover,
.hotspot.active {
  transform:
    translate(-50%, -50%)
    scale(1.25);

  background-color:
    var(--festive-gold);

  z-index: 20;
}

@keyframes hotspotsPulse {

  0% {
    box-shadow:
      0 0 0 0
      rgba(0,164,228,.7);
  }

  70% {
    box-shadow:
      0 0 0 12px
      rgba(0,164,228,0);
  }

  100% {
    box-shadow:
      0 0 0 0
      rgba(0,164,228,0);
  }

}

@media (min-width: 768px) {

  .hotspot {
    width: 30px;
    height: 30px;
  }

}


.hotspots-toy-preview-card {
  position: absolute;

  width: 280px;
  min-height: 120px;

  background: #ffffff;
  color: #2d3748;

  padding: 20px;

  border-radius: 18px;

  box-shadow:
    0 15px 45px
    rgba(0,0,0,.35);

  z-index: 999999;

  box-sizing: border-box;

  display: none;
}

.hotspots-toy-preview-card.open {
  display: block;

  animation:
    hotspotsCardIn
    .22s
    cubic-bezier(.16,1,.3,1)
    both;
}

.hotspots-toy-preview-card::after {
  content: "";

  position: absolute;

  width: 14px;
  height: 14px;

  background: #ffffff;

  transform: rotate(45deg);

  left: 50%;

  margin-left: -7px;
}

.hotspots-toy-preview-card::after {
  content: "";

  position: absolute;

  width: 14px;
  height: 14px;

  background: #ffffff;

  transform: rotate(45deg);

  left: 50%;

  margin-left: -7px;

  bottom: -7px;
}

@keyframes hotspotsCardIn {

  from {
    opacity: 0;

    transform:
      translateY(8px)
      scale(.96);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }

}

.hotspots-card-close {
  position: absolute;

  top: 10px;
  right: 10px;

  width: 28px;
  height: 28px;

  border: none;
  border-radius: 50%;

  background: #edf2f7;
  color: #4a5568;

  font-size: 18px;
  line-height: 28px;

  padding: 0;

  cursor: pointer;

  z-index: 2;
}

.hotspots-card-close:hover {
  background: #e2e8f0;
}

.hotspots-card-title {
  margin: 0 30px 20px 0;
  color: #1a202c;
  font-size: 20px;
  line-height: 1.1;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  font-weight: bold;
  text-align: center;
}

.hotspots-card-buttons {
  display: flex;
  gap: 8px;
}

.hotspots-card-button {
  display: block;

  flex: 1;

  box-sizing: border-box;

  padding:
    10px 12px;

  background:
    #009E44;

  color:
    #ffffff;

  border-radius:
    999px;

  text-align:
    center;

  text-decoration:
    none;

  font-size:
    12px;

  font-weight:
    700;
    transition: all 0.3s;
}

.hotspots-card-button.info {
  background:
    #0d5d9c;
}

.hotspots-card-button:hover {
  transform: scale(1.1);
  background: #AFCB17;
}

.hotspots-card-button.info:hover {
  background: #ee3224;
}

@media (max-width: 600px) {

  .hotspots-toy-preview-card {
    width:
      calc(100vw - 30px);

    max-width:
      340px;
  }

}

@media (max-width: 400px) {

  .hotspots-card-buttons {
    flex-direction:
      column;
  }

}

.hot-spots-hub-area {
      width: 100%;
       max-width: 1440px;
      padding: 10px 20px;
      margin: 0 auto;
  }
  .hot-spots-hub-area-header {
    width: 100%;
     max-width: 1440px;
    padding: 10px 20px;
    margin: 0 auto;
    text-align: center;
  }

  .hot-spots-hub-area-header .hot-spots-hub-area-header-title {
    text-transform: uppercase;
    background: var(--shop-by-category-lozenge-bg);
    color: var(--shop-by-category-lozenge-text-color);
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
    backdrop-filter: blur(2px); /* optional slight blur for glass effect */
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
}

</style>

<div class="hotspots-module-outer" style="background-color:${props.modulebackgroundcolor}">
<div class="hotspots-module">

  ${props.lozengetitle &&
  `<div class="hot-spots-hub-area-header">
    <div class="hot-spots-hub-area-header-title"
      style="background-color:${props.lozengebackgroundcolor};color:${props.lozengetextcolor}"
    >
      ${props.lozengetitle}
    </div>
  </div>`
  }

  <div class="hotspots-version hotspots-desktop">

    <div class="hotspots-scene-container">

      <div class="hotspots-image-wrapper">

        <img
          src="${props.image || ""}"
          alt="${props.imageAlt || ""}"
        />

        ${desktopHotspotHTML}

      </div>

    </div>

  </div>


  <div class="hotspots-version hotspots-mobile">

    <div class="hotspots-scene-container">

      <div class="hotspots-image-wrapper">

        <img
          src="${props.mobileImage || props.image || ""}"
          alt="${props.imageAlt || ""}"
        />

        ${mobileHotspotHTML}

      </div>

    </div>

  </div>


  <div
    id="hotspotsToyCard"
    class="hotspots-toy-preview-card"
  >

    <button
      type="button"
      class="hotspots-card-close"
      onclick="closeHotspotsCard()"
      aria-label="Close"
    >
      ×
    </button>

    <div class="hotspots-card-content">

      <div
        id="hotspotsCardTitle"
        class="hotspots-card-title"
      >
        Toy Name
      </div>

      <div class="hotspots-card-buttons">

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          id="hotspotsCardShopLink"
          class="hotspots-card-button"
        >
          Shop
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          id="hotspotsCardInfoLink"
          class="hotspots-card-button info"
        >
          Info
        </a>

      </div>

    </div>

  </div>
</div>
</div>


<script>
(function () {

  var toysData = {
    ${toysData}
  };


  function findHotspot(spotId) {

    var hotspots =
      document.querySelectorAll(
        '.hotspots-module .hotspot'
      );

    for (
      var i = 0;
      i < hotspots.length;
      i++
    ) {

      if (
        hotspots[i].getAttribute(
          'data-hotspot-id'
        ) === String(spotId)
      ) {

        return hotspots[i];

      }

    }

    return null;

  }

  window.openToy = function (spotId, hotspot) {

    var data =
      toysData[spotId];

    if (!data || !hotspot) {
      return;
    }

    var title =
      document.getElementById(
        'hotspotsCardTitle'
      );

    var shopLink =
      document.getElementById(
        'hotspotsCardShopLink'
      );

    var infoLink =
      document.getElementById(
        'hotspotsCardInfoLink'
      );

    var card =
      document.getElementById(
        'hotspotsToyCard'
      );

    var module =
      hotspot.closest(
        '.hotspots-module'
      );


    if (!card || !module) {
      return;
    }

    if (title) {
      title.textContent =
        data.title;
    }

    if (shopLink) {
      if (data.shopLink) {
        shopLink.href = data.shopLink;
        shopLink.style.display = 'block';
      } else {
        shopLink.style.display = 'none';
      }
    }

    if (infoLink) {
      if (data.infoLink) {
        infoLink.href = data.infoLink;
        infoLink.style.display = 'block';
      } else {
        infoLink.style.display = 'none';
      }
    }

    var hotspots =
      module.querySelectorAll(
        '.hotspot'
      );

    for (
      var i = 0;
      i < hotspots.length;
      i++
    ) {

      hotspots[i].classList.remove(
        'active'
      );

    }

    hotspot.classList.add(
      'active'
    );

    var hotspotRect =
      hotspot.getBoundingClientRect();

    var moduleRect =
      module.getBoundingClientRect();

    var cardWidth = 280;
    var cardHeight = 150;
    var gap = 16;

    var hotspotLeft =
      hotspotRect.left -
      moduleRect.left;

    var hotspotTop =
      hotspotRect.top -
      moduleRect.top;

    var left =
      hotspotLeft +
      (hotspotRect.width / 2) -
      (cardWidth / 2);

    var top =
      hotspotTop -
      cardHeight -
      gap;

    var moduleWidth =
      moduleRect.width;

    if (
      left + cardWidth >
      moduleWidth - 10
    ) {

      left =
        moduleWidth -
        cardWidth -
        10;

    }

    if (left < 10) {
      left = 10;
    }

    card.style.left =
      left + 'px';

    card.style.top =
      top + 'px';

    card.classList.add(
      'open'
    );

  };

  window.closeHotspotsCard =
    function () {

      var card =
        document.getElementById(
          'hotspotsToyCard'
        );

      if (card) {

        card.classList.remove(
          'open'
        );

      }


      var hotspots =
        document.querySelectorAll(
          '.hotspots-module .hotspot'
        );

      for (
        var i = 0;
        i < hotspots.length;
        i++
      ) {

        hotspots[i].classList.remove(
          'active'
        );

      }

    };

  var hotspots =
    document.querySelectorAll(
      '.hotspots-module .hotspot'
    );

  for (
    var i = 0;
    i < hotspots.length;
    i++
  ) {

    hotspots[i].addEventListener(
      'click',
      function () {

        var id =
          this.getAttribute(
            'data-hotspot-id'
          );

        window.openToy(
          Number(id),
          this
        );

      }
    );

  }


})();
</script>
`;
};

export const Hotspots = (props) => {
  const { image, mobileImage, imageAlt, previewMode, modulebackgroundcolor, lozengetitle, lozengebackgroundcolor, lozengetextcolor } = props;

  const desktopHotspots = getHotspots(props.hotspots);

  const mobileHotspots = getHotspots(props.mobileHotspots);

  const panels = getPanels(props);

  const cmsHTML = buildCMSHTML(props);

  const [activeHotspotId, setActiveHotspotId] = useState(null);

  const [cardPosition, setCardPosition] = useState({
    top: 0,
    left: 0,
    placement: "above",
  });

  const activeElementRef = useRef(null);

  const isMobilePreview = previewMode === "mobile";

  const activeHotspots = isMobilePreview ? mobileHotspots : desktopHotspots;

  const activeHotspot = activeHotspots.find(
    (hotspot) => hotspot.id === activeHotspotId,
  );

  const activePanel = panels[activeHotspotId] || {};

  const updateCardPosition = () => {
    if (!activeElementRef.current) {
      return;
    }

    const hotspotRect = activeElementRef.current.getBoundingClientRect();

    const cardWidth = 280;
    const cardHeight = 150;
    const gap = 14;

    const viewportWidth = window.innerWidth;

    const viewportHeight = window.innerHeight;

    let left = hotspotRect.left + hotspotRect.width / 2 - cardWidth / 2;

    let top = hotspotRect.top - cardHeight - gap;

    let placement = "above";

    left = Math.max(10, Math.min(left, viewportWidth - cardWidth - 10));

    if (top < 10) {
      top = hotspotRect.bottom + gap;

      placement = "below";
    }

    if (top + cardHeight > viewportHeight - 10) {
      top = Math.max(10, viewportHeight - cardHeight - 10);
    }

    setCardPosition({
      top,
      left,
      placement,
    });
  };

  useEffect(() => {
    if (activeHotspotId === null) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      updateCardPosition();
    });

    const handleResize = () => {
      updateCardPosition();
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleResize, true);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("scroll", handleResize, true);
    };
  }, [activeHotspotId, previewMode]);

  const handleHotspotClick = (hotspot, event) => {
    event.stopPropagation();

    if (activeHotspotId === hotspot.id) {
      setActiveHotspotId(null);

      activeElementRef.current = null;

      return;
    }

    activeElementRef.current = event.currentTarget;

    setActiveHotspotId(hotspot.id);
  };

  const closeCard = () => {
    setActiveHotspotId(null);

    activeElementRef.current = null;
  };

  useEffect(() => {
    setActiveHotspotId(null);

    activeElementRef.current = null;
  }, [previewMode]);

  return (
    <>
      <style>
        {`

          .storybook-hotspots-module {
            width: 100%;
            max-width: 1440px
            margin: 0 auto;
          }


          .storybook-hotspots-scene {
            position: relative;
            width: 100%;
            max-width: 1440px;
            margin: 20px auto;
            padding: 0 20px;
          }


          .storybook-hotspots-image-wrapper {
            position: relative;
            width: 100%;
            line-height: 0;
            border-radius: 12px;
            overflow: visible;
            border:
              2px solid
              rgba(255,255,255,0.1);
            user-select: none;
          }


          .storybook-hotspots-image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            user-select: none;
            pointer-events: none;
            -webkit-user-drag: none;
            border-radius: 10px;
          }


          .storybook-hotspot {
            position: absolute;
            width: 34px;
            height: 34px;
            padding: 0;
            background: #ffffff;
            border: 2px solid #00A4E4;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 30;
            cursor: pointer;
            box-shadow: 0 0 0 0 rgba(0,164,228,.7);
            animation: storybookHotspotPulse 2s infinite;
            transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
            font-size: 0;
          }

          .storybook-hotspot::before {
            content: "★";
            color: #00A4E4;
            font-size: 16px;
            line-height: 1;
          }

          .storybook-hotspot:hover,
          .storybook-hotspot-active {
            transform: translate(-50%, -50%) scale(1.2);
            background: #FFB81C;
            border-color: #FFB81C;
          }

          .storybook-hotspot:hover::before,
          .storybook-hotspot-active::before {
            color: #ffffff;
          }


          .storybook-hotspot-active {
            transform:
              translate(-50%, -50%)
              scale(1.3) !important;
            background: #FFB81C !important;
            box-shadow:
              0 0 0 6px
              rgba(255,184,28,.25);
            animation: none;
            z-index: 50;
          }


          @keyframes storybookHotspotPulse {

            0% {
              box-shadow:
                0 0 0 0
                rgba(0,164,228,.7);
            }

            70% {
              box-shadow:
                0 0 0 12px
                rgba(0,164,228,0);
            }

            100% {
              box-shadow:
                0 0 0 0
                rgba(0,164,228,0);
            }

          }


          .storybook-hotspot-card {
            position: fixed;
            width: 280px;
            min-height: 150px;
            background: #ffffff;
            color: #2d3748;
            padding: 20px;
            border-radius: 18px;
            box-shadow:
              0 15px 45px
              rgba(0,0,0,.35);
            z-index: 999999;
            box-sizing: border-box;
            animation:
              storybookHotspotCardIn
              .22s
              cubic-bezier(.16,1,.3,1)
              both;
          }


          .storybook-hotspot-card::after {
            content: "";
            position: absolute;
            width: 14px;
            height: 14px;
            background: #ffffff;
            transform: rotate(45deg);
            left: 50%;
            margin-left: -7px;
          }


          .storybook-hotspot-card.above::after {
            bottom: -7px;
          }


          .storybook-hotspot-card.below::after {
            top: -7px;
          }


          @keyframes storybookHotspotCardIn {

            from {
              opacity: 0;
              transform:
                translateY(8px)
                scale(.96);
            }


            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }

          }


          .storybook-hotspot-card-close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 28px;
            height: 28px;
            border: none;
            border-radius: 50%;
            background: #edf2f7;
            color: #4a5568;
            font-size: 18px;
            line-height: 28px;
            padding: 0;
            cursor: pointer;
            z-index: 2;
          }


          .storybook-hotspot-card-close:hover {
            background: #e2e8f0;
          }


          .storybook-hotspot-card-title {
            margin:
              0 30px 20px 0;
            color: #1a202c;
            font-size: 20px;
            line-height: 1.1;
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
            font-weight: bold;
            text-align: center;
          }


          .storybook-hotspot-card-buttons {
            display: flex;
            gap: 8px;
          }


          .storybook-hotspot-card-link {
            display: block;
            flex: 1;
            box-sizing: border-box;
            padding: 10px 12px;
            background: #009E44;
            color: #ffffff;
            border-radius: 999px;
            text-align: center;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            transition: all 0.3s;
          }


          .storybook-hotspot-card-link.info {
            background: #0d5d9c
          }


          .storybook-hotspot-card-link:hover {
            background: #AFCB17;
            transform: scale(1.1);
          }

          .storybook-hotspot-card-link.info:hover {
            background: #ee3224;
          }


          @media (max-width: 600px) {

            .storybook-hotspot-card {
              width:
                calc(100vw - 30px);
              max-width: 340px;
            }

          }


          @media (max-width: 400px) {

            .storybook-hotspot-card-buttons {
              flex-direction: column;
            }

          }

          .hot-spots-hub-area {
      width: 100%;
      max-width: 1140px;
      padding: 10px 20px;
      margin: 0 auto;
  }
  .hot-spots-hub-area-header {
    width: 100%;
    max-width: 1440px;
    padding: 10px 20px;
    margin: 0 auto;
    text-align: center;
  }

  .hot-spots-hub-area-header .hot-spots-hub-area-header-title {
    text-transform: uppercase;
    background: var(--shop-by-category-lozenge-bg);
    color: var(--shop-by-category-lozenge-text-color);
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
    backdrop-filter: blur(2px); /* optional slight blur for glass effect */
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
}

        `}
      </style>
      <div className="storybook-hotspots-module-outer" style={{ backgroundColor: modulebackgroundcolor }}>
        {lozengetitle &&
        <div class="hot-spots-hub-area-header">
          <div class="hot-spots-hub-area-header-title"
            style={{
              backgroundColor: lozengebackgroundcolor,
              color: lozengetextcolor,
            }}
          >
            {lozengetitle}
          </div>
        </div>
        }
      <div
        className="storybook-hotspots-module"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeCard();
          }
        }}
      >
        <div className="storybook-hotspots-scene">
          <div className="storybook-hotspots-image-wrapper">
            {(isMobilePreview ? mobileImage : image) && (
              <img
                src={isMobilePreview ? mobileImage : image}
                alt={imageAlt || ""}
                draggable={false}
              />
            )}

            {activeHotspots.map((hotspot) => {
              const isActive = activeHotspotId === hotspot.id;

              return (
                <div
                  key={hotspot.id}
                  ref={isActive ? activeElementRef : null}
                  className={`
                      storybook-hotspot
                      ${isActive ? "storybook-hotspot-active" : ""}
                    `}
                  style={{
                    top: hotspot.top,
                    left: hotspot.left,
                  }}
                  onClick={(event) => handleHotspotClick(hotspot, event)}
                >
                  {hotspot.id}
                </div>
              );
            })}
          </div>
        </div>

        {activeHotspot && (
          <div
            className={`
              storybook-hotspot-card
              ${cardPosition.placement}
            `}
            style={{
              top: cardPosition.top,
              left: cardPosition.left,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="storybook-hotspot-card-close"
              onClick={closeCard}
              aria-label="Close"
            >
              ×
            </button>

            <div className="storybook-hotspot-card-title">
              {activePanel.title || `Toy ${activeHotspot.id}`}
            </div>

            <div className="storybook-hotspot-card-buttons">
              {activePanel.shopLink && (
                <a
                  href={activePanel.shopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="storybook-hotspot-card-link"
                >
                  Shop
                </a>
              )}

              {activePanel.infoLink && (
                <a
                  href={activePanel.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="storybook-hotspot-card-link info"
                >
                  Info
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      </div>

      <div
        className="storybook-hotspots-export"
        style={{
          display: "none",
        }}
        dangerouslySetInnerHTML={{
          __html: cmsHTML,
        }}
      />
    </>
  );
};

Hotspots.propTypes = {
  modulebackgroundcolor: PropTypes.string,

  lozengetitle: PropTypes.string,

  lozengebackgroundcolor: PropTypes.string,

  lozengetextcolor: PropTypes.string,

  image: PropTypes.string,

  mobileImage: PropTypes.string,

  imageAlt: PropTypes.string,

  previewMode: PropTypes.oneOf(["desktop", "mobile"]),

  hotspots: PropTypes.object,

  mobileHotspots: PropTypes.object,

  hotspotPanel1Title: PropTypes.string,

  hotspotPanel1ShopLink: PropTypes.string,

  hotspotPanel1InfoLink: PropTypes.string,

  hotspotPanel2Title: PropTypes.string,

  hotspotPanel2ShopLink: PropTypes.string,

  hotspotPanel2InfoLink: PropTypes.string,

  hotspotPanel3Title: PropTypes.string,

  hotspotPanel3ShopLink: PropTypes.string,

  hotspotPanel3InfoLink: PropTypes.string,

  hotspotPanel4Title: PropTypes.string,

  hotspotPanel4ShopLink: PropTypes.string,

  hotspotPanel4InfoLink: PropTypes.string,

  hotspotPanel5Title: PropTypes.string,

  hotspotPanel5ShopLink: PropTypes.string,

  hotspotPanel5InfoLink: PropTypes.string,

  hotspotPanel6Title: PropTypes.string,

  hotspotPanel6ShopLink: PropTypes.string,

  hotspotPanel6InfoLink: PropTypes.string,

  hotspotPanel7Title: PropTypes.string,

  hotspotPanel7ShopLink: PropTypes.string,

  hotspotPanel7InfoLink: PropTypes.string,

  hotspotPanel8Title: PropTypes.string,

  hotspotPanel8ShopLink: PropTypes.string,

  hotspotPanel8InfoLink: PropTypes.string,

  hotspotPanel9Title: PropTypes.string,

  hotspotPanel9ShopLink: PropTypes.string,

  hotspotPanel9InfoLink: PropTypes.string,

  hotspotPanel10Title: PropTypes.string,

  hotspotPanel10ShopLink: PropTypes.string,

  hotspotPanel10InfoLink: PropTypes.string,
};
